// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___20189 = schema.utils.use_fn_validation;var output_schema20184_20190 = schema.core.Any;var input_schema20185_20191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker20186_20192 = schema.core.checker.call(null,input_schema20185_20191);var output_checker20187_20193 = schema.core.checker.call(null,output_schema20184_20190);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___20189,output_schema20184_20190,input_schema20185_20191,input_checker20186_20192,output_checker20187_20193){
return (function schema_keys(G__20188){var validate__10325__auto__ = ufv___20189.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20188], null);var temp__4126__auto___20195 = input_checker20186_20192.call(null,args__10326__auto___20194);if(cljs.core.truth_(temp__4126__auto___20195))
{var error__10327__auto___20196 = temp__4126__auto___20195;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__10327__auto___20196)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20185_20191,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20194,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20196], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var schema__$1 = G__20188;while(true){
return cljs.core.map.call(null,((function (validate__10325__auto__,ufv___20189,output_schema20184_20190,input_schema20185_20191,input_checker20186_20192,output_checker20187_20193){
return (function (k){if(schema.core.optional_key_QMARK_.call(null,k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__10325__auto__,ufv___20189,output_schema20184_20190,input_schema20185_20191,input_checker20186_20192,output_checker20187_20193))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20197 = output_checker20187_20193.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20197))
{var error__10327__auto___20198 = temp__4126__auto___20197;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__10327__auto___20198)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20184_20190,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20198], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20189,output_schema20184_20190,input_schema20185_20191,input_checker20186_20192,output_checker20187_20193))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema20184_20190,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20185_20191], null)));
var ufv___20204 = schema.utils.use_fn_validation;var output_schema20199_20205 = schema.core.Any;var input_schema20200_20206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker20201_20207 = schema.core.checker.call(null,input_schema20200_20206);var output_checker20202_20208 = schema.core.checker.call(null,output_schema20199_20205);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___20204,output_schema20199_20205,input_schema20200_20206,input_checker20201_20207,output_checker20202_20208){
return (function at_least(G__20203){var validate__10325__auto__ = ufv___20204.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20203], null);var temp__4126__auto___20210 = input_checker20201_20207.call(null,args__10326__auto___20209);if(cljs.core.truth_(temp__4126__auto___20210))
{var error__10327__auto___20211 = temp__4126__auto___20210;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__10327__auto___20211)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20200_20206,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20209,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20211], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var schema__$1 = G__20203;while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20212 = output_checker20202_20208.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20212))
{var error__10327__auto___20213 = temp__4126__auto___20212;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__10327__auto___20213)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20199_20205,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20213], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20204,output_schema20199_20205,input_schema20200_20206,input_checker20201_20207,output_checker20202_20208))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema20199_20205,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20200_20206], null)));
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
var ufv___20226 = schema.utils.use_fn_validation;var output_schema20214_20227 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema20215_20228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema20220_20229 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker20216_20230 = schema.core.checker.call(null,input_schema20215_20228);var output_checker20217_20231 = schema.core.checker.call(null,output_schema20214_20227);var input_checker20221_20232 = schema.core.checker.call(null,input_schema20220_20229);var output_checker20222_20233 = schema.core.checker.call(null,output_schema20214_20227);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___20226,output_schema20214_20227,input_schema20215_20228,input_schema20220_20229,input_checker20216_20230,output_checker20217_20231,input_checker20221_20232,output_checker20222_20233){
return (function() {
var separate = null;
var separate__2 = (function (G__20218,G__20219){var validate__10325__auto__ = ufv___20226.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20218,G__20219], null);var temp__4126__auto___20235 = input_checker20216_20230.call(null,args__10326__auto___20234);if(cljs.core.truth_(temp__4126__auto___20235))
{var error__10327__auto___20236 = temp__4126__auto___20235;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__10327__auto___20236)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20215_20228,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20234,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20236], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var schema__$1 = G__20218;var opts = G__20219;while(true){
return separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20237 = output_checker20217_20231.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20237))
{var error__10327__auto___20238 = temp__4126__auto___20237;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__10327__auto___20238)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20214_20227,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20238], null));
} else
{}
} else
{}
return o__10328__auto__;
});
var separate__3 = (function (G__20223,G__20224,G__20225){var validate__10325__auto__ = ufv___20226.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20239 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20223,G__20224,G__20225], null);var temp__4126__auto___20240 = input_checker20221_20232.call(null,args__10326__auto___20239);if(cljs.core.truth_(temp__4126__auto___20240))
{var error__10327__auto___20241 = temp__4126__auto___20240;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__10327__auto___20241)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20220_20229,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20239,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20241], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var schema__$1 = G__20223;var opts = G__20224;var defaults = G__20225;while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));var opts__$1 = cljs.core.merge.call(null,defaults,opts);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20242 = output_checker20222_20233.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20242))
{var error__10327__auto___20243 = temp__4126__auto___20242;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__10327__auto___20243)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20214_20227,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20243], null));
} else
{}
} else
{}
return o__10328__auto__;
});
separate = function(G__20223,G__20224,G__20225){
switch(arguments.length){
case 2:
return separate__2.call(this,G__20223,G__20224);
case 3:
return separate__3.call(this,G__20223,G__20224,G__20225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___20226,output_schema20214_20227,input_schema20215_20228,input_schema20220_20229,input_checker20216_20230,output_checker20217_20231,input_checker20221_20232,output_checker20222_20233))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema20214_20227,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20215_20228,input_schema20220_20229], null)));
var ufv___20257 = schema.utils.use_fn_validation;var output_schema20244_20258 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema20245_20259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker20246_20260 = schema.core.checker.call(null,input_schema20245_20259);var output_checker20247_20261 = schema.core.checker.call(null,output_schema20244_20258);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___20257,output_schema20244_20258,input_schema20245_20259,input_checker20246_20260,output_checker20247_20261){
return (function bs_class_set(G__20248){var validate__10325__auto__ = ufv___20257.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___20262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20248], null);var temp__4126__auto___20263 = input_checker20246_20260.call(null,args__10326__auto___20262);if(cljs.core.truth_(temp__4126__auto___20263))
{var error__10327__auto___20264 = temp__4126__auto___20263;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__10327__auto___20264)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20245_20259,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___20262,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20264], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var G__20254 = G__20248;var map__20255 = G__20254;var map__20255__$1 = ((cljs.core.seq_QMARK_.call(null,map__20255))?cljs.core.apply.call(null,cljs.core.hash_map,map__20255):map__20255);var bs_size = cljs.core.get.call(null,map__20255__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.call(null,map__20255__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.call(null,map__20255__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__20254__$1 = G__20254;while(true){
var map__20256 = G__20254__$1;var map__20256__$1 = ((cljs.core.seq_QMARK_.call(null,map__20256))?cljs.core.apply.call(null,cljs.core.hash_map,map__20256):map__20256);var bs_size__$1 = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);if(cljs.core.truth_(temp__4124__auto__))
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
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___20265 = output_checker20247_20261.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___20265))
{var error__10327__auto___20266 = temp__4126__auto___20265;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__10327__auto___20266)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20244_20258,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___20266], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___20257,output_schema20244_20258,input_schema20245_20259,input_checker20246_20260,output_checker20247_20261))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema20244_20258,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20245_20259], null)));

//# sourceMappingURL=types.js.map