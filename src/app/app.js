'use strict';

(function () {

    var application = new Marionette.Application();

    application.ContactModel = Backbone.Model.extend({
        defaults: {
            phoneNumber: '+000 00 000 00 00'
        }
    });

    application.Contacts = Backbone.Collection.extend({
        model: application.ContactModel,
        comparator: function (model) {
            return model.escape('firstName') + ' ' + model.escape('lastName');
        }
    });

    application.LayoutView = Marionette.LayoutView.extend({
        el: '#content',
        regions: {
            main: '#main-region',
            other: '#other-region'
        }
    });

    application.ItemView = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'list-item',
        template: '#list-item-template',
        events: {
            'click li': 'alertPhoneNumber'
        },

        alertPhoneNumber: function () {
            alert(this.model.escape('phoneNumber'));
        }
    });

    application.ListView = Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: application.ItemView
    });

    application.OtherView = Marionette.LayoutView.extend({
        template: '#other-template'
    });

    application.on('before:start', function () {
        application.layout = new application.LayoutView();
    });

    application.on('start', function () {
        console.log('Marionette application was started!');

        var contacts = new application.Contacts([
            {
                firstName: 'First3',
                lastName: 'Last2'
            },
            {
                firstName: 'First3',
                lastName: 'Last1'
            },
            {
                firstName: 'First2',
                lastName: 'Last2',
                phoneNumber: '123'
            }
        ]);

        var list = new application.ListView({
                collection: contacts
            }),
            other = new application.OtherView();

        application.layout.main.show(list);
        application.layout.other.show(other);
    });

    application.start();

}());
