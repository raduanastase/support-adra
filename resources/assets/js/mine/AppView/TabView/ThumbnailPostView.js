var /*$ = global.$ = global.jQuery = require('jquery'),*/
    Backbone = require('backbone'),
    template = require("./ThumbnailPostView.hbs");
var _ = require('underscore');
Backbone.$ = $;

var self; //MAKE THIS BETTER

module.exports = Backbone.View.extend({
    className: 'column view-case-template',

    events: {
        'click .thumbnail': 'onThumbClick'
    },

    initialize: function () {
        self = this;

        this.findCoverImage();
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        return this;
    },
    
    findCoverImage: function () {
        var coverImagePath;

        this.model.get('attachments').forEach(function (attachment) {
            if(attachment.is_cover_image) {
                if(!coverImagePath) {
                    coverImagePath = attachment.path;
                } else {
                    console.warn("The case with the id "+this.model.get('id')+' has more than one cover image!');
                }
            }
        }.bind(this));

        if(!coverImagePath) {
            coverImagePath = 'img/attachments/mock.png';
        }
        
        this.model.set('cover_image_path', coverImagePath);
    },

    onThumbClick: function () {
        self.trigger('show_post', this.model.get('id'));
    },

    //maybe make a base view with destroy and other reusable methods
    destroy: function() {
        // COMPLETELY UNBIND THE VIEW
        this.undelegateEvents();

        this.$el.removeData().unbind();

        // Remove view from DOM
        this.remove();
        Backbone.View.prototype.remove.call(this);

    }
});
