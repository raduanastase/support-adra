var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone'),
    template = require("../../templates/PaginationView.hbs");
Backbone.$ = $;

module.exports = Backbone.View.extend({
    events: function () {
        return {
            'click .pagination-next a': 'onNextClick',
            'click .pagination-previous a': 'onPreviousClick',
            'click .page-number': 'onPageNumberClick'
        }
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        return this;
    },

    onNextClick: function () {
        this.trigger('new_page', this.model.get('next_page_url'));
    },

    onPreviousClick: function () {
        this.trigger('new_page', this.model.get('prev_page_url'));
    },

    onPageNumberClick: function () {
        //todo make it in the future
        console.log("page number click");
    }
});
