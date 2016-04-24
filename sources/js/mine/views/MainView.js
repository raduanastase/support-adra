'use strict';

var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var DashboardView = require('./DashboardView');
var AddCaseView = require('./AddCaseView');
var EditCaseView = require('./EditCaseView');
var ModalErrorView = require('./ModalErrorView');
var template = require("../templates/Main.hbs");
Backbone.$ = $;

/*$(function () {
 //DO I NEED THIS??

 });*/


module.exports = Backbone.View.extend({
    events: {
     'click .add-case-button': 'onAddCaseButtonClick'//this works if the element is inside the view !!!!
     },

    initialize: function () {
        this.$el.html(template(this.model.attributes));

        this.dashboardModel = new Backbone.Model({counties: this.model.get('counties'), loggedIn: this.model.get('loggedIn')});
        this.dashboardView = new DashboardView({model: this.dashboardModel, el: this.$('.dashboard')});
        this.addCaseModel = new Backbone.Model({counties: this.model.get('counties')});
        this.addCaseView = new AddCaseView({model: this.addCaseModel});
        this.$el.append(this.addCaseView.render().el);
        //console.log('ttta',this.addCaseView.el);
         /*this.editCaseView = new EditCaseView();
         this.modalErrorView = new ModalErrorView();*/


    },

    render: function () {
        this.dashboardView.render();
        //added this because tabs were not working
        $(document).foundation();//is there another way?
    },

    onAddCaseButtonClick: function () {
        this.addCaseView.open();
    }
     /*onImageUploadButtonClick: function (event) {
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