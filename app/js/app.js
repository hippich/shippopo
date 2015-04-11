define(function(require) {
    require('bbractive');

    var Ractive = require('ractive');
    var tpl = require('rv!templates/index');
    var $ = require('jquery');
    var Form = require('form');

    return {
        start: function() {
            var batches = require('instances/collections/batches');
            var batch = batches.at(0);

            var form = new Form({ model: batch });

            var appView = window.appView = new Ractive({
                adapt: ['Backbone'],
                el: $('#main'),
                template: tpl,
                data: {
                    batch: batch
                }
            });

            setTimeout(function() {
                form.render();
                appView.set('batchControls', form.el);
            }, 5000);

            return appView;
        }
    };
});
