/* eslint new-cap: 0 */
define(function(require) {
    require('mutators');
    
    var _ = require('lodash');

    var Backbone = require('backbone');
    var Model = Backbone.Model.extend({
        isSaving: function(options) {
            return options && options.success;
        },
        constructor: function() {
            var model = this;

            this.mutators    = _.clone(this.mutators) || [];
            this.relations   = _.clone(this.relations) || [];
            this.collections = _.clone(this.collections) || {};

            this.relations.forEach(function(rel) {
                model.mutators[rel.name] = {
                    get: function() {
                        var col = this.collections[rel.name];

                        if (!(col instanceof Backbone.Collection)) {
                            col = this.collections[rel.name] = new rel.collection();
                        }

                        return col;
                    },
                    transient: true
                };

                model.mutators[rel.ids] = {
                   get: function() {
                       var col = this.collections[rel.name];
                       return (col instanceof Backbone.Collection) ? col.pluck(rel.model.prototype.idAttribute) : [];
                   },
                   set: function(name, value) {
                       var model = this;

                       model.collections[rel.name] = new rel.collection();

                       if (! _.isArray(value)) {
                           return;
                       }

                       var models = [];

                       value.forEach(function(id) {
                           var modelData = {};
                           modelData[rel.model.prototype.idAttribute] = id;
                           var model = new rel.model(modelData);
                           model.fetch();
                           models.push(model);
                       });

                       model.collections[rel.name].add(models);
                   }
                };
            });

            Backbone.Model.apply(this, arguments);
        }
    });

    return Model;
});
