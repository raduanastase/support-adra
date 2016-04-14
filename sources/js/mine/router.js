"use strict";

var $ = global.$ = global.jQuery = require('jquery'),
    Backbone = require('backbone');
var MainView = require('./views/MainView');

Backbone.$ = $;

var $mainEl = $('.main');
var mainModel = new Backbone.Model({loggedIn: $mainEl.data('login')});
var mainView = new MainView({el: $mainEl, model: mainModel});

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
