(ns front-desafio.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [cljs-http.client :as http]
            [om-bootstrap.nav :as n]
            [om-bootstrap.button :as b]
            [om-bootstrap.input :as i]
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


; estructura de la aplicacion
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

;(om/root front-desafio-app app-state {:target (.getElementById js/document "title")})


(defn navigation-view [app owner]
  (reify
    om/IInitState
    (init-state [this]
                {:session/state :unknown})
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
;(om/root paneluser-view  app-state {:target (.getElementById js/document "user-pn")})


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
;(om/root panelteams-view app-state {:target (.getElementById js/document "teams-pn")})

(defn field-change
  "Generic input field updater. Keeps state in sync with input."
  [e owner field]
  (let [value (.. e -target -value)]
    (om/set-state! owner field value)))

(defn secured-application
  "Component that represents the secured portion of our application."
  [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil
                   (dom/h1 "Testing")
                   (om/build paneluser-view app {})
                   (om/build panelteams-view app {})
                   ))))


(defn attempt-login
  "Handle the login event - send credentials to the server."
  [e app owner]
  (let [username (-> (om/get-node owner "username") .-value)
        password (-> (om/get-node owner "password") .-value)]
    (om/update! app [:notify/error] nil)
    (chsk-send! [:session/auth [username password]]))
  ;; suppress the form submit:
  false)

(defn login-form
  "Component that provides a login form and submits credentials to the server."
  [app owner]
  (reify
    om/IInitState
    (init-state [this]
                {:username "" :password ""})
    om/IRenderState
    (render-state [this state]
                  (dom/div nil
                           (when-let [error (:notify/error app)]
                             (dom/div #js {:className "danger"} error))
                           (dom/h1 "Login")
                           (d/form {:class "horizontal" :on-submit #(attempt-login % app owner)}
                                   (i/input {:type "text" :label "Usuario"
                                             :ref "username"
                                             :id "username"
                                             :value (:username state)
                                             :on-change #(field-change % owner :username)
                                             :label-classname "col-xs-2"
                                             :wrapper-classname "col-xs-10"})
                                   (i/input {:type "password" :label "Password"
                                             :ref "password"
                                             :id "password"
                                             :value (:password state)
                                             :on-change #(field-change % owner :password)
                                             :label-classname "col-xs-2"
                                             :wrapper-classname "col-xs-10"})
                                   (b/button {:type "submit"} "Login") ) ))))


(defn application
  "Component that represents our application. Maintains session state.
  Selects views based on session state."
  [app owner]
  (reify
    om/IInitState
    (init-state [this]
                {:session/state :unknown})
    om/IWillMount
    (will-mount [this]
                (event-loop app owner))
    om/IRenderState
    (render-state [this state]
                  (dom/div #js {:style #js {:width "100%"}}
                           (case (:session/state state)
                             :secure
                             (om/build secured-application app {})
                             :open
                             (om/build login-form app {})
                             :unknown
                             (dom/div nil "Loading..."))))))

(def app-state
  "Our very minimal application state - a piece of text that we display."
  (atom {:data/text "Enter a string and press RETURN!"}))

(om/root application
         app-state
         {:target (. js/document (getElementById "app"))})


;; PRUEBAS estaticas
;(swap! app-state assoc :text "hola")
;(swap! app-state assoc :user {:name "yomismo"})

;(swap! app-state update-in [:teams] concat (list {:name "as" :balance 22 :score 2}))
;(swap! app-state update-in [:teams] concat (list {:name "dedw3" :balance 223 :score 442}))
;(keys (first (:teams @app-state)))
@app-state