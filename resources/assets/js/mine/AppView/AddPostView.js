var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var template = require("./AddPostView.hbs");
const SIZE_LIMIT = 3145728; //3 MegaBytes
const NR_OF_ATTACHMENTS = 15;

module.exports = Backbone.View.extend({
    className: 'full reveal',

    events: function () {
        return {
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
        this.listenTo(this.model, 'change', this.render);
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

        this.filesFormData = new FormData();

        $fileList.html('');

        for (var i = 0; i < filesCount; ++i) {
            if (files[i].size <= SIZE_LIMIT) {
                $fileList.append('<li>' + files[i].name + '</li>');
                finalFiles.push(files[i]);
                this.filesFormData.append('filesToUpload[]', files[i]);
            } else {
                largeFiles.push(files[i].name);
            }
        }

        if (filesCount != files.length) {
            alert('Ati selectat prea multe imagini!\n\nS-au adaugat doar primele ' + NR_OF_ATTACHMENTS + ' imagini.');
        }

        if (finalFiles.length) {
            $uploadButton.hide();
        }

        if (largeFiles.length) {
            alert("Aceste fisiere sunt prea mari pentru a fi adaugate.\n\n" + JSON.stringify(largeFiles));
        }
    },

    getImagesList: function () {
        return [{path: "img/path/to/image"}];
    },

    onSubmitClick: function () {
        this.model.set({
            title: this.$('#title').val(),
            filesToUpload: this.filesFormData,
            type: this.model.get('loggedIn') ? 'approved' : 'pending',
            /*reporter_first_name: this.$('#reporter-first-name').val(),
            reporter_last_name: this.$('#reporter-last-name').val(),
            reporter_cnp: this.$('#reporter-cnp').val(),
            reporter_ci_series: this.$('#reporter-ci-series').val(),
            reporter_ci_number: this.$('#reporter-ci-number').val(),
            reporter_phone: this.$('#reporter-phone').val(),
            reporter_email: this.$('#reporter-email').val(),
            person_first_name: this.$('#person-first-name').val(),
            person_last_name: this.$('#person_last_name').val(),
            person_cnp: this.$('#person_cnp').val(),
            person_ci_series: this.$('#person_ci_series').val(),
            person_ci_number: this.$('#person_ci_number').val(),
            person_county_id: this.$('#person_county_id').val(),
            person_city: this.$('#person_city').val(),
            person_address: this.$('#person_address').val(),
            person_description: this.$('#person_description').val(),
            person_money_total: this.$('#person_money_total').val(),
            person_money_partial: this.$('#person_money_partial').val(),*/
            attachments: this.getImagesList()
        });

        this.model.unset('counties');
        this.model.unset('loggedIn');

        console.log("on save model", this.model.attributes);

        this.model.save(null, {
            success: function (response) {
                this.close();
                console.log("response", response);
                //I'm using this because laravel redirect would not work with same path without hashes
                //location.reload();
                // I'm not using this to populate the collection because, according to pagination, the current collection may not be affected, thus a modification to the collection would be unnecessary
            }.bind(this),
            error: function (response) {
                console.log("error response", response);
            }
        });

        //this is working but I need it to work with model.save
        /*$.ajax({
            url: 'api/attachments',
            type: 'POST',
            data: this.filesFormData,
            contentType: false,
            processData: false,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')//i don't know why I have to do this because in the main file I added the headers to every ajax request
            },
            success: function (data) {
                alert(data);
            }
        });*/
    }
});
