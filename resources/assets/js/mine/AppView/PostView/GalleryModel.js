var Backbone = require('backbone');

module.exports = Backbone.Model.extend({//MAYBE THIS MODEL ISN'T USEFUL
    defaults: function () {
        return {
            pictures: [],
            loggedIn: false
        };
    },

    initialize: function () {
        this.on('change:pictures', this.onPicturesChanged);
    },

    onPicturesChanged: function () {
        var pictures = this.get('pictures');

        if(pictures) {
            pictures.forEach(function (picture, index) {
                picture.filePath = picture.file_path;
                picture.isCoverImage = picture.is_cover_image == 1;
                picture.isPublic = picture.privat_type == 1 || this.get('loggedIn');
                picture.id = index;

                delete picture.file_path;
                delete picture.is_cover_image;
                delete picture.privat_type;
            }.bind(this));

            this.set('pictures', pictures);
            
            return this;
        }
    }
});
