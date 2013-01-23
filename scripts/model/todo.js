/*global define,console*/
define(["backbone"], function (Backbone) {
    "use strict";
    var Constructor = Backbone.Model.extend({
        defaults: {
            title: "default title",
            completed: false
        },

        initialize: function () {
            console.log('This model has been initialized.');
            this.on('change:title', function () {
                console.log('CHANGED TITLE');
            });
            this.on('change:completed', function () {
                console.log('CHANGED completed');
            });
            this.on('change:foo', function () {
                console.log('CHANGED foo');
            });
        }
    });

    return function (spec) {
        return new Constructor(spec);
    };
});