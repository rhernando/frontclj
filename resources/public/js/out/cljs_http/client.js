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
{return cljs.core.reduce.call(null,(function (p1__16896_SHARP_,p2__16895_SHARP_){var vec__16898 = clojure.string.split.call(null,p2__16895_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__16898,(0),null);var v = cljs.core.nth.call(null,vec__16898,(1),null);return cljs.core.assoc.call(null,p1__16896_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__16901){var vec__16902 = p__16901;var k = cljs.core.nth.call(null,vec__16902,(0),null);var v = cljs.core.nth.call(null,vec__16902,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6891__auto___16937 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___16937,channel){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___16937,channel){
return (function (state_16927){var state_val_16928 = (state_16927[(1)]);if((state_val_16928 === (2)))
{var inst_16922 = (state_16927[(2)]);var inst_16923 = cljs_http.client.decode_body.call(null,inst_16922,cljs.reader.read_string,"application/edn");var inst_16924 = cljs.core.async.put_BANG_.call(null,channel,inst_16923);var inst_16925 = cljs.core.async.close_BANG_.call(null,channel);var state_16927__$1 = (function (){var statearr_16929 = state_16927;(statearr_16929[(7)] = inst_16924);
return statearr_16929;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16927__$1,inst_16925);
} else
{if((state_val_16928 === (1)))
{var inst_16920 = client.call(null,request);var state_16927__$1 = state_16927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16927__$1,(2),inst_16920);
} else
{return null;
}
}
});})(c__6891__auto___16937,channel))
;return ((function (switch__6876__auto__,c__6891__auto___16937,channel){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_16933 = [null,null,null,null,null,null,null,null];(statearr_16933[(0)] = state_machine__6877__auto__);
(statearr_16933[(1)] = (1));
return statearr_16933;
});
var state_machine__6877__auto____1 = (function (state_16927){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_16927);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e16934){if((e16934 instanceof Object))
{var ex__6880__auto__ = e16934;var statearr_16935_16938 = state_16927;(statearr_16935_16938[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16927);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16939 = state_16927;
state_16927 = G__16939;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_16927){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_16927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___16937,channel))
})();var state__6893__auto__ = (function (){var statearr_16936 = f__6892__auto__.call(null);(statearr_16936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___16937);
return statearr_16936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___16937,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__16940){var vec__16942 = p__16940;var accept = cljs.core.nth.call(null,vec__16942,(0),null);return ((function (vec__16942,accept){
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
;})(vec__16942,accept))
};
var wrap_accept = function (client,var_args){
var p__16940 = null;if (arguments.length > 1) {
  p__16940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__16940);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__16943){
var client = cljs.core.first(arglist__16943);
var p__16940 = cljs.core.rest(arglist__16943);
return wrap_accept__delegate(client,p__16940);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__16944){var vec__16946 = p__16944;var content_type = cljs.core.nth.call(null,vec__16946,(0),null);return ((function (vec__16946,content_type){
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
;})(vec__16946,content_type))
};
var wrap_content_type = function (client,var_args){
var p__16944 = null;if (arguments.length > 1) {
  p__16944 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__16944);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__16947){
var client = cljs.core.first(arglist__16947);
var p__16944 = cljs.core.rest(arglist__16947);
return wrap_content_type__delegate(client,p__16944);
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6891__auto___16982 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6891__auto___16982,channel){
return (function (){var f__6892__auto__ = (function (){var switch__6876__auto__ = ((function (c__6891__auto___16982,channel){
return (function (state_16972){var state_val_16973 = (state_16972[(1)]);if((state_val_16973 === (2)))
{var inst_16967 = (state_16972[(2)]);var inst_16968 = cljs_http.client.decode_body.call(null,inst_16967,cljs_http.util.json_decode,"application/json");var inst_16969 = cljs.core.async.put_BANG_.call(null,channel,inst_16968);var inst_16970 = cljs.core.async.close_BANG_.call(null,channel);var state_16972__$1 = (function (){var statearr_16974 = state_16972;(statearr_16974[(7)] = inst_16969);
return statearr_16974;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16972__$1,inst_16970);
} else
{if((state_val_16973 === (1)))
{var inst_16965 = client.call(null,request);var state_16972__$1 = state_16972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16972__$1,(2),inst_16965);
} else
{return null;
}
}
});})(c__6891__auto___16982,channel))
;return ((function (switch__6876__auto__,c__6891__auto___16982,channel){
return (function() {
var state_machine__6877__auto__ = null;
var state_machine__6877__auto____0 = (function (){var statearr_16978 = [null,null,null,null,null,null,null,null];(statearr_16978[(0)] = state_machine__6877__auto__);
(statearr_16978[(1)] = (1));
return statearr_16978;
});
var state_machine__6877__auto____1 = (function (state_16972){while(true){
var ret_value__6878__auto__ = (function (){try{while(true){
var result__6879__auto__ = switch__6876__auto__.call(null,state_16972);if(cljs.core.keyword_identical_QMARK_.call(null,result__6879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6879__auto__;
}
break;
}
}catch (e16979){if((e16979 instanceof Object))
{var ex__6880__auto__ = e16979;var statearr_16980_16983 = state_16972;(statearr_16980_16983[(5)] = ex__6880__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16979;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16984 = state_16972;
state_16972 = G__16984;
continue;
}
} else
{return ret_value__6878__auto__;
}
break;
}
});
state_machine__6877__auto__ = function(state_16972){
switch(arguments.length){
case 0:
return state_machine__6877__auto____0.call(this);
case 1:
return state_machine__6877__auto____1.call(this,state_16972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6877__auto____0;
state_machine__6877__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6877__auto____1;
return state_machine__6877__auto__;
})()
;})(switch__6876__auto__,c__6891__auto___16982,channel))
})();var state__6893__auto__ = (function (){var statearr_16981 = f__6892__auto__.call(null);(statearr_16981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6891__auto___16982);
return statearr_16981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6893__auto__);
});})(c__6891__auto___16982,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__16987){var map__16988 = p__16987;var map__16988__$1 = ((cljs.core.seq_QMARK_.call(null,map__16988))?cljs.core.apply.call(null,cljs.core.hash_map,map__16988):map__16988);var req = map__16988__$1;var query_params = cljs.core.get.call(null,map__16988__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__16989_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__16989_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__16993){var map__16994 = p__16993;var map__16994__$1 = ((cljs.core.seq_QMARK_.call(null,map__16994))?cljs.core.apply.call(null,cljs.core.hash_map,map__16994):map__16994);var req = map__16994__$1;var query_params = cljs.core.get.call(null,map__16994__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__16994,map__16994__$1,req,query_params){
return (function (p1__16990_SHARP_){return cljs.core.merge.call(null,p1__16990_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__16994,map__16994__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__16995){var vec__16997 = p__16995;var credentials = cljs.core.nth.call(null,vec__16997,(0),null);return ((function (vec__16997,credentials){
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
;})(vec__16997,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__16995 = null;if (arguments.length > 1) {
  p__16995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__16995);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__16998){
var client = cljs.core.first(arglist__16998);
var p__16995 = cljs.core.rest(arglist__16998);
return wrap_basic_auth__delegate(client,p__16995);
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
var delete$__delegate = function (url,p__16999){var vec__17001 = p__16999;var req = cljs.core.nth.call(null,vec__17001,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__16999 = null;if (arguments.length > 1) {
  p__16999 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__16999);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__17002){
var url = cljs.core.first(arglist__17002);
var p__16999 = cljs.core.rest(arglist__17002);
return delete$__delegate(url,p__16999);
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
var get__delegate = function (url,p__17003){var vec__17005 = p__17003;var req = cljs.core.nth.call(null,vec__17005,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__17003 = null;if (arguments.length > 1) {
  p__17003 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__17003);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__17006){
var url = cljs.core.first(arglist__17006);
var p__17003 = cljs.core.rest(arglist__17006);
return get__delegate(url,p__17003);
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
var head__delegate = function (url,p__17007){var vec__17009 = p__17007;var req = cljs.core.nth.call(null,vec__17009,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__17007 = null;if (arguments.length > 1) {
  p__17007 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__17007);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__17010){
var url = cljs.core.first(arglist__17010);
var p__17007 = cljs.core.rest(arglist__17010);
return head__delegate(url,p__17007);
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
var move__delegate = function (url,p__17011){var vec__17013 = p__17011;var req = cljs.core.nth.call(null,vec__17013,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__17011 = null;if (arguments.length > 1) {
  p__17011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__17011);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__17014){
var url = cljs.core.first(arglist__17014);
var p__17011 = cljs.core.rest(arglist__17014);
return move__delegate(url,p__17011);
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
var options__delegate = function (url,p__17015){var vec__17017 = p__17015;var req = cljs.core.nth.call(null,vec__17017,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__17015 = null;if (arguments.length > 1) {
  p__17015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__17015);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__17018){
var url = cljs.core.first(arglist__17018);
var p__17015 = cljs.core.rest(arglist__17018);
return options__delegate(url,p__17015);
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
var patch__delegate = function (url,p__17019){var vec__17021 = p__17019;var req = cljs.core.nth.call(null,vec__17021,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__17019 = null;if (arguments.length > 1) {
  p__17019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__17019);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__17022){
var url = cljs.core.first(arglist__17022);
var p__17019 = cljs.core.rest(arglist__17022);
return patch__delegate(url,p__17019);
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
var post__delegate = function (url,p__17023){var vec__17025 = p__17023;var req = cljs.core.nth.call(null,vec__17025,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__17023 = null;if (arguments.length > 1) {
  p__17023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__17023);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__17026){
var url = cljs.core.first(arglist__17026);
var p__17023 = cljs.core.rest(arglist__17026);
return post__delegate(url,p__17023);
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
var put__delegate = function (url,p__17027){var vec__17029 = p__17027;var req = cljs.core.nth.call(null,vec__17029,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__17027 = null;if (arguments.length > 1) {
  p__17027 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__17027);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__17030){
var url = cljs.core.first(arglist__17030);
var p__17027 = cljs.core.rest(arglist__17030);
return put__delegate(url,p__17027);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map