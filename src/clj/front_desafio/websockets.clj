(ns front-desafio.websockets
  (:require
   [taoensso.sente :as s]
   [front-desafio.restapi :as api]
   [front-desafio.session :as session]
   [clojure.core.async :as async :refer [<! <!! chan go thread]])
  )

;; create the Sente web socket connection stuff when we are loaded:

(let [{:keys [ch-recv send-fn ajax-post-fn
              ajax-get-or-ws-handshake-fn connected-uids] :as sente-info}
      (s/make-channel-socket! {})]
  (def ring-ajax-post   ajax-post-fn)
  (def ring-ajax-get-ws ajax-get-or-ws-handshake-fn)
  (def ch-chsk          ch-recv)
  (def chsk-send!       send-fn)
  (def connected-uids                connected-uids) )


(defn session-uid
  "Convenient to extract the UID that Sente needs from the request."
  [req]
  (get-in req [:session :uid]))


(defmulti handle-event
  "Handle events based on the event ID."
  (fn [[ev-id ev-arg] ring-req] ev-id))

(defn session-status
  "Tell the server what state this user's session is in."
  [req]
  (chsk-send! (session-uid req) [:session/state (if (session/get-token (session-uid req)) :secure :open)])
  (when-let [uid (session-uid req)] (session/keep-alive uid))

  )

;; sen all data to user, in fragments
(defn send-game-data
  [token uid]
  (let [data (api/team-data token)]
    (chsk-send! uid [ :game/teams  data])
    (let [
               idteam (:id (first (filter #(= true (:activa %)) data)))
               lineup (api/team-lineup token idteam)
               market (api/team-market token idteam)]
      (chsk-send! uid [ :team/lineup  lineup])
      (chsk-send! uid [ :team/market  market])
      ) )
  (let [friends (api/friends-data token)]
    (chsk-send! uid [ :user/friends  friends]))
  (let [standings (api/standings-data token)]
    (chsk-send! uid [ :team/standings  standings]))
  (let [round (api/round-data token)]
    (chsk-send! uid [ :game/round  round]))
  )

;; Reply with authentication failure or success.
;; For a successful authentication, remember the login.

(defmethod handle-event :session/auth
  [[_ [username password]] req]
  (when-let [uid (session-uid req)]

    (let [token (api/signin username password)
          valid (:user_id token)]
      (println token)
      ; DUDA : meter token o ID usuario
      (if valid
        (do
          (session/add-token uid (:token token))
          ;(assoc (:session req) :uid (:user_id token))
          (chsk-send! uid [ :auth/success ])
          ;(chsk-send! uid [ :user/data (select-keys token [:username :avatar]) ])
          ;(send-game-data (:token token uid))
          )
        (chsk-send! uid [:auth/fail])))))

;; When the client pings us, send back the session state:

(defmethod handle-event :chsk/ws-ping
  [_ req]
  (session-status req))

;; Reply with the session state - either open or secure.
;; it comes from a reconnect (refresh page)
(defmethod handle-event :session/status
  [_ req]
  (session-status req)
  ; enviar tambien datos basicos de sesion al usuario
  (when-let [token (session/get-token (session-uid req))]
    (let [data (api/user-data token)]
      (chsk-send! (session-uid req) [ :user/data (select-keys data [:username :avatar :p_rank]) ])
      )
    (send-game-data token (session-uid req)))

  )


;; Handle unknown events.
;; Note: this includes the Sente implementation events like:
;; - :chsk/uidport-open
;; - :chsk/uidport-close

(defmethod handle-event :default
  [event req]
  nil)

(defn event-loop
  "Handle inbound events."
  []
  (go (loop [{:keys [client-uuid ring-req event] :as data} (<! ch-chsk)]
        (println "-" event)
        (thread (handle-event event ring-req))
        (recur (<! ch-chsk)))))

