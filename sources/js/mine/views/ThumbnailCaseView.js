var $ = require('jquery')(window),
    Backbone = require('backbone'),
    template = require("../templates/ThumbnailCase.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function () {
        this.$el.append(template(this.model.attributes));

        this.THUMBNAIL_VALUES = [
            ['.thumbnail-img', 'file_path'],
            ['.case-name', 'case_name'],
            ['.case-description', 'person_description']
        ];
    },

    render: function () {

        return this;
    }

});
