var $ = require('jquery')(window),
    Backbone = require('backbone'),
    template = require("../templates/AddCase.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: 'full reveal',

    attributes: function () {
        return {
            id: 'add-case-modal',
            'data-reveal': ' '
        };
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        this.$el.html(template(this.model.attributes));
        return this;
    },

    open: function () {
        this.$el.foundation('open');
    }

});
