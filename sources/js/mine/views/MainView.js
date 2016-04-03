'use strict';

var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;

/*$(function () {
 //DO I NEED THIS??

 });*/


module.exports = Backbone.View.extend({
    initialize: function () {
        this.TAB_NAMES = ['approved', 'resolved', 'pending', 'rejected'];
        this.MODAL_VIEW_VALUES = [
            ['.reporter-last-name', 'reporter_last_name'],
            ['.reporter-first-name', 'reporter_first_name'],
            ['.reporter-cnp', 'reporter_cnp'],
            ['.reporter-ci-series', 'reporter_ci_series'],
            ['.reporter-ci-number', 'reporter_ci_number'],
            ['.reporter-phone', 'reporter_phone'],
            ['.reporter-email', 'reporter_email'],
            ['.person-last-name', 'person_last_name'],
            ['.person-name', 'person_first_name'],
            ['.person-cnp', 'person_cnp'],
            ['.person-ci-series', 'person_ci_series'],
            ['.person-ci-number', 'person_ci_number'],
            ['.person-region', 'person_region'],
            ['.person-city', 'person_city'],
            ['.person-address', 'person_address'],
            ['.person-description', 'person_description'],
            ['.person-money-total', 'person_money_total'],
            ['.person-money-partial', 'person_money_partial']
        ];
        this.THUMBNAIL_VALUES = [
            ['.thumbnail-img', 'file_path'],
            ['.case-name', 'case_name'],
            ['.case-description', 'person_description']
        ];
        this.$TABS = {};

        this.$errorModal = $('#error-modal');
        this.$viewCaseTemplate = $('.view-case-template');
        this.$addCaseForm = $('#add-case-form');
        this.$viewCaseModal = $('#view-case-modal');
        this.$imageUploadInput = $('.image-upload-input');
        this.$imageUploadButton = $('.image-upload-button');
        this.$cases = [];

        this.TAB_NAMES.forEach((function (tabName, index) {
            this.$TABS[tabName] = $('#panel' + (index + 1)).find('.cases-wrapper');
            this.getCases(tabName);
        }).bind(this));

        //getCase('1');
        this.$imageUploadButton.on('click', this.onImageUploadButtonClick);

        console.log("test");
    },

    render: function () {

    },

    onImageUploadButtonClick: function (event) {
        if (this.$imageUploadInput) {
            this.$imageUploadInput.click();
        }
        event.preventDefault(); // prevent navigation to "#"
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
    }
});