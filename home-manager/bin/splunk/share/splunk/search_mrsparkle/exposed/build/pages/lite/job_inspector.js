!function(e){function t(t){for(var r,n,a=t[0],c=t[1],l=t[2],p=0,h=[];p<a.length;p++)n=a[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);h.length;)h.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,a=1;a<o.length;a++){var c=o[a];0!==i[c]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},i={51:0},s=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(e){var t=[],o=i[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=i[e]=[t,r]}));t.push(o[2]=r);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=function(e){return n.p+""+({}[e]||e)+".js"}(e);var c=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(l);var o=i[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,o[1](c)}i[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;s.push([2456,0]),o()}({2456:function(e,t,o){var r,i;o.p=function(){function e(e,t){if(window.$C&&window.$C.hasOwnProperty(e))return window.$C[e];if(void 0!==t)return t;throw new Error("getConfigValue - "+e+" not set, no default provided")}return function(){for(var t,o,r="",i=0,s=arguments.length;i<s;i++)(o=(t=arguments[i].toString()).length)>1&&"/"==t.charAt(o-1)&&(t=t.substring(0,o-1)),"/"!=t.charAt(0)?r+="/"+t:r+=t;if("/"!=r){var n=r.split("/"),a=n[1];if("static"==a||"modules"==a){var c=r.substring(a.length+2,r.length);r="/"+a,window.$C.BUILD_NUMBER&&(r+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(r+="."+window.$C.BUILD_PUSH_NUMBER),"app"==n[2]&&(r+=":"+e("APP_BUILD",0)),r+="/"+c}}var l=e("MRSPARKLE_ROOT_PATH","/"),d=e("LOCALE","en-US"),p="/"+d+r;return""==l||"/"==l?p:l+p}("/static/build/pages/lite")+"/"}(),r=[o("routers/JobInspector"),o("util/router_utils")],void 0===(i=function(e,t){new e;t.start_backbone_history()}.apply(t,r))||(e.exports=i)},2457:function(e,t,o){(e.exports=o(3)(!1)).push([e.i,".job-inspector .alerts.shared-flashmessages{padding:20px 0 0 20px}.job-inspector .header{background-color:#171d21;border-bottom:1px solid #e1e6eb;padding:5px 14px;font-size:12px}.job-inspector .header h1{margin:5px 0;color:#fff;font-size:18px;font-weight:400}.job-inspector .emphatic{font-weight:700}.job-inspector h2{font-size:12px;font-weight:700;color:#3c444d}.job-inspector{font-size:12px;background-color:#fff;font-family:Splunk Platform Sans,Proxima Nova,Roboto,Droid,Helvetica Neue,Helvetica,Arial,sans-serif}.job-inspector .accordion-heading{font-size:12px;font-weight:700}.job-inspector .job-overview{padding:10px 10px 20px 14px;background-color:#f2f4f5}.job-inspector .job-overview>p>*{margin:4px}.job-inspector .job-overview>p a.dfs-log,.job-inspector .job-overview>p a.job-details-dashboard,.job-inspector .job-overview>p a.search-log{text-decoration:underline}.job-inspector .job-overview .summary pre{white-space:normal}.job-inspector .job-overview .summary pre .highlighted{background-color:#f8be34;padding:2px}.job-inspector .job-overview .summary .messages li{list-style-type:none;margin-left:10px}.job-inspector .job-overview .summary .messages li .text{font-weight:700}.job-inspector .job-execution-cost{border-top:1px solid #c3cbd4;padding:0 14px;font-size:10px}.job-inspector .job-execution-cost table th{padding:4px 10px;text-align:left;background-color:#e1e6eb}.job-inspector .job-execution-cost table tr.sub img.durationBar{opacity:.25}.job-inspector .job-execution-cost table td{padding:4px 10px;border-bottom:1px dotted #c3cbd4;vertical-align:top}.job-inspector .job-execution-cost table td.numeric{text-align:right}.job-inspector .job-execution-cost table td img{height:1px}.job-inspector .job-execution-cost table td img.durationBar{height:12px;background-color:#000;opacity:.5}.job-inspector .job-properties{padding:0 14px;font-size:10px}.job-inspector .job-properties table{margin-bottom:15px;border-collapse:collapse;width:100%}.job-inspector .job-properties table tr.additional-links a{padding-right:10px;padding-bottom:10px;text-decoration:underline;display:block}.job-inspector .job-properties table tr.additional-links a.dfs-log,.job-inspector .job-properties table tr.additional-links a.peer-link,.job-inspector .job-properties table tr.additional-links a.search-log{display:inline}.job-inspector .job-properties table tr.additional-links td.job-prop-value{white-space:normal;font-size:12px}.job-inspector .job-properties table td{white-space:pre-line;padding:4px 10px;border-bottom:1px dotted #c3cbd4;vertical-align:top}.job-inspector .job-properties table td.job-prop-name{font-weight:700;white-space:nowrap;font-size:10px;background-color:#f2f4f5}.job-inspector .job-properties table td.job-prop-value{font-weight:400;font-family:Splunk Platform Mono,Inconsolata,Consolas,Droid Sans Mono,Monaco,Courier New,Courier,monospace}.job-inspector .footer{padding:10px}.accordion-group{padding-top:14px}.accordion-group .accordion-toggle{padding-left:15px;background:none;border:0}.accordion-group .accordion-toggle .icon-accordion-toggle{left:0}.accordion-group .accordion-body{padding:14px 0 0 14px}",""])},"routers/JobInspector":function(e,t,o){var r,i;r=[o("shim/jquery"),o("require/underscore"),o("routers/Base"),o("models/classicurl"),o("models/search/Job"),o("models/services/saved/Search"),o("views/job_inspector/Master"),o("util/splunkd_utils")],void 0===(i=function(e,t,o,r,i,s,n,a){return o.extend({initialize:function(){o.prototype.initialize.apply(this,arguments),this.enableSplunkBar=!1,this.enableAppBar=!1,this.showAppsList=!1,this.fetchManagers=!1,this.fetchAppLocal=!1,this.model.searchJob=new i,this.model.savedSearch=new s,this.deferreds.searchJobDeferred=e.Deferred(),this.deferreds.savedSearchJobDeferred=e.Deferred()},page:function(i,s,c){o.prototype.page.apply(this,arguments),r.fetch({success:function(){if(r.get("sid"))this.model.searchJob.set(this.model.searchJob.idAttribute,r.get("sid")),this.model.searchJob.fetch({data:{message_level:"debug"},success:function(e,t){var o=this.model.searchJob.getSavedSearchId();o?(this.model.savedSearch.set(this.model.savedSearch.idAttribute,o),this.model.savedSearch.fetch({success:function(){this.deferreds.savedSearchJobDeferred.resolve()}.bind(this),error:function(){this.model.savedSearch.unset(this.model.savedSearch.idAttribute),this.deferreds.savedSearchJobDeferred.resolve()}.bind(this)})):this.deferreds.savedSearchJobDeferred.resolve(),this.deferreds.searchJobDeferred.resolve()}.bind(this),error:function(e,t){this.model.searchJob.unset(this.model.searchJob.idAttribute),this.deferreds.searchJobDeferred.resolve(),this.deferreds.savedSearchJobDeferred.resolve()}.bind(this)});else{var e=a.createSplunkDMessage(a.FATAL,t("No sid was specified.").t());this.model.searchJob.trigger("error",this.model.searchJob,e),this.deferreds.searchJobDeferred.resolve(),this.deferreds.savedSearchJobDeferred.resolve()}}.bind(this)}),e.when(this.deferreds.pageViewRendered,this.deferreds.searchJobDeferred,this.deferreds.savedSearchJobDeferred).then(function(){this.jobInspector=new n({model:{searchJob:this.model.searchJob,savedSearch:this.model.savedSearch,application:this.model.application,serverInfo:this.model.serverInfo}}),this.setPageTitle(t("Search job inspector").t()),this.pageView.$(".main-section-body").html(this.jobInspector.render().el),e(".preload").replaceWith(this.pageView.el)}.bind(this))}})}.apply(t,r))||(e.exports=i)},"views/job_inspector/Footer":function(e,t,o){var r,i;r=[o("shim/jquery"),o("require/underscore"),e,o("views/Base"),o("shim/splunk.util"),o("stubs/i18n")],void 0===(i=function(e,t,o,r,i,s){return r.extend({moduleId:o.i,className:"footer",initialize:function(){r.prototype.initialize.apply(this,arguments)},render:function(){return this.$el.html(this.compiledTemplate({application:this.model.application,serverInfo:this.model.serverInfo,splunkUtil:i,i18n:s})),this},template:'                <p>                    <span class="emphatic"><%- _("Server info: ").t() %></span>                     <%- splunkUtil.sprintf(_("Splunk %(version)s, %(host)s, %(dateTime)s ").t(), {                            version: serverInfo.getVersion(),                            host: window.location.host,                            dateTime: i18n.format_datetime(new Date(),"eee MMM dd", "HH:mm:ss yyyy")                    }) %>                    <span class="emphatic"><%- _("User: ").t() %></span><%- application.get("owner")%>                </p>            '})}.apply(t,r))||(e.exports=i)},"views/job_inspector/JobExecutionCost":function(e,t,o){var r,i;r=[o("shim/jquery"),o("require/underscore"),e,o("views/Base"),o("views/shared/delegates/Accordion"),o("util/string_utils"),o("stubs/i18n")],void 0===(i=function(e,t,o,r,i,s,n){return r.extend({moduleId:o.i,className:"job-execution-cost accordion",initialize:function(){r.prototype.initialize.apply(this,arguments)},constructPerformaceData:function(){var e,o=0,r=!1,i=0,n=0,a=[],c=[],l=[];return t.each(this.model.searchJob.entry.content.performance.attributes,(function(t,r){for(e={component:r,invocationCount:t.invocations?parseInt(t.invocations,10):0,inputCount:t.input_count?parseInt(t.input_count,10):0,outputCount:t.output_count?parseInt(t.output_count,10):0,duration:t.duration_secs?parseFloat(t.duration_secs):0,displayLevel:0},o=Math.max(o,e.duration),e.displayDuration=e.duration;c.length>0&&!s.strStartsWith(r,c[c.length-1]+".");)c.pop();e.displayLevel=c.length,c.push(r),l.push(e)})),t.each(l,(function(e,t){e.displayDuration=o?e.displayDuration/o:0,e.displayLevel!==i&&(r?a.push([n,t]):n=t,i=e.displayLevel,r=!r)})),t.each(a,(function(e){var t=l.slice(e[0],e[1]);t.sort((function(e,t){return e.duration>t.duration?-1:e.duration<t.duration?1:0}));for(var o=e[0],r=0;o<e[1];o++,r++)l[o]=t[r]})),l},render:function(){return this.$el.html(this.compiledTemplate({performance:this.constructPerformaceData(),i18n:n})),this.accordion=new i({el:this.el,collapsible:!0}),this},template:'                <div class="accordion-group">                    <div class="accordion-heading">                        <a class="accordion-toggle" href="#">                            <i class="icon-accordion-toggle"></i>                            <%- _("Execution costs").t() %>                        </a>                    </div>                    <div class="accordion-body">                        <table class="job-execution-costs-table">                            <thead>                                <tr>                                    <th tabindex="0" colspan="2"><%- _("Duration (seconds)").t() %></th>                                    <th tabindex="0"><%- _("Component").t() %></th>                                    <th tabindex="0"><%- _("Invocations").t() %></th>                                    <th tabindex="0"><%- _("Input count").t() %></th>                                    <th tabindex="0"><%- _("Output count").t() %></th>                                </tr>                            </thead>                            <tbody>                                <% _.each(performance, function(component) { %>                                    <tr class="<%- component.displayLevel ?  "sub" : ""  %>">                                        <td>                                            <img src="/static/img/skins/default/a.gif" alt="<%- _("Duration bar image").t() %>" width=<%- component.displayLevel * 15 %>px />                                             <img src="/static/img/skins/default/a.gif" alt="<%- _("Duration bar image").t() %>" class="durationBar"                                                 width=<%- Math.max(1, parseInt(component.displayDuration * 150)) %>px />                                         </td>                                        <td class="numeric" tabindex="0"><%- i18n.format_number(component.duration, "#,###,###.00") %></td>                                        <td>                                            <img src="/static/img/skins/default/a.gif" alt="<%- _("Duration bar image").t() %>" width=<%- component.displayLevel * 15 %>px />                                             <span tabindex="0"><%-component.component %></span>                                        </td>                                        <td class="numeric" tabindex="0">                                            <% if(component.invocationCount) { %>                                                <%- i18n.format_number(component.invocationCount) %>                                            <% } else { %>                                                -                                             <% } %>                                        </td>                                        <td class="numeric" tabindex="0">                                            <% if(component.inputCount) { %>                                                <%- i18n.format_number(component.inputCount) %>                                            <% } else { %>                                                -                                             <% } %>                                        </td>                                        <td class="numeric" tabindex="0">                                            <% if(component.outputCount) { %>                                                <%- i18n.format_number(component.outputCount) %>                                            <% } else { %>                                                -                                             <% } %>                                        </td>                                    </tr>                                <% }) %>                            </tbody>                        </table>                    </div>                </div>            '})}.apply(t,r))||(e.exports=i)},"views/job_inspector/JobOverview":function(e,t,o){var r,i;r=[o("shim/jquery"),o("require/underscore"),e,o("views/Base"),o("uri/route"),o("util/time"),o("shim/splunk.util"),o("stubs/i18n")],void 0===(i=function(e,t,o,r,i,s,n,a){return r.extend({moduleId:o.i,className:"job-overview",initialize:function(){r.prototype.initialize.apply(this,arguments)},getFormattedTimeFromIso:function(e){var t=s.isoToDateObject(e);return a.format_datetime_microseconds(s.jsDateToSplunkDateTimeWithMicroseconds(t))},render:function(){var e=t.isUndefined(this.model.searchJob.entry.content.get("earliestTime"))?t("(earliest indexed event)").t():this.getFormattedTimeFromIso(this.model.searchJob.entry.content.get("earliestTime")),o=t.isUndefined(this.model.searchJob.entry.content.get("latestTime"))?t("(latest indexed event)").t():this.getFormattedTimeFromIso(this.model.searchJob.entry.content.get("latestTime"));return this.$el.html(this.compiledTemplate({splunkUtil:n,i18n:a,route:i,searchJob:this.model.searchJob,application:this.model.application,earliestTime:e,latestTime:o,docLink:i.docHelp(this.model.application.get("root"),this.model.application.get("locale"),"inspector.noresults")})),this},template:'                <div class="summary">                    <% if (searchJob.entry.content.get("isZombie")) { %>                        <p><%- _("This search has encountered a fatal error and has been marked as zombied.").t() %></p>                    <% } else if (searchJob.entry.content.get("isFailed")) { %>                        <p>                            <%- _("This search did not successfully execute.  Any results returned from this job                                 are not consistent and should not be used.").t()                             %>                        </p>                        <pre><%- this.model.searchJob.getSearch() %></pre>                    <% } else if (searchJob.entry.content.get("isPaused")) { %>                        <p><%- _("This search is currently paused and must be unpaused before continuing.").t() %></p>                    <% } else if (!searchJob.entry.content.get("isDone")) { %>                        <p>                            <%- splunkUtil.sprintf(_("This search is still running and is approximately %s                                 complete.").t(), i18n.format_percent(searchJob.entry.content.get("doneProgress")))                             %>                        </p>                    <% } else if (searchJob.entry.content.get("isDone")) { %>                        <% if (searchJob.entry.content.get("resultCount") == 0) { %>                            <% if (searchJob.entry.content.get("eventCount") == 0) { %>                                <p>                                    <%- splunkUtil.sprintf(_("This search has completed in %s seconds, but did not match any events. The terms                                         specified in the highlighted portion of the search:").t(), i18n.format_number(searchJob.entry.content.get("runDuration")))                                     %>                                </p>                                <pre>                                    <span class="highlighted"><%- searchJob.entry.content.get("eventSearch") || _("None").t() %></span>                                    <% if (searchJob.entry.content.get("reportSearch")) { %>                                        <span>| <%- searchJob.entry.content.get("reportSearch") %></span>                                    <% } %>                                </pre>                                <p>                                    <%- _("over the time range:").t() %>                                </p>                                <pre>                                    <%- earliestTime %> - <%- latestTime %>                                </pre>                                <p>                                    <%- _("did not return any data. Possible solutions are to:").t() %>                                </p>                                <ul>                                    <li><%- _("relax the primary search criteria").t() %></li>                                    <li><%- _("widen the time range of the search").t() %></li>                                    <li>                                        <%- _("check that the default search indexes for your account include the desired indexes").t() %>                                    </li>                                </ul>                            <% } else if (searchJob.entry.content.get("reportSearch") != "None" &&                                         searchJob.entry.content.get("reportSearch").length > 0 ) { %>                                <%= splunkUtil.sprintf(_("This search has completed and found <span class=\'emphatic\'>%(eventCount)s </span>                                      matching %(entityName)s in %(runDuration)s seconds. However, the transforming commands in the                                       highlighted portion of the following search:").t(),                                       {eventCount: i18n.format_number(searchJob.entry.content.get("eventCount")),                                        entityName: i18n.ungettext("event", "events", searchJob.entry.content.get("eventCount")),                                        runDuration: i18n.format_number(searchJob.entry.content.get("runDuration"))                                      })                                %>                                <pre>                                    <% if (searchJob.entry.content.get("eventSearch")) { %>                                        <span class="muted">                                            <%- searchJob.entry.content.get("eventSearch") %> |                                        </span>                                    <% } %>                                    <span class="highlighted">                                        <%- searchJob.entry.content.get("reportSearch") %>                                    </span>                                </pre>                                <p>                                    <%- _("over the time range:").t() %>                                </p>                                <pre>                                    <%- earliestTime %> - <%- latestTime %>                                </pre>                                <p>                                    <%- _("generated no results.  Possible solutions are to:").t() %>                                </p>                                <ul>                                    <li><%- _("check the syntax of the commands").t() %></li>                                    <li>                                        <%- _("verify that the fields expected by the report commands are present in the events").t() %>                                    </li>                                </ul>                            <% } else { %>                                <p>                                    <%- _("This search has completed, but did not return any results.").t() %>                                </p>                            <% } %>                            <p>                                <%- _("Learn more about troubleshooting empty search results at").t() %>                                <a target="_blank" rel="noopener noreferrer" href="<%- docLink %>" title="<%- _("Splunk help").t() %>">                                    <%- _("Splunk Documentation").t() %>                                    <i class="icon-external"></i>                                </a>                            </p>                        <% } else { %>                            <p>                                <%= splunkUtil.sprintf(_("This search has completed and has returned <span class=\'emphatic\'>%(resultCount)s</span> %(resultEntity)s                                  by scanning <span class=\'emphatic\'>%(scanCount)s</span> %(eventEntity)s in <span class=\'emphatic\'>%(runDuration)s </span> seconds").t(), {                                    resultCount: i18n.format_number(searchJob.entry.content.get("resultCount")),                                    resultEntity: i18n.ungettext("result", "results", searchJob.entry.content.get("resultEntity")),                                    scanCount: i18n.format_number(searchJob.entry.content.get("scanCount")),                                    eventEntity: i18n.ungettext("event", "events", searchJob.entry.content.get("eventEntity")),                                    runDuration: i18n.format_number(searchJob.entry.content.get("runDuration"))                                })                                %>                            </p>                            <% if (searchJob.entry.content.get("isSavedSearch")) { %>                                <p>                                    <%- _("This search is an instance of the saved search:").t() %>                                    <span class="emphatic"><%- searchJob.entry.content.get("label") %></span>                                </p>                            <% } %>                        <% } %>                        <% if (searchJob.entry.content.get("messages").length > 0) { %>                            <div class="messages">                                <p><%- _("The following messages were returned by the search subsystem:").t() %></p>                                <ul>                                    <% _.each(searchJob.getMessages(),function(message) { %>                                        <li>                                            <%- message.type %> :                                             <span class="text"> <%= splunkUtil.getWikiTransform(message.text) %> </span>                                            <% if (message.help) { %>                                                <a href="<%- route.docHelp(application.get("root"), application.get("locale"), message.help) %>"                                                    target="_blank" rel="noopener noreferrer">                                                    <%- _("Learn More").t() %>                                                    <i class="icon-external"></i>                                                </a>                                            <% } %>                                        </li>                                    <% }) %>                                 </ul>                            </div>                        <% } %>                    <% } %>                </div>                <p>                    (<%- _("SID:").t() %>                     <%- searchJob.id %>)                    <% _.each(searchJob.getAvailableSearchLogs(), function(link) { %>                        <a class="search-log" href="<%- route.searchJobUrls(application.get("root"),                                                         application.get("locale"),                                                         searchJob.id,                                                         link) %>"><%- link %></a>                    <% }) %>                    <a class="job-details-dashboard" href="<%- route.dashboardFromID(application.get("root"),                                                                         application.get("locale"),                                                                         "/search////job_details_dashboard",                                                                         {data: {"form.sid":searchJob.id}}) %>">                        <%- "Job Details Dashboard" %>                    </a>                </p>            '})}.apply(t,r))||(e.exports=i)},"views/job_inspector/Master":function(e,t,o){var r,i;r=[o("shim/jquery"),o("require/underscore"),e,o("views/Base"),o("views/shared/FlashMessages"),o("views/job_inspector/JobOverview"),o("views/job_inspector/JobExecutionCost"),o("views/job_inspector/job_properties/Master"),o("views/job_inspector/Footer"),o("views/job_inspector/Master.pcss")],void 0===(i=function(e,t,o,r,i,s,n,a,c,l){return r.extend({moduleId:o.i,className:"job-inspector",initialize:function(){r.prototype.initialize.apply(this,arguments),this.model.searchJob.isNew()?(this.children.flashMessage=new i({model:this.model.searchJob}),this.children.footerView=new c({model:{application:this.model.application,serverInfo:this.model.serverInfo}})):(this.children.jobOverviewView=new s({model:{searchJob:this.model.searchJob,application:this.model.application}}),this.children.jobExecutionCost=new n({model:{searchJob:this.model.searchJob}}),this.children.searchJobPropertiesView=new a({model:{searchJob:this.model.searchJob,savedSearch:this.model.savedSearch,application:this.model.application}}),this.children.footerView=new c({model:{application:this.model.application,serverInfo:this.model.serverInfo}}))},render:function(){return this.$el.html(this.compiledTemplate({})),this.model.searchJob.isNew()?(this.children.flashMessage.render().appendTo(this.$el),this.children.footerView.render().appendTo(this.$el)):(this.children.jobOverviewView.render().appendTo(this.$el),this.children.jobExecutionCost.render().appendTo(this.$el),this.children.searchJobPropertiesView.render().appendTo(this.$el),this.children.footerView.render().appendTo(this.$el)),this},template:'                <div class="header">                    <h1><%- _("Search job inspector").t() %></h1>                </div>            '})}.apply(t,r))||(e.exports=i)},"views/job_inspector/Master.pcss":function(e,t,o){var r=o(2457);"string"==typeof r&&(r=[[e.i,r,""]]);var i={sourceMap:!1,hmr:!0,transform:void 0,insertInto:void 0};o(4)(r,i);r.locals&&(e.exports=r.locals)},"views/job_inspector/job_properties/Master":function(e,t,o){var r,i;r=[o("shim/jquery"),o("require/underscore"),e,o("views/Base"),o("views/job_inspector/job_properties/Row"),o("views/shared/delegates/Accordion"),o("uri/route"),o("stubs/i18n"),o(669)],void 0===(i=function(e,t,o,r,i,s,n,a,c){return r.extend({moduleId:o.i,className:"job-properties accordion",initialize:function(){r.prototype.initialize.apply(this,arguments),this.remoteSearchLogs=this.getRemoteLogs("remoteSearchLogs"),this.remoteDFSLogs=this.getRemoteLogs("remoteDFSLogs"),this.peerNameList=this.getRemotePeers(this.remoteSearchLogs),this.dfsPeerNameList=this.getRemotePeers(this.remoteDFSLogs)},getRemoteLogs:function(e){var o=[];return this.model.searchJob.entry.content.get(e)&&this.model.searchJob.entry.content.get(e).length>0&&t.isString(this.model.searchJob.entry.content.get(e)[0])&&(o=this.model.searchJob.entry.content.get(e)[0].split("\n")),o},getRemotePeers:function(e){var o=[];if(e.length>0){var r=new c;t.each(e,(function(e){var t=e.split("-").slice(1).join("-");r.add(t)})),o=Array.from(r)}return o},generateSortedJobProperties:function(e,o){var r=[],i=t.extend({},e.entry.content.attributes,{"eai:acl":e.entry.acl},o);return i.hasOwnProperty("messages")&&delete i.messages,t.isEmpty(i.custom)&&delete i.custom,t.each(i,(function(e,t){r.push({key:t,value:e})})),r=t.sortBy(r,"key")},searchLogUrl:function(e,t){return n.searchJobUrls(this.model.application.get("root"),this.model.application.get("locale"),this.model.searchJob.id,e,t)},render:function(){var e,t=!this.model.savedSearch.isNew();if(this.$el.html(this.compiledTemplate({i18n:a,hasSavedSearch:t,searchJob:this.model.searchJob,timelineLink:n.searchJobTimeline(this.model.application.get("root"),this.model.application.get("locale"),this.model.searchJob.id,{data:{outputMode:"xml"}}),summaryLink:n.searchJobSummary(this.model.application.get("root"),this.model.application.get("locale"),this.model.searchJob.id,{data:{outputMode:"xml"}}),searchLogLink:this.searchLogUrl.bind(this),remoteSearchLogs:this.remoteSearchLogs?this.remoteSearchLogs:[],remoteDFSLogs:this.remoteDFSLogs?this.remoteDFSLogs:[]})),t){var o={"eai:attributes":this.model.savedSearch.entry.fields},r=this.$(".saved-search-properties > .accordion-body > table > tbody");this.renderPropertyRows(this.generateSortedJobProperties(this.model.savedSearch,o),r)}e={createTime:this.model.searchJob.entry.attributes.published,custom:this.model.searchJob.entry.content.custom.attributes,modifiedTime:this.model.searchJob.entry.attributes.updated,request:this.model.searchJob.entry.content.request.attributes,runtime:this.model.searchJob.entry.content.runtime.attributes,search:this.model.searchJob.getSearch()},this.peerNameList&&this.peerNameList.length>0&&(e.peerNameList=this.peerNameList),this.dfsPeerNameList&&this.dfsPeerNameList.length>0&&(e.dfsPeerNameList=this.dfsPeerNameList);var i=this.$(".search-job-properties > .accordion-body > table > tbody");return this.renderPropertyRows(this.generateSortedJobProperties(this.model.searchJob,e),i),this.accordion=new s({el:this.el,collapsible:!0,defaultGroup:""}),this},renderPropertyRows:function(e,o){var r=document.createDocumentFragment();t.each(e,function(e,t){var o="row"+t;this.children[o]=new i({prop:e}),this.children[o].render().appendTo(r)}.bind(this)),o.prepend(r)},template:'                <% if(hasSavedSearch) { %>                    <div class="saved-search-properties accordion-group">                        <div class="accordion-heading">                            <a class="accordion-toggle" href="#">                                <i class="icon-accordion-toggle"></i>                                <%- _("Saved search properties").t() %>                            </a>                        </div>                        <div class="accordion-body">                            <table>                                <tbody></tbody>                            </table>                        </div>                    </div>                <% } %>                <div class="search-job-properties accordion-group">                    <div class="accordion-heading">                        <a class="accordion-toggle" href="#">                            <i class="icon-accordion-toggle"></i>                            <%- _("Search job properties").t() %>                        </a>                    </div>                    <div class="accordion-body">                        <table>                            <tbody>                                <tr class="additional-links">                                    <td class="job-prop-name" tabindex="0"><%- _("Additional info").t() %></td>                                    <td class="job-prop-value">                                        <% if(searchJob.isTimelineAvailable()) { %>                                            <a href="<%- timelineLink %>"><%- _("timeline").t() %></a>                                        <% } %>                                        <% if(searchJob.isSummaryAvailable()) { %>                                            <a href="<%- summaryLink %>"><%- _("field summary").t() %></a>                                        <% } %>                                        <% _.each(searchJob.getAvailableSearchLogs(), function(link) { %>                                            <div>                                            <% if(link.indexOf("search.log") !== -1) { %>                                                <a class="search-log" href="<%- searchLogLink(link) %>">                                                    <%- link %>                                                </a>                                                <% if(remoteSearchLogs.length > 0) { %>                                                    <span>(</span>                                                        <% _.each(remoteSearchLogs, function(peerName) { %>                                                            <a class="peer-link" href="<%- searchLogLink(link, {data: {peer: peerName, outputMode:"raw"}}) %>">                                                                <%- peerName %>                                                            </a>                                                        <% }) %>                                                    <span>)</span>                                                <% } %>                                            <% } %>                                            <% if(link.indexOf("dfs.log") !== -1) { %>                                                <a class="dfs-log" href="<%- searchLogLink(link, {data: {outputMode:"raw"}}) %>">                                                    <%- link %>                                                </a>                                                <% if(remoteDFSLogs.length > 0) { %>                                                    <span>(</span>                                                        <% _.each(remoteDFSLogs, function(peerName) { %>                                                            <a class="peer-link" href="<%- searchLogLink(link, {data: {peer: peerName, outputMode:"raw"}}) %>">                                                                <%- peerName %>                                                            </a>                                                        <% }) %>                                                    <span>)</span>                                                <% } %>                                            <% } %>                                            </div>                                        <% }) %>                                    </td>                                </tr>                            </tbody>                        </table>                    </div>                </div>            '})}.apply(t,r))||(e.exports=i)},"views/job_inspector/job_properties/Row":function(e,t,o){var r,i;r=[o("shim/jquery"),o("require/underscore"),e,o("views/Base"),o("views/shared/JSONTree")],void 0===(i=function(e,t,o,r,i){return r.extend({moduleId:o.i,tagName:"tr",initialize:function(){r.prototype.initialize.apply(this,arguments),t.isObject(this.options.prop.value)&&(this.children.jsonTree=new i({json:this.options.prop.value}))},render:function(){return this.$el.html(this.compiledTemplate({})),this.children.jsonTree&&this.children.jsonTree.render().appendTo(this.$el.find(".job-prop-value")),this},template:'                <td class="job-prop-name" tabindex="0"><%- this.options.prop.key %></td>                <td class="job-prop-value" tabindex="0">                    <% if (!this.children.jsonTree) { %>                        <%- this.options.prop.value || _("None").t() %>                    <% } %>                </td>            '})}.apply(t,r))||(e.exports=i)}});