var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone'),
    template = require("../../templates/TabView.hbs");
var ThumbnailPostView = require('./ThumbnailPostView');
var PostsCollection = require('./PostsCollection');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        this.$el.html(template(this.model.attributes));

        this.thumbnailPostViews = [];
        this.postsCollection = new PostsCollection(this.model.get('type'));

        this.postsCollection.fetch({
            success: this.onFetchSuccess.bind(this),
            error: this.onFetchError
        });
    },

    render: function () {
        this.$el.html(template(this.model.attributes));
    },

    onFetchSuccess: function (collection, response) {
        var that = this;

        response.posts.data.forEach(function(postModel) {
            const thumbnailPostView = new ThumbnailPostView({model: new Backbone.Model(postModel)});

            thumbnailPostView.render();
            that.$('.thumbnail-posts-wrapper').append(thumbnailPostView.$el);

            that.thumbnailPostViews.push(thumbnailPostView);
        });
    },

    onFetchError: function () {
        console.log("PostsCollection fetch error", arguments);
    }
});