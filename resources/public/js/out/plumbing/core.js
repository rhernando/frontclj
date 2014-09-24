// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__19742__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__19742 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__19742__delegate.call(this,m,k,f,x1,x2,xs);};
G__19742.cljs$lang$maxFixedArity = 5;
G__19742.cljs$lang$applyTo = (function (arglist__19743){
var m = cljs.core.first(arglist__19743);
arglist__19743 = cljs.core.next(arglist__19743);
var k = cljs.core.first(arglist__19743);
arglist__19743 = cljs.core.next(arglist__19743);
var f = cljs.core.first(arglist__19743);
arglist__19743 = cljs.core.next(arglist__19743);
var x1 = cljs.core.first(arglist__19743);
arglist__19743 = cljs.core.next(arglist__19743);
var x2 = cljs.core.first(arglist__19743);
var xs = cljs.core.rest(arglist__19743);
return G__19742__delegate(m,k,f,x1,x2,xs);
});
G__19742.cljs$core$IFn$_invoke$arity$variadic = G__19742__delegate;
return G__19742;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__17070__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19752_19758 = cljs.core.seq.call(null,m);var chunk__19753_19759 = null;var count__19754_19760 = (0);var i__19755_19761 = (0);while(true){
if((i__19755_19761 < count__19754_19760))
{var vec__19756_19762 = cljs.core._nth.call(null,chunk__19753_19759,i__19755_19761);var k_19763 = cljs.core.nth.call(null,vec__19756_19762,(0),null);var v_19764 = cljs.core.nth.call(null,vec__19756_19762,(1),null);var m19751_19765 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19751_19765,k_19763,f.call(null,v_19764)));
{
var G__19766 = seq__19752_19758;
var G__19767 = chunk__19753_19759;
var G__19768 = count__19754_19760;
var G__19769 = (i__19755_19761 + (1));
seq__19752_19758 = G__19766;
chunk__19753_19759 = G__19767;
count__19754_19760 = G__19768;
i__19755_19761 = G__19769;
continue;
}
} else
{var temp__4126__auto___19770 = cljs.core.seq.call(null,seq__19752_19758);if(temp__4126__auto___19770)
{var seq__19752_19771__$1 = temp__4126__auto___19770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19752_19771__$1))
{var c__4312__auto___19772 = cljs.core.chunk_first.call(null,seq__19752_19771__$1);{
var G__19773 = cljs.core.chunk_rest.call(null,seq__19752_19771__$1);
var G__19774 = c__4312__auto___19772;
var G__19775 = cljs.core.count.call(null,c__4312__auto___19772);
var G__19776 = (0);
seq__19752_19758 = G__19773;
chunk__19753_19759 = G__19774;
count__19754_19760 = G__19775;
i__19755_19761 = G__19776;
continue;
}
} else
{var vec__19757_19777 = cljs.core.first.call(null,seq__19752_19771__$1);var k_19778 = cljs.core.nth.call(null,vec__19757_19777,(0),null);var v_19779 = cljs.core.nth.call(null,vec__19757_19777,(1),null);var m19751_19780 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19751_19780,k_19778,f.call(null,v_19779)));
{
var G__19781 = cljs.core.next.call(null,seq__19752_19771__$1);
var G__19782 = null;
var G__19783 = (0);
var G__19784 = (0);
seq__19752_19758 = G__19781;
chunk__19753_19759 = G__19782;
count__19754_19760 = G__19783;
i__19755_19761 = G__19784;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17070__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__17070__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19793_19799 = cljs.core.seq.call(null,m);var chunk__19794_19800 = null;var count__19795_19801 = (0);var i__19796_19802 = (0);while(true){
if((i__19796_19802 < count__19795_19801))
{var vec__19797_19803 = cljs.core._nth.call(null,chunk__19794_19800,i__19796_19802);var k_19804 = cljs.core.nth.call(null,vec__19797_19803,(0),null);var v_19805 = cljs.core.nth.call(null,vec__19797_19803,(1),null);var m19792_19806 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19792_19806,f.call(null,k_19804),v_19805));
{
var G__19807 = seq__19793_19799;
var G__19808 = chunk__19794_19800;
var G__19809 = count__19795_19801;
var G__19810 = (i__19796_19802 + (1));
seq__19793_19799 = G__19807;
chunk__19794_19800 = G__19808;
count__19795_19801 = G__19809;
i__19796_19802 = G__19810;
continue;
}
} else
{var temp__4126__auto___19811 = cljs.core.seq.call(null,seq__19793_19799);if(temp__4126__auto___19811)
{var seq__19793_19812__$1 = temp__4126__auto___19811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19793_19812__$1))
{var c__4312__auto___19813 = cljs.core.chunk_first.call(null,seq__19793_19812__$1);{
var G__19814 = cljs.core.chunk_rest.call(null,seq__19793_19812__$1);
var G__19815 = c__4312__auto___19813;
var G__19816 = cljs.core.count.call(null,c__4312__auto___19813);
var G__19817 = (0);
seq__19793_19799 = G__19814;
chunk__19794_19800 = G__19815;
count__19795_19801 = G__19816;
i__19796_19802 = G__19817;
continue;
}
} else
{var vec__19798_19818 = cljs.core.first.call(null,seq__19793_19812__$1);var k_19819 = cljs.core.nth.call(null,vec__19798_19818,(0),null);var v_19820 = cljs.core.nth.call(null,vec__19798_19818,(1),null);var m19792_19821 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19792_19821,f.call(null,k_19819),v_19820));
{
var G__19822 = cljs.core.next.call(null,seq__19793_19812__$1);
var G__19823 = null;
var G__19824 = (0);
var G__19825 = (0);
seq__19793_19799 = G__19822;
chunk__19794_19800 = G__19823;
count__19795_19801 = G__19824;
i__19796_19802 = G__19825;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17070__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__17070__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19832_19836 = cljs.core.seq.call(null,ks);var chunk__19833_19837 = null;var count__19834_19838 = (0);var i__19835_19839 = (0);while(true){
if((i__19835_19839 < count__19834_19838))
{var k_19840 = cljs.core._nth.call(null,chunk__19833_19837,i__19835_19839);var m19831_19841 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19831_19841,k_19840,f.call(null,k_19840)));
{
var G__19842 = seq__19832_19836;
var G__19843 = chunk__19833_19837;
var G__19844 = count__19834_19838;
var G__19845 = (i__19835_19839 + (1));
seq__19832_19836 = G__19842;
chunk__19833_19837 = G__19843;
count__19834_19838 = G__19844;
i__19835_19839 = G__19845;
continue;
}
} else
{var temp__4126__auto___19846 = cljs.core.seq.call(null,seq__19832_19836);if(temp__4126__auto___19846)
{var seq__19832_19847__$1 = temp__4126__auto___19846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19832_19847__$1))
{var c__4312__auto___19848 = cljs.core.chunk_first.call(null,seq__19832_19847__$1);{
var G__19849 = cljs.core.chunk_rest.call(null,seq__19832_19847__$1);
var G__19850 = c__4312__auto___19848;
var G__19851 = cljs.core.count.call(null,c__4312__auto___19848);
var G__19852 = (0);
seq__19832_19836 = G__19849;
chunk__19833_19837 = G__19850;
count__19834_19838 = G__19851;
i__19835_19839 = G__19852;
continue;
}
} else
{var k_19853 = cljs.core.first.call(null,seq__19832_19847__$1);var m19831_19854 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19831_19854,k_19853,f.call(null,k_19853)));
{
var G__19855 = cljs.core.next.call(null,seq__19832_19847__$1);
var G__19856 = null;
var G__19857 = (0);
var G__19858 = (0);
seq__19832_19836 = G__19855;
chunk__19833_19837 = G__19856;
count__19834_19838 = G__19857;
i__19835_19839 = G__19858;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17070__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__17070__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19865_19869 = cljs.core.seq.call(null,vs);var chunk__19866_19870 = null;var count__19867_19871 = (0);var i__19868_19872 = (0);while(true){
if((i__19868_19872 < count__19867_19871))
{var v_19873 = cljs.core._nth.call(null,chunk__19866_19870,i__19868_19872);var m19864_19874 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19864_19874,f.call(null,v_19873),v_19873));
{
var G__19875 = seq__19865_19869;
var G__19876 = chunk__19866_19870;
var G__19877 = count__19867_19871;
var G__19878 = (i__19868_19872 + (1));
seq__19865_19869 = G__19875;
chunk__19866_19870 = G__19876;
count__19867_19871 = G__19877;
i__19868_19872 = G__19878;
continue;
}
} else
{var temp__4126__auto___19879 = cljs.core.seq.call(null,seq__19865_19869);if(temp__4126__auto___19879)
{var seq__19865_19880__$1 = temp__4126__auto___19879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19865_19880__$1))
{var c__4312__auto___19881 = cljs.core.chunk_first.call(null,seq__19865_19880__$1);{
var G__19882 = cljs.core.chunk_rest.call(null,seq__19865_19880__$1);
var G__19883 = c__4312__auto___19881;
var G__19884 = cljs.core.count.call(null,c__4312__auto___19881);
var G__19885 = (0);
seq__19865_19869 = G__19882;
chunk__19866_19870 = G__19883;
count__19867_19871 = G__19884;
i__19868_19872 = G__19885;
continue;
}
} else
{var v_19886 = cljs.core.first.call(null,seq__19865_19880__$1);var m19864_19887 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19864_19887,f.call(null,v_19886),v_19886));
{
var G__19888 = cljs.core.next.call(null,seq__19865_19880__$1);
var G__19889 = null;
var G__19890 = (0);
var G__19891 = (0);
seq__19865_19869 = G__19888;
chunk__19866_19870 = G__19889;
count__19867_19871 = G__19890;
i__19868_19872 = G__19891;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17070__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__19892){var vec__19894 = p__19892;var k = cljs.core.nth.call(null,vec__19894,(0),null);var ks = cljs.core.nthnext.call(null,vec__19894,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3544__auto__ = ks;if(and__3544__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3544__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__17070__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19903_19909 = cljs.core.seq.call(null,x);var chunk__19904_19910 = null;var count__19905_19911 = (0);var i__19906_19912 = (0);while(true){
if((i__19906_19912 < count__19905_19911))
{var vec__19907_19913 = cljs.core._nth.call(null,chunk__19904_19910,i__19906_19912);var k_19914 = cljs.core.nth.call(null,vec__19907_19913,(0),null);var v_19915 = cljs.core.nth.call(null,vec__19907_19913,(1),null);var m19902_19916 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19902_19916,((typeof k_19914 === 'string')?cljs.core.keyword.call(null,k_19914):k_19914),keywordize_map.call(null,v_19915)));
{
var G__19917 = seq__19903_19909;
var G__19918 = chunk__19904_19910;
var G__19919 = count__19905_19911;
var G__19920 = (i__19906_19912 + (1));
seq__19903_19909 = G__19917;
chunk__19904_19910 = G__19918;
count__19905_19911 = G__19919;
i__19906_19912 = G__19920;
continue;
}
} else
{var temp__4126__auto___19921 = cljs.core.seq.call(null,seq__19903_19909);if(temp__4126__auto___19921)
{var seq__19903_19922__$1 = temp__4126__auto___19921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19903_19922__$1))
{var c__4312__auto___19923 = cljs.core.chunk_first.call(null,seq__19903_19922__$1);{
var G__19924 = cljs.core.chunk_rest.call(null,seq__19903_19922__$1);
var G__19925 = c__4312__auto___19923;
var G__19926 = cljs.core.count.call(null,c__4312__auto___19923);
var G__19927 = (0);
seq__19903_19909 = G__19924;
chunk__19904_19910 = G__19925;
count__19905_19911 = G__19926;
i__19906_19912 = G__19927;
continue;
}
} else
{var vec__19908_19928 = cljs.core.first.call(null,seq__19903_19922__$1);var k_19929 = cljs.core.nth.call(null,vec__19908_19928,(0),null);var v_19930 = cljs.core.nth.call(null,vec__19908_19928,(1),null);var m19902_19931 = cljs.core.deref.call(null,m_atom__17070__auto__);cljs.core.reset_BANG_.call(null,m_atom__17070__auto__,cljs.core.assoc_BANG_.call(null,m19902_19931,((typeof k_19929 === 'string')?cljs.core.keyword.call(null,k_19929):k_19929),keywordize_map.call(null,v_19930)));
{
var G__19932 = cljs.core.next.call(null,seq__19903_19922__$1);
var G__19933 = null;
var G__19934 = (0);
var G__19935 = (0);
seq__19903_19909 = G__19932;
chunk__19904_19910 = G__19933;
count__19905_19911 = G__19934;
i__19906_19912 = G__19935;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17070__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__17139__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__17139__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__19936 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__19937 = cljs.core.next.call(null,ks);
m = G__19936;
ks = G__19937;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3556__auto__ = m;if(cljs.core.truth_(or__3556__auto__))
{return or__3556__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4281__auto__ = (function iter__19946(s__19947){return (new cljs.core.LazySeq(null,(function (){var s__19947__$1 = s__19947;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19947__$1);if(temp__4126__auto__)
{var s__19947__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19947__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__19947__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__19949 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__19948 = (0);while(true){
if((i__19948 < size__4280__auto__))
{var vec__19952 = cljs.core._nth.call(null,c__4279__auto__,i__19948);var k = cljs.core.nth.call(null,vec__19952,(0),null);var v = cljs.core.nth.call(null,vec__19952,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__19949,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19954 = (i__19948 + (1));
i__19948 = G__19954;
continue;
}
} else
{{
var G__19955 = (i__19948 + (1));
i__19948 = G__19955;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19949),iter__19946.call(null,cljs.core.chunk_rest.call(null,s__19947__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19949),null);
}
} else
{var vec__19953 = cljs.core.first.call(null,s__19947__$2);var k = cljs.core.nth.call(null,vec__19953,(0),null);var v = cljs.core.nth.call(null,vec__19953,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19946.call(null,cljs.core.rest.call(null,s__19947__$2)));
} else
{{
var G__19956 = cljs.core.rest.call(null,s__19947__$2);
s__19947__$1 = G__19956;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4281__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__19957){
var m = cljs.core.first(arglist__19957);
var kvs = cljs.core.rest(arglist__19957);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__19958){
var m = cljs.core.first(arglist__19958);
arglist__19958 = cljs.core.next(arglist__19958);
var key_seq = cljs.core.first(arglist__19958);
arglist__19958 = cljs.core.next(arglist__19958);
var f = cljs.core.first(arglist__19958);
var args = cljs.core.rest(arglist__19958);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4281__auto__ = ((function (s){
return (function iter__19963(s__19964){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__19964__$1 = s__19964;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19964__$1);if(temp__4126__auto__)
{var s__19964__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19964__$2))
{var c__4279__auto__ = cljs.core.chunk_first.call(null,s__19964__$2);var size__4280__auto__ = cljs.core.count.call(null,c__4279__auto__);var b__19966 = cljs.core.chunk_buffer.call(null,size__4280__auto__);if((function (){var i__19965 = (0);while(true){
if((i__19965 < size__4280__auto__))
{var x = cljs.core._nth.call(null,c__4279__auto__,i__19965);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__19966,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__19967 = (i__19965 + (1));
i__19965 = G__19967;
continue;
}
} else
{{
var G__19968 = (i__19965 + (1));
i__19965 = G__19968;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19966),iter__19963.call(null,cljs.core.chunk_rest.call(null,s__19964__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19966),null);
}
} else
{var x = cljs.core.first.call(null,s__19964__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__19963.call(null,cljs.core.rest.call(null,s__19964__$2)));
} else
{{
var G__19969 = cljs.core.rest.call(null,s__19964__$2);
s__19964__$1 = G__19969;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4281__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__19970){
var colls = cljs.core.seq(arglist__19970);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__19971__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__19972 = conj_when.call(null,coll,x);
var G__19973 = cljs.core.first.call(null,xs);
var G__19974 = cljs.core.next.call(null,xs);
coll = G__19972;
x = G__19973;
xs = G__19974;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__19971 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19971__delegate.call(this,coll,x,xs);};
G__19971.cljs$lang$maxFixedArity = 2;
G__19971.cljs$lang$applyTo = (function (arglist__19975){
var coll = cljs.core.first(arglist__19975);
arglist__19975 = cljs.core.next(arglist__19975);
var x = cljs.core.first(arglist__19975);
var xs = cljs.core.rest(arglist__19975);
return G__19971__delegate(coll,x,xs);
});
G__19971.cljs$core$IFn$_invoke$arity$variadic = G__19971__delegate;
return G__19971;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__19977__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__19976_SHARP_){return cljs.core.apply.call(null,f,p1__19976_SHARP_,args);
}));
};
var G__19977 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19977__delegate.call(this,a,f,args);};
G__19977.cljs$lang$maxFixedArity = 2;
G__19977.cljs$lang$applyTo = (function (arglist__19978){
var a = cljs.core.first(arglist__19978);
arglist__19978 = cljs.core.next(arglist__19978);
var f = cljs.core.first(arglist__19978);
var args = cljs.core.rest(arglist__19978);
return G__19977__delegate(a,f,args);
});
G__19977.cljs$core$IFn$_invoke$arity$variadic = G__19977__delegate;
return G__19977;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__19979__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__19979 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19979__delegate.call(this,f,arg,args);};
G__19979.cljs$lang$maxFixedArity = 2;
G__19979.cljs$lang$applyTo = (function (arglist__19980){
var f = cljs.core.first(arglist__19980);
arglist__19980 = cljs.core.next(arglist__19980);
var arg = cljs.core.first(arglist__19980);
var args = cljs.core.rest(arglist__19980);
return G__19979__delegate(f,arg,args);
});
G__19979.cljs$core$IFn$_invoke$arity$variadic = G__19979__delegate;
return G__19979;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map