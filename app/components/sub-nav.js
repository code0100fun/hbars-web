import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['subnav'],
  classNameBindings: ['open'],
  open: false,
  actions: {
    toggle: function() {
      this.toggleProperty('open');
    },
    loadExample: function(example){
      this.sendAction("loadExample", example);
    }
  }
});
