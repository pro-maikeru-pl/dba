/*global define,console,alert*/
define([], function () {
    "use strict";
    var mode = "real",
        consoleSimulation = {
            "log": function (msg) {
                alert(msg);
            }
        };
    if (mode === "real" && console) {
        return console;
    }
    if (mode === "fake") {
        return consoleSimulation;
    }
    return {};
});