// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.input');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
goog.require('clojure.string');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.input.Addons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-after","addon-after",634985306)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component)], true, false);
/**
* Helps render feedback icons.
*/
om_bootstrap.input.FeedbackIcons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),schema.core.enum$.call(null,"success","warning","error"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821)),schema.core.Bool], true, false);
/**
* Input fields that match these bad dawgs:
* https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Input.jsx
*/
om_bootstrap.input.Input = cljs.core.merge.call(null,om_bootstrap.input.Addons,om_bootstrap.input.FeedbackIcons,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261)),schema.core.named.call(null,schema.core.Bool,"DON'T render a wrapping form group?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"help","help",-439233446)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212)),schema.core.Str], true, false));
om_bootstrap.input.Radio = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)),schema.core.Bool], true, false));
var ufv___17528 = schema.utils.use_fn_validation;var output_schema17519_17529 = schema.core.Str;var input_schema17520_17530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker17521_17531 = schema.core.checker.call(null,input_schema17520_17530);var output_checker17522_17532 = schema.core.checker.call(null,output_schema17519_17529);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___17528,output_schema17519_17529,input_schema17520_17530,input_checker17521_17531,output_checker17522_17532){
return (function class_set(G__17523){var validate__11613__auto__ = ufv___17528.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17523], null);var temp__4126__auto___17534 = input_checker17521_17531.call(null,args__11614__auto___17533);if(cljs.core.truth_(temp__4126__auto___17534))
{var error__11615__auto___17535 = temp__4126__auto___17534;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__11615__auto___17535)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17520_17530,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17533,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17535], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var klasses = G__17523;while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__11613__auto__,ufv___17528,output_schema17519_17529,input_schema17520_17530,input_checker17521_17531,output_checker17522_17532){
return (function (p__17526){var vec__17527 = p__17526;var k = cljs.core.nth.call(null,vec__17527,(0),null);var keep_QMARK_ = cljs.core.nth.call(null,vec__17527,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else
{return null;
}
});})(validate__11613__auto__,ufv___17528,output_schema17519_17529,input_schema17520_17530,input_checker17521_17531,output_checker17522_17532))
,klasses));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17536 = output_checker17522_17532.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17536))
{var error__11615__auto___17537 = temp__4126__auto___17536;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__11615__auto___17537)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17519_17529,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17537], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17528,output_schema17519_17529,input_schema17520_17530,input_checker17521_17531,output_checker17522_17532))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema17519_17529,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17520_17530], null)));
var ufv___17543 = schema.utils.use_fn_validation;var output_schema17538_17544 = om_bootstrap.types.Component;var input_schema17539_17545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker17540_17546 = schema.core.checker.call(null,input_schema17539_17545);var output_checker17541_17547 = schema.core.checker.call(null,output_schema17538_17544);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___17543,output_schema17538_17544,input_schema17539_17545,input_checker17540_17546,output_checker17541_17547){
return (function glyph(G__17542){var validate__11613__auto__ = ufv___17543.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17542], null);var temp__4126__auto___17549 = input_checker17540_17546.call(null,args__11614__auto___17548);if(cljs.core.truth_(temp__4126__auto___17549))
{var error__11615__auto___17550 = temp__4126__auto___17549;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__11615__auto___17550)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17539_17545,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17548,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17550], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var glyph_name = G__17542;while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))});
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17551 = output_checker17541_17547.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17551))
{var error__11615__auto___17552 = temp__4126__auto___17551;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__11615__auto___17552)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17538_17544,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17552], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17543,output_schema17538_17544,input_schema17539_17545,input_checker17540_17546,output_checker17541_17547))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema17538_17544,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17539_17545], null)));
var ufv___17566 = schema.utils.use_fn_validation;var output_schema17553_17567 = om_bootstrap.types.Component;var input_schema17554_17568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker17555_17569 = schema.core.checker.call(null,input_schema17554_17568);var output_checker17556_17570 = schema.core.checker.call(null,output_schema17553_17567);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___17566,output_schema17553_17567,input_schema17554_17568,input_checker17555_17569,output_checker17556_17570){
return (function render_icon(G__17557){var validate__11613__auto__ = ufv___17566.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17557], null);var temp__4126__auto___17572 = input_checker17555_17569.call(null,args__11614__auto___17571);if(cljs.core.truth_(temp__4126__auto___17572))
{var error__11615__auto___17573 = temp__4126__auto___17572;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__11615__auto___17573)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17554_17568,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17571,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17573], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__17563 = G__17557;var map__17564 = G__17563;var map__17564__$1 = ((cljs.core.seq_QMARK_.call(null,map__17564))?cljs.core.apply.call(null,cljs.core.hash_map,map__17564):map__17564);var bs_style = cljs.core.get.call(null,map__17564__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.call(null,map__17564__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__17563__$1 = G__17563;while(true){
var map__17565 = G__17563__$1;var map__17565__$1 = ((cljs.core.seq_QMARK_.call(null,map__17565))?cljs.core.apply.call(null,cljs.core.hash_map,map__17565):map__17565);var bs_style__$1 = cljs.core.get.call(null,map__17565__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.call(null,map__17565__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17574 = output_checker17556_17570.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17574))
{var error__11615__auto___17575 = temp__4126__auto___17574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__11615__auto___17575)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17553_17567,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17575], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17566,output_schema17553_17567,input_schema17554_17568,input_checker17555_17569,output_checker17556_17570))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema17553_17567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17554_17568], null)));
var ufv___17581 = schema.utils.use_fn_validation;var output_schema17576_17582 = schema.core.Any;var input_schema17577_17583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker17578_17584 = schema.core.checker.call(null,input_schema17577_17583);var output_checker17579_17585 = schema.core.checker.call(null,output_schema17576_17582);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___17581,output_schema17576_17582,input_schema17577_17583,input_checker17578_17584,output_checker17579_17585){
return (function render_help(G__17580){var validate__11613__auto__ = ufv___17581.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17580], null);var temp__4126__auto___17587 = input_checker17578_17584.call(null,args__11614__auto___17586);if(cljs.core.truth_(temp__4126__auto___17587))
{var error__11615__auto___17588 = temp__4126__auto___17587;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__11615__auto___17588)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17577_17583,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17586,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17588], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var help = G__17580;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17589 = output_checker17579_17585.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17589))
{var error__11615__auto___17590 = temp__4126__auto___17589;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__11615__auto___17590)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17576_17582,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17590], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17581,output_schema17576_17582,input_schema17577_17583,input_checker17578_17584,output_checker17579_17585))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema17576_17582,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17577_17583], null)));
var ufv___17605 = schema.utils.use_fn_validation;var output_schema17591_17606 = schema.core.Any;var input_schema17592_17607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker17593_17608 = schema.core.checker.call(null,input_schema17592_17607);var output_checker17594_17609 = schema.core.checker.call(null,output_schema17591_17606);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___17605,output_schema17591_17606,input_schema17592_17607,input_checker17593_17608,output_checker17594_17609){
return (function render_input_group(G__17595,G__17596){var validate__11613__auto__ = ufv___17605.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17595,G__17596], null);var temp__4126__auto___17611 = input_checker17593_17608.call(null,args__11614__auto___17610);if(cljs.core.truth_(temp__4126__auto___17611))
{var error__11615__auto___17612 = temp__4126__auto___17611;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__11615__auto___17612)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17592_17607,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17610,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17612], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__17602 = G__17595;var map__17603 = G__17602;var map__17603__$1 = ((cljs.core.seq_QMARK_.call(null,map__17603))?cljs.core.apply.call(null,cljs.core.hash_map,map__17603):map__17603);var addon_after = cljs.core.get.call(null,map__17603__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.call(null,map__17603__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__17596;var G__17602__$1 = G__17602;var items__$1 = items;while(true){
var map__17604 = G__17602__$1;var map__17604__$1 = ((cljs.core.seq_QMARK_.call(null,map__17604))?cljs.core.apply.call(null,cljs.core.hash_map,map__17604):map__17604);var addon_after__$1 = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__3556__auto__ = addon_before__$1;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return addon_after__$1;
}
})()))
{return cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(addon_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_before__$1],null)))):null),items__$2,(cljs.core.truth_(addon_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_after__$1],null)))):null)],null))));
} else
{return items__$2;
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17613 = output_checker17594_17609.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17613))
{var error__11615__auto___17614 = temp__4126__auto___17613;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__11615__auto___17614)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17591_17606,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17614], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17605,output_schema17591_17606,input_schema17592_17607,input_checker17593_17608,output_checker17594_17609))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema17591_17606,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17592_17607], null)));
var ufv___17628 = schema.utils.use_fn_validation;var output_schema17615_17629 = schema.core.Bool;var input_schema17616_17630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker17617_17631 = schema.core.checker.call(null,input_schema17616_17630);var output_checker17618_17632 = schema.core.checker.call(null,output_schema17615_17629);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___17628,output_schema17615_17629,input_schema17616_17630,input_checker17617_17631,output_checker17618_17632){
return (function checkbox_or_radio_QMARK_(G__17619){var validate__11613__auto__ = ufv___17628.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17619], null);var temp__4126__auto___17634 = input_checker17617_17631.call(null,args__11614__auto___17633);if(cljs.core.truth_(temp__4126__auto___17634))
{var error__11615__auto___17635 = temp__4126__auto___17634;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__11615__auto___17635)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17616_17630,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17633,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17635], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__17625 = G__17619;var map__17626 = G__17625;var map__17626__$1 = ((cljs.core.seq_QMARK_.call(null,map__17626))?cljs.core.apply.call(null,cljs.core.hash_map,map__17626):map__17626);var type = cljs.core.get.call(null,map__17626__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__17625__$1 = G__17625;while(true){
var map__17627 = G__17625__$1;var map__17627__$1 = ((cljs.core.seq_QMARK_.call(null,map__17627))?cljs.core.apply.call(null,cljs.core.hash_map,map__17627):map__17627);var type__$1 = cljs.core.get.call(null,map__17627__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17636 = output_checker17618_17632.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17636))
{var error__11615__auto___17637 = temp__4126__auto___17636;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__11615__auto___17637)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17615_17629,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17637], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17628,output_schema17615_17629,input_schema17616_17630,input_checker17617_17631,output_checker17618_17632))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema17615_17629,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17616_17630], null)));
var ufv___17652 = schema.utils.use_fn_validation;var output_schema17638_17653 = om_bootstrap.types.Component;var input_schema17639_17654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker17640_17655 = schema.core.checker.call(null,input_schema17639_17654);var output_checker17641_17656 = schema.core.checker.call(null,output_schema17638_17653);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___17652,output_schema17638_17653,input_schema17639_17654,input_checker17640_17655,output_checker17641_17656){
return (function checkbox_or_radio_wrapper(G__17642,G__17643){var validate__11613__auto__ = ufv___17652.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17642,G__17643], null);var temp__4126__auto___17658 = input_checker17640_17655.call(null,args__11614__auto___17657);if(cljs.core.truth_(temp__4126__auto___17658))
{var error__11615__auto___17659 = temp__4126__auto___17658;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__11615__auto___17659)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17639_17654,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17657,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17659], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__17649 = G__17642;var map__17650 = G__17649;var map__17650__$1 = ((cljs.core.seq_QMARK_.call(null,map__17650))?cljs.core.apply.call(null,cljs.core.hash_map,map__17650):map__17650);var type = cljs.core.get.call(null,map__17650__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__17643;var G__17649__$1 = G__17649;var children__$1 = children;while(true){
var map__17651 = G__17649__$1;var map__17651__$1 = ((cljs.core.seq_QMARK_.call(null,map__17651))?cljs.core.apply.call(null,cljs.core.hash_map,map__17651):map__17651);var type__$1 = cljs.core.get.call(null,map__17651__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17660 = output_checker17641_17656.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17660))
{var error__11615__auto___17661 = temp__4126__auto___17660;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__11615__auto___17661)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17638_17653,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17661], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17652,output_schema17638_17653,input_schema17639_17654,input_checker17640_17655,output_checker17641_17656))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema17638_17653,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17639_17654], null)));
var ufv___17680 = schema.utils.use_fn_validation;var output_schema17662_17681 = schema.core.Any;var input_schema17663_17682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema17667_17683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker17664_17684 = schema.core.checker.call(null,input_schema17663_17682);var output_checker17665_17685 = schema.core.checker.call(null,output_schema17662_17681);var input_checker17668_17686 = schema.core.checker.call(null,input_schema17667_17683);var output_checker17669_17687 = schema.core.checker.call(null,output_schema17662_17681);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___17680,output_schema17662_17681,input_schema17663_17682,input_schema17667_17683,input_checker17664_17684,output_checker17665_17685,input_checker17668_17686,output_checker17669_17687){
return (function() {
var render_label = null;
var render_label__1 = (function (G__17666){var validate__11613__auto__ = ufv___17680.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17666], null);var temp__4126__auto___17689 = input_checker17664_17684.call(null,args__11614__auto___17688);if(cljs.core.truth_(temp__4126__auto___17689))
{var error__11615__auto___17690 = temp__4126__auto___17689;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11615__auto___17690)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17663_17682,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17688,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17690], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var input = G__17666;while(true){
return render_label.call(null,input,null);
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17691 = output_checker17665_17685.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17691))
{var error__11615__auto___17692 = temp__4126__auto___17691;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11615__auto___17692)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17662_17681,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17692], null));
} else
{}
} else
{}
return o__11616__auto__;
});
var render_label__2 = (function (G__17670,G__17671){var validate__11613__auto__ = ufv___17680.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17670,G__17671], null);var temp__4126__auto___17694 = input_checker17668_17686.call(null,args__11614__auto___17693);if(cljs.core.truth_(temp__4126__auto___17694))
{var error__11615__auto___17695 = temp__4126__auto___17694;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11615__auto___17695)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17667_17683,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17693,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17695], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__17677 = G__17670;var map__17678 = G__17677;var map__17678__$1 = ((cljs.core.seq_QMARK_.call(null,map__17678))?cljs.core.apply.call(null,cljs.core.hash_map,map__17678):map__17678);var input = map__17678__$1;var lc = cljs.core.get.call(null,map__17678__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.call(null,map__17678__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__17671;var G__17677__$1 = G__17677;var child__$1 = child;while(true){
var map__17679 = G__17677__$1;var map__17679__$1 = ((cljs.core.seq_QMARK_.call(null,map__17679))?cljs.core.apply.call(null,cljs.core.hash_map,map__17679):map__17679);var input__$1 = map__17679__$1;var lc__$1 = cljs.core.get.call(null,map__17679__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.call(null,map__17679__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$.call(null,lc__$1)], true, false):null));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.call(null,React.DOM.label,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17696 = output_checker17669_17687.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17696))
{var error__11615__auto___17697 = temp__4126__auto___17696;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11615__auto___17697)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17662_17681,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17697], null));
} else
{}
} else
{}
return o__11616__auto__;
});
render_label = function(G__17670,G__17671){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__17670);
case 2:
return render_label__2.call(this,G__17670,G__17671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___17680,output_schema17662_17681,input_schema17663_17682,input_schema17667_17683,input_checker17664_17684,output_checker17665_17685,input_checker17668_17686,output_checker17669_17687))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema17662_17681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17663_17682,input_schema17667_17683], null)));
var ufv___17712 = schema.utils.use_fn_validation;var output_schema17698_17713 = schema.core.Any;var input_schema17699_17714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker17700_17715 = schema.core.checker.call(null,input_schema17699_17714);var output_checker17701_17716 = schema.core.checker.call(null,output_schema17698_17713);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___17712,output_schema17698_17713,input_schema17699_17714,input_checker17700_17715,output_checker17701_17716){
return (function render_wrapper(G__17702,G__17703){var validate__11613__auto__ = ufv___17712.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17702,G__17703], null);var temp__4126__auto___17718 = input_checker17700_17715.call(null,args__11614__auto___17717);if(cljs.core.truth_(temp__4126__auto___17718))
{var error__11615__auto___17719 = temp__4126__auto___17718;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__11615__auto___17719)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17699_17714,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17717,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17719], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__17709 = G__17702;var map__17710 = G__17709;var map__17710__$1 = ((cljs.core.seq_QMARK_.call(null,map__17710))?cljs.core.apply.call(null,cljs.core.hash_map,map__17710):map__17710);var wc = cljs.core.get.call(null,map__17710__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__17703;var G__17709__$1 = G__17709;var child__$1 = child;while(true){
var map__17711 = G__17709__$1;var map__17711__$1 = ((cljs.core.seq_QMARK_.call(null,map__17711))?cljs.core.apply.call(null,cljs.core.hash_map,map__17711):map__17711);var wc__$1 = cljs.core.get.call(null,map__17711__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17720 = output_checker17701_17716.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17720))
{var error__11615__auto___17721 = temp__4126__auto___17720;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__11615__auto___17721)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17698_17713,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17721], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17712,output_schema17698_17713,input_schema17699_17714,input_checker17700_17715,output_checker17701_17716))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema17698_17713,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17699_17714], null)));
var ufv___17736 = schema.utils.use_fn_validation;var output_schema17722_17737 = om_bootstrap.types.Component;var input_schema17723_17738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker17724_17739 = schema.core.checker.call(null,input_schema17723_17738);var output_checker17725_17740 = schema.core.checker.call(null,output_schema17722_17737);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___17736,output_schema17722_17737,input_schema17723_17738,input_checker17724_17739,output_checker17725_17740){
return (function render_form_group(G__17726,G__17727){var validate__11613__auto__ = ufv___17736.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17726,G__17727], null);var temp__4126__auto___17742 = input_checker17724_17739.call(null,args__11614__auto___17741);if(cljs.core.truth_(temp__4126__auto___17742))
{var error__11615__auto___17743 = temp__4126__auto___17742;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__11615__auto___17743)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17723_17738,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17741,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17743], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__17733 = G__17726;var map__17734 = G__17733;var map__17734__$1 = ((cljs.core.seq_QMARK_.call(null,map__17734))?cljs.core.apply.call(null,cljs.core.hash_map,map__17734):map__17734);var input = map__17734__$1;var bs_style = cljs.core.get.call(null,map__17734__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.call(null,map__17734__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__17727;var G__17733__$1 = G__17733;var children__$1 = children;while(true){
var map__17735 = G__17733__$1;var map__17735__$1 = ((cljs.core.seq_QMARK_.call(null,map__17735))?cljs.core.apply.call(null,cljs.core.hash_map,map__17735):map__17735);var input__$1 = map__17735__$1;var bs_style__$1 = cljs.core.get.call(null,map__17735__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.call(null,map__17735__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17744 = output_checker17725_17740.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17744))
{var error__11615__auto___17745 = temp__4126__auto___17744;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__11615__auto___17745)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17722_17737,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17745], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17736,output_schema17722_17737,input_schema17723_17738,input_checker17724_17739,output_checker17725_17740))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema17722_17737,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17723_17738], null)));
var ufv___17755 = schema.utils.use_fn_validation;var output_schema17746_17756 = om_bootstrap.types.Component;var input_schema17747_17757 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker17748_17758 = schema.core.checker.call(null,input_schema17747_17757);var output_checker17749_17759 = schema.core.checker.call(null,output_schema17746_17756);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___17755,output_schema17746_17756,input_schema17747_17757,input_checker17748_17758,output_checker17749_17759){
return (function render_input(G__17750,G__17751,G__17752){var validate__11613__auto__ = ufv___17755.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17760 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17750,G__17751,G__17752], null);var temp__4126__auto___17761 = input_checker17748_17758.call(null,args__11614__auto___17760);if(cljs.core.truth_(temp__4126__auto___17761))
{var error__11615__auto___17762 = temp__4126__auto___17761;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__11615__auto___17762)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17747_17757,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17760,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17762], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var input = G__17750;var attrs = G__17751;var children = G__17752;while(true){
var props = ((function (validate__11613__auto__,ufv___17755,output_schema17746_17756,input_schema17747_17757,input_checker17748_17758,output_checker17749_17759){
return (function (klass){return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__11613__auto__,ufv___17755,output_schema17746_17756,input_schema17747_17757,input_checker17748_17758,output_checker17749_17759))
;if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__17754 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__17754) {
case "select":
return om_tools.dom.element.call(null,React.DOM.select,props.call(null,"form-control"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

break;
case "textarea":
return om_tools.dom.element.call(null,om.dom.textarea,props.call(null,"form-control"),cljs.core.PersistentVector.EMPTY);

break;
case "static":
return om_tools.dom.element.call(null,React.DOM.p,props.call(null,"form-control-static"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs)],null)));

break;
default:
return om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props.call(null,((om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))?"":"form-control")),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17764 = output_checker17749_17759.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17764))
{var error__11615__auto___17765 = temp__4126__auto___17764;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__11615__auto___17765)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17746_17756,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17765], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17755,output_schema17746_17756,input_schema17747_17757,input_checker17748_17758,output_checker17749_17759))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema17746_17756,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17747_17757], null)));
var ufv___17774 = schema.utils.use_fn_validation;var output_schema17766_17775 = om_bootstrap.types.Component;var input_schema17767_17776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17768_17777 = schema.core.checker.call(null,input_schema17767_17776);var output_checker17769_17778 = schema.core.checker.call(null,output_schema17766_17775);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___17774,output_schema17766_17775,input_schema17767_17776,input_checker17768_17777,output_checker17769_17778){
return (function() { 
var input__delegate = function (G__17770,rest17771){var validate__11613__auto__ = ufv___17774.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17779 = cljs.core.list_STAR_.call(null,G__17770,rest17771);var temp__4126__auto___17780 = input_checker17768_17777.call(null,args__11614__auto___17779);if(cljs.core.truth_(temp__4126__auto___17780))
{var error__11615__auto___17781 = temp__4126__auto___17780;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__11615__auto___17781)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17767_17776,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17779,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17781], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17770;var children = rest17771;while(true){
var vec__17773 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.call(null,vec__17773,(0),null);var attrs = cljs.core.nth.call(null,vec__17773,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))
{return om_bootstrap.input.render_form_group.call(null,input__$1,om_bootstrap.input.render_wrapper.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input__$1,om_bootstrap.input.render_label.call(null,input__$1,om_bootstrap.input.render_input.call(null,input__$1,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input__$1),om_bootstrap.input.render_wrapper.call(null,input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input.call(null,input__$1,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17782 = output_checker17769_17778.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17782))
{var error__11615__auto___17783 = temp__4126__auto___17782;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__11615__auto___17783)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17766_17775,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17783], null));
} else
{}
} else
{}
return o__11616__auto__;
};
var input = function (G__17770,var_args){
var rest17771 = null;if (arguments.length > 1) {
  rest17771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__17770,rest17771);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__17784){
var G__17770 = cljs.core.first(arglist__17784);
var rest17771 = cljs.core.rest(arglist__17784);
return input__delegate(G__17770,rest17771);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___17774,output_schema17766_17775,input_schema17767_17776,input_checker17768_17777,output_checker17769_17778))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema17766_17775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17767_17776], null)));
var ufv___17794 = schema.utils.use_fn_validation;var output_schema17785_17795 = om_bootstrap.types.Component;var input_schema17786_17796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker17787_17797 = schema.core.checker.call(null,input_schema17786_17796);var output_checker17788_17798 = schema.core.checker.call(null,output_schema17785_17795);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___17794,output_schema17785_17795,input_schema17786_17796,input_checker17787_17797,output_checker17788_17798){
return (function radio_option(G__17789){var validate__11613__auto__ = ufv___17794.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17789], null);var temp__4126__auto___17800 = input_checker17787_17797.call(null,args__11614__auto___17799);if(cljs.core.truth_(temp__4126__auto___17800))
{var error__11615__auto___17801 = temp__4126__auto___17800;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__11615__auto___17801)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17786_17796,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17799,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17801], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var opts = G__17789;while(true){
var vec__17792 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.call(null,vec__17792,(0),null);var props = cljs.core.nth.call(null,vec__17792,(1),null);var map__17793 = bs;var map__17793__$1 = ((cljs.core.seq_QMARK_.call(null,map__17793))?cljs.core.apply.call(null,cljs.core.hash_map,map__17793):map__17793);var inline_QMARK_ = cljs.core.get.call(null,map__17793__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.call(null,map__17793__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.call(null,map__17793__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17802 = output_checker17788_17798.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17802))
{var error__11615__auto___17803 = temp__4126__auto___17802;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__11615__auto___17803)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17785_17795,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17803], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17794,output_schema17785_17795,input_schema17786_17796,input_checker17787_17797,output_checker17788_17798))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema17785_17795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17786_17796], null)));
var ufv___17826 = schema.utils.use_fn_validation;var output_schema17804_17827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema17805_17828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker17806_17829 = schema.core.checker.call(null,input_schema17805_17828);var output_checker17807_17830 = schema.core.checker.call(null,output_schema17804_17827);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___17826,output_schema17804_17827,input_schema17805_17828,input_checker17806_17829,output_checker17807_17830){
return (function options(G__17808,G__17809){var validate__11613__auto__ = ufv___17826.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17808,G__17809], null);var temp__4126__auto___17832 = input_checker17806_17829.call(null,args__11614__auto___17831);if(cljs.core.truth_(temp__4126__auto___17832))
{var error__11615__auto___17833 = temp__4126__auto___17832;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__11615__auto___17833)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17805_17828,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17831,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17833], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var header = G__17808;var opts = G__17809;while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__4281__auto__ = ((function (validate__11613__auto__,ufv___17826,output_schema17804_17827,input_schema17805_17828,input_checker17806_17829,output_checker17807_17830){
return (function iter__17818(s__17819){return (new cljs.core.LazySeq(null,((function (validate__11613__auto__,ufv___17826,output_schema17804_17827,input_schema17805_17828,input_checker17806_17829,output_checker17807_17830){
return (function (){var s__17819__$1 = s__17819;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17819__$1);if(temp__4126__auto__)
{var s__17819__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17819__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__17819__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__17821 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__17820 = (0);while(true){
if((i__17820 < size__4280__auto__))
{var vec__17824 = cljs.core._nth.call(null,c__4279__auto__,i__17820);var v = cljs.core.nth.call(null,vec__17824,(0),null);var label = cljs.core.nth.call(null,vec__17824,(1),null);cljs.core.chunk_append.call(null,b__17821,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__17834 = (i__17820 + (1));
i__17820 = G__17834;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17821),iter__17818.call(null,cljs.core.chunk_rest.call(null,s__17819__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17821),null);
}
} else
{var vec__17825 = cljs.core.first.call(null,s__17819__$2);var v = cljs.core.nth.call(null,vec__17825,(0),null);var label = cljs.core.nth.call(null,vec__17825,(1),null);return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__17818.call(null,cljs.core.rest.call(null,s__17819__$2)));
}
} else
{return null;
}
break;
}
});})(validate__11613__auto__,ufv___17826,output_schema17804_17827,input_schema17805_17828,input_checker17806_17829,output_checker17807_17830))
,null,null));
});})(validate__11613__auto__,ufv___17826,output_schema17804_17827,input_schema17805_17828,input_checker17806_17829,output_checker17807_17830))
;return iter__4281__auto__.call(null,opts);
})());
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17835 = output_checker17807_17830.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17835))
{var error__11615__auto___17836 = temp__4126__auto___17835;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__11615__auto___17836)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17804_17827,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17836], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17826,output_schema17804_17827,input_schema17805_17828,input_checker17806_17829,output_checker17807_17830))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema17804_17827,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17805_17828], null)));

//# sourceMappingURL=input.js.map