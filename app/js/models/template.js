/* eslint no-new: 0 */
define(function(require) {
    var Model = require('model');

    var BatchModel = require('./batch');
    var PageModel = require('./page');
    var SlotModel = require('./slot');

    return Model.extend({
        createBatch: function() {
            var batch = new BatchModel({
                name         : this.get('name'),
                sizex        : this.get('sizex'),
                sizey        : this.get('sizey'),
                margintop    : this.get('margintop'),
                marginleft   : this.get('marginleft'),
                marginbottom : this.get('marginbottom'),
                marginright  : this.get('marginright')
            });

            this.get('slots').forEach(function(slot) {
                var newSlot = new SlotModel({
                    top    : slot.top,
                    left   : slot.left,
                    height : slot.height,
                    width  : slot.width
                });

                newSlot.save(); // to get ID

                batch.get('slots').add(newSlot);
            });

            // Page should be created after slots, since pages will use batch's slots
            // info to create its own slots.
            var page = new PageModel();

            batch.get('slots').forEach(function(slot) {
                var newSlot = new SlotModel({
                    top    : slot.get('top'),
                    left   : slot.get('left'),
                    height : slot.get('height'),
                    width  : slot.get('width')
                });

                page.get('slots').add(newSlot);
                newSlot.save(); // to get ID
            });

            page.save(); // to get ID

            batch.get('pages').add(page);

            batch.save();

            return batch;
        },
        defaults: {
            "name"         : "3 1/3 in x 4 in (6pcs)",
            "sizex"        : 218.45,
            "sizey"        : 282.7,
            "margintop"    : 12.85,
            "marginleft"   : 3.2125,
            "marginbottom" : 12.85,
            "marginright"  : 3.2125,
            "slots"        : [{
                "top"    : 0,
                "left"   : 0,
                "height" : 77.43,
                "width"  : 102.8
            },{
                "top"    : 0,
                "left"   : 107.8,
                "height" : 77.43,
                "width"  : 102.8
            },{
                "top"    : 77.43,
                "left"   : 0,
                "height" : 77.43,
                "width"  : 102.8
            },{
                "top"    : 77.43,
                "left"   : 107.8,
                "height" : 77.43,
                "width"  : 102.8
            },{
                "top"    : 154.86,
                "left"   : 0,
                "height" : 77.43,
                "width"  : 102.8
            },{
                "top"    : 154.86,
                "left"   : 107.8,
                "height" : 77.43,
                "width"  : 102.8
            }]
        }
    });
});
