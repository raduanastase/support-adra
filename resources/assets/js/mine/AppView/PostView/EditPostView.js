var /*$ = require('jquery')(window),*/
    Backbone = require('backbone'),
    template = require("./EditPostView.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({
    events: function () {
      return {
          'change #image-upload-input': 'onChangeImageUpload'
      }
    },

    initialize: function () {
        //should I make this to every view??
        /*this.listenTo(this.model, 'change', this.render);*/
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        return this;
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
