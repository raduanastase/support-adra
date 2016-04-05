var $ = global.$ = global.jQuery = require('jquery'),
    Backbone = require('backbone'),
    template = require("../templates/Dashboard.hbs"),
    TabView = require("./TabView");


Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        this.$el.html(template(this.model.attributes));//TODO find out if putting this here is ok

        var $tabsContent = $('.tabs-content');

        this.approvedTabView = new TabView({
            model: new Backbone.Model({
                id: 1,
                items: this.model.get('approved'),
                type: 'approved',
                active: true
            }),
            el: $tabsContent
        });
        this.resolvedTabView = new TabView({
            model: new Backbone.Model({
                id: 2,
                items: this.model.get('resolved'),
                type: 'resolved'
            }),
            el: $tabsContent
        });
        this.pendingTabView = new TabView({
            model: new Backbone.Model({
                id: 3,
                items: this.model.get('pending'),
                type: 'pending'
            }),
            el: $tabsContent
        });
        this.rejectedTabView = new TabView({
            model: new Backbone.Model({
                id: 2,
                items: this.model.get('rejected'),
                type: 'rejected'
            }),
            el: $tabsContent
        });
    },

    render: function () {
        this.approvedTabView.render();
        this.resolvedTabView.render();
        this.pendingTabView.render();
        this.rejectedTabView.render();

        return this;
    }

});