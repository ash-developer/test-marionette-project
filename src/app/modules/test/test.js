'use strict';

application.TestModule = application.module('TestModule', function (TestModule, application, Backbone, Marionette, $, _) {

    TestModule.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'default': 'default'
        }
    });

    var controllers = new (Marionette.Controller.extend({
        default: function() {
            console.log('default');
        }
    }))();

    application.on('contacts:list', function () {
        Backbone.history.navigate('default');
        controllers.default();
    });

    TestModule.on('start', function () {
        new TestModule.Router({
            controller: controllers
        });
    });

});
