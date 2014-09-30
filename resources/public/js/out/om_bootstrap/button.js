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
var ufv___17249 = schema.utils.use_fn_validation;var output_schema17243_17250 = schema.core.Any;var input_schema17244_17251 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.Bool,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker17245_17252 = schema.core.checker.call(null,input_schema17244_17251);var output_checker17246_17253 = schema.core.checker.call(null,output_schema17243_17250);/**
* Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? s/Bool, :props {s/Any s/Any}} children]
*/
om_bootstrap.button.render_anchor = ((function (ufv___17249,output_schema17243_17250,input_schema17244_17251,input_checker17245_17252,output_checker17246_17253){
return (function render_anchor(G__17247,G__17248){var validate__11613__auto__ = ufv___17249.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17247,G__17248], null);var temp__4126__auto___17255 = input_checker17245_17252.call(null,args__11614__auto___17254);if(cljs.core.truth_(temp__4126__auto___17255))
{var error__11615__auto___17256 = temp__4126__auto___17255;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__11615__auto___17256)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17244_17251,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17254,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17256], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17247;var children = G__17248;while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17257 = output_checker17246_17253.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17257))
{var error__11615__auto___17258 = temp__4126__auto___17257;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__11615__auto___17258)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17243_17250,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17258], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17249,output_schema17243_17250,input_schema17244_17251,input_checker17245_17252,output_checker17246_17253))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema17243_17250,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17244_17251], null)));
var ufv___17267 = schema.utils.use_fn_validation;var output_schema17259_17268 = om_bootstrap.types.Component;var input_schema17260_17269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);var input_checker17261_17270 = schema.core.checker.call(null,input_schema17260_17269);var output_checker17262_17271 = schema.core.checker.call(null,output_schema17259_17268);/**
* Inputs: [props :- Button & children]
* Returns: t/Component
* 
* Renders a button.
* @param {...*} var_args
*/
om_bootstrap.button.button = ((function (ufv___17267,output_schema17259_17268,input_schema17260_17269,input_checker17261_17270,output_checker17262_17271){
return (function() { 
var button__delegate = function (G__17263,rest17264){var validate__11613__auto__ = ufv___17267.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17272 = cljs.core.list_STAR_.call(null,G__17263,rest17264);var temp__4126__auto___17273 = input_checker17261_17270.call(null,args__11614__auto___17272);if(cljs.core.truth_(temp__4126__auto___17273))
{var error__11615__auto___17274 = temp__4126__auto___17273;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__11615__auto___17274)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17260_17269,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17272,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17274], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var props = G__17263;var children = rest17264;while(true){
var vec__17266 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));var bs = cljs.core.nth.call(null,vec__17266,(0),null);var props__$1 = cljs.core.nth.call(null,vec__17266,(1),null);var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs)))
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
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17275 = output_checker17262_17271.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17275))
{var error__11615__auto___17276 = temp__4126__auto___17275;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__11615__auto___17276)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17259_17268,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17276], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var button = function (G__17263,var_args){
var rest17264 = null;if (arguments.length > 1) {
  rest17264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button__delegate.call(this,G__17263,rest17264);};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = (function (arglist__17277){
var G__17263 = cljs.core.first(arglist__17277);
var rest17264 = cljs.core.rest(arglist__17277);
return button__delegate(G__17263,rest17264);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;})(ufv___17267,output_schema17259_17268,input_schema17260_17269,input_checker17261_17270,output_checker17262_17271))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema17259_17268,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17260_17269], null)));
var ufv___17286 = schema.utils.use_fn_validation;var output_schema17278_17287 = om_bootstrap.types.Component;var input_schema17279_17288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17280_17289 = schema.core.checker.call(null,input_schema17279_17288);var output_checker17281_17290 = schema.core.checker.call(null,output_schema17278_17287);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Renders a button toolbar.
* @param {...*} var_args
*/
om_bootstrap.button.toolbar = ((function (ufv___17286,output_schema17278_17287,input_schema17279_17288,input_checker17280_17289,output_checker17281_17290){
return (function() { 
var toolbar__delegate = function (G__17282,rest17283){var validate__11613__auto__ = ufv___17286.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17291 = cljs.core.list_STAR_.call(null,G__17282,rest17283);var temp__4126__auto___17292 = input_checker17280_17289.call(null,args__11614__auto___17291);if(cljs.core.truth_(temp__4126__auto___17292))
{var error__11615__auto___17293 = temp__4126__auto___17292;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__11615__auto___17293)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17279_17288,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17291,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17293], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17282;var children = rest17283;while(true){
var vec__17285 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));var bs = cljs.core.nth.call(null,vec__17285,(0),null);var props = cljs.core.nth.call(null,vec__17285,(1),null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17294 = output_checker17281_17290.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17294))
{var error__11615__auto___17295 = temp__4126__auto___17294;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__11615__auto___17295)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17278_17287,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17295], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var toolbar = function (G__17282,var_args){
var rest17283 = null;if (arguments.length > 1) {
  rest17283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return toolbar__delegate.call(this,G__17282,rest17283);};
toolbar.cljs$lang$maxFixedArity = 1;
toolbar.cljs$lang$applyTo = (function (arglist__17296){
var G__17282 = cljs.core.first(arglist__17296);
var rest17283 = cljs.core.rest(arglist__17296);
return toolbar__delegate(G__17282,rest17283);
});
toolbar.cljs$core$IFn$_invoke$arity$variadic = toolbar__delegate;
return toolbar;
})()
;})(ufv___17286,output_schema17278_17287,input_schema17279_17288,input_checker17280_17289,output_checker17281_17290))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema17278_17287,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17279_17288], null)));
var ufv___17305 = schema.utils.use_fn_validation;var output_schema17297_17306 = om_bootstrap.types.Component;var input_schema17298_17307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17299_17308 = schema.core.checker.call(null,input_schema17298_17307);var output_checker17300_17309 = schema.core.checker.call(null,output_schema17297_17306);/**
* Inputs: [opts :- ButtonGroup & children]
* Returns: t/Component
* 
* Renders the supplied children in a wrapping button-group div.
* @param {...*} var_args
*/
om_bootstrap.button.button_group = ((function (ufv___17305,output_schema17297_17306,input_schema17298_17307,input_checker17299_17308,output_checker17300_17309){
return (function() { 
var button_group__delegate = function (G__17301,rest17302){var validate__11613__auto__ = ufv___17305.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17310 = cljs.core.list_STAR_.call(null,G__17301,rest17302);var temp__4126__auto___17311 = input_checker17299_17308.call(null,args__11614__auto___17310);if(cljs.core.truth_(temp__4126__auto___17311))
{var error__11615__auto___17312 = temp__4126__auto___17311;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__11615__auto___17312)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17298_17307,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17310,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17312], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17301;var children = rest17302;while(true){
var vec__17304 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));var bs = cljs.core.nth.call(null,vec__17304,(0),null);var props = cljs.core.nth.call(null,vec__17304,(1),null);var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17313 = output_checker17300_17309.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17313))
{var error__11615__auto___17314 = temp__4126__auto___17313;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__11615__auto___17314)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17297_17306,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17314], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var button_group = function (G__17301,var_args){
var rest17302 = null;if (arguments.length > 1) {
  rest17302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button_group__delegate.call(this,G__17301,rest17302);};
button_group.cljs$lang$maxFixedArity = 1;
button_group.cljs$lang$applyTo = (function (arglist__17315){
var G__17301 = cljs.core.first(arglist__17315);
var rest17302 = cljs.core.rest(arglist__17315);
return button_group__delegate(G__17301,rest17302);
});
button_group.cljs$core$IFn$_invoke$arity$variadic = button_group__delegate;
return button_group;
})()
;})(ufv___17305,output_schema17297_17306,input_schema17298_17307,input_checker17299_17308,output_checker17300_17309))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema17297_17306,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17298_17307], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function render_nav_item(props,open_QMARK_,children){var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function render_button_group(props,open_QMARK_,children){var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___17324 = schema.utils.use_fn_validation;var output_schema17316_17325 = om_bootstrap.types.Component;var input_schema17317_17326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17318_17327 = schema.core.checker.call(null,input_schema17317_17326);var output_checker17319_17328 = schema.core.checker.call(null,output_schema17316_17325);/**
* Inputs: [opts :- MenuItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.menu_item = ((function (ufv___17324,output_schema17316_17325,input_schema17317_17326,input_checker17318_17327,output_checker17319_17328){
return (function() { 
var menu_item__delegate = function (G__17320,rest17321){var validate__11613__auto__ = ufv___17324.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17329 = cljs.core.list_STAR_.call(null,G__17320,rest17321);var temp__4126__auto___17330 = input_checker17318_17327.call(null,args__11614__auto___17329);if(cljs.core.truth_(temp__4126__auto___17330))
{var error__11615__auto___17331 = temp__4126__auto___17330;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__11615__auto___17331)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17317_17326,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17329,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17331], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17320;var children = rest17321;while(true){
var vec__17323 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__17323,(0),null);var props = cljs.core.nth.call(null,vec__17323,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (vec__17323,bs,props,classes,validate__11613__auto__,ufv___17324,output_schema17316_17325,input_schema17317_17326,input_checker17318_17327,output_checker17319_17328){
return (function (e){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var on_select = temp__4126__auto__;e.preventDefault();
return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return null;
}
});})(vec__17323,bs,props,classes,validate__11613__auto__,ufv___17324,output_schema17316_17325,input_schema17317_17326,input_checker17318_17327,output_checker17319_17328))
;var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));var li_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null);return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17332 = output_checker17319_17328.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17332))
{var error__11615__auto___17333 = temp__4126__auto___17332;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__11615__auto___17333)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17316_17325,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17333], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var menu_item = function (G__17320,var_args){
var rest17321 = null;if (arguments.length > 1) {
  rest17321 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return menu_item__delegate.call(this,G__17320,rest17321);};
menu_item.cljs$lang$maxFixedArity = 1;
menu_item.cljs$lang$applyTo = (function (arglist__17334){
var G__17320 = cljs.core.first(arglist__17334);
var rest17321 = cljs.core.rest(arglist__17334);
return menu_item__delegate(G__17320,rest17321);
});
menu_item.cljs$core$IFn$_invoke$arity$variadic = menu_item__delegate;
return menu_item;
})()
;})(ufv___17324,output_schema17316_17325,input_schema17317_17326,input_checker17318_17327,output_checker17319_17328))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema17316_17325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17317_17326], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___17344 = schema.utils.use_fn_validation;var output_schema17336_17345 = om_bootstrap.types.Component;var input_schema17337_17346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17338_17347 = schema.core.checker.call(null,input_schema17337_17346);var output_checker17339_17348 = schema.core.checker.call(null,output_schema17336_17345);/**
* Inputs: [opts :- DropdownMenu & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_menu = ((function (ufv___17344,output_schema17336_17345,input_schema17337_17346,input_checker17338_17347,output_checker17339_17348){
return (function() { 
var dropdown_menu__delegate = function (G__17340,rest17341){var validate__11613__auto__ = ufv___17344.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17349 = cljs.core.list_STAR_.call(null,G__17340,rest17341);var temp__4126__auto___17350 = input_checker17338_17347.call(null,args__11614__auto___17349);if(cljs.core.truth_(temp__4126__auto___17350))
{var error__11615__auto___17351 = temp__4126__auto___17350;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__11615__auto___17351)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17337_17346,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17349,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17351], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17340;var children = rest17341;while(true){
var vec__17343 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);var bs = cljs.core.nth.call(null,vec__17343,(0),null);var props = cljs.core.nth.call(null,vec__17343,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4124__auto__))
{var on_select = temp__4124__auto__;return cljs.core.map.call(null,((function (on_select,temp__4124__auto__,vec__17343,bs,props,classes,ul_attrs,validate__11613__auto__,ufv___17344,output_schema17336_17345,input_schema17337_17346,input_checker17338_17347,output_checker17339_17348){
return (function (p1__17335_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__17335_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4124__auto__,vec__17343,bs,props,classes,ul_attrs,validate__11613__auto__,ufv___17344,output_schema17336_17345,input_schema17337_17346,input_checker17338_17347,output_checker17339_17348))
,children);
} else
{return children;
}
})()],null)));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17352 = output_checker17339_17348.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17352))
{var error__11615__auto___17353 = temp__4126__auto___17352;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__11615__auto___17353)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17336_17345,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17353], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var dropdown_menu = function (G__17340,var_args){
var rest17341 = null;if (arguments.length > 1) {
  rest17341 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown_menu__delegate.call(this,G__17340,rest17341);};
dropdown_menu.cljs$lang$maxFixedArity = 1;
dropdown_menu.cljs$lang$applyTo = (function (arglist__17354){
var G__17340 = cljs.core.first(arglist__17354);
var rest17341 = cljs.core.rest(arglist__17354);
return dropdown_menu__delegate(G__17340,rest17341);
});
dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = dropdown_menu__delegate;
return dropdown_menu;
})()
;})(ufv___17344,output_schema17336_17345,input_schema17337_17346,input_checker17338_17347,output_checker17339_17348))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema17336_17345,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17337_17346], null)));
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
var dropdown_STAR___delegate = function (data__14169__auto__,owner17356,p__17358){var vec__17377 = p__17358;var opts__14170__auto__ = cljs.core.nth.call(null,vec__17377,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema17380 = schema.core.Any;var input_schema17381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17378","map17378",1949880852,null))], null);var input_checker17382 = schema.core.checker.call(null,input_schema17381);var output_checker17383 = schema.core.checker.call(null,output_schema17380);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function fnk17379(G__17384){var validate__11613__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17384], null);var temp__4126__auto___17396 = input_checker17382.call(null,args__11614__auto___17395);if(cljs.core.truth_(temp__4126__auto___17396))
{var error__11615__auto___17397 = temp__4126__auto___17396;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk17379","fnk17379",560672108,null),cljs.core.pr_str.call(null,error__11615__auto___17397)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17381,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17395,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17397], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var map17378 = G__17384;while(true){
if(cljs.core.map_QMARK_.call(null,map17378))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17378)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map17378,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map17378,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t17390 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t17390 = (function (output_schema17380,owner,input_checker17382,input_schema17381,owner17356,fnk17379,map17378,state,output_checker17383,G__17384,data__14169__auto__,dropdown_STAR_,validate__11613__auto__,p__17358,opts__14170__auto__,ufv__,vec__17377,meta17391){
this.output_schema17380 = output_schema17380;
this.owner = owner;
this.input_checker17382 = input_checker17382;
this.input_schema17381 = input_schema17381;
this.owner17356 = owner17356;
this.fnk17379 = fnk17379;
this.map17378 = map17378;
this.state = state;
this.output_checker17383 = output_checker17383;
this.G__17384 = G__17384;
this.data__14169__auto__ = data__14169__auto__;
this.dropdown_STAR_ = dropdown_STAR_;
this.validate__11613__auto__ = validate__11613__auto__;
this.p__17358 = p__17358;
this.opts__14170__auto__ = opts__14170__auto__;
this.ufv__ = ufv__;
this.vec__17377 = vec__17377;
this.meta17391 = meta17391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t17390.cljs$lang$type = true;
om_bootstrap.button.t17390.cljs$lang$ctorStr = "om-bootstrap.button/t17390";
om_bootstrap.button.t17390.cljs$lang$ctorPrWriter = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.button/t17390");
});})(state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
;
om_bootstrap.button.t17390.prototype.om$core$IRender$ = true;
om_bootstrap.button.t17390.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__17393 = om.core.get_props.call(null,self__.owner);var map__17393__$1 = ((cljs.core.seq_QMARK_.call(null,map__17393))?cljs.core.apply.call(null,cljs.core.hash_map,map__17393):map__17393);var children = cljs.core.get.call(null,map__17393__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__17393__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__17394 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__17394,(0),null);var props = cljs.core.nth.call(null,vec__17394,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__17393,map__17393__$1,children,opts,vec__17394,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__17393,map__17393__$1,children,opts,vec__17394,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
], null);var update_child_props = ((function (open_QMARK_,map__17393,map__17393__$1,children,opts,vec__17394,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function (props__$1){var handle = (cljs.core.truth_((function (){var or__3556__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__17393,map__17393__$1,children,opts,vec__17394,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function (key){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4124__auto__))
{var os = temp__4124__auto__;return os.call(null,key);
} else
{return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__17393,map__17393__$1,children,opts,vec__17394,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
:null);return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__17393,map__17393__$1,children,opts,vec__17394,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
;return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__17393,map__17393__$1,children,opts,vec__17394,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function (p1__17355_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__17355_SHARP_,update_child_props);
});})(open_QMARK_,map__17393,map__17393__$1,children,opts,vec__17394,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
,children))], null));
});})(state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
;
om_bootstrap.button.t17390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function (_17392){var self__ = this;
var _17392__$1 = this;return self__.meta17391;
});})(state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
;
om_bootstrap.button.t17390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function (_17392,meta17391__$1){var self__ = this;
var _17392__$1 = this;return (new om_bootstrap.button.t17390(self__.output_schema17380,self__.owner,self__.input_checker17382,self__.input_schema17381,self__.owner17356,self__.fnk17379,self__.map17378,self__.state,self__.output_checker17383,self__.G__17384,self__.data__14169__auto__,self__.dropdown_STAR_,self__.validate__11613__auto__,self__.p__17358,self__.opts__14170__auto__,self__.ufv__,self__.vec__17377,meta17391__$1));
});})(state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
;
om_bootstrap.button.__GT_t17390 = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__){
return (function __GT_t17390(output_schema17380__$1,owner__$1,input_checker17382__$1,input_schema17381__$1,owner17356__$1,fnk17379__$1,map17378__$1,state__$1,output_checker17383__$1,G__17384__$1,data__14169__auto____$1,dropdown_STAR___$1,validate__11613__auto____$1,p__17358__$1,opts__14170__auto____$1,ufv____$1,vec__17377__$1,meta17391){return (new om_bootstrap.button.t17390(output_schema17380__$1,owner__$1,input_checker17382__$1,input_schema17381__$1,owner17356__$1,fnk17379__$1,map17378__$1,state__$1,output_checker17383__$1,G__17384__$1,data__14169__auto____$1,dropdown_STAR___$1,validate__11613__auto____$1,p__17358__$1,opts__14170__auto____$1,ufv____$1,vec__17377__$1,meta17391));
});})(state,owner,validate__11613__auto__,ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
;
}
return (new om_bootstrap.button.t17390(output_schema17380,owner,input_checker17382,input_schema17381,owner17356,fnk17379,map17378,state,output_checker17383,G__17384,data__14169__auto__,dropdown_STAR_,validate__11613__auto__,p__17358,opts__14170__auto__,ufv__,vec__17377,null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17398 = output_checker17383.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17398))
{var error__11615__auto___17399 = temp__4126__auto___17398;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk17379","fnk17379",560672108,null),cljs.core.pr_str.call(null,error__11615__auto___17399)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17380,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17399], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv__,output_schema17380,input_schema17381,input_checker17382,output_checker17383,vec__17377,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema17380,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17381], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17356),new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17356,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var dropdown_STAR_ = function (data__14169__auto__,owner17356,var_args){
var p__17358 = null;if (arguments.length > 2) {
  p__17358 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return dropdown_STAR___delegate.call(this,data__14169__auto__,owner17356,p__17358);};
dropdown_STAR_.cljs$lang$maxFixedArity = 2;
dropdown_STAR_.cljs$lang$applyTo = (function (arglist__17400){
var data__14169__auto__ = cljs.core.first(arglist__17400);
arglist__17400 = cljs.core.next(arglist__17400);
var owner17356 = cljs.core.first(arglist__17400);
var p__17358 = cljs.core.rest(arglist__17400);
return dropdown_STAR___delegate(data__14169__auto__,owner17356,p__17358);
});
dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = dropdown_STAR___delegate;
return dropdown_STAR_;
})()
;
om_bootstrap.button.__GT_dropdown_STAR_ = (function() {
var __GT_dropdown_STAR_ = null;
var __GT_dropdown_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__14138__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});
var __GT_dropdown_STAR___2 = (function (cursor__14138__auto__,m17357){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__14138__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m17357));
});
__GT_dropdown_STAR_ = function(cursor__14138__auto__,m17357){
switch(arguments.length){
case 1:
return __GT_dropdown_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_dropdown_STAR___2.call(this,cursor__14138__auto__,m17357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_dropdown_STAR___1;
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_dropdown_STAR___2;
return __GT_dropdown_STAR_;
})()
;
var ufv___17407 = schema.utils.use_fn_validation;var output_schema17401_17408 = om_bootstrap.types.Component;var input_schema17402_17409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17403_17410 = schema.core.checker.call(null,input_schema17402_17409);var output_checker17404_17411 = schema.core.checker.call(null,output_schema17401_17408);/**
* Inputs: [opts :- DropdownButton & children]
* Returns: t/Component
* 
* Returns a dropdown button component. The component manages its own
* dropdown state.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown = ((function (ufv___17407,output_schema17401_17408,input_schema17402_17409,input_checker17403_17410,output_checker17404_17411){
return (function() { 
var dropdown__delegate = function (G__17405,rest17406){var validate__11613__auto__ = ufv___17407.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17412 = cljs.core.list_STAR_.call(null,G__17405,rest17406);var temp__4126__auto___17413 = input_checker17403_17410.call(null,args__11614__auto___17412);if(cljs.core.truth_(temp__4126__auto___17413))
{var error__11615__auto___17414 = temp__4126__auto___17413;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__11615__auto___17414)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17402_17409,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17412,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17414], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17405;var children = rest17406;while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17415 = output_checker17404_17411.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17415))
{var error__11615__auto___17416 = temp__4126__auto___17415;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__11615__auto___17416)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17401_17408,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17416], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var dropdown = function (G__17405,var_args){
var rest17406 = null;if (arguments.length > 1) {
  rest17406 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown__delegate.call(this,G__17405,rest17406);};
dropdown.cljs$lang$maxFixedArity = 1;
dropdown.cljs$lang$applyTo = (function (arglist__17417){
var G__17405 = cljs.core.first(arglist__17417);
var rest17406 = cljs.core.rest(arglist__17417);
return dropdown__delegate(G__17405,rest17406);
});
dropdown.cljs$core$IFn$_invoke$arity$variadic = dropdown__delegate;
return dropdown;
})()
;})(ufv___17407,output_schema17401_17408,input_schema17402_17409,input_checker17403_17410,output_checker17404_17411))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema17401_17408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17402_17409], null)));
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
var split_STAR___delegate = function (data__14169__auto__,owner17418,p__17420){var vec__17439 = p__17420;var opts__14170__auto__ = cljs.core.nth.call(null,vec__17439,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema17442 = schema.core.Any;var input_schema17443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17440","map17440",1478508384,null))], null);var input_checker17444 = schema.core.checker.call(null,input_schema17443);var output_checker17445 = schema.core.checker.call(null,output_schema17442);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function fnk17441(G__17446){var validate__11613__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17446], null);var temp__4126__auto___17458 = input_checker17444.call(null,args__11614__auto___17457);if(cljs.core.truth_(temp__4126__auto___17458))
{var error__11615__auto___17459 = temp__4126__auto___17458;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk17441","fnk17441",1741869896,null),cljs.core.pr_str.call(null,error__11615__auto___17459)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17443,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17457,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17459], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var map17440 = G__17446;while(true){
if(cljs.core.map_QMARK_.call(null,map17440))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17440)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map17440,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map17440,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t17452 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t17452 = (function (map17440,input_checker17444,output_checker17445,split_STAR_,owner,fnk17441,p__17420,owner17418,output_schema17442,state,G__17446,input_schema17443,data__14169__auto__,validate__11613__auto__,vec__17439,opts__14170__auto__,ufv__,meta17453){
this.map17440 = map17440;
this.input_checker17444 = input_checker17444;
this.output_checker17445 = output_checker17445;
this.split_STAR_ = split_STAR_;
this.owner = owner;
this.fnk17441 = fnk17441;
this.p__17420 = p__17420;
this.owner17418 = owner17418;
this.output_schema17442 = output_schema17442;
this.state = state;
this.G__17446 = G__17446;
this.input_schema17443 = input_schema17443;
this.data__14169__auto__ = data__14169__auto__;
this.validate__11613__auto__ = validate__11613__auto__;
this.vec__17439 = vec__17439;
this.opts__14170__auto__ = opts__14170__auto__;
this.ufv__ = ufv__;
this.meta17453 = meta17453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t17452.cljs$lang$type = true;
om_bootstrap.button.t17452.cljs$lang$ctorStr = "om-bootstrap.button/t17452";
om_bootstrap.button.t17452.cljs$lang$ctorPrWriter = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.button/t17452");
});})(state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
;
om_bootstrap.button.t17452.prototype.om$core$IRender$ = true;
om_bootstrap.button.t17452.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__17455 = om.core.get_props.call(null,self__.owner);var map__17455__$1 = ((cljs.core.seq_QMARK_.call(null,map__17455))?cljs.core.apply.call(null,cljs.core.hash_map,map__17455):map__17455);var children = cljs.core.get.call(null,map__17455__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__17455__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__17456 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));var bs = cljs.core.nth.call(null,vec__17456,(0),null);var props = cljs.core.nth.call(null,vec__17456,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__17455,map__17455__$1,children,opts,vec__17456,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function (e){if(cljs.core.truth_(open_QMARK_))
{set_dropdown.call(null,false);
} else
{}
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null,e);
} else
{return null;
}
});})(open_QMARK_,map__17455,map__17455__$1,children,opts,vec__17456,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__17455,map__17455__$1,children,opts,vec__17456,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__17455,map__17455__$1,children,opts,vec__17456,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__17455,map__17455__$1,children,opts,vec__17456,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function (k){var temp__4126__auto___17460 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto___17460))
{var f_17461 = temp__4126__auto___17460;f_17461.call(null,k);
} else
{}
return set_dropdown.call(null,false);
});})(open_QMARK_,map__17455,map__17455__$1,children,opts,vec__17456,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
], null),children);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
;
om_bootstrap.button.t17452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function (_17454){var self__ = this;
var _17454__$1 = this;return self__.meta17453;
});})(state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
;
om_bootstrap.button.t17452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function (_17454,meta17453__$1){var self__ = this;
var _17454__$1 = this;return (new om_bootstrap.button.t17452(self__.map17440,self__.input_checker17444,self__.output_checker17445,self__.split_STAR_,self__.owner,self__.fnk17441,self__.p__17420,self__.owner17418,self__.output_schema17442,self__.state,self__.G__17446,self__.input_schema17443,self__.data__14169__auto__,self__.validate__11613__auto__,self__.vec__17439,self__.opts__14170__auto__,self__.ufv__,meta17453__$1));
});})(state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
;
om_bootstrap.button.__GT_t17452 = ((function (state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__){
return (function __GT_t17452(map17440__$1,input_checker17444__$1,output_checker17445__$1,split_STAR___$1,owner__$1,fnk17441__$1,p__17420__$1,owner17418__$1,output_schema17442__$1,state__$1,G__17446__$1,input_schema17443__$1,data__14169__auto____$1,validate__11613__auto____$1,vec__17439__$1,opts__14170__auto____$1,ufv____$1,meta17453){return (new om_bootstrap.button.t17452(map17440__$1,input_checker17444__$1,output_checker17445__$1,split_STAR___$1,owner__$1,fnk17441__$1,p__17420__$1,owner17418__$1,output_schema17442__$1,state__$1,G__17446__$1,input_schema17443__$1,data__14169__auto____$1,validate__11613__auto____$1,vec__17439__$1,opts__14170__auto____$1,ufv____$1,meta17453));
});})(state,owner,validate__11613__auto__,ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
;
}
return (new om_bootstrap.button.t17452(map17440,input_checker17444,output_checker17445,split_STAR_,owner,fnk17441,p__17420,owner17418,output_schema17442,state,G__17446,input_schema17443,data__14169__auto__,validate__11613__auto__,vec__17439,opts__14170__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17462 = output_checker17445.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17462))
{var error__11615__auto___17463 = temp__4126__auto___17462;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk17441","fnk17441",1741869896,null),cljs.core.pr_str.call(null,error__11615__auto___17463)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17442,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17463], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv__,output_schema17442,input_schema17443,input_checker17444,output_checker17445,vec__17439,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema17442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17443], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17418),new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17418,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var split_STAR_ = function (data__14169__auto__,owner17418,var_args){
var p__17420 = null;if (arguments.length > 2) {
  p__17420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return split_STAR___delegate.call(this,data__14169__auto__,owner17418,p__17420);};
split_STAR_.cljs$lang$maxFixedArity = 2;
split_STAR_.cljs$lang$applyTo = (function (arglist__17464){
var data__14169__auto__ = cljs.core.first(arglist__17464);
arglist__17464 = cljs.core.next(arglist__17464);
var owner17418 = cljs.core.first(arglist__17464);
var p__17420 = cljs.core.rest(arglist__17464);
return split_STAR___delegate(data__14169__auto__,owner17418,p__17420);
});
split_STAR_.cljs$core$IFn$_invoke$arity$variadic = split_STAR___delegate;
return split_STAR_;
})()
;
om_bootstrap.button.__GT_split_STAR_ = (function() {
var __GT_split_STAR_ = null;
var __GT_split_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__14138__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});
var __GT_split_STAR___2 = (function (cursor__14138__auto__,m17419){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__14138__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m17419));
});
__GT_split_STAR_ = function(cursor__14138__auto__,m17419){
switch(arguments.length){
case 1:
return __GT_split_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_split_STAR___2.call(this,cursor__14138__auto__,m17419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_split_STAR___1;
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_split_STAR___2;
return __GT_split_STAR_;
})()
;
var ufv___17471 = schema.utils.use_fn_validation;var output_schema17465_17472 = schema.core.Any;var input_schema17466_17473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17467_17474 = schema.core.checker.call(null,input_schema17466_17473);var output_checker17468_17475 = schema.core.checker.call(null,output_schema17465_17472);/**
* Inputs: [opts :- SplitButton & children]
* @param {...*} var_args
*/
om_bootstrap.button.split = ((function (ufv___17471,output_schema17465_17472,input_schema17466_17473,input_checker17467_17474,output_checker17468_17475){
return (function() { 
var split__delegate = function (G__17469,rest17470){var validate__11613__auto__ = ufv___17471.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17476 = cljs.core.list_STAR_.call(null,G__17469,rest17470);var temp__4126__auto___17477 = input_checker17467_17474.call(null,args__11614__auto___17476);if(cljs.core.truth_(temp__4126__auto___17477))
{var error__11615__auto___17478 = temp__4126__auto___17477;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__11615__auto___17478)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17466_17473,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17476,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17478], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17469;var children = rest17470;while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17479 = output_checker17468_17475.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17479))
{var error__11615__auto___17480 = temp__4126__auto___17479;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__11615__auto___17480)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17465_17472,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17480], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var split = function (G__17469,var_args){
var rest17470 = null;if (arguments.length > 1) {
  rest17470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return split__delegate.call(this,G__17469,rest17470);};
split.cljs$lang$maxFixedArity = 1;
split.cljs$lang$applyTo = (function (arglist__17481){
var G__17469 = cljs.core.first(arglist__17481);
var rest17470 = cljs.core.rest(arglist__17481);
return split__delegate(G__17469,rest17470);
});
split.cljs$core$IFn$_invoke$arity$variadic = split__delegate;
return split;
})()
;})(ufv___17471,output_schema17465_17472,input_schema17466_17473,input_checker17467_17474,output_checker17468_17475))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema17465_17472,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17466_17473], null)));

//# sourceMappingURL=button.js.map