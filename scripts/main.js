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
		backbone: 'lib/backbone/backbone'
	}
});

require(['app'], function (appCreator) {
  app1 = appCreator('foo');
  app2 = appCreator('bar');
  console.log(app1.getName());
  console.log(app2.getName());
});