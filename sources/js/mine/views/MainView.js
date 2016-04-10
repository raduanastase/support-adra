'use strict';

var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var DashboardView = require('./DashboardView');
var AddCaseView = require('./AddCaseView');
var EditCaseView = require('./EditCaseView');
var ModalErrorView = require('./ModalErrorView');
Backbone.$ = $;

/*$(function () {
 //DO I NEED THIS??

 });*/


module.exports = Backbone.View.extend({
    /*events: {
     'click .image-upload-button': 'onImageUploadButtonClick'
     },*/

    initialize: function () {
        this.TAB_NAMES = ['approved', 'resolved', 'pending', 'rejected'];//convert to collection?

        this.dashboardView = new DashboardView({el: $('.dashboard')});

        /*this.addCaseView = new AddCaseView();
         this.editCaseView = new EditCaseView();
         this.modalErrorView = new ModalErrorView();*/


    },

    render: function () {
        //console.log(this.dashboardModel.attributes);
        this.dashboardView.render();
        //added this because tabs were not working
        $(document).foundation();//is there another way?
    }/*,

     onImageUploadButtonClick: function (event) {
     /!* if (this.$imageUploadInput) {
     this.$imageUploadInput.click();
     }
     event.preventDefault(); // prevent navigation to "#"*!/
     },

     onGetCasesSuccess: function (data, typeOfCases) {
     var self = this;
     //console.log(typeOfCases, data);
     data.forEach(function (element, index) {
     console.log(typeOfCases);
     self.$cases.push(self.$viewCaseTemplate.clone());//todo find out why this doesn't work
     self.THUMBNAIL_VALUES.forEach(function (value, idx) {
     console.log(typeOfCases, element[value[1]]);
     if (idx == 0) {
     self.$cases[index].find(value[0]).attr('src', element[value[1]]);
     } else {
     self.$cases[index].find(value[0]).text(element[value[1]]);
     }
     });
     self.$cases[index].removeClass('view-case-template');
     self.$TABS[typeOfCases].append(self.$cases[index]);
     });
     //self.$TABS[typeOfCases].foundation();
     },

     onGetCasesError: function (data) {
     this.$errorModal.foundation('open');
     },

     */
});