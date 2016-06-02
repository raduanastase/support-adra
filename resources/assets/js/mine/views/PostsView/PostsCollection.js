'use strict';

//var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Collection.extend({
    url: function () {
        return 'posts/';
    },
    
    initialize: function () {

    }
});
