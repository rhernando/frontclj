// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__11643__11644__auto__){var G__15752 = p1__11643__11644__auto__;if(G__15752)
{var bit__4206__auto__ = null;if(cljs.core.truth_((function (){var or__3556__auto__ = bit__4206__auto__;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return G__15752.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__15752.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__15752);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__15752);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__15753_SHARP_){return (cljs.core.val.call(null,p1__15753_SHARP_) > (1));
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
var vec__15755 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__15755,(0),null);var v = cljs.core.nth.call(null,vec__15755,(1),null);var p = vec__15755;if(cljs.core.truth_(p))
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
var ufv___15761 = schema.utils.use_fn_validation;var output_schema15756_15762 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema15757_15763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker15758_15764 = schema.core.checker.call(null,input_schema15757_15763);var output_checker15759_15765 = schema.core.checker.call(null,output_schema15756_15762);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___15761,output_schema15756_15762,input_schema15757_15763,input_checker15758_15764,output_checker15759_15765){
return (function unwrap_schema_form_key(G__15760){var validate__11613__auto__ = ufv___15761.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___15766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15760], null);var temp__4126__auto___15767 = input_checker15758_15764.call(null,args__11614__auto___15766);if(cljs.core.truth_(temp__4126__auto___15767))
{var error__11615__auto___15768 = temp__4126__auto___15767;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__11615__auto___15768)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15757_15763,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___15766,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15768], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var k = G__15760;while(true){
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
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___15769 = output_checker15759_15765.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___15769))
{var error__11615__auto___15770 = temp__4126__auto___15769;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__11615__auto___15770)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15756_15762,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15770], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___15761,output_schema15756_15762,input_schema15757_15763,input_checker15758_15764,output_checker15759_15765))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema15756_15762,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15757_15763], null)));
var ufv___15776 = schema.utils.use_fn_validation;var output_schema15771_15777 = schema.core.Any;var input_schema15772_15778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker15773_15779 = schema.core.checker.call(null,input_schema15772_15778);var output_checker15774_15780 = schema.core.checker.call(null,output_schema15771_15777);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___15776,output_schema15771_15777,input_schema15772_15778,input_checker15773_15779,output_checker15774_15780){
return (function explicit_schema_key_map(G__15775){var validate__11613__auto__ = ufv___15776.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___15781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15775], null);var temp__4126__auto___15782 = input_checker15773_15779.call(null,args__11614__auto___15781);if(cljs.core.truth_(temp__4126__auto___15782))
{var error__11615__auto___15783 = temp__4126__auto___15782;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__11615__auto___15783)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15772_15778,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___15781,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15783], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var s = G__15775;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___15784 = output_checker15774_15780.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___15784))
{var error__11615__auto___15785 = temp__4126__auto___15784;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__11615__auto___15785)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15771_15777,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15785], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___15776,output_schema15771_15777,input_schema15772_15778,input_checker15773_15779,output_checker15774_15780))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema15771_15777,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15772_15778], null)));
var ufv___15791 = schema.utils.use_fn_validation;var output_schema15786_15792 = schema.core.Any;var input_schema15787_15793 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker15788_15794 = schema.core.checker.call(null,input_schema15787_15793);var output_checker15789_15795 = schema.core.checker.call(null,output_schema15786_15792);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___15791,output_schema15786_15792,input_schema15787_15793,input_checker15788_15794,output_checker15789_15795){
return (function split_schema_keys(G__15790){var validate__11613__auto__ = ufv___15791.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___15796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15790], null);var temp__4126__auto___15797 = input_checker15788_15794.call(null,args__11614__auto___15796);if(cljs.core.truth_(temp__4126__auto___15797))
{var error__11615__auto___15798 = temp__4126__auto___15797;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__11615__auto___15798)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15787_15793,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___15796,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15798], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var s = G__15790;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___15799 = output_checker15789_15795.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___15799))
{var error__11615__auto___15800 = temp__4126__auto___15799;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__11615__auto___15800)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15786_15792,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15800], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___15791,output_schema15786_15792,input_schema15787_15793,input_checker15788_15794,output_checker15789_15795))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema15786_15792,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15787_15793], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__15804){var vec__15805 = p__15804;var k = cljs.core.nth.call(null,vec__15805,(0),null);var v = cljs.core.nth.call(null,vec__15805,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__15806 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__15806,(0),null);var ov = cljs.core.nth.call(null,vec__15806,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__15807){
var key_project = cljs.core.first(arglist__15807);
arglist__15807 = cljs.core.next(arglist__15807);
var key_combine = cljs.core.first(arglist__15807);
arglist__15807 = cljs.core.next(arglist__15807);
var val_combine = cljs.core.first(arglist__15807);
var maps = cljs.core.rest(arglist__15807);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___15815 = schema.utils.use_fn_validation;var output_schema15809_15816 = plumbing.fnk.schema.InputSchema;var input_schema15810_15817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker15811_15818 = schema.core.checker.call(null,input_schema15810_15817);var output_checker15812_15819 = schema.core.checker.call(null,output_schema15809_15816);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___15815,output_schema15809_15816,input_schema15810_15817,input_checker15811_15818,output_checker15812_15819){
return (function union_input_schemata(G__15813,G__15814){var validate__11613__auto__ = ufv___15815.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___15820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15813,G__15814], null);var temp__4126__auto___15821 = input_checker15811_15818.call(null,args__11614__auto___15820);if(cljs.core.truth_(temp__4126__auto___15821))
{var error__11615__auto___15822 = temp__4126__auto___15821;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__11615__auto___15822)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15810_15817,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___15820,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15822], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var i1 = G__15813;var i2 = G__15814;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__11613__auto__,ufv___15815,output_schema15809_15816,input_schema15810_15817,input_checker15811_15818,output_checker15812_15819){
return (function (p1__15808_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__15808_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__15808_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__11613__auto__,ufv___15815,output_schema15809_15816,input_schema15810_15817,input_checker15811_15818,output_checker15812_15819))
,((function (validate__11613__auto__,ufv___15815,output_schema15809_15816,input_schema15810_15817,input_checker15811_15818,output_checker15812_15819){
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
});})(validate__11613__auto__,ufv___15815,output_schema15809_15816,input_schema15810_15817,input_checker15811_15818,output_checker15812_15819))
,((function (validate__11613__auto__,ufv___15815,output_schema15809_15816,input_schema15810_15817,input_checker15811_15818,output_checker15812_15819){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__11613__auto__,ufv___15815,output_schema15809_15816,input_schema15810_15817,input_checker15811_15818,output_checker15812_15819))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___15823 = output_checker15812_15819.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___15823))
{var error__11615__auto___15824 = temp__4126__auto___15823;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__11615__auto___15824)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15809_15816,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15824], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___15815,output_schema15809_15816,input_schema15810_15817,input_checker15811_15818,output_checker15812_15819))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema15809_15816,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15810_15817], null)));
var ufv___15830 = schema.utils.use_fn_validation;var output_schema15825_15831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema15826_15832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker15827_15833 = schema.core.checker.call(null,input_schema15826_15832);var output_checker15828_15834 = schema.core.checker.call(null,output_schema15825_15831);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___15830,output_schema15825_15831,input_schema15826_15832,input_checker15827_15833,output_checker15828_15834){
return (function required_toplevel_keys(G__15829){var validate__11613__auto__ = ufv___15830.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___15835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15829], null);var temp__4126__auto___15836 = input_checker15827_15833.call(null,args__11614__auto___15835);if(cljs.core.truth_(temp__4126__auto___15836))
{var error__11615__auto___15837 = temp__4126__auto___15836;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__11615__auto___15837)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15826_15832,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___15835,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15837], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var input_schema = G__15829;while(true){
return cljs.core.keep.call(null,((function (validate__11613__auto__,ufv___15830,output_schema15825_15831,input_schema15826_15832,input_checker15827_15833,output_checker15828_15834){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__11613__auto__,ufv___15830,output_schema15825_15831,input_schema15826_15832,input_checker15827_15833,output_checker15828_15834))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___15838 = output_checker15828_15834.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___15838))
{var error__11615__auto___15839 = temp__4126__auto___15838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__11615__auto___15839)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15825_15831,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15839], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___15830,output_schema15825_15831,input_schema15826_15832,input_checker15827_15833,output_checker15828_15834))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema15825_15831,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15826_15832], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = (function iter__15848(s__15849){return (new cljs.core.LazySeq(null,(function (){var s__15849__$1 = s__15849;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15849__$1);if(temp__4126__auto__)
{var s__15849__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15849__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__15849__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__15851 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__15850 = (0);while(true){
if((i__15850 < size__4280__auto__))
{var vec__15854 = cljs.core._nth.call(null,c__4279__auto__,i__15850);var k = cljs.core.nth.call(null,vec__15854,(0),null);var v = cljs.core.nth.call(null,vec__15854,(1),null);cljs.core.chunk_append.call(null,b__15851,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__15856 = (i__15850 + (1));
i__15850 = G__15856;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15851),iter__15848.call(null,cljs.core.chunk_rest.call(null,s__15849__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15851),null);
}
} else
{var vec__15855 = cljs.core.first.call(null,s__15849__$2);var k = cljs.core.nth.call(null,vec__15855,(0),null);var v = cljs.core.nth.call(null,vec__15855,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__15848.call(null,cljs.core.rest.call(null,s__15849__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = (function iter__15865(s__15866){return (new cljs.core.LazySeq(null,(function (){var s__15866__$1 = s__15866;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15866__$1);if(temp__4126__auto__)
{var s__15866__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15866__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__15866__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__15868 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__15867 = (0);while(true){
if((i__15867 < size__4280__auto__))
{var vec__15871 = cljs.core._nth.call(null,c__4279__auto__,i__15867);var k = cljs.core.nth.call(null,vec__15871,(0),null);var v = cljs.core.nth.call(null,vec__15871,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__15868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__15873 = (i__15867 + (1));
i__15867 = G__15873;
continue;
}
} else
{{
var G__15874 = (i__15867 + (1));
i__15867 = G__15874;
continue;
}
}
} else
{{
var G__15875 = (i__15867 + (1));
i__15867 = G__15875;
continue;
}
}
} else
{{
var G__15876 = (i__15867 + (1));
i__15867 = G__15876;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15868),iter__15865.call(null,cljs.core.chunk_rest.call(null,s__15866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15868),null);
}
} else
{var vec__15872 = cljs.core.first.call(null,s__15866__$2);var k = cljs.core.nth.call(null,vec__15872,(0),null);var v = cljs.core.nth.call(null,vec__15872,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__15865.call(null,cljs.core.rest.call(null,s__15866__$2)));
} else
{{
var G__15877 = cljs.core.rest.call(null,s__15866__$2);
s__15866__$1 = G__15877;
continue;
}
}
} else
{{
var G__15878 = cljs.core.rest.call(null,s__15866__$2);
s__15866__$1 = G__15878;
continue;
}
}
} else
{{
var G__15879 = cljs.core.rest.call(null,s__15866__$2);
s__15866__$1 = G__15879;
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
var ufv___15902 = schema.utils.use_fn_validation;var output_schema15880_15903 = schema.core.Any;var input_schema15881_15904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker15882_15905 = schema.core.checker.call(null,input_schema15881_15904);var output_checker15883_15906 = schema.core.checker.call(null,output_schema15880_15903);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___15902,output_schema15880_15903,input_schema15881_15904,input_checker15882_15905,output_checker15883_15906){
return (function compose_schemata(G__15884,G__15885){var validate__11613__auto__ = true;if(validate__11613__auto__)
{var args__11614__auto___15907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15884,G__15885], null);var temp__4126__auto___15908 = input_checker15882_15905.call(null,args__11614__auto___15907);if(cljs.core.truth_(temp__4126__auto___15908))
{var error__11615__auto___15909 = temp__4126__auto___15908;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__11615__auto___15909)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15881_15904,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___15907,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15909], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__15896 = G__15884;var vec__15898 = G__15896;var i2 = cljs.core.nth.call(null,vec__15898,(0),null);var o2 = cljs.core.nth.call(null,vec__15898,(1),null);var G__15897 = G__15885;var vec__15899 = G__15897;var i1 = cljs.core.nth.call(null,vec__15899,(0),null);var o1 = cljs.core.nth.call(null,vec__15899,(1),null);var G__15896__$1 = G__15896;var G__15897__$1 = G__15897;while(true){
var vec__15900 = G__15896__$1;var i2__$1 = cljs.core.nth.call(null,vec__15900,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__15900,(1),null);var vec__15901 = G__15897__$1;var i1__$1 = cljs.core.nth.call(null,vec__15901,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__15901,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__11613__auto__)
{var temp__4126__auto___15910 = output_checker15883_15906.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___15910))
{var error__11615__auto___15911 = temp__4126__auto___15910;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__11615__auto___15911)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15880_15903,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15911], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___15902,output_schema15880_15903,input_schema15881_15904,input_checker15882_15905,output_checker15883_15906))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema15880_15903,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15881_15904], null)));
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
var ufv___15990 = schema.utils.use_fn_validation;var output_schema15912_15991 = schema.core.Any;var input_schema15913_15992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker15914_15993 = schema.core.checker.call(null,input_schema15913_15992);var output_checker15915_15994 = schema.core.checker.call(null,output_schema15912_15991);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994){
return (function split_schema(G__15916,G__15917){var validate__11613__auto__ = ufv___15990.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___15995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15916,G__15917], null);var temp__4126__auto___15996 = input_checker15914_15993.call(null,args__11614__auto___15995);if(cljs.core.truth_(temp__4126__auto___15996))
{var error__11615__auto___15997 = temp__4126__auto___15996;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__11615__auto___15997)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15913_15992,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___15995,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___15997], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var s = G__15916;var ks = G__15917;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4281__auto__ = ((function (ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994){
return (function iter__15954(s__15955){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994){
return (function (){var s__15955__$1 = s__15955;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15955__$1);if(temp__4126__auto__)
{var s__15955__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15955__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__15955__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__15957 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__15956 = (0);while(true){
if((i__15956 < size__4280__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4279__auto__,i__15956);cljs.core.chunk_append.call(null,b__15957,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = ((function (i__15956,in_QMARK_,c__4279__auto__,size__4280__auto__,b__15957,s__15955__$2,temp__4126__auto__,ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994){
return (function iter__15974(s__15975){return (new cljs.core.LazySeq(null,((function (i__15956,in_QMARK_,c__4279__auto__,size__4280__auto__,b__15957,s__15955__$2,temp__4126__auto__,ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994){
return (function (){var s__15975__$1 = s__15975;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15975__$1);if(temp__4126__auto____$1)
{var s__15975__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15975__$2))
{var c__4279__auto____$1 = cljs.core.chunk_first.call(null,s__15975__$2);var size__4280__auto____$1 = cljs.core.count.call(null,c__4279__auto____$1);var b__15977 = cljs.core.chunk_buffer.call(null,size__4280__auto____$1);if((function (){var i__15976 = (0);while(true){
if((i__15976 < size__4280__auto____$1))
{var vec__15980 = cljs.core._nth.call(null,c__4279__auto____$1,i__15976);var k = cljs.core.nth.call(null,vec__15980,(0),null);var v = cljs.core.nth.call(null,vec__15980,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__15977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__15998 = (i__15976 + (1));
i__15976 = G__15998;
continue;
}
} else
{{
var G__15999 = (i__15976 + (1));
i__15976 = G__15999;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15977),iter__15974.call(null,cljs.core.chunk_rest.call(null,s__15975__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15977),null);
}
} else
{var vec__15981 = cljs.core.first.call(null,s__15975__$2);var k = cljs.core.nth.call(null,vec__15981,(0),null);var v = cljs.core.nth.call(null,vec__15981,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__15974.call(null,cljs.core.rest.call(null,s__15975__$2)));
} else
{{
var G__16000 = cljs.core.rest.call(null,s__15975__$2);
s__15975__$1 = G__16000;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__15956,in_QMARK_,c__4279__auto__,size__4280__auto__,b__15957,s__15955__$2,temp__4126__auto__,ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994))
,null,null));
});})(i__15956,in_QMARK_,c__4279__auto__,size__4280__auto__,b__15957,s__15955__$2,temp__4126__auto__,ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994))
;return iter__4281__auto__.call(null,s);
})()));
{
var G__16001 = (i__15956 + (1));
i__15956 = G__16001;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15957),iter__15954.call(null,cljs.core.chunk_rest.call(null,s__15955__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15957),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__15955__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4281__auto__ = ((function (in_QMARK_,s__15955__$2,temp__4126__auto__,ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994){
return (function iter__15982(s__15983){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__15955__$2,temp__4126__auto__,ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994){
return (function (){var s__15983__$1 = s__15983;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15983__$1);if(temp__4126__auto____$1)
{var s__15983__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15983__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__15983__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__15985 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__15984 = (0);while(true){
if((i__15984 < size__4280__auto__))
{var vec__15988 = cljs.core._nth.call(null,c__4279__auto__,i__15984);var k = cljs.core.nth.call(null,vec__15988,(0),null);var v = cljs.core.nth.call(null,vec__15988,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__15985,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__16002 = (i__15984 + (1));
i__15984 = G__16002;
continue;
}
} else
{{
var G__16003 = (i__15984 + (1));
i__15984 = G__16003;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15985),iter__15982.call(null,cljs.core.chunk_rest.call(null,s__15983__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15985),null);
}
} else
{var vec__15989 = cljs.core.first.call(null,s__15983__$2);var k = cljs.core.nth.call(null,vec__15989,(0),null);var v = cljs.core.nth.call(null,vec__15989,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__15982.call(null,cljs.core.rest.call(null,s__15983__$2)));
} else
{{
var G__16004 = cljs.core.rest.call(null,s__15983__$2);
s__15983__$1 = G__16004;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__15955__$2,temp__4126__auto__,ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994))
,null,null));
});})(in_QMARK_,s__15955__$2,temp__4126__auto__,ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994))
;return iter__4281__auto__.call(null,s);
})()),iter__15954.call(null,cljs.core.rest.call(null,s__15955__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994))
,null,null));
});})(ks__$1,validate__11613__auto__,ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994))
;return iter__4281__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___16005 = output_checker15915_15994.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___16005))
{var error__11615__auto___16006 = temp__4126__auto___16005;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__11615__auto___16006)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15912_15991,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___16006], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___15990,output_schema15912_15991,input_schema15913_15992,input_checker15914_15993,output_checker15915_15994))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema15912_15991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15913_15992], null)));
var ufv___16037 = schema.utils.use_fn_validation;var output_schema16007_16038 = plumbing.fnk.schema.GraphIOSchemata;var input_schema16008_16039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker16009_16040 = schema.core.checker.call(null,input_schema16008_16039);var output_checker16010_16041 = schema.core.checker.call(null,output_schema16007_16038);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___16037,output_schema16007_16038,input_schema16008_16039,input_checker16009_16040,output_checker16010_16041){
return (function sequence_schemata(G__16011,G__16012){var validate__11613__auto__ = ufv___16037.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___16042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16011,G__16012], null);var temp__4126__auto___16043 = input_checker16009_16040.call(null,args__11614__auto___16042);if(cljs.core.truth_(temp__4126__auto___16043))
{var error__11615__auto___16044 = temp__4126__auto___16043;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__11615__auto___16044)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16008_16039,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___16042,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___16044], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var G__16028 = G__16011;var vec__16030 = G__16028;var i1 = cljs.core.nth.call(null,vec__16030,(0),null);var o1 = cljs.core.nth.call(null,vec__16030,(1),null);var G__16029 = G__16012;var vec__16031 = G__16029;var k = cljs.core.nth.call(null,vec__16031,(0),null);var vec__16032 = cljs.core.nth.call(null,vec__16031,(1),null);var i2 = cljs.core.nth.call(null,vec__16032,(0),null);var o2 = cljs.core.nth.call(null,vec__16032,(1),null);var G__16028__$1 = G__16028;var G__16029__$1 = G__16029;while(true){
var vec__16033 = G__16028__$1;var i1__$1 = cljs.core.nth.call(null,vec__16033,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__16033,(1),null);var vec__16034 = G__16029__$1;var k__$1 = cljs.core.nth.call(null,vec__16034,(0),null);var vec__16035 = cljs.core.nth.call(null,vec__16034,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__16035,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__16035,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__16036 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__16036,(0),null);var unused = cljs.core.nth.call(null,vec__16036,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___16045 = output_checker16010_16041.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___16045))
{var error__11615__auto___16046 = temp__4126__auto___16045;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__11615__auto___16046)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16007_16038,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___16046], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___16037,output_schema16007_16038,input_schema16008_16039,input_checker16009_16040,output_checker16010_16041))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema16007_16038,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16008_16039], null)));

//# sourceMappingURL=schema.js.map