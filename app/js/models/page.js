define(function(require) {
    require('dualstorage');

    var Model = require('model');
    var SlotModel = require('./slot');
    var SlotsCollection = require('collections/slots');

    return Model.extend({
        remote: false,
        local: true,
        storeName: 'pages',

        relations: [{
            name: 'slots',
            ids: 'slotsIds',
            collection: SlotsCollection,
            model: SlotModel
        }]
    });
});
