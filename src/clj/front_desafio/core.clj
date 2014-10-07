(ns front-desafio.core
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes routes]]
            [front-desafio.websockets :refer :all]
            [front-desafio.restapi :as api]
            ;[ring.util.response :as resp]
            [org.httpkit.server :as kit]
            [cheshire.core :as json]
            [ring.util.response :refer [file-response]]
            [clojure.java.io :as io]) )


(defn root
  "Return the absolute (root-relative) version of the given path."
  [path]
  (str (System/getProperty "user.dir") path))

(defn unique-id
  "Return a really unique ID (for an unsecured session ID).
  No, a random number is not unique enough. Use a UUID for real!"
  []
  (rand-int 10000))

(defn login!
  "Here's where you'll add your server-side login/auth procedure (Friend, etc.).
  In our simplified example we'll just always successfully authenticate the user
  with whatever user-id they provided in the auth request."
  [ring-request]
  (println "login " ring-request)
  (println (get-in ring-request [:cookies "ring-session" :value]))

  (let [{:keys [session params]} ring-request
        {:keys [username password]} params]
    (println "Login request: %s" params)
    (let [token (api/signin username password)
          valid (:user_id token)]
      (println token)
      (println valid)
      (if valid
        (do
          (add-token (get-in ring-request [:cookies "ring-session" :value]) (:token token))
          ;(assoc (:session req) :uid (:user_id token))
          {:status 200
           :session (assoc session :uid (get-in ring-request [:cookies "ring-session" :value]))
           :body (json/generate-string token)}
          )
        {:status 500 :body (json/generate-string token)}
        ))


    ))

(defn index
  "Handle index page request. Injects session uid if needed."
  [req]
  (println "ind")
  (println (get-in req [:cookies "ring-session" :value]))
  {:status 200
   :session (if (session-uid req)
              (:session req)
              (if (get-in req [:cookies "ring-session" :value])
                (assoc (:session req) :uid (get-in req [:cookies "ring-session" :value]))
                (assoc (:session req) :uid nil))
              )
   :body (slurp "resources/public/index.html")})



(defroutes app-routes
  (-> (routes
       (GET  "/"   req (#'index req))
       (GET  "/ws" req (#'ring-ajax-get-ws req))
       (POST "/ws" req (#'ring-ajax-post   req))
       (POST "/login" req (#'login!   req))
       (route/resources "/")
       (route/files "/" {:root (root "")})
       (route/not-found "<p>Page not found. I has a sad!</p>"))
      handler/site))


(defn -main
  "Start the http-kit server. Takes no arguments.
  Environment variable PORT can override default port of 8444."
  [& args]
  (event-loop)
  (let [port (or (System/getenv "PORT") 3001)]
    (println "Starting Sente server on port" port "...")
    (kit/run-server #'app-routes {:port port})))




