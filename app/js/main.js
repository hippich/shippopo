/* global require */
require.config({
    paths: {
        json           : '../bower_components/requirejs-plugins/src/json',
        text           : '../bower_components/requirejs-text/text',
        lodash         : '../bower_components/lodash/dist/lodash',
        backbone       : '../bower_components/backbone/backbone',
        relational     : '../bower_components/backbone-relational/backbone-relational',
        marionette     : '../bower_components/backbone.marionette/lib/backbone.marionette',
        modelmorph     : '../bower_components/backbone.modelmorph/morph',
        modal          : '../bower_components/backbone.bootstrap-modal/index',
        modaladapter   : '../bower_components/backbone-forms/distribution/adapters/backbone.bootstrap-modal',
        mutators       : '../bower_components/backbone.mutators/backbone.mutators',
        dualstorage    : '../bower_components/Backbone.dualStorage/backbone.dualstorage.amd',
        subset         : '../bower_components/backbone.collectionsubset/backbone.collectionsubset',
        jquery         : '../bower_components/jquery/dist/jquery',
        localStorage   : '../bower_components/backbone.localStorage/backbone.localStorage',
        tpl            : '../bower_components/requirejs-tpl/tpl',
        react          : '../bower_components/react/react-with-addons',
        JSXTransformer : '../bower_components/jsx-requirejs-plugin/js/JSXTransformer',
        jsx            : '../bower_components/jsx-requirejs-plugin/js/jsx',
        bootstrap      : '../bower_components/bootstrap/dist/js/bootstrap',

        ractive        : '../bower_components/ractive/ractive',
        rv             : '../bower_components/rv/rv',
        bbractive      : '../bower_components/ractive-adaptors-backbone/ractive-adaptors-backbone',

        'backbone-forms' : '../bower_components/backbone-forms/distribution.amd/backbone-forms',

        // Adapters
        underscore   : 'lib/underscore',
        form         : 'lib/form',

        // Overrides
        model      : 'models/model',
        collection : 'collections/collection'
    },

    shim: {
        lodash: {
            exports: '_'
        },

        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'lodash']
        },

        modaladapter: {
            deps: ['backbone']
        },

        modal: {
            deps: ['backbone']
        },

        localStorage: {
            exports: 'Backbone.LocalStorage'
        },

        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },

        modelmorph: {
            exports: 'Backbone.Morph',
            deps: ['backbone']
        },

        bootstrap: {
            deps: ['jquery']
        },

        relational: {
            deps: ['backbone']
        },

        subset: {
            deps: ['backbone', 'lodash'],
            exports: 'Backbone.CollectionSubset'
        }
    },
    waitSeconds: 5
});

require(['app'], function (app) {
    app.start();
});
