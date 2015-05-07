'use strict';

(function () {

    var application = new Marionette.Application();

    application.ListView = Marionette.ItemView.extend({
        tagName: 'ul',
        className: 'list',
        template: function () {
            var html = '';

            for (var i = 0; i < 10; i++) {
                var item = new application.ItemView();
                html += item.render().$el.html();
            }

            return html;
        }
    });

    application.ItemView = Marionette.ItemView.extend({
        className: 'list-item',
        template: '#list-item-template'
    });

    application.on("start", function () {
        console.log('Marionette application was started!');

        var list = new application.ListView();
        $('#content').html(list.render().$el);
    });

    application.start();

}());
