'use strict';

application.TestModule = application.module('TestModule', function (TestModule, application, Backbone, Marionette, $, _) {

    var TestModuleRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'list': 'list',
            'list/details': 'details'
        },
        controller: {
            list: function() {
                application.theme.getRegion('content').show(new application.TestModule.ListView());
            },
            details: function() {
                application.theme.getRegion('content').show(new application.TestModule.DetailsView());
            }
        }
    });

    TestModule.on('start', function () {
        new TestModuleRouter();
    });

});
