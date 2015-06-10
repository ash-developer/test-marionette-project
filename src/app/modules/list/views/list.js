application.TestModule.ListView = Marionette.CompositeView.extend({
    template: '#list-template',
    childViewContainer: '.content',
    childView: Marionette.ItemView.extend({
        template: '#item-template'
    })
});
