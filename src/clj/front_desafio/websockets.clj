(ns front-desafio.websockets
  (:require [clojure.core.cache :as cache]
            [taoensso.sente :as s]
            [front-desafio.restapi :as api]
            [clojure.core.async :as async :refer [<! <!! chan go thread]])
  )

;; create the Sente web socket connection stuff when we are loaded:

(let [{:keys [ch-recv send-fn ajax-post-fn
              ajax-get-or-ws-handshake-fn connected-uids] :as sente-info}
      (s/make-channel-socket! {})]
  (def ring-ajax-post   ajax-post-fn)
  (def ring-ajax-get-ws ajax-get-or-ws-handshake-fn)
  (def ch-chsk          ch-recv)
  (def chsk-send!       send-fn)
  (def connected-uids                connected-uids) )

;; session cache to maintain authentication - so we can rely
;; entirely on socket communication instead of needing to login
;; to the application first: 20 minutes of inactive will log you out
(def session-map (atom (cache/ttl-cache-factory {} :ttl (* 5 60 1000))))

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
  (chsk-send! (session-uid req) [:session/state (if (get-token (session-uid req)) :secure :open)])
  (when-let [uid (session-uid req)] (keep-alive uid))

  )

;; Reply with the session state - either open or secure.

(defmethod handle-event :session/status
  [_ req]
  (session-status req))



;; Reply with authentication failure or success.
;; For a successful authentication, remember the login.

(defmethod handle-event :session/auth
  [[_ [username password]] req]
  (when-let [uid (session-uid req)]

    (let [token (api/signin username password)
          valid (:user_id token)]
      (println token)
      ; DUDA : meter token o ID usuario
      (if valid
        (do
          (add-token uid (:token token))
          ;(assoc (:session req) :uid (:user_id token))
          (chsk-send! uid [ :auth/success ])
          (chsk-send! uid [ :user/data (select-keys token [:username :avatar]) ])
          )
        (chsk-send! uid [:auth/fail])))))

;; When the client pings us, send back the session state:

(defmethod handle-event :chsk/ws-ping
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

