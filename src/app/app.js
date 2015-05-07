'use strict';

(function () {

    var application = new Marionette.Application();

    application.ContactModel = Backbone.Model.extend({
        defaults: {
            phoneNumber: '+000 00 000 00 00'
        }
    });

    application.LayoutView = Marionette.LayoutView.extend({
        el: '#content',
        regions: {
            main: '#main-region',
            other: '#other-region'
        }
    });

    application.ListView = Marionette.LayoutView.extend({
        tagName: 'ul',
        className: 'list',
        template: function () {
            var html = '';

            for (var i = 0; i < 10; i++) {
                var item = new application.ItemView();
                html += item.render().$el.html();
            }

            return html;
        }
    });

    application.OtherView = Marionette.LayoutView.extend({
        template: '#other-template',
        events: {
            'click p': 'alertPhoneNumber'
        },

        alertPhoneNumber: function () {
            alert(this.model.escape('phoneNumber'));
        }
    });

    application.ItemView = Marionette.ItemView.extend({
        className: 'list-item',
        template: '#list-item-template'
    });

    application.on('before:start', function () {
        application.layout = new application.LayoutView();
    });

    application.on('start', function () {
        console.log('Marionette application was started!');

        var user = new application.ContactModel({
            firstName: 'First',
            lastName: 'Last'
        });

        var list = new application.ListView(),
            other = new application.OtherView({
                model: user
            });

        application.layout.main.show(list);
        application.layout.other.show(other);
    });

    application.start();

}());
