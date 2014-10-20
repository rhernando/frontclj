(ns front-desafio.core
  (:use [jayq.core :only [$]]
        )
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [cljs-http.client :as http]
            [om-bootstrap.nav :as n]
            [om-bootstrap.button :as b]
            [om-bootstrap.input :as i]
            [om-bootstrap.random :as r]
            [om-bootstrap.grid :as grid]
            [om-bootstrap.panel :as panel]
            [om-bootstrap.table :refer [table]]
            ;[clojure.core.clj->js :as clj->js]
            [goog.i18n.NumberFormat]
            [ajax.core :refer [GET POST]]
            [taoensso.sente :as s]
            [taoensso.encore :as encore :refer (logf)]
            [front-desafio.utils :refer [guid]])
  (:import goog.History
           goog.History.EventType)
  )

;; Lets you do (prn "stuff") to the console
(enable-console-print!)



(def history (History.))


;; create the Sente web socket connection stuff when we are loaded:

(let [{:keys [chsk ch-recv send-fn state ]}
      (s/make-channel-socket! "/ws" {:type :auto})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv)
  (def chsk-send! send-fn)
  (def chsk-state state)
  )

(defmulti event-msg-handler :id) ; Dispatch on event-id

;; Wrap for logging, catching, etc.:
(defn     event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (event-msg-handler ev-msg)
  )

(do ; Client-side methods
  (defmethod event-msg-handler :default ; Fallback
    [{:as ev-msg :keys [event]}]
    (logf "Unhandled event: %s" event))

  (defmethod event-msg-handler :chsk/state
    [{:as ev-msg :keys [?data]}]
    (if (:open? ?data)
      (do
        (logf "Channel socket successfully established!")
        (chsk-send! [:session/status] )
        )
      (logf "Channel socket state change: %s" ?data)))

  (defmethod event-msg-handler :chsk/recv
    [{:as ev-msg :keys [?data]}]
    (logf "Push event from server: %s" ?data)
    (case  (first ?data)
      :session/state (swap! app-state assoc :session/state (last ?data))
      :user/data (let
                   [{:keys [username avatar token p_rank]} (last ?data)]
                   (swap! app-state assoc :user {:name username :avatar avatar :token token :p_rank p_rank}))
      :game/teams (swap! app-state assoc :teams (last ?data))
      :game/round (swap! app-state assoc :round (last ?data))
      :team/lineup (swap! app-state assoc :lineup (last ?data))
      :team/market (swap! app-state assoc :market (last ?data))
      :team/standings (swap! app-state assoc :standings (last ?data))
      :user/friends (swap! app-state assoc :friends (last ?data))
      (println "def event"))
    )
  ;; Add your (defmethod handle-event-msg! <event-id> [ev-msg] <body>)s here...
  )

(defn navigation-view [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil (n/navbar
                          {:fixed-top? true :inverse? false :toggle-nav-key ".navbar-ex1-collapse" :brand "DF"}
                          (n/nav
                           {:collapsible? true :pull-right? true :bs-style "right"}
                           (n/nav-item {:key 1 :href "#"} "Link")
                           (n/nav-item {:key 2 :href "#"} "Link")
                           (b/dropdown {:key 3, :title (r/glyphicon {:glyph "user"}(get-in app [:user :name] ))}
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


(defn paneluser-view [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil (panel/panel
                          {:header (get-in app [:user :name] )}
                          (grid/row {}
                                    (grid/col {:md 12}
                                              (dom/p nil (dom/img  #js {:src (get-in app [:user :avatar] )} nil)))
                                    (grid/row {}
                                              (grid/col {:md 6} "Puntos Ranking " (get-in app [:user :p_rank] ) ))
                                    ))
                     ))))

(defn teamrow-view [team owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete ]}]
                  (let [team-class (if (:activa team) "list-group-item active" "list-group-item")]
                    ;(d/li
                    (dom/a #js {:className team-class }
                           (dom/h4 #js {:className "list-group-item-heading" } (:nombre team))
                           (dom/p #js {:className "list-group-item-text" }
                                  "Liga " (get-in team [:liga :nombre] ) ". Saldo: "
                                  (.format (goog.i18n.NumberFormat. 1) (:saldo team)) " €. Valor: " (.format (goog.i18n.NumberFormat. 1) (:valor team)))
                           )
                    )
                  ;)
                  ;        (dom/button #js {:onClick (fn [e] (put! delete team))} "delete")
                  ;        (dom/button nil "select"))
                  ;)

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
                             (panel/panel
                              {:header "Mis equipos"
                               :list-group
                               (om/build-all teamrow-view (:teams app)
                                             {:init-state {:delete delete}} )
                               }
                              nil)
                             ))
                  ))
  )

