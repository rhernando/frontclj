// Compiled by ClojureScript 0.0-2322
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.XhrIoPool');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
/**
* Stolen from `clojure.tools.macro`.
* Handles optional docstrings & attr maps for a macro def's name.
*/
taoensso.encore.name_with_attrs = (function name_with_attrs(name,macro_args){var vec__21395 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));var docstring = cljs.core.nth.call(null,vec__21395,(0),null);var macro_args__$1 = cljs.core.nth.call(null,vec__21395,(1),null);var vec__21396 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));var attr = cljs.core.nth.call(null,vec__21396,(0),null);var macro_args__$2 = cljs.core.nth.call(null,vec__21396,(1),null);var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.nnil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
taoensso.encore.nblank_QMARK_ = cljs.core.complement.call(null,clojure.string.blank_QMARK_);
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
taoensso.encore.format = (function() { 
var format__delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__21397){
var fmt = cljs.core.first(arglist__21397);
var args = cljs.core.rest(arglist__21397);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns x as a unambiguous Boolean, or nil on failure. Requires more
* explicit truthiness than (boolean x).
*/
taoensso.encore.parse_bool = (function parse_bool(x){if(cljs.core.truth_(x))
{if((x === true) || (x === false))
{return x;
} else
{if((cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0")) || (cljs.core._EQ_.call(null,x,(0))))
{return false;
} else
{if((cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1")) || (cljs.core._EQ_.call(null,x,(1))))
{return true;
} else
{return null;

}
}
}
} else
{return null;
}
});
taoensso.encore.as_bool = (function as_bool(x){if(cljs.core.truth_(x))
{var p = taoensso.encore.parse_bool.call(null,x);if(!((p == null)))
{return p;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-bool failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
} else
{return null;
}
});
/**
* Returns x as Long (or JavaScript integer), or nil on failure.
*/
taoensso.encore.parse_int = (function parse_int(x){if(cljs.core.truth_(x))
{if(typeof x === 'number')
{return cljs.core.long$.call(null,x);
} else
{if(typeof x === 'string')
{var x__$1 = parseInt(x);if(cljs.core.truth_(isNaN(x__$1)))
{return null;
} else
{return x__$1;
}
} else
{return null;

}
}
} else
{return null;
}
});
taoensso.encore.as_int = (function as_int(x){if(cljs.core.truth_(x))
{var or__3556__auto__ = taoensso.encore.parse_int.call(null,x);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-int failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
} else
{return null;
}
});
/**
* Returns x as Double (or JavaScript float), or nil on failure.
*/
taoensso.encore.parse_float = (function parse_float(x){if(cljs.core.truth_(x))
{if(typeof x === 'number')
{return x;
} else
{if(typeof x === 'string')
{var x__$1 = parseFloat(x);if(cljs.core.truth_(isNan(x__$1)))
{return null;
} else
{return x__$1;
}
} else
{return null;

}
}
} else
{return null;
}
});
taoensso.encore.as_float = (function as_float(x){var or__3556__auto__ = taoensso.encore.parse_float.call(null,x);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-float failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
taoensso.encore.stringy_QMARK_ = (function stringy_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
/**
* Like `name` but includes namespace in string when present.
*/
taoensso.encore.fq_name = (function fq_name(x){if(typeof x === 'string')
{return x;
} else
{var n = cljs.core.name.call(null,x);var temp__4124__auto__ = cljs.core.namespace.call(null,x);if(cljs.core.truth_(temp__4124__auto__))
{var ns = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
} else
{return n;
}
}
});
taoensso.encore.explode_keyword = (function explode_keyword(k){return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
/**
* @param {...*} var_args
*/
taoensso.encore.merge_keywords = (function() { 
var merge_keywords__delegate = function (ks,p__21398){var vec__21400 = p__21398;var as_ns_QMARK_ = cljs.core.nth.call(null,vec__21400,(0),null);var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));if(cljs.core.empty_QMARK_.call(null,parts))
{return null;
} else
{if(cljs.core.truth_(as_ns_QMARK_))
{return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else
{var ppop = cljs.core.pop.call(null,parts);return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
};
var merge_keywords = function (ks,var_args){
var p__21398 = null;if (arguments.length > 1) {
  p__21398 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_keywords__delegate.call(this,ks,p__21398);};
merge_keywords.cljs$lang$maxFixedArity = 1;
merge_keywords.cljs$lang$applyTo = (function (arglist__21401){
var ks = cljs.core.first(arglist__21401);
var p__21398 = cljs.core.rest(arglist__21401);
return merge_keywords__delegate(ks,p__21398);
});
merge_keywords.cljs$core$IFn$_invoke$arity$variadic = merge_keywords__delegate;
return merge_keywords;
})()
;
taoensso.encore.error_QMARK_ = (function error_QMARK_(x){var or__3556__auto__ = cljs.core.ex_data.call(null,x);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return (x instanceof Error);
}
});
taoensso.encore.pos_int_QMARK_ = (function pos_int_QMARK_(x){return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function nneg_int_QMARK_(x){return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.pow = (function pow(n,exp){return Math.pow.call(null,n,exp);
});
/**
* @param {...*} var_args
*/
taoensso.encore.round = (function() { 
var round__delegate = function (n,p__21402){var vec__21405 = p__21402;var type = cljs.core.nth.call(null,vec__21405,(0),null);var nplaces = cljs.core.nth.call(null,vec__21405,(1),null);var modifier = (cljs.core.truth_(nplaces)?Math.pow.call(null,10.0,nplaces):null);var n_STAR_ = ((cljs.core.not.call(null,modifier))?n:(n * modifier));var rounded = (function (){var G__21406 = ((((function (){var or__3556__auto__ = type;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__3556__auto__ = type;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);switch (G__21406) {
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
case "ceil":
return cljs.core.long$.call(null,Math.ceil.call(null,n_STAR_));

break;
case "floor":
return cljs.core.long$.call(null,Math.floor.call(null,n_STAR_));

break;
case "round":
return Math.round.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();if(cljs.core.not.call(null,modifier))
{return rounded;
} else
{return (rounded / modifier);
}
};
var round = function (n,var_args){
var p__21402 = null;if (arguments.length > 1) {
  p__21402 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return round__delegate.call(this,n,p__21402);};
round.cljs$lang$maxFixedArity = 1;
round.cljs$lang$applyTo = (function (arglist__21408){
var n = cljs.core.first(arglist__21408);
var p__21402 = cljs.core.rest(arglist__21408);
return round__delegate(n,p__21402);
});
round.cljs$core$IFn$_invoke$arity$variadic = round__delegate;
return round;
})()
;
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
* Optimized common case.
*/
taoensso.encore.round2 = (function round2(n){return (Math.round.call(null,(n * 1000.0)) / 1000.0);
});
/**
* Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
* Ref. http://www.ietf.org/rfc/rfc4122.txt,
* https://gist.github.com/franks42/4159427
*/
taoensso.encore.uuid_str = (function uuid_str(){var fs = (function (n){return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){return cljs.core.rand_int.call(null,(16)).toString((16));
})));
});var g = ((function (fs){
return (function (){return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});})(fs))
;var sb = (new goog.string.StringBuffer()).append(fs.call(null,(8)),"-",fs.call(null,(4)),"-4",fs.call(null,(3)),"-",g.call(null),fs.call(null,(3)),"-",fs.call(null,(12)));return sb.toString();
});
/**
* Returns binary exponential backoff value.
* @param {...*} var_args
*/
taoensso.encore.exp_backoff = (function() { 
var exp_backoff__delegate = function (nattempt,p__21409){var vec__21412 = p__21409;var map__21413 = cljs.core.nth.call(null,vec__21412,(0),null);var map__21413__$1 = ((cljs.core.seq_QMARK_.call(null,map__21413))?cljs.core.apply.call(null,cljs.core.hash_map,map__21413):map__21413);var factor = cljs.core.get.call(null,map__21413__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__21413__$1,new cljs.core.Keyword(null,"min","min",444991522));var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__21413__$1,new cljs.core.Keyword(null,"max","max",61366548));var binary_exp = Math.pow.call(null,(2),(nattempt - (1)));var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__3863__auto__ = min_SINGLEQUOTE_;var y__3864__auto__ = time;return ((x__3863__auto__ > y__3864__auto__) ? x__3863__auto__ : y__3864__auto__);
})():time);var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__3870__auto__ = max_SINGLEQUOTE_;var y__3871__auto__ = time__$1;return ((x__3870__auto__ < y__3871__auto__) ? x__3870__auto__ : y__3871__auto__);
})():time__$1);return time__$2;
})());
};
var exp_backoff = function (nattempt,var_args){
var p__21409 = null;if (arguments.length > 1) {
  p__21409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return exp_backoff__delegate.call(this,nattempt,p__21409);};
exp_backoff.cljs$lang$maxFixedArity = 1;
exp_backoff.cljs$lang$applyTo = (function (arglist__21414){
var nattempt = cljs.core.first(arglist__21414);
var p__21409 = cljs.core.rest(arglist__21414);
return exp_backoff__delegate(nattempt,p__21409);
});
exp_backoff.cljs$core$IFn$_invoke$arity$variadic = exp_backoff__delegate;
return exp_backoff;
})()
;
taoensso.encore.now_udt = (function now_udt(){return (new Date()).valueOf();
});
/**
* Useful for testing.
* @param {...*} var_args
*/
taoensso.encore.now_udt_mock_fn = (function() { 
var now_udt_mock_fn__delegate = function (p__21415){var vec__21417 = p__21415;var mock_udts = cljs.core.nth.call(null,vec__21417,(0),null);var mock_udts__$1 = (function (){var or__3556__auto__ = mock_udts;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.range.call(null);
}
})();var idx = cljs.core.atom.call(null,(-1));return ((function (mock_udts__$1,idx,vec__21417,mock_udts){
return (function (){return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__21417,mock_udts))
};
var now_udt_mock_fn = function (var_args){
var p__21415 = null;if (arguments.length > 0) {
  p__21415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return now_udt_mock_fn__delegate.call(this,p__21415);};
now_udt_mock_fn.cljs$lang$maxFixedArity = 0;
now_udt_mock_fn.cljs$lang$applyTo = (function (arglist__21418){
var p__21415 = cljs.core.seq(arglist__21418);
return now_udt_mock_fn__delegate(p__21415);
});
now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = now_udt_mock_fn__delegate;
return now_udt_mock_fn;
})()
;
taoensso.encore.secs__GT_ms = (function secs__GT_ms(secs){return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function ms__GT_secs(ms){return cljs.core.quot.call(null,ms,(1000));
});
/**
* Returns number of milliseconds in period defined by given args.
* @param {...*} var_args
*/
taoensso.encore.ms = (function() { 
var ms__delegate = function (p__21419){var map__21421 = p__21419;var map__21421__$1 = ((cljs.core.seq_QMARK_.call(null,map__21421))?cljs.core.apply.call(null,cljs.core.hash_map,map__21421):map__21421);var opts = map__21421__$1;var ms__$1 = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));var msecs = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));var secs = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));var mins = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"mins","mins",467369676));var hours = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"hours","hours",58380855));var days = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"days","days",-1394072564));var weeks = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));var months = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"months","months",-45571637));var years = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"years","years",-1298579689));if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.keys.call(null,opts)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))))));
}
return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms__$1)?ms__$1:(0))));
};
var ms = function (var_args){
var p__21419 = null;if (arguments.length > 0) {
  p__21419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ms__delegate.call(this,p__21419);};
ms.cljs$lang$maxFixedArity = 0;
ms.cljs$lang$applyTo = (function (arglist__21422){
var p__21419 = cljs.core.seq(arglist__21422);
return ms__delegate(p__21419);
});
ms.cljs$core$IFn$_invoke$arity$variadic = ms__delegate;
return ms;
})()
;
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
/**
* Like `swap!` but returns {:old-val _ :new-val _} instead of just `<new-val>`.
* Useful for writing atomic primitives like `pull!`, etc.
* @param {...*} var_args
*/
taoensso.encore.swap_BANG__STAR_ = (function() { 
var swap_BANG__STAR___delegate = function (atom_,f,args){while(true){
var old_val = cljs.core.deref.call(null,atom_);var new_val = cljs.core.apply.call(null,f,old_val,args);if(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-val","old-val",725109183),old_val,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new_val], null);
} else
{{
continue;
}
}
break;
}
};
var swap_BANG__STAR_ = function (atom_,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return swap_BANG__STAR___delegate.call(this,atom_,f,args);};
swap_BANG__STAR_.cljs$lang$maxFixedArity = 2;
swap_BANG__STAR_.cljs$lang$applyTo = (function (arglist__21423){
var atom_ = cljs.core.first(arglist__21423);
arglist__21423 = cljs.core.next(arglist__21423);
var f = cljs.core.first(arglist__21423);
var args = cljs.core.rest(arglist__21423);
return swap_BANG__STAR___delegate(atom_,f,args);
});
swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG__STAR___delegate;
return swap_BANG__STAR_;
})()
;
taoensso.encore.reset_BANG__STAR_ = (function reset_BANG__STAR_(atom_,newval){return taoensso.encore.swap_BANG__STAR_.call(null,atom_,(function (_){return newval;
}));
});
/**
* @param {...*} var_args
*/
taoensso.encore.swap_in_BANG_ = (function() { 
var swap_in_BANG___delegate = function (atom_,korks,f,args){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var vec__21425 = (function (){while(true){
var old_val = cljs.core.deref.call(null,atom_);var new_val = ((cljs.core.empty_QMARK_.call(null,ks))?cljs.core.apply.call(null,f,old_val,args):cljs.core.apply.call(null,cljs.core.update_in,old_val,ks,f,args));if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val)))
{{
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
}
break;
}
})();var old_val = cljs.core.nth.call(null,vec__21425,(0),null);var new_val = cljs.core.nth.call(null,vec__21425,(1),null);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old-val","old-val",725109183),old_val,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new_val,new cljs.core.Keyword(null,"old-val-in","old-val-in",245591707),cljs.core.get_in.call(null,old_val,ks),new cljs.core.Keyword(null,"new-val-in","new-val-in",-924431609),cljs.core.get_in.call(null,new_val,ks)], null);
};
var swap_in_BANG_ = function (atom_,korks,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return swap_in_BANG___delegate.call(this,atom_,korks,f,args);};
swap_in_BANG_.cljs$lang$maxFixedArity = 3;
swap_in_BANG_.cljs$lang$applyTo = (function (arglist__21426){
var atom_ = cljs.core.first(arglist__21426);
arglist__21426 = cljs.core.next(arglist__21426);
var korks = cljs.core.first(arglist__21426);
arglist__21426 = cljs.core.next(arglist__21426);
var f = cljs.core.first(arglist__21426);
var args = cljs.core.rest(arglist__21426);
return swap_in_BANG___delegate(atom_,korks,f,args);
});
swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_in_BANG___delegate;
return swap_in_BANG_;
})()
;
taoensso.encore.reset_in_BANG_ = (function reset_in_BANG_(atom_,korks,newval){return taoensso.encore.swap_in_BANG_.call(null,atom_,korks,(function (_){return newval;
}));
});
/**
* @param {...*} var_args
*/
taoensso.encore.dissoc_in = (function() { 
var dissoc_in__delegate = function (m,korks,dissoc_ks){return cljs.core.apply.call(null,cljs.core.update_in,m,korks,cljs.core.dissoc,dissoc_ks);
};
var dissoc_in = function (m,korks,var_args){
var dissoc_ks = null;if (arguments.length > 2) {
  dissoc_ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return dissoc_in__delegate.call(this,m,korks,dissoc_ks);};
dissoc_in.cljs$lang$maxFixedArity = 2;
dissoc_in.cljs$lang$applyTo = (function (arglist__21427){
var m = cljs.core.first(arglist__21427);
arglist__21427 = cljs.core.next(arglist__21427);
var korks = cljs.core.first(arglist__21427);
var dissoc_ks = cljs.core.rest(arglist__21427);
return dissoc_in__delegate(m,korks,dissoc_ks);
});
dissoc_in.cljs$core$IFn$_invoke$arity$variadic = dissoc_in__delegate;
return dissoc_in;
})()
;
taoensso.encore.contains_in_QMARK_ = (function contains_in_QMARK_(coll,ks){return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
* Assocs each kv iff its value is not nil.
* @param {...*} var_args
*/
taoensso.encore.assoc_some = (function() { 
var assoc_some__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3556__auto__ = m;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4281__auto__ = (function iter__21436(s__21437){return (new cljs.core.LazySeq(null,(function (){var s__21437__$1 = s__21437;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21437__$1);if(temp__4126__auto__)
{var s__21437__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21437__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__21437__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__21439 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__21438 = (0);while(true){
if((i__21438 < size__4280__auto__))
{var vec__21442 = cljs.core._nth.call(null,c__4279__auto__,i__21438);var k = cljs.core.nth.call(null,vec__21442,(0),null);var v = cljs.core.nth.call(null,vec__21442,(1),null);if(!((v == null)))
{cljs.core.chunk_append.call(null,b__21439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21444 = (i__21438 + (1));
i__21438 = G__21444;
continue;
}
} else
{{
var G__21445 = (i__21438 + (1));
i__21438 = G__21445;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21439),iter__21436.call(null,cljs.core.chunk_rest.call(null,s__21437__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21439),null);
}
} else
{var vec__21443 = cljs.core.first.call(null,s__21437__$2);var k = cljs.core.nth.call(null,vec__21443,(0),null);var v = cljs.core.nth.call(null,vec__21443,(1),null);if(!((v == null)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21436.call(null,cljs.core.rest.call(null,s__21437__$2)));
} else
{{
var G__21446 = cljs.core.rest.call(null,s__21437__$2);
s__21437__$1 = G__21446;
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
var assoc_some = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_some__delegate.call(this,m,kvs);};
assoc_some.cljs$lang$maxFixedArity = 1;
assoc_some.cljs$lang$applyTo = (function (arglist__21447){
var m = cljs.core.first(arglist__21447);
var kvs = cljs.core.rest(arglist__21447);
return assoc_some__delegate(m,kvs);
});
assoc_some.cljs$core$IFn$_invoke$arity$variadic = assoc_some__delegate;
return assoc_some;
})()
;
/**
* Assocs each kv iff its val is truthy.
* @param {...*} var_args
*/
taoensso.encore.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3556__auto__ = m;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4281__auto__ = (function iter__21456(s__21457){return (new cljs.core.LazySeq(null,(function (){var s__21457__$1 = s__21457;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21457__$1);if(temp__4126__auto__)
{var s__21457__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21457__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__21457__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__21459 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__21458 = (0);while(true){
if((i__21458 < size__4280__auto__))
{var vec__21462 = cljs.core._nth.call(null,c__4279__auto__,i__21458);var k = cljs.core.nth.call(null,vec__21462,(0),null);var v = cljs.core.nth.call(null,vec__21462,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__21459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21464 = (i__21458 + (1));
i__21458 = G__21464;
continue;
}
} else
{{
var G__21465 = (i__21458 + (1));
i__21458 = G__21465;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21459),iter__21456.call(null,cljs.core.chunk_rest.call(null,s__21457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21459),null);
}
} else
{var vec__21463 = cljs.core.first.call(null,s__21457__$2);var k = cljs.core.nth.call(null,vec__21463,(0),null);var v = cljs.core.nth.call(null,vec__21463,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21456.call(null,cljs.core.rest.call(null,s__21457__$2)));
} else
{{
var G__21466 = cljs.core.rest.call(null,s__21457__$2);
s__21457__$1 = G__21466;
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
assoc_when.cljs$lang$applyTo = (function (arglist__21467){
var m = cljs.core.first(arglist__21467);
var kvs = cljs.core.rest(arglist__21467);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* (seq     {:a :A}) => ([:a :A])
* (seq-kvs {:a :A}) => (:a :A)
*/
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
* Like `apply` but assumes last arg is a map whose elements should be applied
* to `f` as an unpaired seq:
* (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
* where fn will receive args as: `(1 :y 2 :z 3)`.
* @param {...*} var_args
*/
taoensso.encore.mapply = (function() { 
var mapply__delegate = function (f,args){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
};
var mapply = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mapply__delegate.call(this,f,args);};
mapply.cljs$lang$maxFixedArity = 1;
mapply.cljs$lang$applyTo = (function (arglist__21468){
var f = cljs.core.first(arglist__21468);
var args = cljs.core.rest(arglist__21468);
return mapply__delegate(f,args);
});
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__delegate;
return mapply;
})()
;
taoensso.encore.map_kvs = (function map_kvs(kf,vf,m){if(cljs.core.truth_(m))
{var kf__$1 = ((!((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){return cljs.core.keyword.call(null,k);
}));var vf__$1 = ((!((vf === new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){return cljs.core.keyword.call(null,v);
});})(kf__$1))
);return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,v,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),(function (){var or__3556__auto__ = m;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else
{return null;
}
});
taoensso.encore.map_keys = (function map_keys(f,m){return taoensso.encore.map_kvs.call(null,(function (k,_){return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function map_vals(f,m){return taoensso.encore.map_kvs.call(null,null,(function (_,v){return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function filter_kvs(predk,predv,m){if(cljs.core.truth_(m))
{return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){if(cljs.core.truth_((function (){var and__3544__auto__ = predk.call(null,k);if(cljs.core.truth_(and__3544__auto__))
{return predv.call(null,v);
} else
{return and__3544__auto__;
}
})()))
{return m__$1;
} else
{return cljs.core.dissoc.call(null,m__$1,k);
}
}),(function (){var or__3556__auto__ = m;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var or__3556__auto__ = m;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else
{return null;
}
});
taoensso.encore.filter_keys = (function filter_keys(pred,m){return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function filter_vals(pred,m){return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
* Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
* pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
* way that preservers :or semantics.
*/
taoensso.encore.remove_vals = (function remove_vals(pred,m){return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){if(cljs.core.truth_(pred.call(null,v)))
{return cljs.core.dissoc.call(null,m__$1,k);
} else
{return m__$1;
}
}),m,m);
});
taoensso.encore.keywordize_map = (function keywordize_map(m){if(cljs.core.truth_(m))
{return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else
{return null;
}
});
/**
* Cross between `hash-map` & `map-kvs`.
* @param {...*} var_args
*/
taoensso.encore.as_map = (function() { 
var as_map__delegate = function (coll,p__21469){var vec__21475 = p__21469;var kf = cljs.core.nth.call(null,vec__21475,(0),null);var vf = cljs.core.nth.call(null,vec__21475,(1),null);if(cljs.core.coll_QMARK_.call(null,coll))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)))))));
}
if(((kf == null)) || (cljs.core.fn_QMARK_.call(null,kf)) || ((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),cljs.core.list(new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))))));
}
if(((vf == null)) || (cljs.core.fn_QMARK_.call(null,vf)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))))));
}
var _PERCENT_ = (function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s_SINGLEQUOTE_ = temp__4126__auto__;var kf__$1 = ((!((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (s_SINGLEQUOTE_,temp__4126__auto__,vec__21475,kf,vf){
return (function (k,_){return cljs.core.keyword.call(null,k);
});})(s_SINGLEQUOTE_,temp__4126__auto__,vec__21475,kf,vf))
);var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);var G__21477 = s_SINGLEQUOTE_;var vec__21478 = G__21477;var k = cljs.core.nth.call(null,vec__21478,(0),null);var v = cljs.core.nth.call(null,vec__21478,(1),null);var s = vec__21478;var m__$1 = m;var G__21477__$1 = G__21477;while(true){
var m__$2 = m__$1;var vec__21479 = G__21477__$1;var k__$1 = cljs.core.nth.call(null,vec__21479,(0),null);var v__$1 = cljs.core.nth.call(null,vec__21479,(1),null);var s__$1 = vec__21479;var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);var temp__4124__auto__ = cljs.core.nnext.call(null,s__$1);if(temp__4124__auto__)
{var n = temp__4124__auto__;{
var G__21480 = new_m;
var G__21481 = n;
m__$1 = G__21480;
G__21477__$1 = G__21481;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
} else
{return null;
}
})();if(((_PERCENT_ == null)) || (cljs.core.map_QMARK_.call(null,_PERCENT_)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))))));
}
return _PERCENT_;
};
var as_map = function (coll,var_args){
var p__21469 = null;if (arguments.length > 1) {
  p__21469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return as_map__delegate.call(this,coll,p__21469);};
as_map.cljs$lang$maxFixedArity = 1;
as_map.cljs$lang$applyTo = (function (arglist__21482){
var coll = cljs.core.first(arglist__21482);
var p__21469 = cljs.core.rest(arglist__21482);
return as_map__delegate(coll,p__21469);
});
as_map.cljs$core$IFn$_invoke$arity$variadic = as_map__delegate;
return as_map;
})()
;
/**
* Like `into` but supports multiple "from"s.
* @param {...*} var_args
*/
taoensso.encore.into_all = (function() {
var into_all = null;
var into_all__2 = (function (to,from){return cljs.core.into.call(null,to,from);
});
var into_all__3 = (function() { 
var G__21483__delegate = function (to,from,more){return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
};
var G__21483 = function (to,from,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21483__delegate.call(this,to,from,more);};
G__21483.cljs$lang$maxFixedArity = 2;
G__21483.cljs$lang$applyTo = (function (arglist__21484){
var to = cljs.core.first(arglist__21484);
arglist__21484 = cljs.core.next(arglist__21484);
var from = cljs.core.first(arglist__21484);
var more = cljs.core.rest(arglist__21484);
return G__21483__delegate(to,from,more);
});
G__21483.cljs$core$IFn$_invoke$arity$variadic = G__21483__delegate;
return G__21483;
})()
;
into_all = function(to,from,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return into_all__2.call(this,to,from);
default:
return into_all__3.cljs$core$IFn$_invoke$arity$variadic(to,from, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_all.cljs$lang$maxFixedArity = 2;
into_all.cljs$lang$applyTo = into_all__3.cljs$lang$applyTo;
into_all.cljs$core$IFn$_invoke$arity$2 = into_all__2;
into_all.cljs$core$IFn$_invoke$arity$variadic = into_all__3.cljs$core$IFn$_invoke$arity$variadic;
return into_all;
})()
;
/**
* Greedy version of `interleave`.
* Ref. https://groups.google.com/d/msg/clojure/o4Hg0s_1Avs/rPn3P4Ig6MsJ
* @param {...*} var_args
*/
taoensso.encore.interleave_all = (function() {
var interleave_all = null;
var interleave_all__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);if((s1) && (s2))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else
{if(s1)
{return s1;
} else
{if(s2)
{return s2;
} else
{return null;
}
}
}
}),null,null));
});
var interleave_all__3 = (function() { 
var G__21485__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
};
var G__21485 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21485__delegate.call(this,c1,c2,colls);};
G__21485.cljs$lang$maxFixedArity = 2;
G__21485.cljs$lang$applyTo = (function (arglist__21486){
var c1 = cljs.core.first(arglist__21486);
arglist__21486 = cljs.core.next(arglist__21486);
var c2 = cljs.core.first(arglist__21486);
var colls = cljs.core.rest(arglist__21486);
return G__21485__delegate(c1,c2,colls);
});
G__21485.cljs$core$IFn$_invoke$arity$variadic = G__21485__delegate;
return G__21485;
})()
;
interleave_all = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave_all__2.call(this,c1,c2);
default:
return interleave_all__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave_all.cljs$lang$maxFixedArity = 2;
interleave_all.cljs$lang$applyTo = interleave_all__3.cljs$lang$applyTo;
interleave_all.cljs$core$IFn$_invoke$arity$2 = interleave_all__2;
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave_all;
})()
;
/**
* Prefer `set` when order doesn't matter (much faster).
*/
taoensso.encore.distinctv = (function() {
var distinctv = null;
var distinctv__1 = (function (coll){return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__21491,in$){var vec__21492 = p__21491;var v = cljs.core.nth.call(null,vec__21492,(0),null);var seen = cljs.core.nth.call(null,vec__21492,(1),null);if(!(cljs.core.contains_QMARK_.call(null,seen,in$)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
var distinctv__2 = (function (keyfn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__21493,in$){var vec__21494 = p__21493;var v = cljs.core.nth.call(null,vec__21494,(0),null);var seen = cljs.core.nth.call(null,vec__21494,(1),null);var in_STAR_ = keyfn.call(null,in$);if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
distinctv = function(keyfn,coll){
switch(arguments.length){
case 1:
return distinctv__1.call(this,keyfn);
case 2:
return distinctv__2.call(this,keyfn,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinctv.cljs$core$IFn$_invoke$arity$1 = distinctv__1;
distinctv.cljs$core$IFn$_invoke$arity$2 = distinctv__2;
return distinctv;
})()
;
/**
* Like `sort-by` for distinct. Based on clojure.core/distinct.
*/
taoensso.encore.distinct_by = (function distinct_by(keyfn,coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__21501,seen__$1){while(true){
var vec__21502 = p__21501;var v = cljs.core.nth.call(null,vec__21502,(0),null);var xs__$1 = vec__21502;var temp__4126__auto__ = cljs.core.seq.call(null,xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;var v_STAR_ = keyfn.call(null,v);if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_))
{{
var G__21503 = cljs.core.rest.call(null,s);
var G__21504 = seen__$1;
p__21501 = G__21503;
seen__$1 = G__21504;
continue;
}
} else
{return cljs.core.cons.call(null,v,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
* Reverse comparator.
*/
taoensso.encore.rcompare = (function rcompare(x,y){return cljs.core.compare.call(null,y,x);
});
/**
* Like `merge-with` but merges maps recursively, applying the given fn
* only when there's a non-map at a particular level.
* 
* (merge-deep-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
* {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
* => {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
* @param {...*} var_args
*/
taoensso.encore.merge_deep_with = (function() { 
var merge_deep_with__delegate = function (f,maps){return cljs.core.apply.call(null,(function() { 
var m__delegate = function (maps__$1){if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1))
{return cljs.core.apply.call(null,cljs.core.merge_with,m,maps__$1);
} else
{return cljs.core.apply.call(null,f,maps__$1);
}
};
var m = function (var_args){
var maps__$1 = null;if (arguments.length > 0) {
  maps__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return m__delegate.call(this,maps__$1);};
m.cljs$lang$maxFixedArity = 0;
m.cljs$lang$applyTo = (function (arglist__21505){
var maps__$1 = cljs.core.seq(arglist__21505);
return m__delegate(maps__$1);
});
m.cljs$core$IFn$_invoke$arity$variadic = m__delegate;
return m;
})()
,maps);
};
var merge_deep_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_deep_with__delegate.call(this,f,maps);};
merge_deep_with.cljs$lang$maxFixedArity = 1;
merge_deep_with.cljs$lang$applyTo = (function (arglist__21506){
var f = cljs.core.first(arglist__21506);
var maps = cljs.core.rest(arglist__21506);
return merge_deep_with__delegate(f,maps);
});
merge_deep_with.cljs$core$IFn$_invoke$arity$variadic = merge_deep_with__delegate;
return merge_deep_with;
})()
;
taoensso.encore.merge_deep = cljs.core.partial.call(null,taoensso.encore.merge_deep_with,(function (x,y){return y;
}));
/**
* Returns the 'greatest' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.greatest = (function() { 
var greatest__delegate = function (coll,p__21509){var vec__21511 = p__21509;var _QMARK_comparator = cljs.core.nth.call(null,vec__21511,(0),null);var comparator = (function (){var or__3556__auto__ = _QMARK_comparator;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return taoensso.encore.rcompare;
}
})();return cljs.core.reduce.call(null,((function (comparator,vec__21511,_QMARK_comparator){
return (function (p1__21507_SHARP_,p2__21508_SHARP_){if((comparator.call(null,p1__21507_SHARP_,p2__21508_SHARP_) > (0)))
{return p2__21508_SHARP_;
} else
{return p1__21507_SHARP_;
}
});})(comparator,vec__21511,_QMARK_comparator))
,coll);
};
var greatest = function (coll,var_args){
var p__21509 = null;if (arguments.length > 1) {
  p__21509 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return greatest__delegate.call(this,coll,p__21509);};
greatest.cljs$lang$maxFixedArity = 1;
greatest.cljs$lang$applyTo = (function (arglist__21512){
var coll = cljs.core.first(arglist__21512);
var p__21509 = cljs.core.rest(arglist__21512);
return greatest__delegate(coll,p__21509);
});
greatest.cljs$core$IFn$_invoke$arity$variadic = greatest__delegate;
return greatest;
})()
;
/**
* Returns the 'least' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.least = (function() { 
var least__delegate = function (coll,p__21515){var vec__21517 = p__21515;var _QMARK_comparator = cljs.core.nth.call(null,vec__21517,(0),null);var comparator = (function (){var or__3556__auto__ = _QMARK_comparator;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return taoensso.encore.rcompare;
}
})();return cljs.core.reduce.call(null,((function (comparator,vec__21517,_QMARK_comparator){
return (function (p1__21513_SHARP_,p2__21514_SHARP_){if((comparator.call(null,p1__21513_SHARP_,p2__21514_SHARP_) < (0)))
{return p2__21514_SHARP_;
} else
{return p1__21513_SHARP_;
}
});})(comparator,vec__21517,_QMARK_comparator))
,coll);
};
var least = function (coll,var_args){
var p__21515 = null;if (arguments.length > 1) {
  p__21515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return least__delegate.call(this,coll,p__21515);};
least.cljs$lang$maxFixedArity = 1;
least.cljs$lang$applyTo = (function (arglist__21518){
var coll = cljs.core.first(arglist__21518);
var p__21515 = cljs.core.rest(arglist__21518);
return least__delegate(coll,p__21515);
});
least.cljs$core$IFn$_invoke$arity$variadic = least__delegate;
return least;
})()
;
/**
* Like `repeatedly` but faster and `conj`s items into given collection.
*/
taoensso.encore.repeatedly_into = (function repeatedly_into(coll,n,f){if((coll instanceof clojure.lang.IEditableCollection))
{var v = cljs.core.transient$.call(null,coll);var idx = (0);while(true){
if((idx >= n))
{return cljs.core.persistent_BANG_.call(null,v);
} else
{{
var G__21519 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__21520 = (idx + (1));
v = G__21519;
idx = G__21520;
continue;
}
}
break;
}
} else
{var v = coll;var idx = (0);while(true){
if((idx >= n))
{return v;
} else
{{
var G__21521 = cljs.core.conj.call(null,v,f.call(null));
var G__21522 = (idx + (1));
v = G__21521;
idx = G__21522;
continue;
}
}
break;
}
}
});
/**
* Gives a consistent, flexible, cross-platform substring API with support for:
* * Clamping of indexes beyond string limits.
* * Negative indexes: [   0   |   1   |  ...  |  n-1  |   n   ) or
* [  -n   | -n+1  |  ...  |  -1   |   0   ).
* (start index inclusive, end index exclusive).
* 
* Note that `max-len` was chosen over `end-idx` since it's less ambiguous and
* easier to reason about - esp. when accepting negative indexes.
* @param {...*} var_args
*/
taoensso.encore.substr = (function() { 
var substr__delegate = function (s,start_idx,p__21523){var vec__21525 = p__21523;var max_len = cljs.core.nth.call(null,vec__21525,(0),null);if(((max_len == null)) || (taoensso.encore.nneg_int_QMARK_.call(null,max_len)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))))));
}
var slen = cljs.core.count.call(null,s);var start_idx_STAR_ = (((start_idx >= (0)))?(function (){var x__3870__auto__ = start_idx;var y__3871__auto__ = slen;return ((x__3870__auto__ < y__3871__auto__) ? x__3870__auto__ : y__3871__auto__);
})():(function (){var x__3863__auto__ = (0);var y__3864__auto__ = ((slen + start_idx) - (1));return ((x__3863__auto__ > y__3864__auto__) ? x__3863__auto__ : y__3864__auto__);
})());var end_idx_STAR_ = ((cljs.core.not.call(null,max_len))?slen:(function (){var x__3870__auto__ = (start_idx_STAR_ + max_len);var y__3871__auto__ = slen;return ((x__3870__auto__ < y__3871__auto__) ? x__3870__auto__ : y__3871__auto__);
})());return s.substring(start_idx_STAR_,end_idx_STAR_);
};
var substr = function (s,start_idx,var_args){
var p__21523 = null;if (arguments.length > 2) {
  p__21523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return substr__delegate.call(this,s,start_idx,p__21523);};
substr.cljs$lang$maxFixedArity = 2;
substr.cljs$lang$applyTo = (function (arglist__21526){
var s = cljs.core.first(arglist__21526);
arglist__21526 = cljs.core.next(arglist__21526);
var start_idx = cljs.core.first(arglist__21526);
var p__21523 = cljs.core.rest(arglist__21526);
return substr__delegate(s,start_idx,p__21523);
});
substr.cljs$core$IFn$_invoke$arity$variadic = substr__delegate;
return substr;
})()
;
taoensso.encore.str_contains_QMARK_ = (function str_contains_QMARK_(s,substr){return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function str_starts_with_QMARK_(s,substr){return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function str_ends_with_QMARK_(s,substr){var s_len = s.length;var substr_len = substr.length;if((s_len >= substr_len))
{return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else
{return null;
}
});
/**
* Like `clojure.string/join` but ensures no double separators.
* @param {...*} var_args
*/
taoensso.encore.join_once = (function() { 
var join_once__delegate = function (separator,coll){return cljs.core.reduce.call(null,(function (s1,s2){var s1__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1));var s2__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2));if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator)))
{if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1.substring((1))));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
}
} else
{if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
} else
{if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,"")))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
}
}
}
}),null,coll);
};
var join_once = function (separator,var_args){
var coll = null;if (arguments.length > 1) {
  coll = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return join_once__delegate.call(this,separator,coll);};
join_once.cljs$lang$maxFixedArity = 1;
join_once.cljs$lang$applyTo = (function (arglist__21527){
var separator = cljs.core.first(arglist__21527);
var coll = cljs.core.rest(arglist__21527);
return join_once__delegate(separator,coll);
});
join_once.cljs$core$IFn$_invoke$arity$variadic = join_once__delegate;
return join_once;
})()
;
/**
* Joins string paths (URLs, file paths, etc.) ensuring correct "/"
* interposition.
* @param {...*} var_args
*/
taoensso.encore.path = (function() { 
var path__delegate = function (parts){return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
};
var path = function (var_args){
var parts = null;if (arguments.length > 0) {
  parts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,parts);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__21528){
var parts = cljs.core.seq(arglist__21528);
return path__delegate(parts);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* Converts all word breaks of any form and length (including line breaks of any
* form, tabs, spaces, etc.) to a single regular space.
*/
taoensso.encore.norm_word_breaks = (function norm_word_breaks(s){return clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/\s+/," ");
});
taoensso.encore.count_words = (function count_words(s){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return (0);
} else
{return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
taoensso.encore.count_words.call(null,"Hello this is a    test");
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.locked = (function locked(lock_object,f){return f.call(null);
});
/**
* Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
* and immediately applies memoized f to given arguments.
* @param {...*} var_args
*/
taoensso.encore.memoized = (function() { 
var memoized__delegate = function (cache,f,args){var lockf = (function (){var temp__4124__auto__ = cljs.core.deref.call(null,cache).call(null,args);if(cljs.core.truth_(temp__4124__auto__))
{var dv = temp__4124__auto__;return cljs.core.deref.call(null,dv);
} else
{var dv = (new cljs.core.Delay(((function (temp__4124__auto__){
return (function (){return cljs.core.apply.call(null,f,args);
});})(temp__4124__auto__))
,null));cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,args,dv);
return cljs.core.deref.call(null,dv);
}
});if(cljs.core.not.call(null,cache))
{return cljs.core.apply.call(null,f,args);
} else
{var temp__4124__auto__ = cljs.core.deref.call(null,cache).call(null,args);if(cljs.core.truth_(temp__4124__auto__))
{var dv = temp__4124__auto__;return cljs.core.deref.call(null,dv);
} else
{return taoensso.encore.locked.call(null,cache,lockf);
}
}
};
var memoized = function (cache,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return memoized__delegate.call(this,cache,f,args);};
memoized.cljs$lang$maxFixedArity = 2;
memoized.cljs$lang$applyTo = (function (arglist__21529){
var cache = cljs.core.first(arglist__21529);
arglist__21529 = cljs.core.next(arglist__21529);
var f = cljs.core.first(arglist__21529);
var args = cljs.core.rest(arglist__21529);
return memoized__delegate(cache,f,args);
});
memoized.cljs$core$IFn$_invoke$arity$variadic = memoized__delegate;
return memoized;
})()
;
/**
* Like `clojure.core/memoize` but:
* * Uses delays & a fn lock to prevent unnecessary race value recomputation.
* * Supports auto invalidation & gc with `ttl-ms` option.
* * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
* * Supports cache size limit & gc with `cache-size` option.
*/
taoensso.encore.memoize_STAR_ = (function() {
var memoize_STAR_ = null;
var memoize_STAR___1 = (function (f){var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (cache){
return (function() { 
var G__21558__delegate = function (p__21545){var vec__21546 = p__21545;var arg1 = cljs.core.nth.call(null,vec__21546,(0),null);var argn = cljs.core.nthnext.call(null,vec__21546,(1));var args = vec__21546;if((arg1 === new cljs.core.Keyword("mem","del","mem/del",574870667)))
{if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",892075139)))
{cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else
{cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}
return null;
} else
{var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));var args__$1 = ((fresh_QMARK_)?argn:args);var try1 = ((function (fresh_QMARK_,args__$1,vec__21546,arg1,argn,args,cache){
return (function (){if(fresh_QMARK_)
{return null;
} else
{return cljs.core.deref.call(null,cache).call(null,args__$1);
}
});})(fresh_QMARK_,args__$1,vec__21546,arg1,argn,args,cache))
;var lockf = ((function (fresh_QMARK_,args__$1,try1,vec__21546,arg1,argn,args,cache){
return (function (){var temp__4124__auto__ = try1.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var dv = temp__4124__auto__;return cljs.core.deref.call(null,dv);
} else
{var dv = (new cljs.core.Delay(((function (temp__4124__auto__,fresh_QMARK_,args__$1,try1,vec__21546,arg1,argn,args,cache){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(temp__4124__auto__,fresh_QMARK_,args__$1,try1,vec__21546,arg1,argn,args,cache))
,null));cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,args__$1,dv);
return cljs.core.deref.call(null,dv);
}
});})(fresh_QMARK_,args__$1,try1,vec__21546,arg1,argn,args,cache))
;var temp__4124__auto__ = try1.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var dv = temp__4124__auto__;return cljs.core.deref.call(null,dv);
} else
{return taoensso.encore.locked.call(null,cache,lockf);
}
}
};
var G__21558 = function (var_args){
var p__21545 = null;if (arguments.length > 0) {
  p__21545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21558__delegate.call(this,p__21545);};
G__21558.cljs$lang$maxFixedArity = 0;
G__21558.cljs$lang$applyTo = (function (arglist__21559){
var p__21545 = cljs.core.seq(arglist__21559);
return G__21558__delegate(p__21545);
});
G__21558.cljs$core$IFn$_invoke$arity$variadic = G__21558__delegate;
return G__21558;
})()
;
;})(cache))
});
var memoize_STAR___2 = (function (ttl_ms,f){var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (cache){
return (function() { 
var G__21560__delegate = function (p__21547){var vec__21548 = p__21547;var arg1 = cljs.core.nth.call(null,vec__21548,(0),null);var argn = cljs.core.nthnext.call(null,vec__21548,(1));var args = vec__21548;if((arg1 === new cljs.core.Keyword("mem","del","mem/del",574870667)))
{if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",892075139)))
{cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else
{cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}
return null;
} else
{if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_21561 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,cache,((function (instant_21561,vec__21548,arg1,argn,args,cache){
return (function (m){return cljs.core.reduce_kv.call(null,((function (instant_21561,vec__21548,arg1,argn,args,cache){
return (function (m_STAR_,k,p__21549){var vec__21550 = p__21549;var dv = cljs.core.nth.call(null,vec__21550,(0),null);var udt = cljs.core.nth.call(null,vec__21550,(1),null);var cv = vec__21550;if(((instant_21561 - udt) > ttl_ms))
{return m_STAR_;
} else
{return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_21561,vec__21548,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,m);
});})(instant_21561,vec__21548,arg1,argn,args,cache))
);
} else
{}
var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));var args__$1 = ((fresh_QMARK_)?argn:args);var try1 = ((function (fresh_QMARK_,args__$1,vec__21548,arg1,argn,args,cache){
return (function (){var temp__4126__auto__ = ((fresh_QMARK_)?null:cljs.core.deref.call(null,cache).call(null,args__$1));if(cljs.core.truth_(temp__4126__auto__))
{var vec__21551 = temp__4126__auto__;var dv = cljs.core.nth.call(null,vec__21551,(0),null);var udt = cljs.core.nth.call(null,vec__21551,(1),null);if(cljs.core.truth_((function (){var and__3544__auto__ = dv;if(cljs.core.truth_(and__3544__auto__))
{return ((taoensso.encore.now_udt.call(null) - udt) < ttl_ms);
} else
{return and__3544__auto__;
}
})()))
{return dv;
} else
{return null;
}
} else
{return null;
}
});})(fresh_QMARK_,args__$1,vec__21548,arg1,argn,args,cache))
;var lockf = ((function (fresh_QMARK_,args__$1,try1,vec__21548,arg1,argn,args,cache){
return (function (){var temp__4124__auto__ = try1.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var dv = temp__4124__auto__;return cljs.core.deref.call(null,dv);
} else
{var dv = (new cljs.core.Delay(((function (temp__4124__auto__,fresh_QMARK_,args__$1,try1,vec__21548,arg1,argn,args,cache){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(temp__4124__auto__,fresh_QMARK_,args__$1,try1,vec__21548,arg1,argn,args,cache))
,null));var cv = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv,taoensso.encore.now_udt.call(null)], null);cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,args__$1,cv);
return cljs.core.deref.call(null,dv);
}
});})(fresh_QMARK_,args__$1,try1,vec__21548,arg1,argn,args,cache))
;var temp__4124__auto__ = try1.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var dv = temp__4124__auto__;return cljs.core.deref.call(null,dv);
} else
{return taoensso.encore.locked.call(null,cache,lockf);
}
}
};
var G__21560 = function (var_args){
var p__21547 = null;if (arguments.length > 0) {
  p__21547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21560__delegate.call(this,p__21547);};
G__21560.cljs$lang$maxFixedArity = 0;
G__21560.cljs$lang$applyTo = (function (arglist__21562){
var p__21547 = cljs.core.seq(arglist__21562);
return G__21560__delegate(p__21547);
});
G__21560.cljs$core$IFn$_invoke$arity$variadic = G__21560__delegate;
return G__21560;
})()
;
;})(cache))
});
var memoize_STAR___3 = (function (cache_size,ttl_ms,f){var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));return ((function (state){
return (function() { 
var G__21563__delegate = function (p__21552){var vec__21553 = p__21552;var arg1 = cljs.core.nth.call(null,vec__21553,(0),null);var argn = cljs.core.nthnext.call(null,vec__21553,(1));var args = vec__21553;if((arg1 === new cljs.core.Keyword("mem","del","mem/del",574870667)))
{if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",892075139)))
{cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else
{cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}
return null;
} else
{if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_21564 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,state,((function (instant_21564,vec__21553,arg1,argn,args,state){
return (function (m){var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_21564,vec__21553,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__21554){var vec__21555 = p__21554;var dv = cljs.core.nth.call(null,vec__21555,(0),null);var udt = cljs.core.nth.call(null,vec__21555,(1),null);var _ = cljs.core.nth.call(null,vec__21555,(2),null);var ___$1 = cljs.core.nth.call(null,vec__21555,(3),null);var cv = vec__21555;if(((instant_21564 - udt) > ttl_ms))
{return m_STAR___$1;
} else
{return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_21564,vec__21553,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,m_STAR_));var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_21564,vec__21553,arg1,argn,args,state){
return (function (p1__21531_SHARP_){return cljs.core.nth.call(null,p1__21531_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_21564,vec__21553,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_21564,vec__21553,arg1,argn,args,state){
return (function (p1__21530_SHARP_){return cljs.core.nth.call(null,p1__21530_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_21564,vec__21553,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_21564,vec__21553,arg1,argn,args,state){
return (function (k){var vec__21556 = m_STAR___$1.call(null,k);var _ = cljs.core.nth.call(null,vec__21556,(0),null);var ___$1 = cljs.core.nth.call(null,vec__21556,(1),null);var tick_lru = cljs.core.nth.call(null,vec__21556,(2),null);var tick_lfu = cljs.core.nth.call(null,vec__21556,(3),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_21564,vec__21553,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_21564,vec__21553,arg1,argn,args,state))
);
} else
{}
var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));var args__$1 = ((fresh_QMARK_)?argn:args);var try1 = ((function (fresh_QMARK_,args__$1,vec__21553,arg1,argn,args,state){
return (function (){var state_SINGLEQUOTE_ = cljs.core.deref.call(null,state);var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_);var temp__4126__auto__ = ((fresh_QMARK_)?null:state_SINGLEQUOTE_.call(null,args__$1));if(cljs.core.truth_(temp__4126__auto__))
{var vec__21557 = temp__4126__auto__;var dv = cljs.core.nth.call(null,vec__21557,(0),null);var udt = cljs.core.nth.call(null,vec__21557,(1),null);var tick_lru = cljs.core.nth.call(null,vec__21557,(2),null);var tick_lfu = cljs.core.nth.call(null,vec__21557,(3),null);if(cljs.core.truth_((function (){var and__3544__auto__ = dv;if(cljs.core.truth_(and__3544__auto__))
{return ((ttl_ms == null)) || (((taoensso.encore.now_udt.call(null) - udt) < ttl_ms));
} else
{return and__3544__auto__;
}
})()))
{var sv_21565 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv,udt,(tick_SINGLEQUOTE_ + (1)),(tick_lfu + (1))], null);cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,sv_21565);
return dv;
} else
{return null;
}
} else
{return null;
}
});})(fresh_QMARK_,args__$1,vec__21553,arg1,argn,args,state))
;var lockf = ((function (fresh_QMARK_,args__$1,try1,vec__21553,arg1,argn,args,state){
return (function (){var temp__4124__auto__ = try1.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var dv = temp__4124__auto__;return cljs.core.deref.call(null,dv);
} else
{var dv = (new cljs.core.Delay(((function (temp__4124__auto__,fresh_QMARK_,args__$1,try1,vec__21553,arg1,argn,args,state){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(temp__4124__auto__,fresh_QMARK_,args__$1,try1,vec__21553,arg1,argn,args,state))
,null));var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var sv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv,(cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null),(tick + (1)),(1)], null);cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,sv);
return cljs.core.deref.call(null,dv);
}
});})(fresh_QMARK_,args__$1,try1,vec__21553,arg1,argn,args,state))
;var temp__4124__auto__ = try1.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var dv = temp__4124__auto__;return cljs.core.deref.call(null,dv);
} else
{return taoensso.encore.locked.call(null,state,lockf);
}
}
};
var G__21563 = function (var_args){
var p__21552 = null;if (arguments.length > 0) {
  p__21552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21563__delegate.call(this,p__21552);};
G__21563.cljs$lang$maxFixedArity = 0;
G__21563.cljs$lang$applyTo = (function (arglist__21566){
var p__21552 = cljs.core.seq(arglist__21566);
return G__21563__delegate(p__21552);
});
G__21563.cljs$core$IFn$_invoke$arity$variadic = G__21563__delegate;
return G__21563;
})()
;
;})(state))
});
memoize_STAR_ = function(cache_size,ttl_ms,f){
switch(arguments.length){
case 1:
return memoize_STAR___1.call(this,cache_size);
case 2:
return memoize_STAR___2.call(this,cache_size,ttl_ms);
case 3:
return memoize_STAR___3.call(this,cache_size,ttl_ms,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = memoize_STAR___1;
memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = memoize_STAR___2;
memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = memoize_STAR___3;
return memoize_STAR_;
})()
;
/**
* Returns a `(fn [& [id]])` that returns either `nil` (limit okay) or number of
* msecs until next rate limit window (rate limited).
*/
taoensso.encore.rate_limiter = (function rate_limiter(ncalls_limit,window_ms){var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null));return ((function (state){
return (function() { 
var G__21585__delegate = function (p__21576){var vec__21577 = p__21576;var id = cljs.core.nth.call(null,vec__21577,(0),null);if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_21586 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,state,((function (instant_21586,vec__21577,id,state){
return (function (p__21578){var vec__21579 = p__21578;var _ = cljs.core.nth.call(null,vec__21579,(0),null);var m = cljs.core.nth.call(null,vec__21579,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv.call(null,((function (vec__21579,_,m,instant_21586,vec__21577,id,state){
return (function (m_STAR_,id__$1,p__21580){var vec__21581 = p__21580;var udt_window_start = cljs.core.nth.call(null,vec__21581,(0),null);var ncalls = cljs.core.nth.call(null,vec__21581,(1),null);if(((instant_21586 - udt_window_start) > window_ms))
{return m_STAR_;
} else
{return cljs.core.assoc.call(null,m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__21579,_,m,instant_21586,vec__21577,id,state))
,cljs.core.PersistentArrayMap.EMPTY,m)], null);
});})(instant_21586,vec__21577,id,state))
);
} else
{}
return cljs.core.nth.call(null,(function (){var instant = taoensso.encore.now_udt.call(null);return cljs.core.swap_BANG_.call(null,state,((function (instant,vec__21577,id,state){
return (function (p__21582){var vec__21583 = p__21582;var _ = cljs.core.nth.call(null,vec__21583,(0),null);var m = cljs.core.nth.call(null,vec__21583,(1),null);var temp__4124__auto__ = m.call(null,id);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21584 = temp__4124__auto__;var udt_window_start = cljs.core.nth.call(null,vec__21584,(0),null);var ncalls = cljs.core.nth.call(null,vec__21584,(1),null);if(((instant - udt_window_start) > window_ms))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
} else
{if((ncalls < ncalls_limit))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,(ncalls + (1))], null))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((udt_window_start + window_ms) - instant),m], null);
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
}
});})(instant,vec__21577,id,state))
);
})(),(0));
};
var G__21585 = function (var_args){
var p__21576 = null;if (arguments.length > 0) {
  p__21576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21585__delegate.call(this,p__21576);};
G__21585.cljs$lang$maxFixedArity = 0;
G__21585.cljs$lang$applyTo = (function (arglist__21587){
var p__21576 = cljs.core.seq(arglist__21587);
return G__21585__delegate(p__21576);
});
G__21585.cljs$core$IFn$_invoke$arity$variadic = G__21585__delegate;
return G__21585;
})()
;
;})(state))
});
/**
* Wraps fn so that it returns {:result _ :backoff-ms _}.
*/
taoensso.encore.rate_limited = (function rate_limited(ncalls_limit,window_ms,f){var rl = taoensso.encore.rate_limiter.call(null,ncalls_limit,window_ms);return ((function (rl){
return (function() { 
var G__21588__delegate = function (args){var temp__4124__auto__ = rl.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var backoff_ms = temp__4124__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__21588 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21588__delegate.call(this,args);};
G__21588.cljs$lang$maxFixedArity = 0;
G__21588.cljs$lang$applyTo = (function (arglist__21589){
var args = cljs.core.seq(arglist__21589);
return G__21588__delegate(args);
});
G__21588.cljs$core$IFn$_invoke$arity$variadic = G__21588__delegate;
return G__21588;
})()
;
;})(rl))
});
taoensso.encore.log = (function log(x){if(cljs.core.truth_(typeof console != 'undefined'))
{console.log(x);
} else
{print(x);
}
return null;
});
/**
* @param {...*} var_args
*/
taoensso.encore.sayp = (function() { 
var sayp__delegate = function (xs){return alert(clojure.string.join.call(null," ",xs));
};
var sayp = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sayp__delegate.call(this,xs);};
sayp.cljs$lang$maxFixedArity = 0;
sayp.cljs$lang$applyTo = (function (arglist__21594){
var xs = cljs.core.seq(arglist__21594);
return sayp__delegate(xs);
});
sayp.cljs$core$IFn$_invoke$arity$variadic = sayp__delegate;
return sayp;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.sayf = (function() { 
var sayf__delegate = function (fmt,xs){return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
};
var sayf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sayf__delegate.call(this,fmt,xs);};
sayf.cljs$lang$maxFixedArity = 1;
sayf.cljs$lang$applyTo = (function (arglist__21595){
var fmt = cljs.core.first(arglist__21595);
var xs = cljs.core.rest(arglist__21595);
return sayf__delegate(fmt,xs);
});
sayf.cljs$core$IFn$_invoke$arity$variadic = sayf__delegate;
return sayf;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.logp = (function() { 
var logp__delegate = function (xs){return taoensso.encore.log.call(null,clojure.string.join.call(null," ",xs));
};
var logp = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return logp__delegate.call(this,xs);};
logp.cljs$lang$maxFixedArity = 0;
logp.cljs$lang$applyTo = (function (arglist__21596){
var xs = cljs.core.seq(arglist__21596);
return logp__delegate(xs);
});
logp.cljs$core$IFn$_invoke$arity$variadic = logp__delegate;
return logp;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.logf = (function() { 
var logf__delegate = function (fmt,xs){return taoensso.encore.log.call(null,cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
};
var logf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return logf__delegate.call(this,fmt,xs);};
logf.cljs$lang$maxFixedArity = 1;
logf.cljs$lang$applyTo = (function (arglist__21597){
var fmt = cljs.core.first(arglist__21597);
var xs = cljs.core.rest(arglist__21597);
return logf__delegate(fmt,xs);
});
logf.cljs$core$IFn$_invoke$arity$variadic = logf__delegate;
return logf;
})()
;
taoensso.encore.debugf = cljs.core.comp.call(null,(function (p1__21590_SHARP_){return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21590_SHARP_));
}),taoensso.encore.logf);
taoensso.encore.infof = cljs.core.comp.call(null,(function (p1__21591_SHARP_){return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21591_SHARP_));
}),taoensso.encore.logf);
taoensso.encore.warnf = cljs.core.comp.call(null,(function (p1__21592_SHARP_){return ("WARN: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21592_SHARP_));
}),taoensso.encore.logf);
taoensso.encore.errorf = cljs.core.comp.call(null,(function (p1__21593_SHARP_){return ("ERROR: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21593_SHARP_));
}),taoensso.encore.logf);
/**
* Returns browser window's current location. Forgeable.
*/
taoensso.encore.get_window_location = (function get_window_location(){var loc_STAR_ = window.location;var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);return loc;
});
/**
* @param {...*} var_args
*/
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function() { 
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__21598){var vec__21600 = p__21598;var nattempt = cljs.core.nth.call(null,vec__21600,(0),null);return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3556__auto__ = nattempt;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__21598 = null;if (arguments.length > 1) {
  p__21598 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__21598);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__21601){
var nullary_f = cljs.core.first(arglist__21601);
var p__21598 = cljs.core.rest(arglist__21601);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__21598);
});
set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_exp_backoff_timeout_BANG___delegate;
return set_exp_backoff_timeout_BANG_;
})()
;
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){return (new goog.net.XhrIoPool());
}),null));
/**
* Returns an immediately available XhrIo instance, or nil. The instance must be
* released back to pool manually. Use core.async to wait for an available
* instance, etc.
*/
taoensso.encore.get_pooled_xhr_BANG_ = (function get_pooled_xhr_BANG_(){var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();if((void 0 === result))
{return null;
} else
{return result;
}
});
/**
* [uri method get-or-post-params] -> [uri post-content]
*/
taoensso.encore.coerce_xhr_params = (function coerce_xhr_params(uri,method,params){if(((params == null)) || (cljs.core.map_QMARK_.call(null,params)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))))));
}
var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
})());var G__21603 = (((method instanceof cljs.core.Keyword))?method.fqn:null);switch (G__21603) {
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_pstr)):uri),null], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));

}
});
/**
* Alpha - subject to change.
* Simple+lightweight Ajax via Google Closure.
* Ref. https://developers.google.com/closure/library/docs/xhrio
*/
taoensso.encore.ajax_lite = (function ajax_lite(uri,p__21607,callback){var map__21621 = p__21607;var map__21621__$1 = ((cljs.core.seq_QMARK_.call(null,map__21621))?cljs.core.apply.call(null,cljs.core.hash_map,map__21621):map__21621);var resp_type = cljs.core.get.call(null,map__21621__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));var timeout = cljs.core.get.call(null,map__21621__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(10000));var headers = cljs.core.get.call(null,map__21621__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));var params = cljs.core.get.call(null,map__21621__$1,new cljs.core.Keyword(null,"params","params",710516235));var method = cljs.core.get.call(null,map__21621__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));if(((timeout == null)) || (taoensso.encore.nneg_int_QMARK_.call(null,timeout)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null))))))));
}
var temp__4124__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var xhr = temp__4124__auto__;try{var method_STAR_ = (function (){var G__21624 = (((method instanceof cljs.core.Keyword))?method.fqn:null);switch (G__21624) {
case "post":
return "POST";

break;
case "get":
return "GET";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));

}
})();var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));var vec__21623 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);var uri_STAR_ = cljs.core.nth.call(null,vec__21623,(0),null);var post_content_STAR_ = cljs.core.nth.call(null,vec__21623,(1),null);var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));var G__21625 = xhr;goog.events.listenOnce(G__21625,goog.net.EventType.READY,((function (G__21625,method_STAR_,params__$1,headers__$1,vec__21623,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21621,map__21621__$1,resp_type,timeout,headers,params,method){
return (function (_){return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__21625,method_STAR_,params__$1,headers__$1,vec__21623,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21621,map__21621__$1,resp_type,timeout,headers,params,method))
);
goog.events.listenOnce(G__21625,goog.net.EventType.COMPLETE,((function (G__21625,method_STAR_,params__$1,headers__$1,vec__21623,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21621,map__21621__$1,resp_type,timeout,headers,params,method){
return (function wrapped_callback(resp){var status = xhr.getStatus();var got_resp_QMARK_ = cljs.core.not_EQ_.call(null,status,(-1));var content_type = ((got_resp_QMARK_)?xhr.getResponseHeader("Content-Type"):null);var cb_arg = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"content-type","content-type",-508222634),((got_resp_QMARK_)?content_type:null),new cljs.core.Keyword(null,"content","content",15833224),((got_resp_QMARK_)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__21630 = ((function (status,got_resp_QMARK_,content_type,G__21625,method_STAR_,params__$1,headers__$1,vec__21623,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21621,map__21621__$1,resp_type,timeout,headers,params,method){
return (function (p1__21606_SHARP_,p2__21605_SHARP_){return taoensso.encore.str_contains_QMARK_.call(null,p2__21605_SHARP_,p1__21606_SHARP_);
});})(status,got_resp_QMARK_,content_type,G__21625,method_STAR_,params__$1,headers__$1,vec__21623,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21621,map__21621__$1,resp_type,timeout,headers,params,method))
;var expr__21631 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type));if(pred__21630.call(null,"/edn",expr__21631))
{return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else
{if(pred__21630.call(null,"/json",expr__21631))
{return new cljs.core.Keyword(null,"json","json",1279968570);
} else
{if(pred__21630.call(null,"/xml",expr__21631))
{return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else
{if(pred__21630.call(null,"/html",expr__21631))
{return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else
{return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());var G__21633 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);switch (G__21633) {
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
case "xml":
return xhr.getResponseXml();

break;
case "json":
return xhr.getResponseJson();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp_type__$1))));

}
})():null),new cljs.core.Keyword(null,"status","status",-1997798413),((got_resp_QMARK_)?status:null),new cljs.core.Keyword(null,"error","error",-978969032),((got_resp_QMARK_)?(((((200) <= status)) && ((status <= (299))))?null:status):cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)))], null);return callback.call(null,cb_arg);
});})(G__21625,method_STAR_,params__$1,headers__$1,vec__21623,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21621,map__21621__$1,resp_type,timeout,headers,params,method))
);
G__21625.setTimeoutInterval((function (){var or__3556__auto__ = timeout;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return (0);
}
})());
G__21625.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
return G__21625;
}catch (e21622){if((e21622 instanceof error))
{var e = e21622;taoensso.encore.logf.call(null,"Ajax error: %s",e);
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
return null;
} else
{throw e21622;

}
}} else
{return callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));
}
});
/**
* DEPRECATED: Use more general `substr` instead.
*/
taoensso.encore.str_trunc = (function str_trunc(s,max_len){return taoensso.encore.substr.call(null,s,(0),max_len);
});

//# sourceMappingURL=encore.js.map