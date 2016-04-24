var $ = global.$ = global.jQuery = require('jquery'),
    Backbone = require('backbone'),
    template = require("../templates/Gallery.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
    },

    render: function () {
        this.$el.html(template(this.model.attributes));
        
        return this;
    }
});
