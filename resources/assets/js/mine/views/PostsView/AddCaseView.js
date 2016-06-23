var /*$ = require('jquery')(window),*/
    Backbone = require('backbone'),
    template = require("../../templates/AddCase.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: 'full reveal',

    events: function () {
      return {
          'change #image-upload-input': 'onChangeImageUpload',
          'click .close-button': 'close'
      }
    },

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
    },

    close: function () {
        this.$el.foundation('close');
        this.$el.html('');
    },

    onChangeImageUpload: function (event) {
        var files = event.currentTarget.files;
        var $fileList = this.$('.files-list');

        $fileList.html('');

        for (var i = 0; i < files.length; ++i) {
            $fileList.append('<li>' + files.item(i).name +'</li>');
        }
    }
});
