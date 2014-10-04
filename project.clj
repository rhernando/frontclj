(defproject front-desafio "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.2"]
                 [org.clojure/core.cache "0.6.3"]
                 ;; CLJ
                 [ring/ring-core "1.2.0"]
                 [ring/ring-json "0.3.1"]
                 [compojure "1.1.6"]
                 [cheshire "5.2.0"]
                 [com.taoensso/sente "0.13.0"]
                 [http-kit "2.1.18"]
                 ;; CLJS
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [cljs-http "0.1.9"]
                 [cljs-ajax "0.3.2"]
                 [secretary "1.1.0"]
                 [om "0.7.3"]
                 [racehub/om-bootstrap "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-autoreload "0.1.0"]
            ;[lein-ring "0.8.7"]
            [lein-pdo "0.1.1"]]
  :reloading (front-desafio.core)

  :aliases {"dev" ["pdo" "cljsbuild" "auto" "dev," "run"]}

  ; lein cljsbuild once dev
  ; PORT=3001 lein run -m front_desafio.core
  :ring {:handler front-desafio.core/app
         :init    front-desafio.core/init
         :port    3001}
  :main front-desafio.core

  :source-paths ["src/clj"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/front_desafio.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true
                                   :externs ["react/externs/react.js"]}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/front_desafio.js"
                                   :source-map "resources/public/js/front_desafio.js.map"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :output-wrapper false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]
                                   :closure-warnings
                                   {:non-standard-jsdoc :off}}}]})
