var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var template = require("./AddPostView.hbs");
const SIZE_LIMIT = 3145728; //3 MegaBytes
const NR_OF_ATTACHMENTS = 5;

module.exports = Backbone.View.extend({
    className: 'full reveal',

    events: function () {
        return {
            'change #image-upload-input': 'onChangeImageUpload',
            'click .close-button': 'close',
            'click #submit-button': 'onSubmitClick'
        }
    },

    attributes: function () {
        return {
            id: 'add-case-modal',
            'data-reveal': ' '
        };
    },

    initialize: function () {
        this.invalidFilesMessage = '';
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        return this;
    },

    open: function () {
        //todo find out why i need to defer this
        _.defer(function () {
            this.$el.foundation('open');
        }.bind(this));
    },

    close: function () {
        this.$el.foundation('close');
        this.$el.html('');//maybe a better way will be to reset the input fields
        Backbone.history.navigate('');
    },

    onChangeImageUpload: function (event) {
        var $fileList = this.$('.files-list');
        var $uploadButton = this.$('.upload-images label');
        var files = event.currentTarget.files;
        var finalFiles = [];
        var largeFiles = [];
        var filesCount = Math.min(files.length, NR_OF_ATTACHMENTS);

        $fileList.html('');

        for (var i = 0; i < filesCount; ++i) {
            if (files[i].size <= SIZE_LIMIT) {
                $fileList.append('<li>' + files[i].name + '</li>');
                finalFiles.push(files[i]);
            } else {
                largeFiles.push(files[i].name);
            }
        }

        if (filesCount != files.length) {
            this.invalidFilesMessage = 'Ati selectat prea multe imagini!\n\nSelectati inca o data un numar de maxim ' + NR_OF_ATTACHMENTS + ' imagini.';
            alert(this.invalidFilesMessage);
        } else if (largeFiles.length) {
            this.invalidFilesMessage = "Aceste fisiere sunt prea mari pentru a fi adaugate.\n\n" + JSON.stringify(largeFiles) + '.\n\n Selectati din nou imagini mai mici de 3 MB!';
            alert(this.invalidFilesMessage);
        } else if (finalFiles.length) {
            $uploadButton.hide();
            this.invalidFilesMessage = '';
        }
    },

    onSubmitClick: function (event) {
        if (this.invalidFilesMessage.length) {
            event.preventDefault();
            alert(this.invalidFilesMessage);
        }
    }
});
