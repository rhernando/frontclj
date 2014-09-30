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
var nav_item_STAR___delegate = function (data__14169__auto__,owner20151,p__20153){var vec__20172 = p__20153;var opts__14170__auto__ = cljs.core.nth.call(null,vec__20172,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema20175 = schema.core.Any;var input_schema20176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map20173","map20173",355989602,null))], null);var input_checker20177 = schema.core.checker.call(null,input_schema20176);var output_checker20178 = schema.core.checker.call(null,output_schema20175);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__){
return (function fnk20174(G__20179){var validate__11613__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20179], null);var temp__4126__auto___20191 = input_checker20177.call(null,args__11614__auto___20190);if(cljs.core.truth_(temp__4126__auto___20191))
{var error__11615__auto___20192 = temp__4126__auto___20191;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20174","fnk20174",-1520560837,null),cljs.core.pr_str.call(null,error__11615__auto___20192)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20176,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20190,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20192], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var map20173 = G__20179;while(true){
if(cljs.core.map_QMARK_.call(null,map20173))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20173)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map20173,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t20185 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t20185 = (function (input_schema20176,map20173,vec__20172,owner,output_schema20175,input_checker20177,data__14169__auto__,owner20151,validate__11613__auto__,output_checker20178,fnk20174,opts__14170__auto__,nav_item_STAR_,ufv__,G__20179,p__20153,meta20186){
this.input_schema20176 = input_schema20176;
this.map20173 = map20173;
this.vec__20172 = vec__20172;
this.owner = owner;
this.output_schema20175 = output_schema20175;
this.input_checker20177 = input_checker20177;
this.data__14169__auto__ = data__14169__auto__;
this.owner20151 = owner20151;
this.validate__11613__auto__ = validate__11613__auto__;
this.output_checker20178 = output_checker20178;
this.fnk20174 = fnk20174;
this.opts__14170__auto__ = opts__14170__auto__;
this.nav_item_STAR_ = nav_item_STAR_;
this.ufv__ = ufv__;
this.G__20179 = G__20179;
this.p__20153 = p__20153;
this.meta20186 = meta20186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t20185.cljs$lang$type = true;
om_bootstrap.nav.t20185.cljs$lang$ctorStr = "om-bootstrap.nav/t20185";
om_bootstrap.nav.t20185.cljs$lang$ctorPrWriter = ((function (owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t20185");
});})(owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__))
;
om_bootstrap.nav.t20185.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t20185.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__20188 = om.core.get_props.call(null,self__.owner);var map__20188__$1 = ((cljs.core.seq_QMARK_.call(null,map__20188))?cljs.core.apply.call(null,cljs.core.hash_map,map__20188):map__20188);var children = cljs.core.get.call(null,map__20188__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__20188__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__20189 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__20189,(0),null);var props = cljs.core.nth.call(null,vec__20189,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (map__20188,map__20188__$1,children,opts,vec__20189,bs,props,classes,___$1,owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__){
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
});})(map__20188,map__20188__$1,children,opts,vec__20189,bs,props,classes,___$1,owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__))
;return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__))
;
om_bootstrap.nav.t20185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__){
return (function (_20187){var self__ = this;
var _20187__$1 = this;return self__.meta20186;
});})(owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__))
;
om_bootstrap.nav.t20185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__){
return (function (_20187,meta20186__$1){var self__ = this;
var _20187__$1 = this;return (new om_bootstrap.nav.t20185(self__.input_schema20176,self__.map20173,self__.vec__20172,self__.owner,self__.output_schema20175,self__.input_checker20177,self__.data__14169__auto__,self__.owner20151,self__.validate__11613__auto__,self__.output_checker20178,self__.fnk20174,self__.opts__14170__auto__,self__.nav_item_STAR_,self__.ufv__,self__.G__20179,self__.p__20153,meta20186__$1));
});})(owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__))
;
om_bootstrap.nav.__GT_t20185 = ((function (owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__){
return (function __GT_t20185(input_schema20176__$1,map20173__$1,vec__20172__$1,owner__$1,output_schema20175__$1,input_checker20177__$1,data__14169__auto____$1,owner20151__$1,validate__11613__auto____$1,output_checker20178__$1,fnk20174__$1,opts__14170__auto____$1,nav_item_STAR___$1,ufv____$1,G__20179__$1,p__20153__$1,meta20186){return (new om_bootstrap.nav.t20185(input_schema20176__$1,map20173__$1,vec__20172__$1,owner__$1,output_schema20175__$1,input_checker20177__$1,data__14169__auto____$1,owner20151__$1,validate__11613__auto____$1,output_checker20178__$1,fnk20174__$1,opts__14170__auto____$1,nav_item_STAR___$1,ufv____$1,G__20179__$1,p__20153__$1,meta20186));
});})(owner,validate__11613__auto__,ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__))
;
}
return (new om_bootstrap.nav.t20185(input_schema20176,map20173,vec__20172,owner,output_schema20175,input_checker20177,data__14169__auto__,owner20151,validate__11613__auto__,output_checker20178,fnk20174,opts__14170__auto__,nav_item_STAR_,ufv__,G__20179,p__20153,null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20193 = output_checker20178.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20193))
{var error__11615__auto___20194 = temp__4126__auto___20193;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20174","fnk20174",-1520560837,null),cljs.core.pr_str.call(null,error__11615__auto___20194)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20175,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20194], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv__,output_schema20175,input_schema20176,input_checker20177,output_checker20178,vec__20172,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema20175,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20176], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20151,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var nav_item_STAR_ = function (data__14169__auto__,owner20151,var_args){
var p__20153 = null;if (arguments.length > 2) {
  p__20153 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_item_STAR___delegate.call(this,data__14169__auto__,owner20151,p__20153);};
nav_item_STAR_.cljs$lang$maxFixedArity = 2;
nav_item_STAR_.cljs$lang$applyTo = (function (arglist__20195){
var data__14169__auto__ = cljs.core.first(arglist__20195);
arglist__20195 = cljs.core.next(arglist__20195);
var owner20151 = cljs.core.first(arglist__20195);
var p__20153 = cljs.core.rest(arglist__20195);
return nav_item_STAR___delegate(data__14169__auto__,owner20151,p__20153);
});
nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_item_STAR___delegate;
return nav_item_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_item_STAR_ = (function() {
var __GT_nav_item_STAR_ = null;
var __GT_nav_item_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__14138__auto__);
});
var __GT_nav_item_STAR___2 = (function (cursor__14138__auto__,m20152){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__14138__auto__,m20152);
});
__GT_nav_item_STAR_ = function(cursor__14138__auto__,m20152){
switch(arguments.length){
case 1:
return __GT_nav_item_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_nav_item_STAR___2.call(this,cursor__14138__auto__,m20152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_item_STAR___1;
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_item_STAR___2;
return __GT_nav_item_STAR_;
})()
;
var ufv___20202 = schema.utils.use_fn_validation;var output_schema20196_20203 = om_bootstrap.types.Component;var input_schema20197_20204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20198_20205 = schema.core.checker.call(null,input_schema20197_20204);var output_checker20199_20206 = schema.core.checker.call(null,output_schema20196_20203);/**
* Inputs: [opts :- NavItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav_item = ((function (ufv___20202,output_schema20196_20203,input_schema20197_20204,input_checker20198_20205,output_checker20199_20206){
return (function() { 
var nav_item__delegate = function (G__20200,rest20201){var validate__11613__auto__ = ufv___20202.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20207 = cljs.core.list_STAR_.call(null,G__20200,rest20201);var temp__4126__auto___20208 = input_checker20198_20205.call(null,args__11614__auto___20207);if(cljs.core.truth_(temp__4126__auto___20208))
{var error__11615__auto___20209 = temp__4126__auto___20208;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__11615__auto___20209)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20197_20204,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20207,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20209], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__20200;var children = rest20201;while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20210 = output_checker20199_20206.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20210))
{var error__11615__auto___20211 = temp__4126__auto___20210;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__11615__auto___20211)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20196_20203,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20211], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var nav_item = function (G__20200,var_args){
var rest20201 = null;if (arguments.length > 1) {
  rest20201 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav_item__delegate.call(this,G__20200,rest20201);};
nav_item.cljs$lang$maxFixedArity = 1;
nav_item.cljs$lang$applyTo = (function (arglist__20212){
var G__20200 = cljs.core.first(arglist__20212);
var rest20201 = cljs.core.rest(arglist__20212);
return nav_item__delegate(G__20200,rest20201);
});
nav_item.cljs$core$IFn$_invoke$arity$variadic = nav_item__delegate;
return nav_item;
})()
;})(ufv___20202,output_schema20196_20203,input_schema20197_20204,input_checker20198_20205,output_checker20199_20206))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema20196_20203,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20197_20204], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___20219 = schema.utils.use_fn_validation;var output_schema20213_20220 = schema.core.Bool;var input_schema20214_20221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20215_20222 = schema.core.checker.call(null,input_schema20214_20221);var output_checker20216_20223 = schema.core.checker.call(null,output_schema20213_20220);/**
* Inputs: [child-props opts]
* Returns: s/Bool
* 
* Accepts a NavItem's child props and the current options provided to
* the Nav bar; returns true if the child component should be active,
* false otherwise.
*/
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___20219,output_schema20213_20220,input_schema20214_20221,input_checker20215_20222,output_checker20216_20223){
return (function child_active_QMARK_(G__20217,G__20218){var validate__11613__auto__ = ufv___20219.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20217,G__20218], null);var temp__4126__auto___20225 = input_checker20215_20222.call(null,args__11614__auto___20224);if(cljs.core.truth_(temp__4126__auto___20225))
{var error__11615__auto___20226 = temp__4126__auto___20225;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__11615__auto___20226)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20214_20221,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20224,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20226], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var child_props = G__20217;var opts = G__20218;while(true){
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
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20227 = output_checker20216_20223.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20227))
{var error__11615__auto___20228 = temp__4126__auto___20227;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__11615__auto___20228)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20213_20220,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20228], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20219,output_schema20213_20220,input_schema20214_20221,input_checker20215_20222,output_checker20216_20223))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema20213_20220,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20214_20221], null)));
var ufv___20234 = schema.utils.use_fn_validation;var output_schema20229_20235 = schema.core.Any;var input_schema20230_20236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20231_20237 = schema.core.checker.call(null,input_schema20230_20236);var output_checker20232_20238 = schema.core.checker.call(null,output_schema20229_20235);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___20234,output_schema20229_20235,input_schema20230_20236,input_checker20231_20237,output_checker20232_20238){
return (function clone_nav_item(G__20233){var validate__11613__auto__ = ufv___20234.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20233], null);var temp__4126__auto___20240 = input_checker20231_20237.call(null,args__11614__auto___20239);if(cljs.core.truth_(temp__4126__auto___20240))
{var error__11615__auto___20241 = temp__4126__auto___20240;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11615__auto___20241)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20230_20236,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20239,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20241], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__20233;while(true){
var prop_fn = ((function (validate__11613__auto__,ufv___20234,output_schema20229_20235,input_schema20230_20236,input_checker20231_20237,output_checker20232_20238){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__11613__auto__,ufv___20234,output_schema20229_20235,input_schema20230_20236,input_checker20231_20237,output_checker20232_20238))
;
return ((function (validate__11613__auto__,ufv___20234,output_schema20229_20235,input_schema20230_20236,input_checker20231_20237,output_checker20232_20238){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__11613__auto__,ufv___20234,output_schema20229_20235,input_schema20230_20236,input_checker20231_20237,output_checker20232_20238))
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20242 = output_checker20232_20238.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20242))
{var error__11615__auto___20243 = temp__4126__auto___20242;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11615__auto___20243)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20229_20235,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20243], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20234,output_schema20229_20235,input_schema20230_20236,input_checker20231_20237,output_checker20232_20238))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema20229_20235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20230_20236], null)));
/**
* @param {...*} var_args
*/
om_bootstrap.nav.nav_STAR_ = (function() { 
var nav_STAR___delegate = function (data__14169__auto__,owner20244,p__20246){var vec__20265 = p__20246;var opts__14170__auto__ = cljs.core.nth.call(null,vec__20265,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema20268 = schema.core.Any;var input_schema20269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map20266","map20266",286377964,null))], null);var input_checker20270 = schema.core.checker.call(null,input_schema20269);var output_checker20271 = schema.core.checker.call(null,output_schema20268);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__){
return (function fnk20267(G__20272){var validate__11613__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20272], null);var temp__4126__auto___20284 = input_checker20270.call(null,args__11614__auto___20283);if(cljs.core.truth_(temp__4126__auto___20284))
{var error__11615__auto___20285 = temp__4126__auto___20284;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20267","fnk20267",-1632145995,null),cljs.core.pr_str.call(null,error__11615__auto___20285)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20269,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20283,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20285], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var map20266 = G__20272;while(true){
if(cljs.core.map_QMARK_.call(null,map20266))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20266)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map20266,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t20278 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t20278 = (function (input_schema20269,owner,output_checker20271,G__20272,owner20244,map20266,nav_STAR_,p__20246,input_checker20270,vec__20265,fnk20267,data__14169__auto__,validate__11613__auto__,opts__14170__auto__,ufv__,output_schema20268,meta20279){
this.input_schema20269 = input_schema20269;
this.owner = owner;
this.output_checker20271 = output_checker20271;
this.G__20272 = G__20272;
this.owner20244 = owner20244;
this.map20266 = map20266;
this.nav_STAR_ = nav_STAR_;
this.p__20246 = p__20246;
this.input_checker20270 = input_checker20270;
this.vec__20265 = vec__20265;
this.fnk20267 = fnk20267;
this.data__14169__auto__ = data__14169__auto__;
this.validate__11613__auto__ = validate__11613__auto__;
this.opts__14170__auto__ = opts__14170__auto__;
this.ufv__ = ufv__;
this.output_schema20268 = output_schema20268;
this.meta20279 = meta20279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t20278.cljs$lang$type = true;
om_bootstrap.nav.t20278.cljs$lang$ctorStr = "om-bootstrap.nav/t20278";
om_bootstrap.nav.t20278.cljs$lang$ctorPrWriter = ((function (owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t20278");
});})(owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__))
;
om_bootstrap.nav.t20278.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t20278.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__20281 = om.core.get_props.call(null,self__.owner);var map__20281__$1 = ((cljs.core.seq_QMARK_.call(null,map__20281))?cljs.core.apply.call(null,cljs.core.hash_map,map__20281):map__20281);var children = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__20282 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));var bs = cljs.core.nth.call(null,vec__20282,(0),null);var props = cljs.core.nth.call(null,vec__20282,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);if(cljs.core.truth_((function (){var and__3544__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(and__3544__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return and__3544__auto__;
}
})()))
{return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else
{return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__))
;
om_bootstrap.nav.t20278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__){
return (function (_20280){var self__ = this;
var _20280__$1 = this;return self__.meta20279;
});})(owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__))
;
om_bootstrap.nav.t20278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__){
return (function (_20280,meta20279__$1){var self__ = this;
var _20280__$1 = this;return (new om_bootstrap.nav.t20278(self__.input_schema20269,self__.owner,self__.output_checker20271,self__.G__20272,self__.owner20244,self__.map20266,self__.nav_STAR_,self__.p__20246,self__.input_checker20270,self__.vec__20265,self__.fnk20267,self__.data__14169__auto__,self__.validate__11613__auto__,self__.opts__14170__auto__,self__.ufv__,self__.output_schema20268,meta20279__$1));
});})(owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__))
;
om_bootstrap.nav.__GT_t20278 = ((function (owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__){
return (function __GT_t20278(input_schema20269__$1,owner__$1,output_checker20271__$1,G__20272__$1,owner20244__$1,map20266__$1,nav_STAR___$1,p__20246__$1,input_checker20270__$1,vec__20265__$1,fnk20267__$1,data__14169__auto____$1,validate__11613__auto____$1,opts__14170__auto____$1,ufv____$1,output_schema20268__$1,meta20279){return (new om_bootstrap.nav.t20278(input_schema20269__$1,owner__$1,output_checker20271__$1,G__20272__$1,owner20244__$1,map20266__$1,nav_STAR___$1,p__20246__$1,input_checker20270__$1,vec__20265__$1,fnk20267__$1,data__14169__auto____$1,validate__11613__auto____$1,opts__14170__auto____$1,ufv____$1,output_schema20268__$1,meta20279));
});})(owner,validate__11613__auto__,ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__))
;
}
return (new om_bootstrap.nav.t20278(input_schema20269,owner,output_checker20271,G__20272,owner20244,map20266,nav_STAR_,p__20246,input_checker20270,vec__20265,fnk20267,data__14169__auto__,validate__11613__auto__,opts__14170__auto__,ufv__,output_schema20268,null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20286 = output_checker20271.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20286))
{var error__11615__auto___20287 = temp__4126__auto___20286;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20267","fnk20267",-1632145995,null),cljs.core.pr_str.call(null,error__11615__auto___20287)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20268,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20287], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv__,output_schema20268,input_schema20269,input_checker20270,output_checker20271,vec__20265,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema20268,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20269], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20244,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var nav_STAR_ = function (data__14169__auto__,owner20244,var_args){
var p__20246 = null;if (arguments.length > 2) {
  p__20246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_STAR___delegate.call(this,data__14169__auto__,owner20244,p__20246);};
nav_STAR_.cljs$lang$maxFixedArity = 2;
nav_STAR_.cljs$lang$applyTo = (function (arglist__20288){
var data__14169__auto__ = cljs.core.first(arglist__20288);
arglist__20288 = cljs.core.next(arglist__20288);
var owner20244 = cljs.core.first(arglist__20288);
var p__20246 = cljs.core.rest(arglist__20288);
return nav_STAR___delegate(data__14169__auto__,owner20244,p__20246);
});
nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_STAR___delegate;
return nav_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_STAR_ = (function() {
var __GT_nav_STAR_ = null;
var __GT_nav_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__14138__auto__);
});
var __GT_nav_STAR___2 = (function (cursor__14138__auto__,m20245){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__14138__auto__,m20245);
});
__GT_nav_STAR_ = function(cursor__14138__auto__,m20245){
switch(arguments.length){
case 1:
return __GT_nav_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_nav_STAR___2.call(this,cursor__14138__auto__,m20245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_STAR___1;
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_STAR___2;
return __GT_nav_STAR_;
})()
;
var ufv___20295 = schema.utils.use_fn_validation;var output_schema20289_20296 = om_bootstrap.types.Component;var input_schema20290_20297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20291_20298 = schema.core.checker.call(null,input_schema20290_20297);var output_checker20292_20299 = schema.core.checker.call(null,output_schema20289_20296);/**
* Inputs: [opts :- Nav & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav = ((function (ufv___20295,output_schema20289_20296,input_schema20290_20297,input_checker20291_20298,output_checker20292_20299){
return (function() { 
var nav__delegate = function (G__20293,rest20294){var validate__11613__auto__ = ufv___20295.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20300 = cljs.core.list_STAR_.call(null,G__20293,rest20294);var temp__4126__auto___20301 = input_checker20291_20298.call(null,args__11614__auto___20300);if(cljs.core.truth_(temp__4126__auto___20301))
{var error__11615__auto___20302 = temp__4126__auto___20301;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__11615__auto___20302)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20290_20297,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20300,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20302], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__20293;var children = rest20294;while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20303 = output_checker20292_20299.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20303))
{var error__11615__auto___20304 = temp__4126__auto___20303;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__11615__auto___20304)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20289_20296,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20304], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var nav = function (G__20293,var_args){
var rest20294 = null;if (arguments.length > 1) {
  rest20294 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav__delegate.call(this,G__20293,rest20294);};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = (function (arglist__20305){
var G__20293 = cljs.core.first(arglist__20305);
var rest20294 = cljs.core.rest(arglist__20305);
return nav__delegate(G__20293,rest20294);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;})(ufv___20295,output_schema20289_20296,input_schema20290_20297,input_checker20291_20298,output_checker20292_20299))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema20289_20296,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20290_20297], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function render_toggle_button(owner,bs){var handle_toggle = (function (){var temp__4126__auto___20306 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto___20306))
{var f_20307 = temp__4126__auto___20306;om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);
f_20307.call(null);
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
var ufv___20313 = schema.utils.use_fn_validation;var output_schema20308_20314 = schema.core.Any;var input_schema20309_20315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20310_20316 = schema.core.checker.call(null,input_schema20309_20315);var output_checker20311_20317 = schema.core.checker.call(null,output_schema20308_20314);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___20313,output_schema20308_20314,input_schema20309_20315,input_checker20310_20316,output_checker20311_20317){
return (function clone_nav_item(G__20312){var validate__11613__auto__ = ufv___20313.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20312], null);var temp__4126__auto___20319 = input_checker20310_20316.call(null,args__11614__auto___20318);if(cljs.core.truth_(temp__4126__auto___20319))
{var error__11615__auto___20320 = temp__4126__auto___20319;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11615__auto___20320)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20309_20315,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20318,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20320], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__20312;while(true){
var prop_fn = ((function (validate__11613__auto__,ufv___20313,output_schema20308_20314,input_schema20309_20315,input_checker20310_20316,output_checker20311_20317){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__11613__auto__,ufv___20313,output_schema20308_20314,input_schema20309_20315,input_checker20310_20316,output_checker20311_20317))
;
return ((function (validate__11613__auto__,ufv___20313,output_schema20308_20314,input_schema20309_20315,input_checker20310_20316,output_checker20311_20317){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__11613__auto__,ufv___20313,output_schema20308_20314,input_schema20309_20315,input_checker20310_20316,output_checker20311_20317))
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20321 = output_checker20311_20317.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20321))
{var error__11615__auto___20322 = temp__4126__auto___20321;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11615__auto___20322)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20308_20314,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20322], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20313,output_schema20308_20314,input_schema20309_20315,input_checker20310_20316,output_checker20311_20317))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema20308_20314,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20309_20315], null)));
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
var navbar_STAR___delegate = function (data__14169__auto__,owner20324,p__20326){var vec__20344 = p__20326;var opts__14170__auto__ = cljs.core.nth.call(null,vec__20344,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema20348 = schema.core.Any;var input_schema20349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map20345","map20345",714417349,null))], null);var input_checker20350 = schema.core.checker.call(null,input_schema20349);var output_checker20351 = schema.core.checker.call(null,output_schema20348);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function fnk20347(G__20352){var validate__11613__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20352], null);var temp__4126__auto___20362 = input_checker20350.call(null,args__11614__auto___20361);if(cljs.core.truth_(temp__4126__auto___20362))
{var error__11615__auto___20363 = temp__4126__auto___20362;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20347","fnk20347",-2094674346,null),cljs.core.pr_str.call(null,error__11615__auto___20363)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20349,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20361,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20363], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var map20345 = G__20352;while(true){
if(cljs.core.map_QMARK_.call(null,map20345))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20345)));
}
var map20346 = plumbing.fnk.schema.safe_get.call(null,map20345,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var opts = plumbing.fnk.schema.safe_get.call(null,map20346,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get.call(null,map20346,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map20345,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t20357 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t20357 = (function (map20346,navbar_STAR_,owner,map20345,vec__20344,p__20326,children,G__20352,output_checker20351,output_schema20348,owner20324,input_schema20349,fnk20347,data__14169__auto__,validate__11613__auto__,opts__14170__auto__,opts,ufv__,input_checker20350,meta20358){
this.map20346 = map20346;
this.navbar_STAR_ = navbar_STAR_;
this.owner = owner;
this.map20345 = map20345;
this.vec__20344 = vec__20344;
this.p__20326 = p__20326;
this.children = children;
this.G__20352 = G__20352;
this.output_checker20351 = output_checker20351;
this.output_schema20348 = output_schema20348;
this.owner20324 = owner20324;
this.input_schema20349 = input_schema20349;
this.fnk20347 = fnk20347;
this.data__14169__auto__ = data__14169__auto__;
this.validate__11613__auto__ = validate__11613__auto__;
this.opts__14170__auto__ = opts__14170__auto__;
this.opts = opts;
this.ufv__ = ufv__;
this.input_checker20350 = input_checker20350;
this.meta20358 = meta20358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t20357.cljs$lang$type = true;
om_bootstrap.nav.t20357.cljs$lang$ctorStr = "om-bootstrap.nav/t20357";
om_bootstrap.nav.t20357.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t20357");
});})(owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
;
om_bootstrap.nav.t20357.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t20357.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var vec__20360 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function() { 
var G__20364__delegate = function (opts__$2,c){return om_tools.dom.element.call(null,React.DOM.nav,opts__$2,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__20364 = function (opts__$2,var_args){
var c = null;if (arguments.length > 1) {
  c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__20364__delegate.call(this,opts__$2,c);};
G__20364.cljs$lang$maxFixedArity = 1;
G__20364.cljs$lang$applyTo = (function (arglist__20365){
var opts__$2 = cljs.core.first(arglist__20365);
var c = cljs.core.rest(arglist__20365);
return G__20364__delegate(opts__$2,c);
});
G__20364.cljs$core$IFn$_invoke$arity$variadic = G__20364__delegate;
return G__20364;
})()
;})(___$1,owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
], null));var bs = cljs.core.nth.call(null,vec__20360,(0),null);var props = cljs.core.nth.call(null,vec__20360,(1),null);var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__3556__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3556__auto____$1))
{return or__3556__auto____$1;
} else
{return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})())?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__20360,bs,props,classes,___$1,owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function (p1__20323_SHARP_){return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__20323_SHARP_,bs);
});})(vec__20360,bs,props,classes,___$1,owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
,self__.children)],null)))));
});})(owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
;
om_bootstrap.nav.t20357.prototype.om$core$IShouldUpdate$ = true;
om_bootstrap.nav.t20357.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function (_,___$1,next_state){var self__ = this;
var ___$2 = this;return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
;
om_bootstrap.nav.t20357.prototype.om$core$IInitState$ = true;
om_bootstrap.nav.t20357.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
;
om_bootstrap.nav.t20357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function (_20359){var self__ = this;
var _20359__$1 = this;return self__.meta20358;
});})(owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
;
om_bootstrap.nav.t20357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function (_20359,meta20358__$1){var self__ = this;
var _20359__$1 = this;return (new om_bootstrap.nav.t20357(self__.map20346,self__.navbar_STAR_,self__.owner,self__.map20345,self__.vec__20344,self__.p__20326,self__.children,self__.G__20352,self__.output_checker20351,self__.output_schema20348,self__.owner20324,self__.input_schema20349,self__.fnk20347,self__.data__14169__auto__,self__.validate__11613__auto__,self__.opts__14170__auto__,self__.opts,self__.ufv__,self__.input_checker20350,meta20358__$1));
});})(owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
;
om_bootstrap.nav.__GT_t20357 = ((function (owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__){
return (function __GT_t20357(map20346__$1,navbar_STAR___$1,owner__$1,map20345__$1,vec__20344__$1,p__20326__$1,children__$1,G__20352__$1,output_checker20351__$1,output_schema20348__$1,owner20324__$1,input_schema20349__$1,fnk20347__$1,data__14169__auto____$1,validate__11613__auto____$1,opts__14170__auto____$1,opts__$1,ufv____$1,input_checker20350__$1,meta20358){return (new om_bootstrap.nav.t20357(map20346__$1,navbar_STAR___$1,owner__$1,map20345__$1,vec__20344__$1,p__20326__$1,children__$1,G__20352__$1,output_checker20351__$1,output_schema20348__$1,owner20324__$1,input_schema20349__$1,fnk20347__$1,data__14169__auto____$1,validate__11613__auto____$1,opts__14170__auto____$1,opts__$1,ufv____$1,input_checker20350__$1,meta20358));
});})(owner,children,opts,map20346,validate__11613__auto__,ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
;
}
return (new om_bootstrap.nav.t20357(map20346,navbar_STAR_,owner,map20345,vec__20344,p__20326,children,G__20352,output_checker20351,output_schema20348,owner20324,input_schema20349,fnk20347,data__14169__auto__,validate__11613__auto__,opts__14170__auto__,opts,ufv__,input_checker20350,null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20366 = output_checker20351.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20366))
{var error__11615__auto___20367 = temp__4126__auto___20366;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20347","fnk20347",-2094674346,null),cljs.core.pr_str.call(null,error__11615__auto___20367)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20348,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20367], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv__,output_schema20348,input_schema20349,input_checker20350,output_checker20351,vec__20344,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema20348,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20349], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20324,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var navbar_STAR_ = function (data__14169__auto__,owner20324,var_args){
var p__20326 = null;if (arguments.length > 2) {
  p__20326 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return navbar_STAR___delegate.call(this,data__14169__auto__,owner20324,p__20326);};
navbar_STAR_.cljs$lang$maxFixedArity = 2;
navbar_STAR_.cljs$lang$applyTo = (function (arglist__20368){
var data__14169__auto__ = cljs.core.first(arglist__20368);
arglist__20368 = cljs.core.next(arglist__20368);
var owner20324 = cljs.core.first(arglist__20368);
var p__20326 = cljs.core.rest(arglist__20368);
return navbar_STAR___delegate(data__14169__auto__,owner20324,p__20326);
});
navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = navbar_STAR___delegate;
return navbar_STAR_;
})()
;
om_bootstrap.nav.__GT_navbar_STAR_ = (function() {
var __GT_navbar_STAR_ = null;
var __GT_navbar_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__14138__auto__);
});
var __GT_navbar_STAR___2 = (function (cursor__14138__auto__,m20325){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__14138__auto__,m20325);
});
__GT_navbar_STAR_ = function(cursor__14138__auto__,m20325){
switch(arguments.length){
case 1:
return __GT_navbar_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_navbar_STAR___2.call(this,cursor__14138__auto__,m20325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_navbar_STAR___1;
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_navbar_STAR___2;
return __GT_navbar_STAR_;
})()
;
var ufv___20375 = schema.utils.use_fn_validation;var output_schema20369_20376 = schema.core.Any;var input_schema20370_20377 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20371_20378 = schema.core.checker.call(null,input_schema20370_20377);var output_checker20372_20379 = schema.core.checker.call(null,output_schema20369_20376);/**
* Inputs: [opts :- NavBar & children]
* @param {...*} var_args
*/
om_bootstrap.nav.navbar = ((function (ufv___20375,output_schema20369_20376,input_schema20370_20377,input_checker20371_20378,output_checker20372_20379){
return (function() { 
var navbar__delegate = function (G__20373,rest20374){var validate__11613__auto__ = ufv___20375.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20380 = cljs.core.list_STAR_.call(null,G__20373,rest20374);var temp__4126__auto___20381 = input_checker20371_20378.call(null,args__11614__auto___20380);if(cljs.core.truth_(temp__4126__auto___20381))
{var error__11615__auto___20382 = temp__4126__auto___20381;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__11615__auto___20382)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20370_20377,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20380,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20382], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__20373;var children = rest20374;while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20383 = output_checker20372_20379.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20383))
{var error__11615__auto___20384 = temp__4126__auto___20383;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__11615__auto___20384)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20369_20376,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20384], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var navbar = function (G__20373,var_args){
var rest20374 = null;if (arguments.length > 1) {
  rest20374 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return navbar__delegate.call(this,G__20373,rest20374);};
navbar.cljs$lang$maxFixedArity = 1;
navbar.cljs$lang$applyTo = (function (arglist__20385){
var G__20373 = cljs.core.first(arglist__20385);
var rest20374 = cljs.core.rest(arglist__20385);
return navbar__delegate(G__20373,rest20374);
});
navbar.cljs$core$IFn$_invoke$arity$variadic = navbar__delegate;
return navbar;
})()
;})(ufv___20375,output_schema20369_20376,input_schema20370_20377,input_checker20371_20378,output_checker20372_20379))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema20369_20376,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20370_20377], null)));

//# sourceMappingURL=nav.js.map