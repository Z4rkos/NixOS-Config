!function(e){function t(t){for(var s,n,l=t[0],a=t[1],d=t[2],h=0,u=[];h<l.length;h++)n=l[h],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);for(c&&c(t);u.length;)u.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,l=1;l<i.length;l++){var a=i[l];0!==o[a]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=i[0]))}return e}var s={},o={39:0},r=[];function n(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.e=function(e){var t=[],i=o[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,s){i=o[e]=[t,s]}));t.push(i[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=function(e){return n.p+""+({}[e]||e)+".js"}(e);var a=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(d);var i=o[e];if(0!==i){if(i){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",a.name="ChunkLoadError",a.type=s,a.request=r,i[1](a)}o[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},n.m=e,n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=a;r.push([2414,0]),i()}({2414:function(e,t,i){var s,o;i.p=function(){function e(e,t){if(window.$C&&window.$C.hasOwnProperty(e))return window.$C[e];if(void 0!==t)return t;throw new Error("getConfigValue - "+e+" not set, no default provided")}return function(){for(var t,i,s="",o=0,r=arguments.length;o<r;o++)(i=(t=arguments[o].toString()).length)>1&&"/"==t.charAt(i-1)&&(t=t.substring(0,i-1)),"/"!=t.charAt(0)?s+="/"+t:s+=t;if("/"!=s){var n=s.split("/"),l=n[1];if("static"==l||"modules"==l){var a=s.substring(l.length+2,s.length);s="/"+l,window.$C.BUILD_NUMBER&&(s+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(s+="."+window.$C.BUILD_PUSH_NUMBER),"app"==n[2]&&(s+=":"+e("APP_BUILD",0)),s+="/"+a}}var d=e("MRSPARKLE_ROOT_PATH","/"),c=e("LOCALE","en-US"),h="/"+c+s;return""==d||"/"==d?h:d+h}("/static/build/pages/enterprise")+"/"}(),s=[i("routers/Embed"),i("util/router_utils")],void 0===(o=function(e,t){new e;t.start_backbone_history()}.apply(t,s))||(e.exports=o)},2415:function(e,t,i){(e.exports=i(3)(!1)).push([e.i,".embed{background-color:#fff;min-width:0}.embed .highcharts-container{line-height:0}.embed footer div{color:#5c6773;float:right;padding:10px 20px}.alerts,.lazy-view-container.loading,.shared-jobdispatchstate,.shared-reportvisualizer .visualization-message{position:absolute;left:0;top:50%;right:0;height:45px;text-align:center}.alert-error,.lazy-view-container.loading .alert,.shared-jobdispatchstate .alert,.shared-reportvisualizer .visualization-message .alert{color:#6b7785;display:inline-block;margin-top:-20px}",""])},"routers/Embed":function(e,t,i){var s,o;s=[i("require/underscore"),i("shim/jquery"),i("shim/splunk.util"),i("routers/Base"),i("models/Base"),i("models/search/Report"),i("models/search/Job"),i("models/services/search/jobs/Result"),i("models/services/search/jobs/Summary"),i("models/services/configs/Visualization"),i("models/shared/fetchdata/ResultsFetchData"),i("collections/services/saved/searches/Histories"),i("collections/search/SelectedFields"),i("collections/services/data/ui/WorkflowActions"),i("views/embed/Master")],void 0===(o=function(e,t,i,s,o,r,n,l,a,d,c,h,u,p,m){return s.extend({routes:t.extend(!0,{},{":locale/embed":"embed",":locale/embed?*params":"embed",":locale/embed/":"embed",":locale/embed/?*params":"embed","*root/:locale/embed":"embedRooted","*root/:locale/embed?*params":"embedRooted","*root/:locale/embed/":"embedRooted","*root/:locale/embed/?*params":"embedRooted"},s.prototype.routes),initialize:function(){s.prototype.initialize.apply(this,arguments),t(document).off("ajaxError"),this.setPageTitle(e("Embedded Report").t()),this.enablePageView=!1,this.fetchVisualizations=!0,this.fetchVisualizationFormatters=!1,this.model.report=new r,this.model.job=new n({},{delay:n.DEFAULT_POLLING_INTERVAL,processKeepAlive:!1}),this.model.result=new l,this.model.summary=new a,this.collection.histories=new h,this.collection.selectedFields=new u,this.collection.workflowActions=new p,this.views.master=new m({el:t("body"),model:{application:this.model.application,report:this.model.report,job:this.model.job,result:this.model.result,summary:this.model.summary},collection:{histories:this.collection.histories,selectedFields:this.collection.selectedFields,workflowActions:this.collection.workflowActions},deferreds:{visualizations:this.deferreds.visualizations}}),this.model.classicurl.on("change:s",(function(){this.deferreds.appLocals.resolve(),this.bootstrapVisualizations({oid:this.model.classicurl.get("oid"),owner:"-"}),this.model.report.fetchAbort(),this.model.report.clear(),this.model.report.set("id",this.model.classicurl.get("s")),this.model.report.fetch({data:{oid:this.model.classicurl.get("oid")},migrateViewState:!1}),this.model.application.set("oid",this.model.classicurl.get("oid"))}),this),this.model.report.on("sync",(function(){this.setPageTitle(this.model.report.entry.get("name")),this.model.report.entry.content.set({"display.events.list.drilldown":"none","display.events.raw.drilldown":"none","display.events.table.drilldown":"0","display.statistics.drilldown":"none","display.visualizations.charting.drilldown":"none","display.visualizations.custom.drilldown":"none"}),this.collection.histories.fetchAbort(),this.collection.histories.reset(),this.collection.histories.url=this.model.report.entry.links.get("history"),this.collection.histories.fetch({data:{count:1,isDone:!0,sort_key:"start",sort_dir:"desc",oid:this.model.classicurl.get("oid")}}),this.collection.selectedFields.reset(this.model.report.getDisplayEventsFields({key:"name"}))}),this),this.collection.histories.on("sync",(function(){var e=this.collection.histories.at(0);this.model.job.clear(),this.model.job.fetchAbort(),this.model.job.stopPolling(),e&&(this.model.job.set("id",e.entry.get("name")),this.model.job.fetch({data:{oid:this.model.classicurl.get("oid")}}))}),this),this.model.job.on("sync",(function(){this.model.job.startPolling()}),this),this.model.job.entry.links.on("change:events",(function(){var e=this.model.job.entry.links.get("events");e?this.model.result.set("id",e):this.model.result.fetchAbort()}),this),this.model.job.on("jobProgress",(function(){this.model.job.isReportSearch()||this.fetchEvents()}),this)},fetchEvents:function(){var t=e(this.model.report.getDisplayEventsFields()).union(["_raw","_time","_audit","_decoration","eventtype","linecount","_fulllinecount"]);this.model.job.isRealtime()&&t.push("_serial","splunk_server");var s={data:{offset:0,count:10,earliest_time:this.model.report.entry.content.get("display.events.timelineEarliestTime"),latest_time:this.model.report.entry.content.get("display.events.timelineLatestTime"),segmentation:"none",max_lines:this.model.report.getNearestMaxlines(),field_list:i.fieldListToString(t),truncation_mode:"abstract",oid:this.model.classicurl.get("oid")},sparseMode:!0};this.model.result.safeFetch(s)},embed:function(e){this.model.application.set({locale:e,app:"-",page:"embed"}),this.model.classicurl.fetch(),this.views.master.render(),window.router=this},embedRooted:function(e,t){this.model.application.set({root:e},{silent:!0}),this.embed(t)},setPageTitle:function(e){document.title=e}})}.apply(t,s))||(e.exports=o)},"views/embed/Error":function(e,t,i){var s,o;s=[i("require/underscore"),e,i("views/Base"),i("views/shared/FlashMessagesLegacy"),i("collections/shared/FlashMessages")],void 0===(o=function(e,t,i,s,o){return i.extend({moduleId:t.i,initialize:function(){i.prototype.initialize.apply(this,arguments),this.collection={histories:this.collection,messages:new o},this.children.flashMessages=new s({collection:this.collection.messages}),this.activate()},startListening:function(){this.listenTo(this.collection.histories,"sync",(function(){this.collection.histories.length?(this.$el.hide(),this.collection.messages.reset([])):(this.collection.messages.reset([{type:"error",html:e("This scheduled report has not yet run. Try again soon.").t()}]),this.$el.show())})),this.listenTo(this.model,"error",(function(){this.collection.messages.reset([{type:"error",html:e("Report not available.").t()}]),this.$el.show()}))},render:function(){return this.$el.append(this.children.flashMessages.render().el),this}})}.apply(t,s))||(e.exports=o)},"views/embed/Master":function(e,t,i){var s,o;s=[e,i("require/underscore"),i("views/Base"),i("views/shared/JobDispatchState"),i("views/embed/Results"),i("views/embed/Error"),i("views/embed/Master.pcss")],void 0===(o=function(e,t,i,s,o,r,n){return i.extend({moduleId:e.i,initialize:function(e){i.prototype.initialize.apply(this,arguments),this.children.jobDispatchState=new s({mode:"auto",model:{searchJob:this.model.job,application:this.model.application}}),this.children.results=new o({model:{application:this.model.application,job:this.model.job,report:this.model.report,result:this.model.result,resultJSONRows:this.model.resultJSONRows,summary:this.model.summary,mapState:this.model.mapState},collection:{selectedFields:this.collection.selectedFields,workflowActions:this.collection.workflowActions},deferreds:{visualizations:e.deferreds.visualizations}}),this.visualizationsDfd=e.deferreds.visualizations,this.children.error=new r({model:this.model.report,collection:this.collection.histories}),this.activate()},startListening:function(){this.listenTo(this.model.job.entry.content,"change:resultCount change:resultPreviewCount change:eventCount change:eventAvailableCount change:dispatchState",t.debounce(this.visibility)),this.visualizationsDfd.done(this.render.bind(this))},visibility:function(){var e=this.model.report.entry.content.get("display.general.type");if("events"===e)0===this.model.job.entry.content.get("eventCount")||0===this.model.job.entry.content.get("eventAvailableCount")?this.children.results.$el.hide():this.children.results.$el.show();else if("statistics"===e||"visualizations"===e){0===(this.model.job.entry.content.get("isPreviewEnabled")?this.model.job.entry.content.get("resultPreviewCount"):this.model.job.entry.content.get("resultCount"))?this.children.results.$el.hide():this.children.results.$el.show()}else this.children.results.$el.hide()},render:function(){return"resolved"===this.visualizationsDfd.state()&&(this.visibility(),this.$el.append(this.children.error.render().el),this.$el.append(this.children.jobDispatchState.render().el),this.$el.append(this.children.results.render().el)),this}})}.apply(t,s))||(e.exports=o)},"views/embed/Master.pcss":function(e,t,i){var s=i(2415);"string"==typeof s&&(s=[[e.i,s,""]]);var o={sourceMap:!1,hmr:!0,transform:void 0,insertInto:void 0};i(4)(s,o);s.locals&&(e.exports=s.locals)},"views/embed/Results":function(e,t,i){var s,o;s=[i("require/underscore"),e,i("views/Base"),i("views/shared/ReportVisualizer"),i("views/shared/eventsviewer/LazyEventsViewer"),i("models/search/Job"),i("stubs/splunk.config"),i("shim/splunk.util")],void 0===(o=function(e,t,i,s,o,r,n,l){return i.extend({moduleId:t.i,initialize:function(){i.prototype.initialize.apply(this,arguments),this.activate()},startListening:function(){this.listenTo(this.model.job,"prepared",this.render)},render:function(){if(this.removeChildren(),this.model.job.isNew()||this.model.job.isPreparing())return this;if(this.model.job.isReportSearch()){var e=l.normalizeBoolean(this.model.report.entry.content.get("display.visualizations.show"));this.children.display=new s({model:{config:this.model.report.entry.content,application:this.model.application},allowResize:!1,sortableFields:!1,tableDockOffset:-1,generalTypeOverride:e?s.GENERAL_TYPES.VISUALIZATIONS:s.GENERAL_TYPES.STATISTICS}),this.bindDataSources(),this.listenTo(this.children.display,"dataSourcesChange",this.bindDataSources)}else this.children.display=new o({model:{result:this.model.result,summary:this.model.summary,searchJob:this.model.job,report:this.model.report,application:this.model.application},collection:{selectedFields:this.collection.selectedFields,workflowActions:this.collection.workflowActions},selectableFields:!1,sortableFields:!1,headerMode:"dock",headerOffset:-1,allowRowExpand:!1,allowModalize:!1,defaultDrilldown:!1});this.children.display.load(),this.$el.append(this.children.display.activate({deep:!0}).render().el);var t=this.compiledTemplate({splunkConfig:n});return this.$el.append(t),this},remove:function(){return this.unbindDataSources(),i.prototype.remove.apply(this,arguments)},bindDataSources:function(){this.unbindDataSources(),this.primaryDataSource=this.children.display.getPrimaryDataSource(),this.primaryDataSource&&(this.primaryDataSource.updateFetchParams({oid:this.model.application.get("oid")}),this.primaryDataSource.connectToSearchJob(this.model.job))},unbindDataSources:function(){this.primaryDataSource&&(this.primaryDataSource.disconnect(),this.stopListening(this.primaryDataSource),this.primaryDataSource=null)},template:'                <% if (splunkConfig.EMBED_FOOTER) { %>                    <footer>                        <div>                        <% if (splunkConfig.EMBED_FOOTER.toLowerCase() === "splunk>") { %>                            <span class="icon-splunk"></span><span class="icon-greater"></span>                        <% } else { %>                            <%- splunkConfig.EMBED_FOOTER %>                        <% } %>                        </div>                    </footer>                <% } %>            '})}.apply(t,s))||(e.exports=o)}});