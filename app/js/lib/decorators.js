define(function(require) {
    var Ractive = require('ractive');

    Ractive.decorators.append = function(node, $el){
        function append() {
            if ($el) {
                node.appendChild($el);
            }
        }

        append();

        return {
            teardown: function(){
                // any clean-up    
            },
            update: function($update) {
                $el = $update;
                append();
            }
        };
    };
});
