var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone'),
    template = require("../../templates/PaginationView.hbs");
Backbone.$ = $;

module.exports = Backbone.View.extend({
    render: function () {
        this.$el.html(template(this.model.attributes));

        return this;
    }
});
