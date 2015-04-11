define(function (require) {
    'use strict';

    var Marionette = require('marionette');

    var routes = {
        default: function() {
            routes.home();

            var app = require('app');
            app.router.navigate('#batch/1', { trigger: true });
        },
        home: function() {
            var homeView = require('instances/views/pages/home');
            var app = require('app');
            app.main.show(homeView);

            homeView.batches.show( require('instances/views/batches-list') );
        },

        add: function() {
        },

        batch: function(batchId) {
            batchId = parseInt(batchId, 10) - 1;
            routes.home();
            var homeView = require('instances/views/pages/home');
            var batches = require('instances/collections/batches');
            var batch = batches.at(batchId);
            var BatchView = require('views/batch');
            homeView.current.show(new BatchView({ model: batch }));
        },

        showPage: function (/*pageName*/) {
/*            if (pageName == null) {
                pageName = 'home';
            }

            var pageModel = app.pages.findWhere({ name: pageName });

            app.vent.trigger('menu:activate', pageModel);

            if(pageName === 'home') {
                app.main.show(new HomeView({ model: pageModel }));
            } else {
                app.main.show(new PageView({ model: pageModel }));
            }

            if(pageName === 'about') {
                require(['modules/Example'], function(Example) {
                    Example.start();
                });
            } */
        },
        hello: function() {
        }
    };

    return Marionette.Controller.extend(routes);
});
