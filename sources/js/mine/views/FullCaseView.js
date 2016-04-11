var $ = require('jquery')(window),
    Backbone = require('backbone'),
    template = require("../templates/FullCase.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function () {
        console.log("init");
        /*this.listenTo(this.model, 'change', this.render);*///todo make it render on model change
    },

    render: function () {
        this.$el.html(template(this.model.attributes));
        console.log("render");
        /*this.$el.foundation('open');*/
        return this;
    }

});
