var Backbone = require('backbone');
var _ = require('underscore');

var template = require("../templates/PostsView.hbs");
var TabView = require('./PostsView/TabView');

module.exports = Backbone.View.extend({
    initialize: function () {
        this.tabs = [];
    },

    render: function () {
        this.$el.html(template());

        const tabView = new TabView({model: new Backbone.Model({active: true, id: 1})});

        this.tabs.push(tabView);
        tabView.render();
        this.$('.tabs-wrapper').append(tabView.$el);
    }
});