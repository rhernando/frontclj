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
var ufv___14983 = schema.utils.use_fn_validation;var output_schema14976_14984 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema14977_14985 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker14978_14986 = schema.core.checker.call(null,input_schema14977_14985);var output_checker14979_14987 = schema.core.checker.call(null,output_schema14976_14984);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___14983,output_schema14976_14984,input_schema14977_14985,input_checker14978_14986,output_checker14979_14987){
return (function event_listener(G__14980,G__14981,G__14982){var validate__10325__auto__ = ufv___14983.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___14988 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14980,G__14981,G__14982], null);var temp__4126__auto___14989 = input_checker14978_14986.call(null,args__10326__auto___14988);if(cljs.core.truth_(temp__4126__auto___14989))
{var error__10327__auto___14990 = temp__4126__auto___14989;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__10327__auto___14990)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14977_14985,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___14988,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14990], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var target = G__14980;var event_type = G__14981;var callback = G__14982;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__10325__auto__,ufv___14983,output_schema14976_14984,input_schema14977_14985,input_checker14978_14986,output_checker14979_14987){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__10325__auto__,ufv___14983,output_schema14976_14984,input_schema14977_14985,input_checker14978_14986,output_checker14979_14987))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__10325__auto__,ufv___14983,output_schema14976_14984,input_schema14977_14985,input_checker14978_14986,output_checker14979_14987){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__10325__auto__,ufv___14983,output_schema14976_14984,input_schema14977_14985,input_checker14978_14986,output_checker14979_14987))
} else
{return ((function (validate__10325__auto__,ufv___14983,output_schema14976_14984,input_schema14977_14985,input_checker14978_14986,output_checker14979_14987){
return (function (){return null;
});
;})(validate__10325__auto__,ufv___14983,output_schema14976_14984,input_schema14977_14985,input_checker14978_14986,output_checker14979_14987))

}
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___14991 = output_checker14979_14987.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___14991))
{var error__10327__auto___14992 = temp__4126__auto___14991;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__10327__auto___14992)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14976_14984,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___14992], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___14983,output_schema14976_14984,input_schema14977_14985,input_checker14978_14986,output_checker14979_14987))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema14976_14984,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14977_14985], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target14997,event_type14998,callback14999){var this14996 = this;return ((function (this14996){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this14996))
.call(null,this14996,target14997,event_type14998,callback14999);
}), "componentWillUnmount": (function (){var this14995 = this;return ((function (this14995){
return (function (owner){return owner.listeners.map(((function (this14995){
return (function (p1__14993_SHARP_){return p1__14993_SHARP_.call(null);
});})(this14995))
);
});})(this14995))
.call(null,this14995);
}), "componentWillMount": (function (){var this14994 = this;return ((function (this14994){
return (function (owner){return owner.listeners = [];
});})(this14994))
.call(null,this14994);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f15004,timeout15005){var this15003 = this;return ((function (this15003){
return (function (owner,f,timeout){var timeout__$1 = setTimeout(f,timeout);return owner.timeouts.push(timeout__$1);
});})(this15003))
.call(null,this15003,f15004,timeout15005);
}), "componentWillUnmount": (function (){var this15002 = this;return ((function (this15002){
return (function (owner){return owner.timeouts.map(((function (this15002){
return (function (p1__15000_SHARP_){return clearTimeout(p1__15000_SHARP_);
});})(this15002))
);
});})(this15002))
.call(null,this15002);
}), "componentWillMount": (function (){var this15001 = this;return ((function (this15001){
return (function (owner){return owner.timeouts = [];
});})(this15001))
.call(null,this15001);
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
var G__15006 = node__$1.parentNode;
node__$1 = G__15006;
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
return (function (p1__15007_SHARP_){return p1__15007_SHARP_.call(null);
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_15012){var this15011 = this;return ((function (this15011){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}
return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this15011))
.call(null,this15011,open_QMARK_15012);
}), "isDropdownOpen": (function (){var this15010 = this;return ((function (this15010){
return (function (owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this15010))
.call(null,this15010);
}), "componentWillUnmount": (function (){var this15009 = this;return ((function (this15009){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this15009))
.call(null,this15009);
}), "getInitialState": (function (){var this15008 = this;return ((function (this15008){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this15008))
.call(null,this15008);
})};

//# sourceMappingURL=mixins.js.map