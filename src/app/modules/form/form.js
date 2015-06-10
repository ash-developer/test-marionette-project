'use strict';

application.FormModule = application.module('FormModule', function (FormModule, application, Backbone, Marionette, $, _) {

    var FormModuleRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'form': 'index'
        },
        controller: {
            index: function() {
                var form = new application.FormModule.FormView({
                    model: new application.FormModule.Model({})
                });
                application.theme.getRegion('content').show(form);
            }
        }
    });

    FormModule.on('start', function () {
        new FormModuleRouter();
    });

});
