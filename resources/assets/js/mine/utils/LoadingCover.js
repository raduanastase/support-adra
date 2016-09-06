var _ = require('underscore');
var $ = require('jquery');

var $loadingCover = $('.loading-cover');
var $body = $('body');

module.exports = {
    $el: function () {
        return $('.loading-cover');
    },

    cover: function ($element) {
        //$element = $element ? $element : $('body');

        //$element.append(this.$el);
        $body.append($loadingCover);
        $loadingCover.show();
    },

    uncover: function ($element) {
        /*$element = $element ? $element : $('body');

        $element.remove(this.$el);*/
        $loadingCover.hide();
    }
};