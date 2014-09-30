// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10355__10356__auto__){var G__20371 = p1__10355__10356__auto__;if(G__20371)
{var bit__4206__auto__ = null;if(cljs.core.truth_((function (){var or__3556__auto__ = bit__4206__auto__;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return G__20371.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__20371.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20371);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20371);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20372_SHARP_){return (cljs.core.val.call(null,p1__20372_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__20374 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__20374,(0),null);var v = cljs.core.nth.call(null,vec__20374,(1),null);var p = vec__20374;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___20380 = schema.utils.use_fn_validation;var output_schema20375_20381 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema20376_20382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker20377_20383 = schema.core.checker.call(null,input_schema20376_20382);var output_checker20378_20384 = schema.core.checker.call(null,output_schema20375_20381);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20380,output_schema20375_20381,input_schema20376_20382,input_checker20377_20383,output_checker20378_20384){
return (function unwrap_schema_form_key(G__20379){var validate__10325__auto__ = ufv___20380.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20379], null);var temp__4126__auto___20386 = input_checker20377_20383.call(null,args__10326__auto___20385);if(cljs.core.truth_(temp__4126__auto___20386))
{var error__10327__auto___20387 = temp__4126__auto___20386;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10327__auto___20387)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20376_20382,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20385,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20387], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var k = G__20379;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20388 = output_checker20378_20384.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20388))
{var error__10327__auto___20389 = temp__4126__auto___20388;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10327__auto___20389)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20375_20381,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20389], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20380,output_schema20375_20381,input_schema20376_20382,input_checker20377_20383,output_checker20378_20384))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20375_20381,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20376_20382], null)));
var ufv___20395 = schema.utils.use_fn_validation;var output_schema20390_20396 = schema.core.Any;var input_schema20391_20397 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20392_20398 = schema.core.checker.call(null,input_schema20391_20397);var output_checker20393_20399 = schema.core.checker.call(null,output_schema20390_20396);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20395,output_schema20390_20396,input_schema20391_20397,input_checker20392_20398,output_checker20393_20399){
return (function explicit_schema_key_map(G__20394){var validate__10325__auto__ = ufv___20395.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20394], null);var temp__4126__auto___20401 = input_checker20392_20398.call(null,args__10326__auto___20400);if(cljs.core.truth_(temp__4126__auto___20401))
{var error__10327__auto___20402 = temp__4126__auto___20401;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10327__auto___20402)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20391_20397,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20400,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20402], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var s = G__20394;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20403 = output_checker20393_20399.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20403))
{var error__10327__auto___20404 = temp__4126__auto___20403;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10327__auto___20404)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20390_20396,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20404], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20395,output_schema20390_20396,input_schema20391_20397,input_checker20392_20398,output_checker20393_20399))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20390_20396,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20391_20397], null)));
var ufv___20410 = schema.utils.use_fn_validation;var output_schema20405_20411 = schema.core.Any;var input_schema20406_20412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20407_20413 = schema.core.checker.call(null,input_schema20406_20412);var output_checker20408_20414 = schema.core.checker.call(null,output_schema20405_20411);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20410,output_schema20405_20411,input_schema20406_20412,input_checker20407_20413,output_checker20408_20414){
return (function split_schema_keys(G__20409){var validate__10325__auto__ = ufv___20410.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20409], null);var temp__4126__auto___20416 = input_checker20407_20413.call(null,args__10326__auto___20415);if(cljs.core.truth_(temp__4126__auto___20416))
{var error__10327__auto___20417 = temp__4126__auto___20416;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10327__auto___20417)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20406_20412,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20415,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20417], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var s = G__20409;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20418 = output_checker20408_20414.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20418))
{var error__10327__auto___20419 = temp__4126__auto___20418;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10327__auto___20419)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20405_20411,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20419], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20410,output_schema20405_20411,input_schema20406_20412,input_checker20407_20413,output_checker20408_20414))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20405_20411,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20406_20412], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20423){var vec__20424 = p__20423;var k = cljs.core.nth.call(null,vec__20424,(0),null);var v = cljs.core.nth.call(null,vec__20424,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__20425 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__20425,(0),null);var ov = cljs.core.nth.call(null,vec__20425,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__20426){
var key_project = cljs.core.first(arglist__20426);
arglist__20426 = cljs.core.next(arglist__20426);
var key_combine = cljs.core.first(arglist__20426);
arglist__20426 = cljs.core.next(arglist__20426);
var val_combine = cljs.core.first(arglist__20426);
var maps = cljs.core.rest(arglist__20426);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___20434 = schema.utils.use_fn_validation;var output_schema20428_20435 = plumbing.fnk.schema.InputSchema;var input_schema20429_20436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker20430_20437 = schema.core.checker.call(null,input_schema20429_20436);var output_checker20431_20438 = schema.core.checker.call(null,output_schema20428_20435);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20434,output_schema20428_20435,input_schema20429_20436,input_checker20430_20437,output_checker20431_20438){
return (function union_input_schemata(G__20432,G__20433){var validate__10325__auto__ = ufv___20434.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20432,G__20433], null);var temp__4126__auto___20440 = input_checker20430_20437.call(null,args__10326__auto___20439);if(cljs.core.truth_(temp__4126__auto___20440))
{var error__10327__auto___20441 = temp__4126__auto___20440;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10327__auto___20441)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20429_20436,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20439,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20441], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var i1 = G__20432;var i2 = G__20433;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10325__auto__,ufv___20434,output_schema20428_20435,input_schema20429_20436,input_checker20430_20437,output_checker20431_20438){
return (function (p1__20427_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__20427_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__20427_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10325__auto__,ufv___20434,output_schema20428_20435,input_schema20429_20436,input_checker20430_20437,output_checker20431_20438))
,((function (validate__10325__auto__,ufv___20434,output_schema20428_20435,input_schema20429_20436,input_checker20430_20437,output_checker20431_20438){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__10325__auto__,ufv___20434,output_schema20428_20435,input_schema20429_20436,input_checker20430_20437,output_checker20431_20438))
,((function (validate__10325__auto__,ufv___20434,output_schema20428_20435,input_schema20429_20436,input_checker20430_20437,output_checker20431_20438){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10325__auto__,ufv___20434,output_schema20428_20435,input_schema20429_20436,input_checker20430_20437,output_checker20431_20438))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20442 = output_checker20431_20438.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20442))
{var error__10327__auto___20443 = temp__4126__auto___20442;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10327__auto___20443)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20428_20435,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20443], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20434,output_schema20428_20435,input_schema20429_20436,input_checker20430_20437,output_checker20431_20438))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20428_20435,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20429_20436], null)));
var ufv___20449 = schema.utils.use_fn_validation;var output_schema20444_20450 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema20445_20451 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker20446_20452 = schema.core.checker.call(null,input_schema20445_20451);var output_checker20447_20453 = schema.core.checker.call(null,output_schema20444_20450);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20449,output_schema20444_20450,input_schema20445_20451,input_checker20446_20452,output_checker20447_20453){
return (function required_toplevel_keys(G__20448){var validate__10325__auto__ = ufv___20449.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20448], null);var temp__4126__auto___20455 = input_checker20446_20452.call(null,args__10326__auto___20454);if(cljs.core.truth_(temp__4126__auto___20455))
{var error__10327__auto___20456 = temp__4126__auto___20455;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10327__auto___20456)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20445_20451,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20454,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20456], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var input_schema = G__20448;while(true){
return cljs.core.keep.call(null,((function (validate__10325__auto__,ufv___20449,output_schema20444_20450,input_schema20445_20451,input_checker20446_20452,output_checker20447_20453){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__10325__auto__,ufv___20449,output_schema20444_20450,input_schema20445_20451,input_checker20446_20452,output_checker20447_20453))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20457 = output_checker20447_20453.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20457))
{var error__10327__auto___20458 = temp__4126__auto___20457;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10327__auto___20458)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20444_20450,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20458], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20449,output_schema20444_20450,input_schema20445_20451,input_checker20446_20452,output_checker20447_20453))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20444_20450,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20445_20451], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = (function iter__20467(s__20468){return (new cljs.core.LazySeq(null,(function (){var s__20468__$1 = s__20468;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20468__$1);if(temp__4126__auto__)
{var s__20468__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20468__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__20468__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__20470 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__20469 = (0);while(true){
if((i__20469 < size__4280__auto__))
{var vec__20473 = cljs.core._nth.call(null,c__4279__auto__,i__20469);var k = cljs.core.nth.call(null,vec__20473,(0),null);var v = cljs.core.nth.call(null,vec__20473,(1),null);cljs.core.chunk_append.call(null,b__20470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__20475 = (i__20469 + (1));
i__20469 = G__20475;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20470),iter__20467.call(null,cljs.core.chunk_rest.call(null,s__20468__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20470),null);
}
} else
{var vec__20474 = cljs.core.first.call(null,s__20468__$2);var k = cljs.core.nth.call(null,vec__20474,(0),null);var v = cljs.core.nth.call(null,vec__20474,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__20467.call(null,cljs.core.rest.call(null,s__20468__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4281__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = (function iter__20484(s__20485){return (new cljs.core.LazySeq(null,(function (){var s__20485__$1 = s__20485;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20485__$1);if(temp__4126__auto__)
{var s__20485__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20485__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__20485__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__20487 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__20486 = (0);while(true){
if((i__20486 < size__4280__auto__))
{var vec__20490 = cljs.core._nth.call(null,c__4279__auto__,i__20486);var k = cljs.core.nth.call(null,vec__20490,(0),null);var v = cljs.core.nth.call(null,vec__20490,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__20487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__20492 = (i__20486 + (1));
i__20486 = G__20492;
continue;
}
} else
{{
var G__20493 = (i__20486 + (1));
i__20486 = G__20493;
continue;
}
}
} else
{{
var G__20494 = (i__20486 + (1));
i__20486 = G__20494;
continue;
}
}
} else
{{
var G__20495 = (i__20486 + (1));
i__20486 = G__20495;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20487),iter__20484.call(null,cljs.core.chunk_rest.call(null,s__20485__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20487),null);
}
} else
{var vec__20491 = cljs.core.first.call(null,s__20485__$2);var k = cljs.core.nth.call(null,vec__20491,(0),null);var v = cljs.core.nth.call(null,vec__20491,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__20484.call(null,cljs.core.rest.call(null,s__20485__$2)));
} else
{{
var G__20496 = cljs.core.rest.call(null,s__20485__$2);
s__20485__$1 = G__20496;
continue;
}
}
} else
{{
var G__20497 = cljs.core.rest.call(null,s__20485__$2);
s__20485__$1 = G__20497;
continue;
}
}
} else
{{
var G__20498 = cljs.core.rest.call(null,s__20485__$2);
s__20485__$1 = G__20498;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4281__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___20521 = schema.utils.use_fn_validation;var output_schema20499_20522 = schema.core.Any;var input_schema20500_20523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20501_20524 = schema.core.checker.call(null,input_schema20500_20523);var output_checker20502_20525 = schema.core.checker.call(null,output_schema20499_20522);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___20521,output_schema20499_20522,input_schema20500_20523,input_checker20501_20524,output_checker20502_20525){
return (function compose_schemata(G__20503,G__20504){var validate__10325__auto__ = true;if(validate__10325__auto__)
{var args__10326__auto___20526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20503,G__20504], null);var temp__4126__auto___20527 = input_checker20501_20524.call(null,args__10326__auto___20526);if(cljs.core.truth_(temp__4126__auto___20527))
{var error__10327__auto___20528 = temp__4126__auto___20527;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10327__auto___20528)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20500_20523,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20526,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20528], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__20515 = G__20503;var vec__20517 = G__20515;var i2 = cljs.core.nth.call(null,vec__20517,(0),null);var o2 = cljs.core.nth.call(null,vec__20517,(1),null);var G__20516 = G__20504;var vec__20518 = G__20516;var i1 = cljs.core.nth.call(null,vec__20518,(0),null);var o1 = cljs.core.nth.call(null,vec__20518,(1),null);var G__20515__$1 = G__20515;var G__20516__$1 = G__20516;while(true){
var vec__20519 = G__20515__$1;var i2__$1 = cljs.core.nth.call(null,vec__20519,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20519,(1),null);var vec__20520 = G__20516__$1;var i1__$1 = cljs.core.nth.call(null,vec__20520,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20520,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10325__auto__)
{var temp__4126__auto___20529 = output_checker20502_20525.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20529))
{var error__10327__auto___20530 = temp__4126__auto___20529;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10327__auto___20530)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20499_20522,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20530], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20521,output_schema20499_20522,input_schema20500_20523,input_checker20501_20524,output_checker20502_20525))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20499_20522,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20500_20523], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___20609 = schema.utils.use_fn_validation;var output_schema20531_20610 = schema.core.Any;var input_schema20532_20611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker20533_20612 = schema.core.checker.call(null,input_schema20532_20611);var output_checker20534_20613 = schema.core.checker.call(null,output_schema20531_20610);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613){
return (function split_schema(G__20535,G__20536){var validate__10325__auto__ = ufv___20609.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20535,G__20536], null);var temp__4126__auto___20615 = input_checker20533_20612.call(null,args__10326__auto___20614);if(cljs.core.truth_(temp__4126__auto___20615))
{var error__10327__auto___20616 = temp__4126__auto___20615;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10327__auto___20616)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20532_20611,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20614,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20616], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var s = G__20535;var ks = G__20536;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4281__auto__ = ((function (ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613){
return (function iter__20573(s__20574){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613){
return (function (){var s__20574__$1 = s__20574;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20574__$1);if(temp__4126__auto__)
{var s__20574__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20574__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__20574__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__20576 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__20575 = (0);while(true){
if((i__20575 < size__4280__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4279__auto__,i__20575);cljs.core.chunk_append.call(null,b__20576,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = ((function (i__20575,in_QMARK_,c__4279__auto__,size__4280__auto__,b__20576,s__20574__$2,temp__4126__auto__,ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613){
return (function iter__20593(s__20594){return (new cljs.core.LazySeq(null,((function (i__20575,in_QMARK_,c__4279__auto__,size__4280__auto__,b__20576,s__20574__$2,temp__4126__auto__,ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613){
return (function (){var s__20594__$1 = s__20594;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20594__$1);if(temp__4126__auto____$1)
{var s__20594__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20594__$2))
{var c__4279__auto____$1 = cljs.core.chunk_first.call(null,s__20594__$2);var size__4280__auto____$1 = cljs.core.count.call(null,c__4279__auto____$1);var b__20596 = cljs.core.chunk_buffer.call(null,size__4280__auto____$1);if((function (){var i__20595 = (0);while(true){
if((i__20595 < size__4280__auto____$1))
{var vec__20599 = cljs.core._nth.call(null,c__4279__auto____$1,i__20595);var k = cljs.core.nth.call(null,vec__20599,(0),null);var v = cljs.core.nth.call(null,vec__20599,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20617 = (i__20595 + (1));
i__20595 = G__20617;
continue;
}
} else
{{
var G__20618 = (i__20595 + (1));
i__20595 = G__20618;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20596),iter__20593.call(null,cljs.core.chunk_rest.call(null,s__20594__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20596),null);
}
} else
{var vec__20600 = cljs.core.first.call(null,s__20594__$2);var k = cljs.core.nth.call(null,vec__20600,(0),null);var v = cljs.core.nth.call(null,vec__20600,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20593.call(null,cljs.core.rest.call(null,s__20594__$2)));
} else
{{
var G__20619 = cljs.core.rest.call(null,s__20594__$2);
s__20594__$1 = G__20619;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__20575,in_QMARK_,c__4279__auto__,size__4280__auto__,b__20576,s__20574__$2,temp__4126__auto__,ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613))
,null,null));
});})(i__20575,in_QMARK_,c__4279__auto__,size__4280__auto__,b__20576,s__20574__$2,temp__4126__auto__,ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613))
;return iter__4281__auto__.call(null,s);
})()));
{
var G__20620 = (i__20575 + (1));
i__20575 = G__20620;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20576),iter__20573.call(null,cljs.core.chunk_rest.call(null,s__20574__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20576),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__20574__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = ((function (in_QMARK_,s__20574__$2,temp__4126__auto__,ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613){
return (function iter__20601(s__20602){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20574__$2,temp__4126__auto__,ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613){
return (function (){var s__20602__$1 = s__20602;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20602__$1);if(temp__4126__auto____$1)
{var s__20602__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20602__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__20602__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__20604 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__20603 = (0);while(true){
if((i__20603 < size__4280__auto__))
{var vec__20607 = cljs.core._nth.call(null,c__4279__auto__,i__20603);var k = cljs.core.nth.call(null,vec__20607,(0),null);var v = cljs.core.nth.call(null,vec__20607,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20621 = (i__20603 + (1));
i__20603 = G__20621;
continue;
}
} else
{{
var G__20622 = (i__20603 + (1));
i__20603 = G__20622;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20604),iter__20601.call(null,cljs.core.chunk_rest.call(null,s__20602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20604),null);
}
} else
{var vec__20608 = cljs.core.first.call(null,s__20602__$2);var k = cljs.core.nth.call(null,vec__20608,(0),null);var v = cljs.core.nth.call(null,vec__20608,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20601.call(null,cljs.core.rest.call(null,s__20602__$2)));
} else
{{
var G__20623 = cljs.core.rest.call(null,s__20602__$2);
s__20602__$1 = G__20623;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__20574__$2,temp__4126__auto__,ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613))
,null,null));
});})(in_QMARK_,s__20574__$2,temp__4126__auto__,ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613))
;return iter__4281__auto__.call(null,s);
})()),iter__20573.call(null,cljs.core.rest.call(null,s__20574__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613))
,null,null));
});})(ks__$1,validate__10325__auto__,ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613))
;return iter__4281__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20624 = output_checker20534_20613.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20624))
{var error__10327__auto___20625 = temp__4126__auto___20624;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10327__auto___20625)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20531_20610,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20625], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20609,output_schema20531_20610,input_schema20532_20611,input_checker20533_20612,output_checker20534_20613))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20531_20610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20532_20611], null)));
var ufv___20656 = schema.utils.use_fn_validation;var output_schema20626_20657 = plumbing.fnk.schema.GraphIOSchemata;var input_schema20627_20658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20628_20659 = schema.core.checker.call(null,input_schema20627_20658);var output_checker20629_20660 = schema.core.checker.call(null,output_schema20626_20657);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20656,output_schema20626_20657,input_schema20627_20658,input_checker20628_20659,output_checker20629_20660){
return (function sequence_schemata(G__20630,G__20631){var validate__10325__auto__ = ufv___20656.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20630,G__20631], null);var temp__4126__auto___20662 = input_checker20628_20659.call(null,args__10326__auto___20661);if(cljs.core.truth_(temp__4126__auto___20662))
{var error__10327__auto___20663 = temp__4126__auto___20662;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10327__auto___20663)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20627_20658,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20661,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20663], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__20647 = G__20630;var vec__20649 = G__20647;var i1 = cljs.core.nth.call(null,vec__20649,(0),null);var o1 = cljs.core.nth.call(null,vec__20649,(1),null);var G__20648 = G__20631;var vec__20650 = G__20648;var k = cljs.core.nth.call(null,vec__20650,(0),null);var vec__20651 = cljs.core.nth.call(null,vec__20650,(1),null);var i2 = cljs.core.nth.call(null,vec__20651,(0),null);var o2 = cljs.core.nth.call(null,vec__20651,(1),null);var G__20647__$1 = G__20647;var G__20648__$1 = G__20648;while(true){
var vec__20652 = G__20647__$1;var i1__$1 = cljs.core.nth.call(null,vec__20652,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20652,(1),null);var vec__20653 = G__20648__$1;var k__$1 = cljs.core.nth.call(null,vec__20653,(0),null);var vec__20654 = cljs.core.nth.call(null,vec__20653,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__20654,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20654,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__20655 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__20655,(0),null);var unused = cljs.core.nth.call(null,vec__20655,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20664 = output_checker20629_20660.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20664))
{var error__10327__auto___20665 = temp__4126__auto___20664;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10327__auto___20665)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20626_20657,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20665], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20656,output_schema20626_20657,input_schema20627_20658,input_checker20628_20659,output_checker20629_20660))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20626_20657,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20627_20658], null)));

//# sourceMappingURL=schema.js.map