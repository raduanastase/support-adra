var Backbone = require('backbone');
var _ = require('underscore');

var template = require("./AppView.hbs");
var TabView = require('./AppView/TabView');
var PostModel = require('./AppView/PostModel');
var PostView = require('./AppView/PostView');
var AddPostModel = require('./AppView/AddPostModel');
var AddPostView = require('./AppView/AddPostView');
const Config = [
    'approved',
    'resolved',
    'pending',
    'rejected'
];

module.exports = Backbone.View.extend({
    initialize: function () {
        this.tabs = [];

        Config.forEach(function (type, index) {
            const tab = new TabView({model: new Backbone.Model({active: index === 0, id: index + 1, type: type})});

            this.listenTo(tab, 'show_post', this.onShowPost);//is this ok or should it go up one level and then down to showPost?
            this.tabs.push(tab);
        }.bind(this));

        this.postModel = new PostModel({
            counties: []/*this.model.get('counties')*/,
            loggedIn: true/*this.model.get('loggedIn')*/
        });
        this.postView = new PostView({model: this.postModel});

        this.addPostModel = new AddPostModel({
            counties: []/*this.model.get('counties')*/,
            loggedIn: true/*this.model.get('loggedIn')*/
        });
        this.addPostView = new AddPostView({model: this.addPostModel});
        console.log("add post model", this.addPostModel.attributes);

        $('.add-case-button').on('click', this.onAddPostButtonClick.bind(this));
    },

    render: function () {
        console.log("AppView render");
        this.$el.html(template());

        this.$el.append(this.postView.el);
        this.$el.append(this.addPostView.render().el);

        this.tabs.forEach(function (tab) {
            tab.render();
            this.$('.tabs-content').append(tab.$el);
        }.bind(this));

        return this;
    },

    onAddPostButtonClick: function () {
        Backbone.history.navigate('add-post', {trigger: true});
    },

    addPost: function () {
        this.addPostView.render();
        this.addPostView.open();
    },

    onShowPost: function (postId) {
        Backbone.history.navigate('posts/' + postId, {trigger: true});
    },

    showPost: function (postId) {
        this.postModel.set('id', postId);
        this.postModel.fetch({
            success: this.onPostFetchSuccess.bind(this),
            error: this.onPostFetchError
        });
    },

    onPostFetchSuccess: function () {
        this.postView.render();
        this.postView.open();
    },

    onPostFetchError: function () {
        console.log("FullPost fetch error", arguments);
    }
});