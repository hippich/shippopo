define(function(require) {
    require('dualstorage');
    var Collection = require('collection');
    var PageModel = require('models/page');

    return Collection.extend({
        remote: false,
        local: true,
        url: '/pages',
        storeName: 'pages',
        model: PageModel
    });
});
