(ns front-desafio.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [om-bootstrap.nav :as n]
            [om-bootstrap.button :as b]
            [taoensso.sente :as s]
            [front-desafio.utils :refer [guid]]))

;; Lets you do (prn "stuff") to the console
(enable-console-print!)

;; create the Sente web socket connection stuff when we are loaded:

(let [{:keys [chsk ch-recv send-fn]}
      (s/make-channel-socket! "/ws" {} {:type :auto})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv)
  (def chsk-send! send-fn))

(defmulti handle-event
  "Handle events based on the event ID."
  (fn [[ev-id ev-arg] app owner] ev-id))

;; Process the server's reply by updating the application state:

(defmethod handle-event :test/reply
  [[_ msg] app owner]
  (om/update! app :data/text msg))

;; Ignore unknown events (we just print to the console):

(defmethod handle-event :default
  [event app owner]
  #_(println "UNKNOWN EVENT" event))

;; Remember the session state in the application component's local state:

(defmethod handle-event :session/state
  [[_ state] app owner]
  (om/set-state! owner :session/state state))

;; Handle authentication failure (we just set an error message for display):

(defmethod handle-event :auth/fail
  [_ app owner]
  (om/update! app [:notify/error] "Invalid credentials"))

;; Handle authentication success (clear the error message; update application session state):

(defmethod handle-event :auth/success
  [_ app owner]
  (om/set-state! owner :session/state :secure))

(defn test-session
  "Ping the server to update the sesssion state."
  [owner]
  (chsk-send! [:session/status]))

(defn event-loop
  "Handle inbound events."
  [app owner]
  (go (loop [[op arg] (<! ch-chsk)]
        #_(println "-" op)
        (case op
          :chsk/recv (handle-event arg app owner)
          ;; we ignore other Sente events
          (test-session owner))
        (recur (<! ch-chsk)))))


(def app-state (atom
                {
                 :text "Inicio"
                 :user {:name nil :avatar nil}
                 :teams '()
                 :league nil
                 }))

(defn front-desafio-app [app owner]
  (reify
    om/IRender
    (render [_]
            (dom/h1 nil (:text app)))))

(om/root front-desafio-app app-state {:target (.getElementById js/document "title")})


(defn navigation-view [app owner]
  (reify
    om/IInitState
    (init-state [this]
                {:session/state :unknown})
    om/IWillMount
    (will-mount [this]
                (event-loop app owner))
    om/IRender
    (render [this]
            (dom/div nil (n/navbar
                          {:fixed-top? true :inverse? true :toggle-nav-key ".navbar-ex1-collapse" :brand "DF"}
                          (n/nav
                           {:collapsible? true :pull-right? true :bs-style "right"}
                           (n/nav-item {:key 1 :href "#"} "Link")
                           (n/nav-item {:key 2 :href "#"} "Link")
                           (b/dropdown {:key 3, :title "Dropdown"}
                                       (b/menu-item {:key 1} "Action")
                                       (b/menu-item {:key 2} "Another action")
                                       (b/menu-item {:key 3} "Something else here")
                                       (b/menu-item {:divider? true})
                                       (b/menu-item {:key 4} "Salir")))
                          (dom/div
                           #js {:className "navbar-ex1-collapse collapse navbar-collapse"}
                           (n/nav {:class "side-nav" :navbar? true}
                                  (n/nav-item {:key 1 :href "#"} "Menu 1")))))
            )))

(om/root navigation-view app-state {:target (.getElementById js/document "navigator")})

(defn paneluser-view [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil (dom/p nil (dom/span nil (get-in app [:user :name] ))))
            )))
(om/root paneluser-view  app-state {:target (.getElementById js/document "user-pn")})


; om.core/build-all para cada fila de teams
(defn teamrow-view [team owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete ]}]
                  (dom/tr nil
                          (dom/td nil (:name team))
                          (dom/td nil (:balance team))
                          (dom/td nil (:score team))
                          (dom/td nil
                                  (dom/button #js {:onClick (fn [e] (put! delete team))} "delete")
                                  (dom/button nil "select"))
                          )

                  )
    )
  )

; todo meter en el primero las cabeceras y evaluar first rest
(defn panelteams-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
                {:delete (chan) })
    om/IWillMount
    (will-mount [_]
                (let [delete (om/get-state owner :delete)]
                  (go (loop []
                        (let [team (<! delete)]
                          (om/transact! app :teams
                                        (fn [xs] (vec (remove #(= team %) xs))))
                          (recur)))))

                )
    om/IRenderState
    (render-state [this {:keys [delete show]}]
            (dom/div nil
                     (if (> (count (:teams app)) 0)
                       (dom/table
                        #js {:className "table table-bordered table-hover table-striped"}
                        (apply dom/thead nil
                               (for [h '("nom" "€" "pts")
                                     :let [hs (str h)]]
                                 (dom/th nil hs)))
                        (apply dom/tbody nil
                               (om/build-all teamrow-view (:teams app)
                                             {:init-state {:delete delete}} )))))
            ))
  )
(om/root panelteams-view app-state {:target (.getElementById js/document "teams-pn")})


;; PRUEBAS estaticas
;(swap! app-state assoc :text "hola")
;(swap! app-state assoc :user {:name "yomismo"})

(swap! app-state update-in [:teams] concat (list {:name "as" :balance 22 :score 2}))
;(swap! app-state update-in [:teams] concat (list {:name "dedw3" :balance 223 :score 442}))
;(keys (first (:teams @app-state)))
;@app-state
