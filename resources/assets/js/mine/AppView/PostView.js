var Backbone = require('backbone'),
    template = require("./PostView.hbs");
var ReadPostView = require("./PostView/ReadPostView");
var EditPostView = require("./PostView/EditPostView");

module.exports = Backbone.View.extend({
    className: 'full reveal',

    attributes: function () {
        return {
            id: 'view-case-modal',
            'data-reveal': ' '
        };
    },

    events: function () {
        return {
            'click .close-button': 'close'
        };
    },

    initialize: function () {
        this.$el.html(template(this.model.attributes));

        //this.readMode = true;
        this.readPostView = new ReadPostView({model: this.model});
        this.listenTo(this.readPostView, 'edit_mode', this.onEditMode);
        this.editPostView = new EditPostView({model: this.model});
        this.listenTo(this.editPostView, 'read_mode', this.onReadMode);
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        this.readPostView.render();
        this.$('.read-post-wrapper').append(this.readPostView.el);
        this.editPostView.render();
        this.$('.edit-post-wrapper').append(this.editPostView.el);

        this.readPostView.$el.show();
        this.editPostView.$el.hide();

        /*if(this.readMode) {
            this.readPostView.$el.show();
            this.editPostView.$el.hide();
        } else {
            this.editPostView.$el.show();
            this.readPostView.$el.hide();
        }*/

        return this;
    },

    delete: function () {
        this.model.destroy();
        this.close();
        location.reload();
    },

    open: function () {
        //console.log(this.$el[0]);
        this.$el.foundation('open');
    },

    close: function () {
        this.$el.foundation('close');
        this.$el.html('');
        Backbone.history.navigate('');
    },

    onEditMode: function () {
        console.log("edit mode");
        this.editPostView.$el.show();
        this.readPostView.$el.hide();
    },

    onReadMode: function () {
        this.readPostView.$el.show();
        this.editPostView.$el.hide();
    }
});
