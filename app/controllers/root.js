import Ember from 'ember';
import hbars from 'compiler';

var hbarsCompile = hbars.compile;

export default Ember.Controller.extend({
  hbarsTemplate: "hbars",
  model: {},
  jsonContext: Ember.computed('jsContext', function(){
    return JSON.stringify(this.get('jsContext'));
  }),
  jsContext: Ember.computed.alias('model'),
  jsonError: null,
  hbarsError: null,
  htmlbarsError: null,
  jsonContextObserver: Ember.observer('jsonContext', function() {
    try {
      this.set('jsonError', null);
      var context = JSON.parse(this.get('jsonContext'));
      this.set('jsContext', context);
    }catch(e){
      console.log(e);
      this.set('jsonError', e.message);
    }
  }).on('init'),
  htmlbarsTemplate: Ember.computed('hbarsTemplate', function(){
    var htmlbars;
    try {
      this.set('hbarsError', null);
      htmlbars = hbarsCompile(this.get('hbarsTemplate'));
    } catch(e) {
      console.log(e);
      this.set('hbarsError', e.message);
      return '';
    }
    return htmlbars;
  }),
  htmlbarsCompiled: Ember.computed('hbarsTemplate', function(){
    try {
      this.set('htmlbarsError', null);
      this.set('jsContext', Ember.$.extend({},this.get('jsContext')));
      return Ember.HTMLBars.compile(this.get('htmlbarsTemplate'));
    }catch(e){
      console.log(e);
      this.set('htmlbarsError', e.message);
      return '';
    }
  }),
  renderedHTML: Ember.computed('htmlbarsCompiled', 'jsonContext', function() {
    return Ember.$('#rendered').html();
  }),
});
