/*global define*/
define(["backbone"], function (Backbone) {
    "use strict";
    var Constructor = Backbone.Model.extend({
        defaults: {
            title: "default title",
            completed: false
        },
        initialize: function () {
            console.log('This model has been initialized.');
      }
    });
    return function (spec) {    
        return new Constructor(spec);
    };
});