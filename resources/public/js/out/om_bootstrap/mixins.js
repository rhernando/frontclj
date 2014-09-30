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
var ufv___22117 = schema.utils.use_fn_validation;var output_schema22110_22118 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema22111_22119 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker22112_22120 = schema.core.checker.call(null,input_schema22111_22119);var output_checker22113_22121 = schema.core.checker.call(null,output_schema22110_22118);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___22117,output_schema22110_22118,input_schema22111_22119,input_checker22112_22120,output_checker22113_22121){
return (function event_listener(G__22114,G__22115,G__22116){var validate__10325__auto__ = ufv___22117.get_cell();if(cljs.core.truth_(validate__10325__auto__))
{var args__10326__auto___22122 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22114,G__22115,G__22116], null);var temp__4126__auto___22123 = input_checker22112_22120.call(null,args__10326__auto___22122);if(cljs.core.truth_(temp__4126__auto___22123))
{var error__10327__auto___22124 = temp__4126__auto___22123;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__10327__auto___22124)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22111_22119,new cljs.core.Keyword(null,"value","value",305978217),args__10326__auto___22122,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22124], null));
} else
{}
} else
{}
var o__10328__auto__ = (function (){var target = G__22114;var event_type = G__22115;var callback = G__22116;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__10325__auto__,ufv___22117,output_schema22110_22118,input_schema22111_22119,input_checker22112_22120,output_checker22113_22121){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__10325__auto__,ufv___22117,output_schema22110_22118,input_schema22111_22119,input_checker22112_22120,output_checker22113_22121))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__10325__auto__,ufv___22117,output_schema22110_22118,input_schema22111_22119,input_checker22112_22120,output_checker22113_22121){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__10325__auto__,ufv___22117,output_schema22110_22118,input_schema22111_22119,input_checker22112_22120,output_checker22113_22121))
} else
{return ((function (validate__10325__auto__,ufv___22117,output_schema22110_22118,input_schema22111_22119,input_checker22112_22120,output_checker22113_22121){
return (function (){return null;
});
;})(validate__10325__auto__,ufv___22117,output_schema22110_22118,input_schema22111_22119,input_checker22112_22120,output_checker22113_22121))

}
}
break;
}
})();if(cljs.core.truth_(validate__10325__auto__))
{var temp__4126__auto___22125 = output_checker22113_22121.call(null,o__10328__auto__);if(cljs.core.truth_(temp__4126__auto___22125))
{var error__10327__auto___22126 = temp__4126__auto___22125;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__10327__auto___22126)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22110_22118,new cljs.core.Keyword(null,"value","value",305978217),o__10328__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10327__auto___22126], null));
} else
{}
} else
{}
return o__10328__auto__;
});})(ufv___22117,output_schema22110_22118,input_schema22111_22119,input_checker22112_22120,output_checker22113_22121))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema22110_22118,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22111_22119], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target22131,event_type22132,callback22133){var this22130 = this;return ((function (this22130){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this22130))
.call(null,this22130,target22131,event_type22132,callback22133);
}), "componentWillUnmount": (function (){var this22129 = this;return ((function (this22129){
return (function (owner){return owner.listeners.map(((function (this22129){
return (function (p1__22127_SHARP_){return p1__22127_SHARP_.call(null);
});})(this22129))
);
});})(this22129))
.call(null,this22129);
}), "componentWillMount": (function (){var this22128 = this;return ((function (this22128){
return (function (owner){return owner.listeners = [];
});})(this22128))
.call(null,this22128);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f22138,timeout22139){var this22137 = this;return ((function (this22137){
return (function (owner,f,timeout){var timeout__$1 = setTimeout(f,timeout);return owner.timeouts.push(timeout__$1);
});})(this22137))
.call(null,this22137,f22138,timeout22139);
}), "componentWillUnmount": (function (){var this22136 = this;return ((function (this22136){
return (function (owner){return owner.timeouts.map(((function (this22136){
return (function (p1__22134_SHARP_){return clearTimeout(p1__22134_SHARP_);
});})(this22136))
);
});})(this22136))
.call(null,this22136);
}), "componentWillMount": (function (){var this22135 = this;return ((function (this22135){
return (function (owner){return owner.timeouts = [];
});})(this22135))
.call(null,this22135);
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
var G__22140 = node__$1.parentNode;
node__$1 = G__22140;
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
return (function (p1__22141_SHARP_){return p1__22141_SHARP_.call(null);
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_22146){var this22145 = this;return ((function (this22145){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}
return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this22145))
.call(null,this22145,open_QMARK_22146);
}), "isDropdownOpen": (function (){var this22144 = this;return ((function (this22144){
return (function (owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this22144))
.call(null,this22144);
}), "componentWillUnmount": (function (){var this22143 = this;return ((function (this22143){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this22143))
.call(null,this22143);
}), "getInitialState": (function (){var this22142 = this;return ((function (this22142){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this22142))
.call(null,this22142);
})};

//# sourceMappingURL=mixins.js.map