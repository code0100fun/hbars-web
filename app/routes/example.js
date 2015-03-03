import Ember from 'ember';
import examples from 'hbars-web/models/examples';

export default Ember.Route.extend({
  model: function(params){
    var example;
    for(var i = 0; i < examples.length; i++){
      var ex = examples[i];
      if(ex.slug === params.slug){
        example = ex;
        Ember.set(ex, 'active', true);
      }else{
        Ember.set(ex, 'active', false);
      }
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
  templateName: 'root',
  controllerName: 'root'
});
