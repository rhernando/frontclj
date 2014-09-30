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
var ufv___20272 = schema.utils.use_fn_validation;var output_schema20267_20273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema20268_20274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker20269_20275 = schema.core.checker.call(null,input_schema20268_20274);var output_checker20270_20276 = schema.core.checker.call(null,output_schema20267_20273);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___20272,output_schema20267_20273,input_schema20268_20274,input_checker20269_20275,output_checker20270_20276){
return (function collectify(G__20271){var validate__10325__auto__ = ufv___20272.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20271], null);var temp__4126__auto___20278 = input_checker20269_20275.call(null,args__10326__auto___20277);if(cljs.core.truth_(temp__4126__auto___20278))
{var error__10327__auto___20279 = temp__4126__auto___20278;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__10327__auto___20279)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20268_20274,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20277,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20279], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var x = G__20271;while(true){
if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20280 = output_checker20270_20276.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20280))
{var error__10327__auto___20281 = temp__4126__auto___20280;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__10327__auto___20281)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20267_20273,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20281], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20272,output_schema20267_20273,input_schema20268_20274,input_checker20269_20275,output_checker20270_20276))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema20267_20273,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20268_20274], null)));
var ufv___20287 = schema.utils.use_fn_validation;var output_schema20282_20288 = schema.core.Bool;var input_schema20283_20289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker20284_20290 = schema.core.checker.call(null,input_schema20283_20289);var output_checker20285_20291 = schema.core.checker.call(null,output_schema20282_20288);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___20287,output_schema20282_20288,input_schema20283_20289,input_checker20284_20290,output_checker20285_20291){
return (function strict_valid_component_QMARK_(G__20286){var validate__10325__auto__ = ufv___20287.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20286], null);var temp__4126__auto___20293 = input_checker20284_20290.call(null,args__10326__auto___20292);if(cljs.core.truth_(temp__4126__auto___20293))
{var error__10327__auto___20294 = temp__4126__auto___20293;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__10327__auto___20294)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20283_20289,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20292,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20294], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var child = G__20286;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20295 = output_checker20285_20291.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20295))
{var error__10327__auto___20296 = temp__4126__auto___20295;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__10327__auto___20296)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20282_20288,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20296], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20287,output_schema20282_20288,input_schema20283_20289,input_checker20284_20290,output_checker20285_20291))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema20282_20288,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20283_20289], null)));
var ufv___20302 = schema.utils.use_fn_validation;var output_schema20297_20303 = schema.core.Bool;var input_schema20298_20304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker20299_20305 = schema.core.checker.call(null,input_schema20298_20304);var output_checker20300_20306 = schema.core.checker.call(null,output_schema20297_20303);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___20302,output_schema20297_20303,input_schema20298_20304,input_checker20299_20305,output_checker20300_20306){
return (function valid_component_QMARK_(G__20301){var validate__10325__auto__ = ufv___20302.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20301], null);var temp__4126__auto___20308 = input_checker20299_20305.call(null,args__10326__auto___20307);if(cljs.core.truth_(temp__4126__auto___20308))
{var error__10327__auto___20309 = temp__4126__auto___20308;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__10327__auto___20309)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20298_20304,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20307,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20309], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var child = G__20301;while(true){
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
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20310 = output_checker20300_20306.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20310))
{var error__10327__auto___20311 = temp__4126__auto___20310;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__10327__auto___20311)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20297_20303,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20311], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20302,output_schema20297_20303,input_schema20298_20304,input_checker20299_20305,output_checker20300_20306))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema20297_20303,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20298_20304], null)));
var ufv___20317 = schema.utils.use_fn_validation;var output_schema20312_20318 = schema.core.Bool;var input_schema20313_20319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker20314_20320 = schema.core.checker.call(null,input_schema20313_20319);var output_checker20315_20321 = schema.core.checker.call(null,output_schema20312_20318);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___20317,output_schema20312_20318,input_schema20313_20319,input_checker20314_20320,output_checker20315_20321){
return (function some_valid_component_QMARK_(G__20316){var validate__10325__auto__ = ufv___20317.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20316], null);var temp__4126__auto___20323 = input_checker20314_20320.call(null,args__10326__auto___20322);if(cljs.core.truth_(temp__4126__auto___20323))
{var error__10327__auto___20324 = temp__4126__auto___20323;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__10327__auto___20324)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20313_20319,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20322,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20324], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var children = G__20316;while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20325 = output_checker20315_20321.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20325))
{var error__10327__auto___20326 = temp__4126__auto___20325;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__10327__auto___20326)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20312_20318,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20326], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20317,output_schema20312_20318,input_schema20313_20319,input_checker20314_20320,output_checker20315_20321))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema20312_20318,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20313_20319], null)));
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
var G__20327__delegate = function (args){cljs.core.apply.call(null,l,args);
return cljs.core.apply.call(null,r,args);
};
var G__20327 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20327__delegate.call(this,args);};
G__20327.cljs$lang$maxFixedArity = 0;
G__20327.cljs$lang$applyTo = (function (arglist__20328){
var args = cljs.core.seq(arglist__20328);
return G__20327__delegate(args);
});
G__20327.cljs$core$IFn$_invoke$arity$variadic = G__20327__delegate;
return G__20327;
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
merge_props.cljs$lang$applyTo = (function (arglist__20329){
var prop_maps = cljs.core.seq(arglist__20329);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj20337 = {};return obj20337;
})();var seq__20338_20342 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));var chunk__20339_20343 = null;var count__20340_20344 = (0);var i__20341_20345 = (0);while(true){
if((i__20341_20345 < count__20340_20344))
{var k_20346 = cljs.core._nth.call(null,chunk__20339_20343,i__20341_20345);if(cljs.core.truth_(arr.hasOwnProperty(k_20346)))
{(ret[k_20346] = (arr[k_20346]));
} else
{}
{
var G__20347 = seq__20338_20342;
var G__20348 = chunk__20339_20343;
var G__20349 = count__20340_20344;
var G__20350 = (i__20341_20345 + (1));
seq__20338_20342 = G__20347;
chunk__20339_20343 = G__20348;
count__20340_20344 = G__20349;
i__20341_20345 = G__20350;
continue;
}
} else
{var temp__4126__auto___20351 = cljs.core.seq.call(null,seq__20338_20342);if(temp__4126__auto___20351)
{var seq__20338_20352__$1 = temp__4126__auto___20351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20338_20352__$1))
{var c__4312__auto___20353 = cljs.core.chunk_first.call(null,seq__20338_20352__$1);{
var G__20354 = cljs.core.chunk_rest.call(null,seq__20338_20352__$1);
var G__20355 = c__4312__auto___20353;
var G__20356 = cljs.core.count.call(null,c__4312__auto___20353);
var G__20357 = (0);
seq__20338_20342 = G__20354;
chunk__20339_20343 = G__20355;
count__20340_20344 = G__20356;
i__20341_20345 = G__20357;
continue;
}
} else
{var k_20358 = cljs.core.first.call(null,seq__20338_20352__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_20358)))
{(ret[k_20358] = (arr[k_20358]));
} else
{}
{
var G__20359 = cljs.core.next.call(null,seq__20338_20352__$1);
var G__20360 = null;
var G__20361 = (0);
var G__20362 = (0);
seq__20338_20342 = G__20359;
chunk__20339_20343 = G__20360;
count__20340_20344 = G__20361;
i__20341_20345 = G__20362;
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
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props.call(null,child);return child.constructor((function (){var G__20364 = om_bootstrap.util.copy_js.call(null,child.props);(G__20364["__om_cursor"] = ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props)));
return G__20364;
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