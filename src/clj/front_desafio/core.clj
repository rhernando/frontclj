(ns front-desafio.core
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes routes]]
            [front-desafio.websockets :refer :all]
            ;[ring.util.response :as resp]
            [org.httpkit.server :as kit]
            [cheshire.core :as json]
            [ring.util.response :refer [file-response]]
            [clojure.java.io :as io]) )


(defn root
  "Return the absolute (root-relative) version of the given path."
  [path]
  (str (System/getProperty "user.dir") path))


(defn index
  "Handle index page request. Injects session uid if needed."
  [req]
  (println (get-in req [:cookies "ring-session" :value]))
  {:status 200
   :session (if (session-uid req)
              (:session req)
              (assoc (:session req) :uid (get-in req [:cookies "ring-session" :value]))
              )
   :body (slurp "resources/public/index.html")})



(defroutes app-routes
  (-> (routes
       (GET  "/"   req (#'index req))
       (GET  "/ws" req (#'ring-ajax-get-ws req))
       (POST "/ws" req (#'ring-ajax-post   req))
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




