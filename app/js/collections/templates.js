define(function(require) {
    var Collection = require('collection');
    var TemplateModel = require('models/template');

    return Collection.extend({
        storeName: 'slots',
        model: TemplateModel
    });
});
