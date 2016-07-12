var _ = require('underscore');
var Backbone = require('backbone'),
    template = require("./AddPostView.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: 'full reveal',

    events: function () {
        return {
            'change #image-upload-input': 'onChangeImageUpload',
            'click #submit-button': 'onSubmitClick',
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
        this.files = event.currentTarget.files;
        var $fileList = this.$('.files-list');
        console.log(this.files);
        $fileList.html('');

        for (var i = 0; i < this.files.length; ++i) {
            $fileList.append('<li>' + this.files.item(i).name + '</li>');
        }
    },

    getImagesList: function () {
        return [];
    },

    onSubmitClick: function () {
        this.model.set({
            title: this.$('#title').val(),
            type: this.model.get('loggedIn') ? 'approved' : 'pending',
            reporter_first_name: this.$('#reporter-first-name').val(),
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
            person_money_partial: this.$('#person_money_partial').val(),
            attachments: this.getImagesList()
        });

        this.model.unset('counties');
        this.model.unset('loggedIn');

        this.model.save(null, {
            success: function () {
                this.close();
                //I'm using this because laravel redirect would not work with same path without hashes
                location.reload();
                // I'm not using this to populate the collection because, according to pagination, the current collection may not be affected, thus a modification to the collection would be unnecessary
            }.bind(this)
        });
    }
});
