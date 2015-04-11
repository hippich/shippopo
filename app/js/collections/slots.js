define(function(require) {
    require('dualstorage');
    var Collection = require('collection');
    var SlotModel = require('models/slot');

    return Collection.extend({
        remote: false,
        local: true,
        url: '/slots',
        storeName: 'slots',
        model: SlotModel
    });
});
