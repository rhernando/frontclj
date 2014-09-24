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
var nav_item_STAR___delegate = function (data__18819__auto__,owner18994,p__18996){var vec__19015 = p__18996;var opts__18820__auto__ = cljs.core.nth.call(null,vec__19015,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema19018 = schema.core.Any;var input_schema19019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map19016","map19016",-1539197290,null))], null);var input_checker19020 = schema.core.checker.call(null,input_schema19019);var output_checker19021 = schema.core.checker.call(null,output_schema19018);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__){
return (function fnk19017(G__19022){var validate__15139__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19022], null);var temp__4126__auto___19034 = input_checker19020.call(null,args__15140__auto___19033);if(cljs.core.truth_(temp__4126__auto___19034))
{var error__15141__auto___19035 = temp__4126__auto___19034;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19017","fnk19017",2099602344,null),cljs.core.pr_str.call(null,error__15141__auto___19035)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19019,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19033,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19035], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var map19016 = G__19022;while(true){
if(cljs.core.map_QMARK_.call(null,map19016))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19016)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map19016,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t19028 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t19028 = (function (input_schema19019,G__19022,owner,output_checker19021,fnk19017,opts__18820__auto__,owner18994,map19016,data__18819__auto__,p__18996,validate__15139__auto__,input_checker19020,nav_item_STAR_,output_schema19018,ufv__,vec__19015,meta19029){
this.input_schema19019 = input_schema19019;
this.G__19022 = G__19022;
this.owner = owner;
this.output_checker19021 = output_checker19021;
this.fnk19017 = fnk19017;
this.opts__18820__auto__ = opts__18820__auto__;
this.owner18994 = owner18994;
this.map19016 = map19016;
this.data__18819__auto__ = data__18819__auto__;
this.p__18996 = p__18996;
this.validate__15139__auto__ = validate__15139__auto__;
this.input_checker19020 = input_checker19020;
this.nav_item_STAR_ = nav_item_STAR_;
this.output_schema19018 = output_schema19018;
this.ufv__ = ufv__;
this.vec__19015 = vec__19015;
this.meta19029 = meta19029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t19028.cljs$lang$type = true;
om_bootstrap.nav.t19028.cljs$lang$ctorStr = "om-bootstrap.nav/t19028";
om_bootstrap.nav.t19028.cljs$lang$ctorPrWriter = ((function (owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t19028");
});})(owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__))
;
om_bootstrap.nav.t19028.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t19028.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__19031 = om.core.get_props.call(null,self__.owner);var map__19031__$1 = ((cljs.core.seq_QMARK_.call(null,map__19031))?cljs.core.apply.call(null,cljs.core.hash_map,map__19031):map__19031);var children = cljs.core.get.call(null,map__19031__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__19031__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__19032 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__19032,(0),null);var props = cljs.core.nth.call(null,vec__19032,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (map__19031,map__19031__$1,children,opts,vec__19032,bs,props,classes,___$1,owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__){
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
});})(map__19031,map__19031__$1,children,opts,vec__19032,bs,props,classes,___$1,owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__))
;return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__))
;
om_bootstrap.nav.t19028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__){
return (function (_19030){var self__ = this;
var _19030__$1 = this;return self__.meta19029;
});})(owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__))
;
om_bootstrap.nav.t19028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__){
return (function (_19030,meta19029__$1){var self__ = this;
var _19030__$1 = this;return (new om_bootstrap.nav.t19028(self__.input_schema19019,self__.G__19022,self__.owner,self__.output_checker19021,self__.fnk19017,self__.opts__18820__auto__,self__.owner18994,self__.map19016,self__.data__18819__auto__,self__.p__18996,self__.validate__15139__auto__,self__.input_checker19020,self__.nav_item_STAR_,self__.output_schema19018,self__.ufv__,self__.vec__19015,meta19029__$1));
});})(owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__))
;
om_bootstrap.nav.__GT_t19028 = ((function (owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__){
return (function __GT_t19028(input_schema19019__$1,G__19022__$1,owner__$1,output_checker19021__$1,fnk19017__$1,opts__18820__auto____$1,owner18994__$1,map19016__$1,data__18819__auto____$1,p__18996__$1,validate__15139__auto____$1,input_checker19020__$1,nav_item_STAR___$1,output_schema19018__$1,ufv____$1,vec__19015__$1,meta19029){return (new om_bootstrap.nav.t19028(input_schema19019__$1,G__19022__$1,owner__$1,output_checker19021__$1,fnk19017__$1,opts__18820__auto____$1,owner18994__$1,map19016__$1,data__18819__auto____$1,p__18996__$1,validate__15139__auto____$1,input_checker19020__$1,nav_item_STAR___$1,output_schema19018__$1,ufv____$1,vec__19015__$1,meta19029));
});})(owner,validate__15139__auto__,ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__))
;
}
return (new om_bootstrap.nav.t19028(input_schema19019,G__19022,owner,output_checker19021,fnk19017,opts__18820__auto__,owner18994,map19016,data__18819__auto__,p__18996,validate__15139__auto__,input_checker19020,nav_item_STAR_,output_schema19018,ufv__,vec__19015,null));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19036 = output_checker19021.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19036))
{var error__15141__auto___19037 = temp__4126__auto___19036;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19017","fnk19017",2099602344,null),cljs.core.pr_str.call(null,error__15141__auto___19037)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19018,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19037], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv__,output_schema19018,input_schema19019,input_checker19020,output_checker19021,vec__19015,opts__18820__auto__))
,schema.core.make_fn_schema.call(null,output_schema19018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19019], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__18820__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18994,new cljs.core.Keyword(null,"data","data",-232669377),data__18819__auto__], null));
};
var nav_item_STAR_ = function (data__18819__auto__,owner18994,var_args){
var p__18996 = null;if (arguments.length > 2) {
  p__18996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_item_STAR___delegate.call(this,data__18819__auto__,owner18994,p__18996);};
nav_item_STAR_.cljs$lang$maxFixedArity = 2;
nav_item_STAR_.cljs$lang$applyTo = (function (arglist__19038){
var data__18819__auto__ = cljs.core.first(arglist__19038);
arglist__19038 = cljs.core.next(arglist__19038);
var owner18994 = cljs.core.first(arglist__19038);
var p__18996 = cljs.core.rest(arglist__19038);
return nav_item_STAR___delegate(data__18819__auto__,owner18994,p__18996);
});
nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_item_STAR___delegate;
return nav_item_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_item_STAR_ = (function() {
var __GT_nav_item_STAR_ = null;
var __GT_nav_item_STAR___1 = (function (cursor__18788__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__18788__auto__);
});
var __GT_nav_item_STAR___2 = (function (cursor__18788__auto__,m18995){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__18788__auto__,m18995);
});
__GT_nav_item_STAR_ = function(cursor__18788__auto__,m18995){
switch(arguments.length){
case 1:
return __GT_nav_item_STAR___1.call(this,cursor__18788__auto__);
case 2:
return __GT_nav_item_STAR___2.call(this,cursor__18788__auto__,m18995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_item_STAR___1;
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_item_STAR___2;
return __GT_nav_item_STAR_;
})()
;
var ufv___19045 = schema.utils.use_fn_validation;var output_schema19039_19046 = om_bootstrap.types.Component;var input_schema19040_19047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19041_19048 = schema.core.checker.call(null,input_schema19040_19047);var output_checker19042_19049 = schema.core.checker.call(null,output_schema19039_19046);/**
* Inputs: [opts :- NavItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav_item = ((function (ufv___19045,output_schema19039_19046,input_schema19040_19047,input_checker19041_19048,output_checker19042_19049){
return (function() { 
var nav_item__delegate = function (G__19043,rest19044){var validate__15139__auto__ = ufv___19045.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19050 = cljs.core.list_STAR_.call(null,G__19043,rest19044);var temp__4126__auto___19051 = input_checker19041_19048.call(null,args__15140__auto___19050);if(cljs.core.truth_(temp__4126__auto___19051))
{var error__15141__auto___19052 = temp__4126__auto___19051;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__15141__auto___19052)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19040_19047,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19050,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19052], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var opts = G__19043;var children = rest19044;while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19053 = output_checker19042_19049.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19053))
{var error__15141__auto___19054 = temp__4126__auto___19053;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__15141__auto___19054)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19039_19046,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19054], null));
} else
{}
} else
{}
return o__15142__auto__;
};
var nav_item = function (G__19043,var_args){
var rest19044 = null;if (arguments.length > 1) {
  rest19044 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav_item__delegate.call(this,G__19043,rest19044);};
nav_item.cljs$lang$maxFixedArity = 1;
nav_item.cljs$lang$applyTo = (function (arglist__19055){
var G__19043 = cljs.core.first(arglist__19055);
var rest19044 = cljs.core.rest(arglist__19055);
return nav_item__delegate(G__19043,rest19044);
});
nav_item.cljs$core$IFn$_invoke$arity$variadic = nav_item__delegate;
return nav_item;
})()
;})(ufv___19045,output_schema19039_19046,input_schema19040_19047,input_checker19041_19048,output_checker19042_19049))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema19039_19046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19040_19047], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___19062 = schema.utils.use_fn_validation;var output_schema19056_19063 = schema.core.Bool;var input_schema19057_19064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker19058_19065 = schema.core.checker.call(null,input_schema19057_19064);var output_checker19059_19066 = schema.core.checker.call(null,output_schema19056_19063);/**
* Inputs: [child-props opts]
* Returns: s/Bool
* 
* Accepts a NavItem's child props and the current options provided to
* the Nav bar; returns true if the child component should be active,
* false otherwise.
*/
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___19062,output_schema19056_19063,input_schema19057_19064,input_checker19058_19065,output_checker19059_19066){
return (function child_active_QMARK_(G__19060,G__19061){var validate__15139__auto__ = ufv___19062.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19060,G__19061], null);var temp__4126__auto___19068 = input_checker19058_19065.call(null,args__15140__auto___19067);if(cljs.core.truth_(temp__4126__auto___19068))
{var error__15141__auto___19069 = temp__4126__auto___19068;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__15141__auto___19069)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19057_19064,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19067,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19069], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var child_props = G__19060;var opts = G__19061;while(true){
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
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19070 = output_checker19059_19066.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19070))
{var error__15141__auto___19071 = temp__4126__auto___19070;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__15141__auto___19071)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19056_19063,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19071], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19062,output_schema19056_19063,input_schema19057_19064,input_checker19058_19065,output_checker19059_19066))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema19056_19063,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19057_19064], null)));
var ufv___19077 = schema.utils.use_fn_validation;var output_schema19072_19078 = schema.core.Any;var input_schema19073_19079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker19074_19080 = schema.core.checker.call(null,input_schema19073_19079);var output_checker19075_19081 = schema.core.checker.call(null,output_schema19072_19078);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___19077,output_schema19072_19078,input_schema19073_19079,input_checker19074_19080,output_checker19075_19081){
return (function clone_nav_item(G__19076){var validate__15139__auto__ = ufv___19077.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19076], null);var temp__4126__auto___19083 = input_checker19074_19080.call(null,args__15140__auto___19082);if(cljs.core.truth_(temp__4126__auto___19083))
{var error__15141__auto___19084 = temp__4126__auto___19083;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__15141__auto___19084)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19073_19079,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19082,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19084], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var opts = G__19076;while(true){
var prop_fn = ((function (validate__15139__auto__,ufv___19077,output_schema19072_19078,input_schema19073_19079,input_checker19074_19080,output_checker19075_19081){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__15139__auto__,ufv___19077,output_schema19072_19078,input_schema19073_19079,input_checker19074_19080,output_checker19075_19081))
;
return ((function (validate__15139__auto__,ufv___19077,output_schema19072_19078,input_schema19073_19079,input_checker19074_19080,output_checker19075_19081){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__15139__auto__,ufv___19077,output_schema19072_19078,input_schema19073_19079,input_checker19074_19080,output_checker19075_19081))
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19085 = output_checker19075_19081.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19085))
{var error__15141__auto___19086 = temp__4126__auto___19085;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__15141__auto___19086)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19072_19078,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19086], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19077,output_schema19072_19078,input_schema19073_19079,input_checker19074_19080,output_checker19075_19081))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema19072_19078,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19073_19079], null)));
/**
* @param {...*} var_args
*/
om_bootstrap.nav.nav_STAR_ = (function() { 
var nav_STAR___delegate = function (data__18819__auto__,owner19087,p__19089){var vec__19108 = p__19089;var opts__18820__auto__ = cljs.core.nth.call(null,vec__19108,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema19111 = schema.core.Any;var input_schema19112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map19109","map19109",1961322287,null))], null);var input_checker19113 = schema.core.checker.call(null,input_schema19112);var output_checker19114 = schema.core.checker.call(null,output_schema19111);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__){
return (function fnk19110(G__19115){var validate__15139__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19115], null);var temp__4126__auto___19127 = input_checker19113.call(null,args__15140__auto___19126);if(cljs.core.truth_(temp__4126__auto___19127))
{var error__15141__auto___19128 = temp__4126__auto___19127;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19110","fnk19110",-1653341243,null),cljs.core.pr_str.call(null,error__15141__auto___19128)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19112,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19126,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19128], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var map19109 = G__19115;while(true){
if(cljs.core.map_QMARK_.call(null,map19109))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19109)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map19109,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t19121 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t19121 = (function (p__19089,output_schema19111,G__19115,owner,owner19087,fnk19110,input_schema19112,nav_STAR_,output_checker19114,opts__18820__auto__,map19109,data__18819__auto__,validate__15139__auto__,vec__19108,input_checker19113,ufv__,meta19122){
this.p__19089 = p__19089;
this.output_schema19111 = output_schema19111;
this.G__19115 = G__19115;
this.owner = owner;
this.owner19087 = owner19087;
this.fnk19110 = fnk19110;
this.input_schema19112 = input_schema19112;
this.nav_STAR_ = nav_STAR_;
this.output_checker19114 = output_checker19114;
this.opts__18820__auto__ = opts__18820__auto__;
this.map19109 = map19109;
this.data__18819__auto__ = data__18819__auto__;
this.validate__15139__auto__ = validate__15139__auto__;
this.vec__19108 = vec__19108;
this.input_checker19113 = input_checker19113;
this.ufv__ = ufv__;
this.meta19122 = meta19122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t19121.cljs$lang$type = true;
om_bootstrap.nav.t19121.cljs$lang$ctorStr = "om-bootstrap.nav/t19121";
om_bootstrap.nav.t19121.cljs$lang$ctorPrWriter = ((function (owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t19121");
});})(owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__))
;
om_bootstrap.nav.t19121.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t19121.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__19124 = om.core.get_props.call(null,self__.owner);var map__19124__$1 = ((cljs.core.seq_QMARK_.call(null,map__19124))?cljs.core.apply.call(null,cljs.core.hash_map,map__19124):map__19124);var children = cljs.core.get.call(null,map__19124__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__19124__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__19125 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));var bs = cljs.core.nth.call(null,vec__19125,(0),null);var props = cljs.core.nth.call(null,vec__19125,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);if(cljs.core.truth_((function (){var and__3544__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(and__3544__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return and__3544__auto__;
}
})()))
{return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else
{return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__))
;
om_bootstrap.nav.t19121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__){
return (function (_19123){var self__ = this;
var _19123__$1 = this;return self__.meta19122;
});})(owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__))
;
om_bootstrap.nav.t19121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__){
return (function (_19123,meta19122__$1){var self__ = this;
var _19123__$1 = this;return (new om_bootstrap.nav.t19121(self__.p__19089,self__.output_schema19111,self__.G__19115,self__.owner,self__.owner19087,self__.fnk19110,self__.input_schema19112,self__.nav_STAR_,self__.output_checker19114,self__.opts__18820__auto__,self__.map19109,self__.data__18819__auto__,self__.validate__15139__auto__,self__.vec__19108,self__.input_checker19113,self__.ufv__,meta19122__$1));
});})(owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__))
;
om_bootstrap.nav.__GT_t19121 = ((function (owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__){
return (function __GT_t19121(p__19089__$1,output_schema19111__$1,G__19115__$1,owner__$1,owner19087__$1,fnk19110__$1,input_schema19112__$1,nav_STAR___$1,output_checker19114__$1,opts__18820__auto____$1,map19109__$1,data__18819__auto____$1,validate__15139__auto____$1,vec__19108__$1,input_checker19113__$1,ufv____$1,meta19122){return (new om_bootstrap.nav.t19121(p__19089__$1,output_schema19111__$1,G__19115__$1,owner__$1,owner19087__$1,fnk19110__$1,input_schema19112__$1,nav_STAR___$1,output_checker19114__$1,opts__18820__auto____$1,map19109__$1,data__18819__auto____$1,validate__15139__auto____$1,vec__19108__$1,input_checker19113__$1,ufv____$1,meta19122));
});})(owner,validate__15139__auto__,ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__))
;
}
return (new om_bootstrap.nav.t19121(p__19089,output_schema19111,G__19115,owner,owner19087,fnk19110,input_schema19112,nav_STAR_,output_checker19114,opts__18820__auto__,map19109,data__18819__auto__,validate__15139__auto__,vec__19108,input_checker19113,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19129 = output_checker19114.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19129))
{var error__15141__auto___19130 = temp__4126__auto___19129;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19110","fnk19110",-1653341243,null),cljs.core.pr_str.call(null,error__15141__auto___19130)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19111,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19130], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv__,output_schema19111,input_schema19112,input_checker19113,output_checker19114,vec__19108,opts__18820__auto__))
,schema.core.make_fn_schema.call(null,output_schema19111,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19112], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__18820__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner19087,new cljs.core.Keyword(null,"data","data",-232669377),data__18819__auto__], null));
};
var nav_STAR_ = function (data__18819__auto__,owner19087,var_args){
var p__19089 = null;if (arguments.length > 2) {
  p__19089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_STAR___delegate.call(this,data__18819__auto__,owner19087,p__19089);};
nav_STAR_.cljs$lang$maxFixedArity = 2;
nav_STAR_.cljs$lang$applyTo = (function (arglist__19131){
var data__18819__auto__ = cljs.core.first(arglist__19131);
arglist__19131 = cljs.core.next(arglist__19131);
var owner19087 = cljs.core.first(arglist__19131);
var p__19089 = cljs.core.rest(arglist__19131);
return nav_STAR___delegate(data__18819__auto__,owner19087,p__19089);
});
nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_STAR___delegate;
return nav_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_STAR_ = (function() {
var __GT_nav_STAR_ = null;
var __GT_nav_STAR___1 = (function (cursor__18788__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__18788__auto__);
});
var __GT_nav_STAR___2 = (function (cursor__18788__auto__,m19088){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__18788__auto__,m19088);
});
__GT_nav_STAR_ = function(cursor__18788__auto__,m19088){
switch(arguments.length){
case 1:
return __GT_nav_STAR___1.call(this,cursor__18788__auto__);
case 2:
return __GT_nav_STAR___2.call(this,cursor__18788__auto__,m19088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_STAR___1;
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_STAR___2;
return __GT_nav_STAR_;
})()
;
var ufv___19138 = schema.utils.use_fn_validation;var output_schema19132_19139 = om_bootstrap.types.Component;var input_schema19133_19140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19134_19141 = schema.core.checker.call(null,input_schema19133_19140);var output_checker19135_19142 = schema.core.checker.call(null,output_schema19132_19139);/**
* Inputs: [opts :- Nav & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav = ((function (ufv___19138,output_schema19132_19139,input_schema19133_19140,input_checker19134_19141,output_checker19135_19142){
return (function() { 
var nav__delegate = function (G__19136,rest19137){var validate__15139__auto__ = ufv___19138.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19143 = cljs.core.list_STAR_.call(null,G__19136,rest19137);var temp__4126__auto___19144 = input_checker19134_19141.call(null,args__15140__auto___19143);if(cljs.core.truth_(temp__4126__auto___19144))
{var error__15141__auto___19145 = temp__4126__auto___19144;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__15141__auto___19145)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19133_19140,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19143,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19145], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var opts = G__19136;var children = rest19137;while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19146 = output_checker19135_19142.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19146))
{var error__15141__auto___19147 = temp__4126__auto___19146;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__15141__auto___19147)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19132_19139,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19147], null));
} else
{}
} else
{}
return o__15142__auto__;
};
var nav = function (G__19136,var_args){
var rest19137 = null;if (arguments.length > 1) {
  rest19137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav__delegate.call(this,G__19136,rest19137);};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = (function (arglist__19148){
var G__19136 = cljs.core.first(arglist__19148);
var rest19137 = cljs.core.rest(arglist__19148);
return nav__delegate(G__19136,rest19137);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;})(ufv___19138,output_schema19132_19139,input_schema19133_19140,input_checker19134_19141,output_checker19135_19142))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema19132_19139,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19133_19140], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function render_toggle_button(owner,bs){var handle_toggle = (function (){var temp__4126__auto___19149 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto___19149))
{var f_19150 = temp__4126__auto___19149;om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);
f_19150.call(null);
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
var ufv___19156 = schema.utils.use_fn_validation;var output_schema19151_19157 = schema.core.Any;var input_schema19152_19158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker19153_19159 = schema.core.checker.call(null,input_schema19152_19158);var output_checker19154_19160 = schema.core.checker.call(null,output_schema19151_19157);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___19156,output_schema19151_19157,input_schema19152_19158,input_checker19153_19159,output_checker19154_19160){
return (function clone_nav_item(G__19155){var validate__15139__auto__ = ufv___19156.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19155], null);var temp__4126__auto___19162 = input_checker19153_19159.call(null,args__15140__auto___19161);if(cljs.core.truth_(temp__4126__auto___19162))
{var error__15141__auto___19163 = temp__4126__auto___19162;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__15141__auto___19163)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19152_19158,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19161,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19163], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var opts = G__19155;while(true){
var prop_fn = ((function (validate__15139__auto__,ufv___19156,output_schema19151_19157,input_schema19152_19158,input_checker19153_19159,output_checker19154_19160){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__15139__auto__,ufv___19156,output_schema19151_19157,input_schema19152_19158,input_checker19153_19159,output_checker19154_19160))
;
return ((function (validate__15139__auto__,ufv___19156,output_schema19151_19157,input_schema19152_19158,input_checker19153_19159,output_checker19154_19160){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__15139__auto__,ufv___19156,output_schema19151_19157,input_schema19152_19158,input_checker19153_19159,output_checker19154_19160))
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19164 = output_checker19154_19160.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19164))
{var error__15141__auto___19165 = temp__4126__auto___19164;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__15141__auto___19165)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19151_19157,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19165], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19156,output_schema19151_19157,input_schema19152_19158,input_checker19153_19159,output_checker19154_19160))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema19151_19157,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19152_19158], null)));
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
var navbar_STAR___delegate = function (data__18819__auto__,owner19167,p__19169){var vec__19187 = p__19169;var opts__18820__auto__ = cljs.core.nth.call(null,vec__19187,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema19191 = schema.core.Any;var input_schema19192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map19188","map19188",-1410763292,null))], null);var input_checker19193 = schema.core.checker.call(null,input_schema19192);var output_checker19194 = schema.core.checker.call(null,output_schema19191);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function fnk19190(G__19195){var validate__15139__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19195], null);var temp__4126__auto___19205 = input_checker19193.call(null,args__15140__auto___19204);if(cljs.core.truth_(temp__4126__auto___19205))
{var error__15141__auto___19206 = temp__4126__auto___19205;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19190","fnk19190",1834578089,null),cljs.core.pr_str.call(null,error__15141__auto___19206)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19192,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19204,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19206], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var map19188 = G__19195;while(true){
if(cljs.core.map_QMARK_.call(null,map19188))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19188)));
}
var map19189 = plumbing.fnk.schema.safe_get.call(null,map19188,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var opts = plumbing.fnk.schema.safe_get.call(null,map19189,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get.call(null,map19189,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map19188,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t19200 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t19200 = (function (navbar_STAR_,owner,map19188,vec__19187,output_schema19191,children,fnk19190,output_checker19194,opts__18820__auto__,p__19169,input_schema19192,data__18819__auto__,validate__15139__auto__,owner19167,input_checker19193,map19189,opts,ufv__,G__19195,meta19201){
this.navbar_STAR_ = navbar_STAR_;
this.owner = owner;
this.map19188 = map19188;
this.vec__19187 = vec__19187;
this.output_schema19191 = output_schema19191;
this.children = children;
this.fnk19190 = fnk19190;
this.output_checker19194 = output_checker19194;
this.opts__18820__auto__ = opts__18820__auto__;
this.p__19169 = p__19169;
this.input_schema19192 = input_schema19192;
this.data__18819__auto__ = data__18819__auto__;
this.validate__15139__auto__ = validate__15139__auto__;
this.owner19167 = owner19167;
this.input_checker19193 = input_checker19193;
this.map19189 = map19189;
this.opts = opts;
this.ufv__ = ufv__;
this.G__19195 = G__19195;
this.meta19201 = meta19201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t19200.cljs$lang$type = true;
om_bootstrap.nav.t19200.cljs$lang$ctorStr = "om-bootstrap.nav/t19200";
om_bootstrap.nav.t19200.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.nav/t19200");
});})(owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
;
om_bootstrap.nav.t19200.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t19200.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var vec__19203 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function() { 
var G__19207__delegate = function (opts__$2,c){return om_tools.dom.element.call(null,React.DOM.nav,opts__$2,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__19207 = function (opts__$2,var_args){
var c = null;if (arguments.length > 1) {
  c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__19207__delegate.call(this,opts__$2,c);};
G__19207.cljs$lang$maxFixedArity = 1;
G__19207.cljs$lang$applyTo = (function (arglist__19208){
var opts__$2 = cljs.core.first(arglist__19208);
var c = cljs.core.rest(arglist__19208);
return G__19207__delegate(opts__$2,c);
});
G__19207.cljs$core$IFn$_invoke$arity$variadic = G__19207__delegate;
return G__19207;
})()
;})(___$1,owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
], null));var bs = cljs.core.nth.call(null,vec__19203,(0),null);var props = cljs.core.nth.call(null,vec__19203,(1),null);var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__3556__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3556__auto____$1))
{return or__3556__auto____$1;
} else
{return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})())?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__19203,bs,props,classes,___$1,owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function (p1__19166_SHARP_){return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__19166_SHARP_,bs);
});})(vec__19203,bs,props,classes,___$1,owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
,self__.children)],null)))));
});})(owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
;
om_bootstrap.nav.t19200.prototype.om$core$IShouldUpdate$ = true;
om_bootstrap.nav.t19200.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function (_,___$1,next_state){var self__ = this;
var ___$2 = this;return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
;
om_bootstrap.nav.t19200.prototype.om$core$IInitState$ = true;
om_bootstrap.nav.t19200.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
;
om_bootstrap.nav.t19200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function (_19202){var self__ = this;
var _19202__$1 = this;return self__.meta19201;
});})(owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
;
om_bootstrap.nav.t19200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function (_19202,meta19201__$1){var self__ = this;
var _19202__$1 = this;return (new om_bootstrap.nav.t19200(self__.navbar_STAR_,self__.owner,self__.map19188,self__.vec__19187,self__.output_schema19191,self__.children,self__.fnk19190,self__.output_checker19194,self__.opts__18820__auto__,self__.p__19169,self__.input_schema19192,self__.data__18819__auto__,self__.validate__15139__auto__,self__.owner19167,self__.input_checker19193,self__.map19189,self__.opts,self__.ufv__,self__.G__19195,meta19201__$1));
});})(owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
;
om_bootstrap.nav.__GT_t19200 = ((function (owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__){
return (function __GT_t19200(navbar_STAR___$1,owner__$1,map19188__$1,vec__19187__$1,output_schema19191__$1,children__$1,fnk19190__$1,output_checker19194__$1,opts__18820__auto____$1,p__19169__$1,input_schema19192__$1,data__18819__auto____$1,validate__15139__auto____$1,owner19167__$1,input_checker19193__$1,map19189__$1,opts__$1,ufv____$1,G__19195__$1,meta19201){return (new om_bootstrap.nav.t19200(navbar_STAR___$1,owner__$1,map19188__$1,vec__19187__$1,output_schema19191__$1,children__$1,fnk19190__$1,output_checker19194__$1,opts__18820__auto____$1,p__19169__$1,input_schema19192__$1,data__18819__auto____$1,validate__15139__auto____$1,owner19167__$1,input_checker19193__$1,map19189__$1,opts__$1,ufv____$1,G__19195__$1,meta19201));
});})(owner,children,opts,map19189,validate__15139__auto__,ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
;
}
return (new om_bootstrap.nav.t19200(navbar_STAR_,owner,map19188,vec__19187,output_schema19191,children,fnk19190,output_checker19194,opts__18820__auto__,p__19169,input_schema19192,data__18819__auto__,validate__15139__auto__,owner19167,input_checker19193,map19189,opts,ufv__,G__19195,null));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19209 = output_checker19194.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19209))
{var error__15141__auto___19210 = temp__4126__auto___19209;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19190","fnk19190",1834578089,null),cljs.core.pr_str.call(null,error__15141__auto___19210)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19191,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19210], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv__,output_schema19191,input_schema19192,input_checker19193,output_checker19194,vec__19187,opts__18820__auto__))
,schema.core.make_fn_schema.call(null,output_schema19191,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19192], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__18820__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner19167,new cljs.core.Keyword(null,"data","data",-232669377),data__18819__auto__], null));
};
var navbar_STAR_ = function (data__18819__auto__,owner19167,var_args){
var p__19169 = null;if (arguments.length > 2) {
  p__19169 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return navbar_STAR___delegate.call(this,data__18819__auto__,owner19167,p__19169);};
navbar_STAR_.cljs$lang$maxFixedArity = 2;
navbar_STAR_.cljs$lang$applyTo = (function (arglist__19211){
var data__18819__auto__ = cljs.core.first(arglist__19211);
arglist__19211 = cljs.core.next(arglist__19211);
var owner19167 = cljs.core.first(arglist__19211);
var p__19169 = cljs.core.rest(arglist__19211);
return navbar_STAR___delegate(data__18819__auto__,owner19167,p__19169);
});
navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = navbar_STAR___delegate;
return navbar_STAR_;
})()
;
om_bootstrap.nav.__GT_navbar_STAR_ = (function() {
var __GT_navbar_STAR_ = null;
var __GT_navbar_STAR___1 = (function (cursor__18788__auto__){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__18788__auto__);
});
var __GT_navbar_STAR___2 = (function (cursor__18788__auto__,m19168){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__18788__auto__,m19168);
});
__GT_navbar_STAR_ = function(cursor__18788__auto__,m19168){
switch(arguments.length){
case 1:
return __GT_navbar_STAR___1.call(this,cursor__18788__auto__);
case 2:
return __GT_navbar_STAR___2.call(this,cursor__18788__auto__,m19168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_navbar_STAR___1;
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_navbar_STAR___2;
return __GT_navbar_STAR_;
})()
;
var ufv___19218 = schema.utils.use_fn_validation;var output_schema19212_19219 = schema.core.Any;var input_schema19213_19220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19214_19221 = schema.core.checker.call(null,input_schema19213_19220);var output_checker19215_19222 = schema.core.checker.call(null,output_schema19212_19219);/**
* Inputs: [opts :- NavBar & children]
* @param {...*} var_args
*/
om_bootstrap.nav.navbar = ((function (ufv___19218,output_schema19212_19219,input_schema19213_19220,input_checker19214_19221,output_checker19215_19222){
return (function() { 
var navbar__delegate = function (G__19216,rest19217){var validate__15139__auto__ = ufv___19218.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19223 = cljs.core.list_STAR_.call(null,G__19216,rest19217);var temp__4126__auto___19224 = input_checker19214_19221.call(null,args__15140__auto___19223);if(cljs.core.truth_(temp__4126__auto___19224))
{var error__15141__auto___19225 = temp__4126__auto___19224;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__15141__auto___19225)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19213_19220,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19223,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19225], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var opts = G__19216;var children = rest19217;while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19226 = output_checker19215_19222.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19226))
{var error__15141__auto___19227 = temp__4126__auto___19226;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__15141__auto___19227)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19212_19219,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19227], null));
} else
{}
} else
{}
return o__15142__auto__;
};
var navbar = function (G__19216,var_args){
var rest19217 = null;if (arguments.length > 1) {
  rest19217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return navbar__delegate.call(this,G__19216,rest19217);};
navbar.cljs$lang$maxFixedArity = 1;
navbar.cljs$lang$applyTo = (function (arglist__19228){
var G__19216 = cljs.core.first(arglist__19228);
var rest19217 = cljs.core.rest(arglist__19228);
return navbar__delegate(G__19216,rest19217);
});
navbar.cljs$core$IFn$_invoke$arity$variadic = navbar__delegate;
return navbar;
})()
;})(ufv___19218,output_schema19212_19219,input_schema19213_19220,input_checker19214_19221,output_checker19215_19222))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema19212_19219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19213_19220], null)));

//# sourceMappingURL=nav.js.map