/*global require */
require.config({
    urlArgs: "version=v0.1",
        // The shim config allows us to configure dependencies for
        // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'lib/jquery/jquery.min',
        underscore: 'lib/underscore/lodash.min',
        backbone: 'lib/backbone/backbone',
        artist: 'model/artist',
        engineer: 'model/engineer'
    }
});

require(['app'], function (app) {
    "use strict";
    app.init();
});