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
            var tmp,
                todo1 = todoCreator(),
                todo2 = todoCreator({
                    "title": "Some not default title"
                }),
                todo3 = todoCreator({
                    "title": "Some completed title",
                    completed: true,
                    additionalAttribute: 5
                });
            console.log(todo1.get("title"));
            todo1.set({
                title: 'changed',
                completed: 4
            });
            todo1.set({
                title: 'changed',
                completed: 5
            });
//            todo1.set('title', 'changed 2');
//            todo1.set('completed', true);
//            todo1.set('foo', true);
            console.log(todo1.attributes);
        }
    };
});