// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by looking up the proper merge function and in the
* supplied map of key -> merge-fn and using that for the big merge. If
* a key doesn't have a merge function, the right value wins (as with
* merge).
*/
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key.call(null,e);var v = cljs.core.val.call(null,e);var temp__4124__auto__ = (function (){var and__3544__auto__ = cljs.core.contains_QMARK_.call(null,m,k);if(and__3544__auto__)
{return k__GT_fn.call(null,k);
} else
{return and__3544__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.call(null,merge_entry,(function (){var or__3556__auto__ = m1;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___19317 = schema.utils.use_fn_validation;var output_schema19312_19318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema19313_19319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker19314_19320 = schema.core.checker.call(null,input_schema19313_19319);var output_checker19315_19321 = schema.core.checker.call(null,output_schema19312_19318);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___19317,output_schema19312_19318,input_schema19313_19319,input_checker19314_19320,output_checker19315_19321){
return (function collectify(G__19316){var validate__15139__auto__ = ufv___19317.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19316], null);var temp__4126__auto___19323 = input_checker19314_19320.call(null,args__15140__auto___19322);if(cljs.core.truth_(temp__4126__auto___19323))
{var error__15141__auto___19324 = temp__4126__auto___19323;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__15141__auto___19324)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19313_19319,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19322,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19324], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var x = G__19316;while(true){
if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19325 = output_checker19315_19321.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19325))
{var error__15141__auto___19326 = temp__4126__auto___19325;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__15141__auto___19326)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19312_19318,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19326], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19317,output_schema19312_19318,input_schema19313_19319,input_checker19314_19320,output_checker19315_19321))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema19312_19318,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19313_19319], null)));
var ufv___19332 = schema.utils.use_fn_validation;var output_schema19327_19333 = schema.core.Bool;var input_schema19328_19334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker19329_19335 = schema.core.checker.call(null,input_schema19328_19334);var output_checker19330_19336 = schema.core.checker.call(null,output_schema19327_19333);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___19332,output_schema19327_19333,input_schema19328_19334,input_checker19329_19335,output_checker19330_19336){
return (function strict_valid_component_QMARK_(G__19331){var validate__15139__auto__ = ufv___19332.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19331], null);var temp__4126__auto___19338 = input_checker19329_19335.call(null,args__15140__auto___19337);if(cljs.core.truth_(temp__4126__auto___19338))
{var error__15141__auto___19339 = temp__4126__auto___19338;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__15141__auto___19339)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19328_19334,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19337,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19339], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var child = G__19331;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19340 = output_checker19330_19336.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19340))
{var error__15141__auto___19341 = temp__4126__auto___19340;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__15141__auto___19341)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19327_19333,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19341], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19332,output_schema19327_19333,input_schema19328_19334,input_checker19329_19335,output_checker19330_19336))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19327_19333,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19328_19334], null)));
var ufv___19347 = schema.utils.use_fn_validation;var output_schema19342_19348 = schema.core.Bool;var input_schema19343_19349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker19344_19350 = schema.core.checker.call(null,input_schema19343_19349);var output_checker19345_19351 = schema.core.checker.call(null,output_schema19342_19348);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___19347,output_schema19342_19348,input_schema19343_19349,input_checker19344_19350,output_checker19345_19351){
return (function valid_component_QMARK_(G__19346){var validate__15139__auto__ = ufv___19347.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19346], null);var temp__4126__auto___19353 = input_checker19344_19350.call(null,args__15140__auto___19352);if(cljs.core.truth_(temp__4126__auto___19353))
{var error__15141__auto___19354 = temp__4126__auto___19353;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__15141__auto___19354)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19343_19349,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19352,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19354], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var child = G__19346;while(true){
var or__3556__auto__ = typeof child === 'string';if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = typeof child === 'number';if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19355 = output_checker19345_19351.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19355))
{var error__15141__auto___19356 = temp__4126__auto___19355;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__15141__auto___19356)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19342_19348,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19356], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19347,output_schema19342_19348,input_schema19343_19349,input_checker19344_19350,output_checker19345_19351))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19342_19348,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19343_19349], null)));
var ufv___19362 = schema.utils.use_fn_validation;var output_schema19357_19363 = schema.core.Bool;var input_schema19358_19364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker19359_19365 = schema.core.checker.call(null,input_schema19358_19364);var output_checker19360_19366 = schema.core.checker.call(null,output_schema19357_19363);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___19362,output_schema19357_19363,input_schema19358_19364,input_checker19359_19365,output_checker19360_19366){
return (function some_valid_component_QMARK_(G__19361){var validate__15139__auto__ = ufv___19362.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19361], null);var temp__4126__auto___19368 = input_checker19359_19365.call(null,args__15140__auto___19367);if(cljs.core.truth_(temp__4126__auto___19368))
{var error__15141__auto___19369 = temp__4126__auto___19368;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__15141__auto___19369)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19358_19364,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19367,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19369], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var children = G__19361;while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19370 = output_checker19360_19366.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19370))
{var error__15141__auto___19371 = temp__4126__auto___19370;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__15141__auto___19371)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19357_19363,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19371], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19362,output_schema19357_19363,input_schema19358_19364,input_checker19359_19365,output_checker19360_19366))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19357_19363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19358_19364], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__3544__auto__ = l;if(cljs.core.truth_(and__3544__auto__))
{return r;
} else
{return and__3544__auto__;
}
})()))
{return (function() { 
var G__19372__delegate = function (args){cljs.core.apply.call(null,l,args);
return cljs.core.apply.call(null,r,args);
};
var G__19372 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19372__delegate.call(this,args);};
G__19372.cljs$lang$maxFixedArity = 0;
G__19372.cljs$lang$applyTo = (function (arglist__19373){
var args = cljs.core.seq(arglist__19373);
return G__19372__delegate(args);
});
G__19372.cljs$core$IFn$_invoke$arity$variadic = G__19372__delegate;
return G__19372;
})()
;
} else
{var or__3556__auto__ = l;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return r;
}
}
});
/**
* Map of React keyword to a custom function for its merge. Tries to
* do a decent job with event handlers as well; currently only
* handles :on-select :on-click, :on-blur, kebab-cased as om-tools
* prefers.
*/
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
});var orig_fn = ((function (merge_class){
return (function (l,r){var or__3556__auto__ = l;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return r;
}
});})(merge_class))
;var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){return null;
});})(merge_class,orig_fn))
;return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
* Merges two maps that represent React properties. Merges occur
* according to the functions defined in `react-merges`.
* @param {...*} var_args
*/
om_bootstrap.util.merge_props = (function() { 
var merge_props__delegate = function (prop_maps){var react_merge = (function react_merge(xs){return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function normalize_class(m){if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)))
{return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else
{return m;
}
});
return react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
};
var merge_props = function (var_args){
var prop_maps = null;if (arguments.length > 0) {
  prop_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_props__delegate.call(this,prop_maps);};
merge_props.cljs$lang$maxFixedArity = 0;
merge_props.cljs$lang$applyTo = (function (arglist__19374){
var prop_maps = cljs.core.seq(arglist__19374);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj19382 = {};return obj19382;
})();var seq__19383_19387 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));var chunk__19384_19388 = null;var count__19385_19389 = (0);var i__19386_19390 = (0);while(true){
if((i__19386_19390 < count__19385_19389))
{var k_19391 = cljs.core._nth.call(null,chunk__19384_19388,i__19386_19390);if(cljs.core.truth_(arr.hasOwnProperty(k_19391)))
{(ret[k_19391] = (arr[k_19391]));
} else
{}
{
var G__19392 = seq__19383_19387;
var G__19393 = chunk__19384_19388;
var G__19394 = count__19385_19389;
var G__19395 = (i__19386_19390 + (1));
seq__19383_19387 = G__19392;
chunk__19384_19388 = G__19393;
count__19385_19389 = G__19394;
i__19386_19390 = G__19395;
continue;
}
} else
{var temp__4126__auto___19396 = cljs.core.seq.call(null,seq__19383_19387);if(temp__4126__auto___19396)
{var seq__19383_19397__$1 = temp__4126__auto___19396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19383_19397__$1))
{var c__4312__auto___19398 = cljs.core.chunk_first.call(null,seq__19383_19397__$1);{
var G__19399 = cljs.core.chunk_rest.call(null,seq__19383_19397__$1);
var G__19400 = c__4312__auto___19398;
var G__19401 = cljs.core.count.call(null,c__4312__auto___19398);
var G__19402 = (0);
seq__19383_19387 = G__19399;
chunk__19384_19388 = G__19400;
count__19385_19389 = G__19401;
i__19386_19390 = G__19402;
continue;
}
} else
{var k_19403 = cljs.core.first.call(null,seq__19383_19397__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_19403)))
{(ret[k_19403] = (arr[k_19403]));
} else
{}
{
var G__19404 = cljs.core.next.call(null,seq__19383_19397__$1);
var G__19405 = null;
var G__19406 = (0);
var G__19407 = (0);
seq__19383_19387 = G__19404;
chunk__19384_19388 = G__19405;
count__19385_19389 = G__19406;
i__19386_19390 = G__19407;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
/**
* Merges the supplied extra properties into the underlying Om cursor
* and calls the constructor to clone the React component.
* 
* Requires that the supplied child has an Om cursor attached to it!
*/
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props.call(null,child);return child.constructor((function (){var G__19409 = om_bootstrap.util.copy_js.call(null,child.props);(G__19409["__om_cursor"] = ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props)));
return G__19409;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);if(cljs.core.truth_(temp__4126__auto__))
{var children = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else
{return null;
}
})());return child.constructor(cljs.core.clj__GT_js.call(null,new_props));
});
/**
* Returns a shallow copy of the supplied component (child); the copy
* will have any props provided by extra-props merged in. Props are
* merged in the same manner as merge-props, so props like :class will
* be merged intelligently.
* 
* extra-props can be a function of the old props that returns new
* props, OR it can be a map of props.
* 
* If the supplied child is an Om component, any supplied extra
* properties will be merged into the underlying cursor and accessible
* in the Om constructor.
*/
om_bootstrap.util.clone_with_props = (function() {
var clone_with_props = null;
var clone_with_props__1 = (function (child){return clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});
var clone_with_props__2 = (function (child,extra_props){if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child)))
{return child;
} else
{if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props)))
{return child.constructor(child.props);
} else
{if(cljs.core.truth_(om.core.get_props.call(null,child)))
{return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else
{return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});
clone_with_props = function(child,extra_props){
switch(arguments.length){
case 1:
return clone_with_props__1.call(this,child);
case 2:
return clone_with_props__2.call(this,child,extra_props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_with_props.cljs$core$IFn$_invoke$arity$1 = clone_with_props__1;
clone_with_props.cljs$core$IFn$_invoke$arity$2 = clone_with_props__2;
return clone_with_props;
})()
;

//# sourceMappingURL=util.js.map