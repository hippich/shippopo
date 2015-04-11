define(function(require) {
    var BatchesCollection = require('../../collections/batches');

    var batchesInstance = new BatchesCollection();

    batchesInstance.fetch({
        reset: true,
        success: function() {
            // If there are no batches as of yet, create empty one
            if (batchesInstance.length === 0) {
                var templatesInstance = require('../collections/templates');
                var firstTemplate = templatesInstance.at(0);
                var batch = firstTemplate.createBatch();
                batchesInstance.add(batch);
            }
        }
    });

    return batchesInstance;
});
