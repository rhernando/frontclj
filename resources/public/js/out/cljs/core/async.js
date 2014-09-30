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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17417 = (function (f,fn_handler,meta17418){
this.f = f;
this.fn_handler = fn_handler;
this.meta17418 = meta17418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17417.cljs$lang$type = true;
cljs.core.async.t17417.cljs$lang$ctorStr = "cljs.core.async/t17417";
cljs.core.async.t17417.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17417");
});
cljs.core.async.t17417.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17419){var self__ = this;
var _17419__$1 = this;return self__.meta17418;
});
cljs.core.async.t17417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17419,meta17418__$1){var self__ = this;
var _17419__$1 = this;return (new cljs.core.async.t17417(self__.f,self__.fn_handler,meta17418__$1));
});
cljs.core.async.__GT_t17417 = (function __GT_t17417(f__$1,fn_handler__$1,meta17418){return (new cljs.core.async.t17417(f__$1,fn_handler__$1,meta17418));
});
}
return (new cljs.core.async.t17417(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17421 = buff;if(G__17421)
{var bit__4206__auto__ = null;if(cljs.core.truth_((function (){var or__3556__auto__ = bit__4206__auto__;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return G__17421.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17421.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17421);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17421);
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
{var val_17422 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17422);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17422,ret){
return (function (){return fn1.call(null,val_17422);
});})(val_17422,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4412__auto___17423 = n;var x_17424 = (0);while(true){
if((x_17424 < n__4412__auto___17423))
{(a[x_17424] = (0));
{
var G__17425 = (x_17424 + (1));
x_17424 = G__17425;
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
var G__17426 = (i + (1));
i = G__17426;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17430 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17430 = (function (flag,alt_flag,meta17431){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17431 = meta17431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17430.cljs$lang$type = true;
cljs.core.async.t17430.cljs$lang$ctorStr = "cljs.core.async/t17430";
cljs.core.async.t17430.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17430");
});})(flag))
;
cljs.core.async.t17430.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t17430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t17430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17432){var self__ = this;
var _17432__$1 = this;return self__.meta17431;
});})(flag))
;
cljs.core.async.t17430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17432,meta17431__$1){var self__ = this;
var _17432__$1 = this;return (new cljs.core.async.t17430(self__.flag,self__.alt_flag,meta17431__$1));
});})(flag))
;
cljs.core.async.__GT_t17430 = ((function (flag){
return (function __GT_t17430(flag__$1,alt_flag__$1,meta17431){return (new cljs.core.async.t17430(flag__$1,alt_flag__$1,meta17431));
});})(flag))
;
}
return (new cljs.core.async.t17430(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17436 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17436 = (function (cb,flag,alt_handler,meta17437){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17437 = meta17437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17436.cljs$lang$type = true;
cljs.core.async.t17436.cljs$lang$ctorStr = "cljs.core.async/t17436";
cljs.core.async.t17436.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17436");
});
cljs.core.async.t17436.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17438){var self__ = this;
var _17438__$1 = this;return self__.meta17437;
});
cljs.core.async.t17436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17438,meta17437__$1){var self__ = this;
var _17438__$1 = this;return (new cljs.core.async.t17436(self__.cb,self__.flag,self__.alt_handler,meta17437__$1));
});
cljs.core.async.__GT_t17436 = (function __GT_t17436(cb__$1,flag__$1,alt_handler__$1,meta17437){return (new cljs.core.async.t17436(cb__$1,flag__$1,alt_handler__$1,meta17437));
});
}
return (new cljs.core.async.t17436(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17439_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17439_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17440_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17440_SHARP_,port], null));
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
var G__17441 = (i + (1));
i = G__17441;
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
var alts_BANG___delegate = function (ports,p__17442){var map__17444 = p__17442;var map__17444__$1 = ((cljs.core.seq_QMARK_.call(null,map__17444))?cljs.core.apply.call(null,cljs.core.hash_map,map__17444):map__17444);var opts = map__17444__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__17442 = null;if (arguments.length > 1) {
  p__17442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17442);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17445){
var ports = cljs.core.first(arglist__17445);
var p__17442 = cljs.core.rest(arglist__17445);
return alts_BANG___delegate(ports,p__17442);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17453 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17453 = (function (ch,f,map_LT_,meta17454){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17454 = meta17454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17453.cljs$lang$type = true;
cljs.core.async.t17453.cljs$lang$ctorStr = "cljs.core.async/t17453";
cljs.core.async.t17453.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17453");
});
cljs.core.async.t17453.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17453.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17456 = (function (fn1,_,meta17454,ch,f,map_LT_,meta17457){
this.fn1 = fn1;
this._ = _;
this.meta17454 = meta17454;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17457 = meta17457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17456.cljs$lang$type = true;
cljs.core.async.t17456.cljs$lang$ctorStr = "cljs.core.async/t17456";
cljs.core.async.t17456.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17456");
});})(___$1))
;
cljs.core.async.t17456.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17456.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17446_SHARP_){return f1.call(null,(((p1__17446_SHARP_ == null))?null:self__.f.call(null,p1__17446_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17458){var self__ = this;
var _17458__$1 = this;return self__.meta17457;
});})(___$1))
;
cljs.core.async.t17456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17458,meta17457__$1){var self__ = this;
var _17458__$1 = this;return (new cljs.core.async.t17456(self__.fn1,self__._,self__.meta17454,self__.ch,self__.f,self__.map_LT_,meta17457__$1));
});})(___$1))
;
cljs.core.async.__GT_t17456 = ((function (___$1){
return (function __GT_t17456(fn1__$1,___$2,meta17454__$1,ch__$2,f__$2,map_LT___$2,meta17457){return (new cljs.core.async.t17456(fn1__$1,___$2,meta17454__$1,ch__$2,f__$2,map_LT___$2,meta17457));
});})(___$1))
;
}
return (new cljs.core.async.t17456(fn1,___$1,self__.meta17454,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t17453.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17455){var self__ = this;
var _17455__$1 = this;return self__.meta17454;
});
cljs.core.async.t17453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17455,meta17454__$1){var self__ = this;
var _17455__$1 = this;return (new cljs.core.async.t17453(self__.ch,self__.f,self__.map_LT_,meta17454__$1));
});
cljs.core.async.__GT_t17453 = (function __GT_t17453(ch__$1,f__$1,map_LT___$1,meta17454){return (new cljs.core.async.t17453(ch__$1,f__$1,map_LT___$1,meta17454));
});
}
return (new cljs.core.async.t17453(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17462 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17462 = (function (ch,f,map_GT_,meta17463){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17463 = meta17463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17462.cljs$lang$type = true;
cljs.core.async.t17462.cljs$lang$ctorStr = "cljs.core.async/t17462";
cljs.core.async.t17462.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17462");
});
cljs.core.async.t17462.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17462.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17462.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17464){var self__ = this;
var _17464__$1 = this;return self__.meta17463;
});
cljs.core.async.t17462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17464,meta17463__$1){var self__ = this;
var _17464__$1 = this;return (new cljs.core.async.t17462(self__.ch,self__.f,self__.map_GT_,meta17463__$1));
});
cljs.core.async.__GT_t17462 = (function __GT_t17462(ch__$1,f__$1,map_GT___$1,meta17463){return (new cljs.core.async.t17462(ch__$1,f__$1,map_GT___$1,meta17463));
});
}
return (new cljs.core.async.t17462(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17468 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17468 = (function (ch,p,filter_GT_,meta17469){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17469 = meta17469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17468.cljs$lang$type = true;
cljs.core.async.t17468.cljs$lang$ctorStr = "cljs.core.async/t17468";
cljs.core.async.t17468.cljs$lang$ctorPrWriter = (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t17468");
});
cljs.core.async.t17468.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17468.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17468.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17468.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17470){var self__ = this;
var _17470__$1 = this;return self__.meta17469;
});
cljs.core.async.t17468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17470,meta17469__$1){var self__ = this;
var _17470__$1 = this;return (new cljs.core.async.t17468(self__.ch,self__.p,self__.filter_GT_,meta17469__$1));
});
cljs.core.async.__GT_t17468 = (function __GT_t17468(ch__$1,p__$1,filter_GT___$1,meta17469){return (new cljs.core.async.t17468(ch__$1,p__$1,filter_GT___$1,meta17469));
});
}
return (new cljs.core.async.t17468(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8171__auto___17553 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___17553,out){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___17553,out){
return (function (state_17532){var state_val_17533 = (state_17532[(1)]);if((state_val_17533 === (7)))
{var inst_17528 = (state_17532[(2)]);var state_17532__$1 = state_17532;var statearr_17534_17554 = state_17532__$1;(statearr_17534_17554[(2)] = inst_17528);
(statearr_17534_17554[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17533 === (1)))
{var state_17532__$1 = state_17532;var statearr_17535_17555 = state_17532__$1;(statearr_17535_17555[(2)] = null);
(statearr_17535_17555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17533 === (4)))
{var inst_17514 = (state_17532[(7)]);var inst_17514__$1 = (state_17532[(2)]);var inst_17515 = (inst_17514__$1 == null);var state_17532__$1 = (function (){var statearr_17536 = state_17532;(statearr_17536[(7)] = inst_17514__$1);
return statearr_17536;
})();if(cljs.core.truth_(inst_17515))
{var statearr_17537_17556 = state_17532__$1;(statearr_17537_17556[(1)] = (5));
} else
{var statearr_17538_17557 = state_17532__$1;(statearr_17538_17557[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17533 === (6)))
{var inst_17514 = (state_17532[(7)]);var inst_17519 = p.call(null,inst_17514);var state_17532__$1 = state_17532;if(cljs.core.truth_(inst_17519))
{var statearr_17539_17558 = state_17532__$1;(statearr_17539_17558[(1)] = (8));
} else
{var statearr_17540_17559 = state_17532__$1;(statearr_17540_17559[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17533 === (3)))
{var inst_17530 = (state_17532[(2)]);var state_17532__$1 = state_17532;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17532__$1,inst_17530);
} else
{if((state_val_17533 === (2)))
{var state_17532__$1 = state_17532;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17532__$1,(4),ch);
} else
{if((state_val_17533 === (11)))
{var inst_17522 = (state_17532[(2)]);var state_17532__$1 = state_17532;var statearr_17541_17560 = state_17532__$1;(statearr_17541_17560[(2)] = inst_17522);
(statearr_17541_17560[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17533 === (9)))
{var state_17532__$1 = state_17532;var statearr_17542_17561 = state_17532__$1;(statearr_17542_17561[(2)] = null);
(statearr_17542_17561[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17533 === (5)))
{var inst_17517 = cljs.core.async.close_BANG_.call(null,out);var state_17532__$1 = state_17532;var statearr_17543_17562 = state_17532__$1;(statearr_17543_17562[(2)] = inst_17517);
(statearr_17543_17562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17533 === (10)))
{var inst_17525 = (state_17532[(2)]);var state_17532__$1 = (function (){var statearr_17544 = state_17532;(statearr_17544[(8)] = inst_17525);
return statearr_17544;
})();var statearr_17545_17563 = state_17532__$1;(statearr_17545_17563[(2)] = null);
(statearr_17545_17563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17533 === (8)))
{var inst_17514 = (state_17532[(7)]);var state_17532__$1 = state_17532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17532__$1,(11),out,inst_17514);
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
});})(c__8171__auto___17553,out))
;return ((function (switch__8156__auto__,c__8171__auto___17553,out){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_17549 = [null,null,null,null,null,null,null,null,null];(statearr_17549[(0)] = state_machine__8157__auto__);
(statearr_17549[(1)] = (1));
return statearr_17549;
});
var state_machine__8157__auto____1 = (function (state_17532){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_17532);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e17550){if((e17550 instanceof Object))
{var ex__8160__auto__ = e17550;var statearr_17551_17564 = state_17532;(statearr_17551_17564[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17550;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17565 = state_17532;
state_17532 = G__17565;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_17532){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_17532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___17553,out))
})();var state__8173__auto__ = (function (){var statearr_17552 = f__8172__auto__.call(null);(statearr_17552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___17553);
return statearr_17552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___17553,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8171__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto__){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto__){
return (function (state_17731){var state_val_17732 = (state_17731[(1)]);if((state_val_17732 === (7)))
{var inst_17727 = (state_17731[(2)]);var state_17731__$1 = state_17731;var statearr_17733_17774 = state_17731__$1;(statearr_17733_17774[(2)] = inst_17727);
(statearr_17733_17774[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (20)))
{var inst_17697 = (state_17731[(7)]);var inst_17708 = (state_17731[(2)]);var inst_17709 = cljs.core.next.call(null,inst_17697);var inst_17683 = inst_17709;var inst_17684 = null;var inst_17685 = (0);var inst_17686 = (0);var state_17731__$1 = (function (){var statearr_17734 = state_17731;(statearr_17734[(8)] = inst_17683);
(statearr_17734[(9)] = inst_17685);
(statearr_17734[(10)] = inst_17708);
(statearr_17734[(11)] = inst_17686);
(statearr_17734[(12)] = inst_17684);
return statearr_17734;
})();var statearr_17735_17775 = state_17731__$1;(statearr_17735_17775[(2)] = null);
(statearr_17735_17775[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (1)))
{var state_17731__$1 = state_17731;var statearr_17736_17776 = state_17731__$1;(statearr_17736_17776[(2)] = null);
(statearr_17736_17776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (4)))
{var inst_17672 = (state_17731[(13)]);var inst_17672__$1 = (state_17731[(2)]);var inst_17673 = (inst_17672__$1 == null);var state_17731__$1 = (function (){var statearr_17737 = state_17731;(statearr_17737[(13)] = inst_17672__$1);
return statearr_17737;
})();if(cljs.core.truth_(inst_17673))
{var statearr_17738_17777 = state_17731__$1;(statearr_17738_17777[(1)] = (5));
} else
{var statearr_17739_17778 = state_17731__$1;(statearr_17739_17778[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (15)))
{var state_17731__$1 = state_17731;var statearr_17743_17779 = state_17731__$1;(statearr_17743_17779[(2)] = null);
(statearr_17743_17779[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (21)))
{var state_17731__$1 = state_17731;var statearr_17744_17780 = state_17731__$1;(statearr_17744_17780[(2)] = null);
(statearr_17744_17780[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (13)))
{var inst_17683 = (state_17731[(8)]);var inst_17685 = (state_17731[(9)]);var inst_17686 = (state_17731[(11)]);var inst_17684 = (state_17731[(12)]);var inst_17693 = (state_17731[(2)]);var inst_17694 = (inst_17686 + (1));var tmp17740 = inst_17683;var tmp17741 = inst_17685;var tmp17742 = inst_17684;var inst_17683__$1 = tmp17740;var inst_17684__$1 = tmp17742;var inst_17685__$1 = tmp17741;var inst_17686__$1 = inst_17694;var state_17731__$1 = (function (){var statearr_17745 = state_17731;(statearr_17745[(8)] = inst_17683__$1);
(statearr_17745[(9)] = inst_17685__$1);
(statearr_17745[(14)] = inst_17693);
(statearr_17745[(11)] = inst_17686__$1);
(statearr_17745[(12)] = inst_17684__$1);
return statearr_17745;
})();var statearr_17746_17781 = state_17731__$1;(statearr_17746_17781[(2)] = null);
(statearr_17746_17781[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (22)))
{var state_17731__$1 = state_17731;var statearr_17747_17782 = state_17731__$1;(statearr_17747_17782[(2)] = null);
(statearr_17747_17782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (6)))
{var inst_17672 = (state_17731[(13)]);var inst_17681 = f.call(null,inst_17672);var inst_17682 = cljs.core.seq.call(null,inst_17681);var inst_17683 = inst_17682;var inst_17684 = null;var inst_17685 = (0);var inst_17686 = (0);var state_17731__$1 = (function (){var statearr_17748 = state_17731;(statearr_17748[(8)] = inst_17683);
(statearr_17748[(9)] = inst_17685);
(statearr_17748[(11)] = inst_17686);
(statearr_17748[(12)] = inst_17684);
return statearr_17748;
})();var statearr_17749_17783 = state_17731__$1;(statearr_17749_17783[(2)] = null);
(statearr_17749_17783[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (17)))
{var inst_17697 = (state_17731[(7)]);var inst_17701 = cljs.core.chunk_first.call(null,inst_17697);var inst_17702 = cljs.core.chunk_rest.call(null,inst_17697);var inst_17703 = cljs.core.count.call(null,inst_17701);var inst_17683 = inst_17702;var inst_17684 = inst_17701;var inst_17685 = inst_17703;var inst_17686 = (0);var state_17731__$1 = (function (){var statearr_17750 = state_17731;(statearr_17750[(8)] = inst_17683);
(statearr_17750[(9)] = inst_17685);
(statearr_17750[(11)] = inst_17686);
(statearr_17750[(12)] = inst_17684);
return statearr_17750;
})();var statearr_17751_17784 = state_17731__$1;(statearr_17751_17784[(2)] = null);
(statearr_17751_17784[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (3)))
{var inst_17729 = (state_17731[(2)]);var state_17731__$1 = state_17731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17731__$1,inst_17729);
} else
{if((state_val_17732 === (12)))
{var inst_17717 = (state_17731[(2)]);var state_17731__$1 = state_17731;var statearr_17752_17785 = state_17731__$1;(statearr_17752_17785[(2)] = inst_17717);
(statearr_17752_17785[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (2)))
{var state_17731__$1 = state_17731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17731__$1,(4),in$);
} else
{if((state_val_17732 === (23)))
{var inst_17725 = (state_17731[(2)]);var state_17731__$1 = state_17731;var statearr_17753_17786 = state_17731__$1;(statearr_17753_17786[(2)] = inst_17725);
(statearr_17753_17786[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (19)))
{var inst_17712 = (state_17731[(2)]);var state_17731__$1 = state_17731;var statearr_17754_17787 = state_17731__$1;(statearr_17754_17787[(2)] = inst_17712);
(statearr_17754_17787[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (11)))
{var inst_17683 = (state_17731[(8)]);var inst_17697 = (state_17731[(7)]);var inst_17697__$1 = cljs.core.seq.call(null,inst_17683);var state_17731__$1 = (function (){var statearr_17755 = state_17731;(statearr_17755[(7)] = inst_17697__$1);
return statearr_17755;
})();if(inst_17697__$1)
{var statearr_17756_17788 = state_17731__$1;(statearr_17756_17788[(1)] = (14));
} else
{var statearr_17757_17789 = state_17731__$1;(statearr_17757_17789[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (9)))
{var inst_17719 = (state_17731[(2)]);var inst_17720 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17731__$1 = (function (){var statearr_17758 = state_17731;(statearr_17758[(15)] = inst_17719);
return statearr_17758;
})();if(cljs.core.truth_(inst_17720))
{var statearr_17759_17790 = state_17731__$1;(statearr_17759_17790[(1)] = (21));
} else
{var statearr_17760_17791 = state_17731__$1;(statearr_17760_17791[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (5)))
{var inst_17675 = cljs.core.async.close_BANG_.call(null,out);var state_17731__$1 = state_17731;var statearr_17761_17792 = state_17731__$1;(statearr_17761_17792[(2)] = inst_17675);
(statearr_17761_17792[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (14)))
{var inst_17697 = (state_17731[(7)]);var inst_17699 = cljs.core.chunked_seq_QMARK_.call(null,inst_17697);var state_17731__$1 = state_17731;if(inst_17699)
{var statearr_17762_17793 = state_17731__$1;(statearr_17762_17793[(1)] = (17));
} else
{var statearr_17763_17794 = state_17731__$1;(statearr_17763_17794[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (16)))
{var inst_17715 = (state_17731[(2)]);var state_17731__$1 = state_17731;var statearr_17764_17795 = state_17731__$1;(statearr_17764_17795[(2)] = inst_17715);
(statearr_17764_17795[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17732 === (10)))
{var inst_17686 = (state_17731[(11)]);var inst_17684 = (state_17731[(12)]);var inst_17691 = cljs.core._nth.call(null,inst_17684,inst_17686);var state_17731__$1 = state_17731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17731__$1,(13),out,inst_17691);
} else
{if((state_val_17732 === (18)))
{var inst_17697 = (state_17731[(7)]);var inst_17706 = cljs.core.first.call(null,inst_17697);var state_17731__$1 = state_17731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17731__$1,(20),out,inst_17706);
} else
{if((state_val_17732 === (8)))
{var inst_17685 = (state_17731[(9)]);var inst_17686 = (state_17731[(11)]);var inst_17688 = (inst_17686 < inst_17685);var inst_17689 = inst_17688;var state_17731__$1 = state_17731;if(cljs.core.truth_(inst_17689))
{var statearr_17765_17796 = state_17731__$1;(statearr_17765_17796[(1)] = (10));
} else
{var statearr_17766_17797 = state_17731__$1;(statearr_17766_17797[(1)] = (11));
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
});})(c__8171__auto__))
;return ((function (switch__8156__auto__,c__8171__auto__){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_17770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17770[(0)] = state_machine__8157__auto__);
(statearr_17770[(1)] = (1));
return statearr_17770;
});
var state_machine__8157__auto____1 = (function (state_17731){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_17731);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e17771){if((e17771 instanceof Object))
{var ex__8160__auto__ = e17771;var statearr_17772_17798 = state_17731;(statearr_17772_17798[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17771;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17799 = state_17731;
state_17731 = G__17799;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_17731){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_17731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto__))
})();var state__8173__auto__ = (function (){var statearr_17773 = f__8172__auto__.call(null);(statearr_17773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto__);
return statearr_17773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto__))
);
return c__8171__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8171__auto___17894 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___17894){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___17894){
return (function (state_17870){var state_val_17871 = (state_17870[(1)]);if((state_val_17871 === (7)))
{var inst_17866 = (state_17870[(2)]);var state_17870__$1 = state_17870;var statearr_17872_17895 = state_17870__$1;(statearr_17872_17895[(2)] = inst_17866);
(statearr_17872_17895[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (1)))
{var state_17870__$1 = state_17870;var statearr_17873_17896 = state_17870__$1;(statearr_17873_17896[(2)] = null);
(statearr_17873_17896[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (4)))
{var inst_17849 = (state_17870[(7)]);var inst_17849__$1 = (state_17870[(2)]);var inst_17850 = (inst_17849__$1 == null);var state_17870__$1 = (function (){var statearr_17874 = state_17870;(statearr_17874[(7)] = inst_17849__$1);
return statearr_17874;
})();if(cljs.core.truth_(inst_17850))
{var statearr_17875_17897 = state_17870__$1;(statearr_17875_17897[(1)] = (5));
} else
{var statearr_17876_17898 = state_17870__$1;(statearr_17876_17898[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (13)))
{var state_17870__$1 = state_17870;var statearr_17877_17899 = state_17870__$1;(statearr_17877_17899[(2)] = null);
(statearr_17877_17899[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (6)))
{var inst_17849 = (state_17870[(7)]);var state_17870__$1 = state_17870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17870__$1,(11),to,inst_17849);
} else
{if((state_val_17871 === (3)))
{var inst_17868 = (state_17870[(2)]);var state_17870__$1 = state_17870;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17870__$1,inst_17868);
} else
{if((state_val_17871 === (12)))
{var state_17870__$1 = state_17870;var statearr_17878_17900 = state_17870__$1;(statearr_17878_17900[(2)] = null);
(statearr_17878_17900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (2)))
{var state_17870__$1 = state_17870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17870__$1,(4),from);
} else
{if((state_val_17871 === (11)))
{var inst_17859 = (state_17870[(2)]);var state_17870__$1 = state_17870;if(cljs.core.truth_(inst_17859))
{var statearr_17879_17901 = state_17870__$1;(statearr_17879_17901[(1)] = (12));
} else
{var statearr_17880_17902 = state_17870__$1;(statearr_17880_17902[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (9)))
{var state_17870__$1 = state_17870;var statearr_17881_17903 = state_17870__$1;(statearr_17881_17903[(2)] = null);
(statearr_17881_17903[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (5)))
{var state_17870__$1 = state_17870;if(cljs.core.truth_(close_QMARK_))
{var statearr_17882_17904 = state_17870__$1;(statearr_17882_17904[(1)] = (8));
} else
{var statearr_17883_17905 = state_17870__$1;(statearr_17883_17905[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (14)))
{var inst_17864 = (state_17870[(2)]);var state_17870__$1 = state_17870;var statearr_17884_17906 = state_17870__$1;(statearr_17884_17906[(2)] = inst_17864);
(statearr_17884_17906[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (10)))
{var inst_17856 = (state_17870[(2)]);var state_17870__$1 = state_17870;var statearr_17885_17907 = state_17870__$1;(statearr_17885_17907[(2)] = inst_17856);
(statearr_17885_17907[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17871 === (8)))
{var inst_17853 = cljs.core.async.close_BANG_.call(null,to);var state_17870__$1 = state_17870;var statearr_17886_17908 = state_17870__$1;(statearr_17886_17908[(2)] = inst_17853);
(statearr_17886_17908[(1)] = (10));
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
});})(c__8171__auto___17894))
;return ((function (switch__8156__auto__,c__8171__auto___17894){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_17890 = [null,null,null,null,null,null,null,null];(statearr_17890[(0)] = state_machine__8157__auto__);
(statearr_17890[(1)] = (1));
return statearr_17890;
});
var state_machine__8157__auto____1 = (function (state_17870){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_17870);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e17891){if((e17891 instanceof Object))
{var ex__8160__auto__ = e17891;var statearr_17892_17909 = state_17870;(statearr_17892_17909[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17870);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17891;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17910 = state_17870;
state_17870 = G__17910;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_17870){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_17870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___17894))
})();var state__8173__auto__ = (function (){var statearr_17893 = f__8172__auto__.call(null);(statearr_17893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___17894);
return statearr_17893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___17894))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8171__auto___18011 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___18011,tc,fc){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___18011,tc,fc){
return (function (state_17986){var state_val_17987 = (state_17986[(1)]);if((state_val_17987 === (7)))
{var inst_17982 = (state_17986[(2)]);var state_17986__$1 = state_17986;var statearr_17988_18012 = state_17986__$1;(statearr_17988_18012[(2)] = inst_17982);
(statearr_17988_18012[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (1)))
{var state_17986__$1 = state_17986;var statearr_17989_18013 = state_17986__$1;(statearr_17989_18013[(2)] = null);
(statearr_17989_18013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (4)))
{var inst_17963 = (state_17986[(7)]);var inst_17963__$1 = (state_17986[(2)]);var inst_17964 = (inst_17963__$1 == null);var state_17986__$1 = (function (){var statearr_17990 = state_17986;(statearr_17990[(7)] = inst_17963__$1);
return statearr_17990;
})();if(cljs.core.truth_(inst_17964))
{var statearr_17991_18014 = state_17986__$1;(statearr_17991_18014[(1)] = (5));
} else
{var statearr_17992_18015 = state_17986__$1;(statearr_17992_18015[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (13)))
{var state_17986__$1 = state_17986;var statearr_17993_18016 = state_17986__$1;(statearr_17993_18016[(2)] = null);
(statearr_17993_18016[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (6)))
{var inst_17963 = (state_17986[(7)]);var inst_17969 = p.call(null,inst_17963);var state_17986__$1 = state_17986;if(cljs.core.truth_(inst_17969))
{var statearr_17994_18017 = state_17986__$1;(statearr_17994_18017[(1)] = (9));
} else
{var statearr_17995_18018 = state_17986__$1;(statearr_17995_18018[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (3)))
{var inst_17984 = (state_17986[(2)]);var state_17986__$1 = state_17986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17986__$1,inst_17984);
} else
{if((state_val_17987 === (12)))
{var state_17986__$1 = state_17986;var statearr_17996_18019 = state_17986__$1;(statearr_17996_18019[(2)] = null);
(statearr_17996_18019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (2)))
{var state_17986__$1 = state_17986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17986__$1,(4),ch);
} else
{if((state_val_17987 === (11)))
{var inst_17963 = (state_17986[(7)]);var inst_17973 = (state_17986[(2)]);var state_17986__$1 = state_17986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17986__$1,(8),inst_17973,inst_17963);
} else
{if((state_val_17987 === (9)))
{var state_17986__$1 = state_17986;var statearr_17997_18020 = state_17986__$1;(statearr_17997_18020[(2)] = tc);
(statearr_17997_18020[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (5)))
{var inst_17966 = cljs.core.async.close_BANG_.call(null,tc);var inst_17967 = cljs.core.async.close_BANG_.call(null,fc);var state_17986__$1 = (function (){var statearr_17998 = state_17986;(statearr_17998[(8)] = inst_17966);
return statearr_17998;
})();var statearr_17999_18021 = state_17986__$1;(statearr_17999_18021[(2)] = inst_17967);
(statearr_17999_18021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (14)))
{var inst_17980 = (state_17986[(2)]);var state_17986__$1 = state_17986;var statearr_18000_18022 = state_17986__$1;(statearr_18000_18022[(2)] = inst_17980);
(statearr_18000_18022[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (10)))
{var state_17986__$1 = state_17986;var statearr_18001_18023 = state_17986__$1;(statearr_18001_18023[(2)] = fc);
(statearr_18001_18023[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17987 === (8)))
{var inst_17975 = (state_17986[(2)]);var state_17986__$1 = state_17986;if(cljs.core.truth_(inst_17975))
{var statearr_18002_18024 = state_17986__$1;(statearr_18002_18024[(1)] = (12));
} else
{var statearr_18003_18025 = state_17986__$1;(statearr_18003_18025[(1)] = (13));
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
});})(c__8171__auto___18011,tc,fc))
;return ((function (switch__8156__auto__,c__8171__auto___18011,tc,fc){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_18007 = [null,null,null,null,null,null,null,null,null];(statearr_18007[(0)] = state_machine__8157__auto__);
(statearr_18007[(1)] = (1));
return statearr_18007;
});
var state_machine__8157__auto____1 = (function (state_17986){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_17986);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e18008){if((e18008 instanceof Object))
{var ex__8160__auto__ = e18008;var statearr_18009_18026 = state_17986;(statearr_18009_18026[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18008;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18027 = state_17986;
state_17986 = G__18027;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_17986){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_17986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___18011,tc,fc))
})();var state__8173__auto__ = (function (){var statearr_18010 = f__8172__auto__.call(null);(statearr_18010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___18011);
return statearr_18010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___18011,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8171__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto__){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto__){
return (function (state_18074){var state_val_18075 = (state_18074[(1)]);if((state_val_18075 === (7)))
{var inst_18070 = (state_18074[(2)]);var state_18074__$1 = state_18074;var statearr_18076_18092 = state_18074__$1;(statearr_18076_18092[(2)] = inst_18070);
(statearr_18076_18092[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18075 === (6)))
{var inst_18063 = (state_18074[(7)]);var inst_18060 = (state_18074[(8)]);var inst_18067 = f.call(null,inst_18060,inst_18063);var inst_18060__$1 = inst_18067;var state_18074__$1 = (function (){var statearr_18077 = state_18074;(statearr_18077[(8)] = inst_18060__$1);
return statearr_18077;
})();var statearr_18078_18093 = state_18074__$1;(statearr_18078_18093[(2)] = null);
(statearr_18078_18093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18075 === (5)))
{var inst_18060 = (state_18074[(8)]);var state_18074__$1 = state_18074;var statearr_18079_18094 = state_18074__$1;(statearr_18079_18094[(2)] = inst_18060);
(statearr_18079_18094[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18075 === (4)))
{var inst_18063 = (state_18074[(7)]);var inst_18063__$1 = (state_18074[(2)]);var inst_18064 = (inst_18063__$1 == null);var state_18074__$1 = (function (){var statearr_18080 = state_18074;(statearr_18080[(7)] = inst_18063__$1);
return statearr_18080;
})();if(cljs.core.truth_(inst_18064))
{var statearr_18081_18095 = state_18074__$1;(statearr_18081_18095[(1)] = (5));
} else
{var statearr_18082_18096 = state_18074__$1;(statearr_18082_18096[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18075 === (3)))
{var inst_18072 = (state_18074[(2)]);var state_18074__$1 = state_18074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18074__$1,inst_18072);
} else
{if((state_val_18075 === (2)))
{var state_18074__$1 = state_18074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18074__$1,(4),ch);
} else
{if((state_val_18075 === (1)))
{var inst_18060 = init;var state_18074__$1 = (function (){var statearr_18083 = state_18074;(statearr_18083[(8)] = inst_18060);
return statearr_18083;
})();var statearr_18084_18097 = state_18074__$1;(statearr_18084_18097[(2)] = null);
(statearr_18084_18097[(1)] = (2));
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
});})(c__8171__auto__))
;return ((function (switch__8156__auto__,c__8171__auto__){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_18088 = [null,null,null,null,null,null,null,null,null];(statearr_18088[(0)] = state_machine__8157__auto__);
(statearr_18088[(1)] = (1));
return statearr_18088;
});
var state_machine__8157__auto____1 = (function (state_18074){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_18074);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e18089){if((e18089 instanceof Object))
{var ex__8160__auto__ = e18089;var statearr_18090_18098 = state_18074;(statearr_18090_18098[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18089;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18099 = state_18074;
state_18074 = G__18099;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_18074){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_18074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto__))
})();var state__8173__auto__ = (function (){var statearr_18091 = f__8172__auto__.call(null);(statearr_18091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto__);
return statearr_18091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto__))
);
return c__8171__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8171__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto__){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto__){
return (function (state_18173){var state_val_18174 = (state_18173[(1)]);if((state_val_18174 === (7)))
{var inst_18155 = (state_18173[(2)]);var state_18173__$1 = state_18173;var statearr_18175_18198 = state_18173__$1;(statearr_18175_18198[(2)] = inst_18155);
(statearr_18175_18198[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (1)))
{var inst_18149 = cljs.core.seq.call(null,coll);var inst_18150 = inst_18149;var state_18173__$1 = (function (){var statearr_18176 = state_18173;(statearr_18176[(7)] = inst_18150);
return statearr_18176;
})();var statearr_18177_18199 = state_18173__$1;(statearr_18177_18199[(2)] = null);
(statearr_18177_18199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (4)))
{var inst_18150 = (state_18173[(7)]);var inst_18153 = cljs.core.first.call(null,inst_18150);var state_18173__$1 = state_18173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18173__$1,(7),ch,inst_18153);
} else
{if((state_val_18174 === (13)))
{var inst_18167 = (state_18173[(2)]);var state_18173__$1 = state_18173;var statearr_18178_18200 = state_18173__$1;(statearr_18178_18200[(2)] = inst_18167);
(statearr_18178_18200[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (6)))
{var inst_18158 = (state_18173[(2)]);var state_18173__$1 = state_18173;if(cljs.core.truth_(inst_18158))
{var statearr_18179_18201 = state_18173__$1;(statearr_18179_18201[(1)] = (8));
} else
{var statearr_18180_18202 = state_18173__$1;(statearr_18180_18202[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (3)))
{var inst_18171 = (state_18173[(2)]);var state_18173__$1 = state_18173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18173__$1,inst_18171);
} else
{if((state_val_18174 === (12)))
{var state_18173__$1 = state_18173;var statearr_18181_18203 = state_18173__$1;(statearr_18181_18203[(2)] = null);
(statearr_18181_18203[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (2)))
{var inst_18150 = (state_18173[(7)]);var state_18173__$1 = state_18173;if(cljs.core.truth_(inst_18150))
{var statearr_18182_18204 = state_18173__$1;(statearr_18182_18204[(1)] = (4));
} else
{var statearr_18183_18205 = state_18173__$1;(statearr_18183_18205[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (11)))
{var inst_18164 = cljs.core.async.close_BANG_.call(null,ch);var state_18173__$1 = state_18173;var statearr_18184_18206 = state_18173__$1;(statearr_18184_18206[(2)] = inst_18164);
(statearr_18184_18206[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (9)))
{var state_18173__$1 = state_18173;if(cljs.core.truth_(close_QMARK_))
{var statearr_18185_18207 = state_18173__$1;(statearr_18185_18207[(1)] = (11));
} else
{var statearr_18186_18208 = state_18173__$1;(statearr_18186_18208[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (5)))
{var inst_18150 = (state_18173[(7)]);var state_18173__$1 = state_18173;var statearr_18187_18209 = state_18173__$1;(statearr_18187_18209[(2)] = inst_18150);
(statearr_18187_18209[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (10)))
{var inst_18169 = (state_18173[(2)]);var state_18173__$1 = state_18173;var statearr_18188_18210 = state_18173__$1;(statearr_18188_18210[(2)] = inst_18169);
(statearr_18188_18210[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18174 === (8)))
{var inst_18150 = (state_18173[(7)]);var inst_18160 = cljs.core.next.call(null,inst_18150);var inst_18150__$1 = inst_18160;var state_18173__$1 = (function (){var statearr_18189 = state_18173;(statearr_18189[(7)] = inst_18150__$1);
return statearr_18189;
})();var statearr_18190_18211 = state_18173__$1;(statearr_18190_18211[(2)] = null);
(statearr_18190_18211[(1)] = (2));
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
});})(c__8171__auto__))
;return ((function (switch__8156__auto__,c__8171__auto__){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_18194 = [null,null,null,null,null,null,null,null];(statearr_18194[(0)] = state_machine__8157__auto__);
(statearr_18194[(1)] = (1));
return statearr_18194;
});
var state_machine__8157__auto____1 = (function (state_18173){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_18173);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e18195){if((e18195 instanceof Object))
{var ex__8160__auto__ = e18195;var statearr_18196_18212 = state_18173;(statearr_18196_18212[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18195;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18213 = state_18173;
state_18173 = G__18213;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_18173){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_18173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto__))
})();var state__8173__auto__ = (function (){var statearr_18197 = f__8172__auto__.call(null);(statearr_18197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto__);
return statearr_18197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto__))
);
return c__8171__auto__;
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
cljs.core.async.Mux = (function (){var obj18215 = {};return obj18215;
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
cljs.core.async.Mult = (function (){var obj18217 = {};return obj18217;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18439 = (function (cs,ch,mult,meta18440){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18440 = meta18440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18439.cljs$lang$type = true;
cljs.core.async.t18439.cljs$lang$ctorStr = "cljs.core.async/t18439";
cljs.core.async.t18439.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t18439");
});})(cs))
;
cljs.core.async.t18439.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18439.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18439.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18439.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18439.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18441){var self__ = this;
var _18441__$1 = this;return self__.meta18440;
});})(cs))
;
cljs.core.async.t18439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18441,meta18440__$1){var self__ = this;
var _18441__$1 = this;return (new cljs.core.async.t18439(self__.cs,self__.ch,self__.mult,meta18440__$1));
});})(cs))
;
cljs.core.async.__GT_t18439 = ((function (cs){
return (function __GT_t18439(cs__$1,ch__$1,mult__$1,meta18440){return (new cljs.core.async.t18439(cs__$1,ch__$1,mult__$1,meta18440));
});})(cs))
;
}
return (new cljs.core.async.t18439(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8171__auto___18660 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___18660,cs,m,dchan,dctr,done){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___18660,cs,m,dchan,dctr,done){
return (function (state_18572){var state_val_18573 = (state_18572[(1)]);if((state_val_18573 === (7)))
{var inst_18568 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18574_18661 = state_18572__$1;(statearr_18574_18661[(2)] = inst_18568);
(statearr_18574_18661[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (20)))
{var inst_18473 = (state_18572[(7)]);var inst_18483 = cljs.core.first.call(null,inst_18473);var inst_18484 = cljs.core.nth.call(null,inst_18483,(0),null);var inst_18485 = cljs.core.nth.call(null,inst_18483,(1),null);var state_18572__$1 = (function (){var statearr_18575 = state_18572;(statearr_18575[(8)] = inst_18484);
return statearr_18575;
})();if(cljs.core.truth_(inst_18485))
{var statearr_18576_18662 = state_18572__$1;(statearr_18576_18662[(1)] = (22));
} else
{var statearr_18577_18663 = state_18572__$1;(statearr_18577_18663[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (27)))
{var inst_18520 = (state_18572[(9)]);var inst_18444 = (state_18572[(10)]);var inst_18513 = (state_18572[(11)]);var inst_18515 = (state_18572[(12)]);var inst_18520__$1 = cljs.core._nth.call(null,inst_18513,inst_18515);var inst_18521 = cljs.core.async.put_BANG_.call(null,inst_18520__$1,inst_18444,done);var state_18572__$1 = (function (){var statearr_18578 = state_18572;(statearr_18578[(9)] = inst_18520__$1);
return statearr_18578;
})();if(cljs.core.truth_(inst_18521))
{var statearr_18579_18664 = state_18572__$1;(statearr_18579_18664[(1)] = (30));
} else
{var statearr_18580_18665 = state_18572__$1;(statearr_18580_18665[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (1)))
{var state_18572__$1 = state_18572;var statearr_18581_18666 = state_18572__$1;(statearr_18581_18666[(2)] = null);
(statearr_18581_18666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (24)))
{var inst_18473 = (state_18572[(7)]);var inst_18490 = (state_18572[(2)]);var inst_18491 = cljs.core.next.call(null,inst_18473);var inst_18453 = inst_18491;var inst_18454 = null;var inst_18455 = (0);var inst_18456 = (0);var state_18572__$1 = (function (){var statearr_18582 = state_18572;(statearr_18582[(13)] = inst_18490);
(statearr_18582[(14)] = inst_18456);
(statearr_18582[(15)] = inst_18453);
(statearr_18582[(16)] = inst_18455);
(statearr_18582[(17)] = inst_18454);
return statearr_18582;
})();var statearr_18583_18667 = state_18572__$1;(statearr_18583_18667[(2)] = null);
(statearr_18583_18667[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (39)))
{var state_18572__$1 = state_18572;var statearr_18587_18668 = state_18572__$1;(statearr_18587_18668[(2)] = null);
(statearr_18587_18668[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (4)))
{var inst_18444 = (state_18572[(10)]);var inst_18444__$1 = (state_18572[(2)]);var inst_18445 = (inst_18444__$1 == null);var state_18572__$1 = (function (){var statearr_18588 = state_18572;(statearr_18588[(10)] = inst_18444__$1);
return statearr_18588;
})();if(cljs.core.truth_(inst_18445))
{var statearr_18589_18669 = state_18572__$1;(statearr_18589_18669[(1)] = (5));
} else
{var statearr_18590_18670 = state_18572__$1;(statearr_18590_18670[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (15)))
{var inst_18456 = (state_18572[(14)]);var inst_18453 = (state_18572[(15)]);var inst_18455 = (state_18572[(16)]);var inst_18454 = (state_18572[(17)]);var inst_18469 = (state_18572[(2)]);var inst_18470 = (inst_18456 + (1));var tmp18584 = inst_18453;var tmp18585 = inst_18455;var tmp18586 = inst_18454;var inst_18453__$1 = tmp18584;var inst_18454__$1 = tmp18586;var inst_18455__$1 = tmp18585;var inst_18456__$1 = inst_18470;var state_18572__$1 = (function (){var statearr_18591 = state_18572;(statearr_18591[(18)] = inst_18469);
(statearr_18591[(14)] = inst_18456__$1);
(statearr_18591[(15)] = inst_18453__$1);
(statearr_18591[(16)] = inst_18455__$1);
(statearr_18591[(17)] = inst_18454__$1);
return statearr_18591;
})();var statearr_18592_18671 = state_18572__$1;(statearr_18592_18671[(2)] = null);
(statearr_18592_18671[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (21)))
{var inst_18494 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18596_18672 = state_18572__$1;(statearr_18596_18672[(2)] = inst_18494);
(statearr_18596_18672[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (31)))
{var inst_18520 = (state_18572[(9)]);var inst_18524 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18525 = cljs.core.async.untap_STAR_.call(null,m,inst_18520);var state_18572__$1 = (function (){var statearr_18597 = state_18572;(statearr_18597[(19)] = inst_18524);
return statearr_18597;
})();var statearr_18598_18673 = state_18572__$1;(statearr_18598_18673[(2)] = inst_18525);
(statearr_18598_18673[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (32)))
{var inst_18514 = (state_18572[(20)]);var inst_18513 = (state_18572[(11)]);var inst_18515 = (state_18572[(12)]);var inst_18512 = (state_18572[(21)]);var inst_18527 = (state_18572[(2)]);var inst_18528 = (inst_18515 + (1));var tmp18593 = inst_18514;var tmp18594 = inst_18513;var tmp18595 = inst_18512;var inst_18512__$1 = tmp18595;var inst_18513__$1 = tmp18594;var inst_18514__$1 = tmp18593;var inst_18515__$1 = inst_18528;var state_18572__$1 = (function (){var statearr_18599 = state_18572;(statearr_18599[(20)] = inst_18514__$1);
(statearr_18599[(11)] = inst_18513__$1);
(statearr_18599[(22)] = inst_18527);
(statearr_18599[(12)] = inst_18515__$1);
(statearr_18599[(21)] = inst_18512__$1);
return statearr_18599;
})();var statearr_18600_18674 = state_18572__$1;(statearr_18600_18674[(2)] = null);
(statearr_18600_18674[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (40)))
{var inst_18540 = (state_18572[(23)]);var inst_18544 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18545 = cljs.core.async.untap_STAR_.call(null,m,inst_18540);var state_18572__$1 = (function (){var statearr_18601 = state_18572;(statearr_18601[(24)] = inst_18544);
return statearr_18601;
})();var statearr_18602_18675 = state_18572__$1;(statearr_18602_18675[(2)] = inst_18545);
(statearr_18602_18675[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (33)))
{var inst_18531 = (state_18572[(25)]);var inst_18533 = cljs.core.chunked_seq_QMARK_.call(null,inst_18531);var state_18572__$1 = state_18572;if(inst_18533)
{var statearr_18603_18676 = state_18572__$1;(statearr_18603_18676[(1)] = (36));
} else
{var statearr_18604_18677 = state_18572__$1;(statearr_18604_18677[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (13)))
{var inst_18463 = (state_18572[(26)]);var inst_18466 = cljs.core.async.close_BANG_.call(null,inst_18463);var state_18572__$1 = state_18572;var statearr_18605_18678 = state_18572__$1;(statearr_18605_18678[(2)] = inst_18466);
(statearr_18605_18678[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (22)))
{var inst_18484 = (state_18572[(8)]);var inst_18487 = cljs.core.async.close_BANG_.call(null,inst_18484);var state_18572__$1 = state_18572;var statearr_18606_18679 = state_18572__$1;(statearr_18606_18679[(2)] = inst_18487);
(statearr_18606_18679[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (36)))
{var inst_18531 = (state_18572[(25)]);var inst_18535 = cljs.core.chunk_first.call(null,inst_18531);var inst_18536 = cljs.core.chunk_rest.call(null,inst_18531);var inst_18537 = cljs.core.count.call(null,inst_18535);var inst_18512 = inst_18536;var inst_18513 = inst_18535;var inst_18514 = inst_18537;var inst_18515 = (0);var state_18572__$1 = (function (){var statearr_18607 = state_18572;(statearr_18607[(20)] = inst_18514);
(statearr_18607[(11)] = inst_18513);
(statearr_18607[(12)] = inst_18515);
(statearr_18607[(21)] = inst_18512);
return statearr_18607;
})();var statearr_18608_18680 = state_18572__$1;(statearr_18608_18680[(2)] = null);
(statearr_18608_18680[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (41)))
{var inst_18531 = (state_18572[(25)]);var inst_18547 = (state_18572[(2)]);var inst_18548 = cljs.core.next.call(null,inst_18531);var inst_18512 = inst_18548;var inst_18513 = null;var inst_18514 = (0);var inst_18515 = (0);var state_18572__$1 = (function (){var statearr_18609 = state_18572;(statearr_18609[(27)] = inst_18547);
(statearr_18609[(20)] = inst_18514);
(statearr_18609[(11)] = inst_18513);
(statearr_18609[(12)] = inst_18515);
(statearr_18609[(21)] = inst_18512);
return statearr_18609;
})();var statearr_18610_18681 = state_18572__$1;(statearr_18610_18681[(2)] = null);
(statearr_18610_18681[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (43)))
{var state_18572__$1 = state_18572;var statearr_18611_18682 = state_18572__$1;(statearr_18611_18682[(2)] = null);
(statearr_18611_18682[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (29)))
{var inst_18556 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18612_18683 = state_18572__$1;(statearr_18612_18683[(2)] = inst_18556);
(statearr_18612_18683[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (44)))
{var inst_18565 = (state_18572[(2)]);var state_18572__$1 = (function (){var statearr_18613 = state_18572;(statearr_18613[(28)] = inst_18565);
return statearr_18613;
})();var statearr_18614_18684 = state_18572__$1;(statearr_18614_18684[(2)] = null);
(statearr_18614_18684[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (6)))
{var inst_18504 = (state_18572[(29)]);var inst_18503 = cljs.core.deref.call(null,cs);var inst_18504__$1 = cljs.core.keys.call(null,inst_18503);var inst_18505 = cljs.core.count.call(null,inst_18504__$1);var inst_18506 = cljs.core.reset_BANG_.call(null,dctr,inst_18505);var inst_18511 = cljs.core.seq.call(null,inst_18504__$1);var inst_18512 = inst_18511;var inst_18513 = null;var inst_18514 = (0);var inst_18515 = (0);var state_18572__$1 = (function (){var statearr_18615 = state_18572;(statearr_18615[(30)] = inst_18506);
(statearr_18615[(20)] = inst_18514);
(statearr_18615[(11)] = inst_18513);
(statearr_18615[(29)] = inst_18504__$1);
(statearr_18615[(12)] = inst_18515);
(statearr_18615[(21)] = inst_18512);
return statearr_18615;
})();var statearr_18616_18685 = state_18572__$1;(statearr_18616_18685[(2)] = null);
(statearr_18616_18685[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (28)))
{var inst_18531 = (state_18572[(25)]);var inst_18512 = (state_18572[(21)]);var inst_18531__$1 = cljs.core.seq.call(null,inst_18512);var state_18572__$1 = (function (){var statearr_18617 = state_18572;(statearr_18617[(25)] = inst_18531__$1);
return statearr_18617;
})();if(inst_18531__$1)
{var statearr_18618_18686 = state_18572__$1;(statearr_18618_18686[(1)] = (33));
} else
{var statearr_18619_18687 = state_18572__$1;(statearr_18619_18687[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (25)))
{var inst_18514 = (state_18572[(20)]);var inst_18515 = (state_18572[(12)]);var inst_18517 = (inst_18515 < inst_18514);var inst_18518 = inst_18517;var state_18572__$1 = state_18572;if(cljs.core.truth_(inst_18518))
{var statearr_18620_18688 = state_18572__$1;(statearr_18620_18688[(1)] = (27));
} else
{var statearr_18621_18689 = state_18572__$1;(statearr_18621_18689[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (34)))
{var state_18572__$1 = state_18572;var statearr_18622_18690 = state_18572__$1;(statearr_18622_18690[(2)] = null);
(statearr_18622_18690[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (17)))
{var state_18572__$1 = state_18572;var statearr_18623_18691 = state_18572__$1;(statearr_18623_18691[(2)] = null);
(statearr_18623_18691[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (3)))
{var inst_18570 = (state_18572[(2)]);var state_18572__$1 = state_18572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18572__$1,inst_18570);
} else
{if((state_val_18573 === (12)))
{var inst_18499 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18624_18692 = state_18572__$1;(statearr_18624_18692[(2)] = inst_18499);
(statearr_18624_18692[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (2)))
{var state_18572__$1 = state_18572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18572__$1,(4),ch);
} else
{if((state_val_18573 === (23)))
{var state_18572__$1 = state_18572;var statearr_18625_18693 = state_18572__$1;(statearr_18625_18693[(2)] = null);
(statearr_18625_18693[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (35)))
{var inst_18554 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18626_18694 = state_18572__$1;(statearr_18626_18694[(2)] = inst_18554);
(statearr_18626_18694[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (19)))
{var inst_18473 = (state_18572[(7)]);var inst_18477 = cljs.core.chunk_first.call(null,inst_18473);var inst_18478 = cljs.core.chunk_rest.call(null,inst_18473);var inst_18479 = cljs.core.count.call(null,inst_18477);var inst_18453 = inst_18478;var inst_18454 = inst_18477;var inst_18455 = inst_18479;var inst_18456 = (0);var state_18572__$1 = (function (){var statearr_18627 = state_18572;(statearr_18627[(14)] = inst_18456);
(statearr_18627[(15)] = inst_18453);
(statearr_18627[(16)] = inst_18455);
(statearr_18627[(17)] = inst_18454);
return statearr_18627;
})();var statearr_18628_18695 = state_18572__$1;(statearr_18628_18695[(2)] = null);
(statearr_18628_18695[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (11)))
{var inst_18473 = (state_18572[(7)]);var inst_18453 = (state_18572[(15)]);var inst_18473__$1 = cljs.core.seq.call(null,inst_18453);var state_18572__$1 = (function (){var statearr_18629 = state_18572;(statearr_18629[(7)] = inst_18473__$1);
return statearr_18629;
})();if(inst_18473__$1)
{var statearr_18630_18696 = state_18572__$1;(statearr_18630_18696[(1)] = (16));
} else
{var statearr_18631_18697 = state_18572__$1;(statearr_18631_18697[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (9)))
{var inst_18501 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18632_18698 = state_18572__$1;(statearr_18632_18698[(2)] = inst_18501);
(statearr_18632_18698[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (5)))
{var inst_18451 = cljs.core.deref.call(null,cs);var inst_18452 = cljs.core.seq.call(null,inst_18451);var inst_18453 = inst_18452;var inst_18454 = null;var inst_18455 = (0);var inst_18456 = (0);var state_18572__$1 = (function (){var statearr_18633 = state_18572;(statearr_18633[(14)] = inst_18456);
(statearr_18633[(15)] = inst_18453);
(statearr_18633[(16)] = inst_18455);
(statearr_18633[(17)] = inst_18454);
return statearr_18633;
})();var statearr_18634_18699 = state_18572__$1;(statearr_18634_18699[(2)] = null);
(statearr_18634_18699[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (14)))
{var state_18572__$1 = state_18572;var statearr_18635_18700 = state_18572__$1;(statearr_18635_18700[(2)] = null);
(statearr_18635_18700[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (45)))
{var inst_18562 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18636_18701 = state_18572__$1;(statearr_18636_18701[(2)] = inst_18562);
(statearr_18636_18701[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (26)))
{var inst_18504 = (state_18572[(29)]);var inst_18558 = (state_18572[(2)]);var inst_18559 = cljs.core.seq.call(null,inst_18504);var state_18572__$1 = (function (){var statearr_18637 = state_18572;(statearr_18637[(31)] = inst_18558);
return statearr_18637;
})();if(inst_18559)
{var statearr_18638_18702 = state_18572__$1;(statearr_18638_18702[(1)] = (42));
} else
{var statearr_18639_18703 = state_18572__$1;(statearr_18639_18703[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (16)))
{var inst_18473 = (state_18572[(7)]);var inst_18475 = cljs.core.chunked_seq_QMARK_.call(null,inst_18473);var state_18572__$1 = state_18572;if(inst_18475)
{var statearr_18640_18704 = state_18572__$1;(statearr_18640_18704[(1)] = (19));
} else
{var statearr_18641_18705 = state_18572__$1;(statearr_18641_18705[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (38)))
{var inst_18551 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18642_18706 = state_18572__$1;(statearr_18642_18706[(2)] = inst_18551);
(statearr_18642_18706[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (30)))
{var state_18572__$1 = state_18572;var statearr_18643_18707 = state_18572__$1;(statearr_18643_18707[(2)] = null);
(statearr_18643_18707[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (10)))
{var inst_18456 = (state_18572[(14)]);var inst_18454 = (state_18572[(17)]);var inst_18462 = cljs.core._nth.call(null,inst_18454,inst_18456);var inst_18463 = cljs.core.nth.call(null,inst_18462,(0),null);var inst_18464 = cljs.core.nth.call(null,inst_18462,(1),null);var state_18572__$1 = (function (){var statearr_18644 = state_18572;(statearr_18644[(26)] = inst_18463);
return statearr_18644;
})();if(cljs.core.truth_(inst_18464))
{var statearr_18645_18708 = state_18572__$1;(statearr_18645_18708[(1)] = (13));
} else
{var statearr_18646_18709 = state_18572__$1;(statearr_18646_18709[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (18)))
{var inst_18497 = (state_18572[(2)]);var state_18572__$1 = state_18572;var statearr_18647_18710 = state_18572__$1;(statearr_18647_18710[(2)] = inst_18497);
(statearr_18647_18710[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (42)))
{var state_18572__$1 = state_18572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18572__$1,(45),dchan);
} else
{if((state_val_18573 === (37)))
{var inst_18540 = (state_18572[(23)]);var inst_18531 = (state_18572[(25)]);var inst_18444 = (state_18572[(10)]);var inst_18540__$1 = cljs.core.first.call(null,inst_18531);var inst_18541 = cljs.core.async.put_BANG_.call(null,inst_18540__$1,inst_18444,done);var state_18572__$1 = (function (){var statearr_18648 = state_18572;(statearr_18648[(23)] = inst_18540__$1);
return statearr_18648;
})();if(cljs.core.truth_(inst_18541))
{var statearr_18649_18711 = state_18572__$1;(statearr_18649_18711[(1)] = (39));
} else
{var statearr_18650_18712 = state_18572__$1;(statearr_18650_18712[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18573 === (8)))
{var inst_18456 = (state_18572[(14)]);var inst_18455 = (state_18572[(16)]);var inst_18458 = (inst_18456 < inst_18455);var inst_18459 = inst_18458;var state_18572__$1 = state_18572;if(cljs.core.truth_(inst_18459))
{var statearr_18651_18713 = state_18572__$1;(statearr_18651_18713[(1)] = (10));
} else
{var statearr_18652_18714 = state_18572__$1;(statearr_18652_18714[(1)] = (11));
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
});})(c__8171__auto___18660,cs,m,dchan,dctr,done))
;return ((function (switch__8156__auto__,c__8171__auto___18660,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_18656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18656[(0)] = state_machine__8157__auto__);
(statearr_18656[(1)] = (1));
return statearr_18656;
});
var state_machine__8157__auto____1 = (function (state_18572){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_18572);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e18657){if((e18657 instanceof Object))
{var ex__8160__auto__ = e18657;var statearr_18658_18715 = state_18572;(statearr_18658_18715[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18657;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18716 = state_18572;
state_18572 = G__18716;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_18572){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_18572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___18660,cs,m,dchan,dctr,done))
})();var state__8173__auto__ = (function (){var statearr_18659 = f__8172__auto__.call(null);(statearr_18659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___18660);
return statearr_18659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___18660,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj18718 = {};return obj18718;
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
;var m = (function (){if(typeof cljs.core.async.t18838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18838 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18839){
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
this.meta18839 = meta18839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18838.cljs$lang$type = true;
cljs.core.async.t18838.cljs$lang$ctorStr = "cljs.core.async/t18838";
cljs.core.async.t18838.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t18838");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18838.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18838.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18838.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18838.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18838.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18838.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18838.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18840){var self__ = this;
var _18840__$1 = this;return self__.meta18839;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18840,meta18839__$1){var self__ = this;
var _18840__$1 = this;return (new cljs.core.async.t18838(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18839__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18838 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18838(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18839){return (new cljs.core.async.t18838(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18839));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18838(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8171__auto___18957 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___18957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___18957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18910){var state_val_18911 = (state_18910[(1)]);if((state_val_18911 === (7)))
{var inst_18854 = (state_18910[(7)]);var inst_18859 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18854);var state_18910__$1 = state_18910;var statearr_18912_18958 = state_18910__$1;(statearr_18912_18958[(2)] = inst_18859);
(statearr_18912_18958[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (20)))
{var inst_18869 = (state_18910[(8)]);var state_18910__$1 = state_18910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18910__$1,(23),out,inst_18869);
} else
{if((state_val_18911 === (1)))
{var inst_18844 = (state_18910[(9)]);var inst_18844__$1 = calc_state.call(null);var inst_18845 = cljs.core.seq_QMARK_.call(null,inst_18844__$1);var state_18910__$1 = (function (){var statearr_18913 = state_18910;(statearr_18913[(9)] = inst_18844__$1);
return statearr_18913;
})();if(inst_18845)
{var statearr_18914_18959 = state_18910__$1;(statearr_18914_18959[(1)] = (2));
} else
{var statearr_18915_18960 = state_18910__$1;(statearr_18915_18960[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (24)))
{var inst_18862 = (state_18910[(10)]);var inst_18854 = inst_18862;var state_18910__$1 = (function (){var statearr_18916 = state_18910;(statearr_18916[(7)] = inst_18854);
return statearr_18916;
})();var statearr_18917_18961 = state_18910__$1;(statearr_18917_18961[(2)] = null);
(statearr_18917_18961[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (4)))
{var inst_18844 = (state_18910[(9)]);var inst_18850 = (state_18910[(2)]);var inst_18851 = cljs.core.get.call(null,inst_18850,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18852 = cljs.core.get.call(null,inst_18850,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18853 = cljs.core.get.call(null,inst_18850,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_18854 = inst_18844;var state_18910__$1 = (function (){var statearr_18918 = state_18910;(statearr_18918[(11)] = inst_18853);
(statearr_18918[(12)] = inst_18851);
(statearr_18918[(13)] = inst_18852);
(statearr_18918[(7)] = inst_18854);
return statearr_18918;
})();var statearr_18919_18962 = state_18910__$1;(statearr_18919_18962[(2)] = null);
(statearr_18919_18962[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (15)))
{var state_18910__$1 = state_18910;var statearr_18920_18963 = state_18910__$1;(statearr_18920_18963[(2)] = null);
(statearr_18920_18963[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (21)))
{var inst_18862 = (state_18910[(10)]);var inst_18854 = inst_18862;var state_18910__$1 = (function (){var statearr_18921 = state_18910;(statearr_18921[(7)] = inst_18854);
return statearr_18921;
})();var statearr_18922_18964 = state_18910__$1;(statearr_18922_18964[(2)] = null);
(statearr_18922_18964[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (13)))
{var inst_18906 = (state_18910[(2)]);var state_18910__$1 = state_18910;var statearr_18923_18965 = state_18910__$1;(statearr_18923_18965[(2)] = inst_18906);
(statearr_18923_18965[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (22)))
{var inst_18904 = (state_18910[(2)]);var state_18910__$1 = state_18910;var statearr_18924_18966 = state_18910__$1;(statearr_18924_18966[(2)] = inst_18904);
(statearr_18924_18966[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (6)))
{var inst_18908 = (state_18910[(2)]);var state_18910__$1 = state_18910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18910__$1,inst_18908);
} else
{if((state_val_18911 === (25)))
{var state_18910__$1 = state_18910;var statearr_18925_18967 = state_18910__$1;(statearr_18925_18967[(2)] = null);
(statearr_18925_18967[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (17)))
{var inst_18884 = (state_18910[(14)]);var state_18910__$1 = state_18910;var statearr_18926_18968 = state_18910__$1;(statearr_18926_18968[(2)] = inst_18884);
(statearr_18926_18968[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (3)))
{var inst_18844 = (state_18910[(9)]);var state_18910__$1 = state_18910;var statearr_18927_18969 = state_18910__$1;(statearr_18927_18969[(2)] = inst_18844);
(statearr_18927_18969[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (12)))
{var inst_18870 = (state_18910[(15)]);var inst_18865 = (state_18910[(16)]);var inst_18884 = (state_18910[(14)]);var inst_18884__$1 = inst_18865.call(null,inst_18870);var state_18910__$1 = (function (){var statearr_18928 = state_18910;(statearr_18928[(14)] = inst_18884__$1);
return statearr_18928;
})();if(cljs.core.truth_(inst_18884__$1))
{var statearr_18929_18970 = state_18910__$1;(statearr_18929_18970[(1)] = (17));
} else
{var statearr_18930_18971 = state_18910__$1;(statearr_18930_18971[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (2)))
{var inst_18844 = (state_18910[(9)]);var inst_18847 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18844);var state_18910__$1 = state_18910;var statearr_18931_18972 = state_18910__$1;(statearr_18931_18972[(2)] = inst_18847);
(statearr_18931_18972[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (23)))
{var inst_18895 = (state_18910[(2)]);var state_18910__$1 = state_18910;if(cljs.core.truth_(inst_18895))
{var statearr_18932_18973 = state_18910__$1;(statearr_18932_18973[(1)] = (24));
} else
{var statearr_18933_18974 = state_18910__$1;(statearr_18933_18974[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (19)))
{var inst_18892 = (state_18910[(2)]);var state_18910__$1 = state_18910;if(cljs.core.truth_(inst_18892))
{var statearr_18934_18975 = state_18910__$1;(statearr_18934_18975[(1)] = (20));
} else
{var statearr_18935_18976 = state_18910__$1;(statearr_18935_18976[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (11)))
{var inst_18869 = (state_18910[(8)]);var inst_18875 = (inst_18869 == null);var state_18910__$1 = state_18910;if(cljs.core.truth_(inst_18875))
{var statearr_18936_18977 = state_18910__$1;(statearr_18936_18977[(1)] = (14));
} else
{var statearr_18937_18978 = state_18910__$1;(statearr_18937_18978[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (9)))
{var inst_18862 = (state_18910[(10)]);var inst_18862__$1 = (state_18910[(2)]);var inst_18863 = cljs.core.get.call(null,inst_18862__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18864 = cljs.core.get.call(null,inst_18862__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18865 = cljs.core.get.call(null,inst_18862__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_18910__$1 = (function (){var statearr_18938 = state_18910;(statearr_18938[(17)] = inst_18864);
(statearr_18938[(16)] = inst_18865);
(statearr_18938[(10)] = inst_18862__$1);
return statearr_18938;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18910__$1,(10),inst_18863);
} else
{if((state_val_18911 === (5)))
{var inst_18854 = (state_18910[(7)]);var inst_18857 = cljs.core.seq_QMARK_.call(null,inst_18854);var state_18910__$1 = state_18910;if(inst_18857)
{var statearr_18939_18979 = state_18910__$1;(statearr_18939_18979[(1)] = (7));
} else
{var statearr_18940_18980 = state_18910__$1;(statearr_18940_18980[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (14)))
{var inst_18870 = (state_18910[(15)]);var inst_18877 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18870);var state_18910__$1 = state_18910;var statearr_18941_18981 = state_18910__$1;(statearr_18941_18981[(2)] = inst_18877);
(statearr_18941_18981[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (26)))
{var inst_18900 = (state_18910[(2)]);var state_18910__$1 = state_18910;var statearr_18942_18982 = state_18910__$1;(statearr_18942_18982[(2)] = inst_18900);
(statearr_18942_18982[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (16)))
{var inst_18880 = (state_18910[(2)]);var inst_18881 = calc_state.call(null);var inst_18854 = inst_18881;var state_18910__$1 = (function (){var statearr_18943 = state_18910;(statearr_18943[(7)] = inst_18854);
(statearr_18943[(18)] = inst_18880);
return statearr_18943;
})();var statearr_18944_18983 = state_18910__$1;(statearr_18944_18983[(2)] = null);
(statearr_18944_18983[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (10)))
{var inst_18870 = (state_18910[(15)]);var inst_18869 = (state_18910[(8)]);var inst_18868 = (state_18910[(2)]);var inst_18869__$1 = cljs.core.nth.call(null,inst_18868,(0),null);var inst_18870__$1 = cljs.core.nth.call(null,inst_18868,(1),null);var inst_18871 = (inst_18869__$1 == null);var inst_18872 = cljs.core._EQ_.call(null,inst_18870__$1,change);var inst_18873 = (inst_18871) || (inst_18872);var state_18910__$1 = (function (){var statearr_18945 = state_18910;(statearr_18945[(15)] = inst_18870__$1);
(statearr_18945[(8)] = inst_18869__$1);
return statearr_18945;
})();if(cljs.core.truth_(inst_18873))
{var statearr_18946_18984 = state_18910__$1;(statearr_18946_18984[(1)] = (11));
} else
{var statearr_18947_18985 = state_18910__$1;(statearr_18947_18985[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (18)))
{var inst_18870 = (state_18910[(15)]);var inst_18864 = (state_18910[(17)]);var inst_18865 = (state_18910[(16)]);var inst_18887 = cljs.core.empty_QMARK_.call(null,inst_18865);var inst_18888 = inst_18864.call(null,inst_18870);var inst_18889 = cljs.core.not.call(null,inst_18888);var inst_18890 = (inst_18887) && (inst_18889);var state_18910__$1 = state_18910;var statearr_18948_18986 = state_18910__$1;(statearr_18948_18986[(2)] = inst_18890);
(statearr_18948_18986[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18911 === (8)))
{var inst_18854 = (state_18910[(7)]);var state_18910__$1 = state_18910;var statearr_18949_18987 = state_18910__$1;(statearr_18949_18987[(2)] = inst_18854);
(statearr_18949_18987[(1)] = (9));
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
});})(c__8171__auto___18957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__8156__auto__,c__8171__auto___18957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_18953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18953[(0)] = state_machine__8157__auto__);
(statearr_18953[(1)] = (1));
return statearr_18953;
});
var state_machine__8157__auto____1 = (function (state_18910){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_18910);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e18954){if((e18954 instanceof Object))
{var ex__8160__auto__ = e18954;var statearr_18955_18988 = state_18910;(statearr_18955_18988[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18910);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18989 = state_18910;
state_18910 = G__18989;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_18910){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_18910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___18957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__8173__auto__ = (function (){var statearr_18956 = f__8172__auto__.call(null);(statearr_18956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___18957);
return statearr_18956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___18957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj18991 = {};return obj18991;
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
return (function (p1__18992_SHARP_){if(cljs.core.truth_(p1__18992_SHARP_.call(null,topic)))
{return p1__18992_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18992_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3556__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19107 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19108){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19108 = meta19108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19107.cljs$lang$type = true;
cljs.core.async.t19107.cljs$lang$ctorStr = "cljs.core.async/t19107";
cljs.core.async.t19107.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4123__auto__,writer__4124__auto__,opt__4125__auto__){return cljs.core._write.call(null,writer__4124__auto__,"cljs.core.async/t19107");
});})(mults,ensure_mult))
;
cljs.core.async.t19107.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19107.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19107.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19107.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19109){var self__ = this;
var _19109__$1 = this;return self__.meta19108;
});})(mults,ensure_mult))
;
cljs.core.async.t19107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19109,meta19108__$1){var self__ = this;
var _19109__$1 = this;return (new cljs.core.async.t19107(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19108__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19107 = ((function (mults,ensure_mult){
return (function __GT_t19107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19108){return (new cljs.core.async.t19107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19108));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19107(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8171__auto___19221 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___19221,mults,ensure_mult,p){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___19221,mults,ensure_mult,p){
return (function (state_19177){var state_val_19178 = (state_19177[(1)]);if((state_val_19178 === (7)))
{var inst_19173 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19179_19222 = state_19177__$1;(statearr_19179_19222[(2)] = inst_19173);
(statearr_19179_19222[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (20)))
{var state_19177__$1 = state_19177;var statearr_19180_19223 = state_19177__$1;(statearr_19180_19223[(2)] = null);
(statearr_19180_19223[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (1)))
{var state_19177__$1 = state_19177;var statearr_19181_19224 = state_19177__$1;(statearr_19181_19224[(2)] = null);
(statearr_19181_19224[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (4)))
{var inst_19112 = (state_19177[(7)]);var inst_19112__$1 = (state_19177[(2)]);var inst_19113 = (inst_19112__$1 == null);var state_19177__$1 = (function (){var statearr_19182 = state_19177;(statearr_19182[(7)] = inst_19112__$1);
return statearr_19182;
})();if(cljs.core.truth_(inst_19113))
{var statearr_19183_19225 = state_19177__$1;(statearr_19183_19225[(1)] = (5));
} else
{var statearr_19184_19226 = state_19177__$1;(statearr_19184_19226[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (15)))
{var inst_19154 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19185_19227 = state_19177__$1;(statearr_19185_19227[(2)] = inst_19154);
(statearr_19185_19227[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (21)))
{var inst_19160 = (state_19177[(8)]);var inst_19168 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19160);var state_19177__$1 = state_19177;var statearr_19186_19228 = state_19177__$1;(statearr_19186_19228[(2)] = inst_19168);
(statearr_19186_19228[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (13)))
{var inst_19136 = (state_19177[(9)]);var inst_19138 = cljs.core.chunked_seq_QMARK_.call(null,inst_19136);var state_19177__$1 = state_19177;if(inst_19138)
{var statearr_19187_19229 = state_19177__$1;(statearr_19187_19229[(1)] = (16));
} else
{var statearr_19188_19230 = state_19177__$1;(statearr_19188_19230[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (22)))
{var inst_19170 = (state_19177[(2)]);var state_19177__$1 = (function (){var statearr_19189 = state_19177;(statearr_19189[(10)] = inst_19170);
return statearr_19189;
})();var statearr_19190_19231 = state_19177__$1;(statearr_19190_19231[(2)] = null);
(statearr_19190_19231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (6)))
{var inst_19112 = (state_19177[(7)]);var inst_19160 = (state_19177[(8)]);var inst_19160__$1 = topic_fn.call(null,inst_19112);var inst_19161 = cljs.core.deref.call(null,mults);var inst_19162 = cljs.core.get.call(null,inst_19161,inst_19160__$1);var inst_19163 = cljs.core.async.muxch_STAR_.call(null,inst_19162);var state_19177__$1 = (function (){var statearr_19191 = state_19177;(statearr_19191[(8)] = inst_19160__$1);
return statearr_19191;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19177__$1,(19),inst_19163,inst_19112);
} else
{if((state_val_19178 === (17)))
{var inst_19136 = (state_19177[(9)]);var inst_19145 = cljs.core.first.call(null,inst_19136);var inst_19146 = cljs.core.async.muxch_STAR_.call(null,inst_19145);var inst_19147 = cljs.core.async.close_BANG_.call(null,inst_19146);var inst_19148 = cljs.core.next.call(null,inst_19136);var inst_19122 = inst_19148;var inst_19123 = null;var inst_19124 = (0);var inst_19125 = (0);var state_19177__$1 = (function (){var statearr_19192 = state_19177;(statearr_19192[(11)] = inst_19124);
(statearr_19192[(12)] = inst_19122);
(statearr_19192[(13)] = inst_19147);
(statearr_19192[(14)] = inst_19123);
(statearr_19192[(15)] = inst_19125);
return statearr_19192;
})();var statearr_19193_19232 = state_19177__$1;(statearr_19193_19232[(2)] = null);
(statearr_19193_19232[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (3)))
{var inst_19175 = (state_19177[(2)]);var state_19177__$1 = state_19177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19177__$1,inst_19175);
} else
{if((state_val_19178 === (12)))
{var inst_19156 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19194_19233 = state_19177__$1;(statearr_19194_19233[(2)] = inst_19156);
(statearr_19194_19233[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (2)))
{var state_19177__$1 = state_19177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19177__$1,(4),ch);
} else
{if((state_val_19178 === (19)))
{var inst_19165 = (state_19177[(2)]);var state_19177__$1 = state_19177;if(cljs.core.truth_(inst_19165))
{var statearr_19195_19234 = state_19177__$1;(statearr_19195_19234[(1)] = (20));
} else
{var statearr_19196_19235 = state_19177__$1;(statearr_19196_19235[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (11)))
{var inst_19136 = (state_19177[(9)]);var inst_19122 = (state_19177[(12)]);var inst_19136__$1 = cljs.core.seq.call(null,inst_19122);var state_19177__$1 = (function (){var statearr_19197 = state_19177;(statearr_19197[(9)] = inst_19136__$1);
return statearr_19197;
})();if(inst_19136__$1)
{var statearr_19198_19236 = state_19177__$1;(statearr_19198_19236[(1)] = (13));
} else
{var statearr_19199_19237 = state_19177__$1;(statearr_19199_19237[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (9)))
{var inst_19158 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19200_19238 = state_19177__$1;(statearr_19200_19238[(2)] = inst_19158);
(statearr_19200_19238[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (5)))
{var inst_19119 = cljs.core.deref.call(null,mults);var inst_19120 = cljs.core.vals.call(null,inst_19119);var inst_19121 = cljs.core.seq.call(null,inst_19120);var inst_19122 = inst_19121;var inst_19123 = null;var inst_19124 = (0);var inst_19125 = (0);var state_19177__$1 = (function (){var statearr_19201 = state_19177;(statearr_19201[(11)] = inst_19124);
(statearr_19201[(12)] = inst_19122);
(statearr_19201[(14)] = inst_19123);
(statearr_19201[(15)] = inst_19125);
return statearr_19201;
})();var statearr_19202_19239 = state_19177__$1;(statearr_19202_19239[(2)] = null);
(statearr_19202_19239[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (14)))
{var state_19177__$1 = state_19177;var statearr_19206_19240 = state_19177__$1;(statearr_19206_19240[(2)] = null);
(statearr_19206_19240[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (16)))
{var inst_19136 = (state_19177[(9)]);var inst_19140 = cljs.core.chunk_first.call(null,inst_19136);var inst_19141 = cljs.core.chunk_rest.call(null,inst_19136);var inst_19142 = cljs.core.count.call(null,inst_19140);var inst_19122 = inst_19141;var inst_19123 = inst_19140;var inst_19124 = inst_19142;var inst_19125 = (0);var state_19177__$1 = (function (){var statearr_19207 = state_19177;(statearr_19207[(11)] = inst_19124);
(statearr_19207[(12)] = inst_19122);
(statearr_19207[(14)] = inst_19123);
(statearr_19207[(15)] = inst_19125);
return statearr_19207;
})();var statearr_19208_19241 = state_19177__$1;(statearr_19208_19241[(2)] = null);
(statearr_19208_19241[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (10)))
{var inst_19124 = (state_19177[(11)]);var inst_19122 = (state_19177[(12)]);var inst_19123 = (state_19177[(14)]);var inst_19125 = (state_19177[(15)]);var inst_19130 = cljs.core._nth.call(null,inst_19123,inst_19125);var inst_19131 = cljs.core.async.muxch_STAR_.call(null,inst_19130);var inst_19132 = cljs.core.async.close_BANG_.call(null,inst_19131);var inst_19133 = (inst_19125 + (1));var tmp19203 = inst_19124;var tmp19204 = inst_19122;var tmp19205 = inst_19123;var inst_19122__$1 = tmp19204;var inst_19123__$1 = tmp19205;var inst_19124__$1 = tmp19203;var inst_19125__$1 = inst_19133;var state_19177__$1 = (function (){var statearr_19209 = state_19177;(statearr_19209[(11)] = inst_19124__$1);
(statearr_19209[(16)] = inst_19132);
(statearr_19209[(12)] = inst_19122__$1);
(statearr_19209[(14)] = inst_19123__$1);
(statearr_19209[(15)] = inst_19125__$1);
return statearr_19209;
})();var statearr_19210_19242 = state_19177__$1;(statearr_19210_19242[(2)] = null);
(statearr_19210_19242[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (18)))
{var inst_19151 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19211_19243 = state_19177__$1;(statearr_19211_19243[(2)] = inst_19151);
(statearr_19211_19243[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (8)))
{var inst_19124 = (state_19177[(11)]);var inst_19125 = (state_19177[(15)]);var inst_19127 = (inst_19125 < inst_19124);var inst_19128 = inst_19127;var state_19177__$1 = state_19177;if(cljs.core.truth_(inst_19128))
{var statearr_19212_19244 = state_19177__$1;(statearr_19212_19244[(1)] = (10));
} else
{var statearr_19213_19245 = state_19177__$1;(statearr_19213_19245[(1)] = (11));
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
});})(c__8171__auto___19221,mults,ensure_mult,p))
;return ((function (switch__8156__auto__,c__8171__auto___19221,mults,ensure_mult,p){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_19217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19217[(0)] = state_machine__8157__auto__);
(statearr_19217[(1)] = (1));
return statearr_19217;
});
var state_machine__8157__auto____1 = (function (state_19177){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_19177);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e19218){if((e19218 instanceof Object))
{var ex__8160__auto__ = e19218;var statearr_19219_19246 = state_19177;(statearr_19219_19246[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19218;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19247 = state_19177;
state_19177 = G__19247;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_19177){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_19177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___19221,mults,ensure_mult,p))
})();var state__8173__auto__ = (function (){var statearr_19220 = f__8172__auto__.call(null);(statearr_19220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___19221);
return statearr_19220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___19221,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__8171__auto___19384 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___19384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___19384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19354){var state_val_19355 = (state_19354[(1)]);if((state_val_19355 === (7)))
{var state_19354__$1 = state_19354;var statearr_19356_19385 = state_19354__$1;(statearr_19356_19385[(2)] = null);
(statearr_19356_19385[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (1)))
{var state_19354__$1 = state_19354;var statearr_19357_19386 = state_19354__$1;(statearr_19357_19386[(2)] = null);
(statearr_19357_19386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (4)))
{var inst_19318 = (state_19354[(7)]);var inst_19320 = (inst_19318 < cnt);var state_19354__$1 = state_19354;if(cljs.core.truth_(inst_19320))
{var statearr_19358_19387 = state_19354__$1;(statearr_19358_19387[(1)] = (6));
} else
{var statearr_19359_19388 = state_19354__$1;(statearr_19359_19388[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (15)))
{var inst_19350 = (state_19354[(2)]);var state_19354__$1 = state_19354;var statearr_19360_19389 = state_19354__$1;(statearr_19360_19389[(2)] = inst_19350);
(statearr_19360_19389[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (13)))
{var inst_19343 = cljs.core.async.close_BANG_.call(null,out);var state_19354__$1 = state_19354;var statearr_19361_19390 = state_19354__$1;(statearr_19361_19390[(2)] = inst_19343);
(statearr_19361_19390[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (6)))
{var state_19354__$1 = state_19354;var statearr_19362_19391 = state_19354__$1;(statearr_19362_19391[(2)] = null);
(statearr_19362_19391[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (3)))
{var inst_19352 = (state_19354[(2)]);var state_19354__$1 = state_19354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19354__$1,inst_19352);
} else
{if((state_val_19355 === (12)))
{var inst_19340 = (state_19354[(8)]);var inst_19340__$1 = (state_19354[(2)]);var inst_19341 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19340__$1);var state_19354__$1 = (function (){var statearr_19363 = state_19354;(statearr_19363[(8)] = inst_19340__$1);
return statearr_19363;
})();if(cljs.core.truth_(inst_19341))
{var statearr_19364_19392 = state_19354__$1;(statearr_19364_19392[(1)] = (13));
} else
{var statearr_19365_19393 = state_19354__$1;(statearr_19365_19393[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (2)))
{var inst_19317 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19318 = (0);var state_19354__$1 = (function (){var statearr_19366 = state_19354;(statearr_19366[(7)] = inst_19318);
(statearr_19366[(9)] = inst_19317);
return statearr_19366;
})();var statearr_19367_19394 = state_19354__$1;(statearr_19367_19394[(2)] = null);
(statearr_19367_19394[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (11)))
{var inst_19318 = (state_19354[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19354,(10),Object,null,(9));var inst_19327 = chs__$1.call(null,inst_19318);var inst_19328 = done.call(null,inst_19318);var inst_19329 = cljs.core.async.take_BANG_.call(null,inst_19327,inst_19328);var state_19354__$1 = state_19354;var statearr_19368_19395 = state_19354__$1;(statearr_19368_19395[(2)] = inst_19329);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19354__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (9)))
{var inst_19318 = (state_19354[(7)]);var inst_19331 = (state_19354[(2)]);var inst_19332 = (inst_19318 + (1));var inst_19318__$1 = inst_19332;var state_19354__$1 = (function (){var statearr_19369 = state_19354;(statearr_19369[(10)] = inst_19331);
(statearr_19369[(7)] = inst_19318__$1);
return statearr_19369;
})();var statearr_19370_19396 = state_19354__$1;(statearr_19370_19396[(2)] = null);
(statearr_19370_19396[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (5)))
{var inst_19338 = (state_19354[(2)]);var state_19354__$1 = (function (){var statearr_19371 = state_19354;(statearr_19371[(11)] = inst_19338);
return statearr_19371;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19354__$1,(12),dchan);
} else
{if((state_val_19355 === (14)))
{var inst_19340 = (state_19354[(8)]);var inst_19345 = cljs.core.apply.call(null,f,inst_19340);var state_19354__$1 = state_19354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19354__$1,(16),out,inst_19345);
} else
{if((state_val_19355 === (16)))
{var inst_19347 = (state_19354[(2)]);var state_19354__$1 = (function (){var statearr_19372 = state_19354;(statearr_19372[(12)] = inst_19347);
return statearr_19372;
})();var statearr_19373_19397 = state_19354__$1;(statearr_19373_19397[(2)] = null);
(statearr_19373_19397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (10)))
{var inst_19322 = (state_19354[(2)]);var inst_19323 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19354__$1 = (function (){var statearr_19374 = state_19354;(statearr_19374[(13)] = inst_19322);
return statearr_19374;
})();var statearr_19375_19398 = state_19354__$1;(statearr_19375_19398[(2)] = inst_19323);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19354__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19355 === (8)))
{var inst_19336 = (state_19354[(2)]);var state_19354__$1 = state_19354;var statearr_19376_19399 = state_19354__$1;(statearr_19376_19399[(2)] = inst_19336);
(statearr_19376_19399[(1)] = (5));
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
});})(c__8171__auto___19384,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__8156__auto__,c__8171__auto___19384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_19380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19380[(0)] = state_machine__8157__auto__);
(statearr_19380[(1)] = (1));
return statearr_19380;
});
var state_machine__8157__auto____1 = (function (state_19354){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_19354);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e19381){if((e19381 instanceof Object))
{var ex__8160__auto__ = e19381;var statearr_19382_19400 = state_19354;(statearr_19382_19400[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19354);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19381;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19401 = state_19354;
state_19354 = G__19401;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_19354){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_19354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___19384,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__8173__auto__ = (function (){var statearr_19383 = f__8172__auto__.call(null);(statearr_19383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___19384);
return statearr_19383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___19384,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8171__auto___19509 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___19509,out){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___19509,out){
return (function (state_19485){var state_val_19486 = (state_19485[(1)]);if((state_val_19486 === (7)))
{var inst_19465 = (state_19485[(7)]);var inst_19464 = (state_19485[(8)]);var inst_19464__$1 = (state_19485[(2)]);var inst_19465__$1 = cljs.core.nth.call(null,inst_19464__$1,(0),null);var inst_19466 = cljs.core.nth.call(null,inst_19464__$1,(1),null);var inst_19467 = (inst_19465__$1 == null);var state_19485__$1 = (function (){var statearr_19487 = state_19485;(statearr_19487[(7)] = inst_19465__$1);
(statearr_19487[(9)] = inst_19466);
(statearr_19487[(8)] = inst_19464__$1);
return statearr_19487;
})();if(cljs.core.truth_(inst_19467))
{var statearr_19488_19510 = state_19485__$1;(statearr_19488_19510[(1)] = (8));
} else
{var statearr_19489_19511 = state_19485__$1;(statearr_19489_19511[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19486 === (1)))
{var inst_19456 = cljs.core.vec.call(null,chs);var inst_19457 = inst_19456;var state_19485__$1 = (function (){var statearr_19490 = state_19485;(statearr_19490[(10)] = inst_19457);
return statearr_19490;
})();var statearr_19491_19512 = state_19485__$1;(statearr_19491_19512[(2)] = null);
(statearr_19491_19512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19486 === (4)))
{var inst_19457 = (state_19485[(10)]);var state_19485__$1 = state_19485;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19485__$1,(7),inst_19457);
} else
{if((state_val_19486 === (6)))
{var inst_19481 = (state_19485[(2)]);var state_19485__$1 = state_19485;var statearr_19492_19513 = state_19485__$1;(statearr_19492_19513[(2)] = inst_19481);
(statearr_19492_19513[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19486 === (3)))
{var inst_19483 = (state_19485[(2)]);var state_19485__$1 = state_19485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19485__$1,inst_19483);
} else
{if((state_val_19486 === (2)))
{var inst_19457 = (state_19485[(10)]);var inst_19459 = cljs.core.count.call(null,inst_19457);var inst_19460 = (inst_19459 > (0));var state_19485__$1 = state_19485;if(cljs.core.truth_(inst_19460))
{var statearr_19494_19514 = state_19485__$1;(statearr_19494_19514[(1)] = (4));
} else
{var statearr_19495_19515 = state_19485__$1;(statearr_19495_19515[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19486 === (11)))
{var inst_19457 = (state_19485[(10)]);var inst_19474 = (state_19485[(2)]);var tmp19493 = inst_19457;var inst_19457__$1 = tmp19493;var state_19485__$1 = (function (){var statearr_19496 = state_19485;(statearr_19496[(11)] = inst_19474);
(statearr_19496[(10)] = inst_19457__$1);
return statearr_19496;
})();var statearr_19497_19516 = state_19485__$1;(statearr_19497_19516[(2)] = null);
(statearr_19497_19516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19486 === (9)))
{var inst_19465 = (state_19485[(7)]);var state_19485__$1 = state_19485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19485__$1,(11),out,inst_19465);
} else
{if((state_val_19486 === (5)))
{var inst_19479 = cljs.core.async.close_BANG_.call(null,out);var state_19485__$1 = state_19485;var statearr_19498_19517 = state_19485__$1;(statearr_19498_19517[(2)] = inst_19479);
(statearr_19498_19517[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19486 === (10)))
{var inst_19477 = (state_19485[(2)]);var state_19485__$1 = state_19485;var statearr_19499_19518 = state_19485__$1;(statearr_19499_19518[(2)] = inst_19477);
(statearr_19499_19518[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19486 === (8)))
{var inst_19465 = (state_19485[(7)]);var inst_19466 = (state_19485[(9)]);var inst_19457 = (state_19485[(10)]);var inst_19464 = (state_19485[(8)]);var inst_19469 = (function (){var c = inst_19466;var v = inst_19465;var vec__19462 = inst_19464;var cs = inst_19457;return ((function (c,v,vec__19462,cs,inst_19465,inst_19466,inst_19457,inst_19464,state_val_19486,c__8171__auto___19509,out){
return (function (p1__19402_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19402_SHARP_);
});
;})(c,v,vec__19462,cs,inst_19465,inst_19466,inst_19457,inst_19464,state_val_19486,c__8171__auto___19509,out))
})();var inst_19470 = cljs.core.filterv.call(null,inst_19469,inst_19457);var inst_19457__$1 = inst_19470;var state_19485__$1 = (function (){var statearr_19500 = state_19485;(statearr_19500[(10)] = inst_19457__$1);
return statearr_19500;
})();var statearr_19501_19519 = state_19485__$1;(statearr_19501_19519[(2)] = null);
(statearr_19501_19519[(1)] = (2));
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
});})(c__8171__auto___19509,out))
;return ((function (switch__8156__auto__,c__8171__auto___19509,out){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_19505 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19505[(0)] = state_machine__8157__auto__);
(statearr_19505[(1)] = (1));
return statearr_19505;
});
var state_machine__8157__auto____1 = (function (state_19485){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_19485);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e19506){if((e19506 instanceof Object))
{var ex__8160__auto__ = e19506;var statearr_19507_19520 = state_19485;(statearr_19507_19520[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19506;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19521 = state_19485;
state_19485 = G__19521;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_19485){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_19485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___19509,out))
})();var state__8173__auto__ = (function (){var statearr_19508 = f__8172__auto__.call(null);(statearr_19508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___19509);
return statearr_19508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___19509,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8171__auto___19614 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___19614,out){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___19614,out){
return (function (state_19591){var state_val_19592 = (state_19591[(1)]);if((state_val_19592 === (7)))
{var inst_19573 = (state_19591[(7)]);var inst_19573__$1 = (state_19591[(2)]);var inst_19574 = (inst_19573__$1 == null);var inst_19575 = cljs.core.not.call(null,inst_19574);var state_19591__$1 = (function (){var statearr_19593 = state_19591;(statearr_19593[(7)] = inst_19573__$1);
return statearr_19593;
})();if(inst_19575)
{var statearr_19594_19615 = state_19591__$1;(statearr_19594_19615[(1)] = (8));
} else
{var statearr_19595_19616 = state_19591__$1;(statearr_19595_19616[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19592 === (1)))
{var inst_19568 = (0);var state_19591__$1 = (function (){var statearr_19596 = state_19591;(statearr_19596[(8)] = inst_19568);
return statearr_19596;
})();var statearr_19597_19617 = state_19591__$1;(statearr_19597_19617[(2)] = null);
(statearr_19597_19617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19592 === (4)))
{var state_19591__$1 = state_19591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19591__$1,(7),ch);
} else
{if((state_val_19592 === (6)))
{var inst_19586 = (state_19591[(2)]);var state_19591__$1 = state_19591;var statearr_19598_19618 = state_19591__$1;(statearr_19598_19618[(2)] = inst_19586);
(statearr_19598_19618[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19592 === (3)))
{var inst_19588 = (state_19591[(2)]);var inst_19589 = cljs.core.async.close_BANG_.call(null,out);var state_19591__$1 = (function (){var statearr_19599 = state_19591;(statearr_19599[(9)] = inst_19588);
return statearr_19599;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19591__$1,inst_19589);
} else
{if((state_val_19592 === (2)))
{var inst_19568 = (state_19591[(8)]);var inst_19570 = (inst_19568 < n);var state_19591__$1 = state_19591;if(cljs.core.truth_(inst_19570))
{var statearr_19600_19619 = state_19591__$1;(statearr_19600_19619[(1)] = (4));
} else
{var statearr_19601_19620 = state_19591__$1;(statearr_19601_19620[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19592 === (11)))
{var inst_19568 = (state_19591[(8)]);var inst_19578 = (state_19591[(2)]);var inst_19579 = (inst_19568 + (1));var inst_19568__$1 = inst_19579;var state_19591__$1 = (function (){var statearr_19602 = state_19591;(statearr_19602[(8)] = inst_19568__$1);
(statearr_19602[(10)] = inst_19578);
return statearr_19602;
})();var statearr_19603_19621 = state_19591__$1;(statearr_19603_19621[(2)] = null);
(statearr_19603_19621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19592 === (9)))
{var state_19591__$1 = state_19591;var statearr_19604_19622 = state_19591__$1;(statearr_19604_19622[(2)] = null);
(statearr_19604_19622[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19592 === (5)))
{var state_19591__$1 = state_19591;var statearr_19605_19623 = state_19591__$1;(statearr_19605_19623[(2)] = null);
(statearr_19605_19623[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19592 === (10)))
{var inst_19583 = (state_19591[(2)]);var state_19591__$1 = state_19591;var statearr_19606_19624 = state_19591__$1;(statearr_19606_19624[(2)] = inst_19583);
(statearr_19606_19624[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19592 === (8)))
{var inst_19573 = (state_19591[(7)]);var state_19591__$1 = state_19591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19591__$1,(11),out,inst_19573);
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
});})(c__8171__auto___19614,out))
;return ((function (switch__8156__auto__,c__8171__auto___19614,out){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_19610 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19610[(0)] = state_machine__8157__auto__);
(statearr_19610[(1)] = (1));
return statearr_19610;
});
var state_machine__8157__auto____1 = (function (state_19591){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_19591);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e19611){if((e19611 instanceof Object))
{var ex__8160__auto__ = e19611;var statearr_19612_19625 = state_19591;(statearr_19612_19625[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19591);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19611;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19626 = state_19591;
state_19591 = G__19626;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_19591){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_19591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___19614,out))
})();var state__8173__auto__ = (function (){var statearr_19613 = f__8172__auto__.call(null);(statearr_19613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___19614);
return statearr_19613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___19614,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8171__auto___19723 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___19723,out){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___19723,out){
return (function (state_19698){var state_val_19699 = (state_19698[(1)]);if((state_val_19699 === (7)))
{var inst_19693 = (state_19698[(2)]);var state_19698__$1 = state_19698;var statearr_19700_19724 = state_19698__$1;(statearr_19700_19724[(2)] = inst_19693);
(statearr_19700_19724[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19699 === (1)))
{var inst_19675 = null;var state_19698__$1 = (function (){var statearr_19701 = state_19698;(statearr_19701[(7)] = inst_19675);
return statearr_19701;
})();var statearr_19702_19725 = state_19698__$1;(statearr_19702_19725[(2)] = null);
(statearr_19702_19725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19699 === (4)))
{var inst_19678 = (state_19698[(8)]);var inst_19678__$1 = (state_19698[(2)]);var inst_19679 = (inst_19678__$1 == null);var inst_19680 = cljs.core.not.call(null,inst_19679);var state_19698__$1 = (function (){var statearr_19703 = state_19698;(statearr_19703[(8)] = inst_19678__$1);
return statearr_19703;
})();if(inst_19680)
{var statearr_19704_19726 = state_19698__$1;(statearr_19704_19726[(1)] = (5));
} else
{var statearr_19705_19727 = state_19698__$1;(statearr_19705_19727[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19699 === (6)))
{var state_19698__$1 = state_19698;var statearr_19706_19728 = state_19698__$1;(statearr_19706_19728[(2)] = null);
(statearr_19706_19728[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19699 === (3)))
{var inst_19695 = (state_19698[(2)]);var inst_19696 = cljs.core.async.close_BANG_.call(null,out);var state_19698__$1 = (function (){var statearr_19707 = state_19698;(statearr_19707[(9)] = inst_19695);
return statearr_19707;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19698__$1,inst_19696);
} else
{if((state_val_19699 === (2)))
{var state_19698__$1 = state_19698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19698__$1,(4),ch);
} else
{if((state_val_19699 === (11)))
{var inst_19678 = (state_19698[(8)]);var inst_19687 = (state_19698[(2)]);var inst_19675 = inst_19678;var state_19698__$1 = (function (){var statearr_19708 = state_19698;(statearr_19708[(7)] = inst_19675);
(statearr_19708[(10)] = inst_19687);
return statearr_19708;
})();var statearr_19709_19729 = state_19698__$1;(statearr_19709_19729[(2)] = null);
(statearr_19709_19729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19699 === (9)))
{var inst_19678 = (state_19698[(8)]);var state_19698__$1 = state_19698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19698__$1,(11),out,inst_19678);
} else
{if((state_val_19699 === (5)))
{var inst_19675 = (state_19698[(7)]);var inst_19678 = (state_19698[(8)]);var inst_19682 = cljs.core._EQ_.call(null,inst_19678,inst_19675);var state_19698__$1 = state_19698;if(inst_19682)
{var statearr_19711_19730 = state_19698__$1;(statearr_19711_19730[(1)] = (8));
} else
{var statearr_19712_19731 = state_19698__$1;(statearr_19712_19731[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19699 === (10)))
{var inst_19690 = (state_19698[(2)]);var state_19698__$1 = state_19698;var statearr_19713_19732 = state_19698__$1;(statearr_19713_19732[(2)] = inst_19690);
(statearr_19713_19732[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19699 === (8)))
{var inst_19675 = (state_19698[(7)]);var tmp19710 = inst_19675;var inst_19675__$1 = tmp19710;var state_19698__$1 = (function (){var statearr_19714 = state_19698;(statearr_19714[(7)] = inst_19675__$1);
return statearr_19714;
})();var statearr_19715_19733 = state_19698__$1;(statearr_19715_19733[(2)] = null);
(statearr_19715_19733[(1)] = (2));
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
});})(c__8171__auto___19723,out))
;return ((function (switch__8156__auto__,c__8171__auto___19723,out){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_19719 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19719[(0)] = state_machine__8157__auto__);
(statearr_19719[(1)] = (1));
return statearr_19719;
});
var state_machine__8157__auto____1 = (function (state_19698){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_19698);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e19720){if((e19720 instanceof Object))
{var ex__8160__auto__ = e19720;var statearr_19721_19734 = state_19698;(statearr_19721_19734[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19698);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19735 = state_19698;
state_19698 = G__19735;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_19698){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_19698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___19723,out))
})();var state__8173__auto__ = (function (){var statearr_19722 = f__8172__auto__.call(null);(statearr_19722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___19723);
return statearr_19722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___19723,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8171__auto___19870 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___19870,out){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___19870,out){
return (function (state_19840){var state_val_19841 = (state_19840[(1)]);if((state_val_19841 === (7)))
{var inst_19836 = (state_19840[(2)]);var state_19840__$1 = state_19840;var statearr_19842_19871 = state_19840__$1;(statearr_19842_19871[(2)] = inst_19836);
(statearr_19842_19871[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (1)))
{var inst_19803 = (new Array(n));var inst_19804 = inst_19803;var inst_19805 = (0);var state_19840__$1 = (function (){var statearr_19843 = state_19840;(statearr_19843[(7)] = inst_19805);
(statearr_19843[(8)] = inst_19804);
return statearr_19843;
})();var statearr_19844_19872 = state_19840__$1;(statearr_19844_19872[(2)] = null);
(statearr_19844_19872[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (4)))
{var inst_19808 = (state_19840[(9)]);var inst_19808__$1 = (state_19840[(2)]);var inst_19809 = (inst_19808__$1 == null);var inst_19810 = cljs.core.not.call(null,inst_19809);var state_19840__$1 = (function (){var statearr_19845 = state_19840;(statearr_19845[(9)] = inst_19808__$1);
return statearr_19845;
})();if(inst_19810)
{var statearr_19846_19873 = state_19840__$1;(statearr_19846_19873[(1)] = (5));
} else
{var statearr_19847_19874 = state_19840__$1;(statearr_19847_19874[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (15)))
{var inst_19830 = (state_19840[(2)]);var state_19840__$1 = state_19840;var statearr_19848_19875 = state_19840__$1;(statearr_19848_19875[(2)] = inst_19830);
(statearr_19848_19875[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (13)))
{var state_19840__$1 = state_19840;var statearr_19849_19876 = state_19840__$1;(statearr_19849_19876[(2)] = null);
(statearr_19849_19876[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (6)))
{var inst_19805 = (state_19840[(7)]);var inst_19826 = (inst_19805 > (0));var state_19840__$1 = state_19840;if(cljs.core.truth_(inst_19826))
{var statearr_19850_19877 = state_19840__$1;(statearr_19850_19877[(1)] = (12));
} else
{var statearr_19851_19878 = state_19840__$1;(statearr_19851_19878[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (3)))
{var inst_19838 = (state_19840[(2)]);var state_19840__$1 = state_19840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19840__$1,inst_19838);
} else
{if((state_val_19841 === (12)))
{var inst_19804 = (state_19840[(8)]);var inst_19828 = cljs.core.vec.call(null,inst_19804);var state_19840__$1 = state_19840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19840__$1,(15),out,inst_19828);
} else
{if((state_val_19841 === (2)))
{var state_19840__$1 = state_19840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19840__$1,(4),ch);
} else
{if((state_val_19841 === (11)))
{var inst_19820 = (state_19840[(2)]);var inst_19821 = (new Array(n));var inst_19804 = inst_19821;var inst_19805 = (0);var state_19840__$1 = (function (){var statearr_19852 = state_19840;(statearr_19852[(7)] = inst_19805);
(statearr_19852[(10)] = inst_19820);
(statearr_19852[(8)] = inst_19804);
return statearr_19852;
})();var statearr_19853_19879 = state_19840__$1;(statearr_19853_19879[(2)] = null);
(statearr_19853_19879[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (9)))
{var inst_19804 = (state_19840[(8)]);var inst_19818 = cljs.core.vec.call(null,inst_19804);var state_19840__$1 = state_19840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19840__$1,(11),out,inst_19818);
} else
{if((state_val_19841 === (5)))
{var inst_19805 = (state_19840[(7)]);var inst_19808 = (state_19840[(9)]);var inst_19804 = (state_19840[(8)]);var inst_19813 = (state_19840[(11)]);var inst_19812 = (inst_19804[inst_19805] = inst_19808);var inst_19813__$1 = (inst_19805 + (1));var inst_19814 = (inst_19813__$1 < n);var state_19840__$1 = (function (){var statearr_19854 = state_19840;(statearr_19854[(12)] = inst_19812);
(statearr_19854[(11)] = inst_19813__$1);
return statearr_19854;
})();if(cljs.core.truth_(inst_19814))
{var statearr_19855_19880 = state_19840__$1;(statearr_19855_19880[(1)] = (8));
} else
{var statearr_19856_19881 = state_19840__$1;(statearr_19856_19881[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (14)))
{var inst_19833 = (state_19840[(2)]);var inst_19834 = cljs.core.async.close_BANG_.call(null,out);var state_19840__$1 = (function (){var statearr_19858 = state_19840;(statearr_19858[(13)] = inst_19833);
return statearr_19858;
})();var statearr_19859_19882 = state_19840__$1;(statearr_19859_19882[(2)] = inst_19834);
(statearr_19859_19882[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (10)))
{var inst_19824 = (state_19840[(2)]);var state_19840__$1 = state_19840;var statearr_19860_19883 = state_19840__$1;(statearr_19860_19883[(2)] = inst_19824);
(statearr_19860_19883[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19841 === (8)))
{var inst_19804 = (state_19840[(8)]);var inst_19813 = (state_19840[(11)]);var tmp19857 = inst_19804;var inst_19804__$1 = tmp19857;var inst_19805 = inst_19813;var state_19840__$1 = (function (){var statearr_19861 = state_19840;(statearr_19861[(7)] = inst_19805);
(statearr_19861[(8)] = inst_19804__$1);
return statearr_19861;
})();var statearr_19862_19884 = state_19840__$1;(statearr_19862_19884[(2)] = null);
(statearr_19862_19884[(1)] = (2));
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
});})(c__8171__auto___19870,out))
;return ((function (switch__8156__auto__,c__8171__auto___19870,out){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_19866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19866[(0)] = state_machine__8157__auto__);
(statearr_19866[(1)] = (1));
return statearr_19866;
});
var state_machine__8157__auto____1 = (function (state_19840){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_19840);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e19867){if((e19867 instanceof Object))
{var ex__8160__auto__ = e19867;var statearr_19868_19885 = state_19840;(statearr_19868_19885[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19867;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19886 = state_19840;
state_19840 = G__19886;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_19840){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_19840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___19870,out))
})();var state__8173__auto__ = (function (){var statearr_19869 = f__8172__auto__.call(null);(statearr_19869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___19870);
return statearr_19869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___19870,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8171__auto___20029 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___20029,out){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___20029,out){
return (function (state_19999){var state_val_20000 = (state_19999[(1)]);if((state_val_20000 === (7)))
{var inst_19995 = (state_19999[(2)]);var state_19999__$1 = state_19999;var statearr_20001_20030 = state_19999__$1;(statearr_20001_20030[(2)] = inst_19995);
(statearr_20001_20030[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (1)))
{var inst_19958 = [];var inst_19959 = inst_19958;var inst_19960 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19999__$1 = (function (){var statearr_20002 = state_19999;(statearr_20002[(7)] = inst_19959);
(statearr_20002[(8)] = inst_19960);
return statearr_20002;
})();var statearr_20003_20031 = state_19999__$1;(statearr_20003_20031[(2)] = null);
(statearr_20003_20031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (4)))
{var inst_19963 = (state_19999[(9)]);var inst_19963__$1 = (state_19999[(2)]);var inst_19964 = (inst_19963__$1 == null);var inst_19965 = cljs.core.not.call(null,inst_19964);var state_19999__$1 = (function (){var statearr_20004 = state_19999;(statearr_20004[(9)] = inst_19963__$1);
return statearr_20004;
})();if(inst_19965)
{var statearr_20005_20032 = state_19999__$1;(statearr_20005_20032[(1)] = (5));
} else
{var statearr_20006_20033 = state_19999__$1;(statearr_20006_20033[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (15)))
{var inst_19989 = (state_19999[(2)]);var state_19999__$1 = state_19999;var statearr_20007_20034 = state_19999__$1;(statearr_20007_20034[(2)] = inst_19989);
(statearr_20007_20034[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (13)))
{var state_19999__$1 = state_19999;var statearr_20008_20035 = state_19999__$1;(statearr_20008_20035[(2)] = null);
(statearr_20008_20035[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (6)))
{var inst_19959 = (state_19999[(7)]);var inst_19984 = inst_19959.length;var inst_19985 = (inst_19984 > (0));var state_19999__$1 = state_19999;if(cljs.core.truth_(inst_19985))
{var statearr_20009_20036 = state_19999__$1;(statearr_20009_20036[(1)] = (12));
} else
{var statearr_20010_20037 = state_19999__$1;(statearr_20010_20037[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (3)))
{var inst_19997 = (state_19999[(2)]);var state_19999__$1 = state_19999;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19999__$1,inst_19997);
} else
{if((state_val_20000 === (12)))
{var inst_19959 = (state_19999[(7)]);var inst_19987 = cljs.core.vec.call(null,inst_19959);var state_19999__$1 = state_19999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19999__$1,(15),out,inst_19987);
} else
{if((state_val_20000 === (2)))
{var state_19999__$1 = state_19999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19999__$1,(4),ch);
} else
{if((state_val_20000 === (11)))
{var inst_19967 = (state_19999[(10)]);var inst_19963 = (state_19999[(9)]);var inst_19977 = (state_19999[(2)]);var inst_19978 = [];var inst_19979 = inst_19978.push(inst_19963);var inst_19959 = inst_19978;var inst_19960 = inst_19967;var state_19999__$1 = (function (){var statearr_20011 = state_19999;(statearr_20011[(11)] = inst_19979);
(statearr_20011[(12)] = inst_19977);
(statearr_20011[(7)] = inst_19959);
(statearr_20011[(8)] = inst_19960);
return statearr_20011;
})();var statearr_20012_20038 = state_19999__$1;(statearr_20012_20038[(2)] = null);
(statearr_20012_20038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (9)))
{var inst_19959 = (state_19999[(7)]);var inst_19975 = cljs.core.vec.call(null,inst_19959);var state_19999__$1 = state_19999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19999__$1,(11),out,inst_19975);
} else
{if((state_val_20000 === (5)))
{var inst_19967 = (state_19999[(10)]);var inst_19963 = (state_19999[(9)]);var inst_19960 = (state_19999[(8)]);var inst_19967__$1 = f.call(null,inst_19963);var inst_19968 = cljs.core._EQ_.call(null,inst_19967__$1,inst_19960);var inst_19969 = cljs.core.keyword_identical_QMARK_.call(null,inst_19960,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19970 = (inst_19968) || (inst_19969);var state_19999__$1 = (function (){var statearr_20013 = state_19999;(statearr_20013[(10)] = inst_19967__$1);
return statearr_20013;
})();if(cljs.core.truth_(inst_19970))
{var statearr_20014_20039 = state_19999__$1;(statearr_20014_20039[(1)] = (8));
} else
{var statearr_20015_20040 = state_19999__$1;(statearr_20015_20040[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (14)))
{var inst_19992 = (state_19999[(2)]);var inst_19993 = cljs.core.async.close_BANG_.call(null,out);var state_19999__$1 = (function (){var statearr_20017 = state_19999;(statearr_20017[(13)] = inst_19992);
return statearr_20017;
})();var statearr_20018_20041 = state_19999__$1;(statearr_20018_20041[(2)] = inst_19993);
(statearr_20018_20041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (10)))
{var inst_19982 = (state_19999[(2)]);var state_19999__$1 = state_19999;var statearr_20019_20042 = state_19999__$1;(statearr_20019_20042[(2)] = inst_19982);
(statearr_20019_20042[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20000 === (8)))
{var inst_19967 = (state_19999[(10)]);var inst_19963 = (state_19999[(9)]);var inst_19959 = (state_19999[(7)]);var inst_19972 = inst_19959.push(inst_19963);var tmp20016 = inst_19959;var inst_19959__$1 = tmp20016;var inst_19960 = inst_19967;var state_19999__$1 = (function (){var statearr_20020 = state_19999;(statearr_20020[(14)] = inst_19972);
(statearr_20020[(7)] = inst_19959__$1);
(statearr_20020[(8)] = inst_19960);
return statearr_20020;
})();var statearr_20021_20043 = state_19999__$1;(statearr_20021_20043[(2)] = null);
(statearr_20021_20043[(1)] = (2));
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
});})(c__8171__auto___20029,out))
;return ((function (switch__8156__auto__,c__8171__auto___20029,out){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_20025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20025[(0)] = state_machine__8157__auto__);
(statearr_20025[(1)] = (1));
return statearr_20025;
});
var state_machine__8157__auto____1 = (function (state_19999){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_19999);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e20026){if((e20026 instanceof Object))
{var ex__8160__auto__ = e20026;var statearr_20027_20044 = state_19999;(statearr_20027_20044[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19999);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20026;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20045 = state_19999;
state_19999 = G__20045;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_19999){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_19999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___20029,out))
})();var state__8173__auto__ = (function (){var statearr_20028 = f__8172__auto__.call(null);(statearr_20028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___20029);
return statearr_20028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___20029,out))
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