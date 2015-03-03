import Ember from 'ember';
import examples from 'hbars-web/models/examples';

export default Ember.Route.extend({
  model: function(){
    return examples[0];
  },
});
