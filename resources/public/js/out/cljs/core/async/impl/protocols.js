// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);
cljs.core.async.impl.protocols.ReadPort = (function (){var obj19924 = {};return obj19924;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__3544__auto__ = port;if(and__3544__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__4183__auto__ = (((port == null))?null:port);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj19926 = {};return obj19926;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__3544__auto__ = port;if(and__3544__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__3544__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__4183__auto__ = (((port == null))?null:port);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj19928 = {};return obj19928;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__3544__auto__ = chan;if(and__3544__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__4183__auto__ = (((chan == null))?null:chan);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__3544__auto__ = chan;if(and__3544__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__4183__auto__ = (((chan == null))?null:chan);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj19930 = {};return obj19930;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__3544__auto__ = h;if(and__3544__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__4183__auto__ = (((h == null))?null:h);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__3544__auto__ = h;if(and__3544__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__3544__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__4183__auto__ = (((h == null))?null:h);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj19932 = {};return obj19932;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__3544__auto__ = b;if(and__3544__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__4183__auto__ = (((b == null))?null:b);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__3544__auto__ = b;if(and__3544__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__3544__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__4183__auto__ = (((b == null))?null:b);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__3544__auto__ = b;if(and__3544__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__3544__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__4183__auto__ = (((b == null))?null:b);return (function (){var or__3556__auto__ = (cljs.core.async.impl.protocols.add_BANG_[goog.typeOf(x__4183__auto__)]);if(or__3556__auto__)
{return or__3556__auto__;
} else
{var or__3556__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__3556__auto____$1)
{return or__3556__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj19934 = {};return obj19934;
})();

//# sourceMappingURL=protocols.js.map