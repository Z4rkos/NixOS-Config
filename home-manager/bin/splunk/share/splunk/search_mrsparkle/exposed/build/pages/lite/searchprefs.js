!function(e){function t(t){for(var a,c,u=t[0],o=t[1],i=t[2],d=0,h=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&h.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(l&&l(t);h.length;)h.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,u=1;u<r.length;u++){var o=r[u];0!==n[o]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={69:0},s=[];function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=function(e){return c.p+""+({}[e]||e)+".js"}(e);var o=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(i);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",o.name="ChunkLoadError",o.type=a,o.request=s,r[1](o)}n[e]=void 0}};var i=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=o;s.push([2507,0]),r()}({2507:function(e,t,r){var a,n;r.p=function(){function e(e,t){if(window.$C&&window.$C.hasOwnProperty(e))return window.$C[e];if(void 0!==t)return t;throw new Error("getConfigValue - "+e+" not set, no default provided")}return function(){for(var t,r,a="",n=0,s=arguments.length;n<s;n++)(r=(t=arguments[n].toString()).length)>1&&"/"==t.charAt(r-1)&&(t=t.substring(0,r-1)),"/"!=t.charAt(0)?a+="/"+t:a+=t;if("/"!=a){var c=a.split("/"),u=c[1];if("static"==u||"modules"==u){var o=a.substring(u.length+2,a.length);a="/"+u,window.$C.BUILD_NUMBER&&(a+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(a+="."+window.$C.BUILD_PUSH_NUMBER),"app"==c[2]&&(a+=":"+e("APP_BUILD",0)),a+="/"+o}}var i=e("MRSPARKLE_ROOT_PATH","/"),l=e("LOCALE","en-US"),d="/"+l+a;return""==i||"/"==i?d:i+d}("/static/build/pages/lite")+"/"}(),a=[r("routers/Searchprefs"),r("util/router_utils")],void 0===(n=function(e,t){new e;t.start_backbone_history()}.apply(t,a))||(e.exports=n)},"models/shared/ConcurrencySettings":function(e,t,r){"use strict";r(1),Object.defineProperty(t,"__esModule",{value:!0});var a=u(r("shim/jquery")),n=u(r("models/SplunkDBase")),s=u(r("require/backbone")),c=u(r("util/splunkd_utils"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=n.default.extend({url:c.default.fullpath("search/concurrency-settings"),sync:function(e,t,r){var n={data:{output_mode:"json"},processData:!0};return a.default.extend(!0,n,r),s.default.sync.call(null,e,t,n)},getMaxSearchesPerc:function(){return this.entry.content.has("max_searches_perc")?this.entry.content.get("max_searches_perc"):"unknown"},getAutoSummaryPerc:function(){return this.entry.content.has("auto_summary_perc")?this.entry.content.get("auto_summary_perc"):"unknown"}}),e.exports=t.default},"models/shared/SearchConcurrency":function(e,t,r){"use strict";r(1),Object.defineProperty(t,"__esModule",{value:!0});var a=u(r("shim/jquery")),n=u(r("models/SplunkDBase")),s=u(r("require/backbone")),c=u(r("util/splunkd_utils"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=n.default.extend({url:c.default.fullpath("server/status/limits/search-concurrency"),sync:function(e,t,r){var n={data:{output_mode:"json"},processData:!0};return a.default.extend(!0,n,r),s.default.sync.call(null,e,t,n)},getMaxHistScheduledSearches:function(){return this.entry.content.has("max_hist_scheduled_searches")?this.entry.content.get("max_hist_scheduled_searches"):"unknown"},getMaxAutoSummarySearches:function(){return this.entry.content.has("max_auto_summary_searches")?this.entry.content.get("max_auto_summary_searches"):"unknown"}}),e.exports=t.default},"routers/Searchprefs":function(e,t,r){"use strict";r(1),Object.defineProperty(t,"__esModule",{value:!0});var a=g(r(11)),n=g(r(13)),s=g(r(15)),c=g(r(16)),u=g(r(0)),o=g(r("shim/jquery")),i=g(r("util/react_render")),l=r(7),d=g(r("routers/Base")),h=g(r("views/SearchPrefs")),f=g(r("models/shared/ConcurrencySettings")),m=g(r("models/shared/SearchConcurrency"));function g(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,a.default)(this,t),(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,n.default)(t,[{key:"initialize",value:function(){for(var e,t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];(e=d.default.prototype.initialize).call.apply(e,[this].concat(r)),this.enableAppBar=!1,this.setPageTitle((0,l._)("Search Preferences")),this.fetchConcurrencyInfo()}},{key:"fetchConcurrencyInfo",value:function(){this.model.concurrencySettings=new f.default,this.deferreds.concurrencySettings=this.model.concurrencySettings.fetch(),this.model.searchConcurrency=new m.default,this.deferreds.searchConcurrency=this.model.searchConcurrency.fetch()}},{key:"page",value:function(){for(var e,t=this,r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];(e=d.default.prototype.page).call.apply(e,[this].concat(a)),o.default.when(this.deferreds.pageViewRendered,this.deferreds.userPref,this.deferreds.concurrencySettings,this.deferreds.searchConcurrency).done((function(){(0,o.default)(".preload").replaceWith(t.pageView.el);var e={userPrefs:t.model.userPref,application:t.model.application,concurrencySettings:t.model.concurrencySettings,searchConcurrency:t.model.searchConcurrency};(0,i.default)(u.default.createElement(h.default,e),document.getElementsByClassName("main-section-body")[0])}))}}]),t}(d.default);t.default=p,e.exports=t.default},"views/SearchPrefs":function(e,t,r){"use strict";(function(a){r(1),Object.defineProperty(t,"__esModule",{value:!0});var n=M(r(10)),s=M(r(11)),c=M(r(13)),u=M(r(15)),o=M(r(16)),i=r(7),l=r(0),d=M(l),h=M(r(2)),f=M(r(35)),m=r(28),g=r(34),p=r(26),y=M(r(260)),_=M(r(531)),v=M(r(14)),S=M(r(18)),C=M(r(38)),b=M(r(22)),x=M(r(20)),R=M(r(116)),P=M(r(29)),k=M(r("uri/route"));function M(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e,r){(0,s.default)(this,t);var c=(0,u.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return c.getButtonLabel=function(e){return e?(0,i._)("Saving..."):(0,i._)("Save")},c.validateValue=function(e,t){var r=e;return(null==r||""===r||r<t)&&(r=t),r},c.handleTimeRangeChange=function(e,t){var r=t.earliest,a=t.latest;c.setState({earliest:r,latest:a,timeRangeChanged:!0})},c.handleRelativeConcurrencyScheduledChange=function(e,t){var r=t.value,a=c.validateValue(r,1);c.setState({maxSearchesPerc:a,concurrencyChanged:!0})},c.handleRelativeConcurrencySummarizationChange=function(e,t){var r=t.value,a=c.validateValue(r,0);c.setState({autoSummaryPerc:a,concurrencyChanged:!0})},c.fetchPost=function(e,t,r){return a((0,p.createRESTURL)(e),(0,n.default)({},g.defaultFetchInit,{method:"POST",body:f.default.encode(t)})).then((0,g.handleResponse)(200)).catch((0,g.handleError)(r))},c.fetchGet=function(e,t,r){return a((0,p.createRESTURL)(""+e+f.default.encode(t)),(0,n.default)({},g.defaultFetchInit,{method:"GET"})).then((0,g.handleResponse)(200)).catch((0,g.handleError)(r))},c.saveTimeRange=function(){var e={default_earliest_time:c.state.earliest,default_latest_time:c.state.latest,output_mode:"json"},t=(0,i._)("Unable to save default search time range.");c.fetchPost("data/user-prefs/general",e,t).then((function(){c.setState({isWorkingTimeRange:!1,errorMessageTimeRange:"",timeRangeChanged:!1})})).catch((function(e){c.setState({isWorkingTimeRange:!1,errorMessageTimeRange:(0,m.sprintf)("%s %s",t,e.message),timeRangeChanged:!1})}))},c.fetchEffectiveSearchConcurrency=function(){var e=(0,i._)("Unable to fetch effective search concurrency.");c.fetchGet("server/status/limits/search-concurrency?",{output_mode:"json"},e).then((function(e){c.setState({isWorkingConcurrency:!1,errorMessageConcurrencySettings:"",errorMessageSearchConcurrency:"",concurrencyChanged:!1,maxHistScheduledSearches:e.entry[0].content.max_hist_scheduled_searches,maxAutoSummarySearches:e.entry[0].content.max_auto_summary_searches})})).catch((function(t){c.setState({isWorkingConcurrency:!1,errorMessageConcurrencySettings:"",errorMessageSearchConcurrency:(0,m.sprintf)("%s %s",e,t.message),concurrencyChanged:!1})}))},c.saveRelativeConcurrency=function(){var e={max_searches_perc:c.state.maxSearchesPerc,auto_summary_perc:c.state.autoSummaryPerc,output_mode:"json"},t=(0,i._)("Unable to save search concurrency changes.");c.fetchPost("search/concurrency-settings/scheduler",e,t).then((function(){c.fetchEffectiveSearchConcurrency()})).catch((function(e){c.setState({isWorkingConcurrency:!1,errorMessageConcurrencySettings:(0,m.sprintf)("%s %s",t,e.message),errorMessageSearchConcurrency:"",concurrencyChanged:!1})}))},c.handleSave=function(){c.setState({isWorkingTimeRange:c.state.timeRangeChanged,isWorkingConcurrency:c.state.concurrencyChanged}),c.state.timeRangeChanged&&c.saveTimeRange(),c.state.concurrencyChanged&&c.saveRelativeConcurrency()},c.state={earliest:e.userPrefs.entry.content.attributes.default_earliest_time,latest:e.userPrefs.entry.content.attributes.default_latest_time,parseEarliest:void 0,parseLatest:void 0,timeRangeChanged:!1,isWorkingTimeRange:!1,errorMessageTimeRange:c.getErrorMessageTimeRange(),maxSearchesPerc:e.concurrencySettings.getMaxSearchesPerc(),autoSummaryPerc:e.concurrencySettings.getAutoSummaryPerc(),concurrencyChanged:!1,isWorkingConcurrency:!1,errorMessageConcurrencySettings:c.getErrorMessageConcurrencySettings(),maxHistScheduledSearches:e.searchConcurrency.getMaxHistScheduledSearches(),maxAutoSummarySearches:e.searchConcurrency.getMaxAutoSummarySearches(),errorMessageSearchConcurrency:c.getErrorMessageSearchConcurrency()},c}return(0,o.default)(t,e),(0,c.default)(t,[{key:"getErrorMessageTimeRange",value:function(){return this.props.userPrefs.entry.content.attributes.default_earliest_time&&this.props.userPrefs.entry.content.attributes.default_latest_time?"":(0,i._)("Trouble fetching default search time range.")}},{key:"getErrorMessageConcurrencySettings",value:function(){return"unknown"===this.props.concurrencySettings.getMaxSearchesPerc()||"unknown"===this.props.concurrencySettings.getAutoSummaryPerc()?(0,i._)("Trouble fetching relative search concurrency limits."):""}},{key:"getErrorMessageSearchConcurrency",value:function(){return"unknown"===this.props.searchConcurrency.getMaxHistScheduledSearches()||"unknown"===this.props.searchConcurrency.getMaxAutoSummarySearches()?(0,i._)("Trouble fetching effective search concurrency values."):""}},{key:"makeDocLink",value:function(e){return k.default.docHelp(this.props.application.get("root"),this.props.application.get("locale"),e)}},{key:"render",value:function(){var e=k.default.manager(this.props.application.get("root"),this.props.application.get("locale"),"system","systemsettings"),t=d.default.createElement("span",null,(0,i._)("This time range is used as the default time range for searches. "),d.default.createElement(b.default,{to:this.makeDocLink("learnmore.search.time_range_picker.global.default"),openInNewContext:!0},(0,i._)("Learn More"))),r=d.default.createElement("span",null,(0,i._)("The maximum number of searches the scheduler can run, as a percentage of the\n                    maximum number of concurrent searches. Default value is 50%. "),d.default.createElement(b.default,{to:this.makeDocLink("learnmore.relative.concurrency.scheduled.searches"),openInNewContext:!0},(0,i._)("Learn More"))),a=d.default.createElement("span",null,(0,i._)("The maximum number of concurrent searches to be allocated for auto summarization,\n                    as a percentage of the concurrent searches that the scheduler can run.\n                    Auto summary searches include: searches which generate the data for the Report \n                    Acceleration feature or for Data Model acceleration. Note: user scheduled searches\n                    take precedence over auto summary searches. Default value is 50%. "),d.default.createElement(b.default,{to:this.makeDocLink("learnmore.relative.concurrency.summarization.searches"),openInNewContext:!0},(0,i._)("Learn More")));return d.default.createElement("div",{"data-test-name":"searchprefs",style:{paddingLeft:"20px",paddingRight:"20px"}},d.default.createElement(C.default,{level:1,"data-test-name":"searchprefs-heading"},(0,i._)("Search preferences")),d.default.createElement(P.default,{"data-test-name":"breadcrumb"},d.default.createElement(b.default,{to:e,"data-test-name":"breadcrumb-link"},(0,i._)("Server settings")),(0,i._)(" » Search preferences")),d.default.createElement("div",{"data-test-name":"searchprefs-content",style:{background:"white",width:"960px",margin:"20px auto",padding:"20px"}},this.state.errorMessageTimeRange&&d.default.createElement(x.default,{type:"error","data-test-name":"time-range-error"},this.state.errorMessageTimeRange),this.state.errorMessageConcurrencySettings&&d.default.createElement(x.default,{type:"error","data-test-name":"concurrency-settings-error"},this.state.errorMessageConcurrencySettings),this.state.errorMessageSearchConcurrency&&d.default.createElement(x.default,{type:"error","data-test-name":"search-concurrency-error"},this.state.errorMessageSearchConcurrency),d.default.createElement(S.default,{label:(0,i._)("Default search time range"),labelPosition:"top",help:t,controlsLayout:"none","data-test-name":"searchprefs-time-range-picker"},d.default.createElement(_.default,null,d.default.createElement(y.default,{onChange:this.handleTimeRangeChange,earliest:this.state.earliest,latest:this.state.latest,labelMaxChars:1/0,documentationURL:this.makeDocLink("learnmore.search.time_range_picker.global.default")}))),d.default.createElement("hr",null),d.default.createElement(S.default,{label:(0,i._)("Relative concurrency limit for scheduled searches"),labelPosition:"top",help:r,controlsLayout:"none","data-test-name":"relative-concurrency-scheduled-searches"},d.default.createElement(R.default,{value:this.state.maxSearchesPerc,max:100,min:1,roundTo:0,step:1,onChange:this.handleRelativeConcurrencyScheduledChange,inline:!0})),d.default.createElement(P.default,{"data-test-name":"effective-scheduled-searches"},(0,m.sprintf)((0,i._)("This results in an effective concurrency limit for scheduled searches of %s."),this.state.maxHistScheduledSearches)),d.default.createElement(S.default,{label:(0,i._)("Relative concurrency limit for summarization searches"),labelPosition:"top",help:a,controlsLayout:"none","data-test-name":"relative-concurrency-summarization-searches"},d.default.createElement(R.default,{value:this.state.autoSummaryPerc,max:100,min:0,roundTo:0,step:1,onChange:this.handleRelativeConcurrencySummarizationChange,inline:!0})),d.default.createElement(P.default,{"data-test-name":"effective-summary-searches"},(0,m.sprintf)((0,i._)("This results in an effective concurrency limit for summarization searches of %s."),this.state.maxAutoSummarySearches)),d.default.createElement("hr",null)," ",d.default.createElement(P.default,{"data-test-name":"searchprefs-non-warning",style:{textAlign:"left"}},(0,i._)("Saving changes to the default time range or concurrency\n                            limits does not trigger a restart.")),d.default.createElement("div",{"data-test-name":"searchprefs-buttons",style:{textAlign:"right"}},d.default.createElement(v.default,{appearance:"primary","data-test-name":"save-btn",disabled:this.state.isWorkingTimeRange||this.state.isWorkingConcurrency,label:this.getButtonLabel(this.state.isWorkingTimeRange||this.state.isWorkingConcurrency),onClick:this.handleSave}))))}}]),t}(l.Component);E.propTypes={userPrefs:h.default.shape({entry:h.default.shape({content:h.default.shape({attributes:h.default.shape({default_earliest_time:h.default.string.isRequired,default_latest_time:h.default.string.isRequired})})})}).isRequired,application:h.default.shape({get:h.default.func.isRequired}).isRequired,concurrencySettings:h.default.shape({getMaxSearchesPerc:h.default.func.isRequired,getAutoSummaryPerc:h.default.func.isRequired}).isRequired,searchConcurrency:h.default.shape({getMaxHistScheduledSearches:h.default.func.isRequired,getMaxAutoSummarySearches:h.default.func.isRequired}).isRequired},E.defaultProps={},t.default=E,e.exports=t.default}).call(this,r(31))}});