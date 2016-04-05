var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
require('what-input');
require('foundation-sites');
require('./HandlebarsHelpers');
Backbone.$ = $;

var Router = require('./router');
var router = new Router();

$("body").on("click", ".back-button", function (event) {
    event.preventDefault();
    window.history.back();
});

Backbone.history.start();

$(document).foundation();