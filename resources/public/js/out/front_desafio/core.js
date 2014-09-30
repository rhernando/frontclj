// Compiled by ClojureScript 0.0-2322
goog.provide('front_desafio.core');
goog.require('cljs.core');
goog.require('front_desafio.utils');
goog.require('cljs.core.async');
goog.require('om_bootstrap.input');
goog.require('om.dom');
goog.require('om_tools.dom');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om_bootstrap.nav');
goog.require('om_bootstrap.nav');
goog.require('goog.events');
goog.require('taoensso.sente');
goog.require('front_desafio.utils');
goog.require('taoensso.sente');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.button');
goog.require('goog.events');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.input');
goog.require('cljs_http.client');
goog.require('om_tools.dom');
cljs.core.enable_console_print_BANG_.call(null);
var map__15545_15546 = taoensso.sente.make_channel_socket_BANG_.call(null,"/ws",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__15545_15547__$1 = ((cljs.core.seq_QMARK_.call(null,map__15545_15546))?cljs.core.apply.call(null,cljs.core.hash_map,map__15545_15546):map__15545_15546);var send_fn_15548 = cljs.core.get.call(null,map__15545_15547__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_15549 = cljs.core.get.call(null,map__15545_15547__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_15550 = cljs.core.get.call(null,map__15545_15547__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));front_desafio.core.chsk = chsk_15550;
front_desafio.core.ch_chsk = ch_recv_15549;
front_desafio.core.chsk_send_BANG_ = send_fn_15548;
/**
* Handle events based on the event ID.
*/
front_desafio.core.handle_event = (function (){var method_table__4422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4425__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4426__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-event",((function (method_table__4422__auto__,prefer_table__4423__auto__,method_cache__4424__auto__,cached_hierarchy__4425__auto__,hierarchy__4426__auto__){
return (function (p__15551,app,owner){var vec__15552 = p__15551;var ev_id = cljs.core.nth.call(null,vec__15552,(0),null);var ev_arg = cljs.core.nth.call(null,vec__15552,(1),null);return ev_id;
});})(method_table__4422__auto__,prefer_table__4423__auto__,method_cache__4424__auto__,cached_hierarchy__4425__auto__,hierarchy__4426__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4426__auto__,method_table__4422__auto__,prefer_table__4423__auto__,method_cache__4424__auto__,cached_hierarchy__4425__auto__));
})();
cljs.core._add_method.call(null,front_desafio.core.handle_event,new cljs.core.Keyword("test","reply","test/reply",1080809065),(function (p__15553,app,owner){var vec__15554 = p__15553;var _ = cljs.core.nth.call(null,vec__15554,(0),null);var msg = cljs.core.nth.call(null,vec__15554,(1),null);return om.core.update_BANG_.call(null,app,new cljs.core.Keyword("data","text","data/text",-1785650751),msg);
}));
cljs.core._add_method.call(null,front_desafio.core.handle_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (event,app,owner){return null;
}));
cljs.core._add_method.call(null,front_desafio.core.handle_event,new cljs.core.Keyword("session","state","session/state",-64515581),(function (p__15555,app,owner){var vec__15556 = p__15555;var _ = cljs.core.nth.call(null,vec__15556,(0),null);var state = cljs.core.nth.call(null,vec__15556,(1),null);return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword("session","state","session/state",-64515581),state);
}));
cljs.core._add_method.call(null,front_desafio.core.handle_event,new cljs.core.Keyword("auth","fail","auth/fail",1703226298),(function (_,app,owner){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notify","error","notify/error",2006812381)], null),"Invalid credentials");
}));
cljs.core._add_method.call(null,front_desafio.core.handle_event,new cljs.core.Keyword("auth","success","auth/success",1884197866),(function (_,app,owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword("session","state","session/state",-64515581),new cljs.core.Keyword(null,"secure","secure",176883900));
}));
/**
* Ping the server to update the sesssion state.
*/
front_desafio.core.test_session = (function test_session(owner){return front_desafio.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session","status","session/status",289111609)], null));
});
/**
* Handle inbound events.
*/
front_desafio.core.event_loop = (function event_loop(app,owner){var c__8171__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto__){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto__){
return (function (state_15625){var state_val_15626 = (state_15625[(1)]);if((state_val_15626 === (8)))
{var inst_15620 = (state_15625[(2)]);var inst_15608 = inst_15620;var state_15625__$1 = (function (){var statearr_15627 = state_15625;(statearr_15627[(7)] = inst_15608);
return statearr_15627;
})();var statearr_15628_15645 = state_15625__$1;(statearr_15628_15645[(2)] = null);
(statearr_15628_15645[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (7)))
{var inst_15615 = front_desafio.core.test_session.call(null,owner);var state_15625__$1 = state_15625;var statearr_15629_15646 = state_15625__$1;(statearr_15629_15646[(2)] = inst_15615);
(statearr_15629_15646[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (6)))
{var inst_15612 = (state_15625[(8)]);var inst_15613 = front_desafio.core.handle_event.call(null,inst_15612,app,owner);var state_15625__$1 = state_15625;var statearr_15630_15647 = state_15625__$1;(statearr_15630_15647[(2)] = inst_15613);
(statearr_15630_15647[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (5)))
{var inst_15618 = (state_15625[(2)]);var state_15625__$1 = (function (){var statearr_15631 = state_15625;(statearr_15631[(9)] = inst_15618);
return statearr_15631;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15625__$1,(8),front_desafio.core.ch_chsk);
} else
{if((state_val_15626 === (4)))
{var inst_15623 = (state_15625[(2)]);var state_15625__$1 = state_15625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15625__$1,inst_15623);
} else
{if((state_val_15626 === (3)))
{var inst_15608 = (state_15625[(7)]);var inst_15611 = cljs.core.nth.call(null,inst_15608,(0),null);var inst_15612 = cljs.core.nth.call(null,inst_15608,(1),null);var state_15625__$1 = (function (){var statearr_15632 = state_15625;(statearr_15632[(8)] = inst_15612);
return statearr_15632;
})();var G__15633_15648 = (((inst_15611 instanceof cljs.core.Keyword))?inst_15611.fqn:null);switch (G__15633_15648) {
case "chsk/recv":
var statearr_15634_15650 = state_15625__$1;(statearr_15634_15650[(1)] = (6));

break;
default:
var statearr_15635_15651 = state_15625__$1;(statearr_15635_15651[(1)] = (7));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (2)))
{var inst_15605 = (state_15625[(2)]);var inst_15606 = cljs.core.nth.call(null,inst_15605,(0),null);var inst_15607 = cljs.core.nth.call(null,inst_15605,(1),null);var inst_15608 = inst_15605;var state_15625__$1 = (function (){var statearr_15636 = state_15625;(statearr_15636[(10)] = inst_15607);
(statearr_15636[(11)] = inst_15606);
(statearr_15636[(7)] = inst_15608);
return statearr_15636;
})();var statearr_15637_15652 = state_15625__$1;(statearr_15637_15652[(2)] = null);
(statearr_15637_15652[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (1)))
{var state_15625__$1 = state_15625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15625__$1,(2),front_desafio.core.ch_chsk);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__8171__auto__))
;return ((function (switch__8156__auto__,c__8171__auto__){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_15641 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15641[(0)] = state_machine__8157__auto__);
(statearr_15641[(1)] = (1));
return statearr_15641;
});
var state_machine__8157__auto____1 = (function (state_15625){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_15625);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e15642){if((e15642 instanceof Object))
{var ex__8160__auto__ = e15642;var statearr_15643_15653 = state_15625;(statearr_15643_15653[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15642;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15654 = state_15625;
state_15625 = G__15654;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_15625){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_15625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto__))
})();var state__8173__auto__ = (function (){var statearr_15644 = f__8172__auto__.call(null);(statearr_15644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto__);
return statearr_15644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto__))
);
return c__8171__auto__;
});
front_desafio.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Inicio",new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"avatar","avatar",-1607499307),null], null),new cljs.core.Keyword(null,"teams","teams",1677714510),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"league","league",-1135910659),null], null));
front_desafio.core.front_desafio_app = (function front_desafio_app(app,owner){if(typeof front_desafio.core.t15658 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t15658 = (function (owner,app,front_desafio_app,meta15659){
this.owner = owner;
this.app = app;
this.front_desafio_app = front_desafio_app;
this.meta15659 = meta15659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t15658.cljs$lang$type = true;
front_desafio.core.t15658.cljs$lang$ctorStr = "front-desafio.core/t15658";
front_desafio.core.t15658.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t15658");
});
front_desafio.core.t15658.prototype.om$core$IRender$ = true;
front_desafio.core.t15658.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app));
});
front_desafio.core.t15658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15660){var self__ = this;
var _15660__$1 = this;return self__.meta15659;
});
front_desafio.core.t15658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15660,meta15659__$1){var self__ = this;
var _15660__$1 = this;return (new front_desafio.core.t15658(self__.owner,self__.app,self__.front_desafio_app,meta15659__$1));
});
front_desafio.core.__GT_t15658 = (function __GT_t15658(owner__$1,app__$1,front_desafio_app__$1,meta15659){return (new front_desafio.core.t15658(owner__$1,app__$1,front_desafio_app__$1,meta15659));
});
}
return (new front_desafio.core.t15658(owner,app,front_desafio_app,null));
});
front_desafio.core.navigation_view = (function navigation_view(app,owner){if(typeof front_desafio.core.t15664 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t15664 = (function (owner,app,navigation_view,meta15665){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta15665 = meta15665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t15664.cljs$lang$type = true;
front_desafio.core.t15664.cljs$lang$ctorStr = "front-desafio.core/t15664";
front_desafio.core.t15664.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t15664");
});
front_desafio.core.t15664.prototype.om$core$IRender$ = true;
front_desafio.core.t15664.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,om_bootstrap.nav.navbar.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462),true,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987),true,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104),".navbar-ex1-collapse",new cljs.core.Keyword(null,"brand","brand",557863343),"DF"], null),om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),true,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),true,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"right"], null),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Link"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Link"),om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"title","title",636505583),"Dropdown"], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Action"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Another action"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),"Something else here"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"divider?","divider?",1882560157),true], null)),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(4)], null),"Salir"))),React.DOM.div({"className": "navbar-ex1-collapse collapse navbar-collapse"},om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav",new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true], null),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Menu 1")))));
});
front_desafio.core.t15664.prototype.om$core$IInitState$ = true;
front_desafio.core.t15664.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("session","state","session/state",-64515581),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null);
});
front_desafio.core.t15664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15666){var self__ = this;
var _15666__$1 = this;return self__.meta15665;
});
front_desafio.core.t15664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15666,meta15665__$1){var self__ = this;
var _15666__$1 = this;return (new front_desafio.core.t15664(self__.owner,self__.app,self__.navigation_view,meta15665__$1));
});
front_desafio.core.__GT_t15664 = (function __GT_t15664(owner__$1,app__$1,navigation_view__$1,meta15665){return (new front_desafio.core.t15664(owner__$1,app__$1,navigation_view__$1,meta15665));
});
}
return (new front_desafio.core.t15664(owner,app,navigation_view,null));
});
om.core.root.call(null,front_desafio.core.navigation_view,front_desafio.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("navigator")], null));
front_desafio.core.paneluser_view = (function paneluser_view(app,owner){if(typeof front_desafio.core.t15670 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t15670 = (function (owner,app,paneluser_view,meta15671){
this.owner = owner;
this.app = app;
this.paneluser_view = paneluser_view;
this.meta15671 = meta15671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t15670.cljs$lang$type = true;
front_desafio.core.t15670.cljs$lang$ctorStr = "front-desafio.core/t15670";
front_desafio.core.t15670.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t15670");
});
front_desafio.core.t15670.prototype.om$core$IRender$ = true;
front_desafio.core.t15670.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,React.DOM.span(null,cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"name","name",1843675177)], null)))));
});
front_desafio.core.t15670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15672){var self__ = this;
var _15672__$1 = this;return self__.meta15671;
});
front_desafio.core.t15670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15672,meta15671__$1){var self__ = this;
var _15672__$1 = this;return (new front_desafio.core.t15670(self__.owner,self__.app,self__.paneluser_view,meta15671__$1));
});
front_desafio.core.__GT_t15670 = (function __GT_t15670(owner__$1,app__$1,paneluser_view__$1,meta15671){return (new front_desafio.core.t15670(owner__$1,app__$1,paneluser_view__$1,meta15671));
});
}
return (new front_desafio.core.t15670(owner,app,paneluser_view,null));
});
front_desafio.core.teamrow_view = (function teamrow_view(team,owner){if(typeof front_desafio.core.t15678 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t15678 = (function (owner,team,teamrow_view,meta15679){
this.owner = owner;
this.team = team;
this.teamrow_view = teamrow_view;
this.meta15679 = meta15679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t15678.cljs$lang$type = true;
front_desafio.core.t15678.cljs$lang$ctorStr = "front-desafio.core/t15678";
front_desafio.core.t15678.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t15678");
});
front_desafio.core.t15678.prototype.om$core$IRenderState$ = true;
front_desafio.core.t15678.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15681){var self__ = this;
var map__15682 = p__15681;var map__15682__$1 = ((cljs.core.seq_QMARK_.call(null,map__15682))?cljs.core.apply.call(null,cljs.core.hash_map,map__15682):map__15682);var delete$ = cljs.core.get.call(null,map__15682__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.tr(null,React.DOM.td(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.team)),React.DOM.td(null,new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(self__.team)),React.DOM.td(null,new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(self__.team)),React.DOM.td(null,React.DOM.button({"onClick": ((function (this$__$1,map__15682,map__15682__$1,delete$){
return (function (e){return cljs.core.async.put_BANG_.call(null,delete$,self__.team);
});})(this$__$1,map__15682,map__15682__$1,delete$))
},"delete"),React.DOM.button(null,"select")));
});
front_desafio.core.t15678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15680){var self__ = this;
var _15680__$1 = this;return self__.meta15679;
});
front_desafio.core.t15678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15680,meta15679__$1){var self__ = this;
var _15680__$1 = this;return (new front_desafio.core.t15678(self__.owner,self__.team,self__.teamrow_view,meta15679__$1));
});
front_desafio.core.__GT_t15678 = (function __GT_t15678(owner__$1,team__$1,teamrow_view__$1,meta15679){return (new front_desafio.core.t15678(owner__$1,team__$1,teamrow_view__$1,meta15679));
});
}
return (new front_desafio.core.t15678(owner,team,teamrow_view,null));
});
front_desafio.core.panelteams_view = (function panelteams_view(app,owner){if(typeof front_desafio.core.t15714 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t15714 = (function (owner,app,panelteams_view,meta15715){
this.owner = owner;
this.app = app;
this.panelteams_view = panelteams_view;
this.meta15715 = meta15715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t15714.cljs$lang$type = true;
front_desafio.core.t15714.cljs$lang$ctorStr = "front-desafio.core/t15714";
front_desafio.core.t15714.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t15714");
});
front_desafio.core.t15714.prototype.om$core$IRenderState$ = true;
front_desafio.core.t15714.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15717){var self__ = this;
var map__15718 = p__15717;var map__15718__$1 = ((cljs.core.seq_QMARK_.call(null,map__15718))?cljs.core.apply.call(null,cljs.core.hash_map,map__15718):map__15718);var show = cljs.core.get.call(null,map__15718__$1,new cljs.core.Keyword(null,"show","show",-576705889));var delete$ = cljs.core.get.call(null,map__15718__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.div(null,(((cljs.core.count.call(null,new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(self__.app)) > (0)))?React.DOM.table({"className": "table table-bordered table-hover table-striped"},cljs.core.apply.call(null,om.dom.thead,null,(function (){var iter__4281__auto__ = ((function (this$__$1,map__15718,map__15718__$1,show,delete$){
return (function iter__15719(s__15720){return (new cljs.core.LazySeq(null,((function (this$__$1,map__15718,map__15718__$1,show,delete$){
return (function (){var s__15720__$1 = s__15720;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15720__$1);if(temp__4126__auto__)
{var s__15720__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15720__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__15720__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__15722 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__15721 = (0);while(true){
if((i__15721 < size__4280__auto__))
{var h = cljs.core._nth.call(null,c__4279__auto__,i__15721);var hs = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h));cljs.core.chunk_append.call(null,b__15722,React.DOM.th(null,hs));
{
var G__15744 = (i__15721 + (1));
i__15721 = G__15744;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15722),iter__15719.call(null,cljs.core.chunk_rest.call(null,s__15720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15722),null);
}
} else
{var h = cljs.core.first.call(null,s__15720__$2);var hs = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h));return cljs.core.cons.call(null,React.DOM.th(null,hs),iter__15719.call(null,cljs.core.rest.call(null,s__15720__$2)));
}
} else
{return null;
}
break;
}
});})(this$__$1,map__15718,map__15718__$1,show,delete$))
,null,null));
});})(this$__$1,map__15718,map__15718__$1,show,delete$))
;return iter__4281__auto__.call(null,cljs.core.list("nom","\u20AC","pts"));
})()),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,front_desafio.core.teamrow_view,new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),delete$], null)], null)))):null));
});
front_desafio.core.t15714.prototype.om$core$IWillMount$ = true;
front_desafio.core.t15714.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));var c__8171__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto__,delete$,___$1){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto__,delete$,___$1){
return (function (state_15732){var state_val_15733 = (state_15732[(1)]);if((state_val_15733 === (4)))
{var inst_15725 = (state_15732[(2)]);var inst_15726 = (function (){var team = inst_15725;return ((function (team,inst_15725,state_val_15733,c__8171__auto__,delete$,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (team,inst_15725,state_val_15733,c__8171__auto__,delete$,___$1){
return (function (p1__15683_SHARP_){return cljs.core._EQ_.call(null,team,p1__15683_SHARP_);
});})(team,inst_15725,state_val_15733,c__8171__auto__,delete$,___$1))
,xs));
});
;})(team,inst_15725,state_val_15733,c__8171__auto__,delete$,___$1))
})();var inst_15727 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"teams","teams",1677714510),inst_15726);var state_15732__$1 = (function (){var statearr_15734 = state_15732;(statearr_15734[(7)] = inst_15727);
return statearr_15734;
})();var statearr_15735_15745 = state_15732__$1;(statearr_15735_15745[(2)] = null);
(statearr_15735_15745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15733 === (3)))
{var inst_15730 = (state_15732[(2)]);var state_15732__$1 = state_15732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15732__$1,inst_15730);
} else
{if((state_val_15733 === (2)))
{var state_15732__$1 = state_15732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15732__$1,(4),delete$);
} else
{if((state_val_15733 === (1)))
{var state_15732__$1 = state_15732;var statearr_15736_15746 = state_15732__$1;(statearr_15736_15746[(2)] = null);
(statearr_15736_15746[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__8171__auto__,delete$,___$1))
;return ((function (switch__8156__auto__,c__8171__auto__,delete$,___$1){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_15740 = [null,null,null,null,null,null,null,null];(statearr_15740[(0)] = state_machine__8157__auto__);
(statearr_15740[(1)] = (1));
return statearr_15740;
});
var state_machine__8157__auto____1 = (function (state_15732){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_15732);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e15741){if((e15741 instanceof Object))
{var ex__8160__auto__ = e15741;var statearr_15742_15747 = state_15732;(statearr_15742_15747[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15741;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15748 = state_15732;
state_15732 = G__15748;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_15732){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_15732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto__,delete$,___$1))
})();var state__8173__auto__ = (function (){var statearr_15743 = f__8172__auto__.call(null);(statearr_15743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto__);
return statearr_15743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto__,delete$,___$1))
);
return c__8171__auto__;
});
front_desafio.core.t15714.prototype.om$core$IInitState$ = true;
front_desafio.core.t15714.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null)], null);
});
front_desafio.core.t15714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15716){var self__ = this;
var _15716__$1 = this;return self__.meta15715;
});
front_desafio.core.t15714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15716,meta15715__$1){var self__ = this;
var _15716__$1 = this;return (new front_desafio.core.t15714(self__.owner,self__.app,self__.panelteams_view,meta15715__$1));
});
front_desafio.core.__GT_t15714 = (function __GT_t15714(owner__$1,app__$1,panelteams_view__$1,meta15715){return (new front_desafio.core.t15714(owner__$1,app__$1,panelteams_view__$1,meta15715));
});
}
return (new front_desafio.core.t15714(owner,app,panelteams_view,null));
});
/**
* Generic input field updater. Keeps state in sync with input.
*/
front_desafio.core.field_change = (function field_change(e,owner,field){var value = e.target.value;return om.core.set_state_BANG_.call(null,owner,field,value);
});
/**
* Component that represents the secured portion of our application.
*/
front_desafio.core.secured_application = (function secured_application(app,owner){if(typeof front_desafio.core.t15752 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t15752 = (function (owner,app,secured_application,meta15753){
this.owner = owner;
this.app = app;
this.secured_application = secured_application;
this.meta15753 = meta15753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t15752.cljs$lang$type = true;
front_desafio.core.t15752.cljs$lang$ctorStr = "front-desafio.core/t15752";
front_desafio.core.t15752.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t15752");
});
front_desafio.core.t15752.prototype.om$core$IRender$ = true;
front_desafio.core.t15752.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h1("Testing"),om.core.build.call(null,front_desafio.core.paneluser_view,self__.app,cljs.core.PersistentArrayMap.EMPTY),om.core.build.call(null,front_desafio.core.panelteams_view,self__.app,cljs.core.PersistentArrayMap.EMPTY));
});
front_desafio.core.t15752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15754){var self__ = this;
var _15754__$1 = this;return self__.meta15753;
});
front_desafio.core.t15752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15754,meta15753__$1){var self__ = this;
var _15754__$1 = this;return (new front_desafio.core.t15752(self__.owner,self__.app,self__.secured_application,meta15753__$1));
});
front_desafio.core.__GT_t15752 = (function __GT_t15752(owner__$1,app__$1,secured_application__$1,meta15753){return (new front_desafio.core.t15752(owner__$1,app__$1,secured_application__$1,meta15753));
});
}
return (new front_desafio.core.t15752(owner,app,secured_application,null));
});
/**
* Handle the login event - send credentials to the server.
*/
front_desafio.core.attempt_login = (function attempt_login(e,app,owner){var username_15755 = om.core.get_node.call(null,owner,"username").value;var password_15756 = om.core.get_node.call(null,owner,"password").value;om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notify","error","notify/error",2006812381)], null),null);
front_desafio.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session","auth","session/auth",-653949096),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [username_15755,password_15756], null)], null));
return false;
});
/**
* Component that provides a login form and submits credentials to the server.
*/
front_desafio.core.login_form = (function login_form(app,owner){if(typeof front_desafio.core.t15763 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t15763 = (function (owner,app,login_form,meta15764){
this.owner = owner;
this.app = app;
this.login_form = login_form;
this.meta15764 = meta15764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t15763.cljs$lang$type = true;
front_desafio.core.t15763.cljs$lang$ctorStr = "front-desafio.core/t15763";
front_desafio.core.t15763.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t15763");
});
front_desafio.core.t15763.prototype.om$core$IRenderState$ = true;
front_desafio.core.t15763.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,(function (){var temp__4126__auto__ = new cljs.core.Keyword("notify","error","notify/error",2006812381).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return React.DOM.div({"className": "danger"},error);
} else
{return null;
}
})(),React.DOM.h1("Login"),cljs.core.apply.call(null,React.DOM.form,{"onSubmit": om_tools.dom.format_opts.call(null,((function (this$__$1){
return (function (p1__15757_SHARP_){return front_desafio.core.attempt_login.call(null,p1__15757_SHARP_,self__.app,self__.owner);
});})(this$__$1))
), "className": "horizontal"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.input.input.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"label","label",1718410804),"Usuario",new cljs.core.Keyword(null,"ref","ref",1289896967),"username",new cljs.core.Keyword(null,"id","id",-1388402092),"username",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this$__$1){
return (function (p1__15758_SHARP_){return front_desafio.core.field_change.call(null,p1__15758_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212),"col-xs-2",new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866),"col-xs-10"], null)),om_bootstrap.input.input.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"ref","ref",1289896967),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"password",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this$__$1){
return (function (p1__15759_SHARP_){return front_desafio.core.field_change.call(null,p1__15759_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212),"col-xs-2",new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866),"col-xs-10"], null)),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Login")],null)))));
});
front_desafio.core.t15763.prototype.om$core$IInitState$ = true;
front_desafio.core.t15763.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),""], null);
});
front_desafio.core.t15763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15765){var self__ = this;
var _15765__$1 = this;return self__.meta15764;
});
front_desafio.core.t15763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15765,meta15764__$1){var self__ = this;
var _15765__$1 = this;return (new front_desafio.core.t15763(self__.owner,self__.app,self__.login_form,meta15764__$1));
});
front_desafio.core.__GT_t15763 = (function __GT_t15763(owner__$1,app__$1,login_form__$1,meta15764){return (new front_desafio.core.t15763(owner__$1,app__$1,login_form__$1,meta15764));
});
}
return (new front_desafio.core.t15763(owner,app,login_form,null));
});
/**
* Component that represents our application. Maintains session state.
* Selects views based on session state.
*/
front_desafio.core.application = (function application(app,owner){if(typeof front_desafio.core.t15770 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t15770 = (function (owner,app,application,meta15771){
this.owner = owner;
this.app = app;
this.application = application;
this.meta15771 = meta15771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t15770.cljs$lang$type = true;
front_desafio.core.t15770.cljs$lang$ctorStr = "front-desafio.core/t15770";
front_desafio.core.t15770.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t15770");
});
front_desafio.core.t15770.prototype.om$core$IRenderState$ = true;
front_desafio.core.t15770.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"style": {"width": "100%"}},(function (){var G__15773 = (((new cljs.core.Keyword("session","state","session/state",-64515581).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword("session","state","session/state",-64515581).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__15773) {
case "unknown":
return React.DOM.div(null,"Loading...");

break;
case "open":
return om.core.build.call(null,front_desafio.core.login_form,self__.app,cljs.core.PersistentArrayMap.EMPTY);

break;
case "secure":
return om.core.build.call(null,front_desafio.core.secured_application,self__.app,cljs.core.PersistentArrayMap.EMPTY);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("session","state","session/state",-64515581).cljs$core$IFn$_invoke$arity$1(state)))));

}
})());
});
front_desafio.core.t15770.prototype.om$core$IWillMount$ = true;
front_desafio.core.t15770.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return front_desafio.core.event_loop.call(null,self__.app,self__.owner);
});
front_desafio.core.t15770.prototype.om$core$IInitState$ = true;
front_desafio.core.t15770.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("session","state","session/state",-64515581),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null);
});
front_desafio.core.t15770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15772){var self__ = this;
var _15772__$1 = this;return self__.meta15771;
});
front_desafio.core.t15770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15772,meta15771__$1){var self__ = this;
var _15772__$1 = this;return (new front_desafio.core.t15770(self__.owner,self__.app,self__.application,meta15771__$1));
});
front_desafio.core.__GT_t15770 = (function __GT_t15770(owner__$1,app__$1,application__$1,meta15771){return (new front_desafio.core.t15770(owner__$1,app__$1,application__$1,meta15771));
});
}
return (new front_desafio.core.t15770(owner,app,application,null));
});
/**
* Our very minimal application state - a piece of text that we display.
*/
front_desafio.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("data","text","data/text",-1785650751),"Enter a string and press RETURN!"], null));
om.core.root.call(null,front_desafio.core.application,front_desafio.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
cljs.core.deref.call(null,front_desafio.core.app_state);

//# sourceMappingURL=core.js.map