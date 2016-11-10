"use strict";

var $ = require('jquery'),
    Backbone = require('backbone');
/*var MainView = require('./views/MainView');*/
var AppView = require('./AppView');
var LoadingCover = require('./utils/LoadingCover');

module.exports = Backbone.Router.extend({

    routes: {
        "": "home",
        "posts/:id": "show",
        "add-post": "addPost",
        "employees/:id/reports": "reports"
    },

    initialize: function () {
        LoadingCover.cover();

        this.appView = new AppView({
            el: $('.posts-view-wrapper'),
            model: new Backbone.Model({
                counties: window.pageData.counties,
                loggedIn: window.pageData.userId > -1,
                csrfToken: window.pageData.csrfToken
            })
        });
        this.appView.render();
    },

    home: function () {
        //mainView.render();
        //this.appView.render();
    },

    show: function (id) {
        this.appView.showPost(id);
    },

    addPost: function () {
        this.appView.addPost();
    }
});
