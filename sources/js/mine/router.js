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
//        homeView.delegateEvents();
        //mainView.slidePage(homeView.$el);
        mainView.render();
    }

    /*employeeDetails: function (id) {
        console.log("employeeDetails");
        var employee = new models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                mainView.slidePage(new EmployeeView({model: data}).$el);
            }
        });
    },

    reports: function (id) {
        console.log("reports");
        var employee = new models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                mainView.slidePage(new ReportsView({model: data}).$el);
            }
        });
    }*/

});
