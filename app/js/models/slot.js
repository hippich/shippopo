define(function(require) {
    require('dualstorage');

    var Model = require('model');

    return Model.extend({
        remote: false,
        local: true,
        storeName: 'slots',

        defaults: {
            width   : 102.8,
            height  : 85.581,
            top     : 0,
            left    : 0,
            content : ''
        }
    });
});
