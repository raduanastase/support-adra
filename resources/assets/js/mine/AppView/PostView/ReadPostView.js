var Backbone = require('backbone'),
    template = require("./ReadPostView.hbs");
var GalleryModel = require("./GalleryModel");
var GalleryView = require("./GalleryView");

module.exports = Backbone.View.extend({
    events: function () {
        return {
            'click .edit-button': 'edit',
            'click .delete-button': 'delete'
        };
    },

    initialize: function () {
        this.$el.html(template(this.model.attributes));
        //this.$el.html(template());

        this.galleryModel = new GalleryModel({loggedIn: this.model.get('loggedIn')});
        this.galleryView = new GalleryView({model: this.galleryModel});
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        this.$('#person-county').val(this.model.get('person_county_id'));

        this.galleryModel.set('images', this.model.get('attachments'));
        this.galleryView.render();
        this.$('.gallery-wrapper').html(this.galleryView.el);

        return this;
    },

    edit: function () {
        this.galleryView.reset();
        this.trigger('edit_mode');
    }
});
