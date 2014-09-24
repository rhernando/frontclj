(ns front-desafio.core
    (:require [compojure.handler :as handler]
              [compojure.route :as route]
              [compojure.core :refer [GET POST defroutes]]
              [ring.util.response :as resp]
              [cheshire.core :as json]
              [ring.util.response :refer [file-response]]
              [clojure.java.io :as io]))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defn index []
  (file-response "public/index.html" {:root "resources"}))

(defroutes app-routes
  (GET "/" [] (index))

  (GET "/test" [] (json-response
                   {:message "You made it!"}))

  (POST "/test" req (json-response
                     {:message "Doing something something important..."}))

  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> #'app-routes
      (handler/api)))
