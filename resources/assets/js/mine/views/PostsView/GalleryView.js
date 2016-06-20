var Backbone = require('backbone'),
    template = require("../../templates/Gallery.hbs");
var _ = require('underscore');

Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: 'orbit',

    attributes: function () {
        return {
            'aria-label': 'Galerie fotografii',
            'role': 'region',
            'data-orbit': ' ',
            'data-use-m-u-i': "false"
            //todo investigate what this is all about. more info here http://foundation.zurb.com/forum/posts/715-orbit-slider-not-working-correctly or here https://github.com/zurb/foundation-sites/issues/7286#event-479615131
        };
    },

    initialize: function () {
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        //hack for orbit gallery reflow
        _.defer(function () { this.$el.foundation(); }.bind(this));
        //_.delay(function () { this.$el.foundation(); }.bind(this), 500);

        return this;
    },

    reset: function () {
        this.$el.html('');
    }
});
