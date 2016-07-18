"use strict";

var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone');
/*var MainView = require('./views/MainView');*/
var AppView = require('./AppView');
var LoadingCover = require('./utils/LoadingCover');

Backbone.$ = $;

/*var $mainEl = $('.main');
 var mainModel = new Backbone.Model($mainEl.data('raw'));
 var mainView = new MainView({el: $mainEl, model: mainModel});*/

module.exports = Backbone.Router.extend({

    routes: {
        "": "home",
        "posts/:id": "show",
        "add-post": "addPost",
        "employees/:id/reports": "reports"
    },

    initialize: function () {
        console.log("postsView creation");
        LoadingCover.cover();

        this.appView = new AppView({
            el: $('.posts-view-wrapper'),
            model: new Backbone.Model({loggedIn: /*window.pageData.userId > -1*/false})
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
