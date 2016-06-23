'use strict';

//var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var DashboardView = require('./MainView/DashboardView');
var AddCaseView = require('./MainView/AddCaseView');
var EditCaseView = require('./MainView/EditCaseView');
var ModalErrorView = require('./MainView/ModalErrorView');
var template = require("../templates/Main.hbs");
Backbone.$ = $;

/*$(function () {
 //DO I NEED THIS??

 });*/


module.exports = Backbone.View.extend({
    events: {
     'click .add-case-button': 'onAddCaseButtonClick'//this works if the element is inside the view !!!!
     },

    initialize: function () {
        this.$el.html(template(this.model.attributes));

        this.dashboardModel = new Backbone.Model({counties: this.model.get('counties'), loggedIn: this.model.get('loggedIn')});
        this.dashboardView = new DashboardView({model: this.dashboardModel, el: this.$('.dashboard')});
        this.addPostModel = new Backbone.Model({counties: this.model.get('counties'), loggedIn: this.model.get('loggedIn')});
        this.addPostView = new AddCaseView({model: this.addPostModel});
        this.$el.append(this.addPostView.render().el);
        //console.log('ttta',this.addCaseView.el);
         /*this.editCaseView = new EditCaseView();
         this.modalErrorView = new ModalErrorView();*/


    },

    render: function () {
        this.dashboardView.render();
        //added this because tabs were not working
        //$(document).foundation();//is there another way?
    },

    onAddCaseButtonClick: function () {
        this.addPostView.open();
    }
});