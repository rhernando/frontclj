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
var ufv___14743 = schema.utils.use_fn_validation;var output_schema14737_14744 = schema.core.Any;var input_schema14738_14745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.Bool,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker14739_14746 = schema.core.checker.call(null,input_schema14738_14745);var output_checker14740_14747 = schema.core.checker.call(null,output_schema14737_14744);/**
* Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? s/Bool, :props {s/Any s/Any}} children]
*/
om_bootstrap.button.render_anchor = ((function (ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747){
return (function render_anchor(G__14741,G__14742){var validate__10325__auto__ = ufv___14743.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14741,G__14742], null);var temp__4126__auto___14749 = input_checker14739_14746.call(null,args__10326__auto___14748);if(cljs.core.truth_(temp__4126__auto___14749))
{var error__10327__auto___14750 = temp__4126__auto___14749;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__10327__auto___14750)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14738_14745,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14748,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14750], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__14741;var children = G__14742;while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14751 = output_checker14740_14747.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14751))
{var error__10327__auto___14752 = temp__4126__auto___14751;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__10327__auto___14752)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14737_14744,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14752], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema14737_14744,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14738_14745], null)));
var ufv___14761 = schema.utils.use_fn_validation;var output_schema14753_14762 = om_bootstrap.types.Component;var input_schema14754_14763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);var input_checker14755_14764 = schema.core.checker.call(null,input_schema14754_14763);var output_checker14756_14765 = schema.core.checker.call(null,output_schema14753_14762);/**
* Inputs: [props :- Button & children]
* Returns: t/Component
* 
* Renders a button.
* @param {...*} var_args
*/
om_bootstrap.button.button = ((function (ufv___14761,output_schema14753_14762,input_schema14754_14763,input_checker14755_14764,output_checker14756_14765){
return (function() { 
var button__delegate = function (G__14757,rest14758){var validate__10325__auto__ = ufv___14761.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14766 = cljs.core.list_STAR_.call(null,G__14757,rest14758);var temp__4126__auto___14767 = input_checker14755_14764.call(null,args__10326__auto___14766);if(cljs.core.truth_(temp__4126__auto___14767))
{var error__10327__auto___14768 = temp__4126__auto___14767;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__10327__auto___14768)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14754_14763,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14766,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14768], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var props = G__14757;var children = rest14758;while(true){
var vec__14760 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));var bs = cljs.core.nth.call(null,vec__14760,(0),null);var props__$1 = cljs.core.nth.call(null,vec__14760,(1),null);var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs)))
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
{var temp__4126__auto___14769 = output_checker14756_14765.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14769))
{var error__10327__auto___14770 = temp__4126__auto___14769;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__10327__auto___14770)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14753_14762,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14770], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var button = function (G__14757,var_args){
var rest14758 = null;if (arguments.length > 1) {
  rest14758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button__delegate.call(this,G__14757,rest14758);};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = (function (arglist__14771){
var G__14757 = cljs.core.first(arglist__14771);
var rest14758 = cljs.core.rest(arglist__14771);
return button__delegate(G__14757,rest14758);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;})(ufv___14761,output_schema14753_14762,input_schema14754_14763,input_checker14755_14764,output_checker14756_14765))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema14753_14762,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14754_14763], null)));
var ufv___14780 = schema.utils.use_fn_validation;var output_schema14772_14781 = om_bootstrap.types.Component;var input_schema14773_14782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14774_14783 = schema.core.checker.call(null,input_schema14773_14782);var output_checker14775_14784 = schema.core.checker.call(null,output_schema14772_14781);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Renders a button toolbar.
* @param {...*} var_args
*/
om_bootstrap.button.toolbar = ((function (ufv___14780,output_schema14772_14781,input_schema14773_14782,input_checker14774_14783,output_checker14775_14784){
return (function() { 
var toolbar__delegate = function (G__14776,rest14777){var validate__10325__auto__ = ufv___14780.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14785 = cljs.core.list_STAR_.call(null,G__14776,rest14777);var temp__4126__auto___14786 = input_checker14774_14783.call(null,args__10326__auto___14785);if(cljs.core.truth_(temp__4126__auto___14786))
{var error__10327__auto___14787 = temp__4126__auto___14786;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__10327__auto___14787)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14773_14782,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14785,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14787], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__14776;var children = rest14777;while(true){
var vec__14779 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));var bs = cljs.core.nth.call(null,vec__14779,(0),null);var props = cljs.core.nth.call(null,vec__14779,(1),null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14788 = output_checker14775_14784.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14788))
{var error__10327__auto___14789 = temp__4126__auto___14788;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__10327__auto___14789)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14772_14781,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14789], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var toolbar = function (G__14776,var_args){
var rest14777 = null;if (arguments.length > 1) {
  rest14777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return toolbar__delegate.call(this,G__14776,rest14777);};
toolbar.cljs$lang$maxFixedArity = 1;
toolbar.cljs$lang$applyTo = (function (arglist__14790){
var G__14776 = cljs.core.first(arglist__14790);
var rest14777 = cljs.core.rest(arglist__14790);
return toolbar__delegate(G__14776,rest14777);
});
toolbar.cljs$core$IFn$_invoke$arity$variadic = toolbar__delegate;
return toolbar;
})()
;})(ufv___14780,output_schema14772_14781,input_schema14773_14782,input_checker14774_14783,output_checker14775_14784))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema14772_14781,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14773_14782], null)));
var ufv___14799 = schema.utils.use_fn_validation;var output_schema14791_14800 = om_bootstrap.types.Component;var input_schema14792_14801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14793_14802 = schema.core.checker.call(null,input_schema14792_14801);var output_checker14794_14803 = schema.core.checker.call(null,output_schema14791_14800);/**
* Inputs: [opts :- ButtonGroup & children]
* Returns: t/Component
* 
* Renders the supplied children in a wrapping button-group div.
* @param {...*} var_args
*/
om_bootstrap.button.button_group = ((function (ufv___14799,output_schema14791_14800,input_schema14792_14801,input_checker14793_14802,output_checker14794_14803){
return (function() { 
var button_group__delegate = function (G__14795,rest14796){var validate__10325__auto__ = ufv___14799.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14804 = cljs.core.list_STAR_.call(null,G__14795,rest14796);var temp__4126__auto___14805 = input_checker14793_14802.call(null,args__10326__auto___14804);if(cljs.core.truth_(temp__4126__auto___14805))
{var error__10327__auto___14806 = temp__4126__auto___14805;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__10327__auto___14806)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14792_14801,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14804,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14806], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__14795;var children = rest14796;while(true){
var vec__14798 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));var bs = cljs.core.nth.call(null,vec__14798,(0),null);var props = cljs.core.nth.call(null,vec__14798,(1),null);var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14807 = output_checker14794_14803.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14807))
{var error__10327__auto___14808 = temp__4126__auto___14807;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__10327__auto___14808)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14791_14800,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14808], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var button_group = function (G__14795,var_args){
var rest14796 = null;if (arguments.length > 1) {
  rest14796 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button_group__delegate.call(this,G__14795,rest14796);};
button_group.cljs$lang$maxFixedArity = 1;
button_group.cljs$lang$applyTo = (function (arglist__14809){
var G__14795 = cljs.core.first(arglist__14809);
var rest14796 = cljs.core.rest(arglist__14809);
return button_group__delegate(G__14795,rest14796);
});
button_group.cljs$core$IFn$_invoke$arity$variadic = button_group__delegate;
return button_group;
})()
;})(ufv___14799,output_schema14791_14800,input_schema14792_14801,input_checker14793_14802,output_checker14794_14803))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema14791_14800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14792_14801], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function render_nav_item(props,open_QMARK_,children){var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function render_button_group(props,open_QMARK_,children){var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___14818 = schema.utils.use_fn_validation;var output_schema14810_14819 = om_bootstrap.types.Component;var input_schema14811_14820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14812_14821 = schema.core.checker.call(null,input_schema14811_14820);var output_checker14813_14822 = schema.core.checker.call(null,output_schema14810_14819);/**
* Inputs: [opts :- MenuItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.menu_item = ((function (ufv___14818,output_schema14810_14819,input_schema14811_14820,input_checker14812_14821,output_checker14813_14822){
return (function() { 
var menu_item__delegate = function (G__14814,rest14815){var validate__10325__auto__ = ufv___14818.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14823 = cljs.core.list_STAR_.call(null,G__14814,rest14815);var temp__4126__auto___14824 = input_checker14812_14821.call(null,args__10326__auto___14823);if(cljs.core.truth_(temp__4126__auto___14824))
{var error__10327__auto___14825 = temp__4126__auto___14824;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__10327__auto___14825)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14811_14820,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14823,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14825], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__14814;var children = rest14815;while(true){
var vec__14817 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__14817,(0),null);var props = cljs.core.nth.call(null,vec__14817,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (vec__14817,bs,props,classes,validate__10325__auto__,ufv___14818,output_schema14810_14819,input_schema14811_14820,input_checker14812_14821,output_checker14813_14822){
return (function (e){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var on_select = temp__4126__auto__;e.preventDefault();
return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return null;
}
});})(vec__14817,bs,props,classes,validate__10325__auto__,ufv___14818,output_schema14810_14819,input_schema14811_14820,input_checker14812_14821,output_checker14813_14822))
;var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));var li_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null);return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14826 = output_checker14813_14822.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14826))
{var error__10327__auto___14827 = temp__4126__auto___14826;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__10327__auto___14827)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14810_14819,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14827], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var menu_item = function (G__14814,var_args){
var rest14815 = null;if (arguments.length > 1) {
  rest14815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return menu_item__delegate.call(this,G__14814,rest14815);};
menu_item.cljs$lang$maxFixedArity = 1;
menu_item.cljs$lang$applyTo = (function (arglist__14828){
var G__14814 = cljs.core.first(arglist__14828);
var rest14815 = cljs.core.rest(arglist__14828);
return menu_item__delegate(G__14814,rest14815);
});
menu_item.cljs$core$IFn$_invoke$arity$variadic = menu_item__delegate;
return menu_item;
})()
;})(ufv___14818,output_schema14810_14819,input_schema14811_14820,input_checker14812_14821,output_checker14813_14822))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema14810_14819,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14811_14820], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___14838 = schema.utils.use_fn_validation;var output_schema14830_14839 = om_bootstrap.types.Component;var input_schema14831_14840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14832_14841 = schema.core.checker.call(null,input_schema14831_14840);var output_checker14833_14842 = schema.core.checker.call(null,output_schema14830_14839);/**
* Inputs: [opts :- DropdownMenu & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_menu = ((function (ufv___14838,output_schema14830_14839,input_schema14831_14840,input_checker14832_14841,output_checker14833_14842){
return (function() { 
var dropdown_menu__delegate = function (G__14834,rest14835){var validate__10325__auto__ = ufv___14838.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14843 = cljs.core.list_STAR_.call(null,G__14834,rest14835);var temp__4126__auto___14844 = input_checker14832_14841.call(null,args__10326__auto___14843);if(cljs.core.truth_(temp__4126__auto___14844))
{var error__10327__auto___14845 = temp__4126__auto___14844;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__10327__auto___14845)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14831_14840,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14843,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14845], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__14834;var children = rest14835;while(true){
var vec__14837 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);var bs = cljs.core.nth.call(null,vec__14837,(0),null);var props = cljs.core.nth.call(null,vec__14837,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4124__auto__))
{var on_select = temp__4124__auto__;return cljs.core.map.call(null,((function (on_select,temp__4124__auto__,vec__14837,bs,props,classes,ul_attrs,validate__10325__auto__,ufv___14838,output_schema14830_14839,input_schema14831_14840,input_checker14832_14841,output_checker14833_14842){
return (function (p1__14829_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__14829_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4124__auto__,vec__14837,bs,props,classes,ul_attrs,validate__10325__auto__,ufv___14838,output_schema14830_14839,input_schema14831_14840,input_checker14832_14841,output_checker14833_14842))
,children);
} else
{return children;
}
})()],null)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14846 = output_checker14833_14842.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14846))
{var error__10327__auto___14847 = temp__4126__auto___14846;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__10327__auto___14847)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14830_14839,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14847], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var dropdown_menu = function (G__14834,var_args){
var rest14835 = null;if (arguments.length > 1) {
  rest14835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown_menu__delegate.call(this,G__14834,rest14835);};
dropdown_menu.cljs$lang$maxFixedArity = 1;
dropdown_menu.cljs$lang$applyTo = (function (arglist__14848){
var G__14834 = cljs.core.first(arglist__14848);
var rest14835 = cljs.core.rest(arglist__14848);
return dropdown_menu__delegate(G__14834,rest14835);
});
dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = dropdown_menu__delegate;
return dropdown_menu;
})()
;})(ufv___14838,output_schema14830_14839,input_schema14831_14840,input_checker14832_14841,output_checker14833_14842))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema14830_14839,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14831_14840], null)));
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
var dropdown_STAR___delegate = function (data__14169__auto__,owner14850,p__14852){var vec__14871 = p__14852;var opts__14170__auto__ = cljs.core.nth.call(null,vec__14871,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema14874 = schema.core.Any;var input_schema14875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map14872","map14872",-738832667,null))], null);var input_checker14876 = schema.core.checker.call(null,input_schema14875);var output_checker14877 = schema.core.checker.call(null,output_schema14874);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function fnk14873(G__14878){var validate__10325__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14878], null);var temp__4126__auto___14890 = input_checker14876.call(null,args__10326__auto___14889);if(cljs.core.truth_(temp__4126__auto___14890))
{var error__10327__auto___14891 = temp__4126__auto___14890;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14873","fnk14873",-1012600395,null),cljs.core.pr_str.call(null,error__10327__auto___14891)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14875,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14889,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14891], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var map14872 = G__14878;while(true){
if(cljs.core.map_QMARK_.call(null,map14872))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map14872)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map14872,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map14872,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t14884 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t14884 = (function (owner,map14872,validate__10325__auto__,owner14850,vec__14871,p__14852,G__14878,input_checker14876,state,fnk14873,data__14169__auto__,dropdown_STAR_,output_checker14877,output_schema14874,input_schema14875,opts__14170__auto__,ufv__,meta14885){
this.owner = owner;
this.map14872 = map14872;
this.validate__10325__auto__ = validate__10325__auto__;
this.owner14850 = owner14850;
this.vec__14871 = vec__14871;
this.p__14852 = p__14852;
this.G__14878 = G__14878;
this.input_checker14876 = input_checker14876;
this.state = state;
this.fnk14873 = fnk14873;
this.data__14169__auto__ = data__14169__auto__;
this.dropdown_STAR_ = dropdown_STAR_;
this.output_checker14877 = output_checker14877;
this.output_schema14874 = output_schema14874;
this.input_schema14875 = input_schema14875;
this.opts__14170__auto__ = opts__14170__auto__;
this.ufv__ = ufv__;
this.meta14885 = meta14885;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t14884.cljs$lang$type = true;
om_bootstrap.button.t14884.cljs$lang$ctorStr = "om-bootstrap.button/t14884";
om_bootstrap.button.t14884.cljs$lang$ctorPrWriter = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.button/t14884");
});})(state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
;
om_bootstrap.button.t14884.prototype.om$core$IRender$ = true;
om_bootstrap.button.t14884.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__14887 = om.core.get_props.call(null,self__.owner);var map__14887__$1 = ((cljs.core.seq_QMARK_.call(null,map__14887))?cljs.core.apply.call(null,cljs.core.hash_map,map__14887):map__14887);var children = cljs.core.get.call(null,map__14887__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__14887__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__14888 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__14888,(0),null);var props = cljs.core.nth.call(null,vec__14888,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__14887,map__14887__$1,children,opts,vec__14888,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__14887,map__14887__$1,children,opts,vec__14888,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
], null);var update_child_props = ((function (open_QMARK_,map__14887,map__14887__$1,children,opts,vec__14888,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function (props__$1){var handle = (cljs.core.truth_((function (){var or__3556__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__14887,map__14887__$1,children,opts,vec__14888,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function (key){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4124__auto__))
{var os = temp__4124__auto__;return os.call(null,key);
} else
{return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__14887,map__14887__$1,children,opts,vec__14888,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
:null);return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__14887,map__14887__$1,children,opts,vec__14888,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
;return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__14887,map__14887__$1,children,opts,vec__14888,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function (p1__14849_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__14849_SHARP_,update_child_props);
});})(open_QMARK_,map__14887,map__14887__$1,children,opts,vec__14888,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
,children))], null));
});})(state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
;
om_bootstrap.button.t14884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function (_14886){var self__ = this;
var _14886__$1 = this;return self__.meta14885;
});})(state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
;
om_bootstrap.button.t14884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function (_14886,meta14885__$1){var self__ = this;
var _14886__$1 = this;return (new om_bootstrap.button.t14884(self__.owner,self__.map14872,self__.validate__10325__auto__,self__.owner14850,self__.vec__14871,self__.p__14852,self__.G__14878,self__.input_checker14876,self__.state,self__.fnk14873,self__.data__14169__auto__,self__.dropdown_STAR_,self__.output_checker14877,self__.output_schema14874,self__.input_schema14875,self__.opts__14170__auto__,self__.ufv__,meta14885__$1));
});})(state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
;
om_bootstrap.button.__GT_t14884 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__){
return (function __GT_t14884(owner__$1,map14872__$1,validate__10325__auto____$1,owner14850__$1,vec__14871__$1,p__14852__$1,G__14878__$1,input_checker14876__$1,state__$1,fnk14873__$1,data__14169__auto____$1,dropdown_STAR___$1,output_checker14877__$1,output_schema14874__$1,input_schema14875__$1,opts__14170__auto____$1,ufv____$1,meta14885){return (new om_bootstrap.button.t14884(owner__$1,map14872__$1,validate__10325__auto____$1,owner14850__$1,vec__14871__$1,p__14852__$1,G__14878__$1,input_checker14876__$1,state__$1,fnk14873__$1,data__14169__auto____$1,dropdown_STAR___$1,output_checker14877__$1,output_schema14874__$1,input_schema14875__$1,opts__14170__auto____$1,ufv____$1,meta14885));
});})(state,owner,validate__10325__auto__,ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
;
}
return (new om_bootstrap.button.t14884(owner,map14872,validate__10325__auto__,owner14850,vec__14871,p__14852,G__14878,input_checker14876,state,fnk14873,data__14169__auto__,dropdown_STAR_,output_checker14877,output_schema14874,input_schema14875,opts__14170__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14892 = output_checker14877.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14892))
{var error__10327__auto___14893 = temp__4126__auto___14892;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14873","fnk14873",-1012600395,null),cljs.core.pr_str.call(null,error__10327__auto___14893)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14874,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14893], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv__,output_schema14874,input_schema14875,input_checker14876,output_checker14877,vec__14871,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema14874,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14875], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner14850),new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner14850,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var dropdown_STAR_ = function (data__14169__auto__,owner14850,var_args){
var p__14852 = null;if (arguments.length > 2) {
  p__14852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return dropdown_STAR___delegate.call(this,data__14169__auto__,owner14850,p__14852);};
dropdown_STAR_.cljs$lang$maxFixedArity = 2;
dropdown_STAR_.cljs$lang$applyTo = (function (arglist__14894){
var data__14169__auto__ = cljs.core.first(arglist__14894);
arglist__14894 = cljs.core.next(arglist__14894);
var owner14850 = cljs.core.first(arglist__14894);
var p__14852 = cljs.core.rest(arglist__14894);
return dropdown_STAR___delegate(data__14169__auto__,owner14850,p__14852);
});
dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = dropdown_STAR___delegate;
return dropdown_STAR_;
})()
;
om_bootstrap.button.__GT_dropdown_STAR_ = (function() {
var __GT_dropdown_STAR_ = null;
var __GT_dropdown_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__14138__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});
var __GT_dropdown_STAR___2 = (function (cursor__14138__auto__,m14851){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__14138__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m14851));
});
__GT_dropdown_STAR_ = function(cursor__14138__auto__,m14851){
switch(arguments.length){
case 1:
return __GT_dropdown_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_dropdown_STAR___2.call(this,cursor__14138__auto__,m14851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_dropdown_STAR___1;
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_dropdown_STAR___2;
return __GT_dropdown_STAR_;
})()
;
var ufv___14901 = schema.utils.use_fn_validation;var output_schema14895_14902 = om_bootstrap.types.Component;var input_schema14896_14903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14897_14904 = schema.core.checker.call(null,input_schema14896_14903);var output_checker14898_14905 = schema.core.checker.call(null,output_schema14895_14902);/**
* Inputs: [opts :- DropdownButton & children]
* Returns: t/Component
* 
* Returns a dropdown button component. The component manages its own
* dropdown state.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown = ((function (ufv___14901,output_schema14895_14902,input_schema14896_14903,input_checker14897_14904,output_checker14898_14905){
return (function() { 
var dropdown__delegate = function (G__14899,rest14900){var validate__10325__auto__ = ufv___14901.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14906 = cljs.core.list_STAR_.call(null,G__14899,rest14900);var temp__4126__auto___14907 = input_checker14897_14904.call(null,args__10326__auto___14906);if(cljs.core.truth_(temp__4126__auto___14907))
{var error__10327__auto___14908 = temp__4126__auto___14907;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__10327__auto___14908)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14896_14903,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14906,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14908], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__14899;var children = rest14900;while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14909 = output_checker14898_14905.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14909))
{var error__10327__auto___14910 = temp__4126__auto___14909;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__10327__auto___14910)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14895_14902,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14910], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var dropdown = function (G__14899,var_args){
var rest14900 = null;if (arguments.length > 1) {
  rest14900 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown__delegate.call(this,G__14899,rest14900);};
dropdown.cljs$lang$maxFixedArity = 1;
dropdown.cljs$lang$applyTo = (function (arglist__14911){
var G__14899 = cljs.core.first(arglist__14911);
var rest14900 = cljs.core.rest(arglist__14911);
return dropdown__delegate(G__14899,rest14900);
});
dropdown.cljs$core$IFn$_invoke$arity$variadic = dropdown__delegate;
return dropdown;
})()
;})(ufv___14901,output_schema14895_14902,input_schema14896_14903,input_checker14897_14904,output_checker14898_14905))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema14895_14902,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14896_14903], null)));
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
var split_STAR___delegate = function (data__14169__auto__,owner14912,p__14914){var vec__14933 = p__14914;var opts__14170__auto__ = cljs.core.nth.call(null,vec__14933,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema14936 = schema.core.Any;var input_schema14937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map14934","map14934",104397546,null))], null);var input_checker14938 = schema.core.checker.call(null,input_schema14937);var output_checker14939 = schema.core.checker.call(null,output_schema14936);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function fnk14935(G__14940){var validate__10325__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14940], null);var temp__4126__auto___14952 = input_checker14938.call(null,args__10326__auto___14951);if(cljs.core.truth_(temp__4126__auto___14952))
{var error__10327__auto___14953 = temp__4126__auto___14952;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14935","fnk14935",-1255797448,null),cljs.core.pr_str.call(null,error__10327__auto___14953)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14937,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14951,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14953], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var map14934 = G__14940;while(true){
if(cljs.core.map_QMARK_.call(null,map14934))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map14934)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map14934,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map14934,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t14946 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t14946 = (function (split_STAR_,p__14914,owner,validate__10325__auto__,map14934,owner14912,G__14940,input_schema14937,vec__14933,output_schema14936,input_checker14938,output_checker14939,state,data__14169__auto__,fnk14935,opts__14170__auto__,ufv__,meta14947){
this.split_STAR_ = split_STAR_;
this.p__14914 = p__14914;
this.owner = owner;
this.validate__10325__auto__ = validate__10325__auto__;
this.map14934 = map14934;
this.owner14912 = owner14912;
this.G__14940 = G__14940;
this.input_schema14937 = input_schema14937;
this.vec__14933 = vec__14933;
this.output_schema14936 = output_schema14936;
this.input_checker14938 = input_checker14938;
this.output_checker14939 = output_checker14939;
this.state = state;
this.data__14169__auto__ = data__14169__auto__;
this.fnk14935 = fnk14935;
this.opts__14170__auto__ = opts__14170__auto__;
this.ufv__ = ufv__;
this.meta14947 = meta14947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t14946.cljs$lang$type = true;
om_bootstrap.button.t14946.cljs$lang$ctorStr = "om-bootstrap.button/t14946";
om_bootstrap.button.t14946.cljs$lang$ctorPrWriter = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"om-bootstrap.button/t14946");
});})(state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
;
om_bootstrap.button.t14946.prototype.om$core$IRender$ = true;
om_bootstrap.button.t14946.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__14949 = om.core.get_props.call(null,self__.owner);var map__14949__$1 = ((cljs.core.seq_QMARK_.call(null,map__14949))?cljs.core.apply.call(null,cljs.core.hash_map,map__14949):map__14949);var children = cljs.core.get.call(null,map__14949__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__14949__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__14950 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));var bs = cljs.core.nth.call(null,vec__14950,(0),null);var props = cljs.core.nth.call(null,vec__14950,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__14949,map__14949__$1,children,opts,vec__14950,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function (e){if(cljs.core.truth_(open_QMARK_))
{set_dropdown.call(null,false);
} else
{}
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null,e);
} else
{return null;
}
});})(open_QMARK_,map__14949,map__14949__$1,children,opts,vec__14950,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__14949,map__14949__$1,children,opts,vec__14950,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__14949,map__14949__$1,children,opts,vec__14950,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__14949,map__14949__$1,children,opts,vec__14950,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function (k){var temp__4126__auto___14954 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto___14954))
{var f_14955 = temp__4126__auto___14954;f_14955.call(null,k);
} else
{}
return set_dropdown.call(null,false);
});})(open_QMARK_,map__14949,map__14949__$1,children,opts,vec__14950,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
], null),children);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
;
om_bootstrap.button.t14946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function (_14948){var self__ = this;
var _14948__$1 = this;return self__.meta14947;
});})(state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
;
om_bootstrap.button.t14946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function (_14948,meta14947__$1){var self__ = this;
var _14948__$1 = this;return (new om_bootstrap.button.t14946(self__.split_STAR_,self__.p__14914,self__.owner,self__.validate__10325__auto__,self__.map14934,self__.owner14912,self__.G__14940,self__.input_schema14937,self__.vec__14933,self__.output_schema14936,self__.input_checker14938,self__.output_checker14939,self__.state,self__.data__14169__auto__,self__.fnk14935,self__.opts__14170__auto__,self__.ufv__,meta14947__$1));
});})(state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
;
om_bootstrap.button.__GT_t14946 = ((function (state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__){
return (function __GT_t14946(split_STAR___$1,p__14914__$1,owner__$1,validate__10325__auto____$1,map14934__$1,owner14912__$1,G__14940__$1,input_schema14937__$1,vec__14933__$1,output_schema14936__$1,input_checker14938__$1,output_checker14939__$1,state__$1,data__14169__auto____$1,fnk14935__$1,opts__14170__auto____$1,ufv____$1,meta14947){return (new om_bootstrap.button.t14946(split_STAR___$1,p__14914__$1,owner__$1,validate__10325__auto____$1,map14934__$1,owner14912__$1,G__14940__$1,input_schema14937__$1,vec__14933__$1,output_schema14936__$1,input_checker14938__$1,output_checker14939__$1,state__$1,data__14169__auto____$1,fnk14935__$1,opts__14170__auto____$1,ufv____$1,meta14947));
});})(state,owner,validate__10325__auto__,ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
;
}
return (new om_bootstrap.button.t14946(split_STAR_,p__14914,owner,validate__10325__auto__,map14934,owner14912,G__14940,input_schema14937,vec__14933,output_schema14936,input_checker14938,output_checker14939,state,data__14169__auto__,fnk14935,opts__14170__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14956 = output_checker14939.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14956))
{var error__10327__auto___14957 = temp__4126__auto___14956;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14935","fnk14935",-1255797448,null),cljs.core.pr_str.call(null,error__10327__auto___14957)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14936,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14957], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv__,output_schema14936,input_schema14937,input_checker14938,output_checker14939,vec__14933,opts__14170__auto__))
,schema.core.make_fn_schema.call(null,output_schema14936,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14937], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner14912),new cljs.core.Keyword(null,"opts","opts",155075701),opts__14170__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner14912,new cljs.core.Keyword(null,"data","data",-232669377),data__14169__auto__], null));
};
var split_STAR_ = function (data__14169__auto__,owner14912,var_args){
var p__14914 = null;if (arguments.length > 2) {
  p__14914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return split_STAR___delegate.call(this,data__14169__auto__,owner14912,p__14914);};
split_STAR_.cljs$lang$maxFixedArity = 2;
split_STAR_.cljs$lang$applyTo = (function (arglist__14958){
var data__14169__auto__ = cljs.core.first(arglist__14958);
arglist__14958 = cljs.core.next(arglist__14958);
var owner14912 = cljs.core.first(arglist__14958);
var p__14914 = cljs.core.rest(arglist__14958);
return split_STAR___delegate(data__14169__auto__,owner14912,p__14914);
});
split_STAR_.cljs$core$IFn$_invoke$arity$variadic = split_STAR___delegate;
return split_STAR_;
})()
;
om_bootstrap.button.__GT_split_STAR_ = (function() {
var __GT_split_STAR_ = null;
var __GT_split_STAR___1 = (function (cursor__14138__auto__){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__14138__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});
var __GT_split_STAR___2 = (function (cursor__14138__auto__,m14913){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__14138__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m14913));
});
__GT_split_STAR_ = function(cursor__14138__auto__,m14913){
switch(arguments.length){
case 1:
return __GT_split_STAR___1.call(this,cursor__14138__auto__);
case 2:
return __GT_split_STAR___2.call(this,cursor__14138__auto__,m14913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_split_STAR___1;
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_split_STAR___2;
return __GT_split_STAR_;
})()
;
var ufv___14965 = schema.utils.use_fn_validation;var output_schema14959_14966 = schema.core.Any;var input_schema14960_14967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14961_14968 = schema.core.checker.call(null,input_schema14960_14967);var output_checker14962_14969 = schema.core.checker.call(null,output_schema14959_14966);/**
* Inputs: [opts :- SplitButton & children]
* @param {...*} var_args
*/
om_bootstrap.button.split = ((function (ufv___14965,output_schema14959_14966,input_schema14960_14967,input_checker14961_14968,output_checker14962_14969){
return (function() { 
var split__delegate = function (G__14963,rest14964){var validate__10325__auto__ = ufv___14965.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14970 = cljs.core.list_STAR_.call(null,G__14963,rest14964);var temp__4126__auto___14971 = input_checker14961_14968.call(null,args__10326__auto___14970);if(cljs.core.truth_(temp__4126__auto___14971))
{var error__10327__auto___14972 = temp__4126__auto___14971;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__10327__auto___14972)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14960_14967,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14970,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14972], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__14963;var children = rest14964;while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14973 = output_checker14962_14969.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14973))
{var error__10327__auto___14974 = temp__4126__auto___14973;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__10327__auto___14974)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14959_14966,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14974], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var split = function (G__14963,var_args){
var rest14964 = null;if (arguments.length > 1) {
  rest14964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return split__delegate.call(this,G__14963,rest14964);};
split.cljs$lang$maxFixedArity = 1;
split.cljs$lang$applyTo = (function (arglist__14975){
var G__14963 = cljs.core.first(arglist__14975);
var rest14964 = cljs.core.rest(arglist__14975);
return split__delegate(G__14963,rest14964);
});
split.cljs$core$IFn$_invoke$arity$variadic = split__delegate;
return split;
})()
;})(ufv___14965,output_schema14959_14966,input_schema14960_14967,input_checker14961_14968,output_checker14962_14969))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema14959_14966,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14960_14967], null)));

//# sourceMappingURL=button.js.map