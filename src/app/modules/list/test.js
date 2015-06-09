'use strict';

application.TestModule = application.module('TestModule', function (TestModule, application, Backbone, Marionette, $, _) {

    var TestModuleRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'list': 'list',
            'list/details/:id': 'details'
        },
        controller: {
            list: function() {
                var list = new application.TestModule.ListView({
                    collection: new application.TestModule.List()
                });

                application.theme.getRegion('content').show(new application.LoaderView());

                list.collection.fetch({
                    success: function () {
                        application.theme.getRegion('content').show(list);
                    }
                });
            },
            details: function(id) {
                var details = new application.TestModule.DetailsView({
                    model: new application.TestModule.Item({ id: id })
                });

                application.theme.getRegion('content').show(new application.LoaderView());

                details.model.fetch({
                    success: function () {
                        application.theme.getRegion('content').show(details);
                    }
                });
            }
        }
    });

    TestModule.on('start', function () {
        new TestModuleRouter();
    });

});
