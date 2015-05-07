'use strict';

var application = new Marionette.Application();

application.on('start', function () {
    console.log('Marionette application was started!');

    if (Backbone.history) {
        Backbone.history.start();

        if (Backbone.history.fragment === '') {
            application.trigger('contacts:list');
        }
    }
});

