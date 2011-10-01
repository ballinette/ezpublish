/*
YUI 3.4.0 (build 3928)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("selector-css2",function(g){var h="parentNode",d="tagName",e="attributes",a="combinator",f="pseudos",c=g.Selector,b={_reRegExpTokens:/([\^\$\?\[\]\*\+\-\.\(\)\|\\])/,SORT_RESULTS:true,_children:function(n,j){var k=n.children,m,l=[],o,p;if(n.children&&j&&n.children.tags){l=n.children.tags(j);}else{if((!k&&n[d])||(k&&j)){o=k||n.childNodes;k=[];for(m=0;(p=o[m++]);){if(p.tagName){if(!j||j===p.tagName){k.push(p);}}}}}return k||[];},_re:{attr:/(\[[^\]]*\])/g,esc:/\\[:\[\]\(\)#\.\'\>+~"]/gi,pseudos:/(\([^\)]*\))/g},shorthand:{"\\#(-?[_a-z0-9]+[-\\w\\uE000]*)":"[id=$1]","\\.(-?[_a-z]+[-\\w\\uE000]*)":"[className~=$1]"},operators:{"":function(j,i){return g.DOM.getAttribute(j,i)!=="";},"~=":"(?:^|\\s+){val}(?:\\s+|$)","|=":"^{val}-?"},pseudos:{"first-child":function(i){return g.Selector._children(i[h])[0]===i;}},_bruteQuery:function(n,r,t){var o=[],i=[],q=c._tokenize(n),m=q[q.length-1],s=g.DOM._getDoc(r),k,j,p,l;if(m){j=m.id;p=m.className;l=m.tagName||"*";if(r.getElementsByTagName){if(j&&(r.all||(r.nodeType===9||g.DOM.inDoc(r)))){i=g.DOM.allById(j,r);}else{if(p){i=r.getElementsByClassName(p);}else{i=r.getElementsByTagName(l);}}}else{k=r.firstChild;while(k){if(k.tagName){i.push(k);}k=k.nextSilbing||k.firstChild;}}if(i.length){o=c._filterNodes(i,q,t);}}return o;},_filterNodes:function(u,q,s){var z=0,y,A=q.length,t=A-1,p=[],w=u[0],D=w,B=g.Selector.getters,o,x,m,r,k,v,l,C;for(z=0;(D=w=u[z++]);){t=A-1;r=null;testLoop:while(D&&D.tagName){m=q[t];l=m.tests;y=l.length;if(y&&!k){while((C=l[--y])){o=C[1];if(B[C[0]]){v=B[C[0]](D,C[0]);}else{v=D[C[0]];if(v===undefined&&D.getAttribute){v=D.getAttribute(C[0]);}}if((o==="="&&v!==C[2])||(typeof o!=="string"&&o.test&&!o.test(v))||(!o.test&&typeof o==="function"&&!o(D,C[0],C[2]))){if((D=D[r])){while(D&&(!D.tagName||(m.tagName&&m.tagName!==D.tagName))){D=D[r];}}continue testLoop;}}}t--;if(!k&&(x=m.combinator)){r=x.axis;D=D[r];while(D&&!D.tagName){D=D[r];}if(x.direct){r=null;}}else{p.push(w);if(s){return p;}break;}}}w=D=null;return p;},combinators:{" ":{axis:"parentNode"},">":{axis:"parentNode",direct:true},"+":{axis:"previousSibling",direct:true}},_parsers:[{name:e,re:/^\uE003(-?[a-z]+[\w\-]*)+([~\|\^\$\*!=]=?)?['"]?([^\uE004'"]*)['"]?\uE004/i,fn:function(l,m){var k=l[2]||"",i=c.operators,j=(l[3])?l[3].replace(/\\/g,""):"",n;if((l[1]==="id"&&k==="=")||(l[1]==="className"&&g.config.doc.documentElement.getElementsByClassName&&(k==="~="||k==="="))){m.prefilter=l[1];l[3]=j;m[l[1]]=(l[1]==="id")?l[3]:j;}if(k in i){n=i[k];if(typeof n==="string"){l[3]=j.replace(c._reRegExpTokens,"\\$1");n=new RegExp(n.replace("{val}",l[3]));}l[2]=n;}if(!m.last||m.prefilter!==l[1]){return l.slice(1);}}},{name:d,re:/^((?:-?[_a-z]+[\w-]*)|\*)/i,fn:function(j,k){var i=j[1].toUpperCase();k.tagName=i;if(i!=="*"&&(!k.last||k.prefilter)){return[d,"=",i];}if(!k.prefilter){k.prefilter="tagName";}}},{name:a,re:/^\s*([>+~]|\s)\s*/,fn:function(i,j){}},{name:f,re:/^:([\-\w]+)(?:\uE005['"]?([^\uE005]*)['"]?\uE006)*/i,fn:function(i,j){var k=c[f][i[1]];if(k){if(i[2]){i[2]=i[2].replace(/\\/g,"");}return[i[2],k];}else{return false;}}}],_getToken:function(i){return{tagName:null,id:null,className:null,attributes:{},combinator:null,tests:[]};},_tokenize:function(l){l=l||"";l=c._replaceShorthand(g.Lang.trim(l));var k=c._getToken(),q=l,p=[],r=false,n,o,m,j;outer:do{r=false;for(m=0;(j=c._parsers[m++]);){if((n=j.re.exec(l))){if(j.name!==a){k.selector=l;}l=l.replace(n[0],"");if(!l.length){k.last=true;}if(c._attrFilters[n[1]]){n[1]=c._attrFilters[n[1]];}o=j.fn(n,k);if(o===false){r=false;break outer;}else{if(o){k.tests.push(o);}}if(!l.length||j.name===a){p.push(k);k=c._getToken(k);if(j.name===a){k.combinator=g.Selector.combinators[n[1]];}}r=true;}}}while(r&&l.length);if(!r||l.length){p=[];}return p;},_replaceShorthand:function(k){var m=c.shorthand,l=k.match(c._re.esc),n,q,p,o,j;if(l){k=k.replace(c._re.esc,"\uE000");}n=k.match(c._re.attr);q=k.match(c._re.pseudos);if(n){k=k.replace(c._re.attr,"\uE001");}if(q){k=k.replace(c._re.pseudos,"\uE002");}for(p in m){if(m.hasOwnProperty(p)){k=k.replace(new RegExp(p,"gi"),m[p]);}}if(n){for(o=0,j=n.length;o<j;++o){k=k.replace(/\uE001/,n[o]);}}if(q){for(o=0,j=q.length;o<j;++o){k=k.replace(/\uE002/,q[o]);}}k=k.replace(/\[/g,"\uE003");k=k.replace(/\]/g,"\uE004");k=k.replace(/\(/g,"\uE005");k=k.replace(/\)/g,"\uE006");if(l){for(o=0,j=l.length;o<j;++o){k=k.replace("\uE000",l[o]);}}return k;},_attrFilters:{"class":"className","for":"htmlFor"},getters:{href:function(j,i){return g.DOM.getAttribute(j,i);}}};g.mix(g.Selector,b,true);g.Selector.getters.src=g.Selector.getters.rel=g.Selector.getters.href;if(g.Selector.useNative&&g.config.doc.querySelector){g.Selector.shorthand["\\.(-?[_a-z]+[-\\w]*)"]="[class~=$1]";}},"3.4.0",{requires:["selector-native"]});
