var Backbone = require('backbone'),
    template = require("../templates/Gallery.hbs");

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
        console.log(this.$el);
        this.$el.foundation();
        //this.$el.foundation('orbit', 'reflow');
        return this;
    },

    reset: function () {
        this.$el.html('');
    }
});
