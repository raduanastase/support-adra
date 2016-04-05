"use strict";

var $ = require('jquery')(window),
    Backbone = require('backbone');

Backbone.$ = $;

var MainView = require('./views/MainView'),
    mainView = new MainView();

module.exports = Backbone.Router.extend({

    routes: {
        "": "home",
        "employees/:id": "employeeDetails",
        "employees/:id/reports": "reports"
    },

    home: function () {
        console.log("home");
        mainView.render();
    }
});
