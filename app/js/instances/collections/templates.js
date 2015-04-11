define(function(require) {
    var TemplateCollection = require('../../collections/templates');
    var data = require('json!data/templates.json');

    return new TemplateCollection(data);
});
