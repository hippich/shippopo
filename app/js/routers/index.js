define(function(require) {
    'use strict';

    var Marionette = require('marionette');

    return Marionette.AppRouter.extend({
        appRoutes: {
            '': 'default',

            'add': 'add',
            'batch/:id': 'batch',

            '*actions': 'default'
        }
    });
});
