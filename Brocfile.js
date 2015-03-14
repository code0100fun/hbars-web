/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var app = new EmberApp();
app.import(app.bowerDirectory + '/ember/ember-template-compiler.js');
app.import('vendor/loader_amd.js');
app.import(app.bowerDirectory + '/hbars/hbars.js');
module.exports = app.toTree();
