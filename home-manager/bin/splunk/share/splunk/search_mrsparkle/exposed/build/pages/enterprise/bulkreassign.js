!function(e){function t(t){for(var s,o,l=t[0],a=t[1],c=t[2],h=0,p=[];h<l.length;h++)o=l[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);for(d&&d(t);p.length;)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,l=1;l<i.length;l++){var a=i[l];0!==n[a]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var s={},n={19:0},r=[];function o(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(e){var t=[],i=n[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,s){i=n[e]=[t,s]}));t.push(i[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=function(e){return o.p+""+({}[e]||e)+".js"}(e);var a=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(c);var i=n[e];if(0!==i){if(i){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",a.name="ChunkLoadError",a.type=s,a.request=r,i[1](a)}n[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=a;r.push([1977,0]),i()}({1977:function(e,t,i){var s,n;i.p=function(){function e(e,t){if(window.$C&&window.$C.hasOwnProperty(e))return window.$C[e];if(void 0!==t)return t;throw new Error("getConfigValue - "+e+" not set, no default provided")}return function(){for(var t,i,s="",n=0,r=arguments.length;n<r;n++)(i=(t=arguments[n].toString()).length)>1&&"/"==t.charAt(i-1)&&(t=t.substring(0,i-1)),"/"!=t.charAt(0)?s+="/"+t:s+=t;if("/"!=s){var o=s.split("/"),l=o[1];if("static"==l||"modules"==l){var a=s.substring(l.length+2,s.length);s="/"+l,window.$C.BUILD_NUMBER&&(s+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(s+="."+window.$C.BUILD_PUSH_NUMBER),"app"==o[2]&&(s+=":"+e("APP_BUILD",0)),s+="/"+a}}var c=e("MRSPARKLE_ROOT_PATH","/"),d=e("LOCALE","en-US"),h="/"+d+s;return""==c||"/"==c?h:c+h}("/static/build/pages/enterprise")+"/"}(),s=[i("routers/Bulkreassign"),i("util/router_utils")],void 0===(n=function(e,t){new e;t.start_backbone_history()}.apply(t,s))||(e.exports=n)},1978:function(e,t,i){(e.exports=i(3)(!1)).push([e.i,".modal-with-static-warning .form-horizontal .control-label{width:100px}.modal-with-static-warning .form-horizontal .controls{margin-left:120px}.modal-with-static-warning .security-warning{padding-left:15px}.bulk-progress{margin-top:3em}",""])},"collections/services/admin/Directories":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("models/services/admin/Directory"),i("collections/SplunkDsBase")],void 0===(n=function(e,t,i,s){return s.extend({url:"admin/directory",model:i,initialize:function(e,t){s.prototype.initialize.apply(this,arguments)},whenAll:function(i){var s=e.Deferred(),n=i.length,r=n,o=0,l=function(){o++,0==--r&&(o===n?s.resolve():s.reject())},a=function(e){0==--r&&s.reject()};return t.each(i,(function(e,t){e.done(l).fail(a)})),s},reassign:function(e){if(!t.isString(e))throw new Error("newOwner needs to be a string value");return this.whenAll(this.map((function(t){return t.reassign(e)})))}})}.apply(t,s))||(e.exports=n)},"models/services/admin/Directory":function(e,t,i){var s,n;s=[i("require/underscore"),i("models/EAIBase")],void 0===(n=function(e,t){return t.extend({url:"admin/directory",sharingLabels:{user:e("Private").t(),app:e("App").t(),global:e("Global").t(),system:e("Global").t()},initialize:function(e){t.prototype.initialize.apply(this,arguments)},getName:function(){return this.entry.get("name")||""},getType:function(){return this.entry.content.get("eai:type")||""},getOwner:function(){return this.entry.acl.get("owner")||""},getApp:function(){return this.entry.acl.get("app")||""},getSharing:function(){return this.entry.acl.get("sharing")||""},getSharingLabel:function(){return this.sharingLabels[this.getSharing()]||""},reassign:function(t){if(!e.isString(t))throw new Error("newOwner needs to be a string value");var i={};return i.owner=t,e.isUndefined(i.sharing)&&(i.sharing=this.entry.acl.get("sharing")),"savedsearch"===this.getType()&&e.isUndefined(i.app)&&(i.app=this.entry.acl.get("app")),"props-extract"===this.getType()&&(i.safe_encoding=1),this.trigger("reassign:start",this.id),this.acl.save({},{data:i,success:e.bind((function(e,t,i){this.setFromSplunkD(t,{skipClone:!0}),this.trigger("reassign:successful",this.id)}),this),error:e.bind((function(e,t,i){this.trigger.call(this,"error",this,t,i),this.trigger("reassign:error",this.id)}),this)})}})}.apply(t,s))||(e.exports=n)},"models/services/admin/DirectoryFetchData":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("require/backbone"),i("shim/splunk.util"),i("models/shared/EAIFilterFetchData")],void 0===(n=function(e,t,i,s,n){return n.extend({getCalculatedSearch:function(){var e=this.get("appOnly"),i=this.get("app");"-"!==i&&!0===e?this.set("appSearch",i,{silent:!0}):this.unset("appSearch",{silent:!0});var r=n.prototype.getCalculatedSearch.apply(this,arguments),o=s.normalizeBoolean(this.get("orphaned"));!0===o&&(t.isEmpty(r)||(r+=" AND "),r+="(eai:orphaned="+ +o+")");var l=this.get("configType");return t.isEmpty(l)||"All"===l||(t.isEmpty(r)||(r+=" AND "),r+="(eai:type="+l+")"),r},toJSON:function(){var e=n.prototype.toJSON.apply(this,arguments);return""===e.search&&delete e.search,delete e.appOnly,delete e.orphaned,delete e.configType,e}})}.apply(t,s))||(e.exports=n)},"routers/Bulkreassign":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("require/backbone"),i("routers/Base"),i("collections/services/authentication/Users"),i("collections/services/authorization/Roles"),i("views/bulkreassign/PageController")],void 0===(n=function(e,t,i,s,n,r,o){return s.extend({initialize:function(){s.prototype.initialize.apply(this,arguments),this.enableAppBar=!1,this.fetchAppLocals=!0,this.fetchServerInfo=!0,this.model.controller=new i.Model,this.collection.usersSearch=new n,this.collection.users=new n,this.deferreds.users=this.collection.users.fetch({data:{count:5,search:"roles=*"}}),this.collection.rolesCollection=new r,this.deferreds.roles=this.collection.rolesCollection.fetch(),this.deferreds.classicurl=this.model.classicurl.fetch()},page:function(i,n,r){s.prototype.page.apply(this,arguments),this.setPageTitle(t("Reassign Knowledge Objects").t()),e.when(this.deferreds.pageViewRendered,this.deferreds.classicurl,this.deferreds.users,this.deferreds.roles).done(t((function(){e(".preload").replaceWith(this.pageView.el),this.pageController&&this.pageController.detach(),this.pageController=new o({model:this.model,collection:this.collection}),this.pageView.$(".main-section-body").append(this.pageController.render().el)})).bind(this))}})}.apply(t,s))||(e.exports=n)},"views/bulkreassign/BulkProgressSummary":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("require/backbone"),e,i("views/Base"),i("views/shared/waitspinner/Master"),i("views/bulkreassign/BulkProgressSummaryRow")],void 0===(n=function(e,t,i,s,n,r,o){return n.extend({moduleId:s.i,initialize:function(e){n.prototype.initialize.call(this,e);var i={entitySingular:t("entity").t(),entityPlural:t("entities").t()};if(this.options=this.options||{},t.defaults(this.options,i),t.isUndefined(this.model)||t.isUndefined(this.model.controller))throw new Error("Need this.model.controller to be passed in");if(!this.collection)throw new Error("Need this.collection to be passed in");this.children.rows=[],this.listenTo(this.collection,"add remove reset",this.debouncedRender)},events:{"click .removeEntityFromSelection":"triggerRemoveItem"},triggerRemoveItem:function(t){t.preventDefault();var i=e(t.currentTarget).data("id"),s=this.collection.get(i);s&&this.model.controller.trigger("removeSelectedEntity",s)},render:function(){t.each(this.children.rows,(function(e){e.remove()})),this.children.rows=this.collection.map((function(e){return new o({model:e})}));var i=this.compiledTemplate({collection:this.collection,entitySingular:this.options.entitySingular,entityPlural:this.options.entityPlural}),s=e(i);if(this.collection.length>0){var n=s.find("tbody");t.each(this.children.rows,(function(e){n.append(e.render().el)}))}return this.$el.html(s),this.initializeTooltipOnce(),this},initializeTooltipOnce:function(){this.isTooltipInitialized||(this.$el.tooltip({selector:'[data-toggle="tooltip"]'}).on("show",(function(e){e.stopPropagation()})).on("hide",(function(e){e.stopPropagation()})).on("hidden",(function(e){e.stopPropagation()})),this.isTooltipInitialized=!0)},remove:function(){this.$el.tooltip("destroy"),t.each(this.children.rows,(function(e){e.remove()})),n.prototype.remove.apply(this,arguments)},template:'        <% if (collection.length < 1) { %>            <p>No items selected</p>        <% } else { %>            <table class="table table-striped table-hover">                <thead><tr>                    <th><%- _("Name").t() %></th>                    <th><%- _("Type").t() %></th>                    <th><%- _("Owner").t() %></th>                    <th><%- _("App").t() %></th>                    <th><%- _("Sharing").t() %></th>                    <th><%- _("Action").t() %></th>                </tr></thead>                <tbody></tbody>            </table>        <% } %>'})}.apply(t,s))||(e.exports=n)},"views/bulkreassign/BulkProgressSummaryRow":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("require/backbone"),e,i("views/shared/waitspinner/Master"),i("views/Base")],void 0===(n=function(e,t,i,s,n,r){return r.extend({moduleId:s.i,tagName:"tr",initialize:function(){r.prototype.initialize.apply(this,arguments),this.status="initial",this.children.spinner=new n,this.listenTo(this.model,"reassign:start",this.showUpdating),this.listenTo(this.model,"reassign:successful",this.showSuccessful),this.listenTo(this.model,"reassign:error",this.showError)},showUpdating:function(){this.status="updating",this.render()},showSuccessful:function(){this.status="success",this.render()},showError:function(){this.status="error",this.render()},render:function(){var i=this.compiledTemplate({model:this.model}),s=e(i);switch(s.find(".updating").append(this.children.spinner.render().el),this.status){case"initial":s.find(".initial").show();break;case"updating":s.find(".updating").show();break;case"success":s.find(".success").show();break;case"error":s.find(".error").show();var n=this.model.error.get("messages");if(t.isArray(n)&&n.length>0){var r=n[0].message;s.find('.error [data-toggle="tooltip"]').attr("title",r)}}return this.$el.html(s),this},template:'        <td><%- model.getName() %></td>        <td><%- model.getType() %></td>        <td><%- model.getOwner() %></td>        <td><%- model.getApp() %></td>        <td><%- model.getSharingLabel() %></td>        <td class="status">            <div class="progress-status initial hide">                <a href="#" class="removeEntityFromSelection" data-toggle="tooltip" title="Remove from selection" data-id="<%- model.id %>"><i class="icon-x-circle"></i></a>            </div>            <div class="progress-status updating hide">            </div>            <div class="progress-status success hide">                <a href="#" data-toggle="tooltip" title="Successfully reassigned"><i class="icon-check"></i></a></div>            <div class="progress-status error alert-error hide">                <a href="#" data-toggle="tooltip" title=""><i class="icon-alert"></i></a>            </div>        </td>'})}.apply(t,s))||(e.exports=n)},"views/bulkreassign/CustomFilters":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("require/backbone"),e,i("views/Base"),i("views/shared/controls/SyntheticRadioControl"),i("views/shared/controls/SyntheticSelectControl")],void 0===(n=function(e,t,i,s,n,r,o){return n.extend({moduleId:s.i,initialize:function(e){n.prototype.initialize.call(this,e),this.children.orphanedFilter=new r({model:this.model.metadata,modelAttribute:"orphaned",items:[{label:t("All").t(),value:!1},{label:t("Orphaned").t(),value:!0}]}),this.children.configType=new o({label:t("Object type").t()+": ",model:this.model.metadata,modelAttribute:"configType",toggleClassName:"btn-pill",items:this.getConfigItems(),popdownOptions:{detachDialog:!0}}),this.children.appOnly=new o({model:this.model.metadata,modelAttribute:"appOnly",toggleClassName:"btn-pill",items:this.getAppOnlyItems(),popdownOptions:{detachDialog:!0}}),this.listenTo(this.model.metadata,"change:app",this.updateAppOnly)},updateAppOnly:function(e,t,i){""===t?(this.model.metadata.set("appOnly",!1),this.children.appOnly.disable()):this.children.appOnly.enable()},getAppOnlyItems:function(){return[{value:!1,label:t("All Objects").t()},{value:!0,label:t("Objects created in the app").t()}]},getConfigItems:function(){return t.map(["All","collections-conf","commands","conf-times","eventtypes","fieldaliases","fvtags","macros","modalerts","nav","panels","props-extract","props-lookup","savedsearch","sourcetype-rename","transforms-extract","transforms-lookup","views","workflow-actions"],(function(e){return{value:e,label:e}}))},render:function(){var e=this.compiledTemplate();return this.$el.html(e),this.children.orphanedFilter.render().appendTo(this.$(".orphaned-filter")),this.children.configType.render().appendTo(this.$(".config-type-filter")),this.children.appOnly.render().appendTo(this.$(".app-only-filter")),this.updateAppOnly(this.model.metadata,this.model.metadata.get("app")),this},template:'<span class="orphaned-filter"></span><span class="config-type-filter"></span><span class="app-only-filter"></span>'})}.apply(t,s))||(e.exports=n)},"views/bulkreassign/GridRow":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("require/backbone"),e,i("views/shared/basemanager/GridRow")],void 0===(n=function(e,t,i,s,n){return n.extend({moduleId:s.i,events:t.extend({},n.prototype.events,{"click .entity-reassign-action":function(e){this.model.controller.trigger("reassignEntity",this.model.entity),e.preventDefault()}}),prepareTemplate:function(){var t=n.prototype.prepareTemplate.apply(this,arguments);return e.extend(!0,{},t,{model:this.model.entity,canUseApps:this.model.user.canUseApps(),description:this.model.entity.entry.content.get("description")||""})},template:'        <% if (enableBulkEdit) { %>            <td class="entity-select"></td>        <% } %>        <td class="cell-name">            <%- model.getName() %>            <% if (description) { %>                <div class="model-description"><%- description %></div>            <% } %>        </td>        <td class="cell-actions">            <a href="#" class="entity-action entity-reassign-action"><%= _("Reassign").t() %></a>        </td>                <td class="cell-config-type"><%- model.getType() %></td>        <td class="cell-owner"><%- model.getOwner() %></td>        <% if(canUseApps) { %>        <td class="cell-app"><%- model.getApp() %></td>        <% } %>        <td class="cell-sharing"><%- model.getSharingLabel() %></td>        <td class="cell-status"></td>        '},{columns:[{id:"name",title:t("Name").t(),sorts:!0},{id:"eai:type",title:t("Object type").t(),sorts:!0},{id:"eai:acl.owner",title:t("Owner").t(),sorts:!0},{id:"eai:acl.app",title:t("App").t(),sorts:!0,visible:function(){return this.model.user.canUseApps()}},{id:"eai:acl.sharing",title:t("Sharing").t(),sorts:!0}]})}.apply(t,s))||(e.exports=n)},"views/bulkreassign/PageController":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("require/backbone"),e,i("controllers/BaseManagerPageController"),i("collections/services/admin/Directories"),i("models/services/admin/Directory"),i("models/services/admin/DirectoryFetchData"),i("views/bulkreassign/GridRow"),i("views/bulkreassign/CustomFilters"),i("views/bulkreassign/ReassignDialog"),i("shim/splunk.util"),i("views/shared/pcss/basemanager.pcss")],void 0===(n=function(e,t,i,s,n,r,o,l,a,c,d,h,p){return n.extend({moduleId:s.i,initialize:function(e){this.collection=this.collection||{},this.model=this.model||{},this.deferreds=this.deferreds||{},this.learnMoreTag="learnmore.reassign.object",this.model.controller=new i.Model,this.model.metadata=new l(this.getFetchData()),this.collection.entities=new r(null,{fetchData:this.model.metadata}),this.deferreds.entities=this.collection.entities.fetch(),e.hideNewButton=!0,e.entitiesPlural=t("Knowledge Objects").t(),e.entitySingular=t("Knowledge Object").t(),e.header={pageTitle:t("Reassign Knowledge Objects").t(),pageDesc:t("Select knowledge objects and reassign them to another user. ").t(),learnMoreLink:this.learnMoreTag},e.model=this.model,e.collection=this.collection,e.entitiesCollectionClass=r,e.entityModelClass=o,e.entityFetchDataClass=l,e.customViews={GridRow:a,Filters:c},e.grid={showOwnerFilter:!0,appFilterModelAttribute:"app",showSharingColumn:!1,showStatusColumn:!0,statusColumnSortKey:"disabled",showAllApps:!0},e.bulkedit={enable:!0,actions:[{label:t("Reassign").t(),fires:"reassignSelected"}]},n.prototype.initialize.call(this,e),this.listenTo(this.model.metadata,"change",this.saveToUrl),this.listenTo(this.model.controller,"bulkReassignOwner",this.onBulkReassignOwner),this.listenTo(this.model.controller,"reassignEntity",this.onReassignSingleEntity)},saveToUrl:function(e,t){var i={};i.app=e.get("app"),i.count=e.get("count"),i.offset=e.get("offset"),i.sortKey=e.get("sortKey"),i.sortDirection=e.get("sortDirection"),i.orphaned=h.normalizeBoolean(e.get("orphaned")),i.configType=e.get("configType"),i.appOnly=h.normalizeBoolean(e.get("appOnly")),i.owner=e.get("ownerSearch"),i.search=e.get("nameFilter"),this.model.classicurl.save(i,{replaceState:!0})},getFetchData:function(){var t={sort_mode:"natural",sortKey:void 0,sortDirection:void 0,app:this.model.application.get("app"),owner:"-",ownerSearch:void 0,orphaned:!1,configType:"All",appOnly:!1,count:10,offset:0},i=this.model.classicurl.get("owner"),s={sortKey:this.model.classicurl.get("sortKey"),sortDirection:this.model.classicurl.get("sortDirection"),count:this.model.classicurl.get("count"),offset:this.model.classicurl.get("offset"),app:this.model.classicurl.get("app"),orphaned:h.normalizeBoolean(this.model.classicurl.get("orphaned")),ownerSearch:"-"===i?void 0:i,nameFilter:this.model.classicurl.get("search"),configType:this.model.classicurl.get("configType"),appOnly:h.normalizeBoolean(this.model.classicurl.get("appOnly"))};return e.extend(!0,{},t,s)},onReassignSingleEntity:function(e){var t=new r;t.add(e),this.onReassignSelectedClick("reassignSingleEntity",t,"singleEntity")},onReassignSelectedClick:function(i,s,n){n=n||"multipleEntities",s=s||this.collection.selectedEntities,this.children.reassignDialog&&this.stopListening(this.children.reassignDialog),this.children.reassignDialog=new d({model:this.model,collection:{selectedEntities:s,users:this.collection.users,usersSearch:this.collection.usersSearch.clone()},mode:n,learnMoreTag:this.learnMoreTag}),e("body").append(this.children.reassignDialog.render().el),this.children.reassignDialog.show(),this.listenToOnce(this.children.reassignDialog,"resetBulkSelection",t.bind((function(){this.resetBulkSelection()}),this))},onBulkReassignOwner:function(e,i,s){return s=s||"multipleEntities",i.trigger("bulkreassign:start"),i.reassign(e).done(t.bind((function(){i.trigger("bulkreassign:complete"),"singleEntity"===s&&(this.children.reassignDialog.hide(),this.children.reassignDialog.remove())}),this)).fail(t.bind((function(){i.trigger("bulkreassign:complete")}),this)).always(t.bind((function(){this.fetchEntitiesCollection()}),this))}})}.apply(t,s))||(e.exports=n)},"views/bulkreassign/ReassignDialog":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("require/backbone"),e,i("models/Base"),i("views/shared/FlashMessages"),i("views/shared/waitspinner/Master"),i("views/shared/controls/ControlGroup"),i("views/shared/basemanager/SearchableDropdown/Master"),i("views/bulkreassign/BulkProgressSummary"),i("views/shared/Modal"),i("uri/route"),i("views/bulkreassign/ReassignDialog.pcss")],void 0===(n=function(e,t,i,s,n,r,o,l,a,c,d,h){var p=n.extend({validation:{owner:function(e,i,s){if(t.isEmpty(e))return t("Please select the new owner.").t()}}}),u=-1,g=0,m=1;return d.extend({moduleId:s.i,className:d.CLASS_NAME+" modal-with-spinner modal-with-static-warning",events:e.extend({},d.prototype.events,{"click .modal-btn-primary.save":"handleSave",hide:function(e){this.processingState!==g?(this.processingState===m&&this.trigger("resetBulkSelection"),e.target===e.currentTarget&&this.trigger("hide")):e.preventDefault()}}),initialize:function(e){if(e=t.defaults(e,{keyboard:!1,backdrop:"static",onHiddenRemove:!0,learnMoreTag:""}),d.prototype.initialize.call(this,e),!this.collection.selectedEntities)throw new Error("this.collection.selectedEntities is required");this.processingState=u,this.model._inmem=new p,this.isSingleEntity="singleEntity"===this.options.mode,this.isSingleEntity?(this.model.entity=this.collection.selectedEntities.at(0),this.title=t("Reassign Entity").t(),this.children.flashMessages=new r({model:[this.model._inmem,this.model.entity]}),this.children.entityTitle=new l({label:t("Name").t(),controlType:"Label",controlOptions:{model:this.model.entity.entry,modelAttribute:"name"}}),this.children.entityType=new l({label:t("Type").t(),controlType:"Label",controlOptions:{model:this.model.entity.entry.content,modelAttribute:"eai:type"}}),this.children.entityOwner=new l({label:t("Owner").t(),controlType:"Label",controlOptions:{model:this.model.entity.entry.acl,modelAttribute:"owner"}})):(this.title=t("Reassign Selected Entities").t(),this.children.flashMessages=new r({model:[this.model._inmem]}),this.children.bulkProgress=new c({model:this.model,collection:this.collection.selectedEntities})),this.children.newOwner=new a({prompt:t("Select an owner").t(),searchPrompt:t("Lookup an owner").t(),multiSelect:!1,model:this.model._inmem,modelAttribute:"owner",staticOptions:[{label:t("Nobody").t(),value:"nobody"}],collection:{search:this.collection.usersSearch,listing:this.collection.users},popdownOptions:{detachDialog:!0}}),this.children.ownerSelector=new l({label:t("New Owner").t(),controlType:"Label",controlOptions:{className:"newOwnerPlaceholder",model:this.model._inmem,modelAttribute:"owner"}}),this.children.spinner=new o,this.listenTo(this.collection.selectedEntities,"bulkreassign:start",this.enableProcessingMode),this.listenTo(this.collection.selectedEntities,"bulkreassign:complete",this.disableProcessingMode),this.listenTo(this.collection.selectedEntities,"add remove reset",this.handleNoEntity)},handleNoEntity:function(){0===this.collection.selectedEntities.length&&this.$(d.FOOTER_SELECTOR+" .modal-btn-primary").addClass("disabled")},enableProcessingMode:function(){this.processingState=g,this.children.ownerSelector.disable(),this.$(d.FOOTER_SELECTOR+" .btn").remove(),this.children.spinner.start()},disableProcessingMode:function(){this.processingState=m,this.children.spinner.stop(),this.children.spinner.$el.hide(),this.$(d.FOOTER_SELECTOR).append(d.BUTTON_DONE)},getCombinedOwnerName:function(){return 0===this.collection.selectedEntities.length?"":this.collection.selectedEntities.map((function(e){return e.getOwner()})).reduce((function(e,t){return e===t?e:"<multiple owners>"}))},handleSave:function(){0!==this.collection.selectedEntities.length&&this.model._inmem.isValid(!0)&&(this.children.spinner.start(),this.children.spinner.$el.show(),this.model.controller.trigger("bulkReassignOwner",this.model._inmem.get("owner"),this.collection.selectedEntities,this.options.mode))},render:function(){this.$el.html(d.TEMPLATE),this.$(d.HEADER_TITLE_SELECTOR).html(this.title);var e=h.docHelp(this.model.application.get("root"),this.model.application.get("locale"),this.options.learnMoreTag),i=t.template(this.bodyTemplate)({learnMoreLink:e});this.$(d.BODY_SELECTOR).html(i),this.children.flashMessages&&this.$(".flash-message-placeholder").append(this.children.flashMessages.render().el),this.$(d.FOOTER_SELECTOR).append(d.BUTTON_CANCEL),this.$(d.FOOTER_SELECTOR).append(d.BUTTON_SAVE),this.$(d.FOOTER_SELECTOR+" .modal-btn-primary").addClass("save"),this.$(d.FOOTER_SELECTOR).append(this.children.spinner.render().el),this.children.spinner.$el.hide();var s=this.$(".owner-form");return this.children.entityTitle&&s.append(this.children.entityTitle.render().el),this.children.entityType&&s.append(this.children.entityType.render().el),this.children.entityOwner&&s.append(this.children.entityOwner.render().el),s.append(this.children.ownerSelector.render().el),s.find(".newOwnerPlaceholder").replaceWith(this.children.newOwner.render().el),this.children.bulkProgress&&this.$(".bulk-progress").append(this.children.bulkProgress.render().el),this.isSingleEntity||this.$el.addClass("modal-wide"),this.$(".alert-warning .message").append(this.securtiyWarningMessage),this},securtiyWarningMessage:t("Knowledge object ownership changes can have side effects such as giving saved searches access to previously inaccessible data or making previously available knowledge objects unavailable. Review your knowledge objects before you reassign them.").t(),bodyTemplate:'<div class="security-warning"><div class="alert alert-warning"><i class="icon-alert"></i><span class="message"></span> <a href="<%- learnMoreLink %>" target="_blank" rel="noopener noreferrer" class="external"><%= _("Learn more").t() %></a></div></div></div><div class="flash-message-placeholder"></div><div class="owner-form form-horizontal"></div><div class="bulk-progress"></div>'})}.apply(t,s))||(e.exports=n)},"views/bulkreassign/ReassignDialog.pcss":function(e,t,i){var s=i(1978);"string"==typeof s&&(s=[[e.i,s,""]]);var n={sourceMap:!1,hmr:!0,transform:void 0,insertInto:void 0};i(4)(s,n);s.locals&&(e.exports=s.locals)}});