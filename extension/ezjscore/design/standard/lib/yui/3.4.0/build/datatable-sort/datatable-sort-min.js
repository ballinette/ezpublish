/*
YUI 3.4.0 (build 3928)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("datatable-sort",function(g){var f=g.ClassNameManager.getClassName,h="datatable",b="column",d="asc",c="desc",a='<a class="{link_class}" title="{link_title}" href="{link_href}">{value}</a>';function e(){e.superclass.constructor.apply(this,arguments);}g.mix(e,{NS:"sort",NAME:"dataTableSort",ATTRS:{trigger:{value:{event:"click",selector:"th"},writeOnce:"initOnly"},lastSortedBy:{setter:"_setLastSortedBy",lazyAdd:false},template:{value:a}}});g.extend(e,g.Plugin.Base,{initializer:function(j){var k=this.get("host"),i=this.get("trigger");k.get("recordset").plug(g.Plugin.RecordsetSort,{dt:k});k.get("recordset").sort.addTarget(k);this.doBefore("_createTheadThNode",this._beforeCreateTheadThNode);this.doBefore("_attachTheadThNode",this._beforeAttachTheadThNode);this.doBefore("_attachTbodyTdNode",this._beforeAttachTbodyTdNode);k.delegate(i.event,g.bind(this._onEventSortColumn,this),i.selector);k.after("recordsetSort:sort",function(){this._uiSetRecordset(this.get("recordset"));});this.on("lastSortedByChange",function(l){this._uiSetLastSortedBy(l.prevVal,l.newVal,k);});if(k.get("rendered")){k._uiSetColumnset(k.get("columnset"));this._uiSetLastSortedBy(null,this.get("lastSortedBy"),k);}},_setLastSortedBy:function(i){if(g.Lang.isString(i)){return{key:i,dir:"asc",notdir:"desc"};}else{if(i&&i.key){if(i.dir==="desc"){return{key:i.key,dir:"desc",notdir:"asc"};}else{return{key:i.key,dir:"asc",notdir:"desc"};}}else{return null;}}},_uiSetLastSortedBy:function(m,j,i){var u=m&&m.key,n=m&&m.dir,t=j&&j.key,k=j&&j.dir,q=i.get("columnset"),s=q.keyHash[u],o=q.keyHash[t],r=i._tbodyNode,l,p;if(s){s.thNode.removeClass(f(h,n));l=r.all("."+f(b,s.get("id")));l.removeClass(f(h,n));}if(o){o.thNode.addClass(f(h,k));p=r.all("."+f(b,o.get("id")));p.addClass(f(h,k));}},_beforeCreateTheadThNode:function(i){if(i.column.get("sortable")){i.value=g.Lang.sub(this.get("template"),{link_class:i.link_class||"",link_title:"title",link_href:"#",value:i.value});}},_beforeAttachTheadThNode:function(m){var l=this.get("lastSortedBy"),k=l&&l.key,i=l&&l.dir,j=l&&l.notdir;if(m.column.get("sortable")){m.th.addClass(f(h,"sortable"));}if(k&&(k===m.column.get("key"))){m.th.replaceClass(f(h,j),f(h,i));}},_beforeAttachTbodyTdNode:function(m){var l=this.get("lastSortedBy"),k=l&&l.key,i=l&&l.dir,j=l&&l.notdir;if(m.column.get("sortable")){m.td.addClass(f(h,"sortable"));}if(k&&(k===m.column.get("key"))){m.td.replaceClass(f(h,j),f(h,i));}},_onEventSortColumn:function(n){n.halt();var l=this.get("host"),k=l.get("columnset").idHash[n.currentTarget.get("id")],j=k.get("key"),m=k.get("field"),o=this.get("lastSortedBy"),i=(o&&o.key===j&&o.dir===d)?c:d,p=k.get("sortFn");if(k.get("sortable")){l.get("recordset").sort.sort(m,i===c,p);this.set("lastSortedBy",{key:j,dir:i});}}});g.namespace("Plugin").DataTableSort=e;},"3.4.0",{requires:["datatable-base","plugin","recordset-sort"],lang:["en"]});
