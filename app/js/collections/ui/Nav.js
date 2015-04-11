/*global define */

define([
       'backbone',
       'models/ui/Page'
], function (Backbone, Page) {
    'use strict';

    return Backbone.Collection.extend({
        model: Page
    });
});
