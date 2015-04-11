define(function(require) {
    var Marionette = require('marionette');

    return  Marionette.Region.extend({
        onShow: function(view){
            this.listenTo(view, "dialog:close", this.closeDialog);

            this.$el.modal({
                backdrop: true,
                keyboard: true,
                show: true
            });
        },

        closeDialog: function(){
            this.stopListening();
            this.close();
            this.$el.modal('hide');
        }
    });

});
