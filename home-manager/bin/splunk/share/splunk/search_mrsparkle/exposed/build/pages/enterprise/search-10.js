(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"views/shared/eventsviewerdrilldown/FieldValueDrilldown":function(e,i,t){var n,l;n=[t("require/underscore"),e,t("views/shared/PopTart"),t("shim/splunk.util"),t("stubs/i18n")],void 0===(l=function(e,i,t,n,l){return t.extend({moduleId:i.i,className:"dropdown-menu",initialize:function(i){t.prototype.initialize.call(this,i),e.defaults(this.options,{header:n.sprintf("Field: %s = %s",this.options.field,this.options.value)}),this.model.field&&(this.fieldsModes=this.model.field.get("modes"),this.fieldMode=e.findWhere(this.fieldsModes,{value:this.options.value}),this.fieldMode&&(this.valueCount=this.fieldMode.count||0,this.notValueCount=(this.model.field.get("count")||0)-this.valueCount,this.notValueCount=this.notValueCount<0?0:this.notValueCount))},events:{"click .curr_inc_val":function(e){this.fieldDrilldown(e)},"click .curr_inc_val_secondary":function(e){this.fieldDrilldown(e,{newTab:!0})},"click .curr_exc_val":function(e){this.fieldDrilldown(e,{negate:!0})},"click .curr_exc_val_secondary":function(e){this.fieldDrilldown(e,{negate:!0,newTab:!0})},"click .remove_val":function(e){this.fieldDrilldown(e)},"click .remove_val_secondary":function(e){this.fieldDrilldown(e,{newTab:!0})},"click .only_val":function(e){this.options.action="fieldvalue",this.fieldDrilldown(e,{search:"*"})},"click .only_val_secondary":function(e){this.options.action="fieldvalue",this.fieldDrilldown(e,{search:"*",newTab:!0})}},fieldDrilldown:function(e,i){e.preventDefault();var t=(i=i||{}).search?i.search:this.model.report.entry.content.get("search");this.model.state.trigger("drilldown",{data:{q:t,stripReportsSearch:!1,negate:i.negate,action:this.options.action,field:this.options.field,value:this.options.value,app:this.model.application.get("app"),owner:this.model.application.get("owner"),usespath:this.options.usespath},event:e,idx:this.options.idx,newTab:i.newTab,stateModel:this.model.state}),this.hide()},render:function(){var i=this.compiledTemplate({_:e,fieldMode:this.fieldMode,valueCount:l.format_decimal(this.valueCount),notValueCount:l.format_decimal(this.notValueCount),splunkUtil:n,removable:"removefieldvalue"===this.options.action});return this.$el.html(t.prototype.template_menu),this.$el.append(i),this},template:'                <ul>                    <% if (!removable) { %>                        <li>                            <a class="curr_inc_val primary-link" href="#">                                <%- _("Add to search").t()%>                                <% if (fieldMode) { %>                                    <span class="info"><%- splunkUtil.sprintf(_("%s events").t(), valueCount) %></span>                                <% } %>                            </a>                            <a class="curr_inc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                        <li>                            <a class="curr_exc_val primary-link" href="#">                                <%- _("Exclude from search").t() %>                                <% if (fieldMode) { %>                                    <span class="info"><%- splunkUtil.sprintf(_("%s events").t(), notValueCount) %></span>                                <% } %>                            </a>                            <a class="curr_exc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                    <% } else { %>                        <li>                            <a class="remove_val primary-link" href="#"><%- _("Remove from search").t() %></a>                            <a class="remove_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                    <% } %>                    <li>                        <a class="only_val primary-link" href="#"><%- _("New search").t() %></a>                        <a class="only_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                    </li>                </ul>            '})}.apply(i,n))||(e.exports=l)},"views/shared/eventsviewerdrilldown/Master":function(e,i,t){var n,l;n=[t("shim/jquery"),t("require/underscore"),e,t("views/shared/eventsviewer/Master"),t("views/shared/eventsviewerdrilldown/FieldValueDrilldown"),t("views/shared/eventsviewerdrilldown/SegmentationDrilldown"),t("views/shared/eventsviewerdrilldown/TagDrilldown"),t("views/shared/eventsviewer/shared/TimeInfo"),t("models/services/search/IntentionsParser"),t("uri/route")],void 0===(l=function(e,i,t,n,l,a,o,r,s,d){return n.extend({initialize:function(e){(e=e||{}).model=e.model||{},e.model.intentions||(e.model.intentions=new s,this.createdDrilldownIntentions=!0),n.prototype.initialize.call(this,e)},deactivate:function(e){return this.active?(n.prototype.deactivate.apply(this,arguments),this.createdDrilldownIntentions&&this.model.intentions.clear(),this.lastTargetElement=void 0,this):n.prototype.deactivate.apply(this,arguments)},openTagDrilldown:function(i){var t=i.$target,n=i.stateModel;this.children.tagDrilldown&&this.children.tagDrilldown.shown&&(this.children.tagDrilldown.hide(),this.children.tagDrilldown.remove(),delete this.children.tagDrilldown,this.lastTargetElement===t[0])||(n.set("modalizedRow",i.idx),this.children.tagDrilldown=new o({taggedFieldName:i.data.field,value:i.data.value,action:i.data.action,idx:i.idx,usespath:i.data.usespath,onHiddenRemove:!0,model:{application:this.model.application,report:this.model.report,state:n,searchJob:this.model.searchJob},scrollContainer:t.closest(".scrolling-table-wrapper"),ignoreToggleMouseDown:!0}),this.lastTargetElement=t[0],this.children.tagDrilldown.render().appendTo(e("body")).show(t))},openSegmentationDrilldown:function(i){var t=i.$target,n=i.stateModel;t.addClass("selected-segment"),this.children.segmentationDrilldown&&this.children.segmentationDrilldown.shown&&(this.children.segmentationDrilldown.hide(),this.children.segmentationDrilldown.remove(),delete this.children.segmentationDrilldown,this.lastTargetElement===t[0])||(n.set("modalizedRow",i.idx),this.children.segmentationDrilldown=new a({field:i.data.field,value:i.data.value,action:i.data.action,usespath:i.data.usespath,idx:i.idx,onHiddenRemove:!0,model:{application:this.model.application,report:this.model.report,state:n,searchJob:this.model.searchJob},scrollContainer:t.closest(".scrolling-table-wrapper"),ignoreToggleMouseDown:!0}),this.lastTargetElement=t[0],this.children.segmentationDrilldown.render().appendTo(e("body")).show(t),this.listenToOnce(this.children.segmentationDrilldown,"hidden",(function(){t.removeClass("selected-segment")})))},openFieldDrilldown:function(i){var t=i.$anchor||i.$target,n=i.stateModel,a=i.data.field,o=this.model.summary.findByFieldName(a),r=i.data.value,s=i.data.action;this.children.fieldValueDrilldown&&this.children.fieldValueDrilldown.shown&&(this.children.fieldValueDrilldown.hide(),this.children.fieldValueDrilldown.remove(),delete this.children.fieldValueDrilldown,this.lastTargetElement===t[0])||(t.addClass("selected-segment"),n.set("modalizedRow",i.idx),this.children.fieldValueDrilldown=new l({field:a,value:r,action:s,idx:i.idx,onHiddenRemove:!0,usespath:i.data.usespath,model:{field:o,application:this.model.application,report:this.model.report,state:n,searchJob:this.model.searchJob},scrollContainer:t.closest(".scrolling-table-wrapper"),ignoreToggleMouseDown:!0}),this.lastTargetElement=t[0],this.children.fieldValueDrilldown.render().appendTo(e("body")).show(t,{$toggle:i.$target}),this.listenToOnce(this.children.fieldValueDrilldown,"hidden",(function(){t.removeClass("selected-segment")})))},openTimeInfoDrilldown:function(t){var n=t.$anchor.data().timeIso;if(this.children.timeInfoDrilldown&&this.children.timeInfoDrilldown.shown)return this.children.timeInfoDrilldown.hide(),this.children.timeInfoDrilldown.remove(),void delete this.children.timeInfoDrilldown;t.stateModel.set("modalizedRow",t.idx),this.children.timeInfoDrilldown=new r({model:{report:this.model.report},header:i("_time").t(),time:n,onHiddenRemove:!0,scrollContainer:t.$anchor.closest(".scrolling-table-wrapper"),ignoreToggleMouseDown:!0}),this.children.timeInfoDrilldown.render().appendTo(e("body")).show(t.$anchor,{$toggle:t.$target})},drilldownHandler:function(i){var t,n,l,a;switch(i.type){case"tag":return void this.openTagDrilldown(i);case"segmentation":return void this.openSegmentationDrilldown(i);case"fieldvalue":return void this.openFieldDrilldown(i);case"time":return void this.openTimeInfoDrilldown(i);default:n=i.event,a=(l=this.getDrilldownCallback(i.data,i.noFetch))(),i.noFetch||((n.ctrlKey||n.metaKey||i.newTab)&&(t=window.open()),e.when(a).then(function(){var e=this.model.intentions.fullSearch(),i=d.search(this.model.application.get("root"),this.model.application.get("locale"),this.model.application.get("app"),{data:{q:e,earliest:this.model.report.entry.content.get("dispatch.earliest_time"),latest:this.model.report.entry.content.get("dispatch.latest_time")}});t?(this.model.intentions.clear({silent:!0}),t.location=i):(this.model.state.trigger("unmodalize"),this.options.setLocation?window.location=i:this.model.report.entry.content.set("search",e))}.bind(this))),this.trigger("drilldown",i,l)}}})}.apply(i,n))||(e.exports=l)},"views/shared/eventsviewerdrilldown/SegmentationDrilldown":function(e,i,t){var n,l;n=[t("require/underscore"),t("shim/jquery"),e,t("views/shared/PopTart")],void 0===(l=function(e,i,t,n){return n.extend({moduleId:t.i,className:"dropdown-menu",initialize:function(e){n.prototype.initialize.apply(this,arguments)},events:{"click .curr_inc_val":function(e){this.segmentationDrilldown(e)},"click .curr_inc_val_secondary":function(e){this.segmentationDrilldown(e,{newTab:!0})},"click .curr_exc_val":function(e){this.segmentationDrilldown(e,{negate:!0})},"click .curr_exc_val_secondary":function(e){this.segmentationDrilldown(e,{negate:!0,newTab:!0})},"click .remove_val":function(e){this.segmentationDrilldown(e,{removing:!0})},"click .remove_val_secondary":function(e){this.segmentationDrilldown(e,{removing:!0,newTab:!0})},"click .only_val":function(e){this.options.action="addterm",this.segmentationDrilldown(e,{search:"*"})},"click .only_val_secondary":function(e){this.options.action="addterm",this.segmentationDrilldown(e,{search:"*",newTab:!0})}},segmentationDrilldown:function(e,i){e.preventDefault();var t=(i=i||{}).search?i.search:this.model.report.entry.content.get("search");this.model.state.trigger("drilldown",{data:{q:t,stripReportsSearch:!1,negate:i.negate,action:this.options.action,value:this.options.value,app:this.model.application.get("app"),owner:this.model.application.get("owner")},event:e,idx:this.options.idx,newTab:i.newTab}),this.hide()},render:function(){var i=this.compiledTemplate({_:e,removable:"removeterm"===this.options.action});return this.$el.html(n.prototype.template_menu),this.$el.append(i),this},template:'                <ul>                    <% if (!removable) { %>                        <li>                            <a class="curr_inc_val primary-link" href="#"><%- _("Add to search").t() %></a>                            <a class="curr_inc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                        <li>                            <a class="curr_exc_val primary-link" href="#"><%- _("Exclude from search").t() %></a>                            <a class="curr_exc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                    <% } else { %>                        <li>                            <a class="remove_val primary-link" href="#"><%- _("Remove from search").t() %></a>                            <a class="remove_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                    <% } %>                    <li>                        <a class="only_val primary-link" href="#"><%- _("New search").t() %></a>                        <a class="only_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                    </li>                </ul>            '})}.apply(i,n))||(e.exports=l)},"views/shared/eventsviewerdrilldown/TagDrilldown":function(e,i,t){var n,l;n=[t("require/underscore"),t("shim/jquery"),e,t("views/shared/PopTart"),t("shim/splunk.util")],void 0===(l=function(e,i,t,n,l){return n.extend({moduleId:t.i,className:"dropdown-menu",initialize:function(e){n.prototype.initialize.apply(this,arguments)},events:{"click .curr_inc_val":function(e){this.tagDrilldown(e)},"click .curr_inc_val_secondary":function(e){this.tagDrilldown(e,{newTab:!0})},"click .curr_exc_val":function(e){this.tagDrilldown(e,{negate:!0})},"click .curr_exc_val_secondary":function(e){this.tagDrilldown(e,{negate:!0,newTab:!0})},"click .remove_val":function(e){this.tagDrilldown(e)},"click .remove_val_secondary":function(e){this.tagDrilldown(e,{newTab:!0})},"click .only_val":function(e){this.tagDrilldown(e,{search:"*"})},"click .only_val_secondary":function(e){this.tagDrilldown(e,{search:"*",newTab:!0})}},tagDrilldown:function(e,i){e.preventDefault();var t=(i=i||{}).search?i.search:this.model.searchJob.getStrippedEventSearch();this.model.state.trigger("drilldown",{data:{q:t,stripReportsSearch:!0,negate:i.negate,action:this.options.action,field:this.options.taggedFieldName,value:this.options.value,app:this.model.application.get("app"),owner:this.model.application.get("owner"),usespath:this.options.usespath},event:e,idx:this.options.idx,newTab:i.newTab}),this.hide()},render:function(){var i=this.compiledTemplate({_:e,removable:"removefieldvalue"===this.options.action});return this.$el.html(n.prototype.template_menu),this.$el.append(i),this},template:'                <ul>                    <% if (!removable) { %>                        <li>                            <a class="curr_inc_val primary-link" href="#"><%- _("Add to search").t() %></a>                            <a class="curr_inc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                        <li>                            <a class="curr_exc_val primary-link" href="#"><%- _("Exclude from search").t() %></a>                            <a class="curr_exc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                     <% } else { %>                        <li>                            <a class="remove_val primary-link" href="#"><%- _("Remove from search").t() %></a>                            <a class="remove_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                        </li>                    <% } %>                    <li>                        <a class="only_val primary-link" href="#"><%- _("New search").t() %></a>                        <a class="only_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>                    </li>                </ul>            '})}.apply(i,n))||(e.exports=l)}}]);