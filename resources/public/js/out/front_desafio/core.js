// Compiled by ClojureScript 0.0-2322
goog.provide('front_desafio.core');
goog.require('cljs.core');
goog.require('front_desafio.utils');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om_bootstrap.nav');
goog.require('om_bootstrap.nav');
goog.require('goog.events');
goog.require('front_desafio.utils');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.button');
goog.require('goog.events');
goog.require('om_bootstrap.button');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
front_desafio.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Inicio",new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"avatar","avatar",-1607499307),null], null),new cljs.core.Keyword(null,"teams","teams",1677714510),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"league","league",-1135910659),null], null));
front_desafio.core.front_desafio_app = (function front_desafio_app(app,owner){if(typeof front_desafio.core.t17439 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t17439 = (function (owner,app,front_desafio_app,meta17440){
this.owner = owner;
this.app = app;
this.front_desafio_app = front_desafio_app;
this.meta17440 = meta17440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t17439.cljs$lang$type = true;
front_desafio.core.t17439.cljs$lang$ctorStr = "front-desafio.core/t17439";
front_desafio.core.t17439.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t17439");
});
front_desafio.core.t17439.prototype.om$core$IRender$ = true;
front_desafio.core.t17439.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app));
});
front_desafio.core.t17439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17441){var self__ = this;
var _17441__$1 = this;return self__.meta17440;
});
front_desafio.core.t17439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17441,meta17440__$1){var self__ = this;
var _17441__$1 = this;return (new front_desafio.core.t17439(self__.owner,self__.app,self__.front_desafio_app,meta17440__$1));
});
front_desafio.core.__GT_t17439 = (function __GT_t17439(owner__$1,app__$1,front_desafio_app__$1,meta17440){return (new front_desafio.core.t17439(owner__$1,app__$1,front_desafio_app__$1,meta17440));
});
}
return (new front_desafio.core.t17439(owner,app,front_desafio_app,null));
});
om.core.root.call(null,front_desafio.core.front_desafio_app,front_desafio.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("title")], null));
front_desafio.core.navigation_view = (function navigation_view(app,owner){if(typeof front_desafio.core.t17445 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t17445 = (function (owner,app,navigation_view,meta17446){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta17446 = meta17446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t17445.cljs$lang$type = true;
front_desafio.core.t17445.cljs$lang$ctorStr = "front-desafio.core/t17445";
front_desafio.core.t17445.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t17445");
});
front_desafio.core.t17445.prototype.om$core$IRender$ = true;
front_desafio.core.t17445.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,om_bootstrap.nav.navbar.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462),true,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987),true,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104),".navbar-ex1-collapse",new cljs.core.Keyword(null,"brand","brand",557863343),"DF"], null),om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),true,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),true,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"right"], null),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Link"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Link"),om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"title","title",636505583),"Dropdown"], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Action"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Another action"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),"Something else here"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"divider?","divider?",1882560157),true], null)),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(4)], null),"Salir"))),React.DOM.div({"className": "navbar-ex1-collapse collapse navbar-collapse"},om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav",new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true], null),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Menu 1")))));
});
front_desafio.core.t17445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17447){var self__ = this;
var _17447__$1 = this;return self__.meta17446;
});
front_desafio.core.t17445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17447,meta17446__$1){var self__ = this;
var _17447__$1 = this;return (new front_desafio.core.t17445(self__.owner,self__.app,self__.navigation_view,meta17446__$1));
});
front_desafio.core.__GT_t17445 = (function __GT_t17445(owner__$1,app__$1,navigation_view__$1,meta17446){return (new front_desafio.core.t17445(owner__$1,app__$1,navigation_view__$1,meta17446));
});
}
return (new front_desafio.core.t17445(owner,app,navigation_view,null));
});
om.core.root.call(null,front_desafio.core.navigation_view,front_desafio.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("navigator")], null));
front_desafio.core.paneluser_view = (function paneluser_view(app,owner){if(typeof front_desafio.core.t17451 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t17451 = (function (owner,app,paneluser_view,meta17452){
this.owner = owner;
this.app = app;
this.paneluser_view = paneluser_view;
this.meta17452 = meta17452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t17451.cljs$lang$type = true;
front_desafio.core.t17451.cljs$lang$ctorStr = "front-desafio.core/t17451";
front_desafio.core.t17451.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t17451");
});
front_desafio.core.t17451.prototype.om$core$IRender$ = true;
front_desafio.core.t17451.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,React.DOM.span(null,cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"name","name",1843675177)], null)))));
});
front_desafio.core.t17451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17453){var self__ = this;
var _17453__$1 = this;return self__.meta17452;
});
front_desafio.core.t17451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17453,meta17452__$1){var self__ = this;
var _17453__$1 = this;return (new front_desafio.core.t17451(self__.owner,self__.app,self__.paneluser_view,meta17452__$1));
});
front_desafio.core.__GT_t17451 = (function __GT_t17451(owner__$1,app__$1,paneluser_view__$1,meta17452){return (new front_desafio.core.t17451(owner__$1,app__$1,paneluser_view__$1,meta17452));
});
}
return (new front_desafio.core.t17451(owner,app,paneluser_view,null));
});
om.core.root.call(null,front_desafio.core.paneluser_view,front_desafio.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("user-pn")], null));
front_desafio.core.teamrow_view = (function teamrow_view(team,owner){if(typeof front_desafio.core.t17459 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t17459 = (function (owner,team,teamrow_view,meta17460){
this.owner = owner;
this.team = team;
this.teamrow_view = teamrow_view;
this.meta17460 = meta17460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t17459.cljs$lang$type = true;
front_desafio.core.t17459.cljs$lang$ctorStr = "front-desafio.core/t17459";
front_desafio.core.t17459.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t17459");
});
front_desafio.core.t17459.prototype.om$core$IRenderState$ = true;
front_desafio.core.t17459.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__17462){var self__ = this;
var map__17463 = p__17462;var map__17463__$1 = ((cljs.core.seq_QMARK_.call(null,map__17463))?cljs.core.apply.call(null,cljs.core.hash_map,map__17463):map__17463);var delete$ = cljs.core.get.call(null,map__17463__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.tr(null,React.DOM.td(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.team)),React.DOM.td(null,new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(self__.team)),React.DOM.td(null,new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(self__.team)),React.DOM.td(null,React.DOM.button({"onClick": ((function (this$__$1,map__17463,map__17463__$1,delete$){
return (function (e){return cljs.core.async.put_BANG_.call(null,delete$,self__.team);
});})(this$__$1,map__17463,map__17463__$1,delete$))
},"delete"),React.DOM.button(null,"select")));
});
front_desafio.core.t17459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17461){var self__ = this;
var _17461__$1 = this;return self__.meta17460;
});
front_desafio.core.t17459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17461,meta17460__$1){var self__ = this;
var _17461__$1 = this;return (new front_desafio.core.t17459(self__.owner,self__.team,self__.teamrow_view,meta17460__$1));
});
front_desafio.core.__GT_t17459 = (function __GT_t17459(owner__$1,team__$1,teamrow_view__$1,meta17460){return (new front_desafio.core.t17459(owner__$1,team__$1,teamrow_view__$1,meta17460));
});
}
return (new front_desafio.core.t17459(owner,team,teamrow_view,null));
});
front_desafio.core.panelteams_view = (function panelteams_view(app,owner){if(typeof front_desafio.core.t17495 !== 'undefined')
{} else
{
/**
* @constructor
*/
front_desafio.core.t17495 = (function (owner,app,panelteams_view,meta17496){
this.owner = owner;
this.app = app;
this.panelteams_view = panelteams_view;
this.meta17496 = meta17496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
front_desafio.core.t17495.cljs$lang$type = true;
front_desafio.core.t17495.cljs$lang$ctorStr = "front-desafio.core/t17495";
front_desafio.core.t17495.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"front-desafio.core/t17495");
});
front_desafio.core.t17495.prototype.om$core$IRenderState$ = true;
front_desafio.core.t17495.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__17498){var self__ = this;
var map__17499 = p__17498;var map__17499__$1 = ((cljs.core.seq_QMARK_.call(null,map__17499))?cljs.core.apply.call(null,cljs.core.hash_map,map__17499):map__17499);var show = cljs.core.get.call(null,map__17499__$1,new cljs.core.Keyword(null,"show","show",-576705889));var delete$ = cljs.core.get.call(null,map__17499__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.div(null,(((cljs.core.count.call(null,new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(self__.app)) > (0)))?React.DOM.table({"className": "table table-bordered table-hover table-striped"},cljs.core.apply.call(null,om.dom.thead,null,(function (){var iter__4281__auto__ = ((function (this$__$1,map__17499,map__17499__$1,show,delete$){
return (function iter__17500(s__17501){return (new cljs.core.LazySeq(null,((function (this$__$1,map__17499,map__17499__$1,show,delete$){
return (function (){var s__17501__$1 = s__17501;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17501__$1);if(temp__4126__auto__)
{var s__17501__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17501__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__17501__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__17503 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__17502 = (0);while(true){
if((i__17502 < size__4280__auto__))
{var h = cljs.core._nth.call(null,c__4279__auto__,i__17502);var hs = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h));cljs.core.chunk_append.call(null,b__17503,React.DOM.th(null,hs));
{
var G__17525 = (i__17502 + (1));
i__17502 = G__17525;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17503),iter__17500.call(null,cljs.core.chunk_rest.call(null,s__17501__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17503),null);
}
} else
{var h = cljs.core.first.call(null,s__17501__$2);var hs = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h));return cljs.core.cons.call(null,React.DOM.th(null,hs),iter__17500.call(null,cljs.core.rest.call(null,s__17501__$2)));
}
} else
{return null;
}
break;
}
});})(this$__$1,map__17499,map__17499__$1,show,delete$))
,null,null));
});})(this$__$1,map__17499,map__17499__$1,show,delete$))
;return iter__4281__auto__.call(null,cljs.core.list("nom","\u20AC","pts"));
})()),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,front_desafio.core.teamrow_view,new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),delete$], null)], null)))):null));
});
front_desafio.core.t17495.prototype.om$core$IWillMount$ = true;
front_desafio.core.t17495.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));var c__6891__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto__,delete$,___$1){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto__,delete$,___$1){
return (function (state_17513){var state_val_17514 = (state_17513[(1)]);if((state_val_17514 === (4)))
{var inst_17506 = (state_17513[(2)]);var inst_17507 = (function (){var team = inst_17506;return ((function (team,inst_17506,state_val_17514,c__6891__auto__,delete$,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (team,inst_17506,state_val_17514,c__6891__auto__,delete$,___$1){
return (function (p1__17464_SHARP_){return cljs.core._EQ_.call(null,team,p1__17464_SHARP_);
});})(team,inst_17506,state_val_17514,c__6891__auto__,delete$,___$1))
,xs));
});
;})(team,inst_17506,state_val_17514,c__6891__auto__,delete$,___$1))
})();var inst_17508 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"teams","teams",1677714510),inst_17507);var state_17513__$1 = (function (){var statearr_17515 = state_17513;(statearr_17515[(7)] = inst_17508);
return statearr_17515;
})();var statearr_17516_17526 = state_17513__$1;(statearr_17516_17526[(2)] = null);
(statearr_17516_17526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (3)))
{var inst_17511 = (state_17513[(2)]);var state_17513__$1 = state_17513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17513__$1,inst_17511);
} else
{if((state_val_17514 === (2)))
{var state_17513__$1 = state_17513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17513__$1,(4),delete$);
} else
{if((state_val_17514 === (1)))
{var state_17513__$1 = state_17513;var statearr_17517_17527 = state_17513__$1;(statearr_17517_17527[(2)] = null);
(statearr_17517_17527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6891__auto__,delete$,___$1))
;return ((function (switch__6876__auto__,c__6891__auto__,delete$,___$1){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_17521 = [null,null,null,null,null,null,null,null];(statearr_17521[(0)] = state_machine__6877__auto__);
(statearr_17521[(1)] = (1));
return statearr_17521;
});
var state_machine__6877__auto____1 = (function (state_17513){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_17513);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e17522){if((e17522 instanceof Object))
{var ex__6880__auto__ = e17522;var statearr_17523_17528 = state_17513;(statearr_17523_17528[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17529 = state_17513;
state_17513 = G__17529;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_17513){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_17513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto__,delete$,___$1))
})();var state__6893__auto__ = (function (){var statearr_17524 = f__6892__auto__.call(null);(statearr_17524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto__);
return statearr_17524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto__,delete$,___$1))
);
return c__6891__auto__;
});
front_desafio.core.t17495.prototype.om$core$IInitState$ = true;
front_desafio.core.t17495.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null)], null);
});
front_desafio.core.t17495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17497){var self__ = this;
var _17497__$1 = this;return self__.meta17496;
});
front_desafio.core.t17495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17497,meta17496__$1){var self__ = this;
var _17497__$1 = this;return (new front_desafio.core.t17495(self__.owner,self__.app,self__.panelteams_view,meta17496__$1));
});
front_desafio.core.__GT_t17495 = (function __GT_t17495(owner__$1,app__$1,panelteams_view__$1,meta17496){return (new front_desafio.core.t17495(owner__$1,app__$1,panelteams_view__$1,meta17496));
});
}
return (new front_desafio.core.t17495(owner,app,panelteams_view,null));
});
om.core.root.call(null,front_desafio.core.panelteams_view,front_desafio.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("teams-pn")], null));
cljs.core.swap_BANG_.call(null,front_desafio.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510)], null),cljs.core.concat,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"as",new cljs.core.Keyword(null,"balance","balance",418967409),(22),new cljs.core.Keyword(null,"score","score",-1963588780),(2)], null)));

//# sourceMappingURL=core.js.map