var Backbone = require('backbone');
var _ = require('underscore');

var template = require("../templates/PostsView.hbs");
var TabView = require('./PostsView/TabView');
var FullPostView = require('./PostsView/FullPostView');
var AddCaseView = require('./PostsView/AddCaseView');
const Config = [
    'approved',
    'resolved',
    'pending',
    'rejected'
]

module.exports = Backbone.View.extend({
    initialize: function () {
        this.tabs = [];

        Config.forEach(function (type, index) {
            const tab = new TabView({model: new Backbone.Model({active: index === 0, id: index+1, type: type})});

            this.listenTo(tab, 'full-post-details', this.onFullPostDetails);
            this.tabs.push(tab);
        }.bind(this));

        this.fullPostModel = new Backbone.Model({counties: []/*this.model.get('counties')*/, loggedIn: false/*this.model.get('loggedIn')*/});
        this.fullPostView = new FullPostView({model: this.fullPostModel});

        this.addCaseModel = new Backbone.Model({counties: []/*this.model.get('counties')*/, loggedIn: false/*this.model.get('loggedIn')*/});
        this.addCaseView = new AddCaseView({model: this.addCaseModel});

        $('.add-case-button').on('click', this.onAddCaseButtonClick.bind(this));
    },

    render: function () {
        this.$el.html(template());

        this.$el.append(this.fullPostView.el);
        this.$el.append(this.addCaseView.render().el);

        this.tabs.forEach(function (tab) {
            tab.render();
            this.$('.tabs-content').append(tab.$el);
        }.bind(this));

        return this;
    },

    onFullPostDetails: function(model) {
        this.fullPostModel.set(model.attributes);
        this.fullPostView.render();
        this.fullPostView.open();
    },

    onAddCaseButtonClick: function () {
        this.addCaseView.open();
    }
});