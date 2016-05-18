var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone'),
    _ = require('underscore'),
    template = require("../templates/Dashboard.hbs"),
    TabView = require("./TabView");
var FullCaseView = require('./FullCaseView');

Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        this.$el.html(template(/*this.model.attributes*/));//TODO find out if putting this here is ok

        var $tabsContent = $('.tabs-content');
        this.fullCaseModel = new Backbone.Model({counties: this.model.get('counties'), loggedIn: this.model.get('loggedIn')});
        this.fullCaseView = new FullCaseView({model: this.fullCaseModel});

        this.$el.append(this.fullCaseView.el);

        this.approvedTabView = new TabView({
            model: new Backbone.Model({
                id: 1,
                type: 'approved',
                active: true
            }),
            el: $tabsContent
        });
        this.resolvedTabView = new TabView({
            model: new Backbone.Model({
                id: 2,
                type: 'resolved'
            }),
            el: $tabsContent
        });
        this.pendingTabView = new TabView({
            model: new Backbone.Model({
                id: 3,
                type: 'pending'
            }),
            el: $tabsContent
        });
        this.rejectedTabView = new TabView({
            model: new Backbone.Model({
                id: 2,
                type: 'rejected'
            }),
            el: $tabsContent
        });

        this.listenTo(this.approvedTabView, 'case-details', this.onCaseDetailsReceived);
        this.listenTo(this.resolvedTabView, 'case-details', this.onCaseDetailsReceived);
        this.listenTo(this.pendingTabView, 'case-details', this.onCaseDetailsReceived);
        this.listenTo(this.rejectedTabView, 'case-details', this.onCaseDetailsReceived);
    },

    render: function () {
        /*this.approvedTabView.render();
         this.resolvedTabView.render();
         this.pendingTabView.render();
         this.rejectedTabView.render();*/

        return this;
    },

    onCaseDetailsReceived: function (data) {
        this.fullCaseModel.set(_.extend({}, data[0][0], {pictures: data[1]}));
        this.fullCaseView.open();
    }

});