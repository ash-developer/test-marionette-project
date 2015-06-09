'use strict';

application.TestModule.Item = Backbone.Model.extend({
    url: function () {
        return 'fakes/list/' + this.id + '.json';
    }
});

application.TestModule.List = Backbone.Collection.extend({
    url: 'fakes/list.json',
    model: application.TestModule.Item
});
