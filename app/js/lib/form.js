define(function(require) {
    var Backbone = require('backbone');

    require('backbone-forms');
    require('../bower_components/backbone-forms/distribution.amd/editors/list');
    require('modaladapter');

    return Backbone.Form;
});
