define(function(require) {
    require('dualstorage');

    var Model = require('model');

    var PageModel = require('./page');
    var SlotModel = require('./slot');

    var PagesCollection = require('collections/pages');
    var SlotsCollection = require('collections/slots');

    return Model.extend({
        remote: false,
        local: true,
        storeName: 'batches',
        relations: [{
            name: 'pages',
            ids: 'pagesIds',
            collection: PagesCollection,
            model: PageModel
        }, {
            name: 'slots',
            ids: 'slotsIds',
            collection: SlotsCollection,
            model: SlotModel
        }],
        defaults: {
            sizex        : 218.45,
            sizey        : 282.7,
            margintop    : 12.85,
            marginbottom : 12.85,
            marginleft   : 3.2125,
            marginright  : 3.2125,
            pagesIds     : [],
            slotsIds     : []
        },
        schema: {
            sizex: {
                title: 'Page Width',
                type: 'Text',
                validators: ['required']
            },
            sizey: {
                title: 'Page Height',
                type: 'Text',
                validators: ['required']
            },
            margintop: {
                title: 'Top Margin',
                type: 'Text',
                validators: ['required']
            },
            marginbottom: {
                title: 'Bottom Margin',
                type: 'Text',
                validators: ['required']
            },
            marginleft: {
                title: 'Left Margin',
                type: 'Text',
                validators: ['required']
            },
            marginright: {
                title: 'Right Margin',
                type: 'Text',
                validators: ['required']
            }
        }
    });
});
