// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___20391 = schema.utils.use_fn_validation;var output_schema20386_20392 = schema.core.Any;var input_schema20387_20393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker20388_20394 = schema.core.checker.call(null,input_schema20387_20393);var output_checker20389_20395 = schema.core.checker.call(null,output_schema20386_20392);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___20391,output_schema20386_20392,input_schema20387_20393,input_checker20388_20394,output_checker20389_20395){
return (function schema_keys(G__20390){var validate__11613__auto__ = ufv___20391.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20390], null);var temp__4126__auto___20397 = input_checker20388_20394.call(null,args__11614__auto___20396);if(cljs.core.truth_(temp__4126__auto___20397))
{var error__11615__auto___20398 = temp__4126__auto___20397;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__11615__auto___20398)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20387_20393,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20396,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20398], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var schema__$1 = G__20390;while(true){
return cljs.core.map.call(null,((function (validate__11613__auto__,ufv___20391,output_schema20386_20392,input_schema20387_20393,input_checker20388_20394,output_checker20389_20395){
return (function (k){if(schema.core.optional_key_QMARK_.call(null,k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__11613__auto__,ufv___20391,output_schema20386_20392,input_schema20387_20393,input_checker20388_20394,output_checker20389_20395))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20399 = output_checker20389_20395.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20399))
{var error__11615__auto___20400 = temp__4126__auto___20399;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__11615__auto___20400)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20386_20392,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20400], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20391,output_schema20386_20392,input_schema20387_20393,input_checker20388_20394,output_checker20389_20395))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema20386_20392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20387_20393], null)));
var ufv___20406 = schema.utils.use_fn_validation;var output_schema20401_20407 = schema.core.Any;var input_schema20402_20408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker20403_20409 = schema.core.checker.call(null,input_schema20402_20408);var output_checker20404_20410 = schema.core.checker.call(null,output_schema20401_20407);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___20406,output_schema20401_20407,input_schema20402_20408,input_checker20403_20409,output_checker20404_20410){
return (function at_least(G__20405){var validate__11613__auto__ = ufv___20406.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20405], null);var temp__4126__auto___20412 = input_checker20403_20409.call(null,args__11614__auto___20411);if(cljs.core.truth_(temp__4126__auto___20412))
{var error__11615__auto___20413 = temp__4126__auto___20412;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__11615__auto___20413)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20402_20408,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20411,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20413], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var schema__$1 = G__20405;while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20414 = output_checker20404_20410.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20414))
{var error__11615__auto___20415 = temp__4126__auto___20414;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__11615__auto___20415)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20401_20407,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20415], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20406,output_schema20401_20407,input_schema20402_20408,input_checker20403_20409,output_checker20404_20410))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema20401_20407,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20402_20408], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
* Map of keyword to the proper bootstrap class name.
*/
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
* Map of style keywords -> styles.
*/
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
* Applies all default bootstrap options to the supplied schema. If
* the incoming schema has one of the the keys from BootstrapClass,
* that wins (even if it's required).
*/
om_bootstrap.types.bootstrap = (function bootstrap(schema__$1){var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___20428 = schema.utils.use_fn_validation;var output_schema20416_20429 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema20417_20430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema20422_20431 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker20418_20432 = schema.core.checker.call(null,input_schema20417_20430);var output_checker20419_20433 = schema.core.checker.call(null,output_schema20416_20429);var input_checker20423_20434 = schema.core.checker.call(null,input_schema20422_20431);var output_checker20424_20435 = schema.core.checker.call(null,output_schema20416_20429);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___20428,output_schema20416_20429,input_schema20417_20430,input_schema20422_20431,input_checker20418_20432,output_checker20419_20433,input_checker20423_20434,output_checker20424_20435){
return (function() {
var separate = null;
var separate__2 = (function (G__20420,G__20421){var validate__11613__auto__ = ufv___20428.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20420,G__20421], null);var temp__4126__auto___20437 = input_checker20418_20432.call(null,args__11614__auto___20436);if(cljs.core.truth_(temp__4126__auto___20437))
{var error__11615__auto___20438 = temp__4126__auto___20437;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11615__auto___20438)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20417_20430,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20436,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20438], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var schema__$1 = G__20420;var opts = G__20421;while(true){
return separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20439 = output_checker20419_20433.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20439))
{var error__11615__auto___20440 = temp__4126__auto___20439;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11615__auto___20440)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20416_20429,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20440], null));
} else
{}
} else
{}
return o__11616__auto__;
});
var separate__3 = (function (G__20425,G__20426,G__20427){var validate__11613__auto__ = ufv___20428.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20425,G__20426,G__20427], null);var temp__4126__auto___20442 = input_checker20423_20434.call(null,args__11614__auto___20441);if(cljs.core.truth_(temp__4126__auto___20442))
{var error__11615__auto___20443 = temp__4126__auto___20442;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11615__auto___20443)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20422_20431,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20441,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20443], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var schema__$1 = G__20425;var opts = G__20426;var defaults = G__20427;while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));var opts__$1 = cljs.core.merge.call(null,defaults,opts);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20444 = output_checker20424_20435.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20444))
{var error__11615__auto___20445 = temp__4126__auto___20444;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11615__auto___20445)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20416_20429,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20445], null));
} else
{}
} else
{}
return o__11616__auto__;
});
separate = function(G__20425,G__20426,G__20427){
switch(arguments.length){
case 2:
return separate__2.call(this,G__20425,G__20426);
case 3:
return separate__3.call(this,G__20425,G__20426,G__20427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___20428,output_schema20416_20429,input_schema20417_20430,input_schema20422_20431,input_checker20418_20432,output_checker20419_20433,input_checker20423_20434,output_checker20424_20435))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema20416_20429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20417_20430,input_schema20422_20431], null)));
var ufv___20459 = schema.utils.use_fn_validation;var output_schema20446_20460 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema20447_20461 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker20448_20462 = schema.core.checker.call(null,input_schema20447_20461);var output_checker20449_20463 = schema.core.checker.call(null,output_schema20446_20460);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___20459,output_schema20446_20460,input_schema20447_20461,input_checker20448_20462,output_checker20449_20463){
return (function bs_class_set(G__20450){var validate__11613__auto__ = ufv___20459.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20450], null);var temp__4126__auto___20465 = input_checker20448_20462.call(null,args__11614__auto___20464);if(cljs.core.truth_(temp__4126__auto___20465))
{var error__11615__auto___20466 = temp__4126__auto___20465;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__11615__auto___20466)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20447_20461,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20464,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20466], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__20456 = G__20450;var map__20457 = G__20456;var map__20457__$1 = ((cljs.core.seq_QMARK_.call(null,map__20457))?cljs.core.apply.call(null,cljs.core.hash_map,map__20457):map__20457);var bs_size = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__20456__$1 = G__20456;while(true){
var map__20458 = G__20456__$1;var map__20458__$1 = ((cljs.core.seq_QMARK_.call(null,map__20458))?cljs.core.apply.call(null,cljs.core.hash_map,map__20458):map__20458);var bs_size__$1 = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,klass))+"-");return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);if(cljs.core.truth_(temp__4126__auto__))
{var style = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,style))),true], true, false);
} else
{return null;
}
})());
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20467 = output_checker20449_20463.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20467))
{var error__11615__auto___20468 = temp__4126__auto___20467;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__11615__auto___20468)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20446_20460,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20468], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20459,output_schema20446_20460,input_schema20447_20461,input_checker20448_20462,output_checker20449_20463))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema20446_20460,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20447_20461], null)));

//# sourceMappingURL=types.js.map