import Ember from 'ember';
import examples from 'hbars-web/models/examples';

export default Ember.Route.extend({
  model: function(){
    var example = examples[0];
    for(var i = 0; i < examples.length; i++){
      Ember.set(examples[i], 'active', examples[i] === example);
    }
    return example;
  },
  setupController: function(controller, model){
    for(var i = 0; i < examples.length; i++){
      var example = examples[i];
      Ember.set(example, 'active', example === model);
    }
    controller.set('model', model);
    controller.set("examples", examples);
  },
});
