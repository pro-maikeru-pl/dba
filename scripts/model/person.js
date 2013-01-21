/*global define*/
define([], function () {
    "use strict";
    return function (myName) {
        var that = {},
            name = myName;
        that.getLoudName = function () {
            return name.toUpperCase();
        };
        return that;
    };
});