;; jornada actual
(defn panelround-view [round owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil (panel/panel
                          {:header "Jornada Actual"}
                          (dom/p nil
                                 (if   round
                                   (table {:striped? true :bordered? false :condensed? true :hover? true :class "round"}
                                          (d/tbody
                                           (for [r round]
                                             (d/tr {:class "partido"}
                                                   (d/td (:fecha r))
                                                   (d/td (:nom_local r))
                                                   (d/td (d/img {:src(:logo_local r) :class "img-responsive minifoto"}))
                                                   (d/td (:goles_local r) " - "  (:goles_visitante r))
                                                   (d/td (d/img {:src(:logo_visit r) :class "img-responsive minifoto"}))
                                                   (d/td (:nom_visit r))
                                                   )
                                             )
                                           ))
                                   ))
                          )))))

;; Amigos
(defn panelfriends-view [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil (panel/panel
                          {:header "Mis amigos"}
                          (dom/h4 nil "Seguidores")
                          (let [followers  (get-in app [:friends :seguidores])]
                            (d/ul {:class "list-group"}
                                  (for [f followers]
                                    (d/li {:class "list-group-item"}
                                          (d/h4 #js {:className "list-group-item-heading" } (:username f))
                                          (d/img {:src (:avatar f) :class "img-responsive minifoto"})
                                          (d/p "P Ranking: " (:p_rank f))
                                          )))
                            )
                          (d/h4 "Siguiendo")
                          (when-let [friends  (get-in app [:friends :siguiendo])]
                            (d/ul {:class "list-group"}
                                  (for [f friends]
                                    (d/li {:class "list-group-item"}
                                          (d/h4 #js {:className "list-group-item-heading" } (:username f))
                                          (d/img {:src (:avatar f) :class "img-responsive minifoto"})
                                          (d/p "P Ranking: " (:p_rank f))
                                          )))
                            )
                          )))))

;; alineacion
(defn panellineup-view [lineup owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil (panel/panel
                          {:header "Alineación actual"}
                          (dom/p nil
                                 (if   lineup
                                   (table {:striped? false :bordered? true :condensed? true :hover? true :class "alineacion"}
                                          (d/thead
                                           (d/tr
                                            (d/th  nil)
                                            (d/th "Jugador")
                                            (d/th "Puntos")))
                                          (d/tbody
                                           (for [r (:porteros lineup)]
                                             (d/tr {:class "portero"}
                                                   (d/td (d/img {:src (:foto r) :class "img-responsive minifoto"}))
                                                   (d/td (:apodo r))
                                                   (d/td (.format (goog.i18n.NumberFormat. 1) (:puntos r)))
                                                   )
                                             )
                                           (for [r (:defensas lineup)]
                                             (d/tr {:class "defensa"}
                                                   (d/td (d/img {:src(:foto r) :class "img-responsive minifoto"}))
                                                   (d/td (:apodo r))
                                                   (d/td (.format (goog.i18n.NumberFormat. 1) (:puntos r)))
                                                   )
                                             )
                                           (for [r (:medios lineup)]
                                             (d/tr {:class "medio"}
                                                   (d/td (d/img {:src(:foto r) :class "img-responsive minifoto"}))
                                                   (d/td (:apodo r))
                                                   (d/td (.format (goog.i18n.NumberFormat. 1) (:puntos r)))
                                                   )
                                             )
                                           (for [r (:delanteros lineup)]
                                             (d/tr {:class "delantero"}
                                                   (d/td (d/img {:src(:foto r) :class "img-responsive minifoto"}))
                                                   (d/td (:apodo r))
                                                   (d/td (.format (goog.i18n.NumberFormat. 1) (:puntos r)))
                                                   )
                                             )
                                           ))
                                   ))
                          )))))

