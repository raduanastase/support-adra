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
        this.listenTo(this.readPostView, 'delete_post', this.delete);
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

        this.readPostView.delegateEvents();
        this.editPostView.delegateEvents();

        return this;
    },

    delete: function () {
        this.model.destroy();
        this.close();
        location.reload();
    },

    open: function () {
        this.$el.foundation('open');
    },

    close: function () {
        this.$el.foundation('close');
        this.$el.html('');
        Backbone.history.navigate('');
    },

    onEditMode: function () {
        this.editPostView.$el.show();
        this.readPostView.$el.hide();
    },

    onReadMode: function () {
        this.render();
    }
});
