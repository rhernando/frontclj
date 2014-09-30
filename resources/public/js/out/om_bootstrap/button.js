// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om_bootstrap.mixins');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"active?","active?",459499776),schema.core.Bool,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.Bool,new cljs.core.Keyword(null,"block?","block?",1102479923),schema.core.Bool,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),schema.core.Bool,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),schema.core.Bool], null));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),schema.core.Bool,new cljs.core.Keyword(null,"justified?","justified?",-1045366764),schema.core.Bool], null));
var ufv___21877 = schema.utils.use_fn_validation;var output_schema21871_21878 = schema.core.Any;var input_schema21872_21879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.Bool,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker21873_21880 = schema.core.checker.call(null,input_schema21872_21879);var output_checker21874_21881 = schema.core.checker.call(null,output_schema21871_21878);/**
* Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? s/Bool, :props {s/Any s/Any}} children]
*/
om_bootstrap.button.render_anchor = ((function (ufv___21877,output_schema21871_21878,input_schema21872_21879,input_checker21873_21880,output_checker21874_21881){
return (function render_anchor(G__21875,G__21876){var validate__10325__auto__ = ufv___21877.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___21882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21875,G__21876], null);var temp__4126__auto___21883 = input_checker21873_21880.call(null,args__10326__auto___21882);if(cljs.core.truth_(temp__4126__auto___21883))
{var error__10327__auto___21884 = temp__4126__auto___21883;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__10327__auto___21884)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21872_21879,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___21882,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21884], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__21875;var children = G__21876;while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___21885 = output_checker21874_21881.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___21885))
{var error__10327__auto___21886 = temp__4126__auto___21885;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__10327__auto___21886)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21871_21878,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21886], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___21877,output_schema21871_21878,input_schema21872_21879,input_checker21873_21880,output_checker21874_21881))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema21871_21878,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21872_21879], null)));
var ufv___21895 = schema.utils.use_fn_validation;var output_schema21887_21896 = om_bootstrap.types.Component;var input_schema21888_21897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);var input_checker21889_21898 = schema.core.checker.call(null,input_schema21888_21897);var output_checker21890_21899 = schema.core.checker.call(null,output_schema21887_21896);/**
* Inputs: [props :- Button & children]
* Returns: t/Component
* 
* Renders a button.
* @param {...*} var_args
*/
om_bootstrap.button.button = ((function (ufv___21895,output_schema21887_21896,input_schema21888_21897,input_checker21889_21898,output_checker21890_21899){
return (function() { 
var button__delegate = function (G__21891,rest21892){var validate__10325__auto__ = ufv___21895.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___21900 = cljs.core.list_STAR_.call(null,G__21891,rest21892);var temp__4126__auto___21901 = input_checker21889_21898.call(null,args__10326__auto___21900);if(cljs.core.truth_(temp__4126__auto___21901))
{var error__10327__auto___21902 = temp__4126__auto___21901;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__10327__auto___21902)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21888_21897,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___21900,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21902], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var props = G__21891;var children = rest21892;while(true){
var vec__21894 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));var bs = cljs.core.nth.call(null,vec__21894,(0),null);var props__$1 = cljs.core.nth.call(null,vec__21894,(1),null);var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs)))
{return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else
{if(cljs.core.truth_((function (){var or__3556__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})()))
{return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else
{return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___21903 = output_checker21890_21899.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___21903))
{var error__10327__auto___21904 = temp__4126__auto___21903;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__10327__auto___21904)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21887_21896,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21904], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var button = function (G__21891,var_args){
var rest21892 = null;if (arguments.length > 1) {
  rest21892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button__delegate.call(this,G__21891,rest21892);};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = (function (arglist__21905){
var G__21891 = cljs.core.first(arglist__21905);
var rest21892 = cljs.core.rest(arglist__21905);
return button__delegate(G__21891,rest21892);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;})(ufv___21895,output_schema21887_21896,input_schema21888_21897,input_checker21889_21898,output_checker21890_21899))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema21887_21896,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21888_21897], null)));
var ufv___21914 = schema.utils.use_fn_validation;var output_schema21906_21915 = om_bootstrap.types.Component;var input_schema21907_21916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker21908_21917 = schema.core.checker.call(null,input_schema21907_21916);var output_checker21909_21918 = schema.core.checker.call(null,output_schema21906_21915);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Renders a button toolbar.
* @param {...*} var_args
*/
om_bootstrap.button.toolbar = ((function (ufv___21914,output_schema21906_21915,input_schema21907_21916,input_checker21908_21917,output_checker21909_21918){
return (function() { 
var toolbar__delegate = function (G__21910,rest21911){var validate__10325__auto__ = ufv___21914.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___21919 = cljs.core.list_STAR_.call(null,G__21910,rest21911);var temp__4126__auto___21920 = input_checker21908_21917.call(null,args__10326__auto___21919);if(cljs.core.truth_(temp__4126__auto___21920))
{var error__10327__auto___21921 = temp__4126__auto___21920;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__10327__auto___21921)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21907_21916,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___21919,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21921], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__21910;var children = rest21911;while(true){
var vec__21913 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));var bs = cljs.core.nth.call(null,vec__21913,(0),null);var props = cljs.core.nth.call(null,vec__21913,(1),null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___21922 = output_checker21909_21918.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___21922))
{var error__10327__auto___21923 = temp__4126__auto___21922;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__10327__auto___21923)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21906_21915,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21923], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var toolbar = function (G__21910,var_args){
var rest21911 = null;if (arguments.length > 1) {
  rest21911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return toolbar__delegate.call(this,G__21910,rest21911);};
toolbar.cljs$lang$maxFixedArity = 1;
toolbar.cljs$lang$applyTo = (function (arglist__21924){
var G__21910 = cljs.core.first(arglist__21924);
var rest21911 = cljs.core.rest(arglist__21924);
return toolbar__delegate(G__21910,rest21911);
});
toolbar.cljs$core$IFn$_invoke$arity$variadic = toolbar__delegate;
return toolbar;
})()
;})(ufv___21914,output_schema21906_21915,input_schema21907_21916,input_checker21908_21917,output_checker21909_21918))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema21906_21915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21907_21916], null)));
var ufv___21933 = schema.utils.use_fn_validation;var output_schema21925_21934 = om_bootstrap.types.Component;var input_schema21926_21935 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker21927_21936 = schema.core.checker.call(null,input_schema21926_21935);var output_checker21928_21937 = schema.core.checker.call(null,output_schema21925_21934);/**
* Inputs: [opts :- ButtonGroup & children]
* Returns: t/Component
* 
* Renders the supplied children in a wrapping button-group div.
* @param {...*} var_args
*/
om_bootstrap.button.button_group = ((function (ufv___21933,output_schema21925_21934,input_schema21926_21935,input_checker21927_21936,output_checker21928_21937){
return (function() { 
var button_group__delegate = function (G__21929,rest21930){var validate__10325__auto__ = ufv___21933.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___21938 = cljs.core.list_STAR_.call(null,G__21929,rest21930);var temp__4126__auto___21939 = input_checker21927_21936.call(null,args__10326__auto___21938);if(cljs.core.truth_(temp__4126__auto___21939))
{var error__10327__auto___21940 = temp__4126__auto___21939;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__10327__auto___21940)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21926_21935,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___21938,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21940], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__21929;var children = rest21930;while(true){
var vec__21932 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));var bs = cljs.core.nth.call(null,vec__21932,(0),null);var props = cljs.core.nth.call(null,vec__21932,(1),null);var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___21941 = output_checker21928_21937.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___21941))
{var error__10327__auto___21942 = temp__4126__auto___21941;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__10327__auto___21942)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21925_21934,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21942], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var button_group = function (G__21929,var_args){
var rest21930 = null;if (arguments.length > 1) {
  rest21930 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button_group__delegate.call(this,G__21929,rest21930);};
button_group.cljs$lang$maxFixedArity = 1;
button_group.cljs$lang$applyTo = (function (arglist__21943){
var G__21929 = cljs.core.first(arglist__21943);
var rest21930 = cljs.core.rest(arglist__21943);
return button_group__delegate(G__21929,rest21930);
});
button_group.cljs$core$IFn$_invoke$arity$variadic = button_group__delegate;
return button_group;
})()
;})(ufv___21933,output_schema21925_21934,input_schema21926_21935,input_checker21927_21936,output_checker21928_21937))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema21925_21934,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21926_21935], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function render_nav_item(props,open_QMARK_,children){var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function render_button_group(props,open_QMARK_,children){var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___21952 = schema.utils.use_fn_validation;var output_schema21944_21953 = om_bootstrap.types.Component;var input_schema21945_21954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker21946_21955 = schema.core.checker.call(null,input_schema21945_21954);var output_checker21947_21956 = schema.core.checker.call(null,output_schema21944_21953);/**
* Inputs: [opts :- MenuItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.menu_item = ((function (ufv___21952,output_schema21944_21953,input_schema21945_21954,input_checker21946_21955,output_checker21947_21956){
return (function() { 
var menu_item__delegate = function (G__21948,rest21949){var validate__10325__auto__ = ufv___21952.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___21957 = cljs.core.list_STAR_.call(null,G__21948,rest21949);var temp__4126__auto___21958 = input_checker21946_21955.call(null,args__10326__auto___21957);if(cljs.core.truth_(temp__4126__auto___21958))
{var error__10327__auto___21959 = temp__4126__auto___21958;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__10327__auto___21959)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21945_21954,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___21957,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21959], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__21948;var children = rest21949;while(true){
var vec__21951 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__21951,(0),null);var props = cljs.core.nth.call(null,vec__21951,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (vec__21951,bs,props,classes,validate__10325__auto__,ufv___21952,output_schema21944_21953,input_schema21945_21954,input_checker21946_21955,output_checker21947_21956){
return (function (e){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var on_select = temp__4126__auto__;e.preventDefault();
return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return null;
}
});})(vec__21951,bs,props,classes,validate__10325__auto__,ufv___21952,output_schema21944_21953,input_schema21945_21954,input_checker21946_21955,output_checker21947_21956))
;var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));var li_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null);return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___21960 = output_checker21947_21956.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___21960))
{var error__10327__auto___21961 = temp__4126__auto___21960;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__10327__auto___21961)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21944_21953,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21961], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var menu_item = function (G__21948,var_args){
var rest21949 = null;if (arguments.length > 1) {
  rest21949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return menu_item__delegate.call(this,G__21948,rest21949);};
menu_item.cljs$lang$maxFixedArity = 1;
menu_item.cljs$lang$applyTo = (function (arglist__21962){
var G__21948 = cljs.core.first(arglist__21962);
var rest21949 = cljs.core.rest(arglist__21962);
return menu_item__delegate(G__21948,rest21949);
});
menu_item.cljs$core$IFn$_invoke$arity$variadic = menu_item__delegate;
return menu_item;
})()
;})(ufv___21952,output_schema21944_21953,input_schema21945_21954,input_checker21946_21955,output_checker21947_21956))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema21944_21953,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21945_21954], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___21972 = schema.utils.use_fn_validation;var output_schema21964_21973 = om_bootstrap.types.Component;var input_schema21965_21974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker21966_21975 = schema.core.checker.call(null,input_schema21965_21974);var output_checker21967_21976 = schema.core.checker.call(null,output_schema21964_21973);/**
* Inputs: [opts :- DropdownMenu & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_menu = ((function (ufv___21972,output_schema21964_21973,input_schema21965_21974,input_checker21966_21975,output_checker21967_21976){
return (function() { 
var dropdown_menu__delegate = function (G__21968,rest21969){var validate__10325__auto__ = ufv___21972.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___21977 = cljs.core.list_STAR_.call(null,G__21968,rest21969);var temp__4126__auto___21978 = input_checker21966_21975.call(null,args__10326__auto___21977);if(cljs.core.truth_(temp__4126__auto___21978))
{var error__10327__auto___21979 = temp__4126__auto___21978;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__10327__auto___21979)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21965_21974,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___21977,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21979], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__21968;var children = rest21969;while(true){
var vec__21971 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);var bs = cljs.core.nth.call(null,vec__21971,(0),null);var props = cljs.core.nth.call(null,vec__21971,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4124__auto__))
{var on_select = temp__4124__auto__;return cljs.core.map.call(null,((function (on_select,temp__4124__auto__,vec__21971,bs,props,classes,ul_attrs,validate__10325__auto__,ufv___21972,output_schema21964_21973,input_schema21965_21974,input_checker21966_21975,output_checker21967_21976){
return (function (p1__21963_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__21963_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4124__auto__,vec__21971,bs,props,classes,ul_attrs,validate__10325__auto__,ufv___21972,output_schema21964_21973,input_schema21965_21974,input_checker21966_21975,output_checker21967_21976))
,children);
} else
{return children;
}
})()],null)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___21980 = output_checker21967_21976.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___21980))
{var error__10327__auto___21981 = temp__4126__auto___21980;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__10327__auto___21981)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21964_21973,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___21981], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var dropdown_menu = function (G__21968,var_args){
var rest21969 = null;if (arguments.length > 1) {
  rest21969 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown_menu__delegate.call(this,G__21968,rest21969);};
dropdown_menu.cljs$lang$maxFixedArity = 1;
dropdown_menu.cljs$lang$applyTo = (function (arglist__21982){
var G__21968 = cljs.core.first(arglist__21982);
var rest21969 = cljs.core.rest(arglist__21982);
return dropdown_menu__delegate(G__21968,rest21969);
});
dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = dropdown_menu__delegate;
return dropdown_menu;
})()
;})(ufv___21972,output_schema21964_21973,input_schema21965_21974,input_checker21966_21975,output_checker21967_21976))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema21964_21973,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21965_21974], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__14140__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));(descriptor__14140__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);
return descriptor__14140__auto__;
})();
/**
* Generates a dropdown button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_STAR_ = (function() { 
var dropdown_STAR___delegate = function (data__14169__auto__,owner21984,p__21986){var vec__22005 = p__21986;var opts__14170__auto__ = cljs.core.nth.call(null,vec__22005,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema22008 = schema.core.Any;var input_schema22009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map22006","map22006",-1359758340,null))], null);var input_checker22010 = schema.core.checker.call(null,input_schema22009);var output_checker22011 = schema.core.checker.call(null,output_schema22008);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function fnk22007(G__22012){var validate__10325__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___22023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22012], null);var temp__4126__auto___22024 = input_checker22010.call(null,args__10326__auto___22023);if(cljs.core.truth_(temp__4126__auto___22024))
{var error__10327__auto___22025 = temp__4126__auto___22024;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk22007","fnk22007",-954408632,null),cljs.core.pr_str.call(null,error__10327__auto___22025)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22009,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___22023,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22025], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var map22006 = G__22012;while(true){
if(cljs.core.map_QMARK_.call(null,map22006))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22006)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map22006,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map22006,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t22018 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t22018 = (function (owner,input_checker22010,validate__10325__auto__,fnk22007,p__21986,owner21984,state,output_schema22008,vec__22005,data__14169__auto__,dropdown_STAR_,G__22012,opts__14170__auto__,input_schema22009,map22006,ufv__,output_checker22011,meta22019){
this.owner = owner;
this.input_checker22010 = input_checker22010;
this.validate__10325__auto__ = validate__10325__auto__;
this.fnk22007 = fnk22007;
this.p__21986 = p__21986;
this.owner21984 = owner21984;
this.state = state;
this.output_schema22008 = output_schema22008;
this.vec__22005 = vec__22005;
this.data__14169__auto__ = data__14169__auto__;
this.dropdown_STAR_ = dropdown_STAR_;
this.G__22012 = G__22012;
this.opts__14170__auto__ = opts__14170__auto__;
this.input_schema22009 = input_schema22009;
this.map22006 = map22006;
this.ufv__ = ufv__;
this.output_checker22011 = output_checker22011;
this.meta22019 = meta22019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t22018.cljs$lang$type = true;
om_bootstrap.button.t22018.cljs$lang$ctorStr = "om-bootstrap.button/t22018";
om_bootstrap.button.t22018.cljs$lang$ctorPrWriter = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.button/t22018");
});})(state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
;
om_bootstrap.button.t22018.prototype.om$core$IRender$ = true;
om_bootstrap.button.t22018.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__22021 = om.core.get_props.call(null,self__.owner);var map__22021__$1 = ((cljs.core.seq_QMARK_.call(null,map__22021))?cljs.core.apply.call(null,cljs.core.hash_map,map__22021):map__22021);var children = cljs.core.get.call(null,map__22021__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__22021__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__22022 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__22022,(0),null);var props = cljs.core.nth.call(null,vec__22022,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22021,map__22021__$1,children,opts,vec__22022,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__22021,map__22021__$1,children,opts,vec__22022,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
], null);var update_child_props = ((function (open_QMARK_,map__22021,map__22021__$1,children,opts,vec__22022,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function (props__$1){var handle = (cljs.core.truth_((function (){var or__3556__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__22021,map__22021__$1,children,opts,vec__22022,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function (key){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4124__auto__))
{var os = temp__4124__auto__;return os.call(null,key);
} else
{return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__22021,map__22021__$1,children,opts,vec__22022,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
:null);return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__22021,map__22021__$1,children,opts,vec__22022,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
;return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__22021,map__22021__$1,children,opts,vec__22022,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function (p1__21983_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__21983_SHARP_,update_child_props);
});})(open_QMARK_,map__22021,map__22021__$1,children,opts,vec__22022,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
,children))], null));
});})(state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
;
om_bootstrap.button.t22018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function (_22020){var self__ = this;
var _22020__$1 = this;return self__.meta22019;
});})(state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
;
om_bootstrap.button.t22018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function (_22020,meta22019__$1){var self__ = this;
var _22020__$1 = this;return (new om_bootstrap.button.t22018(self__.owner,self__.input_checker22010,self__.validate__10325__auto__,self__.fnk22007,self__.p__21986,self__.owner21984,self__.state,self__.output_schema22008,self__.vec__22005,self__.data__14169__auto__,self__.dropdown_STAR_,self__.G__22012,self__.opts__14170__auto__,self__.input_schema22009,self__.map22006,self__.ufv__,self__.output_checker22011,meta22019__$1));
});})(state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
;
om_bootstrap.button.__GT_t22018 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__){
return (function __GT_t22018(owner__$1,input_checker22010__$1,validate__10325__auto____$1,fnk22007__$1,p__21986__$1,owner21984__$1,state__$1,output_schema22008__$1,vec__22005__$1,data__14169__auto____$1,dropdown_STAR___$1,G__22012__$1,opts__14170__auto____$1,input_schema22009__$1,map22006__$1,ufv____$1,output_checker22011__$1,meta22019){return (new om_bootstrap.button.t22018(owner__$1,input_checker22010__$1,validate__10325__auto____$1,fnk22007__$1,p__21986__$1,owner21984__$1,state__$1,output_schema22008__$1,vec__22005__$1,data__14169__auto____$1,dropdown_STAR___$1,G__22012__$1,opts__14170__auto____$1,input_schema22009__$1,map22006__$1,ufv____$1,output_checker22011__$1,meta22019));
});})(state,owner,validate__10325__auto__,ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
;
}
return (new om_bootstrap.button.t22018(owner,input_checker22010,validate__10325__auto__,fnk22007,p__21986,owner21984,state,output_schema22008,vec__22005,data__14169__auto__,dropdown_STAR_,G__22012,opts__14170__auto__,input_schema22009,map22006,ufv__,output_checker22011,null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___22026 = output_checker22011.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___22026))
{var error__10327__auto___22027 = temp__4126__auto___22026;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk22007","fnk22007",-954408632,null),cljs.core.pr_str.call(null,error__10327__auto___22027)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22008,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22027], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv__,output_schema22008,input_schema22009,input_checker22010,output_checker22011,vec__22005,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema22008,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22009], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner21984),new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21984,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var dropdown_STAR_ = function (data__14169__auto__,owner21984,var_args){
var p__21986 = null;if (arguments.length > 2) {
  p__21986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return dropdown_STAR___delegate.call(this,data__14169__auto__,owner21984,p__21986);};
dropdown_STAR_.cljs$lang$maxFixedArity = 2;
dropdown_STAR_.cljs$lang$applyTo = (function (arglist__22028){
var data__14169__auto__ = cljs.core.first(arglist__22028);
arglist__22028 = cljs.core.next(arglist__22028);
var owner21984 = cljs.core.first(arglist__22028);
var p__21986 = cljs.core.rest(arglist__22028);
return dropdown_STAR___delegate(data__14169__auto__,owner21984,p__21986);
});
dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = dropdown_STAR___delegate;
return dropdown_STAR_;
})()
;
om_bootstrap.button.__GT_dropdown_STAR_ = (function() {
var __GT_dropdown_STAR_ = null;
var __GT_dropdown_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__14138__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});
var __GT_dropdown_STAR___2 = (function (cursor__14138__auto__,m21985){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__14138__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m21985));
});
__GT_dropdown_STAR_ = function(cursor__14138__auto__,m21985){
switch(arguments.length){
case 1:
return __GT_dropdown_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_dropdown_STAR___2.call(this,cursor__14138__auto__,m21985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_dropdown_STAR___1;
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_dropdown_STAR___2;
return __GT_dropdown_STAR_;
})()
;
var ufv___22035 = schema.utils.use_fn_validation;var output_schema22029_22036 = om_bootstrap.types.Component;var input_schema22030_22037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker22031_22038 = schema.core.checker.call(null,input_schema22030_22037);var output_checker22032_22039 = schema.core.checker.call(null,output_schema22029_22036);/**
* Inputs: [opts :- DropdownButton & children]
* Returns: t/Component
* 
* Returns a dropdown button component. The component manages its own
* dropdown state.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown = ((function (ufv___22035,output_schema22029_22036,input_schema22030_22037,input_checker22031_22038,output_checker22032_22039){
return (function() { 
var dropdown__delegate = function (G__22033,rest22034){var validate__10325__auto__ = ufv___22035.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___22040 = cljs.core.list_STAR_.call(null,G__22033,rest22034);var temp__4126__auto___22041 = input_checker22031_22038.call(null,args__10326__auto___22040);if(cljs.core.truth_(temp__4126__auto___22041))
{var error__10327__auto___22042 = temp__4126__auto___22041;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__10327__auto___22042)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22030_22037,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___22040,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22042], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__22033;var children = rest22034;while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___22043 = output_checker22032_22039.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___22043))
{var error__10327__auto___22044 = temp__4126__auto___22043;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__10327__auto___22044)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22029_22036,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22044], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var dropdown = function (G__22033,var_args){
var rest22034 = null;if (arguments.length > 1) {
  rest22034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown__delegate.call(this,G__22033,rest22034);};
dropdown.cljs$lang$maxFixedArity = 1;
dropdown.cljs$lang$applyTo = (function (arglist__22045){
var G__22033 = cljs.core.first(arglist__22045);
var rest22034 = cljs.core.rest(arglist__22045);
return dropdown__delegate(G__22033,rest22034);
});
dropdown.cljs$core$IFn$_invoke$arity$variadic = dropdown__delegate;
return dropdown;
})()
;})(ufv___22035,output_schema22029_22036,input_schema22030_22037,input_checker22031_22038,output_checker22032_22039))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema22029_22036,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22030_22037], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__14140__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));(descriptor__14140__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);
return descriptor__14140__auto__;
})();
/**
* Generates a split button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.split_STAR_ = (function() { 
var split_STAR___delegate = function (data__14169__auto__,owner22046,p__22048){var vec__22067 = p__22048;var opts__14170__auto__ = cljs.core.nth.call(null,vec__22067,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema22070 = schema.core.Any;var input_schema22071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map22068","map22068",585751488,null))], null);var input_checker22072 = schema.core.checker.call(null,input_schema22071);var output_checker22073 = schema.core.checker.call(null,output_schema22070);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function fnk22069(G__22074){var validate__10325__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___22085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22074], null);var temp__4126__auto___22086 = input_checker22072.call(null,args__10326__auto___22085);if(cljs.core.truth_(temp__4126__auto___22086))
{var error__10327__auto___22087 = temp__4126__auto___22086;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk22069","fnk22069",-952965927,null),cljs.core.pr_str.call(null,error__10327__auto___22087)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22071,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___22085,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22087], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var map22068 = G__22074;while(true){
if(cljs.core.map_QMARK_.call(null,map22068))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22068)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map22068,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map22068,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t22080 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t22080 = (function (map22068,split_STAR_,output_checker22073,owner22046,G__22074,owner,validate__10325__auto__,state,input_schema22071,data__14169__auto__,p__22048,fnk22069,opts__14170__auto__,input_checker22072,ufv__,vec__22067,output_schema22070,meta22081){
this.map22068 = map22068;
this.split_STAR_ = split_STAR_;
this.output_checker22073 = output_checker22073;
this.owner22046 = owner22046;
this.G__22074 = G__22074;
this.owner = owner;
this.validate__10325__auto__ = validate__10325__auto__;
this.state = state;
this.input_schema22071 = input_schema22071;
this.data__14169__auto__ = data__14169__auto__;
this.p__22048 = p__22048;
this.fnk22069 = fnk22069;
this.opts__14170__auto__ = opts__14170__auto__;
this.input_checker22072 = input_checker22072;
this.ufv__ = ufv__;
this.vec__22067 = vec__22067;
this.output_schema22070 = output_schema22070;
this.meta22081 = meta22081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t22080.cljs$lang$type = true;
om_bootstrap.button.t22080.cljs$lang$ctorStr = "om-bootstrap.button/t22080";
om_bootstrap.button.t22080.cljs$lang$ctorPrWriter = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.button/t22080");
});})(state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
;
om_bootstrap.button.t22080.prototype.om$core$IRender$ = true;
om_bootstrap.button.t22080.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__22083 = om.core.get_props.call(null,self__.owner);var map__22083__$1 = ((cljs.core.seq_QMARK_.call(null,map__22083))?cljs.core.apply.call(null,cljs.core.hash_map,map__22083):map__22083);var children = cljs.core.get.call(null,map__22083__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__22083__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__22084 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));var bs = cljs.core.nth.call(null,vec__22084,(0),null);var props = cljs.core.nth.call(null,vec__22084,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22083,map__22083__$1,children,opts,vec__22084,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function (e){if(cljs.core.truth_(open_QMARK_))
{set_dropdown.call(null,false);
} else
{}
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null,e);
} else
{return null;
}
});})(open_QMARK_,map__22083,map__22083__$1,children,opts,vec__22084,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22083,map__22083__$1,children,opts,vec__22084,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__22083,map__22083__$1,children,opts,vec__22084,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__22083,map__22083__$1,children,opts,vec__22084,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function (k){var temp__4126__auto___22088 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto___22088))
{var f_22089 = temp__4126__auto___22088;f_22089.call(null,k);
} else
{}
return set_dropdown.call(null,false);
});})(open_QMARK_,map__22083,map__22083__$1,children,opts,vec__22084,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
], null),children);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
;
om_bootstrap.button.t22080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function (_22082){var self__ = this;
var _22082__$1 = this;return self__.meta22081;
});})(state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
;
om_bootstrap.button.t22080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function (_22082,meta22081__$1){var self__ = this;
var _22082__$1 = this;return (new om_bootstrap.button.t22080(self__.map22068,self__.split_STAR_,self__.output_checker22073,self__.owner22046,self__.G__22074,self__.owner,self__.validate__10325__auto__,self__.state,self__.input_schema22071,self__.data__14169__auto__,self__.p__22048,self__.fnk22069,self__.opts__14170__auto__,self__.input_checker22072,self__.ufv__,self__.vec__22067,self__.output_schema22070,meta22081__$1));
});})(state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
;
om_bootstrap.button.__GT_t22080 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__){
return (function __GT_t22080(map22068__$1,split_STAR___$1,output_checker22073__$1,owner22046__$1,G__22074__$1,owner__$1,validate__10325__auto____$1,state__$1,input_schema22071__$1,data__14169__auto____$1,p__22048__$1,fnk22069__$1,opts__14170__auto____$1,input_checker22072__$1,ufv____$1,vec__22067__$1,output_schema22070__$1,meta22081){return (new om_bootstrap.button.t22080(map22068__$1,split_STAR___$1,output_checker22073__$1,owner22046__$1,G__22074__$1,owner__$1,validate__10325__auto____$1,state__$1,input_schema22071__$1,data__14169__auto____$1,p__22048__$1,fnk22069__$1,opts__14170__auto____$1,input_checker22072__$1,ufv____$1,vec__22067__$1,output_schema22070__$1,meta22081));
});})(state,owner,validate__10325__auto__,ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
;
}
return (new om_bootstrap.button.t22080(map22068,split_STAR_,output_checker22073,owner22046,G__22074,owner,validate__10325__auto__,state,input_schema22071,data__14169__auto__,p__22048,fnk22069,opts__14170__auto__,input_checker22072,ufv__,vec__22067,output_schema22070,null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___22090 = output_checker22073.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___22090))
{var error__10327__auto___22091 = temp__4126__auto___22090;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk22069","fnk22069",-952965927,null),cljs.core.pr_str.call(null,error__10327__auto___22091)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22070,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22091], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv__,output_schema22070,input_schema22071,input_checker22072,output_checker22073,vec__22067,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema22070,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22071], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner22046),new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22046,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var split_STAR_ = function (data__14169__auto__,owner22046,var_args){
var p__22048 = null;if (arguments.length > 2) {
  p__22048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return split_STAR___delegate.call(this,data__14169__auto__,owner22046,p__22048);};
split_STAR_.cljs$lang$maxFixedArity = 2;
split_STAR_.cljs$lang$applyTo = (function (arglist__22092){
var data__14169__auto__ = cljs.core.first(arglist__22092);
arglist__22092 = cljs.core.next(arglist__22092);
var owner22046 = cljs.core.first(arglist__22092);
var p__22048 = cljs.core.rest(arglist__22092);
return split_STAR___delegate(data__14169__auto__,owner22046,p__22048);
});
split_STAR_.cljs$core$IFn$_invoke$arity$variadic = split_STAR___delegate;
return split_STAR_;
})()
;
om_bootstrap.button.__GT_split_STAR_ = (function() {
var __GT_split_STAR_ = null;
var __GT_split_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__14138__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});
var __GT_split_STAR___2 = (function (cursor__14138__auto__,m22047){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__14138__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m22047));
});
__GT_split_STAR_ = function(cursor__14138__auto__,m22047){
switch(arguments.length){
case 1:
return __GT_split_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_split_STAR___2.call(this,cursor__14138__auto__,m22047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_split_STAR___1;
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_split_STAR___2;
return __GT_split_STAR_;
})()
;
var ufv___22099 = schema.utils.use_fn_validation;var output_schema22093_22100 = schema.core.Any;var input_schema22094_22101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker22095_22102 = schema.core.checker.call(null,input_schema22094_22101);var output_checker22096_22103 = schema.core.checker.call(null,output_schema22093_22100);/**
* Inputs: [opts :- SplitButton & children]
* @param {...*} var_args
*/
om_bootstrap.button.split = ((function (ufv___22099,output_schema22093_22100,input_schema22094_22101,input_checker22095_22102,output_checker22096_22103){
return (function() { 
var split__delegate = function (G__22097,rest22098){var validate__10325__auto__ = ufv___22099.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___22104 = cljs.core.list_STAR_.call(null,G__22097,rest22098);var temp__4126__auto___22105 = input_checker22095_22102.call(null,args__10326__auto___22104);if(cljs.core.truth_(temp__4126__auto___22105))
{var error__10327__auto___22106 = temp__4126__auto___22105;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__10327__auto___22106)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22094_22101,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___22104,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22106], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__22097;var children = rest22098;while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___22107 = output_checker22096_22103.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___22107))
{var error__10327__auto___22108 = temp__4126__auto___22107;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__10327__auto___22108)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22093_22100,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22108], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var split = function (G__22097,var_args){
var rest22098 = null;if (arguments.length > 1) {
  rest22098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return split__delegate.call(this,G__22097,rest22098);};
split.cljs$lang$maxFixedArity = 1;
split.cljs$lang$applyTo = (function (arglist__22109){
var G__22097 = cljs.core.first(arglist__22109);
var rest22098 = cljs.core.rest(arglist__22109);
return split__delegate(G__22097,rest22098);
});
split.cljs$core$IFn$_invoke$arity$variadic = split__delegate;
return split;
})()
;})(ufv___22099,output_schema22093_22100,input_schema22094_22101,input_checker22095_22102,output_checker22096_22103))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema22093_22100,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22094_22101], null)));

//# sourceMappingURL=button.js.map