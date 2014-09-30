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
var ufv___26311 = schema.utils.use_fn_validation;var output_schema26302_26312 = schema.core.Str;var input_schema26303_26313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker26304_26314 = schema.core.checker.call(null,input_schema26303_26313);var output_checker26305_26315 = schema.core.checker.call(null,output_schema26302_26312);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___26311,output_schema26302_26312,input_schema26303_26313,input_checker26304_26314,output_checker26305_26315){
return (function class_set(G__26306){var validate__10325__auto__ = ufv___26311.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26306], null);var temp__4126__auto___26317 = input_checker26304_26314.call(null,args__10326__auto___26316);if(cljs.core.truth_(temp__4126__auto___26317))
{var error__10327__auto___26318 = temp__4126__auto___26317;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__10327__auto___26318)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26303_26313,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26316,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26318], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var klasses = G__26306;while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__10325__auto__,ufv___26311,output_schema26302_26312,input_schema26303_26313,input_checker26304_26314,output_checker26305_26315){
return (function (p__26309){var vec__26310 = p__26309;var k = cljs.core.nth.call(null,vec__26310,(0),null);var keep_QMARK_ = cljs.core.nth.call(null,vec__26310,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else
{return null;
}
});})(validate__10325__auto__,ufv___26311,output_schema26302_26312,input_schema26303_26313,input_checker26304_26314,output_checker26305_26315))
,klasses));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26319 = output_checker26305_26315.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26319))
{var error__10327__auto___26320 = temp__4126__auto___26319;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__10327__auto___26320)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26302_26312,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26320], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26311,output_schema26302_26312,input_schema26303_26313,input_checker26304_26314,output_checker26305_26315))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema26302_26312,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26303_26313], null)));
var ufv___26326 = schema.utils.use_fn_validation;var output_schema26321_26327 = om_bootstrap.types.Component;var input_schema26322_26328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker26323_26329 = schema.core.checker.call(null,input_schema26322_26328);var output_checker26324_26330 = schema.core.checker.call(null,output_schema26321_26327);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___26326,output_schema26321_26327,input_schema26322_26328,input_checker26323_26329,output_checker26324_26330){
return (function glyph(G__26325){var validate__10325__auto__ = ufv___26326.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26325], null);var temp__4126__auto___26332 = input_checker26323_26329.call(null,args__10326__auto___26331);if(cljs.core.truth_(temp__4126__auto___26332))
{var error__10327__auto___26333 = temp__4126__auto___26332;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__10327__auto___26333)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26322_26328,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26331,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26333], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var glyph_name = G__26325;while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))});
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26334 = output_checker26324_26330.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26334))
{var error__10327__auto___26335 = temp__4126__auto___26334;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__10327__auto___26335)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26321_26327,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26335], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26326,output_schema26321_26327,input_schema26322_26328,input_checker26323_26329,output_checker26324_26330))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema26321_26327,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26322_26328], null)));
var ufv___26349 = schema.utils.use_fn_validation;var output_schema26336_26350 = om_bootstrap.types.Component;var input_schema26337_26351 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker26338_26352 = schema.core.checker.call(null,input_schema26337_26351);var output_checker26339_26353 = schema.core.checker.call(null,output_schema26336_26350);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___26349,output_schema26336_26350,input_schema26337_26351,input_checker26338_26352,output_checker26339_26353){
return (function render_icon(G__26340){var validate__10325__auto__ = ufv___26349.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26354 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26340], null);var temp__4126__auto___26355 = input_checker26338_26352.call(null,args__10326__auto___26354);if(cljs.core.truth_(temp__4126__auto___26355))
{var error__10327__auto___26356 = temp__4126__auto___26355;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__10327__auto___26356)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26337_26351,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26354,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26356], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__26346 = G__26340;var map__26347 = G__26346;var map__26347__$1 = ((cljs.core.seq_QMARK_.call(null,map__26347))?cljs.core.apply.call(null,cljs.core.hash_map,map__26347):map__26347);var bs_style = cljs.core.get.call(null,map__26347__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.call(null,map__26347__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__26346__$1 = G__26346;while(true){
var map__26348 = G__26346__$1;var map__26348__$1 = ((cljs.core.seq_QMARK_.call(null,map__26348))?cljs.core.apply.call(null,cljs.core.hash_map,map__26348):map__26348);var bs_style__$1 = cljs.core.get.call(null,map__26348__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.call(null,map__26348__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26357 = output_checker26339_26353.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26357))
{var error__10327__auto___26358 = temp__4126__auto___26357;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__10327__auto___26358)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26336_26350,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26358], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26349,output_schema26336_26350,input_schema26337_26351,input_checker26338_26352,output_checker26339_26353))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema26336_26350,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26337_26351], null)));
var ufv___26364 = schema.utils.use_fn_validation;var output_schema26359_26365 = schema.core.Any;var input_schema26360_26366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker26361_26367 = schema.core.checker.call(null,input_schema26360_26366);var output_checker26362_26368 = schema.core.checker.call(null,output_schema26359_26365);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___26364,output_schema26359_26365,input_schema26360_26366,input_checker26361_26367,output_checker26362_26368){
return (function render_help(G__26363){var validate__10325__auto__ = ufv___26364.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26363], null);var temp__4126__auto___26370 = input_checker26361_26367.call(null,args__10326__auto___26369);if(cljs.core.truth_(temp__4126__auto___26370))
{var error__10327__auto___26371 = temp__4126__auto___26370;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__10327__auto___26371)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26360_26366,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26369,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26371], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var help = G__26363;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26372 = output_checker26362_26368.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26372))
{var error__10327__auto___26373 = temp__4126__auto___26372;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__10327__auto___26373)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26359_26365,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26373], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26364,output_schema26359_26365,input_schema26360_26366,input_checker26361_26367,output_checker26362_26368))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema26359_26365,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26360_26366], null)));
var ufv___26388 = schema.utils.use_fn_validation;var output_schema26374_26389 = schema.core.Any;var input_schema26375_26390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker26376_26391 = schema.core.checker.call(null,input_schema26375_26390);var output_checker26377_26392 = schema.core.checker.call(null,output_schema26374_26389);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___26388,output_schema26374_26389,input_schema26375_26390,input_checker26376_26391,output_checker26377_26392){
return (function render_input_group(G__26378,G__26379){var validate__10325__auto__ = ufv___26388.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26378,G__26379], null);var temp__4126__auto___26394 = input_checker26376_26391.call(null,args__10326__auto___26393);if(cljs.core.truth_(temp__4126__auto___26394))
{var error__10327__auto___26395 = temp__4126__auto___26394;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__10327__auto___26395)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26375_26390,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26393,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26395], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__26385 = G__26378;var map__26386 = G__26385;var map__26386__$1 = ((cljs.core.seq_QMARK_.call(null,map__26386))?cljs.core.apply.call(null,cljs.core.hash_map,map__26386):map__26386);var addon_after = cljs.core.get.call(null,map__26386__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.call(null,map__26386__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__26379;var G__26385__$1 = G__26385;var items__$1 = items;while(true){
var map__26387 = G__26385__$1;var map__26387__$1 = ((cljs.core.seq_QMARK_.call(null,map__26387))?cljs.core.apply.call(null,cljs.core.hash_map,map__26387):map__26387);var addon_after__$1 = cljs.core.get.call(null,map__26387__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.call(null,map__26387__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__3556__auto__ = addon_before__$1;if(cljs.core.truth_(or__3556__auto__))
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
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26396 = output_checker26377_26392.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26396))
{var error__10327__auto___26397 = temp__4126__auto___26396;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__10327__auto___26397)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26374_26389,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26397], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26388,output_schema26374_26389,input_schema26375_26390,input_checker26376_26391,output_checker26377_26392))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema26374_26389,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26375_26390], null)));
var ufv___26411 = schema.utils.use_fn_validation;var output_schema26398_26412 = schema.core.Bool;var input_schema26399_26413 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker26400_26414 = schema.core.checker.call(null,input_schema26399_26413);var output_checker26401_26415 = schema.core.checker.call(null,output_schema26398_26412);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___26411,output_schema26398_26412,input_schema26399_26413,input_checker26400_26414,output_checker26401_26415){
return (function checkbox_or_radio_QMARK_(G__26402){var validate__10325__auto__ = ufv___26411.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26402], null);var temp__4126__auto___26417 = input_checker26400_26414.call(null,args__10326__auto___26416);if(cljs.core.truth_(temp__4126__auto___26417))
{var error__10327__auto___26418 = temp__4126__auto___26417;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__10327__auto___26418)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26399_26413,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26416,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26418], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__26408 = G__26402;var map__26409 = G__26408;var map__26409__$1 = ((cljs.core.seq_QMARK_.call(null,map__26409))?cljs.core.apply.call(null,cljs.core.hash_map,map__26409):map__26409);var type = cljs.core.get.call(null,map__26409__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__26408__$1 = G__26408;while(true){
var map__26410 = G__26408__$1;var map__26410__$1 = ((cljs.core.seq_QMARK_.call(null,map__26410))?cljs.core.apply.call(null,cljs.core.hash_map,map__26410):map__26410);var type__$1 = cljs.core.get.call(null,map__26410__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26419 = output_checker26401_26415.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26419))
{var error__10327__auto___26420 = temp__4126__auto___26419;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__10327__auto___26420)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26398_26412,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26420], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26411,output_schema26398_26412,input_schema26399_26413,input_checker26400_26414,output_checker26401_26415))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema26398_26412,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26399_26413], null)));
var ufv___26435 = schema.utils.use_fn_validation;var output_schema26421_26436 = om_bootstrap.types.Component;var input_schema26422_26437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker26423_26438 = schema.core.checker.call(null,input_schema26422_26437);var output_checker26424_26439 = schema.core.checker.call(null,output_schema26421_26436);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___26435,output_schema26421_26436,input_schema26422_26437,input_checker26423_26438,output_checker26424_26439){
return (function checkbox_or_radio_wrapper(G__26425,G__26426){var validate__10325__auto__ = ufv___26435.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26425,G__26426], null);var temp__4126__auto___26441 = input_checker26423_26438.call(null,args__10326__auto___26440);if(cljs.core.truth_(temp__4126__auto___26441))
{var error__10327__auto___26442 = temp__4126__auto___26441;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__10327__auto___26442)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26422_26437,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26440,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26442], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__26432 = G__26425;var map__26433 = G__26432;var map__26433__$1 = ((cljs.core.seq_QMARK_.call(null,map__26433))?cljs.core.apply.call(null,cljs.core.hash_map,map__26433):map__26433);var type = cljs.core.get.call(null,map__26433__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__26426;var G__26432__$1 = G__26432;var children__$1 = children;while(true){
var map__26434 = G__26432__$1;var map__26434__$1 = ((cljs.core.seq_QMARK_.call(null,map__26434))?cljs.core.apply.call(null,cljs.core.hash_map,map__26434):map__26434);var type__$1 = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26443 = output_checker26424_26439.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26443))
{var error__10327__auto___26444 = temp__4126__auto___26443;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__10327__auto___26444)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26421_26436,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26444], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26435,output_schema26421_26436,input_schema26422_26437,input_checker26423_26438,output_checker26424_26439))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema26421_26436,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26422_26437], null)));
var ufv___26463 = schema.utils.use_fn_validation;var output_schema26445_26464 = schema.core.Any;var input_schema26446_26465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema26450_26466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker26447_26467 = schema.core.checker.call(null,input_schema26446_26465);var output_checker26448_26468 = schema.core.checker.call(null,output_schema26445_26464);var input_checker26451_26469 = schema.core.checker.call(null,input_schema26450_26466);var output_checker26452_26470 = schema.core.checker.call(null,output_schema26445_26464);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___26463,output_schema26445_26464,input_schema26446_26465,input_schema26450_26466,input_checker26447_26467,output_checker26448_26468,input_checker26451_26469,output_checker26452_26470){
return (function() {
var render_label = null;
var render_label__1 = (function (G__26449){var validate__10325__auto__ = ufv___26463.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26449], null);var temp__4126__auto___26472 = input_checker26447_26467.call(null,args__10326__auto___26471);if(cljs.core.truth_(temp__4126__auto___26472))
{var error__10327__auto___26473 = temp__4126__auto___26472;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__10327__auto___26473)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26446_26465,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26471,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26473], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var input = G__26449;while(true){
return render_label.call(null,input,null);
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26474 = output_checker26448_26468.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26474))
{var error__10327__auto___26475 = temp__4126__auto___26474;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__10327__auto___26475)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26445_26464,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26475], null));
} else
{}
} else
{}
return o__10328__auto__;
});
var render_label__2 = (function (G__26453,G__26454){var validate__10325__auto__ = ufv___26463.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26453,G__26454], null);var temp__4126__auto___26477 = input_checker26451_26469.call(null,args__10326__auto___26476);if(cljs.core.truth_(temp__4126__auto___26477))
{var error__10327__auto___26478 = temp__4126__auto___26477;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__10327__auto___26478)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26450_26466,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26476,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26478], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__26460 = G__26453;var map__26461 = G__26460;var map__26461__$1 = ((cljs.core.seq_QMARK_.call(null,map__26461))?cljs.core.apply.call(null,cljs.core.hash_map,map__26461):map__26461);var input = map__26461__$1;var lc = cljs.core.get.call(null,map__26461__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.call(null,map__26461__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__26454;var G__26460__$1 = G__26460;var child__$1 = child;while(true){
var map__26462 = G__26460__$1;var map__26462__$1 = ((cljs.core.seq_QMARK_.call(null,map__26462))?cljs.core.apply.call(null,cljs.core.hash_map,map__26462):map__26462);var input__$1 = map__26462__$1;var lc__$1 = cljs.core.get.call(null,map__26462__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.call(null,map__26462__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$.call(null,lc__$1)], true, false):null));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.call(null,React.DOM.label,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26479 = output_checker26452_26470.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26479))
{var error__10327__auto___26480 = temp__4126__auto___26479;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__10327__auto___26480)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26445_26464,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26480], null));
} else
{}
} else
{}
return o__10328__auto__;
});
render_label = function(G__26453,G__26454){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__26453);
case 2:
return render_label__2.call(this,G__26453,G__26454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___26463,output_schema26445_26464,input_schema26446_26465,input_schema26450_26466,input_checker26447_26467,output_checker26448_26468,input_checker26451_26469,output_checker26452_26470))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema26445_26464,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26446_26465,input_schema26450_26466], null)));
var ufv___26495 = schema.utils.use_fn_validation;var output_schema26481_26496 = schema.core.Any;var input_schema26482_26497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker26483_26498 = schema.core.checker.call(null,input_schema26482_26497);var output_checker26484_26499 = schema.core.checker.call(null,output_schema26481_26496);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___26495,output_schema26481_26496,input_schema26482_26497,input_checker26483_26498,output_checker26484_26499){
return (function render_wrapper(G__26485,G__26486){var validate__10325__auto__ = ufv___26495.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26485,G__26486], null);var temp__4126__auto___26501 = input_checker26483_26498.call(null,args__10326__auto___26500);if(cljs.core.truth_(temp__4126__auto___26501))
{var error__10327__auto___26502 = temp__4126__auto___26501;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__10327__auto___26502)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26482_26497,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26500,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26502], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__26492 = G__26485;var map__26493 = G__26492;var map__26493__$1 = ((cljs.core.seq_QMARK_.call(null,map__26493))?cljs.core.apply.call(null,cljs.core.hash_map,map__26493):map__26493);var wc = cljs.core.get.call(null,map__26493__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__26486;var G__26492__$1 = G__26492;var child__$1 = child;while(true){
var map__26494 = G__26492__$1;var map__26494__$1 = ((cljs.core.seq_QMARK_.call(null,map__26494))?cljs.core.apply.call(null,cljs.core.hash_map,map__26494):map__26494);var wc__$1 = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26503 = output_checker26484_26499.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26503))
{var error__10327__auto___26504 = temp__4126__auto___26503;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__10327__auto___26504)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26481_26496,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26504], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26495,output_schema26481_26496,input_schema26482_26497,input_checker26483_26498,output_checker26484_26499))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema26481_26496,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26482_26497], null)));
var ufv___26519 = schema.utils.use_fn_validation;var output_schema26505_26520 = om_bootstrap.types.Component;var input_schema26506_26521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker26507_26522 = schema.core.checker.call(null,input_schema26506_26521);var output_checker26508_26523 = schema.core.checker.call(null,output_schema26505_26520);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___26519,output_schema26505_26520,input_schema26506_26521,input_checker26507_26522,output_checker26508_26523){
return (function render_form_group(G__26509,G__26510){var validate__10325__auto__ = ufv___26519.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26509,G__26510], null);var temp__4126__auto___26525 = input_checker26507_26522.call(null,args__10326__auto___26524);if(cljs.core.truth_(temp__4126__auto___26525))
{var error__10327__auto___26526 = temp__4126__auto___26525;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__10327__auto___26526)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26506_26521,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26524,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26526], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__26516 = G__26509;var map__26517 = G__26516;var map__26517__$1 = ((cljs.core.seq_QMARK_.call(null,map__26517))?cljs.core.apply.call(null,cljs.core.hash_map,map__26517):map__26517);var input = map__26517__$1;var bs_style = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__26510;var G__26516__$1 = G__26516;var children__$1 = children;while(true){
var map__26518 = G__26516__$1;var map__26518__$1 = ((cljs.core.seq_QMARK_.call(null,map__26518))?cljs.core.apply.call(null,cljs.core.hash_map,map__26518):map__26518);var input__$1 = map__26518__$1;var bs_style__$1 = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26527 = output_checker26508_26523.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26527))
{var error__10327__auto___26528 = temp__4126__auto___26527;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__10327__auto___26528)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26505_26520,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26528], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26519,output_schema26505_26520,input_schema26506_26521,input_checker26507_26522,output_checker26508_26523))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema26505_26520,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26506_26521], null)));
var ufv___26538 = schema.utils.use_fn_validation;var output_schema26529_26539 = om_bootstrap.types.Component;var input_schema26530_26540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker26531_26541 = schema.core.checker.call(null,input_schema26530_26540);var output_checker26532_26542 = schema.core.checker.call(null,output_schema26529_26539);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___26538,output_schema26529_26539,input_schema26530_26540,input_checker26531_26541,output_checker26532_26542){
return (function render_input(G__26533,G__26534,G__26535){var validate__10325__auto__ = ufv___26538.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26543 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26533,G__26534,G__26535], null);var temp__4126__auto___26544 = input_checker26531_26541.call(null,args__10326__auto___26543);if(cljs.core.truth_(temp__4126__auto___26544))
{var error__10327__auto___26545 = temp__4126__auto___26544;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__10327__auto___26545)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26530_26540,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26543,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26545], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var input = G__26533;var attrs = G__26534;var children = G__26535;while(true){
var props = ((function (validate__10325__auto__,ufv___26538,output_schema26529_26539,input_schema26530_26540,input_checker26531_26541,output_checker26532_26542){
return (function (klass){return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__10325__auto__,ufv___26538,output_schema26529_26539,input_schema26530_26540,input_checker26531_26541,output_checker26532_26542))
;if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__26537 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__26537) {
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
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26547 = output_checker26532_26542.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26547))
{var error__10327__auto___26548 = temp__4126__auto___26547;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__10327__auto___26548)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26529_26539,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26548], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26538,output_schema26529_26539,input_schema26530_26540,input_checker26531_26541,output_checker26532_26542))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema26529_26539,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26530_26540], null)));
var ufv___26557 = schema.utils.use_fn_validation;var output_schema26549_26558 = om_bootstrap.types.Component;var input_schema26550_26559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker26551_26560 = schema.core.checker.call(null,input_schema26550_26559);var output_checker26552_26561 = schema.core.checker.call(null,output_schema26549_26558);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___26557,output_schema26549_26558,input_schema26550_26559,input_checker26551_26560,output_checker26552_26561){
return (function() { 
var input__delegate = function (G__26553,rest26554){var validate__10325__auto__ = ufv___26557.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26562 = cljs.core.list_STAR_.call(null,G__26553,rest26554);var temp__4126__auto___26563 = input_checker26551_26560.call(null,args__10326__auto___26562);if(cljs.core.truth_(temp__4126__auto___26563))
{var error__10327__auto___26564 = temp__4126__auto___26563;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__10327__auto___26564)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26550_26559,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26562,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26564], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__26553;var children = rest26554;while(true){
var vec__26556 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.call(null,vec__26556,(0),null);var attrs = cljs.core.nth.call(null,vec__26556,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))
{return om_bootstrap.input.render_form_group.call(null,input__$1,om_bootstrap.input.render_wrapper.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input__$1,om_bootstrap.input.render_label.call(null,input__$1,om_bootstrap.input.render_input.call(null,input__$1,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input__$1),om_bootstrap.input.render_wrapper.call(null,input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input.call(null,input__$1,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26565 = output_checker26552_26561.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26565))
{var error__10327__auto___26566 = temp__4126__auto___26565;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__10327__auto___26566)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26549_26558,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26566], null));
} else
{}
} else
{}
return o__10328__auto__;
};
var input = function (G__26553,var_args){
var rest26554 = null;if (arguments.length > 1) {
  rest26554 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__26553,rest26554);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__26567){
var G__26553 = cljs.core.first(arglist__26567);
var rest26554 = cljs.core.rest(arglist__26567);
return input__delegate(G__26553,rest26554);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___26557,output_schema26549_26558,input_schema26550_26559,input_checker26551_26560,output_checker26552_26561))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema26549_26558,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26550_26559], null)));
var ufv___26577 = schema.utils.use_fn_validation;var output_schema26568_26578 = om_bootstrap.types.Component;var input_schema26569_26579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker26570_26580 = schema.core.checker.call(null,input_schema26569_26579);var output_checker26571_26581 = schema.core.checker.call(null,output_schema26568_26578);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___26577,output_schema26568_26578,input_schema26569_26579,input_checker26570_26580,output_checker26571_26581){
return (function radio_option(G__26572){var validate__10325__auto__ = ufv___26577.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26572], null);var temp__4126__auto___26583 = input_checker26570_26580.call(null,args__10326__auto___26582);if(cljs.core.truth_(temp__4126__auto___26583))
{var error__10327__auto___26584 = temp__4126__auto___26583;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__10327__auto___26584)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26569_26579,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26582,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26584], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var opts = G__26572;while(true){
var vec__26575 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.call(null,vec__26575,(0),null);var props = cljs.core.nth.call(null,vec__26575,(1),null);var map__26576 = bs;var map__26576__$1 = ((cljs.core.seq_QMARK_.call(null,map__26576))?cljs.core.apply.call(null,cljs.core.hash_map,map__26576):map__26576);var inline_QMARK_ = cljs.core.get.call(null,map__26576__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.call(null,map__26576__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.call(null,map__26576__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26585 = output_checker26571_26581.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26585))
{var error__10327__auto___26586 = temp__4126__auto___26585;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__10327__auto___26586)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26568_26578,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26586], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26577,output_schema26568_26578,input_schema26569_26579,input_checker26570_26580,output_checker26571_26581))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema26568_26578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26569_26579], null)));
var ufv___26609 = schema.utils.use_fn_validation;var output_schema26587_26610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema26588_26611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker26589_26612 = schema.core.checker.call(null,input_schema26588_26611);var output_checker26590_26613 = schema.core.checker.call(null,output_schema26587_26610);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___26609,output_schema26587_26610,input_schema26588_26611,input_checker26589_26612,output_checker26590_26613){
return (function options(G__26591,G__26592){var validate__10325__auto__ = ufv___26609.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___26614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26591,G__26592], null);var temp__4126__auto___26615 = input_checker26589_26612.call(null,args__10326__auto___26614);if(cljs.core.truth_(temp__4126__auto___26615))
{var error__10327__auto___26616 = temp__4126__auto___26615;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__10327__auto___26616)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26588_26611,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___26614,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26616], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var header = G__26591;var opts = G__26592;while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__4281__auto__ = ((function (validate__10325__auto__,ufv___26609,output_schema26587_26610,input_schema26588_26611,input_checker26589_26612,output_checker26590_26613){
return (function iter__26601(s__26602){return (new cljs.core.LazySeq(null,((function (validate__10325__auto__,ufv___26609,output_schema26587_26610,input_schema26588_26611,input_checker26589_26612,output_checker26590_26613){
return (function (){var s__26602__$1 = s__26602;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26602__$1);if(temp__4126__auto__)
{var s__26602__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26602__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__26602__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__26604 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__26603 = (0);while(true){
if((i__26603 < size__4280__auto__))
{var vec__26607 = cljs.core._nth.call(null,c__4279__auto__,i__26603);var v = cljs.core.nth.call(null,vec__26607,(0),null);var label = cljs.core.nth.call(null,vec__26607,(1),null);cljs.core.chunk_append.call(null,b__26604,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__26617 = (i__26603 + (1));
i__26603 = G__26617;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26604),iter__26601.call(null,cljs.core.chunk_rest.call(null,s__26602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26604),null);
}
} else
{var vec__26608 = cljs.core.first.call(null,s__26602__$2);var v = cljs.core.nth.call(null,vec__26608,(0),null);var label = cljs.core.nth.call(null,vec__26608,(1),null);return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__26601.call(null,cljs.core.rest.call(null,s__26602__$2)));
}
} else
{return null;
}
break;
}
});})(validate__10325__auto__,ufv___26609,output_schema26587_26610,input_schema26588_26611,input_checker26589_26612,output_checker26590_26613))
,null,null));
});})(validate__10325__auto__,ufv___26609,output_schema26587_26610,input_schema26588_26611,input_checker26589_26612,output_checker26590_26613))
;return iter__4281__auto__.call(null,opts);
})());
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___26618 = output_checker26590_26613.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___26618))
{var error__10327__auto___26619 = temp__4126__auto___26618;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__10327__auto___26619)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26587_26610,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___26619], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___26609,output_schema26587_26610,input_schema26588_26611,input_checker26589_26612,output_checker26590_26613))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema26587_26610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26588_26611], null)));

//# sourceMappingURL=input.js.map