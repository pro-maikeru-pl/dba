/*global define,console*/

define(["model/todo", "artist", "engineer"], function (todoCreator, artistCreator, engineerCreator) {
    "use strict";
    return {
        "init": function () {
            var dude1 = artistCreator("Tom"),
                dude2 = engineerCreator("Jerry");
            dude1.greet();
            dude2.greet();
            this.backboning();
        },
        "backboning": function () {
            var todo1 = todoCreator(),
                todo2 = todoCreator({
                    "title": "Some not default title"
                });
            console.log(todo1);
            console.log(todo2);
        }
    };
});