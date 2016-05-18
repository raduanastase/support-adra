var Backbone = require('backbone'),
    template = require("../templates/Gallery.hbs");
var _ = require('underscore');

Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: 'orbit',

    attributes: function () {
        return {
            'aria-label': 'Galerie fotografii',
            'role': 'region',
            'data-orbit': ' '
        };
    },

    initialize: function () {
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        //hack for orbit gallery reflow
        _.defer(function () { this.$el.foundation(); }.bind(this));

        return this;
    },

    reset: function () {
        this.$el.html('');
    }
});
