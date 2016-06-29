var /*$ = global.$ = global.jQuery = require('jquery'),*/
    _ = require('underscore'),
    Backbone = require('backbone'),
    template = require("./TabView.hbs");
var ThumbnailPostView = require('./TabView/ThumbnailPostView');
var PaginationView = require('./TabView/PaginationView');
var PostsCollection = require('./TabView/PostsCollection');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        /*const newElement = template(this.model.attributes);
         this.setElement(newElement);
         this.$el.replaceWith(newElement);*/

        this.paginationView = new PaginationView({model: new Backbone.Model()});
        this.listenTo(this.paginationView, 'new_page', this.onNewPage);

        this.thumbnailPostViews = [];
        this.postsCollection = new PostsCollection(this.model.get('type'));

        this.postsCollection.fetch({
            success: this.onFetchSuccess.bind(this),
            error: this.onFetchError
        });
    },

    render: function () {
        const newElement = template(this.model.attributes);
        this.setElement(newElement);
        this.$el.replaceWith(newElement);

        this.paginationView.render();
        this.$('.pagination-view-wrapper').append(this.paginationView.el);

        return this;
    },

    onFetchSuccess: function (collection, response) {
        response.posts.data.forEach(function (postModel) {
            const thumbnailPostView = new ThumbnailPostView({model: new Backbone.Model(postModel)});

            this.listenTo(thumbnailPostView, 'show_post', this.onShowPost);
            thumbnailPostView.render();
            this.$('.thumbnail-posts-wrapper').append(thumbnailPostView.$el);
            this.thumbnailPostViews.push(thumbnailPostView);
        }.bind(this));

        this.paginationView.model.set(_.omit(response.posts, 'data'));
        this.paginationView.render();
    },

    onFetchError: function () {
        console.log("PostsCollection fetch error", arguments);
    },

    onShowPost: function (id) {
        //console.log("onFullPostDetails");
        this.trigger('show_post', id);
    },

    onNewPage: function (url) {
        this.thumbnailPostViews.forEach(function (thumbnailPostView) {
            thumbnailPostView.destroy();
        });

        this.postsCollection.url = url;
        this.postsCollection.fetch({
            success: this.onFetchSuccess.bind(this),
            error: this.onFetchError
        });
    }
});