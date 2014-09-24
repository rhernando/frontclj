// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__15169__15170__auto__){var G__19416 = p1__15169__15170__auto__;if(G__19416)
{var bit__4206__auto__ = null;if(cljs.core.truth_((function (){var or__3556__auto__ = bit__4206__auto__;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return G__19416.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__19416.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19416);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19416);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__19417_SHARP_){return (cljs.core.val.call(null,p1__19417_SHARP_) > (1));
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
var vec__19419 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__19419,(0),null);var v = cljs.core.nth.call(null,vec__19419,(1),null);var p = vec__19419;if(cljs.core.truth_(p))
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
var ufv___19425 = schema.utils.use_fn_validation;var output_schema19420_19426 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema19421_19427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker19422_19428 = schema.core.checker.call(null,input_schema19421_19427);var output_checker19423_19429 = schema.core.checker.call(null,output_schema19420_19426);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19425,output_schema19420_19426,input_schema19421_19427,input_checker19422_19428,output_checker19423_19429){
return (function unwrap_schema_form_key(G__19424){var validate__15139__auto__ = ufv___19425.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19424], null);var temp__4126__auto___19431 = input_checker19422_19428.call(null,args__15140__auto___19430);if(cljs.core.truth_(temp__4126__auto___19431))
{var error__15141__auto___19432 = temp__4126__auto___19431;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__15141__auto___19432)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19421_19427,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19430,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19432], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var k = G__19424;while(true){
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
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19433 = output_checker19423_19429.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19433))
{var error__15141__auto___19434 = temp__4126__auto___19433;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__15141__auto___19434)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19420_19426,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19434], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19425,output_schema19420_19426,input_schema19421_19427,input_checker19422_19428,output_checker19423_19429))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema19420_19426,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19421_19427], null)));
var ufv___19440 = schema.utils.use_fn_validation;var output_schema19435_19441 = schema.core.Any;var input_schema19436_19442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19437_19443 = schema.core.checker.call(null,input_schema19436_19442);var output_checker19438_19444 = schema.core.checker.call(null,output_schema19435_19441);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19440,output_schema19435_19441,input_schema19436_19442,input_checker19437_19443,output_checker19438_19444){
return (function explicit_schema_key_map(G__19439){var validate__15139__auto__ = ufv___19440.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19439], null);var temp__4126__auto___19446 = input_checker19437_19443.call(null,args__15140__auto___19445);if(cljs.core.truth_(temp__4126__auto___19446))
{var error__15141__auto___19447 = temp__4126__auto___19446;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__15141__auto___19447)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19436_19442,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19445,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19447], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var s = G__19439;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19448 = output_checker19438_19444.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19448))
{var error__15141__auto___19449 = temp__4126__auto___19448;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__15141__auto___19449)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19435_19441,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19449], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19440,output_schema19435_19441,input_schema19436_19442,input_checker19437_19443,output_checker19438_19444))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema19435_19441,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19436_19442], null)));
var ufv___19455 = schema.utils.use_fn_validation;var output_schema19450_19456 = schema.core.Any;var input_schema19451_19457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19452_19458 = schema.core.checker.call(null,input_schema19451_19457);var output_checker19453_19459 = schema.core.checker.call(null,output_schema19450_19456);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19455,output_schema19450_19456,input_schema19451_19457,input_checker19452_19458,output_checker19453_19459){
return (function split_schema_keys(G__19454){var validate__15139__auto__ = ufv___19455.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19454], null);var temp__4126__auto___19461 = input_checker19452_19458.call(null,args__15140__auto___19460);if(cljs.core.truth_(temp__4126__auto___19461))
{var error__15141__auto___19462 = temp__4126__auto___19461;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__15141__auto___19462)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19451_19457,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19460,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19462], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var s = G__19454;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19463 = output_checker19453_19459.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19463))
{var error__15141__auto___19464 = temp__4126__auto___19463;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__15141__auto___19464)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19450_19456,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19464], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19455,output_schema19450_19456,input_schema19451_19457,input_checker19452_19458,output_checker19453_19459))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema19450_19456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19451_19457], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__19468){var vec__19469 = p__19468;var k = cljs.core.nth.call(null,vec__19469,(0),null);var v = cljs.core.nth.call(null,vec__19469,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__19470 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__19470,(0),null);var ov = cljs.core.nth.call(null,vec__19470,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__19471){
var key_project = cljs.core.first(arglist__19471);
arglist__19471 = cljs.core.next(arglist__19471);
var key_combine = cljs.core.first(arglist__19471);
arglist__19471 = cljs.core.next(arglist__19471);
var val_combine = cljs.core.first(arglist__19471);
var maps = cljs.core.rest(arglist__19471);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___19479 = schema.utils.use_fn_validation;var output_schema19473_19480 = plumbing.fnk.schema.InputSchema;var input_schema19474_19481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker19475_19482 = schema.core.checker.call(null,input_schema19474_19481);var output_checker19476_19483 = schema.core.checker.call(null,output_schema19473_19480);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19479,output_schema19473_19480,input_schema19474_19481,input_checker19475_19482,output_checker19476_19483){
return (function union_input_schemata(G__19477,G__19478){var validate__15139__auto__ = ufv___19479.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19477,G__19478], null);var temp__4126__auto___19485 = input_checker19475_19482.call(null,args__15140__auto___19484);if(cljs.core.truth_(temp__4126__auto___19485))
{var error__15141__auto___19486 = temp__4126__auto___19485;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__15141__auto___19486)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19474_19481,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19484,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19486], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var i1 = G__19477;var i2 = G__19478;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__15139__auto__,ufv___19479,output_schema19473_19480,input_schema19474_19481,input_checker19475_19482,output_checker19476_19483){
return (function (p1__19472_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__19472_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__19472_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__15139__auto__,ufv___19479,output_schema19473_19480,input_schema19474_19481,input_checker19475_19482,output_checker19476_19483))
,((function (validate__15139__auto__,ufv___19479,output_schema19473_19480,input_schema19474_19481,input_checker19475_19482,output_checker19476_19483){
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
});})(validate__15139__auto__,ufv___19479,output_schema19473_19480,input_schema19474_19481,input_checker19475_19482,output_checker19476_19483))
,((function (validate__15139__auto__,ufv___19479,output_schema19473_19480,input_schema19474_19481,input_checker19475_19482,output_checker19476_19483){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__15139__auto__,ufv___19479,output_schema19473_19480,input_schema19474_19481,input_checker19475_19482,output_checker19476_19483))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19487 = output_checker19476_19483.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19487))
{var error__15141__auto___19488 = temp__4126__auto___19487;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__15141__auto___19488)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19473_19480,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19488], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19479,output_schema19473_19480,input_schema19474_19481,input_checker19475_19482,output_checker19476_19483))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema19473_19480,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19474_19481], null)));
var ufv___19494 = schema.utils.use_fn_validation;var output_schema19489_19495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema19490_19496 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker19491_19497 = schema.core.checker.call(null,input_schema19490_19496);var output_checker19492_19498 = schema.core.checker.call(null,output_schema19489_19495);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19494,output_schema19489_19495,input_schema19490_19496,input_checker19491_19497,output_checker19492_19498){
return (function required_toplevel_keys(G__19493){var validate__15139__auto__ = ufv___19494.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19493], null);var temp__4126__auto___19500 = input_checker19491_19497.call(null,args__15140__auto___19499);if(cljs.core.truth_(temp__4126__auto___19500))
{var error__15141__auto___19501 = temp__4126__auto___19500;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__15141__auto___19501)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19490_19496,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19499,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19501], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var input_schema = G__19493;while(true){
return cljs.core.keep.call(null,((function (validate__15139__auto__,ufv___19494,output_schema19489_19495,input_schema19490_19496,input_checker19491_19497,output_checker19492_19498){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__15139__auto__,ufv___19494,output_schema19489_19495,input_schema19490_19496,input_checker19491_19497,output_checker19492_19498))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19502 = output_checker19492_19498.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19502))
{var error__15141__auto___19503 = temp__4126__auto___19502;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__15141__auto___19503)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19489_19495,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19503], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19494,output_schema19489_19495,input_schema19490_19496,input_checker19491_19497,output_checker19492_19498))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema19489_19495,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19490_19496], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = (function iter__19512(s__19513){return (new cljs.core.LazySeq(null,(function (){var s__19513__$1 = s__19513;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19513__$1);if(temp__4126__auto__)
{var s__19513__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19513__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__19513__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__19515 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__19514 = (0);while(true){
if((i__19514 < size__4280__auto__))
{var vec__19518 = cljs.core._nth.call(null,c__4279__auto__,i__19514);var k = cljs.core.nth.call(null,vec__19518,(0),null);var v = cljs.core.nth.call(null,vec__19518,(1),null);cljs.core.chunk_append.call(null,b__19515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__19520 = (i__19514 + (1));
i__19514 = G__19520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19515),iter__19512.call(null,cljs.core.chunk_rest.call(null,s__19513__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19515),null);
}
} else
{var vec__19519 = cljs.core.first.call(null,s__19513__$2);var k = cljs.core.nth.call(null,vec__19519,(0),null);var v = cljs.core.nth.call(null,vec__19519,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__19512.call(null,cljs.core.rest.call(null,s__19513__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = (function iter__19529(s__19530){return (new cljs.core.LazySeq(null,(function (){var s__19530__$1 = s__19530;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19530__$1);if(temp__4126__auto__)
{var s__19530__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19530__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__19530__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__19532 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__19531 = (0);while(true){
if((i__19531 < size__4280__auto__))
{var vec__19535 = cljs.core._nth.call(null,c__4279__auto__,i__19531);var k = cljs.core.nth.call(null,vec__19535,(0),null);var v = cljs.core.nth.call(null,vec__19535,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__19532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__19537 = (i__19531 + (1));
i__19531 = G__19537;
continue;
}
} else
{{
var G__19538 = (i__19531 + (1));
i__19531 = G__19538;
continue;
}
}
} else
{{
var G__19539 = (i__19531 + (1));
i__19531 = G__19539;
continue;
}
}
} else
{{
var G__19540 = (i__19531 + (1));
i__19531 = G__19540;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19532),iter__19529.call(null,cljs.core.chunk_rest.call(null,s__19530__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19532),null);
}
} else
{var vec__19536 = cljs.core.first.call(null,s__19530__$2);var k = cljs.core.nth.call(null,vec__19536,(0),null);var v = cljs.core.nth.call(null,vec__19536,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__19529.call(null,cljs.core.rest.call(null,s__19530__$2)));
} else
{{
var G__19541 = cljs.core.rest.call(null,s__19530__$2);
s__19530__$1 = G__19541;
continue;
}
}
} else
{{
var G__19542 = cljs.core.rest.call(null,s__19530__$2);
s__19530__$1 = G__19542;
continue;
}
}
} else
{{
var G__19543 = cljs.core.rest.call(null,s__19530__$2);
s__19530__$1 = G__19543;
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
var ufv___19566 = schema.utils.use_fn_validation;var output_schema19544_19567 = schema.core.Any;var input_schema19545_19568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19546_19569 = schema.core.checker.call(null,input_schema19545_19568);var output_checker19547_19570 = schema.core.checker.call(null,output_schema19544_19567);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___19566,output_schema19544_19567,input_schema19545_19568,input_checker19546_19569,output_checker19547_19570){
return (function compose_schemata(G__19548,G__19549){var validate__15139__auto__ = true;if(validate__15139__auto__)
{var args__15140__auto___19571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19548,G__19549], null);var temp__4126__auto___19572 = input_checker19546_19569.call(null,args__15140__auto___19571);if(cljs.core.truth_(temp__4126__auto___19572))
{var error__15141__auto___19573 = temp__4126__auto___19572;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__15141__auto___19573)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19545_19568,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19571,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19573], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var G__19560 = G__19548;var vec__19562 = G__19560;var i2 = cljs.core.nth.call(null,vec__19562,(0),null);var o2 = cljs.core.nth.call(null,vec__19562,(1),null);var G__19561 = G__19549;var vec__19563 = G__19561;var i1 = cljs.core.nth.call(null,vec__19563,(0),null);var o1 = cljs.core.nth.call(null,vec__19563,(1),null);var G__19560__$1 = G__19560;var G__19561__$1 = G__19561;while(true){
var vec__19564 = G__19560__$1;var i2__$1 = cljs.core.nth.call(null,vec__19564,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19564,(1),null);var vec__19565 = G__19561__$1;var i1__$1 = cljs.core.nth.call(null,vec__19565,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19565,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__15139__auto__)
{var temp__4126__auto___19574 = output_checker19547_19570.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19574))
{var error__15141__auto___19575 = temp__4126__auto___19574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__15141__auto___19575)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19544_19567,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19575], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19566,output_schema19544_19567,input_schema19545_19568,input_checker19546_19569,output_checker19547_19570))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema19544_19567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19545_19568], null)));
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
var ufv___19654 = schema.utils.use_fn_validation;var output_schema19576_19655 = schema.core.Any;var input_schema19577_19656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker19578_19657 = schema.core.checker.call(null,input_schema19577_19656);var output_checker19579_19658 = schema.core.checker.call(null,output_schema19576_19655);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658){
return (function split_schema(G__19580,G__19581){var validate__15139__auto__ = ufv___19654.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19580,G__19581], null);var temp__4126__auto___19660 = input_checker19578_19657.call(null,args__15140__auto___19659);if(cljs.core.truth_(temp__4126__auto___19660))
{var error__15141__auto___19661 = temp__4126__auto___19660;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__15141__auto___19661)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19577_19656,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19659,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19661], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var s = G__19580;var ks = G__19581;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4281__auto__ = ((function (ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658){
return (function iter__19618(s__19619){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658){
return (function (){var s__19619__$1 = s__19619;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19619__$1);if(temp__4126__auto__)
{var s__19619__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19619__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__19619__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__19621 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__19620 = (0);while(true){
if((i__19620 < size__4280__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4279__auto__,i__19620);cljs.core.chunk_append.call(null,b__19621,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = ((function (i__19620,in_QMARK_,c__4279__auto__,size__4280__auto__,b__19621,s__19619__$2,temp__4126__auto__,ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658){
return (function iter__19638(s__19639){return (new cljs.core.LazySeq(null,((function (i__19620,in_QMARK_,c__4279__auto__,size__4280__auto__,b__19621,s__19619__$2,temp__4126__auto__,ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658){
return (function (){var s__19639__$1 = s__19639;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19639__$1);if(temp__4126__auto____$1)
{var s__19639__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19639__$2))
{var c__4279__auto____$1 = cljs.core.chunk_first.call(null,s__19639__$2);var size__4280__auto____$1 = cljs.core.count.call(null,c__4279__auto____$1);var b__19641 = cljs.core.chunk_buffer.call(null,size__4280__auto____$1);if((function (){var i__19640 = (0);while(true){
if((i__19640 < size__4280__auto____$1))
{var vec__19644 = cljs.core._nth.call(null,c__4279__auto____$1,i__19640);var k = cljs.core.nth.call(null,vec__19644,(0),null);var v = cljs.core.nth.call(null,vec__19644,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19662 = (i__19640 + (1));
i__19640 = G__19662;
continue;
}
} else
{{
var G__19663 = (i__19640 + (1));
i__19640 = G__19663;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19641),iter__19638.call(null,cljs.core.chunk_rest.call(null,s__19639__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19641),null);
}
} else
{var vec__19645 = cljs.core.first.call(null,s__19639__$2);var k = cljs.core.nth.call(null,vec__19645,(0),null);var v = cljs.core.nth.call(null,vec__19645,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19638.call(null,cljs.core.rest.call(null,s__19639__$2)));
} else
{{
var G__19664 = cljs.core.rest.call(null,s__19639__$2);
s__19639__$1 = G__19664;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__19620,in_QMARK_,c__4279__auto__,size__4280__auto__,b__19621,s__19619__$2,temp__4126__auto__,ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658))
,null,null));
});})(i__19620,in_QMARK_,c__4279__auto__,size__4280__auto__,b__19621,s__19619__$2,temp__4126__auto__,ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658))
;return iter__4281__auto__.call(null,s);
})()));
{
var G__19665 = (i__19620 + (1));
i__19620 = G__19665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19621),iter__19618.call(null,cljs.core.chunk_rest.call(null,s__19619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19621),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__19619__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = ((function (in_QMARK_,s__19619__$2,temp__4126__auto__,ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658){
return (function iter__19646(s__19647){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__19619__$2,temp__4126__auto__,ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658){
return (function (){var s__19647__$1 = s__19647;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19647__$1);if(temp__4126__auto____$1)
{var s__19647__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19647__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__19647__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__19649 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__19648 = (0);while(true){
if((i__19648 < size__4280__auto__))
{var vec__19652 = cljs.core._nth.call(null,c__4279__auto__,i__19648);var k = cljs.core.nth.call(null,vec__19652,(0),null);var v = cljs.core.nth.call(null,vec__19652,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19649,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19666 = (i__19648 + (1));
i__19648 = G__19666;
continue;
}
} else
{{
var G__19667 = (i__19648 + (1));
i__19648 = G__19667;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19649),iter__19646.call(null,cljs.core.chunk_rest.call(null,s__19647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19649),null);
}
} else
{var vec__19653 = cljs.core.first.call(null,s__19647__$2);var k = cljs.core.nth.call(null,vec__19653,(0),null);var v = cljs.core.nth.call(null,vec__19653,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19646.call(null,cljs.core.rest.call(null,s__19647__$2)));
} else
{{
var G__19668 = cljs.core.rest.call(null,s__19647__$2);
s__19647__$1 = G__19668;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__19619__$2,temp__4126__auto__,ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658))
,null,null));
});})(in_QMARK_,s__19619__$2,temp__4126__auto__,ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658))
;return iter__4281__auto__.call(null,s);
})()),iter__19618.call(null,cljs.core.rest.call(null,s__19619__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658))
,null,null));
});})(ks__$1,validate__15139__auto__,ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658))
;return iter__4281__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19669 = output_checker19579_19658.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19669))
{var error__15141__auto___19670 = temp__4126__auto___19669;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__15141__auto___19670)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19576_19655,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19670], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19654,output_schema19576_19655,input_schema19577_19656,input_checker19578_19657,output_checker19579_19658))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema19576_19655,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19577_19656], null)));
var ufv___19701 = schema.utils.use_fn_validation;var output_schema19671_19702 = plumbing.fnk.schema.GraphIOSchemata;var input_schema19672_19703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19673_19704 = schema.core.checker.call(null,input_schema19672_19703);var output_checker19674_19705 = schema.core.checker.call(null,output_schema19671_19702);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19701,output_schema19671_19702,input_schema19672_19703,input_checker19673_19704,output_checker19674_19705){
return (function sequence_schemata(G__19675,G__19676){var validate__15139__auto__ = ufv___19701.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19675,G__19676], null);var temp__4126__auto___19707 = input_checker19673_19704.call(null,args__15140__auto___19706);if(cljs.core.truth_(temp__4126__auto___19707))
{var error__15141__auto___19708 = temp__4126__auto___19707;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__15141__auto___19708)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19672_19703,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19706,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19708], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var G__19692 = G__19675;var vec__19694 = G__19692;var i1 = cljs.core.nth.call(null,vec__19694,(0),null);var o1 = cljs.core.nth.call(null,vec__19694,(1),null);var G__19693 = G__19676;var vec__19695 = G__19693;var k = cljs.core.nth.call(null,vec__19695,(0),null);var vec__19696 = cljs.core.nth.call(null,vec__19695,(1),null);var i2 = cljs.core.nth.call(null,vec__19696,(0),null);var o2 = cljs.core.nth.call(null,vec__19696,(1),null);var G__19692__$1 = G__19692;var G__19693__$1 = G__19693;while(true){
var vec__19697 = G__19692__$1;var i1__$1 = cljs.core.nth.call(null,vec__19697,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19697,(1),null);var vec__19698 = G__19693__$1;var k__$1 = cljs.core.nth.call(null,vec__19698,(0),null);var vec__19699 = cljs.core.nth.call(null,vec__19698,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__19699,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19699,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__19700 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__19700,(0),null);var unused = cljs.core.nth.call(null,vec__19700,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19709 = output_checker19674_19705.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19709))
{var error__15141__auto___19710 = temp__4126__auto___19709;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__15141__auto___19710)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19671_19702,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19710], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19701,output_schema19671_19702,input_schema19672_19703,input_checker19673_19704,output_checker19674_19705))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema19671_19702,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19672_19703], null)));

//# sourceMappingURL=schema.js.map