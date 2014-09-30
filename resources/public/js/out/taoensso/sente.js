// Compiled by ClojureScript 0.0-2322
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.encore');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
taoensso.sente.chan_QMARK_ = (function chan_QMARK_(x){return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.sente.validate_event_form = (function validate_event_form(x){if(!(cljs.core.vector_QMARK_.call(null,x)))
{return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else
{if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x))))
{return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else
{var vec__21192 = x;var ev_id = cljs.core.nth.call(null,vec__21192,(0),null);var _ = cljs.core.nth.call(null,vec__21192,(1),null);if(!((ev_id instanceof cljs.core.Keyword)))
{return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else
{if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id)))
{return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else
{return null;

}
}

}
}
});
/**
* Valid [ev-id ?ev-data] form?
*/
taoensso.sente.event_QMARK_ = (function event_QMARK_(x){return (taoensso.sente.validate_event_form.call(null,x) == null);
});
taoensso.sente.assert_event = (function assert_event(x){var temp__4126__auto__ = taoensso.sente.validate_event_form.call(null,x);if(cljs.core.truth_(temp__4126__auto__))
{var _QMARK_err = temp__4126__auto__;var err_fmt = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21194 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);switch (G__21194) {
case "else":
return "Malformed event (unknown error).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-type":
return "Malformed event (wrong type).";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err))));

}
})())+" Event should be of `[ev-id ?ev-data]` form: %s");throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else
{return null;
}
});
taoensso.sente.cb_success_QMARK_ = (function cb_success_QMARK_(cb_reply){return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply));
});
/**
* edn -> [clj ?cb-uuid]
*/
taoensso.sente.unwrap_edn_msg_with__QMARK_cb__GT_clj = (function unwrap_edn_msg_with__QMARK_cb__GT_clj(edn){var msg = cljs.reader.read_string.call(null,edn);var _QMARK_cb_uuid = (function (){var and__3544__auto__ = cljs.core.map_QMARK_.call(null,msg);if(and__3544__auto__)
{return new cljs.core.Keyword("chsk","cb-uuid","chsk/cb-uuid",767803545).cljs$core$IFn$_invoke$arity$1(msg);
} else
{return and__3544__auto__;
}
})();var clj = ((cljs.core.not.call(null,_QMARK_cb_uuid))?msg:new cljs.core.Keyword("chsk","clj","chsk/clj",-655164811).cljs$core$IFn$_invoke$arity$1(msg));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid], null);
});
taoensso.sente.assert_send_args = (function assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){taoensso.sente.assert_event.call(null,x);
if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("encore","nneg-int?","encore/nneg-int?",1565384456,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)))))))));
}
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.sente.chan_QMARK_.call(null,_QMARK_cb)))
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",1219428,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))))))));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function pull_unused_cb_fn_BANG_(cbs_waiting,cb_uuid){if(cljs.core.truth_(cb_uuid))
{return cljs.core.first.call(null,cljs.core.swap_BANG_.call(null,cbs_waiting,(function (p__21198){var vec__21199 = p__21198;var _ = cljs.core.nth.call(null,vec__21199,(0),null);var m = cljs.core.nth.call(null,vec__21199,(1),null);var temp__4124__auto__ = m.call(null,cb_uuid);if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.dissoc.call(null,m,cb_uuid)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
}
})));
} else
{return null;
}
});
/**
* clj -> [edn ?cb-uuid]
*/
taoensso.sente.wrap_clj__GT_edn_msg_with__QMARK_cb = (function wrap_clj__GT_edn_msg_with__QMARK_cb(cbs_waiting,clj,_QMARK_timeout_ms,_QMARK_cb_fn){var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null):null);var msg = ((cljs.core.not.call(null,_QMARK_cb_uuid))?clj:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("chsk","clj","chsk/clj",-655164811),clj,new cljs.core.Keyword("chsk","cb-uuid","chsk/cb-uuid",767803545),_QMARK_cb_uuid], null));var edn = cljs.core.pr_str.call(null,msg);if(cljs.core.truth_(_QMARK_cb_uuid))
{cljs.core.swap_BANG_.call(null,cbs_waiting,((function (_QMARK_cb_uuid,msg,edn){
return (function (p__21226){var vec__21227 = p__21226;var _ = cljs.core.nth.call(null,vec__21227,(0),null);var m = cljs.core.nth.call(null,vec__21227,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,_QMARK_cb_uuid,_QMARK_cb_fn)], null);
});})(_QMARK_cb_uuid,msg,edn))
);
if(cljs.core.truth_(_QMARK_timeout_ms))
{var c__6891__auto___21252 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___21252,_QMARK_cb_uuid,msg,edn){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___21252,_QMARK_cb_uuid,msg,edn){
return (function (state_21238){var state_val_21239 = (state_21238[(1)]);if((state_val_21239 === (5)))
{var inst_21236 = (state_21238[(2)]);var state_21238__$1 = state_21238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21238__$1,inst_21236);
} else
{if((state_val_21239 === (4)))
{var state_21238__$1 = state_21238;var statearr_21240_21253 = state_21238__$1;(statearr_21240_21253[(2)] = null);
(statearr_21240_21253[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21239 === (3)))
{var inst_21231 = (state_21238[(7)]);var inst_21233 = inst_21231.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));var state_21238__$1 = state_21238;var statearr_21241_21254 = state_21238__$1;(statearr_21241_21254[(2)] = inst_21233);
(statearr_21241_21254[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21239 === (2)))
{var inst_21231 = (state_21238[(7)]);var inst_21230 = (state_21238[(2)]);var inst_21231__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,cbs_waiting,_QMARK_cb_uuid);var state_21238__$1 = (function (){var statearr_21242 = state_21238;(statearr_21242[(7)] = inst_21231__$1);
(statearr_21242[(8)] = inst_21230);
return statearr_21242;
})();if(cljs.core.truth_(inst_21231__$1))
{var statearr_21243_21255 = state_21238__$1;(statearr_21243_21255[(1)] = (3));
} else
{var statearr_21244_21256 = state_21238__$1;(statearr_21244_21256[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21239 === (1)))
{var inst_21228 = cljs.core.async.timeout.call(null,_QMARK_timeout_ms);var state_21238__$1 = state_21238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21238__$1,(2),inst_21228);
} else
{return null;
}
}
}
}
}
});})(c__6891__auto___21252,_QMARK_cb_uuid,msg,edn))
;return ((function (switch__6876__auto__,c__6891__auto___21252,_QMARK_cb_uuid,msg,edn){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_21248 = [null,null,null,null,null,null,null,null,null];(statearr_21248[(0)] = state_machine__6877__auto__);
(statearr_21248[(1)] = (1));
return statearr_21248;
});
var state_machine__6877__auto____1 = (function (state_21238){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_21238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e21249){if((e21249 instanceof Object))
{var ex__6880__auto__ = e21249;var statearr_21250_21257 = state_21238;(statearr_21250_21257[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21258 = state_21238;
state_21238 = G__21258;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_21238){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_21238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___21252,_QMARK_cb_uuid,msg,edn))
})();var state__6893__auto__ = (function (){var statearr_21251 = f__6892__auto__.call(null);(statearr_21251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___21252);
return statearr_21251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___21252,_QMARK_cb_uuid,msg,edn))
);
} else
{}
} else
{}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn,_QMARK_cb_uuid], null);
});
taoensso.sente.IChSocket = (function (){var obj21260 = {};return obj21260;
})();
taoensso.sente.chsk_type = (function chsk_type(chsk){if((function (){var and__3544__auto__ = chsk;if(and__3544__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_type$arity$1;
} else
{return and__3544__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_type$arity$1(chsk);
} else
{var x__4183__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3556__auto__ = (taoensso.sente.chsk_type[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (taoensso.sente.chsk_type["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-type",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.chsk_open_QMARK_ = (function chsk_open_QMARK_(chsk){if((function (){var and__3544__auto__ = chsk;if(and__3544__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_open_QMARK_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_open_QMARK_$arity$1(chsk);
} else
{var x__4183__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3556__auto__ = (taoensso.sente.chsk_open_QMARK_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (taoensso.sente.chsk_open_QMARK_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-open?",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.chsk_send_BANG_ = (function() {
var chsk_send_BANG_ = null;
var chsk_send_BANG___2 = (function (chsk,ev){if((function (){var and__3544__auto__ = chsk;if(and__3544__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2(chsk,ev);
} else
{var x__4183__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3556__auto__ = (taoensso.sente.chsk_send_BANG_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (taoensso.sente.chsk_send_BANG_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!",chsk);
}
}
})().call(null,chsk,ev);
}
});
var chsk_send_BANG___4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){if((function (){var and__3544__auto__ = chsk;if(and__3544__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4;
} else
{return and__3544__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4(chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
} else
{var x__4183__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3556__auto__ = (taoensso.sente.chsk_send_BANG_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (taoensso.sente.chsk_send_BANG_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!",chsk);
}
}
})().call(null,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
});
chsk_send_BANG_ = function(chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
switch(arguments.length){
case 2:
return chsk_send_BANG___2.call(this,chsk,ev);
case 4:
return chsk_send_BANG___4.call(this,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = chsk_send_BANG___2;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = chsk_send_BANG___4;
return chsk_send_BANG_;
})()
;
taoensso.sente.chsk_make_BANG_ = (function chsk_make_BANG_(chsk,opts){if((function (){var and__3544__auto__ = chsk;if(and__3544__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_make_BANG_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_make_BANG_$arity$2(chsk,opts);
} else
{var x__4183__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3556__auto__ = (taoensso.sente.chsk_make_BANG_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (taoensso.sente.chsk_make_BANG_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-make!",chsk);
}
}
})().call(null,chsk,opts);
}
});
taoensso.sente.reset_chsk_state_BANG_ = (function reset_chsk_state_BANG_(p__21261,now_open_QMARK_){var map__21263 = p__21261;var map__21263__$1 = ((cljs.core.seq_QMARK_.call(null,map__21263))?cljs.core.apply.call(null,cljs.core.hash_map,map__21263):map__21263);var chsk = map__21263__$1;var open_QMARK_ = cljs.core.get.call(null,map__21263__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));var chs = cljs.core.get.call(null,map__21263__$1,new cljs.core.Keyword(null,"chs","chs",376886120));if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,open_QMARK_),now_open_QMARK_))
{cljs.core.reset_BANG_.call(null,open_QMARK_,now_open_QMARK_);
var new_state = (cljs.core.truth_(now_open_QMARK_)?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359));cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);
return new_state;
} else
{return null;
}
});
taoensso.sente.wrap_cb_chan_as_fn = (function wrap_cb_chan_as_fn(_QMARK_cb,ev){if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)))
{return _QMARK_cb;
} else
{if(taoensso.sente.chan_QMARK_.call(null,_QMARK_cb))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",1219428,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))));
}
taoensso.sente.assert_event.call(null,ev);
var vec__21265 = ev;var ev_id = cljs.core.nth.call(null,vec__21265,(0),null);var _ = cljs.core.nth.call(null,vec__21265,(1),null);var cb_ch = _QMARK_cb;return ((function (vec__21265,ev_id,_,cb_ch){
return (function (reply){return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.fq_name.call(null,ev_id))+".cb")),reply], null));
});
;})(vec__21265,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(ch_recv,clj){if(cljs.core.vector_QMARK_.call(null,clj))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"clj","clj",980036099,null)))))));
}
var buffered_evs = clj;var seq__21270 = cljs.core.seq.call(null,buffered_evs);var chunk__21271 = null;var count__21272 = (0);var i__21273 = (0);while(true){
if((i__21273 < count__21272))
{var ev = cljs.core._nth.call(null,chunk__21271,i__21273);taoensso.sente.assert_event.call(null,ev);
cljs.core.async.put_BANG_.call(null,ch_recv,ev);
{
var G__21274 = seq__21270;
var G__21275 = chunk__21271;
var G__21276 = count__21272;
var G__21277 = (i__21273 + (1));
seq__21270 = G__21274;
chunk__21271 = G__21275;
count__21272 = G__21276;
i__21273 = G__21277;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21270);if(temp__4126__auto__)
{var seq__21270__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21270__$1))
{var c__4312__auto__ = cljs.core.chunk_first.call(null,seq__21270__$1);{
var G__21278 = cljs.core.chunk_rest.call(null,seq__21270__$1);
var G__21279 = c__4312__auto__;
var G__21280 = cljs.core.count.call(null,c__4312__auto__);
var G__21281 = (0);
seq__21270 = G__21278;
chunk__21271 = G__21279;
count__21272 = G__21280;
i__21273 = G__21281;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__21270__$1);taoensso.sente.assert_event.call(null,ev);
cljs.core.async.put_BANG_.call(null,ch_recv,ev);
{
var G__21282 = cljs.core.next.call(null,seq__21270__$1);
var G__21283 = null;
var G__21284 = (0);
var G__21285 = (0);
seq__21270 = G__21282;
chunk__21271 = G__21283;
count__21272 = G__21284;
i__21273 = G__21285;
continue;
}
}
} else
{return null;
}
}
break;
}
});

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} open_QMARK_
* @param {*} socket_atom
* @param {*} kalive_timer
* @param {*} kalive_due_QMARK_
* @param {*} cbs_waiting
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChWebSocket = (function (url,chs,open_QMARK_,socket_atom,kalive_timer,kalive_due_QMARK_,cbs_waiting,__meta,__extmap){
this.url = url;
this.chs = chs;
this.open_QMARK_ = open_QMARK_;
this.socket_atom = socket_atom;
this.kalive_timer = kalive_timer;
this.kalive_due_QMARK_ = kalive_due_QMARK_;
this.cbs_waiting = cbs_waiting;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4142__auto__,k__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;return cljs.core._lookup.call(null,this__4142__auto____$1,k__4143__auto__,null);
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4144__auto__,k21287,else__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;var G__21289 = (((k21287 instanceof cljs.core.Keyword))?k21287.fqn:null);switch (G__21289) {
case "cbs-waiting":
return self__.cbs_waiting;

break;
case "kalive-due?":
return self__.kalive_due_QMARK_;

break;
case "kalive-timer":
return self__.kalive_timer;

break;
case "socket-atom":
return self__.socket_atom;

break;
case "open?":
return self__.open_QMARK_;

break;
case "chs":
return self__.chs;

break;
case "url":
return self__.url;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21287,else__4145__auto__);

}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4156__auto__,writer__4157__auto__,opts__4158__auto__){var self__ = this;
var this__4156__auto____$1 = this;var pr_pair__4159__auto__ = ((function (this__4156__auto____$1){
return (function (keyval__4160__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4157__auto__,cljs.core.pr_writer,""," ","",opts__4158__auto__,keyval__4160__auto__);
});})(this__4156__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4157__auto__,pr_pair__4159__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4158__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket-atom","socket-atom",901389420),self__.socket_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer","kalive-timer",1609773562),self__.kalive_timer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?","kalive-due?",396023482),self__.kalive_due_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting","cbs-waiting",-920020328),self__.cbs_waiting],null))], null),self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4140__auto__){var self__ = this;
var this__4140__auto____$1 = this;return self__.__meta;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4136__auto__){var self__ = this;
var this__4136__auto____$1 = this;return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.open_QMARK_,self__.socket_atom,self__.kalive_timer,self__.kalive_due_QMARK_,self__.cbs_waiting,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4146__auto__){var self__ = this;
var this__4146__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;var h__3967__auto__ = self__.__hash;if(!((h__3967__auto__ == null)))
{return h__3967__auto__;
} else
{var h__3967__auto____$1 = cljs.core.hash_imap.call(null,this__4137__auto____$1);self__.__hash = h__3967__auto____$1;
return h__3967__auto____$1;
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4138__auto__,other__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.truth_((function (){var and__3544__auto__ = other__4139__auto__;if(cljs.core.truth_(and__3544__auto__))
{return ((this__4138__auto____$1.constructor === other__4139__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4138__auto____$1,other__4139__auto__));
} else
{return and__3544__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4151__auto__,k__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket-atom","socket-atom",901389420),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"cbs-waiting","cbs-waiting",-920020328),null,new cljs.core.Keyword(null,"kalive-timer","kalive-timer",1609773562),null,new cljs.core.Keyword(null,"kalive-due?","kalive-due?",396023482),null], null), null),k__4152__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4151__auto____$1),self__.__meta),k__4152__auto__);
} else
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.open_QMARK_,self__.socket_atom,self__.kalive_timer,self__.kalive_due_QMARK_,self__.cbs_waiting,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4152__auto__)),null));
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4149__auto__,k__4150__auto__,G__21286){var self__ = this;
var this__4149__auto____$1 = this;var pred__21290 = cljs.core.keyword_identical_QMARK_;var expr__21291 = k__4150__auto__;if(cljs.core.truth_(pred__21290.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__21291)))
{return (new taoensso.sente.ChWebSocket(G__21286,self__.chs,self__.open_QMARK_,self__.socket_atom,self__.kalive_timer,self__.kalive_due_QMARK_,self__.cbs_waiting,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21290.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__21291)))
{return (new taoensso.sente.ChWebSocket(self__.url,G__21286,self__.open_QMARK_,self__.socket_atom,self__.kalive_timer,self__.kalive_due_QMARK_,self__.cbs_waiting,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21290.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__21291)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,G__21286,self__.socket_atom,self__.kalive_timer,self__.kalive_due_QMARK_,self__.cbs_waiting,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21290.call(null,new cljs.core.Keyword(null,"socket-atom","socket-atom",901389420),expr__21291)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.open_QMARK_,G__21286,self__.kalive_timer,self__.kalive_due_QMARK_,self__.cbs_waiting,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21290.call(null,new cljs.core.Keyword(null,"kalive-timer","kalive-timer",1609773562),expr__21291)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.open_QMARK_,self__.socket_atom,G__21286,self__.kalive_due_QMARK_,self__.cbs_waiting,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21290.call(null,new cljs.core.Keyword(null,"kalive-due?","kalive-due?",396023482),expr__21291)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.open_QMARK_,self__.socket_atom,self__.kalive_timer,G__21286,self__.cbs_waiting,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21290.call(null,new cljs.core.Keyword(null,"cbs-waiting","cbs-waiting",-920020328),expr__21291)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.open_QMARK_,self__.socket_atom,self__.kalive_timer,self__.kalive_due_QMARK_,G__21286,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.open_QMARK_,self__.socket_atom,self__.kalive_timer,self__.kalive_due_QMARK_,self__.cbs_waiting,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4150__auto__,G__21286),null));
}
}
}
}
}
}
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4154__auto__){var self__ = this;
var this__4154__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket-atom","socket-atom",901389420),self__.socket_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer","kalive-timer",1609773562),self__.kalive_timer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?","kalive-due?",396023482),self__.kalive_due_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting","cbs-waiting",-920020328),self__.cbs_waiting],null))], null),self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4141__auto__,G__21286){var self__ = this;
var this__4141__auto____$1 = this;return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.open_QMARK_,self__.socket_atom,self__.kalive_timer,self__.kalive_due_QMARK_,self__.cbs_waiting,G__21286,self__.__extmap,self__.__hash));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4147__auto__,entry__4148__auto__){var self__ = this;
var this__4147__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4148__auto__))
{return cljs.core._assoc.call(null,this__4147__auto____$1,cljs.core._nth.call(null,entry__4148__auto__,(0)),cljs.core._nth.call(null,entry__4148__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4147__auto____$1,entry__4148__auto__);
}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"ws","ws",86841443);
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_open_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.open_QMARK_);
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 = (function (chsk,ev){var self__ = this;
var chsk__$1 = this;return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,ev,null,null);
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){var self__ = this;
var chsk__$1 = this;taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.wrap_cb_chan_as_fn.call(null,_QMARK_cb,ev);if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.open_QMARK_)))
{taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else
{return null;
}
} else
{var vec__21293 = taoensso.sente.wrap_clj__GT_edn_msg_with__QMARK_cb.call(null,self__.cbs_waiting,ev,_QMARK_timeout_ms,_QMARK_cb_fn);var edn = cljs.core.nth.call(null,vec__21293,(0),null);var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__21293,(1),null);try{cljs.core.deref.call(null,self__.socket_atom).send(edn);
cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK_,false);
return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e21294){if((e21294 instanceof Error))
{var e = e21294;taoensso.encore.errorf.call(null,"Chsk send %s",e);
if(cljs.core.truth_(_QMARK_cb_uuid))
{var cb_fn_STAR__21304 = (function (){var or__3556__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting,_QMARK_cb_uuid);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return _QMARK_cb_fn;
}
})();cb_fn_STAR__21304.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else
{}
return false;
} else
{throw e21294;

}
}}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_make_BANG_$arity$2 = (function (chsk,p__21295){var self__ = this;
var map__21296 = p__21295;var map__21296__$1 = ((cljs.core.seq_QMARK_.call(null,map__21296))?cljs.core.apply.call(null,cljs.core.hash_map,map__21296):map__21296);var kalive_ms = cljs.core.get.call(null,map__21296__$1,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021));var chsk__$1 = this;var temp__4126__auto__ = (function (){var or__3556__auto__ = window.WebSocket;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return window.MozWebSocket;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var WebSocket = temp__4126__auto__;((function (WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms){
return (function connect_BANG_(nattempt){var retry_BANG_ = ((function (WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms){
return (function (){var nattempt_STAR_ = (nattempt + (1));window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer));
taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);
return taoensso.encore.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,connect_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms))
;var temp__4124__auto__ = (function (){try{return (new WebSocket(self__.url));
}catch (e21300){if((e21300 instanceof Error))
{var e = e21300;taoensso.encore.errorf.call(null,"WebSocket js/Error: %s",e);
return false;
} else
{throw e21300;

}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var socket = temp__4124__auto__;return cljs.core.reset_BANG_.call(null,self__.socket_atom,(function (){var G__21301 = socket;(G__21301["onerror"] = ((function (G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms){
return (function (ws_ev){return taoensso.encore.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms))
);
(G__21301["onmessage"] = ((function (G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms){
return (function (ws_ev){var edn = ws_ev.data;var vec__21302 = taoensso.sente.unwrap_edn_msg_with__QMARK_cb__GT_clj.call(null,edn);var clj = cljs.core.nth.call(null,vec__21302,(0),null);var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__21302,(1),null);if(cljs.core._EQ_.call(null,clj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.Keyword(null,"ws","ws",86841443)], null)))
{return taoensso.sente.reset_chsk_state_BANG_.call(null,chsk__$1,true);
} else
{if(cljs.core.truth_(_QMARK_cb_uuid))
{var temp__4124__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting,_QMARK_cb_uuid);if(cljs.core.truth_(temp__4124__auto____$1))
{var cb_fn = temp__4124__auto____$1;return cb_fn.call(null,clj);
} else
{return taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else
{var buffered_evs = clj;return taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"recv","recv",558628610).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs);
}
}
});})(G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms))
);
(G__21301["onopen"] = ((function (G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms){
return (function (_ws_ev){return cljs.core.reset_BANG_.call(null,self__.kalive_timer,window.setInterval(((function (G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms){
return (function (){if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK_)))
{taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ping","chsk/ping",-1666863719),new cljs.core.Keyword(null,"ws","ws",86841443)], null));
} else
{}
return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK_,true);
});})(G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms))
,kalive_ms));
});})(G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms))
);
(G__21301["onclose"] = ((function (G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms){
return (function (_ws_ev){return retry_BANG_.call(null);
});})(G__21301,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms))
);
return G__21301;
})());
} else
{return retry_BANG_.call(null);
}
});})(WebSocket,temp__4126__auto__,chsk__$1,map__21296,map__21296__$1,kalive_ms))
.call(null,(0));
return chsk__$1;
} else
{return null;
}
});
taoensso.sente.ChWebSocket.cljs$lang$type = true;
taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4176__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});
taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__){return cljs.core._write.call(null,writer__4177__auto__,"taoensso.sente/ChWebSocket");
});
taoensso.sente.__GT_ChWebSocket = (function __GT_ChWebSocket(url,chs,open_QMARK_,socket_atom,kalive_timer,kalive_due_QMARK_,cbs_waiting){return (new taoensso.sente.ChWebSocket(url,chs,open_QMARK_,socket_atom,kalive_timer,kalive_due_QMARK_,cbs_waiting));
});
taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__21288){return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__21288),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__21288),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__21288),new cljs.core.Keyword(null,"socket-atom","socket-atom",901389420).cljs$core$IFn$_invoke$arity$1(G__21288),new cljs.core.Keyword(null,"kalive-timer","kalive-timer",1609773562).cljs$core$IFn$_invoke$arity$1(G__21288),new cljs.core.Keyword(null,"kalive-due?","kalive-due?",396023482).cljs$core$IFn$_invoke$arity$1(G__21288),new cljs.core.Keyword(null,"cbs-waiting","cbs-waiting",-920020328).cljs$core$IFn$_invoke$arity$1(G__21288),null,cljs.core.dissoc.call(null,G__21288,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"socket-atom","socket-atom",901389420),new cljs.core.Keyword(null,"kalive-timer","kalive-timer",1609773562),new cljs.core.Keyword(null,"kalive-due?","kalive-due?",396023482),new cljs.core.Keyword(null,"cbs-waiting","cbs-waiting",-920020328))));
});

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} open_QMARK_
* @param {*} ajax_client_uuid
* @param {*} csrf_token
* @param {*} has_uid_QMARK_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChAjaxSocket = (function (url,chs,open_QMARK_,ajax_client_uuid,csrf_token,has_uid_QMARK_,__meta,__extmap){
this.url = url;
this.chs = chs;
this.open_QMARK_ = open_QMARK_;
this.ajax_client_uuid = ajax_client_uuid;
this.csrf_token = csrf_token;
this.has_uid_QMARK_ = has_uid_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4142__auto__,k__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;return cljs.core._lookup.call(null,this__4142__auto____$1,k__4143__auto__,null);
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4144__auto__,k21306,else__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;var G__21308 = (((k21306 instanceof cljs.core.Keyword))?k21306.fqn:null);switch (G__21308) {
case "has-uid?":
return self__.has_uid_QMARK_;

break;
case "csrf-token":
return self__.csrf_token;

break;
case "ajax-client-uuid":
return self__.ajax_client_uuid;

break;
case "open?":
return self__.open_QMARK_;

break;
case "chs":
return self__.chs;

break;
case "url":
return self__.url;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21306,else__4145__auto__);

}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4156__auto__,writer__4157__auto__,opts__4158__auto__){var self__ = this;
var this__4156__auto____$1 = this;var pr_pair__4159__auto__ = ((function (this__4156__auto____$1){
return (function (keyval__4160__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4157__auto__,cljs.core.pr_writer,""," ","",opts__4158__auto__,keyval__4160__auto__);
});})(this__4156__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4157__auto__,pr_pair__4159__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4158__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),self__.csrf_token],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"has-uid?","has-uid?",-2027340888),self__.has_uid_QMARK_],null))], null),self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4140__auto__){var self__ = this;
var this__4140__auto____$1 = this;return self__.__meta;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4136__auto__){var self__ = this;
var this__4136__auto____$1 = this;return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.open_QMARK_,self__.ajax_client_uuid,self__.csrf_token,self__.has_uid_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4146__auto__){var self__ = this;
var this__4146__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;var h__3967__auto__ = self__.__hash;if(!((h__3967__auto__ == null)))
{return h__3967__auto__;
} else
{var h__3967__auto____$1 = cljs.core.hash_imap.call(null,this__4137__auto____$1);self__.__hash = h__3967__auto____$1;
return h__3967__auto____$1;
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4138__auto__,other__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.truth_((function (){var and__3544__auto__ = other__4139__auto__;if(cljs.core.truth_(and__3544__auto__))
{return ((this__4138__auto____$1.constructor === other__4139__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4138__auto____$1,other__4139__auto__));
} else
{return and__3544__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4151__auto__,k__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"has-uid?","has-uid?",-2027340888),null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),null], null), null),k__4152__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4151__auto____$1),self__.__meta),k__4152__auto__);
} else
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.open_QMARK_,self__.ajax_client_uuid,self__.csrf_token,self__.has_uid_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4152__auto__)),null));
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4149__auto__,k__4150__auto__,G__21305){var self__ = this;
var this__4149__auto____$1 = this;var pred__21309 = cljs.core.keyword_identical_QMARK_;var expr__21310 = k__4150__auto__;if(cljs.core.truth_(pred__21309.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__21310)))
{return (new taoensso.sente.ChAjaxSocket(G__21305,self__.chs,self__.open_QMARK_,self__.ajax_client_uuid,self__.csrf_token,self__.has_uid_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21309.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__21310)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,G__21305,self__.open_QMARK_,self__.ajax_client_uuid,self__.csrf_token,self__.has_uid_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21309.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__21310)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,G__21305,self__.ajax_client_uuid,self__.csrf_token,self__.has_uid_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21309.call(null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),expr__21310)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.open_QMARK_,G__21305,self__.csrf_token,self__.has_uid_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21309.call(null,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),expr__21310)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.open_QMARK_,self__.ajax_client_uuid,G__21305,self__.has_uid_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21309.call(null,new cljs.core.Keyword(null,"has-uid?","has-uid?",-2027340888),expr__21310)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.open_QMARK_,self__.ajax_client_uuid,self__.csrf_token,G__21305,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.open_QMARK_,self__.ajax_client_uuid,self__.csrf_token,self__.has_uid_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4150__auto__,G__21305),null));
}
}
}
}
}
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4154__auto__){var self__ = this;
var this__4154__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),self__.csrf_token],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"has-uid?","has-uid?",-2027340888),self__.has_uid_QMARK_],null))], null),self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4141__auto__,G__21305){var self__ = this;
var this__4141__auto____$1 = this;return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.open_QMARK_,self__.ajax_client_uuid,self__.csrf_token,self__.has_uid_QMARK_,G__21305,self__.__extmap,self__.__hash));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4147__auto__,entry__4148__auto__){var self__ = this;
var this__4147__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4148__auto__))
{return cljs.core._assoc.call(null,this__4147__auto____$1,cljs.core._nth.call(null,entry__4148__auto__,(0)),cljs.core._nth.call(null,entry__4148__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4147__auto____$1,entry__4148__auto__);
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"ajax","ajax",814345549);
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_open_QMARK_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;return cljs.core.deref.call(null,self__.open_QMARK_);
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 = (function (chsk,ev){var self__ = this;
var chsk__$1 = this;return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,ev,null,null);
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){var self__ = this;
var chsk__$1 = this;taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.wrap_cb_chan_as_fn.call(null,_QMARK_cb,ev);if(cljs.core.not.call(null,(function (){var or__3556__auto__ = cljs.core.deref.call(null,self__.open_QMARK_);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
}
})()))
{taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else
{return null;
}
} else
{taoensso.encore.ajax_lite.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout","timeout",-318625318),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var dummy_cb_QMARK_ = cljs.core.not.call(null,_QMARK_cb_fn);var msg = ((!(dummy_cb_QMARK_))?ev:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("chsk","clj","chsk/clj",-655164811),ev,new cljs.core.Keyword("chsk","dummy-cb?","chsk/dummy-cb?",1470544223),true], null));var edn = cljs.core.pr_str.call(null,msg);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"edn","edn",1317840885),edn,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),self__.csrf_token], null);
})()], null),((function (_QMARK_cb_fn,chsk__$1){
return (function ajax_cb(p__21312){var map__21314 = p__21312;var map__21314__$1 = ((cljs.core.seq_QMARK_.call(null,map__21314))?cljs.core.apply.call(null,cljs.core.hash_map,map__21314):map__21314);var error = cljs.core.get.call(null,map__21314__$1,new cljs.core.Keyword(null,"error","error",-978969032));var content = cljs.core.get.call(null,map__21314__$1,new cljs.core.Keyword(null,"content","content",15833224));if(cljs.core.truth_(error))
{if(cljs.core._EQ_.call(null,error,new cljs.core.Keyword(null,"timeout","timeout",-318625318)))
{if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else
{return null;
}
} else
{taoensso.sente.reset_chsk_state_BANG_.call(null,chsk__$1,false);
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else
{return null;
}
}
} else
{var resp_edn = content;var resp_clj = cljs.reader.read_string.call(null,resp_edn);if(cljs.core.truth_(_QMARK_cb_fn))
{_QMARK_cb_fn.call(null,resp_clj);
} else
{if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-200","chsk/dummy-200",-68814414)))
{taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else
{}
}
return taoensso.sente.reset_chsk_state_BANG_.call(null,chsk__$1,true);
}
});})(_QMARK_cb_fn,chsk__$1))
);
return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_make_BANG_$arity$2 = (function (chsk,p__21315){var self__ = this;
var map__21316 = p__21315;var map__21316__$1 = ((cljs.core.seq_QMARK_.call(null,map__21316))?cljs.core.apply.call(null,cljs.core.hash_map,map__21316):map__21316);var timeout = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));var chsk__$1 = this;if(cljs.core.not.call(null,self__.has_uid_QMARK_))
{taoensso.sente.reset_chsk_state_BANG_.call(null,chsk__$1,true);
} else
{((function (chsk__$1,map__21316,map__21316__$1,timeout){
return (function async_poll_for_update_BANG_(nattempt){var retry_BANG__21324 = ((function (chsk__$1,map__21316,map__21316__$1,timeout){
return (function (){var nattempt_STAR_ = (nattempt + (1));taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);
return taoensso.encore.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1,map__21316,map__21316__$1,timeout))
;var ajax_req_BANG__21325 = ((function (retry_BANG__21324,chsk__$1,map__21316,map__21316__$1,timeout){
return (function (){return taoensso.encore.ajax_lite.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid], null)], null),((function (retry_BANG__21324,chsk__$1,map__21316,map__21316__$1,timeout){
return (function ajax_cb(p__21320){var map__21322 = p__21320;var map__21322__$1 = ((cljs.core.seq_QMARK_.call(null,map__21322))?cljs.core.apply.call(null,cljs.core.hash_map,map__21322):map__21322);var error = cljs.core.get.call(null,map__21322__$1,new cljs.core.Keyword(null,"error","error",-978969032));var content = cljs.core.get.call(null,map__21322__$1,new cljs.core.Keyword(null,"content","content",15833224));if(cljs.core.truth_(error))
{if(cljs.core._EQ_.call(null,error,new cljs.core.Keyword(null,"timeout","timeout",-318625318)))
{return async_poll_for_update_BANG_.call(null,(0));
} else
{taoensso.sente.reset_chsk_state_BANG_.call(null,chsk__$1,false);
return retry_BANG__21324.call(null);
}
} else
{var edn = content;var buffered_evs = cljs.reader.read_string.call(null,edn);taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"recv","recv",558628610).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs);
taoensso.sente.reset_chsk_state_BANG_.call(null,chsk__$1,true);
return async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG__21324,chsk__$1,map__21316,map__21316__$1,timeout))
);
});})(retry_BANG__21324,chsk__$1,map__21316,map__21316__$1,timeout))
;var temp__4124__auto___21326 = window.Pace;if(cljs.core.truth_(temp__4124__auto___21326))
{var pace_21327 = temp__4124__auto___21326;pace_21327.ignore(ajax_req_BANG__21325);
} else
{ajax_req_BANG__21325.call(null);
}
if(cljs.core.truth_(cljs.core.deref.call(null,self__.open_QMARK_)))
{return null;
} else
{return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
}
});})(chsk__$1,map__21316,map__21316__$1,timeout))
.call(null,(0));
}
return chsk__$1;
});
taoensso.sente.ChAjaxSocket.cljs$lang$type = true;
taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4176__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});
taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__){return cljs.core._write.call(null,writer__4177__auto__,"taoensso.sente/ChAjaxSocket");
});
taoensso.sente.__GT_ChAjaxSocket = (function __GT_ChAjaxSocket(url,chs,open_QMARK_,ajax_client_uuid,csrf_token,has_uid_QMARK_){return (new taoensso.sente.ChAjaxSocket(url,chs,open_QMARK_,ajax_client_uuid,csrf_token,has_uid_QMARK_));
});
taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__21307){return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__21307),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__21307),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__21307),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580).cljs$core$IFn$_invoke$arity$1(G__21307),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(G__21307),new cljs.core.Keyword(null,"has-uid?","has-uid?",-2027340888).cljs$core$IFn$_invoke$arity$1(G__21307),null,cljs.core.dissoc.call(null,G__21307,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"has-uid?","has-uid?",-2027340888))));
});
/**
* @param {...*} var_args
*/
taoensso.sente.chsk_url = (function() { 
var chsk_url__delegate = function (path,p__21328){var vec__21331 = p__21328;var websocket_QMARK_ = cljs.core.nth.call(null,vec__21331,(0),null);var map__21332 = taoensso.encore.get_window_location.call(null);var map__21332__$1 = ((cljs.core.seq_QMARK_.call(null,map__21332))?cljs.core.apply.call(null,cljs.core.hash_map,map__21332):map__21332);var pathname = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));var host = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"host","host",-1558485167));var protocol = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:")))+"//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3556__auto__ = path;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return pathname;
}
})()));
};
var chsk_url = function (path,var_args){
var p__21328 = null;if (arguments.length > 1) {
  p__21328 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return chsk_url__delegate.call(this,path,p__21328);};
chsk_url.cljs$lang$maxFixedArity = 1;
chsk_url.cljs$lang$applyTo = (function (arglist__21333){
var path = cljs.core.first(arglist__21333);
var p__21328 = cljs.core.rest(arglist__21333);
return chsk_url__delegate(path,p__21328);
});
chsk_url.cljs$core$IFn$_invoke$arity$variadic = chsk_url__delegate;
return chsk_url;
})()
;
/**
* Returns `{:keys [chsk ch-recv send-fn]}` for a new ChWebSocket or ChAjaxSocket that
* provides an ISocket interface:
* * An efficient, convenient, high-performance client/server message API.
* * Both callback and channel (routing) style bidirectional support.
* * Encapsulation of all low-level nastiness like capability fallback,
* reconnects, keep-alives, error logging, etc.
* 
* Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
* routes should be configured accordingly.
* @param {...*} var_args
*/
taoensso.sente.make_channel_socket_BANG_ = (function() { 
var make_channel_socket_BANG___delegate = function (url,p__21334,p__21335){var map__21339 = p__21334;var map__21339__$1 = ((cljs.core.seq_QMARK_.call(null,map__21339))?cljs.core.apply.call(null,cljs.core.hash_map,map__21339):map__21339);var has_uid_QMARK_ = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"has-uid?","has-uid?",-2027340888));var csrf_token = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856));var vec__21340 = p__21335;var map__21341 = cljs.core.nth.call(null,vec__21340,(0),null);var map__21341__$1 = ((cljs.core.seq_QMARK_.call(null,map__21341))?cljs.core.apply.call(null,cljs.core.hash_map,map__21341):map__21341);var lp_timeout = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302),(38000));var ws_kalive_ms = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(38000));var recv_buf_or_n = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));var type = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,csrf_token)))
{taoensso.encore.log.call(null,"WARNING: No csrf-token provided");
} else
{}
var chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1))),new cljs.core.Keyword(null,"recv","recv",558628610),cljs.core.async.chan.call(null,recv_buf_or_n),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,recv_buf_or_n)], null);var chsk = (function (){var or__3556__auto__ = (function (){var and__3544__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));if(and__3544__auto__)
{return taoensso.sente.chsk_make_BANG_.call(null,(new taoensso.sente.ChWebSocket(taoensso.sente.chsk_url.call(null,url,new cljs.core.Keyword(null,"ws","ws",86841443)),chs,cljs.core.atom.call(null,false),cljs.core.atom.call(null,null),cljs.core.atom.call(null,null),cljs.core.atom.call(null,true),cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),ws_kalive_ms], null));
} else
{return and__3544__auto__;
}
})();if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{var and__3544__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));if(and__3544__auto__)
{var ajax_client_uuid = taoensso.encore.uuid_str.call(null);return taoensso.sente.chsk_make_BANG_.call(null,(new taoensso.sente.ChAjaxSocket(taoensso.sente.chsk_url.call(null,url),chs,cljs.core.atom.call(null,false),ajax_client_uuid,csrf_token,has_uid_QMARK_)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),lp_timeout], null));
} else
{return and__3544__auto__;
}
}
})();var type_STAR_ = taoensso.sente.chsk_type.call(null,chsk);var ever_opened_QMARK_ = cljs.core.atom.call(null,false);var state_STAR_ = ((function (chs,chsk,type_STAR_,ever_opened_QMARK_,map__21339,map__21339__$1,has_uid_QMARK_,csrf_token,vec__21340,map__21341,map__21341__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type){
return (function (clj){if(cljs.core.truth_((function (){var or__3556__auto__ = cljs.core.not_EQ_.call(null,clj,new cljs.core.Keyword(null,"open","open",-1763596448));if(or__3556__auto__)
{return or__3556__auto__;
} else
{return cljs.core.deref.call(null,ever_opened_QMARK_);
}
})()))
{return clj;
} else
{cljs.core.reset_BANG_.call(null,ever_opened_QMARK_,true);
return new cljs.core.Keyword(null,"first-open","first-open",1868694839);
}
});})(chs,chsk,type_STAR_,ever_opened_QMARK_,map__21339,map__21339__$1,has_uid_QMARK_,csrf_token,vec__21340,map__21341,map__21341__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type))
;if(cljs.core.truth_(chsk))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.map_LT_.call(null,((function (chs,chsk,type_STAR_,ever_opened_QMARK_,state_STAR_,map__21339,map__21339__$1,has_uid_QMARK_,csrf_token,vec__21340,map__21341,map__21341__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type){
return (function (ev){if(taoensso.sente.event_QMARK_.call(null,ev))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"event?","event?",-2038386683,null),new cljs.core.Symbol(null,"ev","ev",1233704203,null)))))));
}
return ev;
});})(chs,chsk,type_STAR_,ever_opened_QMARK_,state_STAR_,map__21339,map__21339__$1,has_uid_QMARK_,csrf_token,vec__21340,map__21341,map__21341__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type))
,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs)),cljs.core.async.map_LT_.call(null,((function (chs,chsk,type_STAR_,ever_opened_QMARK_,state_STAR_,map__21339,map__21339__$1,has_uid_QMARK_,csrf_token,vec__21340,map__21341,map__21341__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type){
return (function (clj){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_.call(null,clj),type_STAR_], null)], null);
});})(chs,chsk,type_STAR_,ever_opened_QMARK_,state_STAR_,map__21339,map__21339__$1,has_uid_QMARK_,csrf_token,vec__21340,map__21341,map__21341__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs)),cljs.core.async.map_LT_.call(null,((function (chs,chsk,type_STAR_,ever_opened_QMARK_,state_STAR_,map__21339,map__21339__$1,has_uid_QMARK_,csrf_token,vec__21340,map__21341,map__21341__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type){
return (function (ev){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(chs,chsk,type_STAR_,ever_opened_QMARK_,state_STAR_,map__21339,map__21339__$1,has_uid_QMARK_,csrf_token,vec__21340,map__21341,map__21341__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type))
,new cljs.core.Keyword(null,"recv","recv",558628610).cljs$core$IFn$_invoke$arity$1(chs))], null))], null);
} else
{return null;
}
};
var make_channel_socket_BANG_ = function (url,p__21334,var_args){
var p__21335 = null;if (arguments.length > 2) {
  p__21335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return make_channel_socket_BANG___delegate.call(this,url,p__21334,p__21335);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 2;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__21342){
var url = cljs.core.first(arglist__21342);
arglist__21342 = cljs.core.next(arglist__21342);
var p__21334 = cljs.core.first(arglist__21342);
var p__21335 = cljs.core.rest(arglist__21342);
return make_channel_socket_BANG___delegate(url,p__21334,p__21335);
});
make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = make_channel_socket_BANG___delegate;
return make_channel_socket_BANG_;
})()
;
taoensso.sente.start_chsk_router_loop_BANG_ = (function start_chsk_router_loop_BANG_(event_handler,ch){var c__6891__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto__){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto__){
return (function (state_21377){var state_val_21378 = (state_21377[(1)]);if((state_val_21378 === (4)))
{var inst_21369 = (state_21377[(2)]);var inst_21370 = cljs.core.nth.call(null,inst_21369,(0),null);var inst_21371 = cljs.core.nth.call(null,inst_21369,(1),null);var inst_21372 = event_handler.call(null,inst_21369,ch);var state_21377__$1 = (function (){var statearr_21379 = state_21377;(statearr_21379[(7)] = inst_21371);
(statearr_21379[(8)] = inst_21372);
(statearr_21379[(9)] = inst_21370);
return statearr_21379;
})();var statearr_21380_21389 = state_21377__$1;(statearr_21380_21389[(2)] = null);
(statearr_21380_21389[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21378 === (3)))
{var inst_21375 = (state_21377[(2)]);var state_21377__$1 = state_21377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21377__$1,inst_21375);
} else
{if((state_val_21378 === (2)))
{var state_21377__$1 = state_21377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21377__$1,(4),ch);
} else
{if((state_val_21378 === (1)))
{var state_21377__$1 = state_21377;var statearr_21381_21390 = state_21377__$1;(statearr_21381_21390[(2)] = null);
(statearr_21381_21390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6891__auto__))
;return ((function (switch__6876__auto__,c__6891__auto__){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_21385 = [null,null,null,null,null,null,null,null,null,null];(statearr_21385[(0)] = state_machine__6877__auto__);
(statearr_21385[(1)] = (1));
return statearr_21385;
});
var state_machine__6877__auto____1 = (function (state_21377){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_21377);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e21386){if((e21386 instanceof Object))
{var ex__6880__auto__ = e21386;var statearr_21387_21391 = state_21377;(statearr_21387_21391[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21386;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21392 = state_21377;
state_21377 = G__21392;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_21377){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_21377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto__))
})();var state__6893__auto__ = (function (){var statearr_21388 = f__6892__auto__.call(null);(statearr_21388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto__);
return statearr_21388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto__))
);
return c__6891__auto__;
});

//# sourceMappingURL=sente.js.map