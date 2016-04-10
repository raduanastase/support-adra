'use strict';

var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var ThumbnailCaseModel = require('../models/ThumbnailCaseModel');
Backbone.$ = $;

module.exports = Backbone.Collection.extend({
    model: ThumbnailCaseModel,
    url: function () {
        return './data.php?' + this.typeOfCases + '=1';
    },
    parse: function (data) {
        //console.log("parse", data[0]);
        return data[0];
    },
    initialize: function (models, options) {
        this.typeOfCases = options.typeOfCases;
    }
});
