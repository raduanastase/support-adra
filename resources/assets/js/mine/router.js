"use strict";

var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone');
/*var MainView = require('./views/MainView');*/
var PostsView = require('./views/PostsView');

Backbone.$ = $;

/*var $mainEl = $('.main');
var mainModel = new Backbone.Model($mainEl.data('raw'));
var mainView = new MainView({el: $mainEl, model: mainModel});*/

var postsView = new PostsView({el: $('.posts-view-wrapper')});

module.exports = Backbone.Router.extend({

    routes: {
        "": "home",
        "employees/:id": "employeeDetails",
        "employees/:id/reports": "reports"
    },

    home: function () {
        //mainView.render();
        postsView.render();
    }
});
