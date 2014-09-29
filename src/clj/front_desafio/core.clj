(ns front-desafio.core
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [clojure.core.async :as async :refer [<! <!! chan go thread]]
            [clojure.core.cache :as cache]
            ;[ring.util.response :as resp]
            [taoensso.sente :as s]
            [org.httpkit.server :as kit]
            [cheshire.core :as json]
            [ring.util.response :refer [file-response]]
            [clojure.java.io :as io]))

;; create the Sente web socket connection stuff when we are loaded:

(let [{:keys [ch-recv send-fn ajax-post-fn
              ajax-get-or-ws-handshake-fn] :as sente-info}
      (s/make-channel-socket! {})]
  (def ring-ajax-post   ajax-post-fn)
  (def ring-ajax-get-ws ajax-get-or-ws-handshake-fn)
  (def ch-chsk          ch-recv)
  (def chsk-send!       send-fn))

;; session cache to maintain authentication - so we can rely
;; entirely on socket communication instead of needing to login
;; to the application first: 20 minutes of inactive will log you out

(def session-map (atom (cache/ttl-cache-factory {} :ttl (* 20 60 1000))))

(defn keep-alive
  "Given a UID, keep it alive."
  [uid]
  (println "keep-alive" uid (java.util.Date.))
  (when-let [token (get @session-map uid)]
    (swap! session-map assoc uid token)))

(defn add-token
  "Given a UID and a token, remember it."
  [uid token]
  (println "add-token" uid token (java.util.Date.))
  (swap! session-map assoc uid token))

(defn get-token
  "Given a UID, retrieve the associated token, if any."
  [uid]
  (let [token (get @session-map uid)]
    (println "get-token" uid token (java.util.Date.))
    token))

(defn unique-id
  "Return a really unique ID (for an unsecured session ID).
  No, a random number is not unique enough. Use a UUID for real!"
  []
  (rand-int 10000))


(defn session-uid
  "Convenient to extract the UID that Sente needs from the request."
  [req]
  (get-in req [:session :uid]))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defn index []
  (file-response "public/index.html" {:root "resources"}))

(defroutes app-routes
  (GET "/" [] (index))

  (GET  "/ws" req (#'ring-ajax-get-ws req))
  (POST "/ws" req (#'ring-ajax-post   req))

  (GET "/test" [] (json-response
                   {:message "You made it!"}))

  (POST "/test" req (json-response
                     {:message "Doing something something important..."}))

  (route/resources "/")
  (route/not-found "Page not found"))

;(def app
;  (-> #'app-routes
;      (handler/api)))

(defn session-uid
  "Convenient to extract the UID that Sente needs from the request."
  [req]
  (get-in req [:session :uid]))

(defmulti handle-event
  "Handle events based on the event ID."
  (fn [[ev-id ev-arg] ring-req] ev-id))

(defn session-status
  "Tell the server what state this user's session is in."
  [req]
  (when-let [uid (session-uid req)]
    (chsk-send! uid [:session/state (if (get-token uid) :secure :open)])))

;; Reply with the session state - either open or secure.

(defmethod handle-event :session/status
  [_ req]
  (session-status req))

;; Reply with authentication failure or success.
;; For a successful authentication, remember the login.

(defmethod handle-event :session/auth
  [[_ [username password]] req]
  (when-let [uid (session-uid req)]
    (let [valid (and (= "admin" username)
                     (= "secret" password))]
      (when valid
        (add-token uid (unique-id)))
      (chsk-send! uid [(if valid :auth/success :auth/fail)]))))

;; Reply with the same message, followed by the reverse of the message a few seconds later.
;; Also record activity to keep session alive.


;; Reply with the same message, followed by the reverse of the message a few seconds later.
;; Also record activity to keep session alive.

(defmethod handle-event :test/echo
  [[_ msg] req]
  (when-let [uid (session-uid req)]
    (keep-alive uid)
    (chsk-send! uid [:test/reply msg])
    (Thread/sleep 3000)
    (chsk-send! uid [:test/reply (clojure.string/reverse msg)])))

;; When the client pings us, send back the session state:

(defmethod handle-event :chsk/ping
  [_ req]
  (session-status req))


;; Handle unknown events.
;; Note: this includes the Sente implementation events like:
;; - :chsk/uidport-open
;; - :chsk/uidport-close

(defmethod handle-event :default
  [event req]
  nil)

(defn event-loop
  "Handle inbound events."
  []
  (go (loop [{:keys [client-uuid ring-req event] :as data} (<! ch-chsk)]
        (println "-" event)
        (thread (handle-event event ring-req))
        (recur (<! ch-chsk)))))


(defn -main
  "Start the http-kit server. Takes no arguments.
  Environment variable PORT can override default port of 8444."
  [& args]
  (event-loop)
  (let [port (or (System/getenv "PORT") 3001)]
    (println "Starting Sente server on port" port "...")
    (kit/run-server #'app-routes {:port port})))
