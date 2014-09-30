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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17215 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17215 = (function (f,fn_handler,meta17216){
this.f = f;
this.fn_handler = fn_handler;
this.meta17216 = meta17216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17215.cljs$lang$type = true;
cljs.core.async.t17215.cljs$lang$ctorStr = "cljs.core.async/t17215";
cljs.core.async.t17215.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17215");
});
cljs.core.async.t17215.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17217){var self__ = this;
var _17217__$1 = this;return self__.meta17216;
});
cljs.core.async.t17215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17217,meta17216__$1){var self__ = this;
var _17217__$1 = this;return (new cljs.core.async.t17215(self__.f,self__.fn_handler,meta17216__$1));
});
cljs.core.async.__GT_t17215 = (function __GT_t17215(f__$1,fn_handler__$1,meta17216){return (new cljs.core.async.t17215(f__$1,fn_handler__$1,meta17216));
});
}
return (new cljs.core.async.t17215(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17219 = buff;if(G__17219)
{var bit__4206__auto__ = null;if(cljs.core.truth_((function (){var or__3556__auto__ = bit__4206__auto__;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return G__17219.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17219.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17219);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17219);
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
{var val_17220 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17220);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17220,ret){
return (function (){return fn1.call(null,val_17220);
});})(val_17220,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4412__auto___17221 = n;var x_17222 = (0);while(true){
if((x_17222 < n__4412__auto___17221))
{(a[x_17222] = (0));
{
var G__17223 = (x_17222 + (1));
x_17222 = G__17223;
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
var G__17224 = (i + (1));
i = G__17224;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17228 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17228 = (function (flag,alt_flag,meta17229){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17229 = meta17229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17228.cljs$lang$type = true;
cljs.core.async.t17228.cljs$lang$ctorStr = "cljs.core.async/t17228";
cljs.core.async.t17228.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17228");
});})(flag))
;
cljs.core.async.t17228.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t17228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t17228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17230){var self__ = this;
var _17230__$1 = this;return self__.meta17229;
});})(flag))
;
cljs.core.async.t17228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17230,meta17229__$1){var self__ = this;
var _17230__$1 = this;return (new cljs.core.async.t17228(self__.flag,self__.alt_flag,meta17229__$1));
});})(flag))
;
cljs.core.async.__GT_t17228 = ((function (flag){
return (function __GT_t17228(flag__$1,alt_flag__$1,meta17229){return (new cljs.core.async.t17228(flag__$1,alt_flag__$1,meta17229));
});})(flag))
;
}
return (new cljs.core.async.t17228(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17234 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17234 = (function (cb,flag,alt_handler,meta17235){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17235 = meta17235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17234.cljs$lang$type = true;
cljs.core.async.t17234.cljs$lang$ctorStr = "cljs.core.async/t17234";
cljs.core.async.t17234.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17234");
});
cljs.core.async.t17234.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17234.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17234.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17236){var self__ = this;
var _17236__$1 = this;return self__.meta17235;
});
cljs.core.async.t17234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17236,meta17235__$1){var self__ = this;
var _17236__$1 = this;return (new cljs.core.async.t17234(self__.cb,self__.flag,self__.alt_handler,meta17235__$1));
});
cljs.core.async.__GT_t17234 = (function __GT_t17234(cb__$1,flag__$1,alt_handler__$1,meta17235){return (new cljs.core.async.t17234(cb__$1,flag__$1,alt_handler__$1,meta17235));
});
}
return (new cljs.core.async.t17234(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17237_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17237_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17238_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17238_SHARP_,port], null));
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
var G__17239 = (i + (1));
i = G__17239;
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
var alts_BANG___delegate = function (ports,p__17240){var map__17242 = p__17240;var map__17242__$1 = ((cljs.core.seq_QMARK_.call(null,map__17242))?cljs.core.apply.call(null,cljs.core.hash_map,map__17242):map__17242);var opts = map__17242__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__17240 = null;if (arguments.length > 1) {
  p__17240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17240);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17243){
var ports = cljs.core.first(arglist__17243);
var p__17240 = cljs.core.rest(arglist__17243);
return alts_BANG___delegate(ports,p__17240);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17251 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17251 = (function (ch,f,map_LT_,meta17252){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17252 = meta17252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17251.cljs$lang$type = true;
cljs.core.async.t17251.cljs$lang$ctorStr = "cljs.core.async/t17251";
cljs.core.async.t17251.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17251");
});
cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17254 = (function (fn1,_,meta17252,ch,f,map_LT_,meta17255){
this.fn1 = fn1;
this._ = _;
this.meta17252 = meta17252;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17255 = meta17255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17254.cljs$lang$type = true;
cljs.core.async.t17254.cljs$lang$ctorStr = "cljs.core.async/t17254";
cljs.core.async.t17254.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17254");
});})(___$1))
;
cljs.core.async.t17254.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17254.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17244_SHARP_){return f1.call(null,(((p1__17244_SHARP_ == null))?null:self__.f.call(null,p1__17244_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17256){var self__ = this;
var _17256__$1 = this;return self__.meta17255;
});})(___$1))
;
cljs.core.async.t17254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17256,meta17255__$1){var self__ = this;
var _17256__$1 = this;return (new cljs.core.async.t17254(self__.fn1,self__._,self__.meta17252,self__.ch,self__.f,self__.map_LT_,meta17255__$1));
});})(___$1))
;
cljs.core.async.__GT_t17254 = ((function (___$1){
return (function __GT_t17254(fn1__$1,___$2,meta17252__$1,ch__$2,f__$2,map_LT___$2,meta17255){return (new cljs.core.async.t17254(fn1__$1,___$2,meta17252__$1,ch__$2,f__$2,map_LT___$2,meta17255));
});})(___$1))
;
}
return (new cljs.core.async.t17254(fn1,___$1,self__.meta17252,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17253){var self__ = this;
var _17253__$1 = this;return self__.meta17252;
});
cljs.core.async.t17251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17253,meta17252__$1){var self__ = this;
var _17253__$1 = this;return (new cljs.core.async.t17251(self__.ch,self__.f,self__.map_LT_,meta17252__$1));
});
cljs.core.async.__GT_t17251 = (function __GT_t17251(ch__$1,f__$1,map_LT___$1,meta17252){return (new cljs.core.async.t17251(ch__$1,f__$1,map_LT___$1,meta17252));
});
}
return (new cljs.core.async.t17251(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17260 = (function (ch,f,map_GT_,meta17261){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17261 = meta17261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17260.cljs$lang$type = true;
cljs.core.async.t17260.cljs$lang$ctorStr = "cljs.core.async/t17260";
cljs.core.async.t17260.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17260");
});
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17262){var self__ = this;
var _17262__$1 = this;return self__.meta17261;
});
cljs.core.async.t17260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17262,meta17261__$1){var self__ = this;
var _17262__$1 = this;return (new cljs.core.async.t17260(self__.ch,self__.f,self__.map_GT_,meta17261__$1));
});
cljs.core.async.__GT_t17260 = (function __GT_t17260(ch__$1,f__$1,map_GT___$1,meta17261){return (new cljs.core.async.t17260(ch__$1,f__$1,map_GT___$1,meta17261));
});
}
return (new cljs.core.async.t17260(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17266 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17266 = (function (ch,p,filter_GT_,meta17267){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17267 = meta17267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17266.cljs$lang$type = true;
cljs.core.async.t17266.cljs$lang$ctorStr = "cljs.core.async/t17266";
cljs.core.async.t17266.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17266");
});
cljs.core.async.t17266.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17266.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17266.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17266.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17268){var self__ = this;
var _17268__$1 = this;return self__.meta17267;
});
cljs.core.async.t17266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17268,meta17267__$1){var self__ = this;
var _17268__$1 = this;return (new cljs.core.async.t17266(self__.ch,self__.p,self__.filter_GT_,meta17267__$1));
});
cljs.core.async.__GT_t17266 = (function __GT_t17266(ch__$1,p__$1,filter_GT___$1,meta17267){return (new cljs.core.async.t17266(ch__$1,p__$1,filter_GT___$1,meta17267));
});
}
return (new cljs.core.async.t17266(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___17351 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___17351,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___17351,out){
return (function (state_17330){var state_val_17331 = (state_17330[(1)]);if((state_val_17331 === (7)))
{var inst_17326 = (state_17330[(2)]);var state_17330__$1 = state_17330;var statearr_17332_17352 = state_17330__$1;(statearr_17332_17352[(2)] = inst_17326);
(statearr_17332_17352[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17331 === (1)))
{var state_17330__$1 = state_17330;var statearr_17333_17353 = state_17330__$1;(statearr_17333_17353[(2)] = null);
(statearr_17333_17353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17331 === (4)))
{var inst_17312 = (state_17330[(7)]);var inst_17312__$1 = (state_17330[(2)]);var inst_17313 = (inst_17312__$1 == null);var state_17330__$1 = (function (){var statearr_17334 = state_17330;(statearr_17334[(7)] = inst_17312__$1);
return statearr_17334;
})();if(cljs.core.truth_(inst_17313))
{var statearr_17335_17354 = state_17330__$1;(statearr_17335_17354[(1)] = (5));
} else
{var statearr_17336_17355 = state_17330__$1;(statearr_17336_17355[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17331 === (6)))
{var inst_17312 = (state_17330[(7)]);var inst_17317 = p.call(null,inst_17312);var state_17330__$1 = state_17330;if(cljs.core.truth_(inst_17317))
{var statearr_17337_17356 = state_17330__$1;(statearr_17337_17356[(1)] = (8));
} else
{var statearr_17338_17357 = state_17330__$1;(statearr_17338_17357[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17331 === (3)))
{var inst_17328 = (state_17330[(2)]);var state_17330__$1 = state_17330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17330__$1,inst_17328);
} else
{if((state_val_17331 === (2)))
{var state_17330__$1 = state_17330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17330__$1,(4),ch);
} else
{if((state_val_17331 === (11)))
{var inst_17320 = (state_17330[(2)]);var state_17330__$1 = state_17330;var statearr_17339_17358 = state_17330__$1;(statearr_17339_17358[(2)] = inst_17320);
(statearr_17339_17358[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17331 === (9)))
{var state_17330__$1 = state_17330;var statearr_17340_17359 = state_17330__$1;(statearr_17340_17359[(2)] = null);
(statearr_17340_17359[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17331 === (5)))
{var inst_17315 = cljs.core.async.close_BANG_.call(null,out);var state_17330__$1 = state_17330;var statearr_17341_17360 = state_17330__$1;(statearr_17341_17360[(2)] = inst_17315);
(statearr_17341_17360[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17331 === (10)))
{var inst_17323 = (state_17330[(2)]);var state_17330__$1 = (function (){var statearr_17342 = state_17330;(statearr_17342[(8)] = inst_17323);
return statearr_17342;
})();var statearr_17343_17361 = state_17330__$1;(statearr_17343_17361[(2)] = null);
(statearr_17343_17361[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17331 === (8)))
{var inst_17312 = (state_17330[(7)]);var state_17330__$1 = state_17330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17330__$1,(11),out,inst_17312);
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
});})(c__6891__auto___17351,out))
;return ((function (switch__6876__auto__,c__6891__auto___17351,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_17347 = [null,null,null,null,null,null,null,null,null];(statearr_17347[(0)] = state_machine__6877__auto__);
(statearr_17347[(1)] = (1));
return statearr_17347;
});
var state_machine__6877__auto____1 = (function (state_17330){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_17330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e17348){if((e17348 instanceof Object))
{var ex__6880__auto__ = e17348;var statearr_17349_17362 = state_17330;(statearr_17349_17362[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17348;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17363 = state_17330;
state_17330 = G__17363;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_17330){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_17330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___17351,out))
})();var state__6893__auto__ = (function (){var statearr_17350 = f__6892__auto__.call(null);(statearr_17350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___17351);
return statearr_17350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___17351,out))
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
return (function (state_17529){var state_val_17530 = (state_17529[(1)]);if((state_val_17530 === (7)))
{var inst_17525 = (state_17529[(2)]);var state_17529__$1 = state_17529;var statearr_17531_17572 = state_17529__$1;(statearr_17531_17572[(2)] = inst_17525);
(statearr_17531_17572[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (20)))
{var inst_17495 = (state_17529[(7)]);var inst_17506 = (state_17529[(2)]);var inst_17507 = cljs.core.next.call(null,inst_17495);var inst_17481 = inst_17507;var inst_17482 = null;var inst_17483 = (0);var inst_17484 = (0);var state_17529__$1 = (function (){var statearr_17532 = state_17529;(statearr_17532[(8)] = inst_17481);
(statearr_17532[(9)] = inst_17484);
(statearr_17532[(10)] = inst_17483);
(statearr_17532[(11)] = inst_17482);
(statearr_17532[(12)] = inst_17506);
return statearr_17532;
})();var statearr_17533_17573 = state_17529__$1;(statearr_17533_17573[(2)] = null);
(statearr_17533_17573[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (1)))
{var state_17529__$1 = state_17529;var statearr_17534_17574 = state_17529__$1;(statearr_17534_17574[(2)] = null);
(statearr_17534_17574[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (4)))
{var inst_17470 = (state_17529[(13)]);var inst_17470__$1 = (state_17529[(2)]);var inst_17471 = (inst_17470__$1 == null);var state_17529__$1 = (function (){var statearr_17535 = state_17529;(statearr_17535[(13)] = inst_17470__$1);
return statearr_17535;
})();if(cljs.core.truth_(inst_17471))
{var statearr_17536_17575 = state_17529__$1;(statearr_17536_17575[(1)] = (5));
} else
{var statearr_17537_17576 = state_17529__$1;(statearr_17537_17576[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (15)))
{var state_17529__$1 = state_17529;var statearr_17541_17577 = state_17529__$1;(statearr_17541_17577[(2)] = null);
(statearr_17541_17577[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (21)))
{var state_17529__$1 = state_17529;var statearr_17542_17578 = state_17529__$1;(statearr_17542_17578[(2)] = null);
(statearr_17542_17578[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (13)))
{var inst_17481 = (state_17529[(8)]);var inst_17484 = (state_17529[(9)]);var inst_17483 = (state_17529[(10)]);var inst_17482 = (state_17529[(11)]);var inst_17491 = (state_17529[(2)]);var inst_17492 = (inst_17484 + (1));var tmp17538 = inst_17481;var tmp17539 = inst_17483;var tmp17540 = inst_17482;var inst_17481__$1 = tmp17538;var inst_17482__$1 = tmp17540;var inst_17483__$1 = tmp17539;var inst_17484__$1 = inst_17492;var state_17529__$1 = (function (){var statearr_17543 = state_17529;(statearr_17543[(8)] = inst_17481__$1);
(statearr_17543[(9)] = inst_17484__$1);
(statearr_17543[(14)] = inst_17491);
(statearr_17543[(10)] = inst_17483__$1);
(statearr_17543[(11)] = inst_17482__$1);
return statearr_17543;
})();var statearr_17544_17579 = state_17529__$1;(statearr_17544_17579[(2)] = null);
(statearr_17544_17579[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (22)))
{var state_17529__$1 = state_17529;var statearr_17545_17580 = state_17529__$1;(statearr_17545_17580[(2)] = null);
(statearr_17545_17580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (6)))
{var inst_17470 = (state_17529[(13)]);var inst_17479 = f.call(null,inst_17470);var inst_17480 = cljs.core.seq.call(null,inst_17479);var inst_17481 = inst_17480;var inst_17482 = null;var inst_17483 = (0);var inst_17484 = (0);var state_17529__$1 = (function (){var statearr_17546 = state_17529;(statearr_17546[(8)] = inst_17481);
(statearr_17546[(9)] = inst_17484);
(statearr_17546[(10)] = inst_17483);
(statearr_17546[(11)] = inst_17482);
return statearr_17546;
})();var statearr_17547_17581 = state_17529__$1;(statearr_17547_17581[(2)] = null);
(statearr_17547_17581[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (17)))
{var inst_17495 = (state_17529[(7)]);var inst_17499 = cljs.core.chunk_first.call(null,inst_17495);var inst_17500 = cljs.core.chunk_rest.call(null,inst_17495);var inst_17501 = cljs.core.count.call(null,inst_17499);var inst_17481 = inst_17500;var inst_17482 = inst_17499;var inst_17483 = inst_17501;var inst_17484 = (0);var state_17529__$1 = (function (){var statearr_17548 = state_17529;(statearr_17548[(8)] = inst_17481);
(statearr_17548[(9)] = inst_17484);
(statearr_17548[(10)] = inst_17483);
(statearr_17548[(11)] = inst_17482);
return statearr_17548;
})();var statearr_17549_17582 = state_17529__$1;(statearr_17549_17582[(2)] = null);
(statearr_17549_17582[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (3)))
{var inst_17527 = (state_17529[(2)]);var state_17529__$1 = state_17529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17529__$1,inst_17527);
} else
{if((state_val_17530 === (12)))
{var inst_17515 = (state_17529[(2)]);var state_17529__$1 = state_17529;var statearr_17550_17583 = state_17529__$1;(statearr_17550_17583[(2)] = inst_17515);
(statearr_17550_17583[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (2)))
{var state_17529__$1 = state_17529;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17529__$1,(4),in$);
} else
{if((state_val_17530 === (23)))
{var inst_17523 = (state_17529[(2)]);var state_17529__$1 = state_17529;var statearr_17551_17584 = state_17529__$1;(statearr_17551_17584[(2)] = inst_17523);
(statearr_17551_17584[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (19)))
{var inst_17510 = (state_17529[(2)]);var state_17529__$1 = state_17529;var statearr_17552_17585 = state_17529__$1;(statearr_17552_17585[(2)] = inst_17510);
(statearr_17552_17585[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (11)))
{var inst_17481 = (state_17529[(8)]);var inst_17495 = (state_17529[(7)]);var inst_17495__$1 = cljs.core.seq.call(null,inst_17481);var state_17529__$1 = (function (){var statearr_17553 = state_17529;(statearr_17553[(7)] = inst_17495__$1);
return statearr_17553;
})();if(inst_17495__$1)
{var statearr_17554_17586 = state_17529__$1;(statearr_17554_17586[(1)] = (14));
} else
{var statearr_17555_17587 = state_17529__$1;(statearr_17555_17587[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (9)))
{var inst_17517 = (state_17529[(2)]);var inst_17518 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17529__$1 = (function (){var statearr_17556 = state_17529;(statearr_17556[(15)] = inst_17517);
return statearr_17556;
})();if(cljs.core.truth_(inst_17518))
{var statearr_17557_17588 = state_17529__$1;(statearr_17557_17588[(1)] = (21));
} else
{var statearr_17558_17589 = state_17529__$1;(statearr_17558_17589[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (5)))
{var inst_17473 = cljs.core.async.close_BANG_.call(null,out);var state_17529__$1 = state_17529;var statearr_17559_17590 = state_17529__$1;(statearr_17559_17590[(2)] = inst_17473);
(statearr_17559_17590[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (14)))
{var inst_17495 = (state_17529[(7)]);var inst_17497 = cljs.core.chunked_seq_QMARK_.call(null,inst_17495);var state_17529__$1 = state_17529;if(inst_17497)
{var statearr_17560_17591 = state_17529__$1;(statearr_17560_17591[(1)] = (17));
} else
{var statearr_17561_17592 = state_17529__$1;(statearr_17561_17592[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (16)))
{var inst_17513 = (state_17529[(2)]);var state_17529__$1 = state_17529;var statearr_17562_17593 = state_17529__$1;(statearr_17562_17593[(2)] = inst_17513);
(statearr_17562_17593[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17530 === (10)))
{var inst_17484 = (state_17529[(9)]);var inst_17482 = (state_17529[(11)]);var inst_17489 = cljs.core._nth.call(null,inst_17482,inst_17484);var state_17529__$1 = state_17529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17529__$1,(13),out,inst_17489);
} else
{if((state_val_17530 === (18)))
{var inst_17495 = (state_17529[(7)]);var inst_17504 = cljs.core.first.call(null,inst_17495);var state_17529__$1 = state_17529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17529__$1,(20),out,inst_17504);
} else
{if((state_val_17530 === (8)))
{var inst_17484 = (state_17529[(9)]);var inst_17483 = (state_17529[(10)]);var inst_17486 = (inst_17484 < inst_17483);var inst_17487 = inst_17486;var state_17529__$1 = state_17529;if(cljs.core.truth_(inst_17487))
{var statearr_17563_17594 = state_17529__$1;(statearr_17563_17594[(1)] = (10));
} else
{var statearr_17564_17595 = state_17529__$1;(statearr_17564_17595[(1)] = (11));
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
var state_machine__6877__auto____0 = (function (){var statearr_17568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17568[(0)] = state_machine__6877__auto__);
(statearr_17568[(1)] = (1));
return statearr_17568;
});
var state_machine__6877__auto____1 = (function (state_17529){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_17529);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e17569){if((e17569 instanceof Object))
{var ex__6880__auto__ = e17569;var statearr_17570_17596 = state_17529;(statearr_17570_17596[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17529);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17569;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17597 = state_17529;
state_17529 = G__17597;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_17529){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_17529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto__))
})();var state__6893__auto__ = (function (){var statearr_17571 = f__6892__auto__.call(null);(statearr_17571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto__);
return statearr_17571;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6891__auto___17692 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___17692){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___17692){
return (function (state_17668){var state_val_17669 = (state_17668[(1)]);if((state_val_17669 === (7)))
{var inst_17664 = (state_17668[(2)]);var state_17668__$1 = state_17668;var statearr_17670_17693 = state_17668__$1;(statearr_17670_17693[(2)] = inst_17664);
(statearr_17670_17693[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (1)))
{var state_17668__$1 = state_17668;var statearr_17671_17694 = state_17668__$1;(statearr_17671_17694[(2)] = null);
(statearr_17671_17694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (4)))
{var inst_17647 = (state_17668[(7)]);var inst_17647__$1 = (state_17668[(2)]);var inst_17648 = (inst_17647__$1 == null);var state_17668__$1 = (function (){var statearr_17672 = state_17668;(statearr_17672[(7)] = inst_17647__$1);
return statearr_17672;
})();if(cljs.core.truth_(inst_17648))
{var statearr_17673_17695 = state_17668__$1;(statearr_17673_17695[(1)] = (5));
} else
{var statearr_17674_17696 = state_17668__$1;(statearr_17674_17696[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (13)))
{var state_17668__$1 = state_17668;var statearr_17675_17697 = state_17668__$1;(statearr_17675_17697[(2)] = null);
(statearr_17675_17697[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (6)))
{var inst_17647 = (state_17668[(7)]);var state_17668__$1 = state_17668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17668__$1,(11),to,inst_17647);
} else
{if((state_val_17669 === (3)))
{var inst_17666 = (state_17668[(2)]);var state_17668__$1 = state_17668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17668__$1,inst_17666);
} else
{if((state_val_17669 === (12)))
{var state_17668__$1 = state_17668;var statearr_17676_17698 = state_17668__$1;(statearr_17676_17698[(2)] = null);
(statearr_17676_17698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (2)))
{var state_17668__$1 = state_17668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17668__$1,(4),from);
} else
{if((state_val_17669 === (11)))
{var inst_17657 = (state_17668[(2)]);var state_17668__$1 = state_17668;if(cljs.core.truth_(inst_17657))
{var statearr_17677_17699 = state_17668__$1;(statearr_17677_17699[(1)] = (12));
} else
{var statearr_17678_17700 = state_17668__$1;(statearr_17678_17700[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (9)))
{var state_17668__$1 = state_17668;var statearr_17679_17701 = state_17668__$1;(statearr_17679_17701[(2)] = null);
(statearr_17679_17701[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (5)))
{var state_17668__$1 = state_17668;if(cljs.core.truth_(close_QMARK_))
{var statearr_17680_17702 = state_17668__$1;(statearr_17680_17702[(1)] = (8));
} else
{var statearr_17681_17703 = state_17668__$1;(statearr_17681_17703[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (14)))
{var inst_17662 = (state_17668[(2)]);var state_17668__$1 = state_17668;var statearr_17682_17704 = state_17668__$1;(statearr_17682_17704[(2)] = inst_17662);
(statearr_17682_17704[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (10)))
{var inst_17654 = (state_17668[(2)]);var state_17668__$1 = state_17668;var statearr_17683_17705 = state_17668__$1;(statearr_17683_17705[(2)] = inst_17654);
(statearr_17683_17705[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17669 === (8)))
{var inst_17651 = cljs.core.async.close_BANG_.call(null,to);var state_17668__$1 = state_17668;var statearr_17684_17706 = state_17668__$1;(statearr_17684_17706[(2)] = inst_17651);
(statearr_17684_17706[(1)] = (10));
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
});})(c__6891__auto___17692))
;return ((function (switch__6876__auto__,c__6891__auto___17692){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_17688 = [null,null,null,null,null,null,null,null];(statearr_17688[(0)] = state_machine__6877__auto__);
(statearr_17688[(1)] = (1));
return statearr_17688;
});
var state_machine__6877__auto____1 = (function (state_17668){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_17668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e17689){if((e17689 instanceof Object))
{var ex__6880__auto__ = e17689;var statearr_17690_17707 = state_17668;(statearr_17690_17707[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17689;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17708 = state_17668;
state_17668 = G__17708;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_17668){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_17668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___17692))
})();var state__6893__auto__ = (function (){var statearr_17691 = f__6892__auto__.call(null);(statearr_17691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___17692);
return statearr_17691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___17692))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6891__auto___17809 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___17809,tc,fc){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___17809,tc,fc){
return (function (state_17784){var state_val_17785 = (state_17784[(1)]);if((state_val_17785 === (7)))
{var inst_17780 = (state_17784[(2)]);var state_17784__$1 = state_17784;var statearr_17786_17810 = state_17784__$1;(statearr_17786_17810[(2)] = inst_17780);
(statearr_17786_17810[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (1)))
{var state_17784__$1 = state_17784;var statearr_17787_17811 = state_17784__$1;(statearr_17787_17811[(2)] = null);
(statearr_17787_17811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (4)))
{var inst_17761 = (state_17784[(7)]);var inst_17761__$1 = (state_17784[(2)]);var inst_17762 = (inst_17761__$1 == null);var state_17784__$1 = (function (){var statearr_17788 = state_17784;(statearr_17788[(7)] = inst_17761__$1);
return statearr_17788;
})();if(cljs.core.truth_(inst_17762))
{var statearr_17789_17812 = state_17784__$1;(statearr_17789_17812[(1)] = (5));
} else
{var statearr_17790_17813 = state_17784__$1;(statearr_17790_17813[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (13)))
{var state_17784__$1 = state_17784;var statearr_17791_17814 = state_17784__$1;(statearr_17791_17814[(2)] = null);
(statearr_17791_17814[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (6)))
{var inst_17761 = (state_17784[(7)]);var inst_17767 = p.call(null,inst_17761);var state_17784__$1 = state_17784;if(cljs.core.truth_(inst_17767))
{var statearr_17792_17815 = state_17784__$1;(statearr_17792_17815[(1)] = (9));
} else
{var statearr_17793_17816 = state_17784__$1;(statearr_17793_17816[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (3)))
{var inst_17782 = (state_17784[(2)]);var state_17784__$1 = state_17784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17784__$1,inst_17782);
} else
{if((state_val_17785 === (12)))
{var state_17784__$1 = state_17784;var statearr_17794_17817 = state_17784__$1;(statearr_17794_17817[(2)] = null);
(statearr_17794_17817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (2)))
{var state_17784__$1 = state_17784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17784__$1,(4),ch);
} else
{if((state_val_17785 === (11)))
{var inst_17761 = (state_17784[(7)]);var inst_17771 = (state_17784[(2)]);var state_17784__$1 = state_17784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17784__$1,(8),inst_17771,inst_17761);
} else
{if((state_val_17785 === (9)))
{var state_17784__$1 = state_17784;var statearr_17795_17818 = state_17784__$1;(statearr_17795_17818[(2)] = tc);
(statearr_17795_17818[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (5)))
{var inst_17764 = cljs.core.async.close_BANG_.call(null,tc);var inst_17765 = cljs.core.async.close_BANG_.call(null,fc);var state_17784__$1 = (function (){var statearr_17796 = state_17784;(statearr_17796[(8)] = inst_17764);
return statearr_17796;
})();var statearr_17797_17819 = state_17784__$1;(statearr_17797_17819[(2)] = inst_17765);
(statearr_17797_17819[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (14)))
{var inst_17778 = (state_17784[(2)]);var state_17784__$1 = state_17784;var statearr_17798_17820 = state_17784__$1;(statearr_17798_17820[(2)] = inst_17778);
(statearr_17798_17820[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (10)))
{var state_17784__$1 = state_17784;var statearr_17799_17821 = state_17784__$1;(statearr_17799_17821[(2)] = fc);
(statearr_17799_17821[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17785 === (8)))
{var inst_17773 = (state_17784[(2)]);var state_17784__$1 = state_17784;if(cljs.core.truth_(inst_17773))
{var statearr_17800_17822 = state_17784__$1;(statearr_17800_17822[(1)] = (12));
} else
{var statearr_17801_17823 = state_17784__$1;(statearr_17801_17823[(1)] = (13));
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
});})(c__6891__auto___17809,tc,fc))
;return ((function (switch__6876__auto__,c__6891__auto___17809,tc,fc){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_17805 = [null,null,null,null,null,null,null,null,null];(statearr_17805[(0)] = state_machine__6877__auto__);
(statearr_17805[(1)] = (1));
return statearr_17805;
});
var state_machine__6877__auto____1 = (function (state_17784){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_17784);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e17806){if((e17806 instanceof Object))
{var ex__6880__auto__ = e17806;var statearr_17807_17824 = state_17784;(statearr_17807_17824[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17806;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17825 = state_17784;
state_17784 = G__17825;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_17784){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_17784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___17809,tc,fc))
})();var state__6893__auto__ = (function (){var statearr_17808 = f__6892__auto__.call(null);(statearr_17808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___17809);
return statearr_17808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___17809,tc,fc))
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
return (function (state_17872){var state_val_17873 = (state_17872[(1)]);if((state_val_17873 === (7)))
{var inst_17868 = (state_17872[(2)]);var state_17872__$1 = state_17872;var statearr_17874_17890 = state_17872__$1;(statearr_17874_17890[(2)] = inst_17868);
(statearr_17874_17890[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17873 === (6)))
{var inst_17858 = (state_17872[(7)]);var inst_17861 = (state_17872[(8)]);var inst_17865 = f.call(null,inst_17858,inst_17861);var inst_17858__$1 = inst_17865;var state_17872__$1 = (function (){var statearr_17875 = state_17872;(statearr_17875[(7)] = inst_17858__$1);
return statearr_17875;
})();var statearr_17876_17891 = state_17872__$1;(statearr_17876_17891[(2)] = null);
(statearr_17876_17891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17873 === (5)))
{var inst_17858 = (state_17872[(7)]);var state_17872__$1 = state_17872;var statearr_17877_17892 = state_17872__$1;(statearr_17877_17892[(2)] = inst_17858);
(statearr_17877_17892[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17873 === (4)))
{var inst_17861 = (state_17872[(8)]);var inst_17861__$1 = (state_17872[(2)]);var inst_17862 = (inst_17861__$1 == null);var state_17872__$1 = (function (){var statearr_17878 = state_17872;(statearr_17878[(8)] = inst_17861__$1);
return statearr_17878;
})();if(cljs.core.truth_(inst_17862))
{var statearr_17879_17893 = state_17872__$1;(statearr_17879_17893[(1)] = (5));
} else
{var statearr_17880_17894 = state_17872__$1;(statearr_17880_17894[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17873 === (3)))
{var inst_17870 = (state_17872[(2)]);var state_17872__$1 = state_17872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17872__$1,inst_17870);
} else
{if((state_val_17873 === (2)))
{var state_17872__$1 = state_17872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17872__$1,(4),ch);
} else
{if((state_val_17873 === (1)))
{var inst_17858 = init;var state_17872__$1 = (function (){var statearr_17881 = state_17872;(statearr_17881[(7)] = inst_17858);
return statearr_17881;
})();var statearr_17882_17895 = state_17872__$1;(statearr_17882_17895[(2)] = null);
(statearr_17882_17895[(1)] = (2));
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
var state_machine__6877__auto____0 = (function (){var statearr_17886 = [null,null,null,null,null,null,null,null,null];(statearr_17886[(0)] = state_machine__6877__auto__);
(statearr_17886[(1)] = (1));
return statearr_17886;
});
var state_machine__6877__auto____1 = (function (state_17872){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_17872);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e17887){if((e17887 instanceof Object))
{var ex__6880__auto__ = e17887;var statearr_17888_17896 = state_17872;(statearr_17888_17896[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17897 = state_17872;
state_17872 = G__17897;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_17872){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_17872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto__))
})();var state__6893__auto__ = (function (){var statearr_17889 = f__6892__auto__.call(null);(statearr_17889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto__);
return statearr_17889;
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
return (function (state_17971){var state_val_17972 = (state_17971[(1)]);if((state_val_17972 === (7)))
{var inst_17953 = (state_17971[(2)]);var state_17971__$1 = state_17971;var statearr_17973_17996 = state_17971__$1;(statearr_17973_17996[(2)] = inst_17953);
(statearr_17973_17996[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (1)))
{var inst_17947 = cljs.core.seq.call(null,coll);var inst_17948 = inst_17947;var state_17971__$1 = (function (){var statearr_17974 = state_17971;(statearr_17974[(7)] = inst_17948);
return statearr_17974;
})();var statearr_17975_17997 = state_17971__$1;(statearr_17975_17997[(2)] = null);
(statearr_17975_17997[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (4)))
{var inst_17948 = (state_17971[(7)]);var inst_17951 = cljs.core.first.call(null,inst_17948);var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17971__$1,(7),ch,inst_17951);
} else
{if((state_val_17972 === (13)))
{var inst_17965 = (state_17971[(2)]);var state_17971__$1 = state_17971;var statearr_17976_17998 = state_17971__$1;(statearr_17976_17998[(2)] = inst_17965);
(statearr_17976_17998[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (6)))
{var inst_17956 = (state_17971[(2)]);var state_17971__$1 = state_17971;if(cljs.core.truth_(inst_17956))
{var statearr_17977_17999 = state_17971__$1;(statearr_17977_17999[(1)] = (8));
} else
{var statearr_17978_18000 = state_17971__$1;(statearr_17978_18000[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (3)))
{var inst_17969 = (state_17971[(2)]);var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17971__$1,inst_17969);
} else
{if((state_val_17972 === (12)))
{var state_17971__$1 = state_17971;var statearr_17979_18001 = state_17971__$1;(statearr_17979_18001[(2)] = null);
(statearr_17979_18001[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (2)))
{var inst_17948 = (state_17971[(7)]);var state_17971__$1 = state_17971;if(cljs.core.truth_(inst_17948))
{var statearr_17980_18002 = state_17971__$1;(statearr_17980_18002[(1)] = (4));
} else
{var statearr_17981_18003 = state_17971__$1;(statearr_17981_18003[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (11)))
{var inst_17962 = cljs.core.async.close_BANG_.call(null,ch);var state_17971__$1 = state_17971;var statearr_17982_18004 = state_17971__$1;(statearr_17982_18004[(2)] = inst_17962);
(statearr_17982_18004[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (9)))
{var state_17971__$1 = state_17971;if(cljs.core.truth_(close_QMARK_))
{var statearr_17983_18005 = state_17971__$1;(statearr_17983_18005[(1)] = (11));
} else
{var statearr_17984_18006 = state_17971__$1;(statearr_17984_18006[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (5)))
{var inst_17948 = (state_17971[(7)]);var state_17971__$1 = state_17971;var statearr_17985_18007 = state_17971__$1;(statearr_17985_18007[(2)] = inst_17948);
(statearr_17985_18007[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (10)))
{var inst_17967 = (state_17971[(2)]);var state_17971__$1 = state_17971;var statearr_17986_18008 = state_17971__$1;(statearr_17986_18008[(2)] = inst_17967);
(statearr_17986_18008[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (8)))
{var inst_17948 = (state_17971[(7)]);var inst_17958 = cljs.core.next.call(null,inst_17948);var inst_17948__$1 = inst_17958;var state_17971__$1 = (function (){var statearr_17987 = state_17971;(statearr_17987[(7)] = inst_17948__$1);
return statearr_17987;
})();var statearr_17988_18009 = state_17971__$1;(statearr_17988_18009[(2)] = null);
(statearr_17988_18009[(1)] = (2));
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
var state_machine__6877__auto____0 = (function (){var statearr_17992 = [null,null,null,null,null,null,null,null];(statearr_17992[(0)] = state_machine__6877__auto__);
(statearr_17992[(1)] = (1));
return statearr_17992;
});
var state_machine__6877__auto____1 = (function (state_17971){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_17971);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e17993){if((e17993 instanceof Object))
{var ex__6880__auto__ = e17993;var statearr_17994_18010 = state_17971;(statearr_17994_18010[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17993;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18011 = state_17971;
state_17971 = G__18011;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_17971){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_17971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto__))
})();var state__6893__auto__ = (function (){var statearr_17995 = f__6892__auto__.call(null);(statearr_17995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto__);
return statearr_17995;
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
cljs.core.async.Mux = (function (){var obj18013 = {};return obj18013;
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
cljs.core.async.Mult = (function (){var obj18015 = {};return obj18015;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18237 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18237 = (function (cs,ch,mult,meta18238){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18238 = meta18238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18237.cljs$lang$type = true;
cljs.core.async.t18237.cljs$lang$ctorStr = "cljs.core.async/t18237";
cljs.core.async.t18237.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t18237");
});})(cs))
;
cljs.core.async.t18237.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18237.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18237.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18237.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18237.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18239){var self__ = this;
var _18239__$1 = this;return self__.meta18238;
});})(cs))
;
cljs.core.async.t18237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18239,meta18238__$1){var self__ = this;
var _18239__$1 = this;return (new cljs.core.async.t18237(self__.cs,self__.ch,self__.mult,meta18238__$1));
});})(cs))
;
cljs.core.async.__GT_t18237 = ((function (cs){
return (function __GT_t18237(cs__$1,ch__$1,mult__$1,meta18238){return (new cljs.core.async.t18237(cs__$1,ch__$1,mult__$1,meta18238));
});})(cs))
;
}
return (new cljs.core.async.t18237(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6891__auto___18458 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___18458,cs,m,dchan,dctr,done){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___18458,cs,m,dchan,dctr,done){
return (function (state_18370){var state_val_18371 = (state_18370[(1)]);if((state_val_18371 === (7)))
{var inst_18366 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18372_18459 = state_18370__$1;(statearr_18372_18459[(2)] = inst_18366);
(statearr_18372_18459[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (20)))
{var inst_18271 = (state_18370[(7)]);var inst_18281 = cljs.core.first.call(null,inst_18271);var inst_18282 = cljs.core.nth.call(null,inst_18281,(0),null);var inst_18283 = cljs.core.nth.call(null,inst_18281,(1),null);var state_18370__$1 = (function (){var statearr_18373 = state_18370;(statearr_18373[(8)] = inst_18282);
return statearr_18373;
})();if(cljs.core.truth_(inst_18283))
{var statearr_18374_18460 = state_18370__$1;(statearr_18374_18460[(1)] = (22));
} else
{var statearr_18375_18461 = state_18370__$1;(statearr_18375_18461[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (27)))
{var inst_18318 = (state_18370[(9)]);var inst_18242 = (state_18370[(10)]);var inst_18311 = (state_18370[(11)]);var inst_18313 = (state_18370[(12)]);var inst_18318__$1 = cljs.core._nth.call(null,inst_18311,inst_18313);var inst_18319 = cljs.core.async.put_BANG_.call(null,inst_18318__$1,inst_18242,done);var state_18370__$1 = (function (){var statearr_18376 = state_18370;(statearr_18376[(9)] = inst_18318__$1);
return statearr_18376;
})();if(cljs.core.truth_(inst_18319))
{var statearr_18377_18462 = state_18370__$1;(statearr_18377_18462[(1)] = (30));
} else
{var statearr_18378_18463 = state_18370__$1;(statearr_18378_18463[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (1)))
{var state_18370__$1 = state_18370;var statearr_18379_18464 = state_18370__$1;(statearr_18379_18464[(2)] = null);
(statearr_18379_18464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (24)))
{var inst_18271 = (state_18370[(7)]);var inst_18288 = (state_18370[(2)]);var inst_18289 = cljs.core.next.call(null,inst_18271);var inst_18251 = inst_18289;var inst_18252 = null;var inst_18253 = (0);var inst_18254 = (0);var state_18370__$1 = (function (){var statearr_18380 = state_18370;(statearr_18380[(13)] = inst_18252);
(statearr_18380[(14)] = inst_18253);
(statearr_18380[(15)] = inst_18254);
(statearr_18380[(16)] = inst_18251);
(statearr_18380[(17)] = inst_18288);
return statearr_18380;
})();var statearr_18381_18465 = state_18370__$1;(statearr_18381_18465[(2)] = null);
(statearr_18381_18465[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (39)))
{var state_18370__$1 = state_18370;var statearr_18385_18466 = state_18370__$1;(statearr_18385_18466[(2)] = null);
(statearr_18385_18466[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (4)))
{var inst_18242 = (state_18370[(10)]);var inst_18242__$1 = (state_18370[(2)]);var inst_18243 = (inst_18242__$1 == null);var state_18370__$1 = (function (){var statearr_18386 = state_18370;(statearr_18386[(10)] = inst_18242__$1);
return statearr_18386;
})();if(cljs.core.truth_(inst_18243))
{var statearr_18387_18467 = state_18370__$1;(statearr_18387_18467[(1)] = (5));
} else
{var statearr_18388_18468 = state_18370__$1;(statearr_18388_18468[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (15)))
{var inst_18252 = (state_18370[(13)]);var inst_18253 = (state_18370[(14)]);var inst_18254 = (state_18370[(15)]);var inst_18251 = (state_18370[(16)]);var inst_18267 = (state_18370[(2)]);var inst_18268 = (inst_18254 + (1));var tmp18382 = inst_18252;var tmp18383 = inst_18253;var tmp18384 = inst_18251;var inst_18251__$1 = tmp18384;var inst_18252__$1 = tmp18382;var inst_18253__$1 = tmp18383;var inst_18254__$1 = inst_18268;var state_18370__$1 = (function (){var statearr_18389 = state_18370;(statearr_18389[(13)] = inst_18252__$1);
(statearr_18389[(14)] = inst_18253__$1);
(statearr_18389[(15)] = inst_18254__$1);
(statearr_18389[(16)] = inst_18251__$1);
(statearr_18389[(18)] = inst_18267);
return statearr_18389;
})();var statearr_18390_18469 = state_18370__$1;(statearr_18390_18469[(2)] = null);
(statearr_18390_18469[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (21)))
{var inst_18292 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18394_18470 = state_18370__$1;(statearr_18394_18470[(2)] = inst_18292);
(statearr_18394_18470[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (31)))
{var inst_18318 = (state_18370[(9)]);var inst_18322 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18323 = cljs.core.async.untap_STAR_.call(null,m,inst_18318);var state_18370__$1 = (function (){var statearr_18395 = state_18370;(statearr_18395[(19)] = inst_18322);
return statearr_18395;
})();var statearr_18396_18471 = state_18370__$1;(statearr_18396_18471[(2)] = inst_18323);
(statearr_18396_18471[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (32)))
{var inst_18310 = (state_18370[(20)]);var inst_18312 = (state_18370[(21)]);var inst_18311 = (state_18370[(11)]);var inst_18313 = (state_18370[(12)]);var inst_18325 = (state_18370[(2)]);var inst_18326 = (inst_18313 + (1));var tmp18391 = inst_18310;var tmp18392 = inst_18312;var tmp18393 = inst_18311;var inst_18310__$1 = tmp18391;var inst_18311__$1 = tmp18393;var inst_18312__$1 = tmp18392;var inst_18313__$1 = inst_18326;var state_18370__$1 = (function (){var statearr_18397 = state_18370;(statearr_18397[(22)] = inst_18325);
(statearr_18397[(20)] = inst_18310__$1);
(statearr_18397[(21)] = inst_18312__$1);
(statearr_18397[(11)] = inst_18311__$1);
(statearr_18397[(12)] = inst_18313__$1);
return statearr_18397;
})();var statearr_18398_18472 = state_18370__$1;(statearr_18398_18472[(2)] = null);
(statearr_18398_18472[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (40)))
{var inst_18338 = (state_18370[(23)]);var inst_18342 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18343 = cljs.core.async.untap_STAR_.call(null,m,inst_18338);var state_18370__$1 = (function (){var statearr_18399 = state_18370;(statearr_18399[(24)] = inst_18342);
return statearr_18399;
})();var statearr_18400_18473 = state_18370__$1;(statearr_18400_18473[(2)] = inst_18343);
(statearr_18400_18473[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (33)))
{var inst_18329 = (state_18370[(25)]);var inst_18331 = cljs.core.chunked_seq_QMARK_.call(null,inst_18329);var state_18370__$1 = state_18370;if(inst_18331)
{var statearr_18401_18474 = state_18370__$1;(statearr_18401_18474[(1)] = (36));
} else
{var statearr_18402_18475 = state_18370__$1;(statearr_18402_18475[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (13)))
{var inst_18261 = (state_18370[(26)]);var inst_18264 = cljs.core.async.close_BANG_.call(null,inst_18261);var state_18370__$1 = state_18370;var statearr_18403_18476 = state_18370__$1;(statearr_18403_18476[(2)] = inst_18264);
(statearr_18403_18476[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (22)))
{var inst_18282 = (state_18370[(8)]);var inst_18285 = cljs.core.async.close_BANG_.call(null,inst_18282);var state_18370__$1 = state_18370;var statearr_18404_18477 = state_18370__$1;(statearr_18404_18477[(2)] = inst_18285);
(statearr_18404_18477[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (36)))
{var inst_18329 = (state_18370[(25)]);var inst_18333 = cljs.core.chunk_first.call(null,inst_18329);var inst_18334 = cljs.core.chunk_rest.call(null,inst_18329);var inst_18335 = cljs.core.count.call(null,inst_18333);var inst_18310 = inst_18334;var inst_18311 = inst_18333;var inst_18312 = inst_18335;var inst_18313 = (0);var state_18370__$1 = (function (){var statearr_18405 = state_18370;(statearr_18405[(20)] = inst_18310);
(statearr_18405[(21)] = inst_18312);
(statearr_18405[(11)] = inst_18311);
(statearr_18405[(12)] = inst_18313);
return statearr_18405;
})();var statearr_18406_18478 = state_18370__$1;(statearr_18406_18478[(2)] = null);
(statearr_18406_18478[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (41)))
{var inst_18329 = (state_18370[(25)]);var inst_18345 = (state_18370[(2)]);var inst_18346 = cljs.core.next.call(null,inst_18329);var inst_18310 = inst_18346;var inst_18311 = null;var inst_18312 = (0);var inst_18313 = (0);var state_18370__$1 = (function (){var statearr_18407 = state_18370;(statearr_18407[(20)] = inst_18310);
(statearr_18407[(21)] = inst_18312);
(statearr_18407[(11)] = inst_18311);
(statearr_18407[(27)] = inst_18345);
(statearr_18407[(12)] = inst_18313);
return statearr_18407;
})();var statearr_18408_18479 = state_18370__$1;(statearr_18408_18479[(2)] = null);
(statearr_18408_18479[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (43)))
{var state_18370__$1 = state_18370;var statearr_18409_18480 = state_18370__$1;(statearr_18409_18480[(2)] = null);
(statearr_18409_18480[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (29)))
{var inst_18354 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18410_18481 = state_18370__$1;(statearr_18410_18481[(2)] = inst_18354);
(statearr_18410_18481[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (44)))
{var inst_18363 = (state_18370[(2)]);var state_18370__$1 = (function (){var statearr_18411 = state_18370;(statearr_18411[(28)] = inst_18363);
return statearr_18411;
})();var statearr_18412_18482 = state_18370__$1;(statearr_18412_18482[(2)] = null);
(statearr_18412_18482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (6)))
{var inst_18302 = (state_18370[(29)]);var inst_18301 = cljs.core.deref.call(null,cs);var inst_18302__$1 = cljs.core.keys.call(null,inst_18301);var inst_18303 = cljs.core.count.call(null,inst_18302__$1);var inst_18304 = cljs.core.reset_BANG_.call(null,dctr,inst_18303);var inst_18309 = cljs.core.seq.call(null,inst_18302__$1);var inst_18310 = inst_18309;var inst_18311 = null;var inst_18312 = (0);var inst_18313 = (0);var state_18370__$1 = (function (){var statearr_18413 = state_18370;(statearr_18413[(30)] = inst_18304);
(statearr_18413[(20)] = inst_18310);
(statearr_18413[(21)] = inst_18312);
(statearr_18413[(11)] = inst_18311);
(statearr_18413[(12)] = inst_18313);
(statearr_18413[(29)] = inst_18302__$1);
return statearr_18413;
})();var statearr_18414_18483 = state_18370__$1;(statearr_18414_18483[(2)] = null);
(statearr_18414_18483[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (28)))
{var inst_18310 = (state_18370[(20)]);var inst_18329 = (state_18370[(25)]);var inst_18329__$1 = cljs.core.seq.call(null,inst_18310);var state_18370__$1 = (function (){var statearr_18415 = state_18370;(statearr_18415[(25)] = inst_18329__$1);
return statearr_18415;
})();if(inst_18329__$1)
{var statearr_18416_18484 = state_18370__$1;(statearr_18416_18484[(1)] = (33));
} else
{var statearr_18417_18485 = state_18370__$1;(statearr_18417_18485[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (25)))
{var inst_18312 = (state_18370[(21)]);var inst_18313 = (state_18370[(12)]);var inst_18315 = (inst_18313 < inst_18312);var inst_18316 = inst_18315;var state_18370__$1 = state_18370;if(cljs.core.truth_(inst_18316))
{var statearr_18418_18486 = state_18370__$1;(statearr_18418_18486[(1)] = (27));
} else
{var statearr_18419_18487 = state_18370__$1;(statearr_18419_18487[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (34)))
{var state_18370__$1 = state_18370;var statearr_18420_18488 = state_18370__$1;(statearr_18420_18488[(2)] = null);
(statearr_18420_18488[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (17)))
{var state_18370__$1 = state_18370;var statearr_18421_18489 = state_18370__$1;(statearr_18421_18489[(2)] = null);
(statearr_18421_18489[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (3)))
{var inst_18368 = (state_18370[(2)]);var state_18370__$1 = state_18370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18370__$1,inst_18368);
} else
{if((state_val_18371 === (12)))
{var inst_18297 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18422_18490 = state_18370__$1;(statearr_18422_18490[(2)] = inst_18297);
(statearr_18422_18490[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (2)))
{var state_18370__$1 = state_18370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18370__$1,(4),ch);
} else
{if((state_val_18371 === (23)))
{var state_18370__$1 = state_18370;var statearr_18423_18491 = state_18370__$1;(statearr_18423_18491[(2)] = null);
(statearr_18423_18491[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (35)))
{var inst_18352 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18424_18492 = state_18370__$1;(statearr_18424_18492[(2)] = inst_18352);
(statearr_18424_18492[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (19)))
{var inst_18271 = (state_18370[(7)]);var inst_18275 = cljs.core.chunk_first.call(null,inst_18271);var inst_18276 = cljs.core.chunk_rest.call(null,inst_18271);var inst_18277 = cljs.core.count.call(null,inst_18275);var inst_18251 = inst_18276;var inst_18252 = inst_18275;var inst_18253 = inst_18277;var inst_18254 = (0);var state_18370__$1 = (function (){var statearr_18425 = state_18370;(statearr_18425[(13)] = inst_18252);
(statearr_18425[(14)] = inst_18253);
(statearr_18425[(15)] = inst_18254);
(statearr_18425[(16)] = inst_18251);
return statearr_18425;
})();var statearr_18426_18493 = state_18370__$1;(statearr_18426_18493[(2)] = null);
(statearr_18426_18493[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (11)))
{var inst_18251 = (state_18370[(16)]);var inst_18271 = (state_18370[(7)]);var inst_18271__$1 = cljs.core.seq.call(null,inst_18251);var state_18370__$1 = (function (){var statearr_18427 = state_18370;(statearr_18427[(7)] = inst_18271__$1);
return statearr_18427;
})();if(inst_18271__$1)
{var statearr_18428_18494 = state_18370__$1;(statearr_18428_18494[(1)] = (16));
} else
{var statearr_18429_18495 = state_18370__$1;(statearr_18429_18495[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (9)))
{var inst_18299 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18430_18496 = state_18370__$1;(statearr_18430_18496[(2)] = inst_18299);
(statearr_18430_18496[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (5)))
{var inst_18249 = cljs.core.deref.call(null,cs);var inst_18250 = cljs.core.seq.call(null,inst_18249);var inst_18251 = inst_18250;var inst_18252 = null;var inst_18253 = (0);var inst_18254 = (0);var state_18370__$1 = (function (){var statearr_18431 = state_18370;(statearr_18431[(13)] = inst_18252);
(statearr_18431[(14)] = inst_18253);
(statearr_18431[(15)] = inst_18254);
(statearr_18431[(16)] = inst_18251);
return statearr_18431;
})();var statearr_18432_18497 = state_18370__$1;(statearr_18432_18497[(2)] = null);
(statearr_18432_18497[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (14)))
{var state_18370__$1 = state_18370;var statearr_18433_18498 = state_18370__$1;(statearr_18433_18498[(2)] = null);
(statearr_18433_18498[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (45)))
{var inst_18360 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18434_18499 = state_18370__$1;(statearr_18434_18499[(2)] = inst_18360);
(statearr_18434_18499[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (26)))
{var inst_18302 = (state_18370[(29)]);var inst_18356 = (state_18370[(2)]);var inst_18357 = cljs.core.seq.call(null,inst_18302);var state_18370__$1 = (function (){var statearr_18435 = state_18370;(statearr_18435[(31)] = inst_18356);
return statearr_18435;
})();if(inst_18357)
{var statearr_18436_18500 = state_18370__$1;(statearr_18436_18500[(1)] = (42));
} else
{var statearr_18437_18501 = state_18370__$1;(statearr_18437_18501[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (16)))
{var inst_18271 = (state_18370[(7)]);var inst_18273 = cljs.core.chunked_seq_QMARK_.call(null,inst_18271);var state_18370__$1 = state_18370;if(inst_18273)
{var statearr_18438_18502 = state_18370__$1;(statearr_18438_18502[(1)] = (19));
} else
{var statearr_18439_18503 = state_18370__$1;(statearr_18439_18503[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (38)))
{var inst_18349 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18440_18504 = state_18370__$1;(statearr_18440_18504[(2)] = inst_18349);
(statearr_18440_18504[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (30)))
{var state_18370__$1 = state_18370;var statearr_18441_18505 = state_18370__$1;(statearr_18441_18505[(2)] = null);
(statearr_18441_18505[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (10)))
{var inst_18252 = (state_18370[(13)]);var inst_18254 = (state_18370[(15)]);var inst_18260 = cljs.core._nth.call(null,inst_18252,inst_18254);var inst_18261 = cljs.core.nth.call(null,inst_18260,(0),null);var inst_18262 = cljs.core.nth.call(null,inst_18260,(1),null);var state_18370__$1 = (function (){var statearr_18442 = state_18370;(statearr_18442[(26)] = inst_18261);
return statearr_18442;
})();if(cljs.core.truth_(inst_18262))
{var statearr_18443_18506 = state_18370__$1;(statearr_18443_18506[(1)] = (13));
} else
{var statearr_18444_18507 = state_18370__$1;(statearr_18444_18507[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (18)))
{var inst_18295 = (state_18370[(2)]);var state_18370__$1 = state_18370;var statearr_18445_18508 = state_18370__$1;(statearr_18445_18508[(2)] = inst_18295);
(statearr_18445_18508[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (42)))
{var state_18370__$1 = state_18370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18370__$1,(45),dchan);
} else
{if((state_val_18371 === (37)))
{var inst_18242 = (state_18370[(10)]);var inst_18338 = (state_18370[(23)]);var inst_18329 = (state_18370[(25)]);var inst_18338__$1 = cljs.core.first.call(null,inst_18329);var inst_18339 = cljs.core.async.put_BANG_.call(null,inst_18338__$1,inst_18242,done);var state_18370__$1 = (function (){var statearr_18446 = state_18370;(statearr_18446[(23)] = inst_18338__$1);
return statearr_18446;
})();if(cljs.core.truth_(inst_18339))
{var statearr_18447_18509 = state_18370__$1;(statearr_18447_18509[(1)] = (39));
} else
{var statearr_18448_18510 = state_18370__$1;(statearr_18448_18510[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18371 === (8)))
{var inst_18253 = (state_18370[(14)]);var inst_18254 = (state_18370[(15)]);var inst_18256 = (inst_18254 < inst_18253);var inst_18257 = inst_18256;var state_18370__$1 = state_18370;if(cljs.core.truth_(inst_18257))
{var statearr_18449_18511 = state_18370__$1;(statearr_18449_18511[(1)] = (10));
} else
{var statearr_18450_18512 = state_18370__$1;(statearr_18450_18512[(1)] = (11));
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
});})(c__6891__auto___18458,cs,m,dchan,dctr,done))
;return ((function (switch__6876__auto__,c__6891__auto___18458,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_18454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18454[(0)] = state_machine__6877__auto__);
(statearr_18454[(1)] = (1));
return statearr_18454;
});
var state_machine__6877__auto____1 = (function (state_18370){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_18370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e18455){if((e18455 instanceof Object))
{var ex__6880__auto__ = e18455;var statearr_18456_18513 = state_18370;(statearr_18456_18513[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18370);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18455;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18514 = state_18370;
state_18370 = G__18514;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_18370){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_18370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___18458,cs,m,dchan,dctr,done))
})();var state__6893__auto__ = (function (){var statearr_18457 = f__6892__auto__.call(null);(statearr_18457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___18458);
return statearr_18457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___18458,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj18516 = {};return obj18516;
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
;var m = (function (){if(typeof cljs.core.async.t18636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18636 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18637){
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
this.meta18637 = meta18637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18636.cljs$lang$type = true;
cljs.core.async.t18636.cljs$lang$ctorStr = "cljs.core.async/t18636";
cljs.core.async.t18636.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t18636");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18636.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18636.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18636.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18636.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18636.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18636.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18636.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18638){var self__ = this;
var _18638__$1 = this;return self__.meta18637;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18638,meta18637__$1){var self__ = this;
var _18638__$1 = this;return (new cljs.core.async.t18636(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18637__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18636 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18636(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18637){return (new cljs.core.async.t18636(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18637));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18636(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6891__auto___18755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___18755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___18755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18708){var state_val_18709 = (state_18708[(1)]);if((state_val_18709 === (7)))
{var inst_18652 = (state_18708[(7)]);var inst_18657 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18652);var state_18708__$1 = state_18708;var statearr_18710_18756 = state_18708__$1;(statearr_18710_18756[(2)] = inst_18657);
(statearr_18710_18756[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (20)))
{var inst_18667 = (state_18708[(8)]);var state_18708__$1 = state_18708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18708__$1,(23),out,inst_18667);
} else
{if((state_val_18709 === (1)))
{var inst_18642 = (state_18708[(9)]);var inst_18642__$1 = calc_state.call(null);var inst_18643 = cljs.core.seq_QMARK_.call(null,inst_18642__$1);var state_18708__$1 = (function (){var statearr_18711 = state_18708;(statearr_18711[(9)] = inst_18642__$1);
return statearr_18711;
})();if(inst_18643)
{var statearr_18712_18757 = state_18708__$1;(statearr_18712_18757[(1)] = (2));
} else
{var statearr_18713_18758 = state_18708__$1;(statearr_18713_18758[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (24)))
{var inst_18660 = (state_18708[(10)]);var inst_18652 = inst_18660;var state_18708__$1 = (function (){var statearr_18714 = state_18708;(statearr_18714[(7)] = inst_18652);
return statearr_18714;
})();var statearr_18715_18759 = state_18708__$1;(statearr_18715_18759[(2)] = null);
(statearr_18715_18759[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (4)))
{var inst_18642 = (state_18708[(9)]);var inst_18648 = (state_18708[(2)]);var inst_18649 = cljs.core.get.call(null,inst_18648,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18650 = cljs.core.get.call(null,inst_18648,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18651 = cljs.core.get.call(null,inst_18648,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_18652 = inst_18642;var state_18708__$1 = (function (){var statearr_18716 = state_18708;(statearr_18716[(11)] = inst_18649);
(statearr_18716[(7)] = inst_18652);
(statearr_18716[(12)] = inst_18651);
(statearr_18716[(13)] = inst_18650);
return statearr_18716;
})();var statearr_18717_18760 = state_18708__$1;(statearr_18717_18760[(2)] = null);
(statearr_18717_18760[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (15)))
{var state_18708__$1 = state_18708;var statearr_18718_18761 = state_18708__$1;(statearr_18718_18761[(2)] = null);
(statearr_18718_18761[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (21)))
{var inst_18660 = (state_18708[(10)]);var inst_18652 = inst_18660;var state_18708__$1 = (function (){var statearr_18719 = state_18708;(statearr_18719[(7)] = inst_18652);
return statearr_18719;
})();var statearr_18720_18762 = state_18708__$1;(statearr_18720_18762[(2)] = null);
(statearr_18720_18762[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (13)))
{var inst_18704 = (state_18708[(2)]);var state_18708__$1 = state_18708;var statearr_18721_18763 = state_18708__$1;(statearr_18721_18763[(2)] = inst_18704);
(statearr_18721_18763[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (22)))
{var inst_18702 = (state_18708[(2)]);var state_18708__$1 = state_18708;var statearr_18722_18764 = state_18708__$1;(statearr_18722_18764[(2)] = inst_18702);
(statearr_18722_18764[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (6)))
{var inst_18706 = (state_18708[(2)]);var state_18708__$1 = state_18708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18708__$1,inst_18706);
} else
{if((state_val_18709 === (25)))
{var state_18708__$1 = state_18708;var statearr_18723_18765 = state_18708__$1;(statearr_18723_18765[(2)] = null);
(statearr_18723_18765[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (17)))
{var inst_18682 = (state_18708[(14)]);var state_18708__$1 = state_18708;var statearr_18724_18766 = state_18708__$1;(statearr_18724_18766[(2)] = inst_18682);
(statearr_18724_18766[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (3)))
{var inst_18642 = (state_18708[(9)]);var state_18708__$1 = state_18708;var statearr_18725_18767 = state_18708__$1;(statearr_18725_18767[(2)] = inst_18642);
(statearr_18725_18767[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (12)))
{var inst_18682 = (state_18708[(14)]);var inst_18668 = (state_18708[(15)]);var inst_18663 = (state_18708[(16)]);var inst_18682__$1 = inst_18663.call(null,inst_18668);var state_18708__$1 = (function (){var statearr_18726 = state_18708;(statearr_18726[(14)] = inst_18682__$1);
return statearr_18726;
})();if(cljs.core.truth_(inst_18682__$1))
{var statearr_18727_18768 = state_18708__$1;(statearr_18727_18768[(1)] = (17));
} else
{var statearr_18728_18769 = state_18708__$1;(statearr_18728_18769[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (2)))
{var inst_18642 = (state_18708[(9)]);var inst_18645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18642);var state_18708__$1 = state_18708;var statearr_18729_18770 = state_18708__$1;(statearr_18729_18770[(2)] = inst_18645);
(statearr_18729_18770[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (23)))
{var inst_18693 = (state_18708[(2)]);var state_18708__$1 = state_18708;if(cljs.core.truth_(inst_18693))
{var statearr_18730_18771 = state_18708__$1;(statearr_18730_18771[(1)] = (24));
} else
{var statearr_18731_18772 = state_18708__$1;(statearr_18731_18772[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (19)))
{var inst_18690 = (state_18708[(2)]);var state_18708__$1 = state_18708;if(cljs.core.truth_(inst_18690))
{var statearr_18732_18773 = state_18708__$1;(statearr_18732_18773[(1)] = (20));
} else
{var statearr_18733_18774 = state_18708__$1;(statearr_18733_18774[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (11)))
{var inst_18667 = (state_18708[(8)]);var inst_18673 = (inst_18667 == null);var state_18708__$1 = state_18708;if(cljs.core.truth_(inst_18673))
{var statearr_18734_18775 = state_18708__$1;(statearr_18734_18775[(1)] = (14));
} else
{var statearr_18735_18776 = state_18708__$1;(statearr_18735_18776[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (9)))
{var inst_18660 = (state_18708[(10)]);var inst_18660__$1 = (state_18708[(2)]);var inst_18661 = cljs.core.get.call(null,inst_18660__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18662 = cljs.core.get.call(null,inst_18660__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18663 = cljs.core.get.call(null,inst_18660__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_18708__$1 = (function (){var statearr_18736 = state_18708;(statearr_18736[(17)] = inst_18662);
(statearr_18736[(10)] = inst_18660__$1);
(statearr_18736[(16)] = inst_18663);
return statearr_18736;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18708__$1,(10),inst_18661);
} else
{if((state_val_18709 === (5)))
{var inst_18652 = (state_18708[(7)]);var inst_18655 = cljs.core.seq_QMARK_.call(null,inst_18652);var state_18708__$1 = state_18708;if(inst_18655)
{var statearr_18737_18777 = state_18708__$1;(statearr_18737_18777[(1)] = (7));
} else
{var statearr_18738_18778 = state_18708__$1;(statearr_18738_18778[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (14)))
{var inst_18668 = (state_18708[(15)]);var inst_18675 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18668);var state_18708__$1 = state_18708;var statearr_18739_18779 = state_18708__$1;(statearr_18739_18779[(2)] = inst_18675);
(statearr_18739_18779[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (26)))
{var inst_18698 = (state_18708[(2)]);var state_18708__$1 = state_18708;var statearr_18740_18780 = state_18708__$1;(statearr_18740_18780[(2)] = inst_18698);
(statearr_18740_18780[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (16)))
{var inst_18678 = (state_18708[(2)]);var inst_18679 = calc_state.call(null);var inst_18652 = inst_18679;var state_18708__$1 = (function (){var statearr_18741 = state_18708;(statearr_18741[(18)] = inst_18678);
(statearr_18741[(7)] = inst_18652);
return statearr_18741;
})();var statearr_18742_18781 = state_18708__$1;(statearr_18742_18781[(2)] = null);
(statearr_18742_18781[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (10)))
{var inst_18667 = (state_18708[(8)]);var inst_18668 = (state_18708[(15)]);var inst_18666 = (state_18708[(2)]);var inst_18667__$1 = cljs.core.nth.call(null,inst_18666,(0),null);var inst_18668__$1 = cljs.core.nth.call(null,inst_18666,(1),null);var inst_18669 = (inst_18667__$1 == null);var inst_18670 = cljs.core._EQ_.call(null,inst_18668__$1,change);var inst_18671 = (inst_18669) || (inst_18670);var state_18708__$1 = (function (){var statearr_18743 = state_18708;(statearr_18743[(8)] = inst_18667__$1);
(statearr_18743[(15)] = inst_18668__$1);
return statearr_18743;
})();if(cljs.core.truth_(inst_18671))
{var statearr_18744_18782 = state_18708__$1;(statearr_18744_18782[(1)] = (11));
} else
{var statearr_18745_18783 = state_18708__$1;(statearr_18745_18783[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (18)))
{var inst_18662 = (state_18708[(17)]);var inst_18668 = (state_18708[(15)]);var inst_18663 = (state_18708[(16)]);var inst_18685 = cljs.core.empty_QMARK_.call(null,inst_18663);var inst_18686 = inst_18662.call(null,inst_18668);var inst_18687 = cljs.core.not.call(null,inst_18686);var inst_18688 = (inst_18685) && (inst_18687);var state_18708__$1 = state_18708;var statearr_18746_18784 = state_18708__$1;(statearr_18746_18784[(2)] = inst_18688);
(statearr_18746_18784[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18709 === (8)))
{var inst_18652 = (state_18708[(7)]);var state_18708__$1 = state_18708;var statearr_18747_18785 = state_18708__$1;(statearr_18747_18785[(2)] = inst_18652);
(statearr_18747_18785[(1)] = (9));
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
});})(c__6891__auto___18755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6876__auto__,c__6891__auto___18755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_18751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18751[(0)] = state_machine__6877__auto__);
(statearr_18751[(1)] = (1));
return statearr_18751;
});
var state_machine__6877__auto____1 = (function (state_18708){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_18708);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e18752){if((e18752 instanceof Object))
{var ex__6880__auto__ = e18752;var statearr_18753_18786 = state_18708;(statearr_18753_18786[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18787 = state_18708;
state_18708 = G__18787;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_18708){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_18708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___18755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6893__auto__ = (function (){var statearr_18754 = f__6892__auto__.call(null);(statearr_18754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___18755);
return statearr_18754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___18755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj18789 = {};return obj18789;
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
return (function (p1__18790_SHARP_){if(cljs.core.truth_(p1__18790_SHARP_.call(null,topic)))
{return p1__18790_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18790_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3556__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18905 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18906){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18906 = meta18906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18905.cljs$lang$type = true;
cljs.core.async.t18905.cljs$lang$ctorStr = "cljs.core.async/t18905";
cljs.core.async.t18905.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t18905");
});})(mults,ensure_mult))
;
cljs.core.async.t18905.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18905.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18905.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18905.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18905.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18905.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18907){var self__ = this;
var _18907__$1 = this;return self__.meta18906;
});})(mults,ensure_mult))
;
cljs.core.async.t18905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18907,meta18906__$1){var self__ = this;
var _18907__$1 = this;return (new cljs.core.async.t18905(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18906__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18905 = ((function (mults,ensure_mult){
return (function __GT_t18905(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18906){return (new cljs.core.async.t18905(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18906));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18905(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6891__auto___19019 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___19019,mults,ensure_mult,p){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___19019,mults,ensure_mult,p){
return (function (state_18975){var state_val_18976 = (state_18975[(1)]);if((state_val_18976 === (7)))
{var inst_18971 = (state_18975[(2)]);var state_18975__$1 = state_18975;var statearr_18977_19020 = state_18975__$1;(statearr_18977_19020[(2)] = inst_18971);
(statearr_18977_19020[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (20)))
{var state_18975__$1 = state_18975;var statearr_18978_19021 = state_18975__$1;(statearr_18978_19021[(2)] = null);
(statearr_18978_19021[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (1)))
{var state_18975__$1 = state_18975;var statearr_18979_19022 = state_18975__$1;(statearr_18979_19022[(2)] = null);
(statearr_18979_19022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (4)))
{var inst_18910 = (state_18975[(7)]);var inst_18910__$1 = (state_18975[(2)]);var inst_18911 = (inst_18910__$1 == null);var state_18975__$1 = (function (){var statearr_18980 = state_18975;(statearr_18980[(7)] = inst_18910__$1);
return statearr_18980;
})();if(cljs.core.truth_(inst_18911))
{var statearr_18981_19023 = state_18975__$1;(statearr_18981_19023[(1)] = (5));
} else
{var statearr_18982_19024 = state_18975__$1;(statearr_18982_19024[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (15)))
{var inst_18952 = (state_18975[(2)]);var state_18975__$1 = state_18975;var statearr_18983_19025 = state_18975__$1;(statearr_18983_19025[(2)] = inst_18952);
(statearr_18983_19025[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (21)))
{var inst_18958 = (state_18975[(8)]);var inst_18966 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18958);var state_18975__$1 = state_18975;var statearr_18984_19026 = state_18975__$1;(statearr_18984_19026[(2)] = inst_18966);
(statearr_18984_19026[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (13)))
{var inst_18934 = (state_18975[(9)]);var inst_18936 = cljs.core.chunked_seq_QMARK_.call(null,inst_18934);var state_18975__$1 = state_18975;if(inst_18936)
{var statearr_18985_19027 = state_18975__$1;(statearr_18985_19027[(1)] = (16));
} else
{var statearr_18986_19028 = state_18975__$1;(statearr_18986_19028[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (22)))
{var inst_18968 = (state_18975[(2)]);var state_18975__$1 = (function (){var statearr_18987 = state_18975;(statearr_18987[(10)] = inst_18968);
return statearr_18987;
})();var statearr_18988_19029 = state_18975__$1;(statearr_18988_19029[(2)] = null);
(statearr_18988_19029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (6)))
{var inst_18958 = (state_18975[(8)]);var inst_18910 = (state_18975[(7)]);var inst_18958__$1 = topic_fn.call(null,inst_18910);var inst_18959 = cljs.core.deref.call(null,mults);var inst_18960 = cljs.core.get.call(null,inst_18959,inst_18958__$1);var inst_18961 = cljs.core.async.muxch_STAR_.call(null,inst_18960);var state_18975__$1 = (function (){var statearr_18989 = state_18975;(statearr_18989[(8)] = inst_18958__$1);
return statearr_18989;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18975__$1,(19),inst_18961,inst_18910);
} else
{if((state_val_18976 === (17)))
{var inst_18934 = (state_18975[(9)]);var inst_18943 = cljs.core.first.call(null,inst_18934);var inst_18944 = cljs.core.async.muxch_STAR_.call(null,inst_18943);var inst_18945 = cljs.core.async.close_BANG_.call(null,inst_18944);var inst_18946 = cljs.core.next.call(null,inst_18934);var inst_18920 = inst_18946;var inst_18921 = null;var inst_18922 = (0);var inst_18923 = (0);var state_18975__$1 = (function (){var statearr_18990 = state_18975;(statearr_18990[(11)] = inst_18922);
(statearr_18990[(12)] = inst_18945);
(statearr_18990[(13)] = inst_18923);
(statearr_18990[(14)] = inst_18920);
(statearr_18990[(15)] = inst_18921);
return statearr_18990;
})();var statearr_18991_19030 = state_18975__$1;(statearr_18991_19030[(2)] = null);
(statearr_18991_19030[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (3)))
{var inst_18973 = (state_18975[(2)]);var state_18975__$1 = state_18975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18975__$1,inst_18973);
} else
{if((state_val_18976 === (12)))
{var inst_18954 = (state_18975[(2)]);var state_18975__$1 = state_18975;var statearr_18992_19031 = state_18975__$1;(statearr_18992_19031[(2)] = inst_18954);
(statearr_18992_19031[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (2)))
{var state_18975__$1 = state_18975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18975__$1,(4),ch);
} else
{if((state_val_18976 === (19)))
{var inst_18963 = (state_18975[(2)]);var state_18975__$1 = state_18975;if(cljs.core.truth_(inst_18963))
{var statearr_18993_19032 = state_18975__$1;(statearr_18993_19032[(1)] = (20));
} else
{var statearr_18994_19033 = state_18975__$1;(statearr_18994_19033[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (11)))
{var inst_18920 = (state_18975[(14)]);var inst_18934 = (state_18975[(9)]);var inst_18934__$1 = cljs.core.seq.call(null,inst_18920);var state_18975__$1 = (function (){var statearr_18995 = state_18975;(statearr_18995[(9)] = inst_18934__$1);
return statearr_18995;
})();if(inst_18934__$1)
{var statearr_18996_19034 = state_18975__$1;(statearr_18996_19034[(1)] = (13));
} else
{var statearr_18997_19035 = state_18975__$1;(statearr_18997_19035[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (9)))
{var inst_18956 = (state_18975[(2)]);var state_18975__$1 = state_18975;var statearr_18998_19036 = state_18975__$1;(statearr_18998_19036[(2)] = inst_18956);
(statearr_18998_19036[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (5)))
{var inst_18917 = cljs.core.deref.call(null,mults);var inst_18918 = cljs.core.vals.call(null,inst_18917);var inst_18919 = cljs.core.seq.call(null,inst_18918);var inst_18920 = inst_18919;var inst_18921 = null;var inst_18922 = (0);var inst_18923 = (0);var state_18975__$1 = (function (){var statearr_18999 = state_18975;(statearr_18999[(11)] = inst_18922);
(statearr_18999[(13)] = inst_18923);
(statearr_18999[(14)] = inst_18920);
(statearr_18999[(15)] = inst_18921);
return statearr_18999;
})();var statearr_19000_19037 = state_18975__$1;(statearr_19000_19037[(2)] = null);
(statearr_19000_19037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (14)))
{var state_18975__$1 = state_18975;var statearr_19004_19038 = state_18975__$1;(statearr_19004_19038[(2)] = null);
(statearr_19004_19038[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (16)))
{var inst_18934 = (state_18975[(9)]);var inst_18938 = cljs.core.chunk_first.call(null,inst_18934);var inst_18939 = cljs.core.chunk_rest.call(null,inst_18934);var inst_18940 = cljs.core.count.call(null,inst_18938);var inst_18920 = inst_18939;var inst_18921 = inst_18938;var inst_18922 = inst_18940;var inst_18923 = (0);var state_18975__$1 = (function (){var statearr_19005 = state_18975;(statearr_19005[(11)] = inst_18922);
(statearr_19005[(13)] = inst_18923);
(statearr_19005[(14)] = inst_18920);
(statearr_19005[(15)] = inst_18921);
return statearr_19005;
})();var statearr_19006_19039 = state_18975__$1;(statearr_19006_19039[(2)] = null);
(statearr_19006_19039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (10)))
{var inst_18922 = (state_18975[(11)]);var inst_18923 = (state_18975[(13)]);var inst_18920 = (state_18975[(14)]);var inst_18921 = (state_18975[(15)]);var inst_18928 = cljs.core._nth.call(null,inst_18921,inst_18923);var inst_18929 = cljs.core.async.muxch_STAR_.call(null,inst_18928);var inst_18930 = cljs.core.async.close_BANG_.call(null,inst_18929);var inst_18931 = (inst_18923 + (1));var tmp19001 = inst_18922;var tmp19002 = inst_18920;var tmp19003 = inst_18921;var inst_18920__$1 = tmp19002;var inst_18921__$1 = tmp19003;var inst_18922__$1 = tmp19001;var inst_18923__$1 = inst_18931;var state_18975__$1 = (function (){var statearr_19007 = state_18975;(statearr_19007[(11)] = inst_18922__$1);
(statearr_19007[(13)] = inst_18923__$1);
(statearr_19007[(14)] = inst_18920__$1);
(statearr_19007[(16)] = inst_18930);
(statearr_19007[(15)] = inst_18921__$1);
return statearr_19007;
})();var statearr_19008_19040 = state_18975__$1;(statearr_19008_19040[(2)] = null);
(statearr_19008_19040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (18)))
{var inst_18949 = (state_18975[(2)]);var state_18975__$1 = state_18975;var statearr_19009_19041 = state_18975__$1;(statearr_19009_19041[(2)] = inst_18949);
(statearr_19009_19041[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18976 === (8)))
{var inst_18922 = (state_18975[(11)]);var inst_18923 = (state_18975[(13)]);var inst_18925 = (inst_18923 < inst_18922);var inst_18926 = inst_18925;var state_18975__$1 = state_18975;if(cljs.core.truth_(inst_18926))
{var statearr_19010_19042 = state_18975__$1;(statearr_19010_19042[(1)] = (10));
} else
{var statearr_19011_19043 = state_18975__$1;(statearr_19011_19043[(1)] = (11));
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
});})(c__6891__auto___19019,mults,ensure_mult,p))
;return ((function (switch__6876__auto__,c__6891__auto___19019,mults,ensure_mult,p){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_19015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19015[(0)] = state_machine__6877__auto__);
(statearr_19015[(1)] = (1));
return statearr_19015;
});
var state_machine__6877__auto____1 = (function (state_18975){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_18975);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e19016){if((e19016 instanceof Object))
{var ex__6880__auto__ = e19016;var statearr_19017_19044 = state_18975;(statearr_19017_19044[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19016;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19045 = state_18975;
state_18975 = G__19045;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_18975){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_18975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___19019,mults,ensure_mult,p))
})();var state__6893__auto__ = (function (){var statearr_19018 = f__6892__auto__.call(null);(statearr_19018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___19019);
return statearr_19018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___19019,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6891__auto___19182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___19182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___19182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19152){var state_val_19153 = (state_19152[(1)]);if((state_val_19153 === (7)))
{var state_19152__$1 = state_19152;var statearr_19154_19183 = state_19152__$1;(statearr_19154_19183[(2)] = null);
(statearr_19154_19183[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (1)))
{var state_19152__$1 = state_19152;var statearr_19155_19184 = state_19152__$1;(statearr_19155_19184[(2)] = null);
(statearr_19155_19184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (4)))
{var inst_19116 = (state_19152[(7)]);var inst_19118 = (inst_19116 < cnt);var state_19152__$1 = state_19152;if(cljs.core.truth_(inst_19118))
{var statearr_19156_19185 = state_19152__$1;(statearr_19156_19185[(1)] = (6));
} else
{var statearr_19157_19186 = state_19152__$1;(statearr_19157_19186[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (15)))
{var inst_19148 = (state_19152[(2)]);var state_19152__$1 = state_19152;var statearr_19158_19187 = state_19152__$1;(statearr_19158_19187[(2)] = inst_19148);
(statearr_19158_19187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (13)))
{var inst_19141 = cljs.core.async.close_BANG_.call(null,out);var state_19152__$1 = state_19152;var statearr_19159_19188 = state_19152__$1;(statearr_19159_19188[(2)] = inst_19141);
(statearr_19159_19188[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (6)))
{var state_19152__$1 = state_19152;var statearr_19160_19189 = state_19152__$1;(statearr_19160_19189[(2)] = null);
(statearr_19160_19189[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (3)))
{var inst_19150 = (state_19152[(2)]);var state_19152__$1 = state_19152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19152__$1,inst_19150);
} else
{if((state_val_19153 === (12)))
{var inst_19138 = (state_19152[(8)]);var inst_19138__$1 = (state_19152[(2)]);var inst_19139 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19138__$1);var state_19152__$1 = (function (){var statearr_19161 = state_19152;(statearr_19161[(8)] = inst_19138__$1);
return statearr_19161;
})();if(cljs.core.truth_(inst_19139))
{var statearr_19162_19190 = state_19152__$1;(statearr_19162_19190[(1)] = (13));
} else
{var statearr_19163_19191 = state_19152__$1;(statearr_19163_19191[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (2)))
{var inst_19115 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19116 = (0);var state_19152__$1 = (function (){var statearr_19164 = state_19152;(statearr_19164[(7)] = inst_19116);
(statearr_19164[(9)] = inst_19115);
return statearr_19164;
})();var statearr_19165_19192 = state_19152__$1;(statearr_19165_19192[(2)] = null);
(statearr_19165_19192[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (11)))
{var inst_19116 = (state_19152[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19152,(10),Object,null,(9));var inst_19125 = chs__$1.call(null,inst_19116);var inst_19126 = done.call(null,inst_19116);var inst_19127 = cljs.core.async.take_BANG_.call(null,inst_19125,inst_19126);var state_19152__$1 = state_19152;var statearr_19166_19193 = state_19152__$1;(statearr_19166_19193[(2)] = inst_19127);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19152__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (9)))
{var inst_19116 = (state_19152[(7)]);var inst_19129 = (state_19152[(2)]);var inst_19130 = (inst_19116 + (1));var inst_19116__$1 = inst_19130;var state_19152__$1 = (function (){var statearr_19167 = state_19152;(statearr_19167[(10)] = inst_19129);
(statearr_19167[(7)] = inst_19116__$1);
return statearr_19167;
})();var statearr_19168_19194 = state_19152__$1;(statearr_19168_19194[(2)] = null);
(statearr_19168_19194[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (5)))
{var inst_19136 = (state_19152[(2)]);var state_19152__$1 = (function (){var statearr_19169 = state_19152;(statearr_19169[(11)] = inst_19136);
return statearr_19169;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19152__$1,(12),dchan);
} else
{if((state_val_19153 === (14)))
{var inst_19138 = (state_19152[(8)]);var inst_19143 = cljs.core.apply.call(null,f,inst_19138);var state_19152__$1 = state_19152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19152__$1,(16),out,inst_19143);
} else
{if((state_val_19153 === (16)))
{var inst_19145 = (state_19152[(2)]);var state_19152__$1 = (function (){var statearr_19170 = state_19152;(statearr_19170[(12)] = inst_19145);
return statearr_19170;
})();var statearr_19171_19195 = state_19152__$1;(statearr_19171_19195[(2)] = null);
(statearr_19171_19195[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (10)))
{var inst_19120 = (state_19152[(2)]);var inst_19121 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19152__$1 = (function (){var statearr_19172 = state_19152;(statearr_19172[(13)] = inst_19120);
return statearr_19172;
})();var statearr_19173_19196 = state_19152__$1;(statearr_19173_19196[(2)] = inst_19121);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19152__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (8)))
{var inst_19134 = (state_19152[(2)]);var state_19152__$1 = state_19152;var statearr_19174_19197 = state_19152__$1;(statearr_19174_19197[(2)] = inst_19134);
(statearr_19174_19197[(1)] = (5));
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
});})(c__6891__auto___19182,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6876__auto__,c__6891__auto___19182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_19178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19178[(0)] = state_machine__6877__auto__);
(statearr_19178[(1)] = (1));
return statearr_19178;
});
var state_machine__6877__auto____1 = (function (state_19152){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_19152);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e19179){if((e19179 instanceof Object))
{var ex__6880__auto__ = e19179;var statearr_19180_19198 = state_19152;(statearr_19180_19198[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19199 = state_19152;
state_19152 = G__19199;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_19152){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_19152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___19182,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6893__auto__ = (function (){var statearr_19181 = f__6892__auto__.call(null);(statearr_19181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___19182);
return statearr_19181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___19182,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___19307 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___19307,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___19307,out){
return (function (state_19283){var state_val_19284 = (state_19283[(1)]);if((state_val_19284 === (7)))
{var inst_19263 = (state_19283[(7)]);var inst_19262 = (state_19283[(8)]);var inst_19262__$1 = (state_19283[(2)]);var inst_19263__$1 = cljs.core.nth.call(null,inst_19262__$1,(0),null);var inst_19264 = cljs.core.nth.call(null,inst_19262__$1,(1),null);var inst_19265 = (inst_19263__$1 == null);var state_19283__$1 = (function (){var statearr_19285 = state_19283;(statearr_19285[(9)] = inst_19264);
(statearr_19285[(7)] = inst_19263__$1);
(statearr_19285[(8)] = inst_19262__$1);
return statearr_19285;
})();if(cljs.core.truth_(inst_19265))
{var statearr_19286_19308 = state_19283__$1;(statearr_19286_19308[(1)] = (8));
} else
{var statearr_19287_19309 = state_19283__$1;(statearr_19287_19309[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19284 === (1)))
{var inst_19254 = cljs.core.vec.call(null,chs);var inst_19255 = inst_19254;var state_19283__$1 = (function (){var statearr_19288 = state_19283;(statearr_19288[(10)] = inst_19255);
return statearr_19288;
})();var statearr_19289_19310 = state_19283__$1;(statearr_19289_19310[(2)] = null);
(statearr_19289_19310[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19284 === (4)))
{var inst_19255 = (state_19283[(10)]);var state_19283__$1 = state_19283;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19283__$1,(7),inst_19255);
} else
{if((state_val_19284 === (6)))
{var inst_19279 = (state_19283[(2)]);var state_19283__$1 = state_19283;var statearr_19290_19311 = state_19283__$1;(statearr_19290_19311[(2)] = inst_19279);
(statearr_19290_19311[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19284 === (3)))
{var inst_19281 = (state_19283[(2)]);var state_19283__$1 = state_19283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19283__$1,inst_19281);
} else
{if((state_val_19284 === (2)))
{var inst_19255 = (state_19283[(10)]);var inst_19257 = cljs.core.count.call(null,inst_19255);var inst_19258 = (inst_19257 > (0));var state_19283__$1 = state_19283;if(cljs.core.truth_(inst_19258))
{var statearr_19292_19312 = state_19283__$1;(statearr_19292_19312[(1)] = (4));
} else
{var statearr_19293_19313 = state_19283__$1;(statearr_19293_19313[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19284 === (11)))
{var inst_19255 = (state_19283[(10)]);var inst_19272 = (state_19283[(2)]);var tmp19291 = inst_19255;var inst_19255__$1 = tmp19291;var state_19283__$1 = (function (){var statearr_19294 = state_19283;(statearr_19294[(10)] = inst_19255__$1);
(statearr_19294[(11)] = inst_19272);
return statearr_19294;
})();var statearr_19295_19314 = state_19283__$1;(statearr_19295_19314[(2)] = null);
(statearr_19295_19314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19284 === (9)))
{var inst_19263 = (state_19283[(7)]);var state_19283__$1 = state_19283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19283__$1,(11),out,inst_19263);
} else
{if((state_val_19284 === (5)))
{var inst_19277 = cljs.core.async.close_BANG_.call(null,out);var state_19283__$1 = state_19283;var statearr_19296_19315 = state_19283__$1;(statearr_19296_19315[(2)] = inst_19277);
(statearr_19296_19315[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19284 === (10)))
{var inst_19275 = (state_19283[(2)]);var state_19283__$1 = state_19283;var statearr_19297_19316 = state_19283__$1;(statearr_19297_19316[(2)] = inst_19275);
(statearr_19297_19316[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19284 === (8)))
{var inst_19264 = (state_19283[(9)]);var inst_19255 = (state_19283[(10)]);var inst_19263 = (state_19283[(7)]);var inst_19262 = (state_19283[(8)]);var inst_19267 = (function (){var c = inst_19264;var v = inst_19263;var vec__19260 = inst_19262;var cs = inst_19255;return ((function (c,v,vec__19260,cs,inst_19264,inst_19255,inst_19263,inst_19262,state_val_19284,c__6891__auto___19307,out){
return (function (p1__19200_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19200_SHARP_);
});
;})(c,v,vec__19260,cs,inst_19264,inst_19255,inst_19263,inst_19262,state_val_19284,c__6891__auto___19307,out))
})();var inst_19268 = cljs.core.filterv.call(null,inst_19267,inst_19255);var inst_19255__$1 = inst_19268;var state_19283__$1 = (function (){var statearr_19298 = state_19283;(statearr_19298[(10)] = inst_19255__$1);
return statearr_19298;
})();var statearr_19299_19317 = state_19283__$1;(statearr_19299_19317[(2)] = null);
(statearr_19299_19317[(1)] = (2));
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
});})(c__6891__auto___19307,out))
;return ((function (switch__6876__auto__,c__6891__auto___19307,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_19303 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19303[(0)] = state_machine__6877__auto__);
(statearr_19303[(1)] = (1));
return statearr_19303;
});
var state_machine__6877__auto____1 = (function (state_19283){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_19283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e19304){if((e19304 instanceof Object))
{var ex__6880__auto__ = e19304;var statearr_19305_19318 = state_19283;(statearr_19305_19318[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19304;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19319 = state_19283;
state_19283 = G__19319;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_19283){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_19283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___19307,out))
})();var state__6893__auto__ = (function (){var statearr_19306 = f__6892__auto__.call(null);(statearr_19306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___19307);
return statearr_19306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___19307,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___19412 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___19412,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___19412,out){
return (function (state_19389){var state_val_19390 = (state_19389[(1)]);if((state_val_19390 === (7)))
{var inst_19371 = (state_19389[(7)]);var inst_19371__$1 = (state_19389[(2)]);var inst_19372 = (inst_19371__$1 == null);var inst_19373 = cljs.core.not.call(null,inst_19372);var state_19389__$1 = (function (){var statearr_19391 = state_19389;(statearr_19391[(7)] = inst_19371__$1);
return statearr_19391;
})();if(inst_19373)
{var statearr_19392_19413 = state_19389__$1;(statearr_19392_19413[(1)] = (8));
} else
{var statearr_19393_19414 = state_19389__$1;(statearr_19393_19414[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19390 === (1)))
{var inst_19366 = (0);var state_19389__$1 = (function (){var statearr_19394 = state_19389;(statearr_19394[(8)] = inst_19366);
return statearr_19394;
})();var statearr_19395_19415 = state_19389__$1;(statearr_19395_19415[(2)] = null);
(statearr_19395_19415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19390 === (4)))
{var state_19389__$1 = state_19389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19389__$1,(7),ch);
} else
{if((state_val_19390 === (6)))
{var inst_19384 = (state_19389[(2)]);var state_19389__$1 = state_19389;var statearr_19396_19416 = state_19389__$1;(statearr_19396_19416[(2)] = inst_19384);
(statearr_19396_19416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19390 === (3)))
{var inst_19386 = (state_19389[(2)]);var inst_19387 = cljs.core.async.close_BANG_.call(null,out);var state_19389__$1 = (function (){var statearr_19397 = state_19389;(statearr_19397[(9)] = inst_19386);
return statearr_19397;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19389__$1,inst_19387);
} else
{if((state_val_19390 === (2)))
{var inst_19366 = (state_19389[(8)]);var inst_19368 = (inst_19366 < n);var state_19389__$1 = state_19389;if(cljs.core.truth_(inst_19368))
{var statearr_19398_19417 = state_19389__$1;(statearr_19398_19417[(1)] = (4));
} else
{var statearr_19399_19418 = state_19389__$1;(statearr_19399_19418[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19390 === (11)))
{var inst_19366 = (state_19389[(8)]);var inst_19376 = (state_19389[(2)]);var inst_19377 = (inst_19366 + (1));var inst_19366__$1 = inst_19377;var state_19389__$1 = (function (){var statearr_19400 = state_19389;(statearr_19400[(10)] = inst_19376);
(statearr_19400[(8)] = inst_19366__$1);
return statearr_19400;
})();var statearr_19401_19419 = state_19389__$1;(statearr_19401_19419[(2)] = null);
(statearr_19401_19419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19390 === (9)))
{var state_19389__$1 = state_19389;var statearr_19402_19420 = state_19389__$1;(statearr_19402_19420[(2)] = null);
(statearr_19402_19420[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19390 === (5)))
{var state_19389__$1 = state_19389;var statearr_19403_19421 = state_19389__$1;(statearr_19403_19421[(2)] = null);
(statearr_19403_19421[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19390 === (10)))
{var inst_19381 = (state_19389[(2)]);var state_19389__$1 = state_19389;var statearr_19404_19422 = state_19389__$1;(statearr_19404_19422[(2)] = inst_19381);
(statearr_19404_19422[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19390 === (8)))
{var inst_19371 = (state_19389[(7)]);var state_19389__$1 = state_19389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19389__$1,(11),out,inst_19371);
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
});})(c__6891__auto___19412,out))
;return ((function (switch__6876__auto__,c__6891__auto___19412,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_19408 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19408[(0)] = state_machine__6877__auto__);
(statearr_19408[(1)] = (1));
return statearr_19408;
});
var state_machine__6877__auto____1 = (function (state_19389){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_19389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e19409){if((e19409 instanceof Object))
{var ex__6880__auto__ = e19409;var statearr_19410_19423 = state_19389;(statearr_19410_19423[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19409;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19424 = state_19389;
state_19389 = G__19424;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_19389){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_19389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___19412,out))
})();var state__6893__auto__ = (function (){var statearr_19411 = f__6892__auto__.call(null);(statearr_19411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___19412);
return statearr_19411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___19412,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___19521 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___19521,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___19521,out){
return (function (state_19496){var state_val_19497 = (state_19496[(1)]);if((state_val_19497 === (7)))
{var inst_19491 = (state_19496[(2)]);var state_19496__$1 = state_19496;var statearr_19498_19522 = state_19496__$1;(statearr_19498_19522[(2)] = inst_19491);
(statearr_19498_19522[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19497 === (1)))
{var inst_19473 = null;var state_19496__$1 = (function (){var statearr_19499 = state_19496;(statearr_19499[(7)] = inst_19473);
return statearr_19499;
})();var statearr_19500_19523 = state_19496__$1;(statearr_19500_19523[(2)] = null);
(statearr_19500_19523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19497 === (4)))
{var inst_19476 = (state_19496[(8)]);var inst_19476__$1 = (state_19496[(2)]);var inst_19477 = (inst_19476__$1 == null);var inst_19478 = cljs.core.not.call(null,inst_19477);var state_19496__$1 = (function (){var statearr_19501 = state_19496;(statearr_19501[(8)] = inst_19476__$1);
return statearr_19501;
})();if(inst_19478)
{var statearr_19502_19524 = state_19496__$1;(statearr_19502_19524[(1)] = (5));
} else
{var statearr_19503_19525 = state_19496__$1;(statearr_19503_19525[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19497 === (6)))
{var state_19496__$1 = state_19496;var statearr_19504_19526 = state_19496__$1;(statearr_19504_19526[(2)] = null);
(statearr_19504_19526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19497 === (3)))
{var inst_19493 = (state_19496[(2)]);var inst_19494 = cljs.core.async.close_BANG_.call(null,out);var state_19496__$1 = (function (){var statearr_19505 = state_19496;(statearr_19505[(9)] = inst_19493);
return statearr_19505;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19496__$1,inst_19494);
} else
{if((state_val_19497 === (2)))
{var state_19496__$1 = state_19496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19496__$1,(4),ch);
} else
{if((state_val_19497 === (11)))
{var inst_19476 = (state_19496[(8)]);var inst_19485 = (state_19496[(2)]);var inst_19473 = inst_19476;var state_19496__$1 = (function (){var statearr_19506 = state_19496;(statearr_19506[(7)] = inst_19473);
(statearr_19506[(10)] = inst_19485);
return statearr_19506;
})();var statearr_19507_19527 = state_19496__$1;(statearr_19507_19527[(2)] = null);
(statearr_19507_19527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19497 === (9)))
{var inst_19476 = (state_19496[(8)]);var state_19496__$1 = state_19496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19496__$1,(11),out,inst_19476);
} else
{if((state_val_19497 === (5)))
{var inst_19476 = (state_19496[(8)]);var inst_19473 = (state_19496[(7)]);var inst_19480 = cljs.core._EQ_.call(null,inst_19476,inst_19473);var state_19496__$1 = state_19496;if(inst_19480)
{var statearr_19509_19528 = state_19496__$1;(statearr_19509_19528[(1)] = (8));
} else
{var statearr_19510_19529 = state_19496__$1;(statearr_19510_19529[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19497 === (10)))
{var inst_19488 = (state_19496[(2)]);var state_19496__$1 = state_19496;var statearr_19511_19530 = state_19496__$1;(statearr_19511_19530[(2)] = inst_19488);
(statearr_19511_19530[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19497 === (8)))
{var inst_19473 = (state_19496[(7)]);var tmp19508 = inst_19473;var inst_19473__$1 = tmp19508;var state_19496__$1 = (function (){var statearr_19512 = state_19496;(statearr_19512[(7)] = inst_19473__$1);
return statearr_19512;
})();var statearr_19513_19531 = state_19496__$1;(statearr_19513_19531[(2)] = null);
(statearr_19513_19531[(1)] = (2));
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
});})(c__6891__auto___19521,out))
;return ((function (switch__6876__auto__,c__6891__auto___19521,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_19517 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19517[(0)] = state_machine__6877__auto__);
(statearr_19517[(1)] = (1));
return statearr_19517;
});
var state_machine__6877__auto____1 = (function (state_19496){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_19496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e19518){if((e19518 instanceof Object))
{var ex__6880__auto__ = e19518;var statearr_19519_19532 = state_19496;(statearr_19519_19532[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19518;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19533 = state_19496;
state_19496 = G__19533;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_19496){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_19496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___19521,out))
})();var state__6893__auto__ = (function (){var statearr_19520 = f__6892__auto__.call(null);(statearr_19520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___19521);
return statearr_19520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___19521,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___19668 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___19668,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___19668,out){
return (function (state_19638){var state_val_19639 = (state_19638[(1)]);if((state_val_19639 === (7)))
{var inst_19634 = (state_19638[(2)]);var state_19638__$1 = state_19638;var statearr_19640_19669 = state_19638__$1;(statearr_19640_19669[(2)] = inst_19634);
(statearr_19640_19669[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (1)))
{var inst_19601 = (new Array(n));var inst_19602 = inst_19601;var inst_19603 = (0);var state_19638__$1 = (function (){var statearr_19641 = state_19638;(statearr_19641[(7)] = inst_19603);
(statearr_19641[(8)] = inst_19602);
return statearr_19641;
})();var statearr_19642_19670 = state_19638__$1;(statearr_19642_19670[(2)] = null);
(statearr_19642_19670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (4)))
{var inst_19606 = (state_19638[(9)]);var inst_19606__$1 = (state_19638[(2)]);var inst_19607 = (inst_19606__$1 == null);var inst_19608 = cljs.core.not.call(null,inst_19607);var state_19638__$1 = (function (){var statearr_19643 = state_19638;(statearr_19643[(9)] = inst_19606__$1);
return statearr_19643;
})();if(inst_19608)
{var statearr_19644_19671 = state_19638__$1;(statearr_19644_19671[(1)] = (5));
} else
{var statearr_19645_19672 = state_19638__$1;(statearr_19645_19672[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (15)))
{var inst_19628 = (state_19638[(2)]);var state_19638__$1 = state_19638;var statearr_19646_19673 = state_19638__$1;(statearr_19646_19673[(2)] = inst_19628);
(statearr_19646_19673[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (13)))
{var state_19638__$1 = state_19638;var statearr_19647_19674 = state_19638__$1;(statearr_19647_19674[(2)] = null);
(statearr_19647_19674[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (6)))
{var inst_19603 = (state_19638[(7)]);var inst_19624 = (inst_19603 > (0));var state_19638__$1 = state_19638;if(cljs.core.truth_(inst_19624))
{var statearr_19648_19675 = state_19638__$1;(statearr_19648_19675[(1)] = (12));
} else
{var statearr_19649_19676 = state_19638__$1;(statearr_19649_19676[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (3)))
{var inst_19636 = (state_19638[(2)]);var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19638__$1,inst_19636);
} else
{if((state_val_19639 === (12)))
{var inst_19602 = (state_19638[(8)]);var inst_19626 = cljs.core.vec.call(null,inst_19602);var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19638__$1,(15),out,inst_19626);
} else
{if((state_val_19639 === (2)))
{var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19638__$1,(4),ch);
} else
{if((state_val_19639 === (11)))
{var inst_19618 = (state_19638[(2)]);var inst_19619 = (new Array(n));var inst_19602 = inst_19619;var inst_19603 = (0);var state_19638__$1 = (function (){var statearr_19650 = state_19638;(statearr_19650[(7)] = inst_19603);
(statearr_19650[(8)] = inst_19602);
(statearr_19650[(10)] = inst_19618);
return statearr_19650;
})();var statearr_19651_19677 = state_19638__$1;(statearr_19651_19677[(2)] = null);
(statearr_19651_19677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (9)))
{var inst_19602 = (state_19638[(8)]);var inst_19616 = cljs.core.vec.call(null,inst_19602);var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19638__$1,(11),out,inst_19616);
} else
{if((state_val_19639 === (5)))
{var inst_19603 = (state_19638[(7)]);var inst_19606 = (state_19638[(9)]);var inst_19602 = (state_19638[(8)]);var inst_19611 = (state_19638[(11)]);var inst_19610 = (inst_19602[inst_19603] = inst_19606);var inst_19611__$1 = (inst_19603 + (1));var inst_19612 = (inst_19611__$1 < n);var state_19638__$1 = (function (){var statearr_19652 = state_19638;(statearr_19652[(12)] = inst_19610);
(statearr_19652[(11)] = inst_19611__$1);
return statearr_19652;
})();if(cljs.core.truth_(inst_19612))
{var statearr_19653_19678 = state_19638__$1;(statearr_19653_19678[(1)] = (8));
} else
{var statearr_19654_19679 = state_19638__$1;(statearr_19654_19679[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (14)))
{var inst_19631 = (state_19638[(2)]);var inst_19632 = cljs.core.async.close_BANG_.call(null,out);var state_19638__$1 = (function (){var statearr_19656 = state_19638;(statearr_19656[(13)] = inst_19631);
return statearr_19656;
})();var statearr_19657_19680 = state_19638__$1;(statearr_19657_19680[(2)] = inst_19632);
(statearr_19657_19680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (10)))
{var inst_19622 = (state_19638[(2)]);var state_19638__$1 = state_19638;var statearr_19658_19681 = state_19638__$1;(statearr_19658_19681[(2)] = inst_19622);
(statearr_19658_19681[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (8)))
{var inst_19602 = (state_19638[(8)]);var inst_19611 = (state_19638[(11)]);var tmp19655 = inst_19602;var inst_19602__$1 = tmp19655;var inst_19603 = inst_19611;var state_19638__$1 = (function (){var statearr_19659 = state_19638;(statearr_19659[(7)] = inst_19603);
(statearr_19659[(8)] = inst_19602__$1);
return statearr_19659;
})();var statearr_19660_19682 = state_19638__$1;(statearr_19660_19682[(2)] = null);
(statearr_19660_19682[(1)] = (2));
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
});})(c__6891__auto___19668,out))
;return ((function (switch__6876__auto__,c__6891__auto___19668,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_19664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19664[(0)] = state_machine__6877__auto__);
(statearr_19664[(1)] = (1));
return statearr_19664;
});
var state_machine__6877__auto____1 = (function (state_19638){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_19638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e19665){if((e19665 instanceof Object))
{var ex__6880__auto__ = e19665;var statearr_19666_19683 = state_19638;(statearr_19666_19683[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19665;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19684 = state_19638;
state_19638 = G__19684;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_19638){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_19638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___19668,out))
})();var state__6893__auto__ = (function (){var statearr_19667 = f__6892__auto__.call(null);(statearr_19667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___19668);
return statearr_19667;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___19668,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6891__auto___19827 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___19827,out){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___19827,out){
return (function (state_19797){var state_val_19798 = (state_19797[(1)]);if((state_val_19798 === (7)))
{var inst_19793 = (state_19797[(2)]);var state_19797__$1 = state_19797;var statearr_19799_19828 = state_19797__$1;(statearr_19799_19828[(2)] = inst_19793);
(statearr_19799_19828[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (1)))
{var inst_19756 = [];var inst_19757 = inst_19756;var inst_19758 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19797__$1 = (function (){var statearr_19800 = state_19797;(statearr_19800[(7)] = inst_19757);
(statearr_19800[(8)] = inst_19758);
return statearr_19800;
})();var statearr_19801_19829 = state_19797__$1;(statearr_19801_19829[(2)] = null);
(statearr_19801_19829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (4)))
{var inst_19761 = (state_19797[(9)]);var inst_19761__$1 = (state_19797[(2)]);var inst_19762 = (inst_19761__$1 == null);var inst_19763 = cljs.core.not.call(null,inst_19762);var state_19797__$1 = (function (){var statearr_19802 = state_19797;(statearr_19802[(9)] = inst_19761__$1);
return statearr_19802;
})();if(inst_19763)
{var statearr_19803_19830 = state_19797__$1;(statearr_19803_19830[(1)] = (5));
} else
{var statearr_19804_19831 = state_19797__$1;(statearr_19804_19831[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (15)))
{var inst_19787 = (state_19797[(2)]);var state_19797__$1 = state_19797;var statearr_19805_19832 = state_19797__$1;(statearr_19805_19832[(2)] = inst_19787);
(statearr_19805_19832[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (13)))
{var state_19797__$1 = state_19797;var statearr_19806_19833 = state_19797__$1;(statearr_19806_19833[(2)] = null);
(statearr_19806_19833[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (6)))
{var inst_19757 = (state_19797[(7)]);var inst_19782 = inst_19757.length;var inst_19783 = (inst_19782 > (0));var state_19797__$1 = state_19797;if(cljs.core.truth_(inst_19783))
{var statearr_19807_19834 = state_19797__$1;(statearr_19807_19834[(1)] = (12));
} else
{var statearr_19808_19835 = state_19797__$1;(statearr_19808_19835[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (3)))
{var inst_19795 = (state_19797[(2)]);var state_19797__$1 = state_19797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19797__$1,inst_19795);
} else
{if((state_val_19798 === (12)))
{var inst_19757 = (state_19797[(7)]);var inst_19785 = cljs.core.vec.call(null,inst_19757);var state_19797__$1 = state_19797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19797__$1,(15),out,inst_19785);
} else
{if((state_val_19798 === (2)))
{var state_19797__$1 = state_19797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19797__$1,(4),ch);
} else
{if((state_val_19798 === (11)))
{var inst_19761 = (state_19797[(9)]);var inst_19765 = (state_19797[(10)]);var inst_19775 = (state_19797[(2)]);var inst_19776 = [];var inst_19777 = inst_19776.push(inst_19761);var inst_19757 = inst_19776;var inst_19758 = inst_19765;var state_19797__$1 = (function (){var statearr_19809 = state_19797;(statearr_19809[(7)] = inst_19757);
(statearr_19809[(8)] = inst_19758);
(statearr_19809[(11)] = inst_19775);
(statearr_19809[(12)] = inst_19777);
return statearr_19809;
})();var statearr_19810_19836 = state_19797__$1;(statearr_19810_19836[(2)] = null);
(statearr_19810_19836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (9)))
{var inst_19757 = (state_19797[(7)]);var inst_19773 = cljs.core.vec.call(null,inst_19757);var state_19797__$1 = state_19797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19797__$1,(11),out,inst_19773);
} else
{if((state_val_19798 === (5)))
{var inst_19761 = (state_19797[(9)]);var inst_19765 = (state_19797[(10)]);var inst_19758 = (state_19797[(8)]);var inst_19765__$1 = f.call(null,inst_19761);var inst_19766 = cljs.core._EQ_.call(null,inst_19765__$1,inst_19758);var inst_19767 = cljs.core.keyword_identical_QMARK_.call(null,inst_19758,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19768 = (inst_19766) || (inst_19767);var state_19797__$1 = (function (){var statearr_19811 = state_19797;(statearr_19811[(10)] = inst_19765__$1);
return statearr_19811;
})();if(cljs.core.truth_(inst_19768))
{var statearr_19812_19837 = state_19797__$1;(statearr_19812_19837[(1)] = (8));
} else
{var statearr_19813_19838 = state_19797__$1;(statearr_19813_19838[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (14)))
{var inst_19790 = (state_19797[(2)]);var inst_19791 = cljs.core.async.close_BANG_.call(null,out);var state_19797__$1 = (function (){var statearr_19815 = state_19797;(statearr_19815[(13)] = inst_19790);
return statearr_19815;
})();var statearr_19816_19839 = state_19797__$1;(statearr_19816_19839[(2)] = inst_19791);
(statearr_19816_19839[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (10)))
{var inst_19780 = (state_19797[(2)]);var state_19797__$1 = state_19797;var statearr_19817_19840 = state_19797__$1;(statearr_19817_19840[(2)] = inst_19780);
(statearr_19817_19840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19798 === (8)))
{var inst_19757 = (state_19797[(7)]);var inst_19761 = (state_19797[(9)]);var inst_19765 = (state_19797[(10)]);var inst_19770 = inst_19757.push(inst_19761);var tmp19814 = inst_19757;var inst_19757__$1 = tmp19814;var inst_19758 = inst_19765;var state_19797__$1 = (function (){var statearr_19818 = state_19797;(statearr_19818[(7)] = inst_19757__$1);
(statearr_19818[(8)] = inst_19758);
(statearr_19818[(14)] = inst_19770);
return statearr_19818;
})();var statearr_19819_19841 = state_19797__$1;(statearr_19819_19841[(2)] = null);
(statearr_19819_19841[(1)] = (2));
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
});})(c__6891__auto___19827,out))
;return ((function (switch__6876__auto__,c__6891__auto___19827,out){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_19823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19823[(0)] = state_machine__6877__auto__);
(statearr_19823[(1)] = (1));
return statearr_19823;
});
var state_machine__6877__auto____1 = (function (state_19797){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_19797);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e19824){if((e19824 instanceof Object))
{var ex__6880__auto__ = e19824;var statearr_19825_19842 = state_19797;(statearr_19825_19842[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19824;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19843 = state_19797;
state_19797 = G__19843;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_19797){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_19797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___19827,out))
})();var state__6893__auto__ = (function (){var statearr_19826 = f__6892__auto__.call(null);(statearr_19826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___19827);
return statearr_19826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___19827,out))
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