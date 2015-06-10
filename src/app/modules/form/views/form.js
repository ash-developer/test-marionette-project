'use strict';

application.FormModule.FormView = Marionette.ItemView.extend({
    model: new application.FormModule.Model({}),
    template: '#form-template',
    ui: {
        email: '#exampleInputEmail1',
        password: '#exampleInputPassword1',
        emailDisplay: '.email-display',
        passwordDisplay: '.password-display'
    },
    events: {
        'keyup @ui.email': 'emailChanged',
        'keyup @ui.password': 'passwordChanged'
    },

    emailChanged: function () {
        this.model.set('email', this.ui.email.val());
        this.ui.emailDisplay.text(this.model.get('email'));
    },
    passwordChanged: function () {
        this.model.set('password', this.ui.password.val());
        this.ui.passwordDisplay.text(this.model.get('password'));
    }
});
