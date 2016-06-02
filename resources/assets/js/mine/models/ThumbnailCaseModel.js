var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: function () {
        return {
            file_path: 'empty url',
            case_name: 'Empty title',
            person_description: 'Empty description'
        };
    },
    initialize: function () {
        //console.log("MODEL", this.attributes);
    }
});
