var $ = require('jquery')(window),
    Backbone = require('backbone'),
    template = require("../templates/FullCase.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function () {
        this.MODAL_VIEW_VALUES = [
            ['.reporter-last-name', 'reporter_last_name'],
            ['.reporter-first-name', 'reporter_first_name'],
            ['.reporter-cnp', 'reporter_cnp'],
            ['.reporter-ci-series', 'reporter_ci_series'],
            ['.reporter-ci-number', 'reporter_ci_number'],
            ['.reporter-phone', 'reporter_phone'],
            ['.reporter-email', 'reporter_email'],
            ['.person-last-name', 'person_last_name'],
            ['.person-name', 'person_first_name'],
            ['.person-cnp', 'person_cnp'],
            ['.person-ci-series', 'person_ci_series'],
            ['.person-ci-number', 'person_ci_number'],
            ['.person-region', 'person_region'],
            ['.person-city', 'person_city'],
            ['.person-address', 'person_address'],
            ['.person-description', 'person_description'],
            ['.person-money-total', 'person_money_total'],
            ['.person-money-partial', 'person_money_partial']
        ];

        this.render();
    },

    render: function () {
        this.$el.html(template(/*this.model.attributes*/));
        return this;
    }

});
