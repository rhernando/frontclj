// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11291 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11291 = (function (f,fn_handler,meta11292){
this.f = f;
this.fn_handler = fn_handler;
this.meta11292 = meta11292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11291.cljs$lang$type = true;
cljs.core.async.t11291.cljs$lang$ctorStr = "cljs.core.async/t11291";
cljs.core.async.t11291.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t11291");
});
cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11293){var self__ = this;
var _11293__$1 = this;return self__.meta11292;
});
cljs.core.async.t11291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11293,meta11292__$1){var self__ = this;
var _11293__$1 = this;return (new cljs.core.async.t11291(self__.f,self__.fn_handler,meta11292__$1));
});
cljs.core.async.__GT_t11291 = (function __GT_t11291(f__$1,fn_handler__$1,meta11292){return (new cljs.core.async.t11291(f__$1,fn_handler__$1,meta11292));
});
}
return (new cljs.core.async.t11291(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11295 = buff;if(G__11295)
{var bit__4206__auto__ = null;if(cljs.core.truth_((function (){var or__3556__auto__ = bit__4206__auto__;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return G__11295.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11295.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11295);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11295);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11296 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11296);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11296,ret){
return (function (){return fn1.call(null,val_11296);
});})(val_11296,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4412__auto___11297 = n;var x_11298 = (0);while(true){
if((x_11298 < n__4412__auto___11297))
{(a[x_11298] = (0));
{
var G__11299 = (x_11298 + (1));
x_11298 = G__11299;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11300 = (i + (1));
i = G__11300;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11304 = (function (flag,alt_flag,meta11305){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11305 = meta11305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11304.cljs$lang$type = true;
cljs.core.async.t11304.cljs$lang$ctorStr = "cljs.core.async/t11304";
cljs.core.async.t11304.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t11304");
});})(flag))
;
cljs.core.async.t11304.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11306){var self__ = this;
var _11306__$1 = this;return self__.meta11305;
});})(flag))
;
cljs.core.async.t11304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11306,meta11305__$1){var self__ = this;
var _11306__$1 = this;return (new cljs.core.async.t11304(self__.flag,self__.alt_flag,meta11305__$1));
});})(flag))
;
cljs.core.async.__GT_t11304 = ((function (flag){
return (function __GT_t11304(flag__$1,alt_flag__$1,meta11305){return (new cljs.core.async.t11304(flag__$1,alt_flag__$1,meta11305));
});})(flag))
;
}
return (new cljs.core.async.t11304(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11310 = (function (cb,flag,alt_handler,meta11311){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11311 = meta11311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11310.cljs$lang$type = true;
cljs.core.async.t11310.cljs$lang$ctorStr = "cljs.core.async/t11310";
cljs.core.async.t11310.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t11310");
});
cljs.core.async.t11310.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11312){var self__ = this;
var _11312__$1 = this;return self__.meta11311;
});
cljs.core.async.t11310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11312,meta11311__$1){var self__ = this;
var _11312__$1 = this;return (new cljs.core.async.t11310(self__.cb,self__.flag,self__.alt_handler,meta11311__$1));
});
cljs.core.async.__GT_t11310 = (function __GT_t11310(cb__$1,flag__$1,alt_handler__$1,meta11311){return (new cljs.core.async.t11310(cb__$1,flag__$1,alt_handler__$1,meta11311));
});
}
return (new cljs.core.async.t11310(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11313_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11313_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11314_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11314_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3556__auto__ = wport;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11315 = (i + (1));
i = G__11315;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3556__auto__ = ret;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3544__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3544__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3544__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11316){var map__11318 = p__11316;var map__11318__$1 = ((cljs.core.seq_QMARK_.call(null,map__11318))?cljs.core.apply.call(null,cljs.core.hash_map,map__11318):map__11318);var opts = map__11318__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11316 = null;if (arguments.length > 1) {
  p__11316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11316);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11319){
var ports = cljs.core.first(arglist__11319);
var p__11316 = cljs.core.rest(arglist__11319);
return alts_BANG___delegate(ports,p__11316);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11327 = (function (ch,f,map_LT_,meta11328){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11328 = meta11328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11327.cljs$lang$type = true;
cljs.core.async.t11327.cljs$lang$ctorStr = "cljs.core.async/t11327";
cljs.core.async.t11327.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t11327");
});
cljs.core.async.t11327.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11327.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11330 = (function (fn1,_,meta11328,ch,f,map_LT_,meta11331){
this.fn1 = fn1;
this._ = _;
this.meta11328 = meta11328;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11331 = meta11331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11330.cljs$lang$type = true;
cljs.core.async.t11330.cljs$lang$ctorStr = "cljs.core.async/t11330";
cljs.core.async.t11330.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t11330");
});})(___$1))
;
cljs.core.async.t11330.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11330.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11320_SHARP_){return f1.call(null,(((p1__11320_SHARP_ == null))?null:self__.f.call(null,p1__11320_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11332){var self__ = this;
var _11332__$1 = this;return self__.meta11331;
});})(___$1))
;
cljs.core.async.t11330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11332,meta11331__$1){var self__ = this;
var _11332__$1 = this;return (new cljs.core.async.t11330(self__.fn1,self__._,self__.meta11328,self__.ch,self__.f,self__.map_LT_,meta11331__$1));
});})(___$1))
;
cljs.core.async.__GT_t11330 = ((function (___$1){
return (function __GT_t11330(fn1__$1,___$2,meta11328__$1,ch__$2,f__$2,map_LT___$2,meta11331){return (new cljs.core.async.t11330(fn1__$1,___$2,meta11328__$1,ch__$2,f__$2,map_LT___$2,meta11331));
});})(___$1))
;
}
return (new cljs.core.async.t11330(fn1,___$1,self__.meta11328,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3544__auto__ = ret;if(cljs.core.truth_(and__3544__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3544__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11327.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11329){var self__ = this;
var _11329__$1 = this;return self__.meta11328;
});
cljs.core.async.t11327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11329,meta11328__$1){var self__ = this;
var _11329__$1 = this;return (new cljs.core.async.t11327(self__.ch,self__.f,self__.map_LT_,meta11328__$1));
});
cljs.core.async.__GT_t11327 = (function __GT_t11327(ch__$1,f__$1,map_LT___$1,meta11328){return (new cljs.core.async.t11327(ch__$1,f__$1,map_LT___$1,meta11328));
});
}
return (new cljs.core.async.t11327(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11336 = (function (ch,f,map_GT_,meta11337){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11337 = meta11337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11336.cljs$lang$type = true;
cljs.core.async.t11336.cljs$lang$ctorStr = "cljs.core.async/t11336";
cljs.core.async.t11336.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t11336");
});
cljs.core.async.t11336.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11336.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11336.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11338){var self__ = this;
var _11338__$1 = this;return self__.meta11337;
});
cljs.core.async.t11336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11338,meta11337__$1){var self__ = this;
var _11338__$1 = this;return (new cljs.core.async.t11336(self__.ch,self__.f,self__.map_GT_,meta11337__$1));
});
cljs.core.async.__GT_t11336 = (function __GT_t11336(ch__$1,f__$1,map_GT___$1,meta11337){return (new cljs.core.async.t11336(ch__$1,f__$1,map_GT___$1,meta11337));
});
}
return (new cljs.core.async.t11336(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11342 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11342 = (function (ch,p,filter_GT_,meta11343){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11343 = meta11343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11342.cljs$lang$type = true;
cljs.core.async.t11342.cljs$lang$ctorStr = "cljs.core.async/t11342";
cljs.core.async.t11342.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t11342");
});
cljs.core.async.t11342.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11342.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11342.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11342.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11344){var self__ = this;
var _11344__$1 = this;return self__.meta11343;
});
cljs.core.async.t11342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11344,meta11343__$1){var self__ = this;
var _11344__$1 = this;return (new cljs.core.async.t11342(self__.ch,self__.p,self__.filter_GT_,meta11343__$1));
});
cljs.core.async.__GT_t11342 = (function __GT_t11342(ch__$1,p__$1,filter_GT___$1,meta11343){return (new cljs.core.async.t11342(ch__$1,p__$1,filter_GT___$1,meta11343));
});
}
return (new cljs.core.async.t11342(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___11427 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___11427,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___11427,out){
return (function (state_11406){var state_val_11407 = (state_11406[(1)]);if((state_val_11407 === (7)))
{var inst_11402 = (state_11406[(2)]);var state_11406__$1 = state_11406;var statearr_11408_11428 = state_11406__$1;(statearr_11408_11428[(2)] = inst_11402);
(statearr_11408_11428[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11407 === (1)))
{var state_11406__$1 = state_11406;var statearr_11409_11429 = state_11406__$1;(statearr_11409_11429[(2)] = null);
(statearr_11409_11429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11407 === (4)))
{var inst_11388 = (state_11406[(7)]);var inst_11388__$1 = (state_11406[(2)]);var inst_11389 = (inst_11388__$1 == null);var state_11406__$1 = (function (){var statearr_11410 = state_11406;(statearr_11410[(7)] = inst_11388__$1);
return statearr_11410;
})();if(cljs.core.truth_(inst_11389))
{var statearr_11411_11430 = state_11406__$1;(statearr_11411_11430[(1)] = (5));
} else
{var statearr_11412_11431 = state_11406__$1;(statearr_11412_11431[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11407 === (6)))
{var inst_11388 = (state_11406[(7)]);var inst_11393 = p.call(null,inst_11388);var state_11406__$1 = state_11406;if(cljs.core.truth_(inst_11393))
{var statearr_11413_11432 = state_11406__$1;(statearr_11413_11432[(1)] = (8));
} else
{var statearr_11414_11433 = state_11406__$1;(statearr_11414_11433[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11407 === (3)))
{var inst_11404 = (state_11406[(2)]);var state_11406__$1 = state_11406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11406__$1,inst_11404);
} else
{if((state_val_11407 === (2)))
{var state_11406__$1 = state_11406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11406__$1,(4),ch);
} else
{if((state_val_11407 === (11)))
{var inst_11396 = (state_11406[(2)]);var state_11406__$1 = state_11406;var statearr_11415_11434 = state_11406__$1;(statearr_11415_11434[(2)] = inst_11396);
(statearr_11415_11434[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11407 === (9)))
{var state_11406__$1 = state_11406;var statearr_11416_11435 = state_11406__$1;(statearr_11416_11435[(2)] = null);
(statearr_11416_11435[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11407 === (5)))
{var inst_11391 = cljs.core.async.close_BANG_.call(null,out);var state_11406__$1 = state_11406;var statearr_11417_11436 = state_11406__$1;(statearr_11417_11436[(2)] = inst_11391);
(statearr_11417_11436[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11407 === (10)))
{var inst_11399 = (state_11406[(2)]);var state_11406__$1 = (function (){var statearr_11418 = state_11406;(statearr_11418[(8)] = inst_11399);
return statearr_11418;
})();var statearr_11419_11437 = state_11406__$1;(statearr_11419_11437[(2)] = null);
(statearr_11419_11437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11407 === (8)))
{var inst_11388 = (state_11406[(7)]);var state_11406__$1 = state_11406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11406__$1,(11),out,inst_11388);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___11427,out))
;return ((function (switch__6876__auto__,c__6891__auto___11427,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_11423 = [null,null,null,null,null,null,null,null,null];(statearr_11423[(0)] = state_machine__6877__auto__);
(statearr_11423[(1)] = (1));
return statearr_11423;
});
var state_machine__6877__auto____1 = (function (state_11406){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_11406);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e11424){if((e11424 instanceof Object))
{var ex__6880__auto__ = e11424;var statearr_11425_11438 = state_11406;(statearr_11425_11438[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11406);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11424;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11439 = state_11406;
state_11406 = G__11439;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_11406){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_11406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___11427,out))
})();var state__6893__auto__ = (function (){var statearr_11426 = f__6892__auto__.call(null);(statearr_11426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___11427);
return statearr_11426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___11427,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6891__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto__){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto__){
return (function (state_11605){var state_val_11606 = (state_11605[(1)]);if((state_val_11606 === (7)))
{var inst_11601 = (state_11605[(2)]);var state_11605__$1 = state_11605;var statearr_11607_11648 = state_11605__$1;(statearr_11607_11648[(2)] = inst_11601);
(statearr_11607_11648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (20)))
{var inst_11571 = (state_11605[(7)]);var inst_11582 = (state_11605[(2)]);var inst_11583 = cljs.core.next.call(null,inst_11571);var inst_11557 = inst_11583;var inst_11558 = null;var inst_11559 = (0);var inst_11560 = (0);var state_11605__$1 = (function (){var statearr_11608 = state_11605;(statearr_11608[(8)] = inst_11557);
(statearr_11608[(9)] = inst_11560);
(statearr_11608[(10)] = inst_11559);
(statearr_11608[(11)] = inst_11558);
(statearr_11608[(12)] = inst_11582);
return statearr_11608;
})();var statearr_11609_11649 = state_11605__$1;(statearr_11609_11649[(2)] = null);
(statearr_11609_11649[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (1)))
{var state_11605__$1 = state_11605;var statearr_11610_11650 = state_11605__$1;(statearr_11610_11650[(2)] = null);
(statearr_11610_11650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (4)))
{var inst_11546 = (state_11605[(13)]);var inst_11546__$1 = (state_11605[(2)]);var inst_11547 = (inst_11546__$1 == null);var state_11605__$1 = (function (){var statearr_11611 = state_11605;(statearr_11611[(13)] = inst_11546__$1);
return statearr_11611;
})();if(cljs.core.truth_(inst_11547))
{var statearr_11612_11651 = state_11605__$1;(statearr_11612_11651[(1)] = (5));
} else
{var statearr_11613_11652 = state_11605__$1;(statearr_11613_11652[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (15)))
{var state_11605__$1 = state_11605;var statearr_11617_11653 = state_11605__$1;(statearr_11617_11653[(2)] = null);
(statearr_11617_11653[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (21)))
{var state_11605__$1 = state_11605;var statearr_11618_11654 = state_11605__$1;(statearr_11618_11654[(2)] = null);
(statearr_11618_11654[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (13)))
{var inst_11557 = (state_11605[(8)]);var inst_11560 = (state_11605[(9)]);var inst_11559 = (state_11605[(10)]);var inst_11558 = (state_11605[(11)]);var inst_11567 = (state_11605[(2)]);var inst_11568 = (inst_11560 + (1));var tmp11614 = inst_11557;var tmp11615 = inst_11559;var tmp11616 = inst_11558;var inst_11557__$1 = tmp11614;var inst_11558__$1 = tmp11616;var inst_11559__$1 = tmp11615;var inst_11560__$1 = inst_11568;var state_11605__$1 = (function (){var statearr_11619 = state_11605;(statearr_11619[(8)] = inst_11557__$1);
(statearr_11619[(9)] = inst_11560__$1);
(statearr_11619[(10)] = inst_11559__$1);
(statearr_11619[(11)] = inst_11558__$1);
(statearr_11619[(14)] = inst_11567);
return statearr_11619;
})();var statearr_11620_11655 = state_11605__$1;(statearr_11620_11655[(2)] = null);
(statearr_11620_11655[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (22)))
{var state_11605__$1 = state_11605;var statearr_11621_11656 = state_11605__$1;(statearr_11621_11656[(2)] = null);
(statearr_11621_11656[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (6)))
{var inst_11546 = (state_11605[(13)]);var inst_11555 = f.call(null,inst_11546);var inst_11556 = cljs.core.seq.call(null,inst_11555);var inst_11557 = inst_11556;var inst_11558 = null;var inst_11559 = (0);var inst_11560 = (0);var state_11605__$1 = (function (){var statearr_11622 = state_11605;(statearr_11622[(8)] = inst_11557);
(statearr_11622[(9)] = inst_11560);
(statearr_11622[(10)] = inst_11559);
(statearr_11622[(11)] = inst_11558);
return statearr_11622;
})();var statearr_11623_11657 = state_11605__$1;(statearr_11623_11657[(2)] = null);
(statearr_11623_11657[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (17)))
{var inst_11571 = (state_11605[(7)]);var inst_11575 = cljs.core.chunk_first.call(null,inst_11571);var inst_11576 = cljs.core.chunk_rest.call(null,inst_11571);var inst_11577 = cljs.core.count.call(null,inst_11575);var inst_11557 = inst_11576;var inst_11558 = inst_11575;var inst_11559 = inst_11577;var inst_11560 = (0);var state_11605__$1 = (function (){var statearr_11624 = state_11605;(statearr_11624[(8)] = inst_11557);
(statearr_11624[(9)] = inst_11560);
(statearr_11624[(10)] = inst_11559);
(statearr_11624[(11)] = inst_11558);
return statearr_11624;
})();var statearr_11625_11658 = state_11605__$1;(statearr_11625_11658[(2)] = null);
(statearr_11625_11658[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (3)))
{var inst_11603 = (state_11605[(2)]);var state_11605__$1 = state_11605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11605__$1,inst_11603);
} else
{if((state_val_11606 === (12)))
{var inst_11591 = (state_11605[(2)]);var state_11605__$1 = state_11605;var statearr_11626_11659 = state_11605__$1;(statearr_11626_11659[(2)] = inst_11591);
(statearr_11626_11659[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (2)))
{var state_11605__$1 = state_11605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11605__$1,(4),in$);
} else
{if((state_val_11606 === (23)))
{var inst_11599 = (state_11605[(2)]);var state_11605__$1 = state_11605;var statearr_11627_11660 = state_11605__$1;(statearr_11627_11660[(2)] = inst_11599);
(statearr_11627_11660[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (19)))
{var inst_11586 = (state_11605[(2)]);var state_11605__$1 = state_11605;var statearr_11628_11661 = state_11605__$1;(statearr_11628_11661[(2)] = inst_11586);
(statearr_11628_11661[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (11)))
{var inst_11557 = (state_11605[(8)]);var inst_11571 = (state_11605[(7)]);var inst_11571__$1 = cljs.core.seq.call(null,inst_11557);var state_11605__$1 = (function (){var statearr_11629 = state_11605;(statearr_11629[(7)] = inst_11571__$1);
return statearr_11629;
})();if(inst_11571__$1)
{var statearr_11630_11662 = state_11605__$1;(statearr_11630_11662[(1)] = (14));
} else
{var statearr_11631_11663 = state_11605__$1;(statearr_11631_11663[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (9)))
{var inst_11593 = (state_11605[(2)]);var inst_11594 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11605__$1 = (function (){var statearr_11632 = state_11605;(statearr_11632[(15)] = inst_11593);
return statearr_11632;
})();if(cljs.core.truth_(inst_11594))
{var statearr_11633_11664 = state_11605__$1;(statearr_11633_11664[(1)] = (21));
} else
{var statearr_11634_11665 = state_11605__$1;(statearr_11634_11665[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (5)))
{var inst_11549 = cljs.core.async.close_BANG_.call(null,out);var state_11605__$1 = state_11605;var statearr_11635_11666 = state_11605__$1;(statearr_11635_11666[(2)] = inst_11549);
(statearr_11635_11666[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (14)))
{var inst_11571 = (state_11605[(7)]);var inst_11573 = cljs.core.chunked_seq_QMARK_.call(null,inst_11571);var state_11605__$1 = state_11605;if(inst_11573)
{var statearr_11636_11667 = state_11605__$1;(statearr_11636_11667[(1)] = (17));
} else
{var statearr_11637_11668 = state_11605__$1;(statearr_11637_11668[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (16)))
{var inst_11589 = (state_11605[(2)]);var state_11605__$1 = state_11605;var statearr_11638_11669 = state_11605__$1;(statearr_11638_11669[(2)] = inst_11589);
(statearr_11638_11669[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11606 === (10)))
{var inst_11560 = (state_11605[(9)]);var inst_11558 = (state_11605[(11)]);var inst_11565 = cljs.core._nth.call(null,inst_11558,inst_11560);var state_11605__$1 = state_11605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11605__$1,(13),out,inst_11565);
} else
{if((state_val_11606 === (18)))
{var inst_11571 = (state_11605[(7)]);var inst_11580 = cljs.core.first.call(null,inst_11571);var state_11605__$1 = state_11605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11605__$1,(20),out,inst_11580);
} else
{if((state_val_11606 === (8)))
{var inst_11560 = (state_11605[(9)]);var inst_11559 = (state_11605[(10)]);var inst_11562 = (inst_11560 < inst_11559);var inst_11563 = inst_11562;var state_11605__$1 = state_11605;if(cljs.core.truth_(inst_11563))
{var statearr_11639_11670 = state_11605__$1;(statearr_11639_11670[(1)] = (10));
} else
{var statearr_11640_11671 = state_11605__$1;(statearr_11640_11671[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto__))
;return ((function (switch__6876__auto__,c__6891__auto__){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_11644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11644[(0)] = state_machine__6877__auto__);
(statearr_11644[(1)] = (1));
return statearr_11644;
});
var state_machine__6877__auto____1 = (function (state_11605){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_11605);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e11645){if((e11645 instanceof Object))
{var ex__6880__auto__ = e11645;var statearr_11646_11672 = state_11605;(statearr_11646_11672[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11605);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11673 = state_11605;
state_11605 = G__11673;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_11605){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_11605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto__))
})();var state__6893__auto__ = (function (){var statearr_11647 = f__6892__auto__.call(null);(statearr_11647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto__);
return statearr_11647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto__))
);
return c__6891__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6891__auto___11768 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___11768){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___11768){
return (function (state_11744){var state_val_11745 = (state_11744[(1)]);if((state_val_11745 === (7)))
{var inst_11740 = (state_11744[(2)]);var state_11744__$1 = state_11744;var statearr_11746_11769 = state_11744__$1;(statearr_11746_11769[(2)] = inst_11740);
(statearr_11746_11769[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (1)))
{var state_11744__$1 = state_11744;var statearr_11747_11770 = state_11744__$1;(statearr_11747_11770[(2)] = null);
(statearr_11747_11770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (4)))
{var inst_11723 = (state_11744[(7)]);var inst_11723__$1 = (state_11744[(2)]);var inst_11724 = (inst_11723__$1 == null);var state_11744__$1 = (function (){var statearr_11748 = state_11744;(statearr_11748[(7)] = inst_11723__$1);
return statearr_11748;
})();if(cljs.core.truth_(inst_11724))
{var statearr_11749_11771 = state_11744__$1;(statearr_11749_11771[(1)] = (5));
} else
{var statearr_11750_11772 = state_11744__$1;(statearr_11750_11772[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (13)))
{var state_11744__$1 = state_11744;var statearr_11751_11773 = state_11744__$1;(statearr_11751_11773[(2)] = null);
(statearr_11751_11773[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (6)))
{var inst_11723 = (state_11744[(7)]);var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11744__$1,(11),to,inst_11723);
} else
{if((state_val_11745 === (3)))
{var inst_11742 = (state_11744[(2)]);var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11744__$1,inst_11742);
} else
{if((state_val_11745 === (12)))
{var state_11744__$1 = state_11744;var statearr_11752_11774 = state_11744__$1;(statearr_11752_11774[(2)] = null);
(statearr_11752_11774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (2)))
{var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11744__$1,(4),from);
} else
{if((state_val_11745 === (11)))
{var inst_11733 = (state_11744[(2)]);var state_11744__$1 = state_11744;if(cljs.core.truth_(inst_11733))
{var statearr_11753_11775 = state_11744__$1;(statearr_11753_11775[(1)] = (12));
} else
{var statearr_11754_11776 = state_11744__$1;(statearr_11754_11776[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (9)))
{var state_11744__$1 = state_11744;var statearr_11755_11777 = state_11744__$1;(statearr_11755_11777[(2)] = null);
(statearr_11755_11777[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (5)))
{var state_11744__$1 = state_11744;if(cljs.core.truth_(close_QMARK_))
{var statearr_11756_11778 = state_11744__$1;(statearr_11756_11778[(1)] = (8));
} else
{var statearr_11757_11779 = state_11744__$1;(statearr_11757_11779[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (14)))
{var inst_11738 = (state_11744[(2)]);var state_11744__$1 = state_11744;var statearr_11758_11780 = state_11744__$1;(statearr_11758_11780[(2)] = inst_11738);
(statearr_11758_11780[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (10)))
{var inst_11730 = (state_11744[(2)]);var state_11744__$1 = state_11744;var statearr_11759_11781 = state_11744__$1;(statearr_11759_11781[(2)] = inst_11730);
(statearr_11759_11781[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (8)))
{var inst_11727 = cljs.core.async.close_BANG_.call(null,to);var state_11744__$1 = state_11744;var statearr_11760_11782 = state_11744__$1;(statearr_11760_11782[(2)] = inst_11727);
(statearr_11760_11782[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___11768))
;return ((function (switch__6876__auto__,c__6891__auto___11768){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_11764 = [null,null,null,null,null,null,null,null];(statearr_11764[(0)] = state_machine__6877__auto__);
(statearr_11764[(1)] = (1));
return statearr_11764;
});
var state_machine__6877__auto____1 = (function (state_11744){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_11744);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e11765){if((e11765 instanceof Object))
{var ex__6880__auto__ = e11765;var statearr_11766_11783 = state_11744;(statearr_11766_11783[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11765;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11784 = state_11744;
state_11744 = G__11784;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_11744){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_11744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___11768))
})();var state__6893__auto__ = (function (){var statearr_11767 = f__6892__auto__.call(null);(statearr_11767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___11768);
return statearr_11767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___11768))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6891__auto___11885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___11885,tc,fc){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___11885,tc,fc){
return (function (state_11860){var state_val_11861 = (state_11860[(1)]);if((state_val_11861 === (7)))
{var inst_11856 = (state_11860[(2)]);var state_11860__$1 = state_11860;var statearr_11862_11886 = state_11860__$1;(statearr_11862_11886[(2)] = inst_11856);
(statearr_11862_11886[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (1)))
{var state_11860__$1 = state_11860;var statearr_11863_11887 = state_11860__$1;(statearr_11863_11887[(2)] = null);
(statearr_11863_11887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (4)))
{var inst_11837 = (state_11860[(7)]);var inst_11837__$1 = (state_11860[(2)]);var inst_11838 = (inst_11837__$1 == null);var state_11860__$1 = (function (){var statearr_11864 = state_11860;(statearr_11864[(7)] = inst_11837__$1);
return statearr_11864;
})();if(cljs.core.truth_(inst_11838))
{var statearr_11865_11888 = state_11860__$1;(statearr_11865_11888[(1)] = (5));
} else
{var statearr_11866_11889 = state_11860__$1;(statearr_11866_11889[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (13)))
{var state_11860__$1 = state_11860;var statearr_11867_11890 = state_11860__$1;(statearr_11867_11890[(2)] = null);
(statearr_11867_11890[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (6)))
{var inst_11837 = (state_11860[(7)]);var inst_11843 = p.call(null,inst_11837);var state_11860__$1 = state_11860;if(cljs.core.truth_(inst_11843))
{var statearr_11868_11891 = state_11860__$1;(statearr_11868_11891[(1)] = (9));
} else
{var statearr_11869_11892 = state_11860__$1;(statearr_11869_11892[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (3)))
{var inst_11858 = (state_11860[(2)]);var state_11860__$1 = state_11860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11860__$1,inst_11858);
} else
{if((state_val_11861 === (12)))
{var state_11860__$1 = state_11860;var statearr_11870_11893 = state_11860__$1;(statearr_11870_11893[(2)] = null);
(statearr_11870_11893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (2)))
{var state_11860__$1 = state_11860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11860__$1,(4),ch);
} else
{if((state_val_11861 === (11)))
{var inst_11837 = (state_11860[(7)]);var inst_11847 = (state_11860[(2)]);var state_11860__$1 = state_11860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11860__$1,(8),inst_11847,inst_11837);
} else
{if((state_val_11861 === (9)))
{var state_11860__$1 = state_11860;var statearr_11871_11894 = state_11860__$1;(statearr_11871_11894[(2)] = tc);
(statearr_11871_11894[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (5)))
{var inst_11840 = cljs.core.async.close_BANG_.call(null,tc);var inst_11841 = cljs.core.async.close_BANG_.call(null,fc);var state_11860__$1 = (function (){var statearr_11872 = state_11860;(statearr_11872[(8)] = inst_11840);
return statearr_11872;
})();var statearr_11873_11895 = state_11860__$1;(statearr_11873_11895[(2)] = inst_11841);
(statearr_11873_11895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (14)))
{var inst_11854 = (state_11860[(2)]);var state_11860__$1 = state_11860;var statearr_11874_11896 = state_11860__$1;(statearr_11874_11896[(2)] = inst_11854);
(statearr_11874_11896[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (10)))
{var state_11860__$1 = state_11860;var statearr_11875_11897 = state_11860__$1;(statearr_11875_11897[(2)] = fc);
(statearr_11875_11897[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11861 === (8)))
{var inst_11849 = (state_11860[(2)]);var state_11860__$1 = state_11860;if(cljs.core.truth_(inst_11849))
{var statearr_11876_11898 = state_11860__$1;(statearr_11876_11898[(1)] = (12));
} else
{var statearr_11877_11899 = state_11860__$1;(statearr_11877_11899[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___11885,tc,fc))
;return ((function (switch__6876__auto__,c__6891__auto___11885,tc,fc){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_11881 = [null,null,null,null,null,null,null,null,null];(statearr_11881[(0)] = state_machine__6877__auto__);
(statearr_11881[(1)] = (1));
return statearr_11881;
});
var state_machine__6877__auto____1 = (function (state_11860){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_11860);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e11882){if((e11882 instanceof Object))
{var ex__6880__auto__ = e11882;var statearr_11883_11900 = state_11860;(statearr_11883_11900[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11860);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11882;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11901 = state_11860;
state_11860 = G__11901;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_11860){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_11860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___11885,tc,fc))
})();var state__6893__auto__ = (function (){var statearr_11884 = f__6892__auto__.call(null);(statearr_11884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___11885);
return statearr_11884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___11885,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6891__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto__){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto__){
return (function (state_11948){var state_val_11949 = (state_11948[(1)]);if((state_val_11949 === (7)))
{var inst_11944 = (state_11948[(2)]);var state_11948__$1 = state_11948;var statearr_11950_11966 = state_11948__$1;(statearr_11950_11966[(2)] = inst_11944);
(statearr_11950_11966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11949 === (6)))
{var inst_11934 = (state_11948[(7)]);var inst_11937 = (state_11948[(8)]);var inst_11941 = f.call(null,inst_11934,inst_11937);var inst_11934__$1 = inst_11941;var state_11948__$1 = (function (){var statearr_11951 = state_11948;(statearr_11951[(7)] = inst_11934__$1);
return statearr_11951;
})();var statearr_11952_11967 = state_11948__$1;(statearr_11952_11967[(2)] = null);
(statearr_11952_11967[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11949 === (5)))
{var inst_11934 = (state_11948[(7)]);var state_11948__$1 = state_11948;var statearr_11953_11968 = state_11948__$1;(statearr_11953_11968[(2)] = inst_11934);
(statearr_11953_11968[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11949 === (4)))
{var inst_11937 = (state_11948[(8)]);var inst_11937__$1 = (state_11948[(2)]);var inst_11938 = (inst_11937__$1 == null);var state_11948__$1 = (function (){var statearr_11954 = state_11948;(statearr_11954[(8)] = inst_11937__$1);
return statearr_11954;
})();if(cljs.core.truth_(inst_11938))
{var statearr_11955_11969 = state_11948__$1;(statearr_11955_11969[(1)] = (5));
} else
{var statearr_11956_11970 = state_11948__$1;(statearr_11956_11970[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11949 === (3)))
{var inst_11946 = (state_11948[(2)]);var state_11948__$1 = state_11948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11948__$1,inst_11946);
} else
{if((state_val_11949 === (2)))
{var state_11948__$1 = state_11948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11948__$1,(4),ch);
} else
{if((state_val_11949 === (1)))
{var inst_11934 = init;var state_11948__$1 = (function (){var statearr_11957 = state_11948;(statearr_11957[(7)] = inst_11934);
return statearr_11957;
})();var statearr_11958_11971 = state_11948__$1;(statearr_11958_11971[(2)] = null);
(statearr_11958_11971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6891__auto__))
;return ((function (switch__6876__auto__,c__6891__auto__){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_11962 = [null,null,null,null,null,null,null,null,null];(statearr_11962[(0)] = state_machine__6877__auto__);
(statearr_11962[(1)] = (1));
return statearr_11962;
});
var state_machine__6877__auto____1 = (function (state_11948){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_11948);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e11963){if((e11963 instanceof Object))
{var ex__6880__auto__ = e11963;var statearr_11964_11972 = state_11948;(statearr_11964_11972[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11963;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11973 = state_11948;
state_11948 = G__11973;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_11948){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_11948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto__))
})();var state__6893__auto__ = (function (){var statearr_11965 = f__6892__auto__.call(null);(statearr_11965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto__);
return statearr_11965;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto__))
);
return c__6891__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6891__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto__){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto__){
return (function (state_12047){var state_val_12048 = (state_12047[(1)]);if((state_val_12048 === (7)))
{var inst_12029 = (state_12047[(2)]);var state_12047__$1 = state_12047;var statearr_12049_12072 = state_12047__$1;(statearr_12049_12072[(2)] = inst_12029);
(statearr_12049_12072[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (1)))
{var inst_12023 = cljs.core.seq.call(null,coll);var inst_12024 = inst_12023;var state_12047__$1 = (function (){var statearr_12050 = state_12047;(statearr_12050[(7)] = inst_12024);
return statearr_12050;
})();var statearr_12051_12073 = state_12047__$1;(statearr_12051_12073[(2)] = null);
(statearr_12051_12073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (4)))
{var inst_12024 = (state_12047[(7)]);var inst_12027 = cljs.core.first.call(null,inst_12024);var state_12047__$1 = state_12047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12047__$1,(7),ch,inst_12027);
} else
{if((state_val_12048 === (13)))
{var inst_12041 = (state_12047[(2)]);var state_12047__$1 = state_12047;var statearr_12052_12074 = state_12047__$1;(statearr_12052_12074[(2)] = inst_12041);
(statearr_12052_12074[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (6)))
{var inst_12032 = (state_12047[(2)]);var state_12047__$1 = state_12047;if(cljs.core.truth_(inst_12032))
{var statearr_12053_12075 = state_12047__$1;(statearr_12053_12075[(1)] = (8));
} else
{var statearr_12054_12076 = state_12047__$1;(statearr_12054_12076[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (3)))
{var inst_12045 = (state_12047[(2)]);var state_12047__$1 = state_12047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12047__$1,inst_12045);
} else
{if((state_val_12048 === (12)))
{var state_12047__$1 = state_12047;var statearr_12055_12077 = state_12047__$1;(statearr_12055_12077[(2)] = null);
(statearr_12055_12077[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (2)))
{var inst_12024 = (state_12047[(7)]);var state_12047__$1 = state_12047;if(cljs.core.truth_(inst_12024))
{var statearr_12056_12078 = state_12047__$1;(statearr_12056_12078[(1)] = (4));
} else
{var statearr_12057_12079 = state_12047__$1;(statearr_12057_12079[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (11)))
{var inst_12038 = cljs.core.async.close_BANG_.call(null,ch);var state_12047__$1 = state_12047;var statearr_12058_12080 = state_12047__$1;(statearr_12058_12080[(2)] = inst_12038);
(statearr_12058_12080[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (9)))
{var state_12047__$1 = state_12047;if(cljs.core.truth_(close_QMARK_))
{var statearr_12059_12081 = state_12047__$1;(statearr_12059_12081[(1)] = (11));
} else
{var statearr_12060_12082 = state_12047__$1;(statearr_12060_12082[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (5)))
{var inst_12024 = (state_12047[(7)]);var state_12047__$1 = state_12047;var statearr_12061_12083 = state_12047__$1;(statearr_12061_12083[(2)] = inst_12024);
(statearr_12061_12083[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (10)))
{var inst_12043 = (state_12047[(2)]);var state_12047__$1 = state_12047;var statearr_12062_12084 = state_12047__$1;(statearr_12062_12084[(2)] = inst_12043);
(statearr_12062_12084[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12048 === (8)))
{var inst_12024 = (state_12047[(7)]);var inst_12034 = cljs.core.next.call(null,inst_12024);var inst_12024__$1 = inst_12034;var state_12047__$1 = (function (){var statearr_12063 = state_12047;(statearr_12063[(7)] = inst_12024__$1);
return statearr_12063;
})();var statearr_12064_12085 = state_12047__$1;(statearr_12064_12085[(2)] = null);
(statearr_12064_12085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto__))
;return ((function (switch__6876__auto__,c__6891__auto__){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_12068 = [null,null,null,null,null,null,null,null];(statearr_12068[(0)] = state_machine__6877__auto__);
(statearr_12068[(1)] = (1));
return statearr_12068;
});
var state_machine__6877__auto____1 = (function (state_12047){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_12047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e12069){if((e12069 instanceof Object))
{var ex__6880__auto__ = e12069;var statearr_12070_12086 = state_12047;(statearr_12070_12086[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12069;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12087 = state_12047;
state_12047 = G__12087;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_12047){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_12047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto__))
})();var state__6893__auto__ = (function (){var statearr_12071 = f__6892__auto__.call(null);(statearr_12071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto__);
return statearr_12071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto__))
);
return c__6891__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12089 = {};return obj12089;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3544__auto__ = _;if(and__3544__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4183__auto__ = (((_ == null))?null:_);return (function (){var or__3556__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12091 = {};return obj12091;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3544__auto__ = m;if(and__3544__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3544__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4183__auto__ = (((m == null))?null:m);return (function (){var or__3556__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3544__auto__ = m;if(and__3544__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4183__auto__ = (((m == null))?null:m);return (function (){var or__3556__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3544__auto__ = m;if(and__3544__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4183__auto__ = (((m == null))?null:m);return (function (){var or__3556__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12313 = (function (cs,ch,mult,meta12314){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12314 = meta12314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12313.cljs$lang$type = true;
cljs.core.async.t12313.cljs$lang$ctorStr = "cljs.core.async/t12313";
cljs.core.async.t12313.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t12313");
});})(cs))
;
cljs.core.async.t12313.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12313.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12313.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12313.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12313.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12315){var self__ = this;
var _12315__$1 = this;return self__.meta12314;
});})(cs))
;
cljs.core.async.t12313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12315,meta12314__$1){var self__ = this;
var _12315__$1 = this;return (new cljs.core.async.t12313(self__.cs,self__.ch,self__.mult,meta12314__$1));
});})(cs))
;
cljs.core.async.__GT_t12313 = ((function (cs){
return (function __GT_t12313(cs__$1,ch__$1,mult__$1,meta12314){return (new cljs.core.async.t12313(cs__$1,ch__$1,mult__$1,meta12314));
});})(cs))
;
}
return (new cljs.core.async.t12313(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6891__auto___12534 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___12534,cs,m,dchan,dctr,done){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___12534,cs,m,dchan,dctr,done){
return (function (state_12446){var state_val_12447 = (state_12446[(1)]);if((state_val_12447 === (7)))
{var inst_12442 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12448_12535 = state_12446__$1;(statearr_12448_12535[(2)] = inst_12442);
(statearr_12448_12535[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (20)))
{var inst_12347 = (state_12446[(7)]);var inst_12357 = cljs.core.first.call(null,inst_12347);var inst_12358 = cljs.core.nth.call(null,inst_12357,(0),null);var inst_12359 = cljs.core.nth.call(null,inst_12357,(1),null);var state_12446__$1 = (function (){var statearr_12449 = state_12446;(statearr_12449[(8)] = inst_12358);
return statearr_12449;
})();if(cljs.core.truth_(inst_12359))
{var statearr_12450_12536 = state_12446__$1;(statearr_12450_12536[(1)] = (22));
} else
{var statearr_12451_12537 = state_12446__$1;(statearr_12451_12537[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (27)))
{var inst_12389 = (state_12446[(9)]);var inst_12318 = (state_12446[(10)]);var inst_12394 = (state_12446[(11)]);var inst_12387 = (state_12446[(12)]);var inst_12394__$1 = cljs.core._nth.call(null,inst_12387,inst_12389);var inst_12395 = cljs.core.async.put_BANG_.call(null,inst_12394__$1,inst_12318,done);var state_12446__$1 = (function (){var statearr_12452 = state_12446;(statearr_12452[(11)] = inst_12394__$1);
return statearr_12452;
})();if(cljs.core.truth_(inst_12395))
{var statearr_12453_12538 = state_12446__$1;(statearr_12453_12538[(1)] = (30));
} else
{var statearr_12454_12539 = state_12446__$1;(statearr_12454_12539[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (1)))
{var state_12446__$1 = state_12446;var statearr_12455_12540 = state_12446__$1;(statearr_12455_12540[(2)] = null);
(statearr_12455_12540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (24)))
{var inst_12347 = (state_12446[(7)]);var inst_12364 = (state_12446[(2)]);var inst_12365 = cljs.core.next.call(null,inst_12347);var inst_12327 = inst_12365;var inst_12328 = null;var inst_12329 = (0);var inst_12330 = (0);var state_12446__$1 = (function (){var statearr_12456 = state_12446;(statearr_12456[(13)] = inst_12329);
(statearr_12456[(14)] = inst_12328);
(statearr_12456[(15)] = inst_12364);
(statearr_12456[(16)] = inst_12330);
(statearr_12456[(17)] = inst_12327);
return statearr_12456;
})();var statearr_12457_12541 = state_12446__$1;(statearr_12457_12541[(2)] = null);
(statearr_12457_12541[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (39)))
{var state_12446__$1 = state_12446;var statearr_12461_12542 = state_12446__$1;(statearr_12461_12542[(2)] = null);
(statearr_12461_12542[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (4)))
{var inst_12318 = (state_12446[(10)]);var inst_12318__$1 = (state_12446[(2)]);var inst_12319 = (inst_12318__$1 == null);var state_12446__$1 = (function (){var statearr_12462 = state_12446;(statearr_12462[(10)] = inst_12318__$1);
return statearr_12462;
})();if(cljs.core.truth_(inst_12319))
{var statearr_12463_12543 = state_12446__$1;(statearr_12463_12543[(1)] = (5));
} else
{var statearr_12464_12544 = state_12446__$1;(statearr_12464_12544[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (15)))
{var inst_12329 = (state_12446[(13)]);var inst_12328 = (state_12446[(14)]);var inst_12330 = (state_12446[(16)]);var inst_12327 = (state_12446[(17)]);var inst_12343 = (state_12446[(2)]);var inst_12344 = (inst_12330 + (1));var tmp12458 = inst_12329;var tmp12459 = inst_12328;var tmp12460 = inst_12327;var inst_12327__$1 = tmp12460;var inst_12328__$1 = tmp12459;var inst_12329__$1 = tmp12458;var inst_12330__$1 = inst_12344;var state_12446__$1 = (function (){var statearr_12465 = state_12446;(statearr_12465[(13)] = inst_12329__$1);
(statearr_12465[(14)] = inst_12328__$1);
(statearr_12465[(18)] = inst_12343);
(statearr_12465[(16)] = inst_12330__$1);
(statearr_12465[(17)] = inst_12327__$1);
return statearr_12465;
})();var statearr_12466_12545 = state_12446__$1;(statearr_12466_12545[(2)] = null);
(statearr_12466_12545[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (21)))
{var inst_12368 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12470_12546 = state_12446__$1;(statearr_12470_12546[(2)] = inst_12368);
(statearr_12470_12546[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (31)))
{var inst_12394 = (state_12446[(11)]);var inst_12398 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12399 = cljs.core.async.untap_STAR_.call(null,m,inst_12394);var state_12446__$1 = (function (){var statearr_12471 = state_12446;(statearr_12471[(19)] = inst_12398);
return statearr_12471;
})();var statearr_12472_12547 = state_12446__$1;(statearr_12472_12547[(2)] = inst_12399);
(statearr_12472_12547[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (32)))
{var inst_12388 = (state_12446[(20)]);var inst_12389 = (state_12446[(9)]);var inst_12386 = (state_12446[(21)]);var inst_12387 = (state_12446[(12)]);var inst_12401 = (state_12446[(2)]);var inst_12402 = (inst_12389 + (1));var tmp12467 = inst_12388;var tmp12468 = inst_12386;var tmp12469 = inst_12387;var inst_12386__$1 = tmp12468;var inst_12387__$1 = tmp12469;var inst_12388__$1 = tmp12467;var inst_12389__$1 = inst_12402;var state_12446__$1 = (function (){var statearr_12473 = state_12446;(statearr_12473[(22)] = inst_12401);
(statearr_12473[(20)] = inst_12388__$1);
(statearr_12473[(9)] = inst_12389__$1);
(statearr_12473[(21)] = inst_12386__$1);
(statearr_12473[(12)] = inst_12387__$1);
return statearr_12473;
})();var statearr_12474_12548 = state_12446__$1;(statearr_12474_12548[(2)] = null);
(statearr_12474_12548[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (40)))
{var inst_12414 = (state_12446[(23)]);var inst_12418 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12419 = cljs.core.async.untap_STAR_.call(null,m,inst_12414);var state_12446__$1 = (function (){var statearr_12475 = state_12446;(statearr_12475[(24)] = inst_12418);
return statearr_12475;
})();var statearr_12476_12549 = state_12446__$1;(statearr_12476_12549[(2)] = inst_12419);
(statearr_12476_12549[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (33)))
{var inst_12405 = (state_12446[(25)]);var inst_12407 = cljs.core.chunked_seq_QMARK_.call(null,inst_12405);var state_12446__$1 = state_12446;if(inst_12407)
{var statearr_12477_12550 = state_12446__$1;(statearr_12477_12550[(1)] = (36));
} else
{var statearr_12478_12551 = state_12446__$1;(statearr_12478_12551[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (13)))
{var inst_12337 = (state_12446[(26)]);var inst_12340 = cljs.core.async.close_BANG_.call(null,inst_12337);var state_12446__$1 = state_12446;var statearr_12479_12552 = state_12446__$1;(statearr_12479_12552[(2)] = inst_12340);
(statearr_12479_12552[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (22)))
{var inst_12358 = (state_12446[(8)]);var inst_12361 = cljs.core.async.close_BANG_.call(null,inst_12358);var state_12446__$1 = state_12446;var statearr_12480_12553 = state_12446__$1;(statearr_12480_12553[(2)] = inst_12361);
(statearr_12480_12553[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (36)))
{var inst_12405 = (state_12446[(25)]);var inst_12409 = cljs.core.chunk_first.call(null,inst_12405);var inst_12410 = cljs.core.chunk_rest.call(null,inst_12405);var inst_12411 = cljs.core.count.call(null,inst_12409);var inst_12386 = inst_12410;var inst_12387 = inst_12409;var inst_12388 = inst_12411;var inst_12389 = (0);var state_12446__$1 = (function (){var statearr_12481 = state_12446;(statearr_12481[(20)] = inst_12388);
(statearr_12481[(9)] = inst_12389);
(statearr_12481[(21)] = inst_12386);
(statearr_12481[(12)] = inst_12387);
return statearr_12481;
})();var statearr_12482_12554 = state_12446__$1;(statearr_12482_12554[(2)] = null);
(statearr_12482_12554[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (41)))
{var inst_12405 = (state_12446[(25)]);var inst_12421 = (state_12446[(2)]);var inst_12422 = cljs.core.next.call(null,inst_12405);var inst_12386 = inst_12422;var inst_12387 = null;var inst_12388 = (0);var inst_12389 = (0);var state_12446__$1 = (function (){var statearr_12483 = state_12446;(statearr_12483[(20)] = inst_12388);
(statearr_12483[(27)] = inst_12421);
(statearr_12483[(9)] = inst_12389);
(statearr_12483[(21)] = inst_12386);
(statearr_12483[(12)] = inst_12387);
return statearr_12483;
})();var statearr_12484_12555 = state_12446__$1;(statearr_12484_12555[(2)] = null);
(statearr_12484_12555[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (43)))
{var state_12446__$1 = state_12446;var statearr_12485_12556 = state_12446__$1;(statearr_12485_12556[(2)] = null);
(statearr_12485_12556[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (29)))
{var inst_12430 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12486_12557 = state_12446__$1;(statearr_12486_12557[(2)] = inst_12430);
(statearr_12486_12557[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (44)))
{var inst_12439 = (state_12446[(2)]);var state_12446__$1 = (function (){var statearr_12487 = state_12446;(statearr_12487[(28)] = inst_12439);
return statearr_12487;
})();var statearr_12488_12558 = state_12446__$1;(statearr_12488_12558[(2)] = null);
(statearr_12488_12558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (6)))
{var inst_12378 = (state_12446[(29)]);var inst_12377 = cljs.core.deref.call(null,cs);var inst_12378__$1 = cljs.core.keys.call(null,inst_12377);var inst_12379 = cljs.core.count.call(null,inst_12378__$1);var inst_12380 = cljs.core.reset_BANG_.call(null,dctr,inst_12379);var inst_12385 = cljs.core.seq.call(null,inst_12378__$1);var inst_12386 = inst_12385;var inst_12387 = null;var inst_12388 = (0);var inst_12389 = (0);var state_12446__$1 = (function (){var statearr_12489 = state_12446;(statearr_12489[(20)] = inst_12388);
(statearr_12489[(9)] = inst_12389);
(statearr_12489[(30)] = inst_12380);
(statearr_12489[(21)] = inst_12386);
(statearr_12489[(12)] = inst_12387);
(statearr_12489[(29)] = inst_12378__$1);
return statearr_12489;
})();var statearr_12490_12559 = state_12446__$1;(statearr_12490_12559[(2)] = null);
(statearr_12490_12559[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (28)))
{var inst_12386 = (state_12446[(21)]);var inst_12405 = (state_12446[(25)]);var inst_12405__$1 = cljs.core.seq.call(null,inst_12386);var state_12446__$1 = (function (){var statearr_12491 = state_12446;(statearr_12491[(25)] = inst_12405__$1);
return statearr_12491;
})();if(inst_12405__$1)
{var statearr_12492_12560 = state_12446__$1;(statearr_12492_12560[(1)] = (33));
} else
{var statearr_12493_12561 = state_12446__$1;(statearr_12493_12561[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (25)))
{var inst_12388 = (state_12446[(20)]);var inst_12389 = (state_12446[(9)]);var inst_12391 = (inst_12389 < inst_12388);var inst_12392 = inst_12391;var state_12446__$1 = state_12446;if(cljs.core.truth_(inst_12392))
{var statearr_12494_12562 = state_12446__$1;(statearr_12494_12562[(1)] = (27));
} else
{var statearr_12495_12563 = state_12446__$1;(statearr_12495_12563[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (34)))
{var state_12446__$1 = state_12446;var statearr_12496_12564 = state_12446__$1;(statearr_12496_12564[(2)] = null);
(statearr_12496_12564[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (17)))
{var state_12446__$1 = state_12446;var statearr_12497_12565 = state_12446__$1;(statearr_12497_12565[(2)] = null);
(statearr_12497_12565[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (3)))
{var inst_12444 = (state_12446[(2)]);var state_12446__$1 = state_12446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12446__$1,inst_12444);
} else
{if((state_val_12447 === (12)))
{var inst_12373 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12498_12566 = state_12446__$1;(statearr_12498_12566[(2)] = inst_12373);
(statearr_12498_12566[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (2)))
{var state_12446__$1 = state_12446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12446__$1,(4),ch);
} else
{if((state_val_12447 === (23)))
{var state_12446__$1 = state_12446;var statearr_12499_12567 = state_12446__$1;(statearr_12499_12567[(2)] = null);
(statearr_12499_12567[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (35)))
{var inst_12428 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12500_12568 = state_12446__$1;(statearr_12500_12568[(2)] = inst_12428);
(statearr_12500_12568[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (19)))
{var inst_12347 = (state_12446[(7)]);var inst_12351 = cljs.core.chunk_first.call(null,inst_12347);var inst_12352 = cljs.core.chunk_rest.call(null,inst_12347);var inst_12353 = cljs.core.count.call(null,inst_12351);var inst_12327 = inst_12352;var inst_12328 = inst_12351;var inst_12329 = inst_12353;var inst_12330 = (0);var state_12446__$1 = (function (){var statearr_12501 = state_12446;(statearr_12501[(13)] = inst_12329);
(statearr_12501[(14)] = inst_12328);
(statearr_12501[(16)] = inst_12330);
(statearr_12501[(17)] = inst_12327);
return statearr_12501;
})();var statearr_12502_12569 = state_12446__$1;(statearr_12502_12569[(2)] = null);
(statearr_12502_12569[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (11)))
{var inst_12347 = (state_12446[(7)]);var inst_12327 = (state_12446[(17)]);var inst_12347__$1 = cljs.core.seq.call(null,inst_12327);var state_12446__$1 = (function (){var statearr_12503 = state_12446;(statearr_12503[(7)] = inst_12347__$1);
return statearr_12503;
})();if(inst_12347__$1)
{var statearr_12504_12570 = state_12446__$1;(statearr_12504_12570[(1)] = (16));
} else
{var statearr_12505_12571 = state_12446__$1;(statearr_12505_12571[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (9)))
{var inst_12375 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12506_12572 = state_12446__$1;(statearr_12506_12572[(2)] = inst_12375);
(statearr_12506_12572[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (5)))
{var inst_12325 = cljs.core.deref.call(null,cs);var inst_12326 = cljs.core.seq.call(null,inst_12325);var inst_12327 = inst_12326;var inst_12328 = null;var inst_12329 = (0);var inst_12330 = (0);var state_12446__$1 = (function (){var statearr_12507 = state_12446;(statearr_12507[(13)] = inst_12329);
(statearr_12507[(14)] = inst_12328);
(statearr_12507[(16)] = inst_12330);
(statearr_12507[(17)] = inst_12327);
return statearr_12507;
})();var statearr_12508_12573 = state_12446__$1;(statearr_12508_12573[(2)] = null);
(statearr_12508_12573[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (14)))
{var state_12446__$1 = state_12446;var statearr_12509_12574 = state_12446__$1;(statearr_12509_12574[(2)] = null);
(statearr_12509_12574[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (45)))
{var inst_12436 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12510_12575 = state_12446__$1;(statearr_12510_12575[(2)] = inst_12436);
(statearr_12510_12575[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (26)))
{var inst_12378 = (state_12446[(29)]);var inst_12432 = (state_12446[(2)]);var inst_12433 = cljs.core.seq.call(null,inst_12378);var state_12446__$1 = (function (){var statearr_12511 = state_12446;(statearr_12511[(31)] = inst_12432);
return statearr_12511;
})();if(inst_12433)
{var statearr_12512_12576 = state_12446__$1;(statearr_12512_12576[(1)] = (42));
} else
{var statearr_12513_12577 = state_12446__$1;(statearr_12513_12577[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (16)))
{var inst_12347 = (state_12446[(7)]);var inst_12349 = cljs.core.chunked_seq_QMARK_.call(null,inst_12347);var state_12446__$1 = state_12446;if(inst_12349)
{var statearr_12514_12578 = state_12446__$1;(statearr_12514_12578[(1)] = (19));
} else
{var statearr_12515_12579 = state_12446__$1;(statearr_12515_12579[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (38)))
{var inst_12425 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12516_12580 = state_12446__$1;(statearr_12516_12580[(2)] = inst_12425);
(statearr_12516_12580[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (30)))
{var state_12446__$1 = state_12446;var statearr_12517_12581 = state_12446__$1;(statearr_12517_12581[(2)] = null);
(statearr_12517_12581[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (10)))
{var inst_12328 = (state_12446[(14)]);var inst_12330 = (state_12446[(16)]);var inst_12336 = cljs.core._nth.call(null,inst_12328,inst_12330);var inst_12337 = cljs.core.nth.call(null,inst_12336,(0),null);var inst_12338 = cljs.core.nth.call(null,inst_12336,(1),null);var state_12446__$1 = (function (){var statearr_12518 = state_12446;(statearr_12518[(26)] = inst_12337);
return statearr_12518;
})();if(cljs.core.truth_(inst_12338))
{var statearr_12519_12582 = state_12446__$1;(statearr_12519_12582[(1)] = (13));
} else
{var statearr_12520_12583 = state_12446__$1;(statearr_12520_12583[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (18)))
{var inst_12371 = (state_12446[(2)]);var state_12446__$1 = state_12446;var statearr_12521_12584 = state_12446__$1;(statearr_12521_12584[(2)] = inst_12371);
(statearr_12521_12584[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (42)))
{var state_12446__$1 = state_12446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12446__$1,(45),dchan);
} else
{if((state_val_12447 === (37)))
{var inst_12318 = (state_12446[(10)]);var inst_12405 = (state_12446[(25)]);var inst_12414 = (state_12446[(23)]);var inst_12414__$1 = cljs.core.first.call(null,inst_12405);var inst_12415 = cljs.core.async.put_BANG_.call(null,inst_12414__$1,inst_12318,done);var state_12446__$1 = (function (){var statearr_12522 = state_12446;(statearr_12522[(23)] = inst_12414__$1);
return statearr_12522;
})();if(cljs.core.truth_(inst_12415))
{var statearr_12523_12585 = state_12446__$1;(statearr_12523_12585[(1)] = (39));
} else
{var statearr_12524_12586 = state_12446__$1;(statearr_12524_12586[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12447 === (8)))
{var inst_12329 = (state_12446[(13)]);var inst_12330 = (state_12446[(16)]);var inst_12332 = (inst_12330 < inst_12329);var inst_12333 = inst_12332;var state_12446__$1 = state_12446;if(cljs.core.truth_(inst_12333))
{var statearr_12525_12587 = state_12446__$1;(statearr_12525_12587[(1)] = (10));
} else
{var statearr_12526_12588 = state_12446__$1;(statearr_12526_12588[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___12534,cs,m,dchan,dctr,done))
;return ((function (switch__6876__auto__,c__6891__auto___12534,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_12530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12530[(0)] = state_machine__6877__auto__);
(statearr_12530[(1)] = (1));
return statearr_12530;
});
var state_machine__6877__auto____1 = (function (state_12446){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_12446);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e12531){if((e12531 instanceof Object))
{var ex__6880__auto__ = e12531;var statearr_12532_12589 = state_12446;(statearr_12532_12589[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12531;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12590 = state_12446;
state_12446 = G__12590;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_12446){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_12446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___12534,cs,m,dchan,dctr,done))
})();var state__6893__auto__ = (function (){var statearr_12533 = f__6892__auto__.call(null);(statearr_12533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___12534);
return statearr_12533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___12534,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12592 = {};return obj12592;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3544__auto__ = m;if(and__3544__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4183__auto__ = (((m == null))?null:m);return (function (){var or__3556__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3544__auto__ = m;if(and__3544__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4183__auto__ = (((m == null))?null:m);return (function (){var or__3556__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3544__auto__ = m;if(and__3544__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4183__auto__ = (((m == null))?null:m);return (function (){var or__3556__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3544__auto__ = m;if(and__3544__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4183__auto__ = (((m == null))?null:m);return (function (){var or__3556__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3544__auto__ = m;if(and__3544__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4183__auto__ = (((m == null))?null:m);return (function (){var or__3556__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12712 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12713){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12713 = meta12713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12712.cljs$lang$type = true;
cljs.core.async.t12712.cljs$lang$ctorStr = "cljs.core.async/t12712";
cljs.core.async.t12712.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t12712");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12712.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12712.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12712.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12712.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12712.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12712.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12712.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12714){var self__ = this;
var _12714__$1 = this;return self__.meta12713;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12714,meta12713__$1){var self__ = this;
var _12714__$1 = this;return (new cljs.core.async.t12712(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12713__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12712 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12712(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12713){return (new cljs.core.async.t12712(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12713));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12712(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6891__auto___12831 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___12831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___12831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12784){var state_val_12785 = (state_12784[(1)]);if((state_val_12785 === (7)))
{var inst_12728 = (state_12784[(7)]);var inst_12733 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12728);var state_12784__$1 = state_12784;var statearr_12786_12832 = state_12784__$1;(statearr_12786_12832[(2)] = inst_12733);
(statearr_12786_12832[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (20)))
{var inst_12743 = (state_12784[(8)]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12784__$1,(23),out,inst_12743);
} else
{if((state_val_12785 === (1)))
{var inst_12718 = (state_12784[(9)]);var inst_12718__$1 = calc_state.call(null);var inst_12719 = cljs.core.seq_QMARK_.call(null,inst_12718__$1);var state_12784__$1 = (function (){var statearr_12787 = state_12784;(statearr_12787[(9)] = inst_12718__$1);
return statearr_12787;
})();if(inst_12719)
{var statearr_12788_12833 = state_12784__$1;(statearr_12788_12833[(1)] = (2));
} else
{var statearr_12789_12834 = state_12784__$1;(statearr_12789_12834[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (24)))
{var inst_12736 = (state_12784[(10)]);var inst_12728 = inst_12736;var state_12784__$1 = (function (){var statearr_12790 = state_12784;(statearr_12790[(7)] = inst_12728);
return statearr_12790;
})();var statearr_12791_12835 = state_12784__$1;(statearr_12791_12835[(2)] = null);
(statearr_12791_12835[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (4)))
{var inst_12718 = (state_12784[(9)]);var inst_12724 = (state_12784[(2)]);var inst_12725 = cljs.core.get.call(null,inst_12724,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12726 = cljs.core.get.call(null,inst_12724,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12727 = cljs.core.get.call(null,inst_12724,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12728 = inst_12718;var state_12784__$1 = (function (){var statearr_12792 = state_12784;(statearr_12792[(11)] = inst_12725);
(statearr_12792[(7)] = inst_12728);
(statearr_12792[(12)] = inst_12726);
(statearr_12792[(13)] = inst_12727);
return statearr_12792;
})();var statearr_12793_12836 = state_12784__$1;(statearr_12793_12836[(2)] = null);
(statearr_12793_12836[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (15)))
{var state_12784__$1 = state_12784;var statearr_12794_12837 = state_12784__$1;(statearr_12794_12837[(2)] = null);
(statearr_12794_12837[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (21)))
{var inst_12736 = (state_12784[(10)]);var inst_12728 = inst_12736;var state_12784__$1 = (function (){var statearr_12795 = state_12784;(statearr_12795[(7)] = inst_12728);
return statearr_12795;
})();var statearr_12796_12838 = state_12784__$1;(statearr_12796_12838[(2)] = null);
(statearr_12796_12838[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (13)))
{var inst_12780 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12797_12839 = state_12784__$1;(statearr_12797_12839[(2)] = inst_12780);
(statearr_12797_12839[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (22)))
{var inst_12778 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12798_12840 = state_12784__$1;(statearr_12798_12840[(2)] = inst_12778);
(statearr_12798_12840[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (6)))
{var inst_12782 = (state_12784[(2)]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12784__$1,inst_12782);
} else
{if((state_val_12785 === (25)))
{var state_12784__$1 = state_12784;var statearr_12799_12841 = state_12784__$1;(statearr_12799_12841[(2)] = null);
(statearr_12799_12841[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (17)))
{var inst_12758 = (state_12784[(14)]);var state_12784__$1 = state_12784;var statearr_12800_12842 = state_12784__$1;(statearr_12800_12842[(2)] = inst_12758);
(statearr_12800_12842[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (3)))
{var inst_12718 = (state_12784[(9)]);var state_12784__$1 = state_12784;var statearr_12801_12843 = state_12784__$1;(statearr_12801_12843[(2)] = inst_12718);
(statearr_12801_12843[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (12)))
{var inst_12758 = (state_12784[(14)]);var inst_12739 = (state_12784[(15)]);var inst_12744 = (state_12784[(16)]);var inst_12758__$1 = inst_12739.call(null,inst_12744);var state_12784__$1 = (function (){var statearr_12802 = state_12784;(statearr_12802[(14)] = inst_12758__$1);
return statearr_12802;
})();if(cljs.core.truth_(inst_12758__$1))
{var statearr_12803_12844 = state_12784__$1;(statearr_12803_12844[(1)] = (17));
} else
{var statearr_12804_12845 = state_12784__$1;(statearr_12804_12845[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (2)))
{var inst_12718 = (state_12784[(9)]);var inst_12721 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12718);var state_12784__$1 = state_12784;var statearr_12805_12846 = state_12784__$1;(statearr_12805_12846[(2)] = inst_12721);
(statearr_12805_12846[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (23)))
{var inst_12769 = (state_12784[(2)]);var state_12784__$1 = state_12784;if(cljs.core.truth_(inst_12769))
{var statearr_12806_12847 = state_12784__$1;(statearr_12806_12847[(1)] = (24));
} else
{var statearr_12807_12848 = state_12784__$1;(statearr_12807_12848[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (19)))
{var inst_12766 = (state_12784[(2)]);var state_12784__$1 = state_12784;if(cljs.core.truth_(inst_12766))
{var statearr_12808_12849 = state_12784__$1;(statearr_12808_12849[(1)] = (20));
} else
{var statearr_12809_12850 = state_12784__$1;(statearr_12809_12850[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (11)))
{var inst_12743 = (state_12784[(8)]);var inst_12749 = (inst_12743 == null);var state_12784__$1 = state_12784;if(cljs.core.truth_(inst_12749))
{var statearr_12810_12851 = state_12784__$1;(statearr_12810_12851[(1)] = (14));
} else
{var statearr_12811_12852 = state_12784__$1;(statearr_12811_12852[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (9)))
{var inst_12736 = (state_12784[(10)]);var inst_12736__$1 = (state_12784[(2)]);var inst_12737 = cljs.core.get.call(null,inst_12736__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12738 = cljs.core.get.call(null,inst_12736__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12739 = cljs.core.get.call(null,inst_12736__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12784__$1 = (function (){var statearr_12812 = state_12784;(statearr_12812[(17)] = inst_12738);
(statearr_12812[(10)] = inst_12736__$1);
(statearr_12812[(15)] = inst_12739);
return statearr_12812;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12784__$1,(10),inst_12737);
} else
{if((state_val_12785 === (5)))
{var inst_12728 = (state_12784[(7)]);var inst_12731 = cljs.core.seq_QMARK_.call(null,inst_12728);var state_12784__$1 = state_12784;if(inst_12731)
{var statearr_12813_12853 = state_12784__$1;(statearr_12813_12853[(1)] = (7));
} else
{var statearr_12814_12854 = state_12784__$1;(statearr_12814_12854[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (14)))
{var inst_12744 = (state_12784[(16)]);var inst_12751 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12744);var state_12784__$1 = state_12784;var statearr_12815_12855 = state_12784__$1;(statearr_12815_12855[(2)] = inst_12751);
(statearr_12815_12855[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (26)))
{var inst_12774 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12816_12856 = state_12784__$1;(statearr_12816_12856[(2)] = inst_12774);
(statearr_12816_12856[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (16)))
{var inst_12754 = (state_12784[(2)]);var inst_12755 = calc_state.call(null);var inst_12728 = inst_12755;var state_12784__$1 = (function (){var statearr_12817 = state_12784;(statearr_12817[(18)] = inst_12754);
(statearr_12817[(7)] = inst_12728);
return statearr_12817;
})();var statearr_12818_12857 = state_12784__$1;(statearr_12818_12857[(2)] = null);
(statearr_12818_12857[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (10)))
{var inst_12743 = (state_12784[(8)]);var inst_12744 = (state_12784[(16)]);var inst_12742 = (state_12784[(2)]);var inst_12743__$1 = cljs.core.nth.call(null,inst_12742,(0),null);var inst_12744__$1 = cljs.core.nth.call(null,inst_12742,(1),null);var inst_12745 = (inst_12743__$1 == null);var inst_12746 = cljs.core._EQ_.call(null,inst_12744__$1,change);var inst_12747 = (inst_12745) || (inst_12746);var state_12784__$1 = (function (){var statearr_12819 = state_12784;(statearr_12819[(8)] = inst_12743__$1);
(statearr_12819[(16)] = inst_12744__$1);
return statearr_12819;
})();if(cljs.core.truth_(inst_12747))
{var statearr_12820_12858 = state_12784__$1;(statearr_12820_12858[(1)] = (11));
} else
{var statearr_12821_12859 = state_12784__$1;(statearr_12821_12859[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (18)))
{var inst_12738 = (state_12784[(17)]);var inst_12739 = (state_12784[(15)]);var inst_12744 = (state_12784[(16)]);var inst_12761 = cljs.core.empty_QMARK_.call(null,inst_12739);var inst_12762 = inst_12738.call(null,inst_12744);var inst_12763 = cljs.core.not.call(null,inst_12762);var inst_12764 = (inst_12761) && (inst_12763);var state_12784__$1 = state_12784;var statearr_12822_12860 = state_12784__$1;(statearr_12822_12860[(2)] = inst_12764);
(statearr_12822_12860[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (8)))
{var inst_12728 = (state_12784[(7)]);var state_12784__$1 = state_12784;var statearr_12823_12861 = state_12784__$1;(statearr_12823_12861[(2)] = inst_12728);
(statearr_12823_12861[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___12831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6876__auto__,c__6891__auto___12831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_12827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12827[(0)] = state_machine__6877__auto__);
(statearr_12827[(1)] = (1));
return statearr_12827;
});
var state_machine__6877__auto____1 = (function (state_12784){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_12784);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e12828){if((e12828 instanceof Object))
{var ex__6880__auto__ = e12828;var statearr_12829_12862 = state_12784;(statearr_12829_12862[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12828;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12863 = state_12784;
state_12784 = G__12863;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_12784){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_12784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___12831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6893__auto__ = (function (){var statearr_12830 = f__6892__auto__.call(null);(statearr_12830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___12831);
return statearr_12830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___12831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12865 = {};return obj12865;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3544__auto__ = p;if(and__3544__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3544__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4183__auto__ = (((p == null))?null:p);return (function (){var or__3556__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3544__auto__ = p;if(and__3544__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3544__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4183__auto__ = (((p == null))?null:p);return (function (){var or__3556__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3544__auto__ = p;if(and__3544__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4183__auto__ = (((p == null))?null:p);return (function (){var or__3556__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3544__auto__ = p;if(and__3544__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4183__auto__ = (((p == null))?null:p);return (function (){var or__3556__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3556__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3556__auto__,mults){
return (function (p1__12866_SHARP_){if(cljs.core.truth_(p1__12866_SHARP_.call(null,topic)))
{return p1__12866_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12866_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3556__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12981 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12982){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12982 = meta12982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12981.cljs$lang$type = true;
cljs.core.async.t12981.cljs$lang$ctorStr = "cljs.core.async/t12981";
cljs.core.async.t12981.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t12981");
});})(mults,ensure_mult))
;
cljs.core.async.t12981.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12981.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12981.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12981.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12983){var self__ = this;
var _12983__$1 = this;return self__.meta12982;
});})(mults,ensure_mult))
;
cljs.core.async.t12981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12983,meta12982__$1){var self__ = this;
var _12983__$1 = this;return (new cljs.core.async.t12981(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12982__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12981 = ((function (mults,ensure_mult){
return (function __GT_t12981(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12982){return (new cljs.core.async.t12981(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12982));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12981(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6891__auto___13095 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___13095,mults,ensure_mult,p){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___13095,mults,ensure_mult,p){
return (function (state_13051){var state_val_13052 = (state_13051[(1)]);if((state_val_13052 === (7)))
{var inst_13047 = (state_13051[(2)]);var state_13051__$1 = state_13051;var statearr_13053_13096 = state_13051__$1;(statearr_13053_13096[(2)] = inst_13047);
(statearr_13053_13096[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (20)))
{var state_13051__$1 = state_13051;var statearr_13054_13097 = state_13051__$1;(statearr_13054_13097[(2)] = null);
(statearr_13054_13097[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (1)))
{var state_13051__$1 = state_13051;var statearr_13055_13098 = state_13051__$1;(statearr_13055_13098[(2)] = null);
(statearr_13055_13098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (4)))
{var inst_12986 = (state_13051[(7)]);var inst_12986__$1 = (state_13051[(2)]);var inst_12987 = (inst_12986__$1 == null);var state_13051__$1 = (function (){var statearr_13056 = state_13051;(statearr_13056[(7)] = inst_12986__$1);
return statearr_13056;
})();if(cljs.core.truth_(inst_12987))
{var statearr_13057_13099 = state_13051__$1;(statearr_13057_13099[(1)] = (5));
} else
{var statearr_13058_13100 = state_13051__$1;(statearr_13058_13100[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (15)))
{var inst_13028 = (state_13051[(2)]);var state_13051__$1 = state_13051;var statearr_13059_13101 = state_13051__$1;(statearr_13059_13101[(2)] = inst_13028);
(statearr_13059_13101[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (21)))
{var inst_13034 = (state_13051[(8)]);var inst_13042 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13034);var state_13051__$1 = state_13051;var statearr_13060_13102 = state_13051__$1;(statearr_13060_13102[(2)] = inst_13042);
(statearr_13060_13102[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (13)))
{var inst_13010 = (state_13051[(9)]);var inst_13012 = cljs.core.chunked_seq_QMARK_.call(null,inst_13010);var state_13051__$1 = state_13051;if(inst_13012)
{var statearr_13061_13103 = state_13051__$1;(statearr_13061_13103[(1)] = (16));
} else
{var statearr_13062_13104 = state_13051__$1;(statearr_13062_13104[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (22)))
{var inst_13044 = (state_13051[(2)]);var state_13051__$1 = (function (){var statearr_13063 = state_13051;(statearr_13063[(10)] = inst_13044);
return statearr_13063;
})();var statearr_13064_13105 = state_13051__$1;(statearr_13064_13105[(2)] = null);
(statearr_13064_13105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (6)))
{var inst_12986 = (state_13051[(7)]);var inst_13034 = (state_13051[(8)]);var inst_13034__$1 = topic_fn.call(null,inst_12986);var inst_13035 = cljs.core.deref.call(null,mults);var inst_13036 = cljs.core.get.call(null,inst_13035,inst_13034__$1);var inst_13037 = cljs.core.async.muxch_STAR_.call(null,inst_13036);var state_13051__$1 = (function (){var statearr_13065 = state_13051;(statearr_13065[(8)] = inst_13034__$1);
return statearr_13065;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13051__$1,(19),inst_13037,inst_12986);
} else
{if((state_val_13052 === (17)))
{var inst_13010 = (state_13051[(9)]);var inst_13019 = cljs.core.first.call(null,inst_13010);var inst_13020 = cljs.core.async.muxch_STAR_.call(null,inst_13019);var inst_13021 = cljs.core.async.close_BANG_.call(null,inst_13020);var inst_13022 = cljs.core.next.call(null,inst_13010);var inst_12996 = inst_13022;var inst_12997 = null;var inst_12998 = (0);var inst_12999 = (0);var state_13051__$1 = (function (){var statearr_13066 = state_13051;(statearr_13066[(11)] = inst_12998);
(statearr_13066[(12)] = inst_12999);
(statearr_13066[(13)] = inst_12996);
(statearr_13066[(14)] = inst_13021);
(statearr_13066[(15)] = inst_12997);
return statearr_13066;
})();var statearr_13067_13106 = state_13051__$1;(statearr_13067_13106[(2)] = null);
(statearr_13067_13106[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (3)))
{var inst_13049 = (state_13051[(2)]);var state_13051__$1 = state_13051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13051__$1,inst_13049);
} else
{if((state_val_13052 === (12)))
{var inst_13030 = (state_13051[(2)]);var state_13051__$1 = state_13051;var statearr_13068_13107 = state_13051__$1;(statearr_13068_13107[(2)] = inst_13030);
(statearr_13068_13107[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (2)))
{var state_13051__$1 = state_13051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13051__$1,(4),ch);
} else
{if((state_val_13052 === (19)))
{var inst_13039 = (state_13051[(2)]);var state_13051__$1 = state_13051;if(cljs.core.truth_(inst_13039))
{var statearr_13069_13108 = state_13051__$1;(statearr_13069_13108[(1)] = (20));
} else
{var statearr_13070_13109 = state_13051__$1;(statearr_13070_13109[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (11)))
{var inst_13010 = (state_13051[(9)]);var inst_12996 = (state_13051[(13)]);var inst_13010__$1 = cljs.core.seq.call(null,inst_12996);var state_13051__$1 = (function (){var statearr_13071 = state_13051;(statearr_13071[(9)] = inst_13010__$1);
return statearr_13071;
})();if(inst_13010__$1)
{var statearr_13072_13110 = state_13051__$1;(statearr_13072_13110[(1)] = (13));
} else
{var statearr_13073_13111 = state_13051__$1;(statearr_13073_13111[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (9)))
{var inst_13032 = (state_13051[(2)]);var state_13051__$1 = state_13051;var statearr_13074_13112 = state_13051__$1;(statearr_13074_13112[(2)] = inst_13032);
(statearr_13074_13112[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (5)))
{var inst_12993 = cljs.core.deref.call(null,mults);var inst_12994 = cljs.core.vals.call(null,inst_12993);var inst_12995 = cljs.core.seq.call(null,inst_12994);var inst_12996 = inst_12995;var inst_12997 = null;var inst_12998 = (0);var inst_12999 = (0);var state_13051__$1 = (function (){var statearr_13075 = state_13051;(statearr_13075[(11)] = inst_12998);
(statearr_13075[(12)] = inst_12999);
(statearr_13075[(13)] = inst_12996);
(statearr_13075[(15)] = inst_12997);
return statearr_13075;
})();var statearr_13076_13113 = state_13051__$1;(statearr_13076_13113[(2)] = null);
(statearr_13076_13113[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (14)))
{var state_13051__$1 = state_13051;var statearr_13080_13114 = state_13051__$1;(statearr_13080_13114[(2)] = null);
(statearr_13080_13114[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (16)))
{var inst_13010 = (state_13051[(9)]);var inst_13014 = cljs.core.chunk_first.call(null,inst_13010);var inst_13015 = cljs.core.chunk_rest.call(null,inst_13010);var inst_13016 = cljs.core.count.call(null,inst_13014);var inst_12996 = inst_13015;var inst_12997 = inst_13014;var inst_12998 = inst_13016;var inst_12999 = (0);var state_13051__$1 = (function (){var statearr_13081 = state_13051;(statearr_13081[(11)] = inst_12998);
(statearr_13081[(12)] = inst_12999);
(statearr_13081[(13)] = inst_12996);
(statearr_13081[(15)] = inst_12997);
return statearr_13081;
})();var statearr_13082_13115 = state_13051__$1;(statearr_13082_13115[(2)] = null);
(statearr_13082_13115[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (10)))
{var inst_12998 = (state_13051[(11)]);var inst_12999 = (state_13051[(12)]);var inst_12996 = (state_13051[(13)]);var inst_12997 = (state_13051[(15)]);var inst_13004 = cljs.core._nth.call(null,inst_12997,inst_12999);var inst_13005 = cljs.core.async.muxch_STAR_.call(null,inst_13004);var inst_13006 = cljs.core.async.close_BANG_.call(null,inst_13005);var inst_13007 = (inst_12999 + (1));var tmp13077 = inst_12998;var tmp13078 = inst_12996;var tmp13079 = inst_12997;var inst_12996__$1 = tmp13078;var inst_12997__$1 = tmp13079;var inst_12998__$1 = tmp13077;var inst_12999__$1 = inst_13007;var state_13051__$1 = (function (){var statearr_13083 = state_13051;(statearr_13083[(11)] = inst_12998__$1);
(statearr_13083[(12)] = inst_12999__$1);
(statearr_13083[(13)] = inst_12996__$1);
(statearr_13083[(15)] = inst_12997__$1);
(statearr_13083[(16)] = inst_13006);
return statearr_13083;
})();var statearr_13084_13116 = state_13051__$1;(statearr_13084_13116[(2)] = null);
(statearr_13084_13116[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (18)))
{var inst_13025 = (state_13051[(2)]);var state_13051__$1 = state_13051;var statearr_13085_13117 = state_13051__$1;(statearr_13085_13117[(2)] = inst_13025);
(statearr_13085_13117[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13052 === (8)))
{var inst_12998 = (state_13051[(11)]);var inst_12999 = (state_13051[(12)]);var inst_13001 = (inst_12999 < inst_12998);var inst_13002 = inst_13001;var state_13051__$1 = state_13051;if(cljs.core.truth_(inst_13002))
{var statearr_13086_13118 = state_13051__$1;(statearr_13086_13118[(1)] = (10));
} else
{var statearr_13087_13119 = state_13051__$1;(statearr_13087_13119[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___13095,mults,ensure_mult,p))
;return ((function (switch__6876__auto__,c__6891__auto___13095,mults,ensure_mult,p){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_13091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13091[(0)] = state_machine__6877__auto__);
(statearr_13091[(1)] = (1));
return statearr_13091;
});
var state_machine__6877__auto____1 = (function (state_13051){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_13051);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e13092){if((e13092 instanceof Object))
{var ex__6880__auto__ = e13092;var statearr_13093_13120 = state_13051;(statearr_13093_13120[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13051);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13092;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13121 = state_13051;
state_13051 = G__13121;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_13051){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_13051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___13095,mults,ensure_mult,p))
})();var state__6893__auto__ = (function (){var statearr_13094 = f__6892__auto__.call(null);(statearr_13094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___13095);
return statearr_13094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___13095,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6891__auto___13258 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___13258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___13258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13228){var state_val_13229 = (state_13228[(1)]);if((state_val_13229 === (7)))
{var state_13228__$1 = state_13228;var statearr_13230_13259 = state_13228__$1;(statearr_13230_13259[(2)] = null);
(statearr_13230_13259[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (1)))
{var state_13228__$1 = state_13228;var statearr_13231_13260 = state_13228__$1;(statearr_13231_13260[(2)] = null);
(statearr_13231_13260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (4)))
{var inst_13192 = (state_13228[(7)]);var inst_13194 = (inst_13192 < cnt);var state_13228__$1 = state_13228;if(cljs.core.truth_(inst_13194))
{var statearr_13232_13261 = state_13228__$1;(statearr_13232_13261[(1)] = (6));
} else
{var statearr_13233_13262 = state_13228__$1;(statearr_13233_13262[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (15)))
{var inst_13224 = (state_13228[(2)]);var state_13228__$1 = state_13228;var statearr_13234_13263 = state_13228__$1;(statearr_13234_13263[(2)] = inst_13224);
(statearr_13234_13263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (13)))
{var inst_13217 = cljs.core.async.close_BANG_.call(null,out);var state_13228__$1 = state_13228;var statearr_13235_13264 = state_13228__$1;(statearr_13235_13264[(2)] = inst_13217);
(statearr_13235_13264[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (6)))
{var state_13228__$1 = state_13228;var statearr_13236_13265 = state_13228__$1;(statearr_13236_13265[(2)] = null);
(statearr_13236_13265[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (3)))
{var inst_13226 = (state_13228[(2)]);var state_13228__$1 = state_13228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13228__$1,inst_13226);
} else
{if((state_val_13229 === (12)))
{var inst_13214 = (state_13228[(8)]);var inst_13214__$1 = (state_13228[(2)]);var inst_13215 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13214__$1);var state_13228__$1 = (function (){var statearr_13237 = state_13228;(statearr_13237[(8)] = inst_13214__$1);
return statearr_13237;
})();if(cljs.core.truth_(inst_13215))
{var statearr_13238_13266 = state_13228__$1;(statearr_13238_13266[(1)] = (13));
} else
{var statearr_13239_13267 = state_13228__$1;(statearr_13239_13267[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (2)))
{var inst_13191 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13192 = (0);var state_13228__$1 = (function (){var statearr_13240 = state_13228;(statearr_13240[(9)] = inst_13191);
(statearr_13240[(7)] = inst_13192);
return statearr_13240;
})();var statearr_13241_13268 = state_13228__$1;(statearr_13241_13268[(2)] = null);
(statearr_13241_13268[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (11)))
{var inst_13192 = (state_13228[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13228,(10),Object,null,(9));var inst_13201 = chs__$1.call(null,inst_13192);var inst_13202 = done.call(null,inst_13192);var inst_13203 = cljs.core.async.take_BANG_.call(null,inst_13201,inst_13202);var state_13228__$1 = state_13228;var statearr_13242_13269 = state_13228__$1;(statearr_13242_13269[(2)] = inst_13203);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13228__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (9)))
{var inst_13192 = (state_13228[(7)]);var inst_13205 = (state_13228[(2)]);var inst_13206 = (inst_13192 + (1));var inst_13192__$1 = inst_13206;var state_13228__$1 = (function (){var statearr_13243 = state_13228;(statearr_13243[(7)] = inst_13192__$1);
(statearr_13243[(10)] = inst_13205);
return statearr_13243;
})();var statearr_13244_13270 = state_13228__$1;(statearr_13244_13270[(2)] = null);
(statearr_13244_13270[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (5)))
{var inst_13212 = (state_13228[(2)]);var state_13228__$1 = (function (){var statearr_13245 = state_13228;(statearr_13245[(11)] = inst_13212);
return statearr_13245;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13228__$1,(12),dchan);
} else
{if((state_val_13229 === (14)))
{var inst_13214 = (state_13228[(8)]);var inst_13219 = cljs.core.apply.call(null,f,inst_13214);var state_13228__$1 = state_13228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13228__$1,(16),out,inst_13219);
} else
{if((state_val_13229 === (16)))
{var inst_13221 = (state_13228[(2)]);var state_13228__$1 = (function (){var statearr_13246 = state_13228;(statearr_13246[(12)] = inst_13221);
return statearr_13246;
})();var statearr_13247_13271 = state_13228__$1;(statearr_13247_13271[(2)] = null);
(statearr_13247_13271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (10)))
{var inst_13196 = (state_13228[(2)]);var inst_13197 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13228__$1 = (function (){var statearr_13248 = state_13228;(statearr_13248[(13)] = inst_13196);
return statearr_13248;
})();var statearr_13249_13272 = state_13228__$1;(statearr_13249_13272[(2)] = inst_13197);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13228__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13229 === (8)))
{var inst_13210 = (state_13228[(2)]);var state_13228__$1 = state_13228;var statearr_13250_13273 = state_13228__$1;(statearr_13250_13273[(2)] = inst_13210);
(statearr_13250_13273[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___13258,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6876__auto__,c__6891__auto___13258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_13254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13254[(0)] = state_machine__6877__auto__);
(statearr_13254[(1)] = (1));
return statearr_13254;
});
var state_machine__6877__auto____1 = (function (state_13228){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_13228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e13255){if((e13255 instanceof Object))
{var ex__6880__auto__ = e13255;var statearr_13256_13274 = state_13228;(statearr_13256_13274[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13255;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13275 = state_13228;
state_13228 = G__13275;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_13228){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_13228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___13258,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6893__auto__ = (function (){var statearr_13257 = f__6892__auto__.call(null);(statearr_13257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___13258);
return statearr_13257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___13258,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___13383 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___13383,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___13383,out){
return (function (state_13359){var state_val_13360 = (state_13359[(1)]);if((state_val_13360 === (7)))
{var inst_13338 = (state_13359[(7)]);var inst_13339 = (state_13359[(8)]);var inst_13338__$1 = (state_13359[(2)]);var inst_13339__$1 = cljs.core.nth.call(null,inst_13338__$1,(0),null);var inst_13340 = cljs.core.nth.call(null,inst_13338__$1,(1),null);var inst_13341 = (inst_13339__$1 == null);var state_13359__$1 = (function (){var statearr_13361 = state_13359;(statearr_13361[(9)] = inst_13340);
(statearr_13361[(7)] = inst_13338__$1);
(statearr_13361[(8)] = inst_13339__$1);
return statearr_13361;
})();if(cljs.core.truth_(inst_13341))
{var statearr_13362_13384 = state_13359__$1;(statearr_13362_13384[(1)] = (8));
} else
{var statearr_13363_13385 = state_13359__$1;(statearr_13363_13385[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13360 === (1)))
{var inst_13330 = cljs.core.vec.call(null,chs);var inst_13331 = inst_13330;var state_13359__$1 = (function (){var statearr_13364 = state_13359;(statearr_13364[(10)] = inst_13331);
return statearr_13364;
})();var statearr_13365_13386 = state_13359__$1;(statearr_13365_13386[(2)] = null);
(statearr_13365_13386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13360 === (4)))
{var inst_13331 = (state_13359[(10)]);var state_13359__$1 = state_13359;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13359__$1,(7),inst_13331);
} else
{if((state_val_13360 === (6)))
{var inst_13355 = (state_13359[(2)]);var state_13359__$1 = state_13359;var statearr_13366_13387 = state_13359__$1;(statearr_13366_13387[(2)] = inst_13355);
(statearr_13366_13387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13360 === (3)))
{var inst_13357 = (state_13359[(2)]);var state_13359__$1 = state_13359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13359__$1,inst_13357);
} else
{if((state_val_13360 === (2)))
{var inst_13331 = (state_13359[(10)]);var inst_13333 = cljs.core.count.call(null,inst_13331);var inst_13334 = (inst_13333 > (0));var state_13359__$1 = state_13359;if(cljs.core.truth_(inst_13334))
{var statearr_13368_13388 = state_13359__$1;(statearr_13368_13388[(1)] = (4));
} else
{var statearr_13369_13389 = state_13359__$1;(statearr_13369_13389[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13360 === (11)))
{var inst_13331 = (state_13359[(10)]);var inst_13348 = (state_13359[(2)]);var tmp13367 = inst_13331;var inst_13331__$1 = tmp13367;var state_13359__$1 = (function (){var statearr_13370 = state_13359;(statearr_13370[(11)] = inst_13348);
(statearr_13370[(10)] = inst_13331__$1);
return statearr_13370;
})();var statearr_13371_13390 = state_13359__$1;(statearr_13371_13390[(2)] = null);
(statearr_13371_13390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13360 === (9)))
{var inst_13339 = (state_13359[(8)]);var state_13359__$1 = state_13359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13359__$1,(11),out,inst_13339);
} else
{if((state_val_13360 === (5)))
{var inst_13353 = cljs.core.async.close_BANG_.call(null,out);var state_13359__$1 = state_13359;var statearr_13372_13391 = state_13359__$1;(statearr_13372_13391[(2)] = inst_13353);
(statearr_13372_13391[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13360 === (10)))
{var inst_13351 = (state_13359[(2)]);var state_13359__$1 = state_13359;var statearr_13373_13392 = state_13359__$1;(statearr_13373_13392[(2)] = inst_13351);
(statearr_13373_13392[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13360 === (8)))
{var inst_13340 = (state_13359[(9)]);var inst_13338 = (state_13359[(7)]);var inst_13331 = (state_13359[(10)]);var inst_13339 = (state_13359[(8)]);var inst_13343 = (function (){var c = inst_13340;var v = inst_13339;var vec__13336 = inst_13338;var cs = inst_13331;return ((function (c,v,vec__13336,cs,inst_13340,inst_13338,inst_13331,inst_13339,state_val_13360,c__6891__auto___13383,out){
return (function (p1__13276_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13276_SHARP_);
});
;})(c,v,vec__13336,cs,inst_13340,inst_13338,inst_13331,inst_13339,state_val_13360,c__6891__auto___13383,out))
})();var inst_13344 = cljs.core.filterv.call(null,inst_13343,inst_13331);var inst_13331__$1 = inst_13344;var state_13359__$1 = (function (){var statearr_13374 = state_13359;(statearr_13374[(10)] = inst_13331__$1);
return statearr_13374;
})();var statearr_13375_13393 = state_13359__$1;(statearr_13375_13393[(2)] = null);
(statearr_13375_13393[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___13383,out))
;return ((function (switch__6876__auto__,c__6891__auto___13383,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_13379 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13379[(0)] = state_machine__6877__auto__);
(statearr_13379[(1)] = (1));
return statearr_13379;
});
var state_machine__6877__auto____1 = (function (state_13359){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_13359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e13380){if((e13380 instanceof Object))
{var ex__6880__auto__ = e13380;var statearr_13381_13394 = state_13359;(statearr_13381_13394[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13395 = state_13359;
state_13359 = G__13395;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_13359){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_13359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___13383,out))
})();var state__6893__auto__ = (function (){var statearr_13382 = f__6892__auto__.call(null);(statearr_13382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___13383);
return statearr_13382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___13383,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___13488 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___13488,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___13488,out){
return (function (state_13465){var state_val_13466 = (state_13465[(1)]);if((state_val_13466 === (7)))
{var inst_13447 = (state_13465[(7)]);var inst_13447__$1 = (state_13465[(2)]);var inst_13448 = (inst_13447__$1 == null);var inst_13449 = cljs.core.not.call(null,inst_13448);var state_13465__$1 = (function (){var statearr_13467 = state_13465;(statearr_13467[(7)] = inst_13447__$1);
return statearr_13467;
})();if(inst_13449)
{var statearr_13468_13489 = state_13465__$1;(statearr_13468_13489[(1)] = (8));
} else
{var statearr_13469_13490 = state_13465__$1;(statearr_13469_13490[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13466 === (1)))
{var inst_13442 = (0);var state_13465__$1 = (function (){var statearr_13470 = state_13465;(statearr_13470[(8)] = inst_13442);
return statearr_13470;
})();var statearr_13471_13491 = state_13465__$1;(statearr_13471_13491[(2)] = null);
(statearr_13471_13491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13466 === (4)))
{var state_13465__$1 = state_13465;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13465__$1,(7),ch);
} else
{if((state_val_13466 === (6)))
{var inst_13460 = (state_13465[(2)]);var state_13465__$1 = state_13465;var statearr_13472_13492 = state_13465__$1;(statearr_13472_13492[(2)] = inst_13460);
(statearr_13472_13492[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13466 === (3)))
{var inst_13462 = (state_13465[(2)]);var inst_13463 = cljs.core.async.close_BANG_.call(null,out);var state_13465__$1 = (function (){var statearr_13473 = state_13465;(statearr_13473[(9)] = inst_13462);
return statearr_13473;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13465__$1,inst_13463);
} else
{if((state_val_13466 === (2)))
{var inst_13442 = (state_13465[(8)]);var inst_13444 = (inst_13442 < n);var state_13465__$1 = state_13465;if(cljs.core.truth_(inst_13444))
{var statearr_13474_13493 = state_13465__$1;(statearr_13474_13493[(1)] = (4));
} else
{var statearr_13475_13494 = state_13465__$1;(statearr_13475_13494[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13466 === (11)))
{var inst_13442 = (state_13465[(8)]);var inst_13452 = (state_13465[(2)]);var inst_13453 = (inst_13442 + (1));var inst_13442__$1 = inst_13453;var state_13465__$1 = (function (){var statearr_13476 = state_13465;(statearr_13476[(10)] = inst_13452);
(statearr_13476[(8)] = inst_13442__$1);
return statearr_13476;
})();var statearr_13477_13495 = state_13465__$1;(statearr_13477_13495[(2)] = null);
(statearr_13477_13495[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13466 === (9)))
{var state_13465__$1 = state_13465;var statearr_13478_13496 = state_13465__$1;(statearr_13478_13496[(2)] = null);
(statearr_13478_13496[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13466 === (5)))
{var state_13465__$1 = state_13465;var statearr_13479_13497 = state_13465__$1;(statearr_13479_13497[(2)] = null);
(statearr_13479_13497[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13466 === (10)))
{var inst_13457 = (state_13465[(2)]);var state_13465__$1 = state_13465;var statearr_13480_13498 = state_13465__$1;(statearr_13480_13498[(2)] = inst_13457);
(statearr_13480_13498[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13466 === (8)))
{var inst_13447 = (state_13465[(7)]);var state_13465__$1 = state_13465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13465__$1,(11),out,inst_13447);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___13488,out))
;return ((function (switch__6876__auto__,c__6891__auto___13488,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_13484 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13484[(0)] = state_machine__6877__auto__);
(statearr_13484[(1)] = (1));
return statearr_13484;
});
var state_machine__6877__auto____1 = (function (state_13465){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_13465);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e13485){if((e13485 instanceof Object))
{var ex__6880__auto__ = e13485;var statearr_13486_13499 = state_13465;(statearr_13486_13499[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13485;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13500 = state_13465;
state_13465 = G__13500;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_13465){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_13465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___13488,out))
})();var state__6893__auto__ = (function (){var statearr_13487 = f__6892__auto__.call(null);(statearr_13487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___13488);
return statearr_13487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___13488,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___13597 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___13597,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___13597,out){
return (function (state_13572){var state_val_13573 = (state_13572[(1)]);if((state_val_13573 === (7)))
{var inst_13567 = (state_13572[(2)]);var state_13572__$1 = state_13572;var statearr_13574_13598 = state_13572__$1;(statearr_13574_13598[(2)] = inst_13567);
(statearr_13574_13598[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13573 === (1)))
{var inst_13549 = null;var state_13572__$1 = (function (){var statearr_13575 = state_13572;(statearr_13575[(7)] = inst_13549);
return statearr_13575;
})();var statearr_13576_13599 = state_13572__$1;(statearr_13576_13599[(2)] = null);
(statearr_13576_13599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13573 === (4)))
{var inst_13552 = (state_13572[(8)]);var inst_13552__$1 = (state_13572[(2)]);var inst_13553 = (inst_13552__$1 == null);var inst_13554 = cljs.core.not.call(null,inst_13553);var state_13572__$1 = (function (){var statearr_13577 = state_13572;(statearr_13577[(8)] = inst_13552__$1);
return statearr_13577;
})();if(inst_13554)
{var statearr_13578_13600 = state_13572__$1;(statearr_13578_13600[(1)] = (5));
} else
{var statearr_13579_13601 = state_13572__$1;(statearr_13579_13601[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13573 === (6)))
{var state_13572__$1 = state_13572;var statearr_13580_13602 = state_13572__$1;(statearr_13580_13602[(2)] = null);
(statearr_13580_13602[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13573 === (3)))
{var inst_13569 = (state_13572[(2)]);var inst_13570 = cljs.core.async.close_BANG_.call(null,out);var state_13572__$1 = (function (){var statearr_13581 = state_13572;(statearr_13581[(9)] = inst_13569);
return statearr_13581;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13572__$1,inst_13570);
} else
{if((state_val_13573 === (2)))
{var state_13572__$1 = state_13572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13572__$1,(4),ch);
} else
{if((state_val_13573 === (11)))
{var inst_13552 = (state_13572[(8)]);var inst_13561 = (state_13572[(2)]);var inst_13549 = inst_13552;var state_13572__$1 = (function (){var statearr_13582 = state_13572;(statearr_13582[(7)] = inst_13549);
(statearr_13582[(10)] = inst_13561);
return statearr_13582;
})();var statearr_13583_13603 = state_13572__$1;(statearr_13583_13603[(2)] = null);
(statearr_13583_13603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13573 === (9)))
{var inst_13552 = (state_13572[(8)]);var state_13572__$1 = state_13572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13572__$1,(11),out,inst_13552);
} else
{if((state_val_13573 === (5)))
{var inst_13549 = (state_13572[(7)]);var inst_13552 = (state_13572[(8)]);var inst_13556 = cljs.core._EQ_.call(null,inst_13552,inst_13549);var state_13572__$1 = state_13572;if(inst_13556)
{var statearr_13585_13604 = state_13572__$1;(statearr_13585_13604[(1)] = (8));
} else
{var statearr_13586_13605 = state_13572__$1;(statearr_13586_13605[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13573 === (10)))
{var inst_13564 = (state_13572[(2)]);var state_13572__$1 = state_13572;var statearr_13587_13606 = state_13572__$1;(statearr_13587_13606[(2)] = inst_13564);
(statearr_13587_13606[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13573 === (8)))
{var inst_13549 = (state_13572[(7)]);var tmp13584 = inst_13549;var inst_13549__$1 = tmp13584;var state_13572__$1 = (function (){var statearr_13588 = state_13572;(statearr_13588[(7)] = inst_13549__$1);
return statearr_13588;
})();var statearr_13589_13607 = state_13572__$1;(statearr_13589_13607[(2)] = null);
(statearr_13589_13607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___13597,out))
;return ((function (switch__6876__auto__,c__6891__auto___13597,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_13593 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13593[(0)] = state_machine__6877__auto__);
(statearr_13593[(1)] = (1));
return statearr_13593;
});
var state_machine__6877__auto____1 = (function (state_13572){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_13572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e13594){if((e13594 instanceof Object))
{var ex__6880__auto__ = e13594;var statearr_13595_13608 = state_13572;(statearr_13595_13608[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13594;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13609 = state_13572;
state_13572 = G__13609;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_13572){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_13572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___13597,out))
})();var state__6893__auto__ = (function (){var statearr_13596 = f__6892__auto__.call(null);(statearr_13596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___13597);
return statearr_13596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___13597,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___13744 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___13744,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___13744,out){
return (function (state_13714){var state_val_13715 = (state_13714[(1)]);if((state_val_13715 === (7)))
{var inst_13710 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13716_13745 = state_13714__$1;(statearr_13716_13745[(2)] = inst_13710);
(statearr_13716_13745[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (1)))
{var inst_13677 = (new Array(n));var inst_13678 = inst_13677;var inst_13679 = (0);var state_13714__$1 = (function (){var statearr_13717 = state_13714;(statearr_13717[(7)] = inst_13678);
(statearr_13717[(8)] = inst_13679);
return statearr_13717;
})();var statearr_13718_13746 = state_13714__$1;(statearr_13718_13746[(2)] = null);
(statearr_13718_13746[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (4)))
{var inst_13682 = (state_13714[(9)]);var inst_13682__$1 = (state_13714[(2)]);var inst_13683 = (inst_13682__$1 == null);var inst_13684 = cljs.core.not.call(null,inst_13683);var state_13714__$1 = (function (){var statearr_13719 = state_13714;(statearr_13719[(9)] = inst_13682__$1);
return statearr_13719;
})();if(inst_13684)
{var statearr_13720_13747 = state_13714__$1;(statearr_13720_13747[(1)] = (5));
} else
{var statearr_13721_13748 = state_13714__$1;(statearr_13721_13748[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (15)))
{var inst_13704 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13722_13749 = state_13714__$1;(statearr_13722_13749[(2)] = inst_13704);
(statearr_13722_13749[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (13)))
{var state_13714__$1 = state_13714;var statearr_13723_13750 = state_13714__$1;(statearr_13723_13750[(2)] = null);
(statearr_13723_13750[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (6)))
{var inst_13679 = (state_13714[(8)]);var inst_13700 = (inst_13679 > (0));var state_13714__$1 = state_13714;if(cljs.core.truth_(inst_13700))
{var statearr_13724_13751 = state_13714__$1;(statearr_13724_13751[(1)] = (12));
} else
{var statearr_13725_13752 = state_13714__$1;(statearr_13725_13752[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (3)))
{var inst_13712 = (state_13714[(2)]);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13714__$1,inst_13712);
} else
{if((state_val_13715 === (12)))
{var inst_13678 = (state_13714[(7)]);var inst_13702 = cljs.core.vec.call(null,inst_13678);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13714__$1,(15),out,inst_13702);
} else
{if((state_val_13715 === (2)))
{var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13714__$1,(4),ch);
} else
{if((state_val_13715 === (11)))
{var inst_13694 = (state_13714[(2)]);var inst_13695 = (new Array(n));var inst_13678 = inst_13695;var inst_13679 = (0);var state_13714__$1 = (function (){var statearr_13726 = state_13714;(statearr_13726[(10)] = inst_13694);
(statearr_13726[(7)] = inst_13678);
(statearr_13726[(8)] = inst_13679);
return statearr_13726;
})();var statearr_13727_13753 = state_13714__$1;(statearr_13727_13753[(2)] = null);
(statearr_13727_13753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (9)))
{var inst_13678 = (state_13714[(7)]);var inst_13692 = cljs.core.vec.call(null,inst_13678);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13714__$1,(11),out,inst_13692);
} else
{if((state_val_13715 === (5)))
{var inst_13678 = (state_13714[(7)]);var inst_13679 = (state_13714[(8)]);var inst_13687 = (state_13714[(11)]);var inst_13682 = (state_13714[(9)]);var inst_13686 = (inst_13678[inst_13679] = inst_13682);var inst_13687__$1 = (inst_13679 + (1));var inst_13688 = (inst_13687__$1 < n);var state_13714__$1 = (function (){var statearr_13728 = state_13714;(statearr_13728[(12)] = inst_13686);
(statearr_13728[(11)] = inst_13687__$1);
return statearr_13728;
})();if(cljs.core.truth_(inst_13688))
{var statearr_13729_13754 = state_13714__$1;(statearr_13729_13754[(1)] = (8));
} else
{var statearr_13730_13755 = state_13714__$1;(statearr_13730_13755[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (14)))
{var inst_13707 = (state_13714[(2)]);var inst_13708 = cljs.core.async.close_BANG_.call(null,out);var state_13714__$1 = (function (){var statearr_13732 = state_13714;(statearr_13732[(13)] = inst_13707);
return statearr_13732;
})();var statearr_13733_13756 = state_13714__$1;(statearr_13733_13756[(2)] = inst_13708);
(statearr_13733_13756[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (10)))
{var inst_13698 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13734_13757 = state_13714__$1;(statearr_13734_13757[(2)] = inst_13698);
(statearr_13734_13757[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (8)))
{var inst_13678 = (state_13714[(7)]);var inst_13687 = (state_13714[(11)]);var tmp13731 = inst_13678;var inst_13678__$1 = tmp13731;var inst_13679 = inst_13687;var state_13714__$1 = (function (){var statearr_13735 = state_13714;(statearr_13735[(7)] = inst_13678__$1);
(statearr_13735[(8)] = inst_13679);
return statearr_13735;
})();var statearr_13736_13758 = state_13714__$1;(statearr_13736_13758[(2)] = null);
(statearr_13736_13758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___13744,out))
;return ((function (switch__6876__auto__,c__6891__auto___13744,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_13740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13740[(0)] = state_machine__6877__auto__);
(statearr_13740[(1)] = (1));
return statearr_13740;
});
var state_machine__6877__auto____1 = (function (state_13714){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_13714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e13741){if((e13741 instanceof Object))
{var ex__6880__auto__ = e13741;var statearr_13742_13759 = state_13714;(statearr_13742_13759[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13741;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13760 = state_13714;
state_13714 = G__13760;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_13714){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_13714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___13744,out))
})();var state__6893__auto__ = (function (){var statearr_13743 = f__6892__auto__.call(null);(statearr_13743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___13744);
return statearr_13743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___13744,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___13903 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___13903,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___13903,out){
return (function (state_13873){var state_val_13874 = (state_13873[(1)]);if((state_val_13874 === (7)))
{var inst_13869 = (state_13873[(2)]);var state_13873__$1 = state_13873;var statearr_13875_13904 = state_13873__$1;(statearr_13875_13904[(2)] = inst_13869);
(statearr_13875_13904[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (1)))
{var inst_13832 = [];var inst_13833 = inst_13832;var inst_13834 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13873__$1 = (function (){var statearr_13876 = state_13873;(statearr_13876[(7)] = inst_13833);
(statearr_13876[(8)] = inst_13834);
return statearr_13876;
})();var statearr_13877_13905 = state_13873__$1;(statearr_13877_13905[(2)] = null);
(statearr_13877_13905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (4)))
{var inst_13837 = (state_13873[(9)]);var inst_13837__$1 = (state_13873[(2)]);var inst_13838 = (inst_13837__$1 == null);var inst_13839 = cljs.core.not.call(null,inst_13838);var state_13873__$1 = (function (){var statearr_13878 = state_13873;(statearr_13878[(9)] = inst_13837__$1);
return statearr_13878;
})();if(inst_13839)
{var statearr_13879_13906 = state_13873__$1;(statearr_13879_13906[(1)] = (5));
} else
{var statearr_13880_13907 = state_13873__$1;(statearr_13880_13907[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (15)))
{var inst_13863 = (state_13873[(2)]);var state_13873__$1 = state_13873;var statearr_13881_13908 = state_13873__$1;(statearr_13881_13908[(2)] = inst_13863);
(statearr_13881_13908[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (13)))
{var state_13873__$1 = state_13873;var statearr_13882_13909 = state_13873__$1;(statearr_13882_13909[(2)] = null);
(statearr_13882_13909[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (6)))
{var inst_13833 = (state_13873[(7)]);var inst_13858 = inst_13833.length;var inst_13859 = (inst_13858 > (0));var state_13873__$1 = state_13873;if(cljs.core.truth_(inst_13859))
{var statearr_13883_13910 = state_13873__$1;(statearr_13883_13910[(1)] = (12));
} else
{var statearr_13884_13911 = state_13873__$1;(statearr_13884_13911[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (3)))
{var inst_13871 = (state_13873[(2)]);var state_13873__$1 = state_13873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13873__$1,inst_13871);
} else
{if((state_val_13874 === (12)))
{var inst_13833 = (state_13873[(7)]);var inst_13861 = cljs.core.vec.call(null,inst_13833);var state_13873__$1 = state_13873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13873__$1,(15),out,inst_13861);
} else
{if((state_val_13874 === (2)))
{var state_13873__$1 = state_13873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13873__$1,(4),ch);
} else
{if((state_val_13874 === (11)))
{var inst_13837 = (state_13873[(9)]);var inst_13841 = (state_13873[(10)]);var inst_13851 = (state_13873[(2)]);var inst_13852 = [];var inst_13853 = inst_13852.push(inst_13837);var inst_13833 = inst_13852;var inst_13834 = inst_13841;var state_13873__$1 = (function (){var statearr_13885 = state_13873;(statearr_13885[(11)] = inst_13853);
(statearr_13885[(7)] = inst_13833);
(statearr_13885[(8)] = inst_13834);
(statearr_13885[(12)] = inst_13851);
return statearr_13885;
})();var statearr_13886_13912 = state_13873__$1;(statearr_13886_13912[(2)] = null);
(statearr_13886_13912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (9)))
{var inst_13833 = (state_13873[(7)]);var inst_13849 = cljs.core.vec.call(null,inst_13833);var state_13873__$1 = state_13873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13873__$1,(11),out,inst_13849);
} else
{if((state_val_13874 === (5)))
{var inst_13837 = (state_13873[(9)]);var inst_13834 = (state_13873[(8)]);var inst_13841 = (state_13873[(10)]);var inst_13841__$1 = f.call(null,inst_13837);var inst_13842 = cljs.core._EQ_.call(null,inst_13841__$1,inst_13834);var inst_13843 = cljs.core.keyword_identical_QMARK_.call(null,inst_13834,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13844 = (inst_13842) || (inst_13843);var state_13873__$1 = (function (){var statearr_13887 = state_13873;(statearr_13887[(10)] = inst_13841__$1);
return statearr_13887;
})();if(cljs.core.truth_(inst_13844))
{var statearr_13888_13913 = state_13873__$1;(statearr_13888_13913[(1)] = (8));
} else
{var statearr_13889_13914 = state_13873__$1;(statearr_13889_13914[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (14)))
{var inst_13866 = (state_13873[(2)]);var inst_13867 = cljs.core.async.close_BANG_.call(null,out);var state_13873__$1 = (function (){var statearr_13891 = state_13873;(statearr_13891[(13)] = inst_13866);
return statearr_13891;
})();var statearr_13892_13915 = state_13873__$1;(statearr_13892_13915[(2)] = inst_13867);
(statearr_13892_13915[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (10)))
{var inst_13856 = (state_13873[(2)]);var state_13873__$1 = state_13873;var statearr_13893_13916 = state_13873__$1;(statearr_13893_13916[(2)] = inst_13856);
(statearr_13893_13916[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13874 === (8)))
{var inst_13833 = (state_13873[(7)]);var inst_13837 = (state_13873[(9)]);var inst_13841 = (state_13873[(10)]);var inst_13846 = inst_13833.push(inst_13837);var tmp13890 = inst_13833;var inst_13833__$1 = tmp13890;var inst_13834 = inst_13841;var state_13873__$1 = (function (){var statearr_13894 = state_13873;(statearr_13894[(7)] = inst_13833__$1);
(statearr_13894[(8)] = inst_13834);
(statearr_13894[(14)] = inst_13846);
return statearr_13894;
})();var statearr_13895_13917 = state_13873__$1;(statearr_13895_13917[(2)] = null);
(statearr_13895_13917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6891__auto___13903,out))
;return ((function (switch__6876__auto__,c__6891__auto___13903,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_13899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13899[(0)] = state_machine__6877__auto__);
(statearr_13899[(1)] = (1));
return statearr_13899;
});
var state_machine__6877__auto____1 = (function (state_13873){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_13873);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e13900){if((e13900 instanceof Object))
{var ex__6880__auto__ = e13900;var statearr_13901_13918 = state_13873;(statearr_13901_13918[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13873);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13900;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13919 = state_13873;
state_13873 = G__13919;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_13873){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_13873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___13903,out))
})();var state__6893__auto__ = (function (){var statearr_13902 = f__6892__auto__.call(null);(statearr_13902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___13903);
return statearr_13902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___13903,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map