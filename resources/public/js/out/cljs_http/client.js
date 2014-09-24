// Compiled by ClojureScript 0.0-2322
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3544__auto__ = v;if(cljs.core.truth_(and__3544__auto__))
{return (v > (0));
} else
{return and__3544__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__10972_SHARP_,p2__10971_SHARP_){var vec__10974 = clojure.string.split.call(null,p2__10971_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__10974,(0),null);var v = cljs.core.nth.call(null,vec__10974,(1),null);return cljs.core.assoc.call(null,p1__10972_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__10977){var vec__10978 = p__10977;var k = cljs.core.nth.call(null,vec__10978,(0),null);var v = cljs.core.nth.call(null,vec__10978,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))))))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6891__auto___11013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___11013,channel){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___11013,channel){
return (function (state_11003){var state_val_11004 = (state_11003[(1)]);if((state_val_11004 === (2)))
{var inst_10998 = (state_11003[(2)]);var inst_10999 = cljs_http.client.decode_body.call(null,inst_10998,cljs.reader.read_string,"application/edn");var inst_11000 = cljs.core.async.put_BANG_.call(null,channel,inst_10999);var inst_11001 = cljs.core.async.close_BANG_.call(null,channel);var state_11003__$1 = (function (){var statearr_11005 = state_11003;(statearr_11005[(7)] = inst_11000);
return statearr_11005;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11003__$1,inst_11001);
} else
{if((state_val_11004 === (1)))
{var inst_10996 = client.call(null,request);var state_11003__$1 = state_11003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11003__$1,(2),inst_10996);
} else
{return null;
}
}
});})(c__6891__auto___11013,channel))
;return ((function (switch__6876__auto__,c__6891__auto___11013,channel){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_11009 = [null,null,null,null,null,null,null,null];(statearr_11009[(0)] = state_machine__6877__auto__);
(statearr_11009[(1)] = (1));
return statearr_11009;
});
var state_machine__6877__auto____1 = (function (state_11003){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_11003);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e11010){if((e11010 instanceof Object))
{var ex__6880__auto__ = e11010;var statearr_11011_11014 = state_11003;(statearr_11011_11014[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11010;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11015 = state_11003;
state_11003 = G__11015;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_11003){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_11003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___11013,channel))
})();var state__6893__auto__ = (function (){var statearr_11012 = f__6892__auto__.call(null);(statearr_11012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___11013);
return statearr_11012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___11013,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__11016){var vec__11018 = p__11016;var accept = cljs.core.nth.call(null,vec__11018,(0),null);return ((function (vec__11018,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3556__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__11018,accept))
};
var wrap_accept = function (client,var_args){
var p__11016 = null;if (arguments.length > 1) {
  p__11016 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__11016);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__11019){
var client = cljs.core.first(arglist__11019);
var p__11016 = cljs.core.rest(arglist__11019);
return wrap_accept__delegate(client,p__11016);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__11020){var vec__11022 = p__11020;var content_type = cljs.core.nth.call(null,vec__11022,(0),null);return ((function (vec__11022,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3556__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__11022,content_type))
};
var wrap_content_type = function (client,var_args){
var p__11020 = null;if (arguments.length > 1) {
  p__11020 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__11020);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__11023){
var client = cljs.core.first(arglist__11023);
var p__11020 = cljs.core.rest(arglist__11023);
return wrap_content_type__delegate(client,p__11020);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6891__auto___11058 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___11058,channel){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___11058,channel){
return (function (state_11048){var state_val_11049 = (state_11048[(1)]);if((state_val_11049 === (2)))
{var inst_11043 = (state_11048[(2)]);var inst_11044 = cljs_http.client.decode_body.call(null,inst_11043,cljs_http.util.json_decode,"application/json");var inst_11045 = cljs.core.async.put_BANG_.call(null,channel,inst_11044);var inst_11046 = cljs.core.async.close_BANG_.call(null,channel);var state_11048__$1 = (function (){var statearr_11050 = state_11048;(statearr_11050[(7)] = inst_11045);
return statearr_11050;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11048__$1,inst_11046);
} else
{if((state_val_11049 === (1)))
{var inst_11041 = client.call(null,request);var state_11048__$1 = state_11048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11048__$1,(2),inst_11041);
} else
{return null;
}
}
});})(c__6891__auto___11058,channel))
;return ((function (switch__6876__auto__,c__6891__auto___11058,channel){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_11054 = [null,null,null,null,null,null,null,null];(statearr_11054[(0)] = state_machine__6877__auto__);
(statearr_11054[(1)] = (1));
return statearr_11054;
});
var state_machine__6877__auto____1 = (function (state_11048){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_11048);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e11055){if((e11055 instanceof Object))
{var ex__6880__auto__ = e11055;var statearr_11056_11059 = state_11048;(statearr_11056_11059[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11055;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11060 = state_11048;
state_11048 = G__11060;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_11048){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_11048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___11058,channel))
})();var state__6893__auto__ = (function (){var statearr_11057 = f__6892__auto__.call(null);(statearr_11057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___11058);
return statearr_11057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___11058,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__11063){var map__11064 = p__11063;var map__11064__$1 = ((cljs.core.seq_QMARK_.call(null,map__11064))?cljs.core.apply.call(null,cljs.core.hash_map,map__11064):map__11064);var req = map__11064__$1;var query_params = cljs.core.get.call(null,map__11064__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__11065_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__11065_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__11069){var map__11070 = p__11069;var map__11070__$1 = ((cljs.core.seq_QMARK_.call(null,map__11070))?cljs.core.apply.call(null,cljs.core.hash_map,map__11070):map__11070);var req = map__11070__$1;var query_params = cljs.core.get.call(null,map__11070__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__11070,map__11070__$1,req,query_params){
return (function (p1__11066_SHARP_){return cljs.core.merge.call(null,p1__11066_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__11070,map__11070__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__11071){var vec__11073 = p__11071;var credentials = cljs.core.nth.call(null,vec__11073,(0),null);return ((function (vec__11073,credentials){
return (function (req){var credentials__$1 = (function (){var or__3556__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__11073,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__11071 = null;if (arguments.length > 1) {
  p__11071 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__11071);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__11074){
var client = cljs.core.first(arglist__11074);
var p__11071 = cljs.core.rest(arglist__11074);
return wrap_basic_auth__delegate(client,p__11071);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a battaries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,request))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__11075){var vec__11077 = p__11075;var req = cljs.core.nth.call(null,vec__11077,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__11075 = null;if (arguments.length > 1) {
  p__11075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__11075);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__11078){
var url = cljs.core.first(arglist__11078);
var p__11075 = cljs.core.rest(arglist__11078);
return delete$__delegate(url,p__11075);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__11079){var vec__11081 = p__11079;var req = cljs.core.nth.call(null,vec__11081,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__11079 = null;if (arguments.length > 1) {
  p__11079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__11079);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__11082){
var url = cljs.core.first(arglist__11082);
var p__11079 = cljs.core.rest(arglist__11082);
return get__delegate(url,p__11079);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__11083){var vec__11085 = p__11083;var req = cljs.core.nth.call(null,vec__11085,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__11083 = null;if (arguments.length > 1) {
  p__11083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__11083);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__11086){
var url = cljs.core.first(arglist__11086);
var p__11083 = cljs.core.rest(arglist__11086);
return head__delegate(url,p__11083);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__11087){var vec__11089 = p__11087;var req = cljs.core.nth.call(null,vec__11089,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__11087 = null;if (arguments.length > 1) {
  p__11087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__11087);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__11090){
var url = cljs.core.first(arglist__11090);
var p__11087 = cljs.core.rest(arglist__11090);
return move__delegate(url,p__11087);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__11091){var vec__11093 = p__11091;var req = cljs.core.nth.call(null,vec__11093,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__11091 = null;if (arguments.length > 1) {
  p__11091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__11091);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__11094){
var url = cljs.core.first(arglist__11094);
var p__11091 = cljs.core.rest(arglist__11094);
return options__delegate(url,p__11091);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__11095){var vec__11097 = p__11095;var req = cljs.core.nth.call(null,vec__11097,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__11095 = null;if (arguments.length > 1) {
  p__11095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__11095);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__11098){
var url = cljs.core.first(arglist__11098);
var p__11095 = cljs.core.rest(arglist__11098);
return patch__delegate(url,p__11095);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__11099){var vec__11101 = p__11099;var req = cljs.core.nth.call(null,vec__11101,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__11099 = null;if (arguments.length > 1) {
  p__11099 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__11099);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__11102){
var url = cljs.core.first(arglist__11102);
var p__11099 = cljs.core.rest(arglist__11102);
return post__delegate(url,p__11099);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__11103){var vec__11105 = p__11103;var req = cljs.core.nth.call(null,vec__11105,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__11103 = null;if (arguments.length > 1) {
  p__11103 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__11103);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__11106){
var url = cljs.core.first(arglist__11106);
var p__11103 = cljs.core.rest(arglist__11106);
return put__delegate(url,p__11103);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map