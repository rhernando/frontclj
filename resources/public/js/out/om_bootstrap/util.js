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
var ufv___20474 = schema.utils.use_fn_validation;var output_schema20469_20475 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema20470_20476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker20471_20477 = schema.core.checker.call(null,input_schema20470_20476);var output_checker20472_20478 = schema.core.checker.call(null,output_schema20469_20475);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___20474,output_schema20469_20475,input_schema20470_20476,input_checker20471_20477,output_checker20472_20478){
return (function collectify(G__20473){var validate__11613__auto__ = ufv___20474.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20473], null);var temp__4126__auto___20480 = input_checker20471_20477.call(null,args__11614__auto___20479);if(cljs.core.truth_(temp__4126__auto___20480))
{var error__11615__auto___20481 = temp__4126__auto___20480;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__11615__auto___20481)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20470_20476,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20479,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20481], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var x = G__20473;while(true){
if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20482 = output_checker20472_20478.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20482))
{var error__11615__auto___20483 = temp__4126__auto___20482;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__11615__auto___20483)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20469_20475,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20483], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20474,output_schema20469_20475,input_schema20470_20476,input_checker20471_20477,output_checker20472_20478))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema20469_20475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20470_20476], null)));
var ufv___20489 = schema.utils.use_fn_validation;var output_schema20484_20490 = schema.core.Bool;var input_schema20485_20491 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker20486_20492 = schema.core.checker.call(null,input_schema20485_20491);var output_checker20487_20493 = schema.core.checker.call(null,output_schema20484_20490);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___20489,output_schema20484_20490,input_schema20485_20491,input_checker20486_20492,output_checker20487_20493){
return (function strict_valid_component_QMARK_(G__20488){var validate__11613__auto__ = ufv___20489.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20494 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20488], null);var temp__4126__auto___20495 = input_checker20486_20492.call(null,args__11614__auto___20494);if(cljs.core.truth_(temp__4126__auto___20495))
{var error__11615__auto___20496 = temp__4126__auto___20495;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__11615__auto___20496)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20485_20491,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20494,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20496], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var child = G__20488;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20497 = output_checker20487_20493.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20497))
{var error__11615__auto___20498 = temp__4126__auto___20497;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__11615__auto___20498)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20484_20490,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20498], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20489,output_schema20484_20490,input_schema20485_20491,input_checker20486_20492,output_checker20487_20493))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema20484_20490,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20485_20491], null)));
var ufv___20504 = schema.utils.use_fn_validation;var output_schema20499_20505 = schema.core.Bool;var input_schema20500_20506 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker20501_20507 = schema.core.checker.call(null,input_schema20500_20506);var output_checker20502_20508 = schema.core.checker.call(null,output_schema20499_20505);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___20504,output_schema20499_20505,input_schema20500_20506,input_checker20501_20507,output_checker20502_20508){
return (function valid_component_QMARK_(G__20503){var validate__11613__auto__ = ufv___20504.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20503], null);var temp__4126__auto___20510 = input_checker20501_20507.call(null,args__11614__auto___20509);if(cljs.core.truth_(temp__4126__auto___20510))
{var error__11615__auto___20511 = temp__4126__auto___20510;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__11615__auto___20511)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20500_20506,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20509,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20511], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var child = G__20503;while(true){
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
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20512 = output_checker20502_20508.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20512))
{var error__11615__auto___20513 = temp__4126__auto___20512;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__11615__auto___20513)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20499_20505,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20513], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20504,output_schema20499_20505,input_schema20500_20506,input_checker20501_20507,output_checker20502_20508))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema20499_20505,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20500_20506], null)));
var ufv___20519 = schema.utils.use_fn_validation;var output_schema20514_20520 = schema.core.Bool;var input_schema20515_20521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker20516_20522 = schema.core.checker.call(null,input_schema20515_20521);var output_checker20517_20523 = schema.core.checker.call(null,output_schema20514_20520);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___20519,output_schema20514_20520,input_schema20515_20521,input_checker20516_20522,output_checker20517_20523){
return (function some_valid_component_QMARK_(G__20518){var validate__11613__auto__ = ufv___20519.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___20524 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20518], null);var temp__4126__auto___20525 = input_checker20516_20522.call(null,args__11614__auto___20524);if(cljs.core.truth_(temp__4126__auto___20525))
{var error__11615__auto___20526 = temp__4126__auto___20525;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__11615__auto___20526)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20515_20521,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___20524,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20526], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var children = G__20518;while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___20527 = output_checker20517_20523.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___20527))
{var error__11615__auto___20528 = temp__4126__auto___20527;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__11615__auto___20528)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20514_20520,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___20528], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___20519,output_schema20514_20520,input_schema20515_20521,input_checker20516_20522,output_checker20517_20523))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema20514_20520,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20515_20521], null)));
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
var G__20529__delegate = function (args){cljs.core.apply.call(null,l,args);
return cljs.core.apply.call(null,r,args);
};
var G__20529 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20529__delegate.call(this,args);};
G__20529.cljs$lang$maxFixedArity = 0;
G__20529.cljs$lang$applyTo = (function (arglist__20530){
var args = cljs.core.seq(arglist__20530);
return G__20529__delegate(args);
});
G__20529.cljs$core$IFn$_invoke$arity$variadic = G__20529__delegate;
return G__20529;
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
merge_props.cljs$lang$applyTo = (function (arglist__20531){
var prop_maps = cljs.core.seq(arglist__20531);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj20539 = {};return obj20539;
})();var seq__20540_20544 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));var chunk__20541_20545 = null;var count__20542_20546 = (0);var i__20543_20547 = (0);while(true){
if((i__20543_20547 < count__20542_20546))
{var k_20548 = cljs.core._nth.call(null,chunk__20541_20545,i__20543_20547);if(cljs.core.truth_(arr.hasOwnProperty(k_20548)))
{(ret[k_20548] = (arr[k_20548]));
} else
{}
{
var G__20549 = seq__20540_20544;
var G__20550 = chunk__20541_20545;
var G__20551 = count__20542_20546;
var G__20552 = (i__20543_20547 + (1));
seq__20540_20544 = G__20549;
chunk__20541_20545 = G__20550;
count__20542_20546 = G__20551;
i__20543_20547 = G__20552;
continue;
}
} else
{var temp__4126__auto___20553 = cljs.core.seq.call(null,seq__20540_20544);if(temp__4126__auto___20553)
{var seq__20540_20554__$1 = temp__4126__auto___20553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20540_20554__$1))
{var c__4312__auto___20555 = cljs.core.chunk_first.call(null,seq__20540_20554__$1);{
var G__20556 = cljs.core.chunk_rest.call(null,seq__20540_20554__$1);
var G__20557 = c__4312__auto___20555;
var G__20558 = cljs.core.count.call(null,c__4312__auto___20555);
var G__20559 = (0);
seq__20540_20544 = G__20556;
chunk__20541_20545 = G__20557;
count__20542_20546 = G__20558;
i__20543_20547 = G__20559;
continue;
}
} else
{var k_20560 = cljs.core.first.call(null,seq__20540_20554__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_20560)))
{(ret[k_20560] = (arr[k_20560]));
} else
{}
{
var G__20561 = cljs.core.next.call(null,seq__20540_20554__$1);
var G__20562 = null;
var G__20563 = (0);
var G__20564 = (0);
seq__20540_20544 = G__20561;
chunk__20541_20545 = G__20562;
count__20542_20546 = G__20563;
i__20543_20547 = G__20564;
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
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props.call(null,child);return child.constructor((function (){var G__20566 = om_bootstrap.util.copy_js.call(null,child.props);(G__20566["__om_cursor"] = ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props)));
return G__20566;
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