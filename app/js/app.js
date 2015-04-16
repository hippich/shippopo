define(function(require) {
    require('bbractive');
    require('lib/decorators');

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
                adapt    : ['Backbone'],
                el       : $('#main'),
                template : tpl,
                data     : {
                    batch : batch
                }
            });

            form.render();

            batch.on('change', function() {
                form.setValue(batch.attributes);
            });

            form.on('change', function() {
                form.commit();
            });

            window.f = form;
            window.b = batch;

            appView.set('batchControls', form.el);

            return appView;
        }
    };
});
