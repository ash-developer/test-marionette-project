application.TestModule.ListView = Marionette.CollectionView.extend({
    childView: Marionette.ItemView.extend({
        template: '#list-template'
    })
});
