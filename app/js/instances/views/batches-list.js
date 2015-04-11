define(function(require) {
    var BatchesList = require('views/batches-list');
    var batchesInstance = require('../collections/batches');

    return new BatchesList({
        collection: batchesInstance
    });
});
