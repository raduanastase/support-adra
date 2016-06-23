"use strict";

var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone');
/*var MainView = require('./views/MainView');*/
var PostsView = require('./views/PostsView');

Backbone.$ = $;

/*var $mainEl = $('.main');
var mainModel = new Backbone.Model($mainEl.data('raw'));
var mainView = new MainView({el: $mainEl, model: mainModel});*/

module.exports = Backbone.Router.extend({

    routes: {
        "": "home",
        "posts/:id": "show",
        "employees/:id/reports": "reports"
    },

    initialize: function() {
        console.log("postsView creation");
        this.postsView = new PostsView({el: $('.posts-view-wrapper'), model: new Backbone.Model({loggedIn: /*window.pageData.userId > -1*/false})});
    },

    home: function () {
        //mainView.render();
        this.postsView.render();
    },

    show: function(id) {
        this.postsView.showPost(id);
    }
});
