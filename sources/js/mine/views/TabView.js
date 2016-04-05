var $ = global.$ = global.jQuery = require('jquery'),
    Backbone = require('backbone'),
    template = require("../templates/TabView.hbs");
var ThumbnailCaseView = require('./ThumbnailCaseView');

Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        this.$el.append(template(this.model.attributes));

        this.casesViews = [];
        this.model.get('items').forEach((function (item) {
            this.casesViews.push(new ThumbnailCaseView({
                model: new Backbone.Model(item),
                el: $('#panel' + this.model.get('id') + ' .cases-wrapper')
            }));
        }).bind(this));
    },

    render: function () {
        this.casesViews.forEach(function (caseView) {
            caseView.render();
        });

        return this;
    }
});