;; Negociaciones fichajes abiertos
(defn panelmarket-view [market owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil (panel/panel
                          {:header "Mercado"}
                          (dom/p nil
                                 (if   market
                                   (table {:striped? true :bordered? false :condensed? true :hover? true :class "market"}
                                          (d/tbody
                                           (for [r (take 10 market)]
                                             (d/tr {:class "partido"}
                                                   (d/td (d/img {:src(:logo_equipo r) :class "img-responsive minifoto"}))
                                                   (d/td (d/img {:src(:url_imagen r) :class "img-responsive minifoto"}))
                                                   (d/td (:apodo r))
                                                   (d/td (:puntos r))
                                                   (d/td (:valor r))
                                                   )
                                             )
                                           ))
                                   ))                          )))))

;; Clasificacion
(defn panelstandings-view [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil (panel/panel
                          {:header "Clasificación"}
                          (d/div {:id "clasificacion" :style {:height "200px"}} nil)
                          )))
    om/IDidUpdate
    (did-update [this _ _]
                (let [
                      $divchart ($ :#clasificacion)
                      options  {:legend {:show true :position "sw"} :series {:points {:show true} :lines {:show true}} :xaxis {:tickSize 1 :tickDecimals 0} }
                      ]
                  (println "llLLL")
                  (println (vec(map #( map-indexed (fn [idx itm] [idx  (last itm)]) (:jornadas %)) (:standings app))))
                  (.plot $divchart
                         (clojure.core/clj->js (vec (map (fn [tmd] {:label (:nombre tmd) :data ( map-indexed (fn [idx itm] [(+ 1 idx)  (last itm)]) (:jornadas tmd))  }) app) ))
                         (clojure.core/clj->js options)
                         )
                  )
                )))

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
                     (dom/div #js {:id "nagigator"}
                              (om/build navigation-view app {}))
                     (dom/div #js {:id "wrapper"}
                              (dom/div #js {:id "page-wrapper"}
                                       (grid/grid {:fluid? true}
                                                  (grid/row {}
                                                            (grid/col {:md 4 } (om/build paneluser-view app {}))
                                                            (grid/col {:md 4 } (om/build panelteams-view app {}))
                                                            (grid/col {:md 4 } (om/build panelround-view (:round app) {}))
                                                            )
                                                  (grid/row {}
                                                            (grid/col {:md 4 } (om/build panellineup-view (:lineup app) {}))
                                                            (grid/col {:md 4 } (om/build panelmarket-view (:market app) {}))
                                                            (grid/col {:md 4 } (om/build panelstandings-view (:standings app) {}))
                                                            )
                                                  (grid/row {}
                                                            (grid/col {:md 4 } (om/build panelfriends-view app {}))
                                                            )
                                                  )))))))

(defn login-handler [response]
  (.log js/console (str response))
  ;{:token "iADwMDSexGtT1UqvgWE2", :user_id 1, :username "rubens", :avatar "/assets/default_red.png"}
  (when-let [{:keys [username token user_id avatar]} response]
    (swap! app-state assoc :user {:name username :avatar avatar :token token})
    (swap! app-state assoc :session/state :secure)
    )
  (s/chsk-reconnect! chsk)

  )

