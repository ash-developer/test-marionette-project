'use strict';

application.module('TestModule', function (TestModule, application, Backbone, Marionette, $, _) {

    TestModule.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'default': 'default'
        }
    });

    var controllers = {
        default: function() {
            console.log('default');
        }
    };

    TestModule.on('start', function () {
        new TestModule.Router({
            controller: controllers
        });
    });

});
