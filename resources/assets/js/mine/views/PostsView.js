var Backbone = require('backbone');
var _ = require('underscore');

var template = require("../templates/PostsView.hbs");
var TabView = require('./PostsView/TabView');
const Config = [
    'approved',
    'resolved',
    'pending',
    'rejected'
]

module.exports = Backbone.View.extend({
    initialize: function () {
        this.tabs = [];
    },

    render: function () {
        this.$el.html(template());

        Config.forEach(function (type, index) {
            const tab = new TabView({model: new Backbone.Model({active: index === 0, id: index+1, type: type})});

            tab.render();
            this.tabs.push(tab);
            this.$('.tabs-content').append(tab.$el);
        }.bind(this));

        return this;
    }
});