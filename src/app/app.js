'use strict';

var application = new Marionette.Application();

application.on('start', function () {
    console.log('Marionette application was started!');

    application.rootLayout = new RootLayoutView();
    application.rootLayout.render();

    application.theme = new ApplicationLayoutView();
    application.rootLayout.getRegion('root').show(application.theme);

    if (Backbone.history) {
        Backbone.history.start();

        if (Backbone.history.fragment === '') {
            Backbone.history.navigate('default');
        }
    }
});
