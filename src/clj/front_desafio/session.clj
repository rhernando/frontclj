(ns front-desafio.session
  (:require [clojure.core.cache :as cache]
            )
  )


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
  (swap! session-map assoc uid {:token token}))

(defn get-token
  "Given a UID, retrieve the associated token, if any."
  [uid]
  (let [sess_data (get @session-map uid)]
    (println "get-token" uid sess_data (java.util.Date.))
    (:token sess_data)))


