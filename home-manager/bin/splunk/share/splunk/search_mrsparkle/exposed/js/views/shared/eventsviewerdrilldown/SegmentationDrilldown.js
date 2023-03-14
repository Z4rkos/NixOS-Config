define(
    [
        'underscore',
        'jquery',
        'module',
        'views/shared/PopTart'
    ],
    function(
        _,
        $,
        module,
        PopTart
    ) {
        return PopTart.extend({
            moduleId: module.id,
            className: 'dropdown-menu',
            initialize: function(options) {
                PopTart.prototype.initialize.apply(this, arguments);
            },
            events: {
                'click .curr_inc_val': function(e) {
                    this.segmentationDrilldown(e);
                },
                'click .curr_inc_val_secondary': function(e) {
                    this.segmentationDrilldown(e, { newTab: true });
                },
                'click .curr_exc_val': function(e) {
                    this.segmentationDrilldown(e, { negate: true });
                },
                'click .curr_exc_val_secondary': function(e) {
                    this.segmentationDrilldown(e, { negate: true, newTab: true });
                },
                'click .remove_val': function(e) {
                    this.segmentationDrilldown(e, { removing: true });
                },
                'click .remove_val_secondary': function(e) {
                    this.segmentationDrilldown(e, { removing: true, newTab: true });
                },
                'click .only_val': function(e) {
                    this.options.action = 'addterm';
                    this.segmentationDrilldown(e, { search: '*' });
                },
                'click .only_val_secondary': function(e) {
                    this.options.action = 'addterm';
                    this.segmentationDrilldown(e, { search: '*', newTab: true });
                }
            },
            segmentationDrilldown: function(e, options) {
                e.preventDefault();
                options = options || {};
                
                var q = options.search ? options.search : this.model.report.entry.content.get('search');
                
                this.model.state.trigger('drilldown', {
                    data: {
                        q: q,
                        stripReportsSearch: false,
                        negate: options.negate,
                        action: this.options.action, 
                        value: this.options.value,
                        app: this.model.application.get('app'),
                        owner: this.model.application.get('owner')
                     },
                     event: e,
                     idx: this.options.idx,
                     newTab: options.newTab
                });
                
                this.hide();
            },
            render: function() {
                var template = this.compiledTemplate({
                    _:_,
                    removable: (this.options.action === 'removeterm')
                });
                
                this.$el.html(PopTart.prototype.template_menu);
                this.$el.append(template);
                return this;
            },
            template: '\
                <ul>\
                    <% if (!removable) { %>\
                        <li>\
                            <a class="curr_inc_val primary-link" href="#"><%- _("Add to search").t() %></a>\
                            <a class="curr_inc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\
                        </li>\
                        <li>\
                            <a class="curr_exc_val primary-link" href="#"><%- _("Exclude from search").t() %></a>\
                            <a class="curr_exc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\
                        </li>\
                    <% } else { %>\
                        <li>\
                            <a class="remove_val primary-link" href="#"><%- _("Remove from search").t() %></a>\
                            <a class="remove_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\
                        </li>\
                    <% } %>\
                    <li>\
                        <a class="only_val primary-link" href="#"><%- _("New search").t() %></a>\
                        <a class="only_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\
                    </li>\
                </ul>\
            '
        });
    }
);