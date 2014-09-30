// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.nav');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.nav.NavItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str], true, false));
/**
* Generates a nav item for use inside of a nav element.
* @param {...*} var_args
*/
om_bootstrap.nav.nav_item_STAR_ = (function() { 
var nav_item_STAR___delegate = function (data__14169__auto__,owner19949,p__19951){var vec__19970 = p__19951;var opts__14170__auto__ = cljs.core.nth.call(null,vec__19970,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema19973 = schema.core.Any;var input_schema19974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map19971","map19971",-1933714574,null))], null);var input_checker19975 = schema.core.checker.call(null,input_schema19974);var output_checker19976 = schema.core.checker.call(null,output_schema19973);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__){
return (function fnk19972(G__19977){var validate__10325__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___19988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19977], null);var temp__4126__auto___19989 = input_checker19975.call(null,args__10326__auto___19988);if(cljs.core.truth_(temp__4126__auto___19989))
{var error__10327__auto___19990 = temp__4126__auto___19989;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19972","fnk19972",218425827,null),cljs.core.pr_str.call(null,error__10327__auto___19990)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19974,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___19988,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___19990], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var map19971 = G__19977;while(true){
if(cljs.core.map_QMARK_.call(null,map19971))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19971)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map19971,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t19983 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t19983 = (function (fnk19972,owner,G__19977,validate__10325__auto__,output_checker19976,owner19949,p__19951,map19971,input_schema19974,data__14169__auto__,input_checker19975,opts__14170__auto__,nav_item_STAR_,output_schema19973,vec__19970,ufv__,meta19984){
this.fnk19972 = fnk19972;
this.owner = owner;
this.G__19977 = G__19977;
this.validate__10325__auto__ = validate__10325__auto__;
this.output_checker19976 = output_checker19976;
this.owner19949 = owner19949;
this.p__19951 = p__19951;
this.map19971 = map19971;
this.input_schema19974 = input_schema19974;
this.data__14169__auto__ = data__14169__auto__;
this.input_checker19975 = input_checker19975;
this.opts__14170__auto__ = opts__14170__auto__;
this.nav_item_STAR_ = nav_item_STAR_;
this.output_schema19973 = output_schema19973;
this.vec__19970 = vec__19970;
this.ufv__ = ufv__;
this.meta19984 = meta19984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t19983.cljs$lang$type = true;
om_bootstrap.nav.t19983.cljs$lang$ctorStr = "om-bootstrap.nav/t19983";
om_bootstrap.nav.t19983.cljs$lang$ctorPrWriter = ((function (owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t19983");
});})(owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__))
;
om_bootstrap.nav.t19983.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t19983.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__19986 = om.core.get_props.call(null,self__.owner);var map__19986__$1 = ((cljs.core.seq_QMARK_.call(null,map__19986))?cljs.core.apply.call(null,cljs.core.hash_map,map__19986):map__19986);var children = cljs.core.get.call(null,map__19986__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__19986__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__19987 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__19987,(0),null);var props = cljs.core.nth.call(null,vec__19987,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (map__19986,map__19986__$1,children,opts,vec__19987,bs,props,classes,___$1,owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__){
return (function (e){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;e.preventDefault();
if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)))
{return null;
} else
{return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else
{return null;
}
});})(map__19986,map__19986__$1,children,opts,vec__19987,bs,props,classes,___$1,owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__))
;return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__))
;
om_bootstrap.nav.t19983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__){
return (function (_19985){var self__ = this;
var _19985__$1 = this;return self__.meta19984;
});})(owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__))
;
om_bootstrap.nav.t19983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__){
return (function (_19985,meta19984__$1){var self__ = this;
var _19985__$1 = this;return (new om_bootstrap.nav.t19983(self__.fnk19972,self__.owner,self__.G__19977,self__.validate__10325__auto__,self__.output_checker19976,self__.owner19949,self__.p__19951,self__.map19971,self__.input_schema19974,self__.data__14169__auto__,self__.input_checker19975,self__.opts__14170__auto__,self__.nav_item_STAR_,self__.output_schema19973,self__.vec__19970,self__.ufv__,meta19984__$1));
});})(owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__))
;
om_bootstrap.nav.__GT_t19983 = ((function (owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__){
return (function __GT_t19983(fnk19972__$1,owner__$1,G__19977__$1,validate__10325__auto____$1,output_checker19976__$1,owner19949__$1,p__19951__$1,map19971__$1,input_schema19974__$1,data__14169__auto____$1,input_checker19975__$1,opts__14170__auto____$1,nav_item_STAR___$1,output_schema19973__$1,vec__19970__$1,ufv____$1,meta19984){return (new om_bootstrap.nav.t19983(fnk19972__$1,owner__$1,G__19977__$1,validate__10325__auto____$1,output_checker19976__$1,owner19949__$1,p__19951__$1,map19971__$1,input_schema19974__$1,data__14169__auto____$1,input_checker19975__$1,opts__14170__auto____$1,nav_item_STAR___$1,output_schema19973__$1,vec__19970__$1,ufv____$1,meta19984));
});})(owner,validate__10325__auto__,ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__))
;
}
return (new om_bootstrap.nav.t19983(fnk19972,owner,G__19977,validate__10325__auto__,output_checker19976,owner19949,p__19951,map19971,input_schema19974,data__14169__auto__,input_checker19975,opts__14170__auto__,nav_item_STAR_,output_schema19973,vec__19970,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___19991 = output_checker19976.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___19991))
{var error__10327__auto___19992 = temp__4126__auto___19991;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19972","fnk19972",218425827,null),cljs.core.pr_str.call(null,error__10327__auto___19992)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19973,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___19992], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv__,output_schema19973,input_schema19974,input_checker19975,output_checker19976,vec__19970,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema19973,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19974], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner19949,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var nav_item_STAR_ = function (data__14169__auto__,owner19949,var_args){
var p__19951 = null;if (arguments.length > 2) {
  p__19951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_item_STAR___delegate.call(this,data__14169__auto__,owner19949,p__19951);};
nav_item_STAR_.cljs$lang$maxFixedArity = 2;
nav_item_STAR_.cljs$lang$applyTo = (function (arglist__19993){
var data__14169__auto__ = cljs.core.first(arglist__19993);
arglist__19993 = cljs.core.next(arglist__19993);
var owner19949 = cljs.core.first(arglist__19993);
var p__19951 = cljs.core.rest(arglist__19993);
return nav_item_STAR___delegate(data__14169__auto__,owner19949,p__19951);
});
nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_item_STAR___delegate;
return nav_item_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_item_STAR_ = (function() {
var __GT_nav_item_STAR_ = null;
var __GT_nav_item_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__14138__auto__);
});
var __GT_nav_item_STAR___2 = (function (cursor__14138__auto__,m19950){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__14138__auto__,m19950);
});
__GT_nav_item_STAR_ = function(cursor__14138__auto__,m19950){
switch(arguments.length){
case 1:
return __GT_nav_item_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_nav_item_STAR___2.call(this,cursor__14138__auto__,m19950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_item_STAR___1;
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_item_STAR___2;
return __GT_nav_item_STAR_;
})()
;
var ufv___20000 = schema.utils.use_fn_validation;var output_schema19994_20001 = om_bootstrap.types.Component;var input_schema19995_20002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19996_20003 = schema.core.checker.call(null,input_schema19995_20002);var output_checker19997_20004 = schema.core.checker.call(null,output_schema19994_20001);/**
* Inputs: [opts :- NavItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav_item = ((function (ufv___20000,output_schema19994_20001,input_schema19995_20002,input_checker19996_20003,output_checker19997_20004){
return (function() { 
var nav_item__delegate = function (G__19998,rest19999){var validate__10325__auto__ = ufv___20000.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20005 = cljs.core.list_STAR_.call(null,G__19998,rest19999);var temp__4126__auto___20006 = input_checker19996_20003.call(null,args__10326__auto___20005);if(cljs.core.truth_(temp__4126__auto___20006))
{var error__10327__auto___20007 = temp__4126__auto___20006;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__10327__auto___20007)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19995_20002,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20005,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20007], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__19998;var children = rest19999;while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20008 = output_checker19997_20004.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20008))
{var error__10327__auto___20009 = temp__4126__auto___20008;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__10327__auto___20009)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19994_20001,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20009], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var nav_item = function (G__19998,var_args){
var rest19999 = null;if (arguments.length > 1) {
  rest19999 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav_item__delegate.call(this,G__19998,rest19999);};
nav_item.cljs$lang$maxFixedArity = 1;
nav_item.cljs$lang$applyTo = (function (arglist__20010){
var G__19998 = cljs.core.first(arglist__20010);
var rest19999 = cljs.core.rest(arglist__20010);
return nav_item__delegate(G__19998,rest19999);
});
nav_item.cljs$core$IFn$_invoke$arity$variadic = nav_item__delegate;
return nav_item;
})()
;})(ufv___20000,output_schema19994_20001,input_schema19995_20002,input_checker19996_20003,output_checker19997_20004))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema19994_20001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19995_20002], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___20017 = schema.utils.use_fn_validation;var output_schema20011_20018 = schema.core.Bool;var input_schema20012_20019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20013_20020 = schema.core.checker.call(null,input_schema20012_20019);var output_checker20014_20021 = schema.core.checker.call(null,output_schema20011_20018);/**
* Inputs: [child-props opts]
* Returns: s/Bool
* 
* Accepts a NavItem's child props and the current options provided to
* the Nav bar; returns true if the child component should be active,
* false otherwise.
*/
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___20017,output_schema20011_20018,input_schema20012_20019,input_checker20013_20020,output_checker20014_20021){
return (function child_active_QMARK_(G__20015,G__20016){var validate__10325__auto__ = ufv___20017.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20015,G__20016], null);var temp__4126__auto___20023 = input_checker20013_20020.call(null,args__10326__auto___20022);if(cljs.core.truth_(temp__4126__auto___20023))
{var error__10327__auto___20024 = temp__4126__auto___20023;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__10327__auto___20024)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20012_20019,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20022,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20024], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var child_props = G__20015;var opts = G__20016;while(true){
return cljs.core.boolean$.call(null,(function (){var or__3556__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(temp__4126__auto__))
{var ak = temp__4126__auto__;return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else
{return null;
}
})();if(cljs.core.truth_(or__3556__auto____$1))
{return or__3556__auto____$1;
} else
{var temp__4126__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(temp__4126__auto__))
{var ak = temp__4126__auto__;return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(child_props));
} else
{return null;
}
}
}
})());
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20025 = output_checker20014_20021.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20025))
{var error__10327__auto___20026 = temp__4126__auto___20025;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__10327__auto___20026)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20011_20018,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20026], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20017,output_schema20011_20018,input_schema20012_20019,input_checker20013_20020,output_checker20014_20021))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema20011_20018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20012_20019], null)));
var ufv___20032 = schema.utils.use_fn_validation;var output_schema20027_20033 = schema.core.Any;var input_schema20028_20034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20029_20035 = schema.core.checker.call(null,input_schema20028_20034);var output_checker20030_20036 = schema.core.checker.call(null,output_schema20027_20033);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___20032,output_schema20027_20033,input_schema20028_20034,input_checker20029_20035,output_checker20030_20036){
return (function clone_nav_item(G__20031){var validate__10325__auto__ = ufv___20032.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20031], null);var temp__4126__auto___20038 = input_checker20029_20035.call(null,args__10326__auto___20037);if(cljs.core.truth_(temp__4126__auto___20038))
{var error__10327__auto___20039 = temp__4126__auto___20038;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__10327__auto___20039)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20028_20034,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20037,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20039], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__20031;while(true){
var prop_fn = ((function (validate__10325__auto__,ufv___20032,output_schema20027_20033,input_schema20028_20034,input_checker20029_20035,output_checker20030_20036){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__10325__auto__,ufv___20032,output_schema20027_20033,input_schema20028_20034,input_checker20029_20035,output_checker20030_20036))
;
return ((function (validate__10325__auto__,ufv___20032,output_schema20027_20033,input_schema20028_20034,input_checker20029_20035,output_checker20030_20036){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__10325__auto__,ufv___20032,output_schema20027_20033,input_schema20028_20034,input_checker20029_20035,output_checker20030_20036))
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20040 = output_checker20030_20036.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20040))
{var error__10327__auto___20041 = temp__4126__auto___20040;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__10327__auto___20041)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20027_20033,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20041], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20032,output_schema20027_20033,input_schema20028_20034,input_checker20029_20035,output_checker20030_20036))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema20027_20033,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20028_20034], null)));
/**
* @param {...*} var_args
*/
om_bootstrap.nav.nav_STAR_ = (function() { 
var nav_STAR___delegate = function (data__14169__auto__,owner20042,p__20044){var vec__20063 = p__20044;var opts__14170__auto__ = cljs.core.nth.call(null,vec__20063,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema20066 = schema.core.Any;var input_schema20067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map20064","map20064",-1867836694,null))], null);var input_checker20068 = schema.core.checker.call(null,input_schema20067);var output_checker20069 = schema.core.checker.call(null,output_schema20066);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__){
return (function fnk20065(G__20070){var validate__10325__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20070], null);var temp__4126__auto___20082 = input_checker20068.call(null,args__10326__auto___20081);if(cljs.core.truth_(temp__4126__auto___20082))
{var error__10327__auto___20083 = temp__4126__auto___20082;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20065","fnk20065",854607090,null),cljs.core.pr_str.call(null,error__10327__auto___20083)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20067,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20081,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20083], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var map20064 = G__20070;while(true){
if(cljs.core.map_QMARK_.call(null,map20064))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20064)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map20064,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t20076 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t20076 = (function (owner,input_checker20068,validate__10325__auto__,output_checker20069,map20064,input_schema20067,nav_STAR_,owner20042,vec__20063,fnk20065,data__14169__auto__,opts__14170__auto__,output_schema20066,G__20070,ufv__,p__20044,meta20077){
this.owner = owner;
this.input_checker20068 = input_checker20068;
this.validate__10325__auto__ = validate__10325__auto__;
this.output_checker20069 = output_checker20069;
this.map20064 = map20064;
this.input_schema20067 = input_schema20067;
this.nav_STAR_ = nav_STAR_;
this.owner20042 = owner20042;
this.vec__20063 = vec__20063;
this.fnk20065 = fnk20065;
this.data__14169__auto__ = data__14169__auto__;
this.opts__14170__auto__ = opts__14170__auto__;
this.output_schema20066 = output_schema20066;
this.G__20070 = G__20070;
this.ufv__ = ufv__;
this.p__20044 = p__20044;
this.meta20077 = meta20077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t20076.cljs$lang$type = true;
om_bootstrap.nav.t20076.cljs$lang$ctorStr = "om-bootstrap.nav/t20076";
om_bootstrap.nav.t20076.cljs$lang$ctorPrWriter = ((function (owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t20076");
});})(owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__))
;
om_bootstrap.nav.t20076.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t20076.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__20079 = om.core.get_props.call(null,self__.owner);var map__20079__$1 = ((cljs.core.seq_QMARK_.call(null,map__20079))?cljs.core.apply.call(null,cljs.core.hash_map,map__20079):map__20079);var children = cljs.core.get.call(null,map__20079__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__20079__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__20080 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));var bs = cljs.core.nth.call(null,vec__20080,(0),null);var props = cljs.core.nth.call(null,vec__20080,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);if(cljs.core.truth_((function (){var and__3544__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(and__3544__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return and__3544__auto__;
}
})()))
{return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else
{return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__))
;
om_bootstrap.nav.t20076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__){
return (function (_20078){var self__ = this;
var _20078__$1 = this;return self__.meta20077;
});})(owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__))
;
om_bootstrap.nav.t20076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__){
return (function (_20078,meta20077__$1){var self__ = this;
var _20078__$1 = this;return (new om_bootstrap.nav.t20076(self__.owner,self__.input_checker20068,self__.validate__10325__auto__,self__.output_checker20069,self__.map20064,self__.input_schema20067,self__.nav_STAR_,self__.owner20042,self__.vec__20063,self__.fnk20065,self__.data__14169__auto__,self__.opts__14170__auto__,self__.output_schema20066,self__.G__20070,self__.ufv__,self__.p__20044,meta20077__$1));
});})(owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__))
;
om_bootstrap.nav.__GT_t20076 = ((function (owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__){
return (function __GT_t20076(owner__$1,input_checker20068__$1,validate__10325__auto____$1,output_checker20069__$1,map20064__$1,input_schema20067__$1,nav_STAR___$1,owner20042__$1,vec__20063__$1,fnk20065__$1,data__14169__auto____$1,opts__14170__auto____$1,output_schema20066__$1,G__20070__$1,ufv____$1,p__20044__$1,meta20077){return (new om_bootstrap.nav.t20076(owner__$1,input_checker20068__$1,validate__10325__auto____$1,output_checker20069__$1,map20064__$1,input_schema20067__$1,nav_STAR___$1,owner20042__$1,vec__20063__$1,fnk20065__$1,data__14169__auto____$1,opts__14170__auto____$1,output_schema20066__$1,G__20070__$1,ufv____$1,p__20044__$1,meta20077));
});})(owner,validate__10325__auto__,ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__))
;
}
return (new om_bootstrap.nav.t20076(owner,input_checker20068,validate__10325__auto__,output_checker20069,map20064,input_schema20067,nav_STAR_,owner20042,vec__20063,fnk20065,data__14169__auto__,opts__14170__auto__,output_schema20066,G__20070,ufv__,p__20044,null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20084 = output_checker20069.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20084))
{var error__10327__auto___20085 = temp__4126__auto___20084;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20065","fnk20065",854607090,null),cljs.core.pr_str.call(null,error__10327__auto___20085)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20066,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20085], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv__,output_schema20066,input_schema20067,input_checker20068,output_checker20069,vec__20063,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema20066,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20067], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20042,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var nav_STAR_ = function (data__14169__auto__,owner20042,var_args){
var p__20044 = null;if (arguments.length > 2) {
  p__20044 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_STAR___delegate.call(this,data__14169__auto__,owner20042,p__20044);};
nav_STAR_.cljs$lang$maxFixedArity = 2;
nav_STAR_.cljs$lang$applyTo = (function (arglist__20086){
var data__14169__auto__ = cljs.core.first(arglist__20086);
arglist__20086 = cljs.core.next(arglist__20086);
var owner20042 = cljs.core.first(arglist__20086);
var p__20044 = cljs.core.rest(arglist__20086);
return nav_STAR___delegate(data__14169__auto__,owner20042,p__20044);
});
nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_STAR___delegate;
return nav_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_STAR_ = (function() {
var __GT_nav_STAR_ = null;
var __GT_nav_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__14138__auto__);
});
var __GT_nav_STAR___2 = (function (cursor__14138__auto__,m20043){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__14138__auto__,m20043);
});
__GT_nav_STAR_ = function(cursor__14138__auto__,m20043){
switch(arguments.length){
case 1:
return __GT_nav_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_nav_STAR___2.call(this,cursor__14138__auto__,m20043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_STAR___1;
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_STAR___2;
return __GT_nav_STAR_;
})()
;
var ufv___20093 = schema.utils.use_fn_validation;var output_schema20087_20094 = om_bootstrap.types.Component;var input_schema20088_20095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20089_20096 = schema.core.checker.call(null,input_schema20088_20095);var output_checker20090_20097 = schema.core.checker.call(null,output_schema20087_20094);/**
* Inputs: [opts :- Nav & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav = ((function (ufv___20093,output_schema20087_20094,input_schema20088_20095,input_checker20089_20096,output_checker20090_20097){
return (function() { 
var nav__delegate = function (G__20091,rest20092){var validate__10325__auto__ = ufv___20093.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20098 = cljs.core.list_STAR_.call(null,G__20091,rest20092);var temp__4126__auto___20099 = input_checker20089_20096.call(null,args__10326__auto___20098);if(cljs.core.truth_(temp__4126__auto___20099))
{var error__10327__auto___20100 = temp__4126__auto___20099;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__10327__auto___20100)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20088_20095,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20098,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20100], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__20091;var children = rest20092;while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20101 = output_checker20090_20097.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20101))
{var error__10327__auto___20102 = temp__4126__auto___20101;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__10327__auto___20102)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20087_20094,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20102], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var nav = function (G__20091,var_args){
var rest20092 = null;if (arguments.length > 1) {
  rest20092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav__delegate.call(this,G__20091,rest20092);};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = (function (arglist__20103){
var G__20091 = cljs.core.first(arglist__20103);
var rest20092 = cljs.core.rest(arglist__20103);
return nav__delegate(G__20091,rest20092);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;})(ufv___20093,output_schema20087_20094,input_schema20088_20095,input_checker20089_20096,output_checker20090_20097))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema20087_20094,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20088_20095], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function render_toggle_button(owner,bs){var handle_toggle = (function (){var temp__4126__auto___20104 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto___20104))
{var f_20105 = temp__4126__auto___20104;om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);
f_20105.call(null);
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else
{}
return om.core.update_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),cljs.core.not);
});var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));return cljs.core.apply.call(null,React.DOM.button,{"onClick": om_tools.dom.format_opts.call(null,handle_toggle), "type": "button", "className": "navbar-toggle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__3556__auto__ = tb;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"key": (0), "className": "sr-only"},"Toggle navigation"),React.DOM.span({"key": (1), "className": "icon-bar"}),React.DOM.span({"key": (2), "className": "icon-bar"}),React.DOM.span({"key": (3), "className": "icon-bar"})], null);
}
})()],null))));
});
om_bootstrap.nav.render_header = (function render_header(owner,bs){return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_((function (){var or__3556__auto__ = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
var ufv___20111 = schema.utils.use_fn_validation;var output_schema20106_20112 = schema.core.Any;var input_schema20107_20113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20108_20114 = schema.core.checker.call(null,input_schema20107_20113);var output_checker20109_20115 = schema.core.checker.call(null,output_schema20106_20112);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___20111,output_schema20106_20112,input_schema20107_20113,input_checker20108_20114,output_checker20109_20115){
return (function clone_nav_item(G__20110){var validate__10325__auto__ = ufv___20111.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20110], null);var temp__4126__auto___20117 = input_checker20108_20114.call(null,args__10326__auto___20116);if(cljs.core.truth_(temp__4126__auto___20117))
{var error__10327__auto___20118 = temp__4126__auto___20117;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__10327__auto___20118)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20107_20113,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20116,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20118], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__20110;while(true){
var prop_fn = ((function (validate__10325__auto__,ufv___20111,output_schema20106_20112,input_schema20107_20113,input_checker20108_20114,output_checker20109_20115){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__10325__auto__,ufv___20111,output_schema20106_20112,input_schema20107_20113,input_checker20108_20114,output_checker20109_20115))
;
return ((function (validate__10325__auto__,ufv___20111,output_schema20106_20112,input_schema20107_20113,input_checker20108_20114,output_checker20109_20115){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__10325__auto__,ufv___20111,output_schema20106_20112,input_schema20107_20113,input_checker20108_20114,output_checker20109_20115))
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20119 = output_checker20109_20115.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20119))
{var error__10327__auto___20120 = temp__4126__auto___20119;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__10327__auto___20120)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20106_20112,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20120], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20111,output_schema20106_20112,input_schema20107_20113,input_checker20108_20114,output_checker20109_20115))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema20106_20112,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20107_20113], null)));
om_bootstrap.nav.render_navbar_child = (function render_navbar_child(owner,child,bs){var f = (function (props){var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);var collapsible_QMARK_ = (cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs)):null);var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__3544__auto__ = collapsible_QMARK_;if(cljs.core.truth_(and__3544__auto__))
{var or__3556__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else
{return and__3544__auto__;
}
})()], null);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});return om_bootstrap.util.clone_with_props.call(null,child,f);
});
/**
* @param {...*} var_args
*/
om_bootstrap.nav.navbar_STAR_ = (function() { 
var navbar_STAR___delegate = function (data__14169__auto__,owner20122,p__20124){var vec__20142 = p__20124;var opts__14170__auto__ = cljs.core.nth.call(null,vec__20142,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema20146 = schema.core.Any;var input_schema20147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map20143","map20143",454779584,null))], null);var input_checker20148 = schema.core.checker.call(null,input_schema20147);var output_checker20149 = schema.core.checker.call(null,output_schema20146);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function fnk20145(G__20150){var validate__10325__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20150], null);var temp__4126__auto___20160 = input_checker20148.call(null,args__10326__auto___20159);if(cljs.core.truth_(temp__4126__auto___20160))
{var error__10327__auto___20161 = temp__4126__auto___20160;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20145","fnk20145",-1983898541,null),cljs.core.pr_str.call(null,error__10327__auto___20161)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20147,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20159,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20161], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var map20143 = G__20150;while(true){
if(cljs.core.map_QMARK_.call(null,map20143))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20143)));
}
var map20144 = plumbing.fnk.schema.safe_get.call(null,map20143,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var opts = plumbing.fnk.schema.safe_get.call(null,map20144,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get.call(null,map20144,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map20143,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t20155 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t20155 = (function (p__20124,map20143,navbar_STAR_,map20144,owner,input_schema20147,G__20150,owner20122,validate__10325__auto__,input_checker20148,children,fnk20145,output_schema20146,vec__20142,data__14169__auto__,opts__14170__auto__,output_checker20149,opts,ufv__,meta20156){
this.p__20124 = p__20124;
this.map20143 = map20143;
this.navbar_STAR_ = navbar_STAR_;
this.map20144 = map20144;
this.owner = owner;
this.input_schema20147 = input_schema20147;
this.G__20150 = G__20150;
this.owner20122 = owner20122;
this.validate__10325__auto__ = validate__10325__auto__;
this.input_checker20148 = input_checker20148;
this.children = children;
this.fnk20145 = fnk20145;
this.output_schema20146 = output_schema20146;
this.vec__20142 = vec__20142;
this.data__14169__auto__ = data__14169__auto__;
this.opts__14170__auto__ = opts__14170__auto__;
this.output_checker20149 = output_checker20149;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20156 = meta20156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t20155.cljs$lang$type = true;
om_bootstrap.nav.t20155.cljs$lang$ctorStr = "om-bootstrap.nav/t20155";
om_bootstrap.nav.t20155.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t20155");
});})(owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
;
om_bootstrap.nav.t20155.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t20155.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var vec__20158 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function() { 
var G__20162__delegate = function (opts__$2,c){return om_tools.dom.element.call(null,React.DOM.nav,opts__$2,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__20162 = function (opts__$2,var_args){
var c = null;if (arguments.length > 1) {
  c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__20162__delegate.call(this,opts__$2,c);};
G__20162.cljs$lang$maxFixedArity = 1;
G__20162.cljs$lang$applyTo = (function (arglist__20163){
var opts__$2 = cljs.core.first(arglist__20163);
var c = cljs.core.rest(arglist__20163);
return G__20162__delegate(opts__$2,c);
});
G__20162.cljs$core$IFn$_invoke$arity$variadic = G__20162__delegate;
return G__20162;
})()
;})(___$1,owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
], null));var bs = cljs.core.nth.call(null,vec__20158,(0),null);var props = cljs.core.nth.call(null,vec__20158,(1),null);var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__3556__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3556__auto____$1))
{return or__3556__auto____$1;
} else
{return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})())?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__20158,bs,props,classes,___$1,owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function (p1__20121_SHARP_){return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__20121_SHARP_,bs);
});})(vec__20158,bs,props,classes,___$1,owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
,self__.children)],null)))));
});})(owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
;
om_bootstrap.nav.t20155.prototype.om$core$IShouldUpdate$ = true;
om_bootstrap.nav.t20155.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function (_,___$1,next_state){var self__ = this;
var ___$2 = this;return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
;
om_bootstrap.nav.t20155.prototype.om$core$IInitState$ = true;
om_bootstrap.nav.t20155.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
;
om_bootstrap.nav.t20155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function (_20157){var self__ = this;
var _20157__$1 = this;return self__.meta20156;
});})(owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
;
om_bootstrap.nav.t20155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function (_20157,meta20156__$1){var self__ = this;
var _20157__$1 = this;return (new om_bootstrap.nav.t20155(self__.p__20124,self__.map20143,self__.navbar_STAR_,self__.map20144,self__.owner,self__.input_schema20147,self__.G__20150,self__.owner20122,self__.validate__10325__auto__,self__.input_checker20148,self__.children,self__.fnk20145,self__.output_schema20146,self__.vec__20142,self__.data__14169__auto__,self__.opts__14170__auto__,self__.output_checker20149,self__.opts,self__.ufv__,meta20156__$1));
});})(owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
;
om_bootstrap.nav.__GT_t20155 = ((function (owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__){
return (function __GT_t20155(p__20124__$1,map20143__$1,navbar_STAR___$1,map20144__$1,owner__$1,input_schema20147__$1,G__20150__$1,owner20122__$1,validate__10325__auto____$1,input_checker20148__$1,children__$1,fnk20145__$1,output_schema20146__$1,vec__20142__$1,data__14169__auto____$1,opts__14170__auto____$1,output_checker20149__$1,opts__$1,ufv____$1,meta20156){return (new om_bootstrap.nav.t20155(p__20124__$1,map20143__$1,navbar_STAR___$1,map20144__$1,owner__$1,input_schema20147__$1,G__20150__$1,owner20122__$1,validate__10325__auto____$1,input_checker20148__$1,children__$1,fnk20145__$1,output_schema20146__$1,vec__20142__$1,data__14169__auto____$1,opts__14170__auto____$1,output_checker20149__$1,opts__$1,ufv____$1,meta20156));
});})(owner,children,opts,map20144,validate__10325__auto__,ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
;
}
return (new om_bootstrap.nav.t20155(p__20124,map20143,navbar_STAR_,map20144,owner,input_schema20147,G__20150,owner20122,validate__10325__auto__,input_checker20148,children,fnk20145,output_schema20146,vec__20142,data__14169__auto__,opts__14170__auto__,output_checker20149,opts,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20164 = output_checker20149.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20164))
{var error__10327__auto___20165 = temp__4126__auto___20164;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20145","fnk20145",-1983898541,null),cljs.core.pr_str.call(null,error__10327__auto___20165)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20146,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20165], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv__,output_schema20146,input_schema20147,input_checker20148,output_checker20149,vec__20142,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema20146,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20147], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20122,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var navbar_STAR_ = function (data__14169__auto__,owner20122,var_args){
var p__20124 = null;if (arguments.length > 2) {
  p__20124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return navbar_STAR___delegate.call(this,data__14169__auto__,owner20122,p__20124);};
navbar_STAR_.cljs$lang$maxFixedArity = 2;
navbar_STAR_.cljs$lang$applyTo = (function (arglist__20166){
var data__14169__auto__ = cljs.core.first(arglist__20166);
arglist__20166 = cljs.core.next(arglist__20166);
var owner20122 = cljs.core.first(arglist__20166);
var p__20124 = cljs.core.rest(arglist__20166);
return navbar_STAR___delegate(data__14169__auto__,owner20122,p__20124);
});
navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = navbar_STAR___delegate;
return navbar_STAR_;
})()
;
om_bootstrap.nav.__GT_navbar_STAR_ = (function() {
var __GT_navbar_STAR_ = null;
var __GT_navbar_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__14138__auto__);
});
var __GT_navbar_STAR___2 = (function (cursor__14138__auto__,m20123){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__14138__auto__,m20123);
});
__GT_navbar_STAR_ = function(cursor__14138__auto__,m20123){
switch(arguments.length){
case 1:
return __GT_navbar_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_navbar_STAR___2.call(this,cursor__14138__auto__,m20123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_navbar_STAR___1;
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_navbar_STAR___2;
return __GT_navbar_STAR_;
})()
;
var ufv___20173 = schema.utils.use_fn_validation;var output_schema20167_20174 = schema.core.Any;var input_schema20168_20175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20169_20176 = schema.core.checker.call(null,input_schema20168_20175);var output_checker20170_20177 = schema.core.checker.call(null,output_schema20167_20174);/**
* Inputs: [opts :- NavBar & children]
* @param {...*} var_args
*/
om_bootstrap.nav.navbar = ((function (ufv___20173,output_schema20167_20174,input_schema20168_20175,input_checker20169_20176,output_checker20170_20177){
return (function() { 
var navbar__delegate = function (G__20171,rest20172){var validate__10325__auto__ = ufv___20173.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20178 = cljs.core.list_STAR_.call(null,G__20171,rest20172);var temp__4126__auto___20179 = input_checker20169_20176.call(null,args__10326__auto___20178);if(cljs.core.truth_(temp__4126__auto___20179))
{var error__10327__auto___20180 = temp__4126__auto___20179;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__10327__auto___20180)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20168_20175,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20178,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20180], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__20171;var children = rest20172;while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20181 = output_checker20170_20177.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20181))
{var error__10327__auto___20182 = temp__4126__auto___20181;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__10327__auto___20182)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20167_20174,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20182], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var navbar = function (G__20171,var_args){
var rest20172 = null;if (arguments.length > 1) {
  rest20172 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return navbar__delegate.call(this,G__20171,rest20172);};
navbar.cljs$lang$maxFixedArity = 1;
navbar.cljs$lang$applyTo = (function (arglist__20183){
var G__20171 = cljs.core.first(arglist__20183);
var rest20172 = cljs.core.rest(arglist__20183);
return navbar__delegate(G__20171,rest20172);
});
navbar.cljs$core$IFn$_invoke$arity$variadic = navbar__delegate;
return navbar;
})()
;})(ufv___20173,output_schema20167_20174,input_schema20168_20175,input_checker20169_20176,output_checker20170_20177))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema20167_20174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20168_20175], null)));

//# sourceMappingURL=nav.js.map