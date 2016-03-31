'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var foundation = require('foundation-sites-loader');
Backbone.$ = $;

var TAB_NAMES = ['approved', 'resolved', 'pending', 'rejected'];
var MODAL_VIEW_VALUES = [
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
var THUMBNAIL_VALUES = [
    ['.thumbnail-img', 'file_path'],
    ['.case-name', 'case_name'],
    ['.case-description', 'person_description']
];
var $TABS = {};

var $errorModal = $('#error-modal');
var $viewCaseTemplate = $('.view-case-template');
var $addCaseForm = $('#add-case-form');
var $viewCaseModal = $('#view-case-modal');
var $imageUploadInput = $('.image-upload-input');
var $imageUploadButton = $('.image-upload-button');
var $cases = [];

module.exports = Backbone.View.extend({
    initialize: function () {
        TAB_NAMES.forEach(function (tabName, index) {
            $TABS[tabName] = $('#panel' + (index + 1)).find('.cases-wrapper');
            getCases(tabName);
        });

        //getCase('1');
        $imageUploadButton.on('click', onImageUploadButtonClick);

        console.log("test");
    },

    render: function () {

    },

    onImageUploadButtonClick: function (event) {
        if ($imageUploadInput) {
            $imageUploadInput.click();
        }
        event.preventDefault(); // prevent navigation to "#"
    },

    getCases: function (typeOfCases) {
        $.ajax({
            type: 'GET',
            url: 'data.php?' + typeOfCases + '=1',
            dataType: 'json',
            success: function (data) {
                onGetCasesSuccess(data[0], typeOfCases);
            },
            error: onGetCasesError
        })
    },

    onGetCasesSuccess: function (data, typeOfCases) {
        //console.log(typeOfCases, data);
        data.forEach(function (element, index) {
            console.log(typeOfCases);
            $cases.push($viewCaseTemplate.clone());//todo find out why this doesn't work
            THUMBNAIL_VALUES.forEach(function (value, idx) {
                console.log(typeOfCases, element[value[1]]);
                if (idx == 0) {
                    $cases[index].find(value[0]).attr('src', element[value[1]]);
                } else {
                    $cases[index].find(value[0]).text(element[value[1]]);
                }
            });
            $cases[index].removeClass('view-case-template');
            $TABS[typeOfCases].append($cases[index]);
        });
        $TABS[typeOfCases].foundation();
    },

    onGetCasesError: function (data) {
        $errorModal.foundation('open');
    },

    getCase: function (id) {
        $.ajax({
            type: 'GET',
            url: 'data.php?case_id=' + id,
            dataType: 'json',
            success: onGetCaseSuccess,
            error: onGetCaseError
        })
    },

    onGetCaseSuccess: function (data) {
        MODAL_VIEW_VALUES.forEach(function (value) {
            $viewCaseModal.find(value[0]).text(element['0'][0][value[1]]);
        });
    },

    onGetCaseError: function (data) {
        $errorModal.foundation('open');
    }
});

$(document).foundation();