var $ = global.$ = global.jQuery = require('jquery'),
    Backbone = require('backbone'),
    template = require("../templates/ThumbnailCase.hbs");
Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: 'column view-case-template',

    events: {
      'click .thumbnail' : 'onThumbClick'
    },

    initialize: function () {

    },

    render: function () {
        this.$el.html(template(this.model.attributes));
        return this;
    },

    onThumbClick: function () {
        this.getCaseDetails(this.model.get('ID'));
    },

    getCaseDetails: function (id) {
        $.ajax({
            type: 'GET',
            url: 'data.php?case_id=' + id,
            dataType: 'json',
            success: this.onGetCaseDetailsSuccess,
            error: this.onGetCaseDetailsError
        })
    },

    onGetCaseDetailsSuccess: function (data) {
        /*this.MODAL_VIEW_VALUES.forEach(function (value) {
         this.$viewCaseModal.find(value[0]).text(element['0'][0][value[1]]);
         });*/
        console.log("succes", data);
    },

    onGetCaseDetailsError: function (data) {
        /*this.$errorModal.foundation('open');*/
        console.log("error", data);
    }

});
