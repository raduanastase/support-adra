var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone'),
    template = require("../../templates/TabView.hbs");
var ThumbnailPostView = require('./ThumbnailPostView');
var PostsCollection = require('./PostsCollection');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        /*const newElement = template(this.model.attributes);
        this.setElement(newElement);
        this.$el.replaceWith(newElement);*/

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

        return this;
    },

    onFetchSuccess: function (collection, response) {
        response.posts.data.forEach(function (postModel) {
            const thumbnailPostView = new ThumbnailPostView({model: new Backbone.Model(postModel)});

            thumbnailPostView.render();
            this.$('.thumbnail-posts-wrapper').append(thumbnailPostView.$el);
            this.thumbnailPostViews.push(thumbnailPostView);
        }.bind(this));
    },

    onFetchError: function () {
        console.log("PostsCollection fetch error", arguments);
    }
});