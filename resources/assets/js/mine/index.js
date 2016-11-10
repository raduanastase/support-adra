//var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
require('./utils/HandlebarsHelpers');
Backbone.$ = $;

//adding CSRF TOKEN to all ajax requests
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var Router = require('./router');
var router = new Router();

$("body").on("click", ".back-button", function (event) {
    event.preventDefault();
    window.history.back();
});

Backbone.history.start(/*{pushState: true}*/);//todo find out why are there backend issues with this alternative
$(document).foundation();