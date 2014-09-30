// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__16078__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__16078 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__16078__delegate.call(this,m,k,f,x1,x2,xs);};
G__16078.cljs$lang$maxFixedArity = 5;
G__16078.cljs$lang$applyTo = (function (arglist__16079){
var m = cljs.core.first(arglist__16079);
arglist__16079 = cljs.core.next(arglist__16079);
var k = cljs.core.first(arglist__16079);
arglist__16079 = cljs.core.next(arglist__16079);
var f = cljs.core.first(arglist__16079);
arglist__16079 = cljs.core.next(arglist__16079);
var x1 = cljs.core.first(arglist__16079);
arglist__16079 = cljs.core.next(arglist__16079);
var x2 = cljs.core.first(arglist__16079);
var xs = cljs.core.rest(arglist__16079);
return G__16078__delegate(m,k,f,x1,x2,xs);
});
G__16078.cljs$core$IFn$_invoke$arity$variadic = G__16078__delegate;
return G__16078;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__13536__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__16088_16094 = cljs.core.seq.call(null,m);var chunk__16089_16095 = null;var count__16090_16096 = (0);var i__16091_16097 = (0);while(true){
if((i__16091_16097 < count__16090_16096))
{var vec__16092_16098 = cljs.core._nth.call(null,chunk__16089_16095,i__16091_16097);var k_16099 = cljs.core.nth.call(null,vec__16092_16098,(0),null);var v_16100 = cljs.core.nth.call(null,vec__16092_16098,(1),null);var m16087_16101 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16087_16101,k_16099,f.call(null,v_16100)));
{
var G__16102 = seq__16088_16094;
var G__16103 = chunk__16089_16095;
var G__16104 = count__16090_16096;
var G__16105 = (i__16091_16097 + (1));
seq__16088_16094 = G__16102;
chunk__16089_16095 = G__16103;
count__16090_16096 = G__16104;
i__16091_16097 = G__16105;
continue;
}
} else
{var temp__4126__auto___16106 = cljs.core.seq.call(null,seq__16088_16094);if(temp__4126__auto___16106)
{var seq__16088_16107__$1 = temp__4126__auto___16106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16088_16107__$1))
{var c__4312__auto___16108 = cljs.core.chunk_first.call(null,seq__16088_16107__$1);{
var G__16109 = cljs.core.chunk_rest.call(null,seq__16088_16107__$1);
var G__16110 = c__4312__auto___16108;
var G__16111 = cljs.core.count.call(null,c__4312__auto___16108);
var G__16112 = (0);
seq__16088_16094 = G__16109;
chunk__16089_16095 = G__16110;
count__16090_16096 = G__16111;
i__16091_16097 = G__16112;
continue;
}
} else
{var vec__16093_16113 = cljs.core.first.call(null,seq__16088_16107__$1);var k_16114 = cljs.core.nth.call(null,vec__16093_16113,(0),null);var v_16115 = cljs.core.nth.call(null,vec__16093_16113,(1),null);var m16087_16116 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16087_16116,k_16114,f.call(null,v_16115)));
{
var G__16117 = cljs.core.next.call(null,seq__16088_16107__$1);
var G__16118 = null;
var G__16119 = (0);
var G__16120 = (0);
seq__16088_16094 = G__16117;
chunk__16089_16095 = G__16118;
count__16090_16096 = G__16119;
i__16091_16097 = G__16120;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13536__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__13536__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__16129_16135 = cljs.core.seq.call(null,m);var chunk__16130_16136 = null;var count__16131_16137 = (0);var i__16132_16138 = (0);while(true){
if((i__16132_16138 < count__16131_16137))
{var vec__16133_16139 = cljs.core._nth.call(null,chunk__16130_16136,i__16132_16138);var k_16140 = cljs.core.nth.call(null,vec__16133_16139,(0),null);var v_16141 = cljs.core.nth.call(null,vec__16133_16139,(1),null);var m16128_16142 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16128_16142,f.call(null,k_16140),v_16141));
{
var G__16143 = seq__16129_16135;
var G__16144 = chunk__16130_16136;
var G__16145 = count__16131_16137;
var G__16146 = (i__16132_16138 + (1));
seq__16129_16135 = G__16143;
chunk__16130_16136 = G__16144;
count__16131_16137 = G__16145;
i__16132_16138 = G__16146;
continue;
}
} else
{var temp__4126__auto___16147 = cljs.core.seq.call(null,seq__16129_16135);if(temp__4126__auto___16147)
{var seq__16129_16148__$1 = temp__4126__auto___16147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16129_16148__$1))
{var c__4312__auto___16149 = cljs.core.chunk_first.call(null,seq__16129_16148__$1);{
var G__16150 = cljs.core.chunk_rest.call(null,seq__16129_16148__$1);
var G__16151 = c__4312__auto___16149;
var G__16152 = cljs.core.count.call(null,c__4312__auto___16149);
var G__16153 = (0);
seq__16129_16135 = G__16150;
chunk__16130_16136 = G__16151;
count__16131_16137 = G__16152;
i__16132_16138 = G__16153;
continue;
}
} else
{var vec__16134_16154 = cljs.core.first.call(null,seq__16129_16148__$1);var k_16155 = cljs.core.nth.call(null,vec__16134_16154,(0),null);var v_16156 = cljs.core.nth.call(null,vec__16134_16154,(1),null);var m16128_16157 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16128_16157,f.call(null,k_16155),v_16156));
{
var G__16158 = cljs.core.next.call(null,seq__16129_16148__$1);
var G__16159 = null;
var G__16160 = (0);
var G__16161 = (0);
seq__16129_16135 = G__16158;
chunk__16130_16136 = G__16159;
count__16131_16137 = G__16160;
i__16132_16138 = G__16161;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13536__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__13536__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__16168_16172 = cljs.core.seq.call(null,ks);var chunk__16169_16173 = null;var count__16170_16174 = (0);var i__16171_16175 = (0);while(true){
if((i__16171_16175 < count__16170_16174))
{var k_16176 = cljs.core._nth.call(null,chunk__16169_16173,i__16171_16175);var m16167_16177 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16167_16177,k_16176,f.call(null,k_16176)));
{
var G__16178 = seq__16168_16172;
var G__16179 = chunk__16169_16173;
var G__16180 = count__16170_16174;
var G__16181 = (i__16171_16175 + (1));
seq__16168_16172 = G__16178;
chunk__16169_16173 = G__16179;
count__16170_16174 = G__16180;
i__16171_16175 = G__16181;
continue;
}
} else
{var temp__4126__auto___16182 = cljs.core.seq.call(null,seq__16168_16172);if(temp__4126__auto___16182)
{var seq__16168_16183__$1 = temp__4126__auto___16182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16168_16183__$1))
{var c__4312__auto___16184 = cljs.core.chunk_first.call(null,seq__16168_16183__$1);{
var G__16185 = cljs.core.chunk_rest.call(null,seq__16168_16183__$1);
var G__16186 = c__4312__auto___16184;
var G__16187 = cljs.core.count.call(null,c__4312__auto___16184);
var G__16188 = (0);
seq__16168_16172 = G__16185;
chunk__16169_16173 = G__16186;
count__16170_16174 = G__16187;
i__16171_16175 = G__16188;
continue;
}
} else
{var k_16189 = cljs.core.first.call(null,seq__16168_16183__$1);var m16167_16190 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16167_16190,k_16189,f.call(null,k_16189)));
{
var G__16191 = cljs.core.next.call(null,seq__16168_16183__$1);
var G__16192 = null;
var G__16193 = (0);
var G__16194 = (0);
seq__16168_16172 = G__16191;
chunk__16169_16173 = G__16192;
count__16170_16174 = G__16193;
i__16171_16175 = G__16194;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13536__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__13536__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__16201_16205 = cljs.core.seq.call(null,vs);var chunk__16202_16206 = null;var count__16203_16207 = (0);var i__16204_16208 = (0);while(true){
if((i__16204_16208 < count__16203_16207))
{var v_16209 = cljs.core._nth.call(null,chunk__16202_16206,i__16204_16208);var m16200_16210 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16200_16210,f.call(null,v_16209),v_16209));
{
var G__16211 = seq__16201_16205;
var G__16212 = chunk__16202_16206;
var G__16213 = count__16203_16207;
var G__16214 = (i__16204_16208 + (1));
seq__16201_16205 = G__16211;
chunk__16202_16206 = G__16212;
count__16203_16207 = G__16213;
i__16204_16208 = G__16214;
continue;
}
} else
{var temp__4126__auto___16215 = cljs.core.seq.call(null,seq__16201_16205);if(temp__4126__auto___16215)
{var seq__16201_16216__$1 = temp__4126__auto___16215;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16201_16216__$1))
{var c__4312__auto___16217 = cljs.core.chunk_first.call(null,seq__16201_16216__$1);{
var G__16218 = cljs.core.chunk_rest.call(null,seq__16201_16216__$1);
var G__16219 = c__4312__auto___16217;
var G__16220 = cljs.core.count.call(null,c__4312__auto___16217);
var G__16221 = (0);
seq__16201_16205 = G__16218;
chunk__16202_16206 = G__16219;
count__16203_16207 = G__16220;
i__16204_16208 = G__16221;
continue;
}
} else
{var v_16222 = cljs.core.first.call(null,seq__16201_16216__$1);var m16200_16223 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16200_16223,f.call(null,v_16222),v_16222));
{
var G__16224 = cljs.core.next.call(null,seq__16201_16216__$1);
var G__16225 = null;
var G__16226 = (0);
var G__16227 = (0);
seq__16201_16205 = G__16224;
chunk__16202_16206 = G__16225;
count__16203_16207 = G__16226;
i__16204_16208 = G__16227;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13536__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__16228){var vec__16230 = p__16228;var k = cljs.core.nth.call(null,vec__16230,(0),null);var ks = cljs.core.nthnext.call(null,vec__16230,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3544__auto__ = ks;if(and__3544__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3544__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__13536__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__16239_16245 = cljs.core.seq.call(null,x);var chunk__16240_16246 = null;var count__16241_16247 = (0);var i__16242_16248 = (0);while(true){
if((i__16242_16248 < count__16241_16247))
{var vec__16243_16249 = cljs.core._nth.call(null,chunk__16240_16246,i__16242_16248);var k_16250 = cljs.core.nth.call(null,vec__16243_16249,(0),null);var v_16251 = cljs.core.nth.call(null,vec__16243_16249,(1),null);var m16238_16252 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16238_16252,((typeof k_16250 === 'string')?cljs.core.keyword.call(null,k_16250):k_16250),keywordize_map.call(null,v_16251)));
{
var G__16253 = seq__16239_16245;
var G__16254 = chunk__16240_16246;
var G__16255 = count__16241_16247;
var G__16256 = (i__16242_16248 + (1));
seq__16239_16245 = G__16253;
chunk__16240_16246 = G__16254;
count__16241_16247 = G__16255;
i__16242_16248 = G__16256;
continue;
}
} else
{var temp__4126__auto___16257 = cljs.core.seq.call(null,seq__16239_16245);if(temp__4126__auto___16257)
{var seq__16239_16258__$1 = temp__4126__auto___16257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16239_16258__$1))
{var c__4312__auto___16259 = cljs.core.chunk_first.call(null,seq__16239_16258__$1);{
var G__16260 = cljs.core.chunk_rest.call(null,seq__16239_16258__$1);
var G__16261 = c__4312__auto___16259;
var G__16262 = cljs.core.count.call(null,c__4312__auto___16259);
var G__16263 = (0);
seq__16239_16245 = G__16260;
chunk__16240_16246 = G__16261;
count__16241_16247 = G__16262;
i__16242_16248 = G__16263;
continue;
}
} else
{var vec__16244_16264 = cljs.core.first.call(null,seq__16239_16258__$1);var k_16265 = cljs.core.nth.call(null,vec__16244_16264,(0),null);var v_16266 = cljs.core.nth.call(null,vec__16244_16264,(1),null);var m16238_16267 = cljs.core.deref.call(null,m_atom__13536__auto__);cljs.core.reset_BANG_.call(null,m_atom__13536__auto__,cljs.core.assoc_BANG_.call(null,m16238_16267,((typeof k_16265 === 'string')?cljs.core.keyword.call(null,k_16265):k_16265),keywordize_map.call(null,v_16266)));
{
var G__16268 = cljs.core.next.call(null,seq__16239_16258__$1);
var G__16269 = null;
var G__16270 = (0);
var G__16271 = (0);
seq__16239_16245 = G__16268;
chunk__16240_16246 = G__16269;
count__16241_16247 = G__16270;
i__16242_16248 = G__16271;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13536__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__13605__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__13605__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__16272 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__16273 = cljs.core.next.call(null,ks);
m = G__16272;
ks = G__16273;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3556__auto__ = m;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4281__auto__ = (function iter__16282(s__16283){return (new cljs.core.LazySeq(null,(function (){var s__16283__$1 = s__16283;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16283__$1);if(temp__4126__auto__)
{var s__16283__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16283__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__16283__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__16285 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__16284 = (0);while(true){
if((i__16284 < size__4280__auto__))
{var vec__16288 = cljs.core._nth.call(null,c__4279__auto__,i__16284);var k = cljs.core.nth.call(null,vec__16288,(0),null);var v = cljs.core.nth.call(null,vec__16288,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__16285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__16290 = (i__16284 + (1));
i__16284 = G__16290;
continue;
}
} else
{{
var G__16291 = (i__16284 + (1));
i__16284 = G__16291;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16285),iter__16282.call(null,cljs.core.chunk_rest.call(null,s__16283__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16285),null);
}
} else
{var vec__16289 = cljs.core.first.call(null,s__16283__$2);var k = cljs.core.nth.call(null,vec__16289,(0),null);var v = cljs.core.nth.call(null,vec__16289,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__16282.call(null,cljs.core.rest.call(null,s__16283__$2)));
} else
{{
var G__16292 = cljs.core.rest.call(null,s__16283__$2);
s__16283__$1 = G__16292;
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
});return iter__4281__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__16293){
var m = cljs.core.first(arglist__16293);
var kvs = cljs.core.rest(arglist__16293);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__16294){
var m = cljs.core.first(arglist__16294);
arglist__16294 = cljs.core.next(arglist__16294);
var key_seq = cljs.core.first(arglist__16294);
arglist__16294 = cljs.core.next(arglist__16294);
var f = cljs.core.first(arglist__16294);
var args = cljs.core.rest(arglist__16294);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4281__auto__ = ((function (s){
return (function iter__16299(s__16300){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__16300__$1 = s__16300;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16300__$1);if(temp__4126__auto__)
{var s__16300__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16300__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__16300__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__16302 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__16301 = (0);while(true){
if((i__16301 < size__4280__auto__))
{var x = cljs.core._nth.call(null,c__4279__auto__,i__16301);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__16302,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__16303 = (i__16301 + (1));
i__16301 = G__16303;
continue;
}
} else
{{
var G__16304 = (i__16301 + (1));
i__16301 = G__16304;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16302),iter__16299.call(null,cljs.core.chunk_rest.call(null,s__16300__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16302),null);
}
} else
{var x = cljs.core.first.call(null,s__16300__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__16299.call(null,cljs.core.rest.call(null,s__16300__$2)));
} else
{{
var G__16305 = cljs.core.rest.call(null,s__16300__$2);
s__16300__$1 = G__16305;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4281__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__16306){
var colls = cljs.core.seq(arglist__16306);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__16307__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__16308 = conj_when.call(null,coll,x);
var G__16309 = cljs.core.first.call(null,xs);
var G__16310 = cljs.core.next.call(null,xs);
coll = G__16308;
x = G__16309;
xs = G__16310;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__16307 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16307__delegate.call(this,coll,x,xs);};
G__16307.cljs$lang$maxFixedArity = 2;
G__16307.cljs$lang$applyTo = (function (arglist__16311){
var coll = cljs.core.first(arglist__16311);
arglist__16311 = cljs.core.next(arglist__16311);
var x = cljs.core.first(arglist__16311);
var xs = cljs.core.rest(arglist__16311);
return G__16307__delegate(coll,x,xs);
});
G__16307.cljs$core$IFn$_invoke$arity$variadic = G__16307__delegate;
return G__16307;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__16313__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__16312_SHARP_){return cljs.core.apply.call(null,f,p1__16312_SHARP_,args);
}));
};
var G__16313 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16313__delegate.call(this,a,f,args);};
G__16313.cljs$lang$maxFixedArity = 2;
G__16313.cljs$lang$applyTo = (function (arglist__16314){
var a = cljs.core.first(arglist__16314);
arglist__16314 = cljs.core.next(arglist__16314);
var f = cljs.core.first(arglist__16314);
var args = cljs.core.rest(arglist__16314);
return G__16313__delegate(a,f,args);
});
G__16313.cljs$core$IFn$_invoke$arity$variadic = G__16313__delegate;
return G__16313;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__16315__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__16315 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16315__delegate.call(this,f,arg,args);};
G__16315.cljs$lang$maxFixedArity = 2;
G__16315.cljs$lang$applyTo = (function (arglist__16316){
var f = cljs.core.first(arglist__16316);
arglist__16316 = cljs.core.next(arglist__16316);
var arg = cljs.core.first(arglist__16316);
var args = cljs.core.rest(arglist__16316);
return G__16315__delegate(f,arg,args);
});
G__16315.cljs$core$IFn$_invoke$arity$variadic = G__16315__delegate;
return G__16315;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map