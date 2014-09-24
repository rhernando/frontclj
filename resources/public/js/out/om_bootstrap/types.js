// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___19234 = schema.utils.use_fn_validation;var output_schema19229_19235 = schema.core.Any;var input_schema19230_19236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker19231_19237 = schema.core.checker.call(null,input_schema19230_19236);var output_checker19232_19238 = schema.core.checker.call(null,output_schema19229_19235);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___19234,output_schema19229_19235,input_schema19230_19236,input_checker19231_19237,output_checker19232_19238){
return (function schema_keys(G__19233){var validate__15139__auto__ = ufv___19234.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19233], null);var temp__4126__auto___19240 = input_checker19231_19237.call(null,args__15140__auto___19239);if(cljs.core.truth_(temp__4126__auto___19240))
{var error__15141__auto___19241 = temp__4126__auto___19240;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__15141__auto___19241)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19230_19236,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19239,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19241], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var schema__$1 = G__19233;while(true){
return cljs.core.map.call(null,((function (validate__15139__auto__,ufv___19234,output_schema19229_19235,input_schema19230_19236,input_checker19231_19237,output_checker19232_19238){
return (function (k){if(schema.core.optional_key_QMARK_.call(null,k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__15139__auto__,ufv___19234,output_schema19229_19235,input_schema19230_19236,input_checker19231_19237,output_checker19232_19238))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19242 = output_checker19232_19238.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19242))
{var error__15141__auto___19243 = temp__4126__auto___19242;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__15141__auto___19243)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19229_19235,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19243], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19234,output_schema19229_19235,input_schema19230_19236,input_checker19231_19237,output_checker19232_19238))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema19229_19235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19230_19236], null)));
var ufv___19249 = schema.utils.use_fn_validation;var output_schema19244_19250 = schema.core.Any;var input_schema19245_19251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker19246_19252 = schema.core.checker.call(null,input_schema19245_19251);var output_checker19247_19253 = schema.core.checker.call(null,output_schema19244_19250);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___19249,output_schema19244_19250,input_schema19245_19251,input_checker19246_19252,output_checker19247_19253){
return (function at_least(G__19248){var validate__15139__auto__ = ufv___19249.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19248], null);var temp__4126__auto___19255 = input_checker19246_19252.call(null,args__15140__auto___19254);if(cljs.core.truth_(temp__4126__auto___19255))
{var error__15141__auto___19256 = temp__4126__auto___19255;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__15141__auto___19256)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19245_19251,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19254,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19256], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var schema__$1 = G__19248;while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19257 = output_checker19247_19253.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19257))
{var error__15141__auto___19258 = temp__4126__auto___19257;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__15141__auto___19258)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19244_19250,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19258], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19249,output_schema19244_19250,input_schema19245_19251,input_checker19246_19252,output_checker19247_19253))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema19244_19250,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19245_19251], null)));
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
var ufv___19271 = schema.utils.use_fn_validation;var output_schema19259_19272 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema19260_19273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema19265_19274 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker19261_19275 = schema.core.checker.call(null,input_schema19260_19273);var output_checker19262_19276 = schema.core.checker.call(null,output_schema19259_19272);var input_checker19266_19277 = schema.core.checker.call(null,input_schema19265_19274);var output_checker19267_19278 = schema.core.checker.call(null,output_schema19259_19272);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___19271,output_schema19259_19272,input_schema19260_19273,input_schema19265_19274,input_checker19261_19275,output_checker19262_19276,input_checker19266_19277,output_checker19267_19278){
return (function() {
var separate = null;
var separate__2 = (function (G__19263,G__19264){var validate__15139__auto__ = ufv___19271.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19263,G__19264], null);var temp__4126__auto___19280 = input_checker19261_19275.call(null,args__15140__auto___19279);if(cljs.core.truth_(temp__4126__auto___19280))
{var error__15141__auto___19281 = temp__4126__auto___19280;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__15141__auto___19281)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19260_19273,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19279,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19281], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var schema__$1 = G__19263;var opts = G__19264;while(true){
return separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19282 = output_checker19262_19276.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19282))
{var error__15141__auto___19283 = temp__4126__auto___19282;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__15141__auto___19283)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19259_19272,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19283], null));
} else
{}
} else
{}
return o__15142__auto__;
});
var separate__3 = (function (G__19268,G__19269,G__19270){var validate__15139__auto__ = ufv___19271.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19268,G__19269,G__19270], null);var temp__4126__auto___19285 = input_checker19266_19277.call(null,args__15140__auto___19284);if(cljs.core.truth_(temp__4126__auto___19285))
{var error__15141__auto___19286 = temp__4126__auto___19285;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__15141__auto___19286)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19265_19274,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19284,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19286], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var schema__$1 = G__19268;var opts = G__19269;var defaults = G__19270;while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));var opts__$1 = cljs.core.merge.call(null,defaults,opts);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19287 = output_checker19267_19278.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19287))
{var error__15141__auto___19288 = temp__4126__auto___19287;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__15141__auto___19288)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19259_19272,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19288], null));
} else
{}
} else
{}
return o__15142__auto__;
});
separate = function(G__19268,G__19269,G__19270){
switch(arguments.length){
case 2:
return separate__2.call(this,G__19268,G__19269);
case 3:
return separate__3.call(this,G__19268,G__19269,G__19270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___19271,output_schema19259_19272,input_schema19260_19273,input_schema19265_19274,input_checker19261_19275,output_checker19262_19276,input_checker19266_19277,output_checker19267_19278))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema19259_19272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19260_19273,input_schema19265_19274], null)));
var ufv___19302 = schema.utils.use_fn_validation;var output_schema19289_19303 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema19290_19304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker19291_19305 = schema.core.checker.call(null,input_schema19290_19304);var output_checker19292_19306 = schema.core.checker.call(null,output_schema19289_19303);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___19302,output_schema19289_19303,input_schema19290_19304,input_checker19291_19305,output_checker19292_19306){
return (function bs_class_set(G__19293){var validate__15139__auto__ = ufv___19302.get_cell();if(cljs.core.truth_(validate__15139__auto__))
{var args__15140__auto___19307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19293], null);var temp__4126__auto___19308 = input_checker19291_19305.call(null,args__15140__auto___19307);if(cljs.core.truth_(temp__4126__auto___19308))
{var error__15141__auto___19309 = temp__4126__auto___19308;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__15141__auto___19309)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19290_19304,new cljs.core.Keyword(null,"value","value",305978217),args__15140__auto___19307,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19309], null));
} else
{}
} else
{}
var o__15142__auto__ = (function (){var G__19299 = G__19293;var map__19300 = G__19299;var map__19300__$1 = ((cljs.core.seq_QMARK_.call(null,map__19300))?cljs.core.apply.call(null,cljs.core.hash_map,map__19300):map__19300);var bs_size = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__19299__$1 = G__19299;while(true){
var map__19301 = G__19299__$1;var map__19301__$1 = ((cljs.core.seq_QMARK_.call(null,map__19301))?cljs.core.apply.call(null,cljs.core.hash_map,map__19301):map__19301);var bs_size__$1 = cljs.core.get.call(null,map__19301__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.call(null,map__19301__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.call(null,map__19301__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);if(cljs.core.truth_(temp__4124__auto__))
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
})();if(cljs.core.truth_(validate__15139__auto__))
{var temp__4126__auto___19310 = output_checker19292_19306.call(null,o__15142__auto__);if(cljs.core.truth_(temp__4126__auto___19310))
{var error__15141__auto___19311 = temp__4126__auto___19310;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__15141__auto___19311)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19289_19303,new cljs.core.Keyword(null,"value","value",305978217),o__15142__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15141__auto___19311], null));
} else
{}
} else
{}
return o__15142__auto__;
});})(ufv___19302,output_schema19289_19303,input_schema19290_19304,input_checker19291_19305,output_checker19292_19306))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema19289_19303,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19290_19304], null)));

//# sourceMappingURL=types.js.map