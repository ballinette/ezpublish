/*
YUI 3.4.0 (build 3928)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("transition-native",function(b){var j="-webkit-transition",m="WebkitTransition",h="WebkitTransitionProperty",c="-webkit-transition-property",g="-webkit-transition-duration",a="-webkit-transition-timing-function",d="-webkit-transition-delay",k="webkitTransitionEnd",e="onwebkittransitionend",l="WebkitTransform",i={},f=function(){this.init.apply(this,arguments);};f.fx={};f.toggles={};f._hasEnd={};f._toCamel=function(o){o=o.replace(/-([a-z])/gi,function(q,p){return p.toUpperCase();});return o;};f._toHyphen=function(o){o=o.replace(/([A-Z]?)([a-z]+)([A-Z]?)/g,function(s,r,q,p){var t="";if(r){t+="-"+r.toLowerCase();}t+=q;if(p){t+="-"+p.toLowerCase();}return t;});return o;};f._reKeywords=/^(?:node|duration|iterations|easing|delay|on|onstart|onend)$/i;f.useNative=false;if(j in b.config.doc.documentElement.style){f.useNative=true;f.supported=true;}b.Node.DOM_EVENTS[k]=1;f.NAME="transition";f.DEFAULT_EASING="ease";f.DEFAULT_DURATION=0.5;f.DEFAULT_DELAY=0;f._nodeAttrs={};f.prototype={constructor:f,init:function(p,o){var q=this;q._node=p;if(!q._running&&o){q._config=o;p._transition=q;q._duration=("duration" in o)?o.duration:q.constructor.DEFAULT_DURATION;q._delay=("delay" in o)?o.delay:q.constructor.DEFAULT_DELAY;q._easing=o.easing||q.constructor.DEFAULT_EASING;q._count=0;q._running=false;}return q;},addProperty:function(p,r){var u=this,s=this._node,w=b.stamp(s),v=b.one(s),z=f._nodeAttrs[w],t,y,o,x,q;if(!z){z=f._nodeAttrs[w]={};}x=z[p];if(r&&r.value!==undefined){q=r.value;}else{if(r!==undefined){q=r;r=i;}}if(typeof q==="function"){q=q.call(v,v);}if(x&&x.transition){if(x.transition!==u){x.transition._count--;}}u._count++;o=((typeof r.duration!="undefined")?r.duration:u._duration)||0.0001;z[p]={value:q,duration:o,delay:(typeof r.delay!="undefined")?r.delay:u._delay,easing:r.easing||u._easing,transition:u};t=b.DOM.getComputedStyle(s,p);y=(typeof q==="string")?t:parseFloat(t);if(f.useNative&&y===q){setTimeout(function(){u._onNativeEnd.call(s,{propertyName:p,elapsedTime:o});},o*1000);}},removeProperty:function(q){var p=this,o=f._nodeAttrs[b.stamp(p._node)];if(o&&o[q]){delete o[q];p._count--;}},initAttrs:function(p){var o,q=this._node;if(p.transform&&!p[l]){p[l]=p.transform;delete p.transform;}for(o in p){if(p.hasOwnProperty(o)&&!f._reKeywords.test(o)){this.addProperty(o,p[o]);if(q.style[o]===""){b.DOM.setStyle(q,o,b.DOM.getComputedStyle(q,o));}}}},run:function(s){var r=this,p=r._node,o=r._config,q={type:"transition:start",config:o};if(!r._running){r._running=true;if(o.on&&o.on.start){o.on.start.call(b.one(p),q);}r.initAttrs(r._config);r._callback=s;r._start();}return r;},_start:function(){this._runNative();},_prepDur:function(o){o=parseFloat(o);return o+"s";},_runNative:function(q){var w=this,r=w._node,y=b.stamp(r),p=r.style,u=getComputedStyle(r),C=f._nodeAttrs[y],s="",D=u[c],B=c+": ",v=g+": ",A=a+": ",x=d+": ",t,z,o;if(D!=="all"){B+=D+",";v+=u[g]+",";A+=u[a]+",";x+=u[d]+",";}for(o in C){t=f._toHyphen(o);z=C[o];if(C.hasOwnProperty(o)&&z.transition===w){if(o in r.style){v+=w._prepDur(z.duration)+",";x+=w._prepDur(z.delay)+",";A+=(z.easing)+",";B+=t+",";s+=t+": "+z.value+"; ";}else{this.removeProperty(o);}}}B=B.replace(/,$/,";");v=v.replace(/,$/,";");A=A.replace(/,$/,";");x=x.replace(/,$/,";");if(!f._hasEnd[y]){r.addEventListener(k,w._onNativeEnd,false);f._hasEnd[y]=true;}p.cssText+=B+v+A+x+s;},_end:function(o){var s=this,q=s._node,u=s._callback,p=s._config,r={type:"transition:end",config:p,elapsedTime:o},t=b.one(q);s._running=false;s._callback=null;if(q){if(p.on&&p.on.end){setTimeout(function(){p.on.end.call(t,r);if(u){u.call(t,r);}},1);}else{if(u){setTimeout(function(){u.call(t,r);},1);}}}},_endNative:function(o){var p=this._node,q=p.ownerDocument.defaultView.getComputedStyle(p,"")[c];if(typeof q==="string"){q=q.replace(new RegExp("(?:^|,\\s)"+o+",?"),",");q=q.replace(/^,|,$/,"");p.style[m]=q;}},_onNativeEnd:function(v){var r=this,u=b.stamp(r),o=v,p=f._toCamel(o.propertyName),y=o.elapsedTime,x=f._nodeAttrs[u],w=x[p],s=(w)?w.transition:null,t,q;if(s){s.removeProperty(p);s._endNative(p);q=s._config[p];t={type:"propertyEnd",propertyName:p,elapsedTime:y,config:q};if(q&&q.on&&q.on.end){q.on.end.call(b.one(r),t);}if(s._count<=0){s._end(y);}}},destroy:function(){var o=this;node.removeEventListener(k,o._onNativeEnd,false);o._node=null;}};b.Transition=f;b.TransitionNative=f;b.Node.prototype.transition=function(q,p,u){var o=f._nodeAttrs[b.stamp(this._node)],s=(o)?o.transition||null:null,r,t;if(typeof q==="string"){if(typeof p==="function"){u=p;p=null;}r=f.fx[q];if(p&&typeof p!=="boolean"){p=b.clone(p);for(t in r){if(r.hasOwnProperty(t)){if(!(t in p)){p[t]=r[t];}}}}else{p=r;}}else{u=p;p=q;}if(s&&!s._running){s.init(this,p);}else{s=new f(this._node,p);}s.run(u);return this;};b.Node.prototype.show=function(p,o,q){this._show();if(p&&b.Transition){if(typeof p!=="string"&&!p.push){if(typeof o==="function"){q=o;o=p;}p=this.SHOW_TRANSITION;}this.transition(p,o,q);}return this;};var n=function(p,o,q){return function(){if(o){o.call(p);}if(q){q.apply(p._node,arguments);}};};b.Node.prototype.hide=function(p,o,q){if(p&&b.Transition){if(typeof o==="function"){q=o;o=null;}q=n(this,this._hide,q);if(typeof p!=="string"&&!p.push){if(typeof o==="function"){q=o;o=p;}p=this.HIDE_TRANSITION;}this.transition(p,o,q);}else{this._hide();}return this;};b.NodeList.prototype.transition=function(p,s){var o=this._nodes,q=0,r;while((r=o[q++])){b.one(r).transition(p,s);}return this;};b.Node.prototype.toggleView=function(p,o,q){this._toggles=this._toggles||[];q=arguments[arguments.length-1];if(typeof p=="boolean"){o=p;p=null;}p=p||b.Transition.DEFAULT_TOGGLE;if(typeof o=="undefined"&&p in this._toggles){o=!this._toggles[p];}o=(o)?1:0;if(o){this._show();}else{q=n(this,this._hide,q);}this._toggles[p]=o;this.transition(b.Transition.toggles[p][o],q);return this;};b.NodeList.prototype.toggleView=function(q,o,t){var p=this._nodes,r=0,s;while((s=p[r++])){b.one(s).toggleView(q,o,t);}return this;};b.mix(f.fx,{fadeOut:{opacity:0,duration:0.5,easing:"ease-out"},fadeIn:{opacity:1,duration:0.5,easing:"ease-in"},sizeOut:{height:0,width:0,duration:0.75,easing:"ease-out"},sizeIn:{height:function(o){return o.get("scrollHeight")+"px";
},width:function(o){return o.get("scrollWidth")+"px";},duration:0.5,easing:"ease-in",on:{start:function(){var o=this.getStyle("overflow");if(o!=="hidden"){this.setStyle("overflow","hidden");this._transitionOverflow=o;}},end:function(){if(this._transitionOverflow){this.setStyle("overflow",this._transitionOverflow);delete this._transitionOverflow;}}}}});b.mix(f.toggles,{size:["sizeOut","sizeIn"],fade:["fadeOut","fadeIn"]});f.DEFAULT_TOGGLE="fade";},"3.4.0",{requires:["node-base"]});
