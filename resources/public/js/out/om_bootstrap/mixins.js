// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.mixin');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
var ufv___17489 = schema.utils.use_fn_validation;var output_schema17482_17490 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema17483_17491 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker17484_17492 = schema.core.checker.call(null,input_schema17483_17491);var output_checker17485_17493 = schema.core.checker.call(null,output_schema17482_17490);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___17489,output_schema17482_17490,input_schema17483_17491,input_checker17484_17492,output_checker17485_17493){
return (function event_listener(G__17486,G__17487,G__17488){var validate__11613__auto__ = ufv___17489.get_cell();if(cljs.core.truth_(validate__11613__auto__))
{var args__11614__auto___17494 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17486,G__17487,G__17488], null);var temp__4126__auto___17495 = input_checker17484_17492.call(null,args__11614__auto___17494);if(cljs.core.truth_(temp__4126__auto___17495))
{var error__11615__auto___17496 = temp__4126__auto___17495;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__11615__auto___17496)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17483_17491,new cljs.core.Keyword(null,"value","value",305978217),args__11614__auto___17494,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17496], null));
} else
{}
} else
{}
var o__11616__auto__ = (function (){var target = G__17486;var event_type = G__17487;var callback = G__17488;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__11613__auto__,ufv___17489,output_schema17482_17490,input_schema17483_17491,input_checker17484_17492,output_checker17485_17493){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__11613__auto__,ufv___17489,output_schema17482_17490,input_schema17483_17491,input_checker17484_17492,output_checker17485_17493))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__11613__auto__,ufv___17489,output_schema17482_17490,input_schema17483_17491,input_checker17484_17492,output_checker17485_17493){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__11613__auto__,ufv___17489,output_schema17482_17490,input_schema17483_17491,input_checker17484_17492,output_checker17485_17493))
} else
{return ((function (validate__11613__auto__,ufv___17489,output_schema17482_17490,input_schema17483_17491,input_checker17484_17492,output_checker17485_17493){
return (function (){return null;
});
;})(validate__11613__auto__,ufv___17489,output_schema17482_17490,input_schema17483_17491,input_checker17484_17492,output_checker17485_17493))

}
}
break;
}
})();if(cljs.core.truth_(validate__11613__auto__))
{var temp__4126__auto___17497 = output_checker17485_17493.call(null,o__11616__auto__);if(cljs.core.truth_(temp__4126__auto___17497))
{var error__11615__auto___17498 = temp__4126__auto___17497;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__11615__auto___17498)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17482_17490,new cljs.core.Keyword(null,"value","value",305978217),o__11616__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11615__auto___17498], null));
} else
{}
} else
{}
return o__11616__auto__;
});})(ufv___17489,output_schema17482_17490,input_schema17483_17491,input_checker17484_17492,output_checker17485_17493))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema17482_17490,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17483_17491], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target17503,event_type17504,callback17505){var this17502 = this;return ((function (this17502){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this17502))
.call(null,this17502,target17503,event_type17504,callback17505);
}), "componentWillUnmount": (function (){var this17501 = this;return ((function (this17501){
return (function (owner){return owner.listeners.map(((function (this17501){
return (function (p1__17499_SHARP_){return p1__17499_SHARP_.call(null);
});})(this17501))
);
});})(this17501))
.call(null,this17501);
}), "componentWillMount": (function (){var this17500 = this;return ((function (this17500){
return (function (owner){return owner.listeners = [];
});})(this17500))
.call(null,this17500);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f17510,timeout17511){var this17509 = this;return ((function (this17509){
return (function (owner,f,timeout){var timeout__$1 = setTimeout(f,timeout);return owner.timeouts.push(timeout__$1);
});})(this17509))
.call(null,this17509,f17510,timeout17511);
}), "componentWillUnmount": (function (){var this17508 = this;return ((function (this17508){
return (function (owner){return owner.timeouts.map(((function (this17508){
return (function (p1__17506_SHARP_){return clearTimeout(p1__17506_SHARP_);
});})(this17508))
);
});})(this17508))
.call(null,this17508);
}), "componentWillMount": (function (){var this17507 = this;return ((function (this17507){
return (function (owner){return owner.timeouts = [];
});})(this17507))
.call(null,this17507);
})};
/**
* Accepts two DOM elements; returns true if the supplied node is
* nested inside the supplied root, false otherwise.
*/
om_bootstrap.mixins.in_root_QMARK_ = (function in_root_QMARK_(node,root){var node__$1 = node;while(true){
if((node__$1 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,root,node__$1))
{return true;
} else
{{
var G__17512 = node__$1.parentNode;
node__$1 = G__17512;
continue;
}

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
* For dropdowns, binds a handler for that sets the dropdown-mixin's
* `:open?` state to false if the user clicks outside the owning
* component OR hits the escape key.
*/
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function bind_root_close_handlers_BANG_(owner){var set_state = (owner["setDropdownState"]);return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){if(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))
{return null;
} else
{return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{return set_state.call(null,false);
} else
{return null;
}
});})(set_state))
)];
});
/**
* If they're present on the owning object, removes the listeners
* registered by the dropdown mixin.
*/
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function unbind_root_close_handlers_BANG_(owner){var temp__4126__auto__ = owner.dropdownListeners;if(cljs.core.truth_(temp__4126__auto__))
{var listeners = temp__4126__auto__;cljs.core.map.call(null,((function (listeners,temp__4126__auto__){
return (function (p1__17513_SHARP_){return p1__17513_SHARP_.call(null);
});})(listeners,temp__4126__auto__))
,listeners);
return owner.dropdownListeners = null;
} else
{return null;
}
});
/**
* Mixin that manages a single piece of state - :open?. If a user
* clicks outside the component's owning dom element OR hits the escape
* key, the state will jump back to false.
* 
* Down the road this may need to register a callback when the state
* changes.
*/
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_17518){var this17517 = this;return ((function (this17517){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}
return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this17517))
.call(null,this17517,open_QMARK_17518);
}), "isDropdownOpen": (function (){var this17516 = this;return ((function (this17516){
return (function (owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this17516))
.call(null,this17516);
}), "componentWillUnmount": (function (){var this17515 = this;return ((function (this17515){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this17515))
.call(null,this17515);
}), "getInitialState": (function (){var this17514 = this;return ((function (this17514){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this17514))
.call(null,this17514);
})};

//# sourceMappingURL=mixins.js.map