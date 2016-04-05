'use strict';

var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var DashboardView = require('./DashboardView');
var AddCaseView = require('./AddCaseView');
var FullCaseView = require('./FullCaseView');
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
        this.tabsPopulated = 0;

        this.dashboardModel = new Backbone.Model();
        this.getDashboardData();

        /*this.addCaseView = new AddCaseView();
         this.fullCaseView = new FullCaseView();
         this.editCaseView = new EditCaseView();
         this.modalErrorView = new ModalErrorView();*/
    },

    createViews: function () {
        this.dashboardView = new DashboardView({model: this.dashboardModel, el: $('.dashboard')});

        this.render();
    },

    render: function () {
        //console.log(this.dashboardModel.attributes);
        this.dashboardView.render();
        //added this because tabs were not working
        $(document).foundation();//is there another way?
    },

    getDashboardData: function () {
        this.TAB_NAMES.forEach((function (tabName) {
            this.getCases(tabName);
        }).bind(this));
    },

    getCases: function (typeOfCases) {
        var self = this;

        $.ajax({
            type: 'GET',
            url: 'data.php?' + typeOfCases + '=1',
            dataType: 'json',
            success: function (data) {
                self.onGetCasesSuccess(data[0], typeOfCases);
            },
            error: self.onGetCasesError
        })
    },

    onGetCasesSuccess: function (data, typeOfCases) {
        this.tabsPopulated++;
        this.dashboardModel.set(typeOfCases, data);
        if (this.tabsPopulated === this.TAB_NAMES.length) {
            this.tabsPopulated = 0;
            this.createViews();
        }
    },

    onGetCasesError: function (data) {
        /*this.$errorModal.foundation('open');*/
        console.log('error', data);
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

     getCase: function (id) {
     $.ajax({
     type: 'GET',
     url: 'data.php?case_id=' + id,
     dataType: 'json',
     success: this.onGetCaseSuccess,
     error: this.onGetCaseError
     })
     },

     onGetCaseSuccess: function (data) {
     this.MODAL_VIEW_VALUES.forEach(function (value) {
     this.$viewCaseModal.find(value[0]).text(element['0'][0][value[1]]);
     });
     },

     onGetCaseError: function (data) {
     this.$errorModal.foundation('open');
     }*/
});