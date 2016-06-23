var Backbone = require('backbone'),
    template = require("../../templates/FullCase.hbs");
var GalleryModel = require("../../models/GalleryModel");
var GalleryView = require("./GalleryView");

module.exports = Backbone.View.extend({
    className: 'full reveal',

    view: 'posts.show',//the location of the template ???

    attributes: function () {
        return {
            id: 'view-case-modal',
            'data-reveal': ' '
        };
    },

    events: function () {
        return {
            'click .close-button': 'close'
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

    open: function () {
        //console.log(this.$el[0]);
        this.$el.foundation('open');
    },

    close: function () {
        this.$el.foundation('close');
        this.galleryView.reset();
        this.$el.html('');
    }
});
