define(function(require) {
    require('dualstorage');
    var Collection = require('collection');
    var BatchModel = require('models/batch');

    return Collection.extend({
        remote: false,
        local: true,
        url: '/batches',
        storeName: 'batches',
        model: BatchModel
    });
});
