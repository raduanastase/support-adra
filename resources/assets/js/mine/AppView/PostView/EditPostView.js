var /*$ = require('jquery')(window),*/
    Backbone = require('backbone'),
    template = require("./EditPostView.hbs");

//Backbone.$ = $;

module.exports = Backbone.View.extend({
    events: function () {
      return {
          'change #image-upload-input': 'onChangeImageUpload',
          'click .save-button': 'onSaveClick'
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
    },

    onSaveClick: function () {
        this.model.set({
            title: this.$('#title').val(),
            reporter_first_name: this.$('#reporter-first-name').val(),
            reporter_last_name: this.$('#reporter-last-name').val(),
            reporter_cnp: this.$('#reporter-cnp').val(),
            reporter_ci_series: this.$('#reporter-ci-series').val(),
            reporter_ci_number: this.$('#reporter-ci-number').val(),
            reporter_phone: this.$('#reporter-phone').val(),
            reporter_email: this.$('#reporter-email').val(),
            person_first_name: this.$('#person-first-name').val(),
            person_last_name: this.$('#person-last-name').val(),
            person_cnp: this.$('#person-cnp').val(),
            person_ci_series: this.$('#person-ci-series').val(),
            person_ci_number: this.$('#person-ci-number').val(),
            person_county_id: this.$('#person-county-id').val(),
            person_city: this.$('#person-city').val(),
            person_address: this.$('#person-address').val(),
            person_description: this.$('#person-description').val(),
            person_money_total: this.$('#person-money-total').val(),
            person_money_partial: this.$('#person-money-partial').val()
        });

        //I don't know what happens if I don't unset this values
        //this.model.unset('counties');
        //this.model.unset('loggedIn');

        this.model.save(null, {
            success: function () {
                this.trigger('read_mode');
            }.bind(this)
        });
    }
});
