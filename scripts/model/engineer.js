/*global define*/
define(['model/person', 'lib/others/console'], function (personCreator, console) {
    "use strict";
    return function (myName) {
        var that = personCreator(myName);
        that.greet = function () {
            console.log("I am an engineer and my name is " + that.getLoudName());
        };
        return that;
    };
});