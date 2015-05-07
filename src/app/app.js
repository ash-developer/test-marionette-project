'use strict';

(function () {

    var application = new Marionette.Application();

    application.TestView = Marionette.ItemView.extend({
        id: 'test-view',
        tagName: 'span',
        className: 'test-view',
        template: "#test-template"
    });

    application.on("start", function () {
        console.log('Marionette application was started!');

        var testView = new application.TestView();
        $('#content').html(testView.render().$el);
    });

    application.start();

}());
