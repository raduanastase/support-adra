var $ = global.$ = global.jQuery = require('jquery'),
    Backbone = require('backbone'),
    template = require("../templates/Dashboard.hbs"),
    TabView = require("./TabView");
var FullCaseView = require('./FullCaseView');

Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        this.$el.html(template(/*this.model.attributes*/));//TODO find out if putting this here is ok

        var $tabsContent = $('.tabs-content');
        this.fullCaseView = new FullCaseView();

        this.approvedTabView = new TabView({
            model: new Backbone.Model({
                id: 1,
                type: 'approved',
                active: true,
                fullCaseView: this.fullCaseView
            }),
            el: $tabsContent
        });
        this.resolvedTabView = new TabView({
            model: new Backbone.Model({
                id: 2,
                type: 'resolved',
                fullCaseView: this.fullCaseView
            }),
            el: $tabsContent
        });
        this.pendingTabView = new TabView({
            model: new Backbone.Model({
                id: 3,
                type: 'pending',
                fullCaseView: this.fullCaseView
            }),
            el: $tabsContent
        });
        this.rejectedTabView = new TabView({
            model: new Backbone.Model({
                id: 2,
                type: 'rejected',
                fullCaseView: this.fullCaseView
            }),
            el: $tabsContent
        });
    },

    render: function () {
        /*this.approvedTabView.render();
        this.resolvedTabView.render();
        this.pendingTabView.render();
        this.rejectedTabView.render();*/

        return this;
    }

});