(defn login-error-handler [{:keys [message status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text " " message))
  (om/update! app [:notify/error] nil))

(defn attempt-login
  "Handle the login event - send credentials to the server."
  [e app owner]
  (let [username (-> (om/get-node owner "username") .-value)
        password (-> (om/get-node owner "password") .-value)]
    (om/update! app [:notify/error] nil)
    (POST "/login"
          {:params {:username username
                    :password   password}
           :handler login-handler
           :error-handler (fn [resp]
                            (let [{:keys [response status status-text]} resp]
                              (println resp)
                              (.log js/console (str "Something bad happened: " status " " status-text " " message))
                              (om/update! app [:notify/error] (:message response) )))
           :response-format :json
           :format :raw
           :keywords? true})
    )
  ;; suppress the form submit:
  false)

(defn close-alert
  [e app owner]
  (om/update! app [:notify/error] nil)
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
                  (dom/div #js {:className "container loginpage"}
                           (when-let [error (:notify/error app)]
                             (r/alert {:bs-style "danger" }; TODO cuando se pueda.... :dismiss-after 10 :on-dismiss #(close-alert % app owner)}
                                      (d/strong "Error!")
                                      error))
                           (grid/grid {}
                                      (grid/row {}
                                                (grid/col {:md 4 :md-offset 4}
                                                          (dom/div #js {:className "animated bounceIn loginbox"}
                                                                   (dom/div #js {:className "page-icon"} (dom/h1 nil "D F"))
                                                                   (dom/hr nil nil)
                                                                   (dom/h2 nil "Acceder")
                                                                   (d/form {:class "form-horizontal" :on-submit #(attempt-login % app owner)}
                                                                           (i/input {:type "text" :label "Usuario"
                                                                                     :ref "username"
                                                                                     :id "username"
                                                                                     :value (:username state)
                                                                                     :on-change #(field-change % owner :username)
                                                                                     :label-classname "col-xs-5"
                                                                                     :wrapper-classname "col-xs-6"})
                                                                           (i/input {:type "password" :label "Password"
                                                                                     :ref "password"
                                                                                     :id "password"
                                                                                     :value (:password state)
                                                                                     :on-change #(field-change % owner :password)
                                                                                     :label-classname "col-xs-5"
                                                                                     :wrapper-classname "col-xs-6"})
                                                                           (b/button {:type "submit" :bs-style "default" :class "btn-block"} "Login") )
                                                                   )
                                                          ))) ))   ))



(defn application
  "Component that represents our application. Maintains session state.
  Selects views based on session state."
  [app owner]
  (reify
    ;om/IInitState
    ;(init-state [this]
    ;{:session/state :open}
    ;            )
    om/IWillMount
    (will-mount [this]
                (s/start-chsk-router! ch-chsk event-msg-handler*)
                )
    om/IDidMount
    (did-mount [this]
               (println "VOY")
               (chsk-send! [:session/status] )
               )
    om/IRenderState
    (render-state [this state]
                  (dom/div #js {:style #js {:width "100%"}}
                           (let [state (:session/state app)]
                             (case state
                               :secure
                               (om/build secured-application app {})
                               :open
                               (om/build login-form app {})
                               :unknown
                               (dom/div nil "Loading...")))))))


; Navigation and Routing with Om and Secretary
(def navigation-state
  (atom [{:name "Add" :path "/add"}
         {:name "Browse" :path "/browse"}]))


(defroute "/add" [] (js/console.log "Adding"))

(defroute "/browse" [] (js/console.log "Browsing"))

(defn refresh-navigation []
  (let [token (.getToken history)
        set-active (fn [nav]
                     (assoc nav :active (= (:path nav) token)))]
    (swap! navigation-state #(map set-active %))))

(defn on-navigate [event]
  (refresh-navigation)
  (secretary/dispatch! (.-token event)))

(doto history
  (goog.events/listen EventType/NAVIGATE on-navigate)
  (.setEnabled true))




; estructura de la aplicacion
(def app-state (atom
                {
                 :user {:name nil :avatar nil}
                 :teams '()
                 :league nil
                 :session/state :unknown
                 }))

(om/root application
         app-state
         {:target (. js/document (getElementById "app"))})


;; PRUEBAS estaticas
;(swap! app-state assoc :text "hola")
;(swap! app-state assoc :user {:name "pp"})

;(swap! app-state update-in [:teams] concat (list {:name "as" :balance 22 :score 2}))
;(swap! app-state update-in [:teams] concat (list {:name "dedw3" :balance 223 :score 442}))
;(keys (first (:teams @app-state)))
@app-state

;(.plot ($ :#clasificacion) (clojure.core/clj->js [ [[1, 0], [1, 1]] ]) , (clojure.core/clj->js { yaxis: { max: 1 } }))

;(.plot ($ :#clasificacion) (clojure.core/clj->js (vec(map-indexed (fn [idx itm] [idx (last (last itm))]) (map #(:jornadas %) (:standings @app-state))))) )


;(map #( map last (:jornadas %)) (:standings @app-state))


;(map (fn [tmd] {:label (:nombre tmd) :data ( map-indexed (fn [idx itm] [idx  (last itm)]) (:jornadas tmd))  })     (:standings @app-state))

;(:standings @app-state)



;(vec(map-indexed (fn [idx itm] [idx (last (last itm))]) (map #(:jornadas %) (:standings @app-state))))


(.plot ($ :#clasificacion) (clojure.core/clj->js (vec(map (fn [tmd] {:label (:nombre tmd) :data ( map-indexed (fn [idx itm] [idx  (last itm)]) (:jornadas tmd))  })     (:standings @app-state)))))




;(clojure.core/clj->js {:legend {:show true :position "ne"}})
