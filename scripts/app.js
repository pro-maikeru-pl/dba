/*global define*/

define(["model/artist", "model/engineer"], function (artistCreator, engineerCreator) {
    "use strict";
    return {
        "init": function () {
            var dude1 = artistCreator("Tom"),
                dude2 = engineerCreator("Jerry");
            dude1.greet();
            dude2.greet();
        }
    };
});