!function(e){function t(t){for(var s,a,l=t[0],r=t[1],c=t[2],p=0,h=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);for(d&&d(t);h.length;)h.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],s=!0,l=1;l<i.length;l++){var r=i[l];0!==n[r]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var s={},n={5:0},o=[];function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.e=function(e){var t=[],i=n[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,s){i=n[e]=[t,s]}));t.push(i[2]=s);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=function(e){return a.p+""+({}[e]||e)+".js"}(e);var r=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(c);var i=n[e];if(0!==i){if(i){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",r.name="ChunkLoadError",r.type=s,r.request=o,i[1](r)}n[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=s,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;o.push([1428,0]),i()}({1428:function(e,t,i){var s,n;i.p=function(){function e(e,t){if(window.$C&&window.$C.hasOwnProperty(e))return window.$C[e];if(void 0!==t)return t;throw new Error("getConfigValue - "+e+" not set, no default provided")}return function(){for(var t,i,s="",n=0,o=arguments.length;n<o;n++)(i=(t=arguments[n].toString()).length)>1&&"/"==t.charAt(i-1)&&(t=t.substring(0,i-1)),"/"!=t.charAt(0)?s+="/"+t:s+=t;if("/"!=s){var a=s.split("/"),l=a[1];if("static"==l||"modules"==l){var r=s.substring(l.length+2,s.length);s="/"+l,window.$C.BUILD_NUMBER&&(s+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(s+="."+window.$C.BUILD_PUSH_NUMBER),"app"==a[2]&&(s+=":"+e("APP_BUILD",0)),s+="/"+r}}var c=e("MRSPARKLE_ROOT_PATH","/"),d=e("LOCALE","en-US"),p="/"+d+s;return""==c||"/"==c?p:c+p}("/static/build/pages/lite")+"/"}(),s=[i("routers/AlertActions"),i("util/router_utils")],void 0===(n=function(e,t){new e;t.start_backbone_history()}.apply(t,s))||(e.exports=n)},1619:function(e,t,i){(e.exports=i(3)(!1)).push([e.i,'.alertactions-caption{padding:0 0 5px}.alertactions-caption .table-caption-inner{text-align:left;padding-left:20px}.alertactions-caption .table-caption-inner.affix-top{padding-bottom:5px}.alertactions-caption .msg{display:inline-block;padding:5px 5px 5px 0}.alertactions-caption .count-control{display:inline-block;padding-top:5px}.alertactions-caption .count-control.hidden{display:none}.alertactions-caption .count-control .shared-controls-syntheticselectcontrol{display:inline-block;padding-top:2px;margin-right:5px}.alertactions-caption .search-query-control{display:inline-block}.alertactions-caption .search-query-control .search-query{width:206px}.alertactions-caption .loading-indicator{display:inline-block;padding-top:5px}.alertactions-caption .loading-indicator.hidden{display:none}.alertactions-caption .loading-indicator .shared-waitspinner{display:inline-block;margin-top:6px}.alertactions-table-tablerow .title img{width:24px;height:24px;float:left}.alertactions-table-tablerow .title .action-description{color:#6b7785;margin:0 0 0 30px;font-size:.85em}.alertactions-table-tablerow .title .action-name{display:block;margin-left:30px}.alertactions-title p{margin:0}.alertactions-table table{width:100%;background-color:#fff;-webkit-box-shadow:0 1px 1px #e1e6eb;box-shadow:0 1px 1px #e1e6eb}@supports (-ms-ime-align:auto){.alertactions-table table{position:relative}.alertactions-table table:before{content:"";display:inline-block;position:absolute;top:0;left:0;height:100%;width:100%;pointer-events:none;background:transparent;-webkit-box-shadow:0 1px 1px #e1e6eb;box-shadow:0 1px 1px #e1e6eb}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.alertactions-table table{position:relative}.alertactions-table table:before{content:"";display:inline-block;position:absolute;top:0;left:0;height:100%;width:100%;pointer-events:none;background:transparent;-webkit-box-shadow:0 1px 1px #e1e6eb;box-shadow:0 1px 1px #e1e6eb}}.alertactions-table .col-app{width:157px}.alertactions-table .app{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.alertactions-table .col-sharing{width:180px}.alertactions-table .col-status{width:115px}.alertactions-table .col-log,.alertactions-table .col-usage{width:110px}.alertactions-table .col-setup{width:120px}@media (max-width:1024px){.alertactions-table .col-app{width:90px}}',""])},"routers/AlertActions":function(e,t,i){var s,n;s=[i("require/underscore"),i("shim/jquery"),i("routers/BaseListings"),i("collections/shared/ModAlertActions"),i("views/alert_actions/Master"),i("collections/services/AppLocals"),i("util/general_utils")],void 0===(n=function(e,t,i,s,n,o,a){return i.extend({initialize:function(){i.prototype.initialize.apply(this,arguments),this.setPageTitle(e("Manage alert actions").t()),this.loadingMessage=e("Loading...").t(),this.enableAppBar=!1,this.stateModel.set({sortKey:"label",sortDirection:"asc",pdf_available:!0,count:25,offset:0}),this.stateModel.set("fetching",!0),this.alertActionsCollection=new s,this.alertActionsCollection.on("alert-action-created",this.fetchListCollection,this),this.stateModel.on("change:search change:sortDirection change:sortKey change:offset change:count",e.debounce(function(){this.fetchListCollection()}.bind(this),50),this),this.alertActionsCollection.on("destroy add",function(){this.fetchListCollection()}.bind(this),this),this.collection.allLocalApps=new o},bootstrapAppLocals:function(){"resolved"!==this.deferreds.appLocals.state()&&this.collection.allLocalApps.fetch({data:{sort_key:"name",sort_dir:"asc",app:"-",owner:this.model.application.get("owner"),search:"disabled=0",count:-1},success:function(t){var i=e(t.models).filter((function(e){return a.normalizeBoolean(e.entry.content.get("visible"))}));this.collection.appLocalsUnfiltered.set(i),this.collection.appLocals.set(e(i).filter((function(e){return"/servicesNS/nobody/system/apps/local/launcher"!==e.id}))),this.deferreds.appLocals.resolve(),this.deferreds.appLocalsUnfiltered.resolve()}.bind(this),error:function(){this.deferreds.appLocals.resolve(),this.deferreds.appLocalsUnfiltered.resolve()}.bind(this)})},initializeAndRenderViews:function(){this.alertActionsView=new n({model:{state:this.stateModel,application:this.model.application,appLocal:this.model.appLocal,user:this.model.user,uiPrefs:this.uiPrefsModel,serverInfo:this.model.serverInfo,rawSearch:this.rawSearch},collection:{alertActions:this.alertActionsCollection,roles:this.rolesCollection,apps:this.collection.allLocalApps},hideCreateLink:"system"===this.model.application.get("app")}),this.pageView.$(".main-section-body").html(this.alertActionsView.render().el),this.uiPrefsModel.entry.content.on("change",(function(){this.populateUIPrefs()}),this),this.uiPrefsModel.entry.content.on("change:display.prefs.appFilter",(function(){this.fetchListCollection()}),this)},fetchListCollection:function(){this.stateModel.set("fetching",!0),this.model.classicurl.fetch(),this.model.classicurl.get("search")&&(this.stateModel.set("search",this.model.classicurl.get("search"),{silent:!0}),this.model.classicurl.unset("search"),this.model.classicurl.save({},{replaceState:!0})),this.model.classicurl.get("rawSearch")&&(this.rawSearch.set("rawSearch",this.model.classicurl.get("rawSearch"),{silent:!0}),this.model.classicurl.unset("rawSearch"),this.model.classicurl.save({},{replaceState:!0}));var e=this.alertActionsCollection,t=this.stateModel.get("search")||"";t&&(t+=" AND "),t+=s.availableWithUserWildCardSearchString(this.model.application.get("owner"));"system"===this.model.application.get("app")||this.model.application.get("app");return e.fetch({data:{app:"-",owner:"-",search:t,sort_dir:this.stateModel.get("sortDirection"),sort_key:this.stateModel.get("sortKey").split(","),sort_mode:["alpha","alpha"],count:this.stateModel.get("count"),offset:this.stateModel.get("offset")},success:function(){this.stateModel.set("fetching",!1)}.bind(this)})}})}.apply(t,s))||(e.exports=n)},"views/alert_actions/Master":function(e,t,i){var s,n;s=[i("require/underscore"),e,i("views/Base"),i("views/alert_actions/Title"),i("views/alert_actions/table/Master"),i("views/alert_actions/caption/Master"),i("views/alert_actions/Master.pcss")],void 0===(n=function(e,t,i,s,n,o,a){return i.extend({moduleId:t.i,initialize:function(){i.prototype.initialize.apply(this,arguments),this.children.title=new s({model:{user:this.model.user,serverInfo:this.model.serverInfo,application:this.model.application}}),this.children.caption=new o({countLabel:e("Alert actions").t(),model:{state:this.model.state,application:this.model.application,user:this.model.user,uiPrefs:this.model.uiPrefs,serverInfo:this.model.serverInfo,rawSearch:this.model.rawSearch},collection:{alertActions:this.collection.alertActions,apps:this.collection.apps},filterKey:"name label"})},render:function(){return this.el.innerHTML||(this.$el.html(this.compiledTemplate({})),this.children.title.render().appendTo(this.$(".section-header")),this.children.caption.render().appendTo(this.$el)),this._renderTable(),this},_renderTable:function(){this.children.table||(this.children.table=new n({model:{state:this.model.state,application:this.model.application,uiPrefs:this.model.uiPrefs,userPref:this.model.userPref,user:this.model.user,appLocal:this.model.appLocal,serverInfo:this.model.serverInfo},collection:{alertActions:this.collection.alertActions,roles:this.collection.roles,apps:this.collection.apps}})),this.children.table.render().appendTo(this.$el)},template:'<div class="section-padded section-header page-heading"></div>'})}.apply(t,s))||(e.exports=n)},"views/alert_actions/Master.pcss":function(e,t,i){var s=i(1619);"string"==typeof s&&(s=[[e.i,s,""]]);var n={sourceMap:!1,hmr:!0,transform:void 0,insertInto:void 0};i(4)(s,n);s.locals&&(e.exports=s.locals)},"views/alert_actions/Title":function(e,t,i){var s,n;s=[i("require/underscore"),e,i("views/Base"),i("uri/route")],void 0===(n=function(e,t,i,s){return i.extend({moduleId:t.i,initialize:function(){i.prototype.initialize.apply(this,arguments)},render:function(){return this.$el.html(this.compiledTemplate({_:e,isLite:this.model.serverInfo.isLite(),canViewRemoteApps:this.model.user.canViewRemoteApps()})),this},events:{"click .browseMore":function(e){e.preventDefault();var t=s.manager(this.model.application.get("root"),this.model.application.get("locale"),this.model.application.get("app"),"appsremote",{data:{content:"alert_actions"}});document.location.href=t}},template:'                <% if (!isLite && canViewRemoteApps) { %>                <div class="pull-right">                    <button class="btn btn-primary browseMore"><%- _("Browse more").t() %></button>                </div>                <% } %>                <h1 class="section-title"><%- _("Alert Actions").t() %></h1>                    <p><%- _("Review and manage available alert actions").t() %></p>                <div class="clearfix"></div>                '})}.apply(t,s))||(e.exports=n)},"views/alert_actions/caption/Count":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),e,i("views/Base"),i("views/shared/controls/SyntheticSelectControl"),i("shim/splunk.util")],void 0===(n=function(e,t,i,s,n,o){return s.extend({moduleId:i.i,className:"count-control",initialize:function(){s.prototype.initialize.apply(this,arguments),this.children.countSelect=new n({modelAttribute:"count",model:this.model,items:[{label:t("10 per page").t(),value:10},{label:t("25 per page").t(),value:25},{label:t("50 per page").t(),value:50},{label:t("100 per page").t(),value:100}]});var e=t.debounce(t.bind(this.update,this));this.listenTo(this.collection,"reset destroy",e),this.listenTo(this.model,"change:fetching",e)},update:function(){var e=parseInt(this.model.get("offset"),10),i=this.collection.length,s=this.collection.models[0]&&this.collection.models[0].paging?this.collection.models[0].paging.get("total"):0;0===i||s<=parseInt(this.model.get("count"),10)&&0===e?(this.$(".msg").empty(),this.$el.addClass("hidden")):(this.$(".msg").text(o.sprintf(t("Showing %s-%s of %s items").t(),e+1,e+i,s)),this.$el.removeClass("hidden"))},render:function(){return e('<div class="msg"></div>').appendTo(this.$el),this.children.countSelect.render().appendTo(this.$el),this.update(),this}})}.apply(t,s))||(e.exports=n)},"views/alert_actions/caption/LoadingIndicator":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),i("views/Base"),i("views/shared/waitspinner/Master")],void 0===(n=function(e,t,i,s){return i.extend({className:"loading-indicator",initialize:function(){this.children.spinner=new s,this.listenTo(this.model,"change:fetching",this.debouncedRender)},render:function(){this.$el.is(":empty")&&(this.children.spinner.appendTo(this.$el),e('<div class="msg"></div>').text(t("Loading").t()).appendTo(this.$el));var i=this.model.get("fetching");return this.children.spinner[i?"start":"stop"](),this.$el[i?"removeClass":"addClass"]("hidden"),this}})}.apply(t,s))||(e.exports=n)},"views/alert_actions/caption/Master":function(e,t,i){var s,n;s=[i("require/underscore"),e,i("views/Base"),i("views/shared/CollectionPaginator"),i("views/alert_actions/caption/Count"),i("views/alert_actions/caption/LoadingIndicator"),i("views/shared/controls/ControlGroup"),i("views/shared/FindInput"),i("views/shared/delegates/Dock")],void 0===(n=function(e,t,i,s,n,o,a,l,r){return i.extend({moduleId:t.i,tagName:"div",className:"table-caption",initialize:function(){i.prototype.initialize.apply(this,arguments),this.children.count=new n({countLabel:this.options.countLabel,model:this.model.state,collection:this.collection.alertActions}),this.children.paginatorView=new s({collection:this.collection.alertActions,model:this.model.state}),this.children.input=new l({model:this.model.state,rawSearch:this.model.rawSearch,key:this.options.filterKey}),this.children.loading=new o({model:this.model.state})},render:function(){this.$el.append(this.template);var e=this.$(".table-caption-inner");return this.children.count.render().appendTo(e),this.children.paginatorView.render().appendTo(e),this.children.input.render().appendTo(e),this.children.loading.render().appendTo(e),this.children.tableDock=new r({el:this.el,affix:".table-caption-inner"}),this},template:'<div class="table-caption-inner"></div>'})}.apply(t,s))||(e.exports=n)},"views/alert_actions/table/Master":function(e,t,i){var s,n;s=[e,i("shim/jquery"),i("require/underscore"),i("views/Base"),i("views/shared/TableHead"),i("views/alert_actions/table/TableRow"),i("views/shared/delegates/TableDock")],void 0===(n=function(e,t,i,s,n,o,a){return s.extend({moduleId:e.i,className:"table-padded",initialize:function(){s.prototype.initialize.apply(this,arguments);var e=[],t=this.model.serverInfo.isLite();e.push({label:i("Alert action").t(),sortKey:"label,name"}),this.model.user.canUseApps()&&e.push({label:i("App").t(),sortKey:"eai:acl.app,name",className:"col-app"}),e.push({label:i("Sharing").t(),sortKey:"eai:acl.sharing,name",className:"col-sharing"}),e.push({label:i("Status").t(),sortKey:"disabled,name",className:"col-status"}),t||e.push({label:i("Usage").t(),className:"col-usage"}),e.push({label:i("Log").t(),className:"col-log"}),e.push({label:i("Setup").t(),className:"col-setup"}),this.children.head=new n({model:this.model.state,columns:e}),this.children.rows=this.rowsFromCollection(),this.activate(),this.children.tableDock=new a({el:this.el,offset:44,dockScrollBar:!1,defaultLayout:"fixed",flexWidthColumn:1})},startListening:function(){this.listenTo(this.collection.alertActions,"reset",this.renderRows)},rowsFromCollection:function(){var e=this.model.application.get("app"),s="system"!==e?e:"search",n=i.find(this.collection.apps.models,(function(e){return"search"===e.entry.get("name")}));if("search"===s&&n&&n.entry.content.get("disabled")&&(s=this.collection.apps.models[0].entry.get("name")),this.collection.alertActions.length>0)return this.children.head.$el.show(),i.flatten(this.collection.alertActions.map((function(e,t){return[new o({model:{alertAction:e,application:this.model.application,state:this.model.state,user:this.model.user,appLocal:this.model.appLocal,serverInfo:this.model.serverInfo},collection:{roles:this.collection.roles,apps:this.collection.apps},index:t,alternateApp:s})]}),this));this.children.head.$el.hide(),t('<tr class="expand no-results alertactions-table-tablerow odd"><td style="text-align:center">'+i.escape(i("No results found").t())+"</td></tr>").appendTo(this.$(".alert-actions-listings"))},_render:function(){i(this.children.rows).each((function(e){e.render().appendTo(this.$(".alert-actions-listings"))}),this),this.children.tableDock.update()},renderRows:function(){this.$(".no-results").remove(),i(this.children.rows).each((function(e){e.remove()}),this),this.children.rows=this.rowsFromCollection(),this._render()},render:function(){return this.el.innerHTML||(this.$el.append(this.compiledTemplate({})),this.children.head.render().prependTo(this.$("> .table-chrome"))),this._render(),this},template:'<table class="table table-chrome table-striped table-listing">                    <tbody class="alert-actions-listings"></tbody>                </table>'})}.apply(t,s))||(e.exports=n)},"views/alert_actions/table/TableRow":function(e,t,i){var s,n;s=[i("shim/jquery"),i("require/underscore"),e,i("views/Base"),i("views/shared/reportcontrols/editmenu/Master"),i("views/shared/documentcontrols/dialogs/permissions_dialog/Master"),i("uri/route"),i("util/splunkd_utils"),i("shim/splunk.util"),i("collections/shared/ModAlertActions")],void 0===(n=function(e,t,i,s,n,o,a,l,r,c){return s.extend({moduleId:i.i,tagName:"tr",className:"expand",initialize:function(){s.prototype.initialize.apply(this,arguments),this.$el.addClass(this.options.index%2?"even":"odd"),this.editdropdown=new n({model:{application:this.model.application,alertAction:this.model.alertAction,user:this.model.user,appLocal:this.model.appLocal,serverInfo:this.model.serverInfo},collection:this.collection.roles,button:!1,showOpenActions:!1}),this.activate()},events:{"click a.enable":function(e){e.preventDefault(),this.model.alertAction.entry.content.set("disabled",!1),this.model.alertAction.save(),this.updateEnabled()},"click a.disable":function(e){e.preventDefault(),this.model.alertAction.entry.content.set("disabled",!0),this.model.alertAction.save(),this.updateEnabled()},"click a.permission":function(e){e.preventDefault(),this.openPermissionsDialog()}},startListening:function(){this.listenTo(this.model.alertAction,"updateCollection",(function(){this.model.state.trigger("change:search")})),this.listenTo(this.model.alertAction.entry.acl,"change:sharing",this.updateSharing),this.listenTo(this.model.alertAction.entry.content,"change:disabled",this.updateEnabled)},updateSharing:function(){var e=this.model.alertAction.entry.acl.get("sharing"),i=l.getSharingLabel(e);this.$("td.sharing").html(i+' | <a href="#" class="permission">'+t.escape(t("Permissions").t())+"</a>")},updateEnabled:function(){var e=t.template('<%- status %> | <a href="#" class="<%- actionClass %>"><%- action %></a>');this.model.alertAction.entry.content.get("disabled")?this.$("td.enabled").html(e({status:t("Disabled").t(),actionClass:"enable",action:t("Enable").t()})):this.$("td.enabled").html(e({status:t("Enabled").t(),actionClass:"disable",action:t("Disable").t()}))},openPermissionsDialog:function(){this.children.permissionsDialog=new o({model:{document:this.model.alertAction,nameModel:this.model.alertAction.entry,user:this.model.user,serverInfo:this.model.serverInfo},collection:this.collection.roles,nameLabel:t("Alert action").t(),nameKey:"name",onHiddenRemove:!0}),e("body").append(this.children.permissionsDialog.render().el),this.children.permissionsDialog.show()},searchUrl:function(e){var t=r.sprintf(e,JSON.stringify(this.model.alertAction.entry.get("name")));return a.search(this.model.application.get("root"),this.model.application.get("locale"),"search",{data:{q:t}})},render:function(){var e,i,s=this.model.alertAction.entry.acl.get("app"),n=this.model.alertAction.entry.content.get("label")||this.model.alertAction.entry.get("name"),o=this.model.alertAction.entry.content.get("description")||"",l=t.find(this.collection.apps.models,(function(e){return e.entry.get("name")===s}));l&&l.entry.content.get("visible")||this.options.alternateApp;return l&&l.entry.links.get("setup")&&(e=a.appSetupLink(this.model.application.get("root"),this.model.application.get("locale"),s),i=r.sprintf(t("Setup %s").t(),l.entry.content.get("label")||s)),this.$el.html(this.compiledTemplate({iconPath:a.alertActionIconFile(this.model.application.get("root"),this.model.application.get("locale"),s,{file:this.model.alertAction.entry.content.get("icon_path")}),alertActionName:t(n).t(),description:t(o).t(),app:s,index:this.options.index,showLogLinks:!c.isBuiltinAction(this.model.alertAction.entry.get("name")),logUrl:this.searchUrl("index=_internal sourcetype=splunkd component=sendmodalert action=%s"),usageUrl:this.searchUrl('index=_internal sourcetype=splunkd component=sendmodalert action=%s "Invoking modular alert action" | timechart count'),setupUrl:e,setupLabel:i,isLite:this.model.serverInfo.isLite(),canUseApps:this.model.user.canUseApps()})),this.updateSharing(),this.updateEnabled(),this},template:'                <td class="title">                    <div class="action-label">                    <% if (iconPath) { %>                        <img src="<%= iconPath %>" alt="<%- _("Alert action icon").t() %>" />                     <%}%>                        <span class="action-name"><%- alertActionName %></span>                    </div>                    <p class="action-description"><%- description %> </p>                </td>                <% if (canUseApps) { %>                    <td class="app"><%- app %></td>                <% } %>                <td class="sharing"></td>                <td class="enabled"></td>                <% if (!isLite) { %>                <td class="usage">                    <% if(showLogLinks){ %>                        <a href="<%- usageUrl %>" class="usage"><%- _("Usage statistics").t() %></a>                    <% } %>                </td>                <% } %>                <td class="log">                    <% if(showLogLinks){ %>                        <a href="<%- logUrl %>" class="log"><%- _("View log events").t() %></a>                    <% } %>                </td>                <td class="setup">                    <% if(setupUrl){ %>                        <a href="<%- setupUrl %>" class="setup"><%- setupLabel %></a>                    <% } %>                </td>                '})}.apply(t,s))||(e.exports=n)}});