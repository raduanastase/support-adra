var $ = global.$ = global.jQuery = require('jquery'),
    Backbone = require('backbone'),
    template = require("../templates/TabView.hbs");
var ThumbnailCaseView = require('./ThumbnailCaseView');
var CasesCollection = require('../collections/CasesCollection');

Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        this.$el.append(template(this.model.attributes));

        this.list = new CasesCollection([], {typeOfCases: this.model.get('type')});
        this.listenTo(this.list, 'add', this.addOne);
        this.listenTo(this.list, 'reset', this.addAll);
        this.listenTo(this.list, 'all', this.render);
        this.list.fetch();
    },

    render: function () {
        //console.log("render", this.model.get('type'), this.list);
    },

    addOne: function (item) {
        var view = new ThumbnailCaseView({
            model: item
        });
        this.$el.find('#panel' + this.model.get('id') + ' .cases-wrapper').append(view.render().el);

        /*el: $()*/
    },

    addAll: function () {
        this.list.each(this.addOne, this);
    }
});
