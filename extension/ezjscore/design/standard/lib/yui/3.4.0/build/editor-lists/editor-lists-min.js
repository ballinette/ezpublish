/*
YUI 3.4.0 (build 3928)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("editor-lists",function(f){var e=function(){e.superclass.constructor.apply(this,arguments);},b="li",c="ol",d="ul",a="host";f.extend(e,f.Base,{_onNodeChange:function(l){var j=this.get(a).getInstance(),g,o,p,h,i,m,n=false,q,k=false;if(l.changedType==="tab"){if(l.changedNode.test(b+", "+b+" *")){l.changedEvent.halt();l.preventDefault();o=l.changedNode;i=l.changedEvent.shiftKey;m=o.ancestor(c+","+d);q=d;if(m.get("tagName").toLowerCase()===c){q=c;}if(!o.test(b)){o=o.ancestor(b);}if(i){if(o.ancestor(b)){o.ancestor(b).insert(o,"after");n=true;k=true;}}else{if(o.previous(b)){h=j.Node.create("<"+q+"></"+q+">");o.previous(b).append(h);h.append(o);n=true;}}}if(n){if(!o.test(b)){o=o.ancestor(b);}o.all(e.REMOVE).remove();if(f.UA.ie){o=o.append(e.NON).one(e.NON_SEL);}(new j.Selection()).selectNode(o,true,k);}}},initializer:function(){this.get(a).on("nodeChange",f.bind(this._onNodeChange,this));}},{NON:'<span class="yui-non">&nbsp;</span>',NON_SEL:"span.yui-non",REMOVE:"br",NAME:"editorLists",NS:"lists",ATTRS:{host:{value:false}}});f.namespace("Plugin");f.Plugin.EditorLists=e;},"3.4.0",{requires:["editor-base"],skinnable:false});
