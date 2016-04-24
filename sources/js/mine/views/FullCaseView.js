var $ = require('jquery')(window),
    Backbone = require('backbone'),
    template = require("../templates/FullCase.hbs");
var GalleryModel = require("../models/GalleryModel");
var GalleryView = require("./GalleryView");

Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: 'full reveal',

    attributes: function () {
        return {
            id: 'view-case-modal',
            'data-reveal': ' '
        };
    },

    initialize: function () {
        this.$el.html(template(this.model.attributes));

        this.listenTo(this.model, 'change', this.render);

        this.galleryModel = new GalleryModel({loggedIn: this.model.get('loggedIn')});
        this.galleryView = new GalleryView({model: this.galleryModel});
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        this.$('#person-county').val(this.model.get('person_county_id'));
        this.galleryModel.set('pictures', this.model.get('pictures'));
        this.$('.gallery-wrapper').html(this.galleryView.render().el);
        return this;
    },

    open: function () {
        this.$el.foundation('open');
    }

});
