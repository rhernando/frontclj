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
{return cljs.core.reduce.call(null,(function (p1__17112_SHARP_,p2__17111_SHARP_){var vec__17114 = clojure.string.split.call(null,p2__17111_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__17114,(0),null);var v = cljs.core.nth.call(null,vec__17114,(1),null);return cljs.core.assoc.call(null,p1__17112_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__17117){var vec__17118 = p__17117;var k = cljs.core.nth.call(null,vec__17118,(0),null);var v = cljs.core.nth.call(null,vec__17118,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__8171__auto___17153 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___17153,channel){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___17153,channel){
return (function (state_17143){var state_val_17144 = (state_17143[(1)]);if((state_val_17144 === (2)))
{var inst_17138 = (state_17143[(2)]);var inst_17139 = cljs_http.client.decode_body.call(null,inst_17138,cljs.reader.read_string,"application/edn");var inst_17140 = cljs.core.async.put_BANG_.call(null,channel,inst_17139);var inst_17141 = cljs.core.async.close_BANG_.call(null,channel);var state_17143__$1 = (function (){var statearr_17145 = state_17143;(statearr_17145[(7)] = inst_17140);
return statearr_17145;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17143__$1,inst_17141);
} else
{if((state_val_17144 === (1)))
{var inst_17136 = client.call(null,request);var state_17143__$1 = state_17143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17143__$1,(2),inst_17136);
} else
{return null;
}
}
});})(c__8171__auto___17153,channel))
;return ((function (switch__8156__auto__,c__8171__auto___17153,channel){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_17149 = [null,null,null,null,null,null,null,null];(statearr_17149[(0)] = state_machine__8157__auto__);
(statearr_17149[(1)] = (1));
return statearr_17149;
});
var state_machine__8157__auto____1 = (function (state_17143){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_17143);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e17150){if((e17150 instanceof Object))
{var ex__8160__auto__ = e17150;var statearr_17151_17154 = state_17143;(statearr_17151_17154[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17150;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17155 = state_17143;
state_17143 = G__17155;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_17143){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_17143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___17153,channel))
})();var state__8173__auto__ = (function (){var statearr_17152 = f__8172__auto__.call(null);(statearr_17152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___17153);
return statearr_17152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___17153,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__17156){var vec__17158 = p__17156;var accept = cljs.core.nth.call(null,vec__17158,(0),null);return ((function (vec__17158,accept){
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
;})(vec__17158,accept))
};
var wrap_accept = function (client,var_args){
var p__17156 = null;if (arguments.length > 1) {
  p__17156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__17156);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__17159){
var client = cljs.core.first(arglist__17159);
var p__17156 = cljs.core.rest(arglist__17159);
return wrap_accept__delegate(client,p__17156);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__17160){var vec__17162 = p__17160;var content_type = cljs.core.nth.call(null,vec__17162,(0),null);return ((function (vec__17162,content_type){
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
;})(vec__17162,content_type))
};
var wrap_content_type = function (client,var_args){
var p__17160 = null;if (arguments.length > 1) {
  p__17160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__17160);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__17163){
var client = cljs.core.first(arglist__17163);
var p__17160 = cljs.core.rest(arglist__17163);
return wrap_content_type__delegate(client,p__17160);
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__8171__auto___17198 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8171__auto___17198,channel){
return (function (){var f__8172__auto__ = (function (){var switch__8156__auto__ = ((function (c__8171__auto___17198,channel){
return (function (state_17188){var state_val_17189 = (state_17188[(1)]);if((state_val_17189 === (2)))
{var inst_17183 = (state_17188[(2)]);var inst_17184 = cljs_http.client.decode_body.call(null,inst_17183,cljs_http.util.json_decode,"application/json");var inst_17185 = cljs.core.async.put_BANG_.call(null,channel,inst_17184);var inst_17186 = cljs.core.async.close_BANG_.call(null,channel);var state_17188__$1 = (function (){var statearr_17190 = state_17188;(statearr_17190[(7)] = inst_17185);
return statearr_17190;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17188__$1,inst_17186);
} else
{if((state_val_17189 === (1)))
{var inst_17181 = client.call(null,request);var state_17188__$1 = state_17188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17188__$1,(2),inst_17181);
} else
{return null;
}
}
});})(c__8171__auto___17198,channel))
;return ((function (switch__8156__auto__,c__8171__auto___17198,channel){
return (function() {
var state_machine__8157__auto__ = null;
var state_machine__8157__auto____0 = (function (){var statearr_17194 = [null,null,null,null,null,null,null,null];(statearr_17194[(0)] = state_machine__8157__auto__);
(statearr_17194[(1)] = (1));
return statearr_17194;
});
var state_machine__8157__auto____1 = (function (state_17188){while(true){
var ret_value__8158__auto__ = (function (){try{while(true){
var result__8159__auto__ = switch__8156__auto__.call(null,state_17188);if(cljs.core.keyword_identical_QMARK_.call(null,result__8159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8159__auto__;
}
break;
}
}catch (e17195){if((e17195 instanceof Object))
{var ex__8160__auto__ = e17195;var statearr_17196_17199 = state_17188;(statearr_17196_17199[(5)] = ex__8160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17188);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17195;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17200 = state_17188;
state_17188 = G__17200;
continue;
}
} else
{return ret_value__8158__auto__;
}
break;
}
});
state_machine__8157__auto__ = function(state_17188){
switch(arguments.length){
case 0:
return state_machine__8157__auto____0.call(this);
case 1:
return state_machine__8157__auto____1.call(this,state_17188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8157__auto____0;
state_machine__8157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8157__auto____1;
return state_machine__8157__auto__;
})()
;})(switch__8156__auto__,c__8171__auto___17198,channel))
})();var state__8173__auto__ = (function (){var statearr_17197 = f__8172__auto__.call(null);(statearr_17197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8171__auto___17198);
return statearr_17197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8173__auto__);
});})(c__8171__auto___17198,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__17203){var map__17204 = p__17203;var map__17204__$1 = ((cljs.core.seq_QMARK_.call(null,map__17204))?cljs.core.apply.call(null,cljs.core.hash_map,map__17204):map__17204);var req = map__17204__$1;var query_params = cljs.core.get.call(null,map__17204__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__17205_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__17205_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__17209){var map__17210 = p__17209;var map__17210__$1 = ((cljs.core.seq_QMARK_.call(null,map__17210))?cljs.core.apply.call(null,cljs.core.hash_map,map__17210):map__17210);var req = map__17210__$1;var query_params = cljs.core.get.call(null,map__17210__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__17210,map__17210__$1,req,query_params){
return (function (p1__17206_SHARP_){return cljs.core.merge.call(null,p1__17206_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__17210,map__17210__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__17211){var vec__17213 = p__17211;var credentials = cljs.core.nth.call(null,vec__17213,(0),null);return ((function (vec__17213,credentials){
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
;})(vec__17213,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__17211 = null;if (arguments.length > 1) {
  p__17211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__17211);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__17214){
var client = cljs.core.first(arglist__17214);
var p__17211 = cljs.core.rest(arglist__17214);
return wrap_basic_auth__delegate(client,p__17211);
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
var delete$__delegate = function (url,p__17215){var vec__17217 = p__17215;var req = cljs.core.nth.call(null,vec__17217,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__17215 = null;if (arguments.length > 1) {
  p__17215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__17215);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__17218){
var url = cljs.core.first(arglist__17218);
var p__17215 = cljs.core.rest(arglist__17218);
return delete$__delegate(url,p__17215);
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
var get__delegate = function (url,p__17219){var vec__17221 = p__17219;var req = cljs.core.nth.call(null,vec__17221,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__17219 = null;if (arguments.length > 1) {
  p__17219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__17219);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__17222){
var url = cljs.core.first(arglist__17222);
var p__17219 = cljs.core.rest(arglist__17222);
return get__delegate(url,p__17219);
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
var head__delegate = function (url,p__17223){var vec__17225 = p__17223;var req = cljs.core.nth.call(null,vec__17225,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__17223 = null;if (arguments.length > 1) {
  p__17223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__17223);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__17226){
var url = cljs.core.first(arglist__17226);
var p__17223 = cljs.core.rest(arglist__17226);
return head__delegate(url,p__17223);
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
var move__delegate = function (url,p__17227){var vec__17229 = p__17227;var req = cljs.core.nth.call(null,vec__17229,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__17227 = null;if (arguments.length > 1) {
  p__17227 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__17227);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__17230){
var url = cljs.core.first(arglist__17230);
var p__17227 = cljs.core.rest(arglist__17230);
return move__delegate(url,p__17227);
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
var options__delegate = function (url,p__17231){var vec__17233 = p__17231;var req = cljs.core.nth.call(null,vec__17233,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__17231 = null;if (arguments.length > 1) {
  p__17231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__17231);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__17234){
var url = cljs.core.first(arglist__17234);
var p__17231 = cljs.core.rest(arglist__17234);
return options__delegate(url,p__17231);
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
var patch__delegate = function (url,p__17235){var vec__17237 = p__17235;var req = cljs.core.nth.call(null,vec__17237,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__17235 = null;if (arguments.length > 1) {
  p__17235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__17235);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__17238){
var url = cljs.core.first(arglist__17238);
var p__17235 = cljs.core.rest(arglist__17238);
return patch__delegate(url,p__17235);
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
var post__delegate = function (url,p__17239){var vec__17241 = p__17239;var req = cljs.core.nth.call(null,vec__17241,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__17239 = null;if (arguments.length > 1) {
  p__17239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__17239);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__17242){
var url = cljs.core.first(arglist__17242);
var p__17239 = cljs.core.rest(arglist__17242);
return post__delegate(url,p__17239);
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
var put__delegate = function (url,p__17243){var vec__17245 = p__17243;var req = cljs.core.nth.call(null,vec__17245,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__17243 = null;if (arguments.length > 1) {
  p__17243 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__17243);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__17246){
var url = cljs.core.first(arglist__17246);
var p__17243 = cljs.core.rest(arglist__17246);
return put__delegate(url,p__17243);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map