var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: function () {
        return {
            counties: [],
            loggedIn: false
        };
    },

    urlRoot: function(){
      return "/posts";
    },

    initialize: function () {
        //console.log("MODEL", this.attributes);
    }
});