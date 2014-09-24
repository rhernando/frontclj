(ns front-desafio.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [om-bootstrap.nav :as n]
            [om-bootstrap.button :as b]
            [front-desafio.utils :refer [guid]]))

;; Lets you do (prn "stuff") to the console
(enable-console-print!)

(def app-state (atom
                {
                 :text "Hello world!"
                 :user nil
                 :team nil
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
