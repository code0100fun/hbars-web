/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var app = new EmberApp();
app.import('bower_components/ember/ember-template-compiler.js');
app.import(app.bowerDirectory + '/hbars/hbars.amd.js',
{
  'hbars/compiler': [ 'compiler' ]
});
module.exports = app.toTree();
