(ns front-desafio.restapi
  (:require [org.httpkit.client :as http]
            [clojure.data.json :as json])
  )


;EXAMPLES
;(client/get "http://site.com/resources/3" {:accept :json})
;(client/post "http://site.com/api"
;  {:basic-auth ["user" "pass"]
;   :body "{\"json\": \"input\"}"
;   :headers {"X-Api-Version" "2"}
;   :content-type :json
;   :socket-timeout 1000  ;; in milliseconds
;   :conn-timeout 1000    ;; in milliseconds
;   :accept :json})

(def rest-server "http://localhost:3343")

(defn signin
  [user pass]

  (let [options {:form-params {:login user :password pass}
                 :content-type :json
                 :accept :json
                 :headers {"Accept" "application/json"}}
        {:keys [status error body]} @(http/post (str rest-server "/api/token") options)]
    (if error
      (println "Failed, exception is " error)
      (println "Async HTTP POST: " status))

  (json/read-str body :key-fn keyword)))


