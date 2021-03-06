import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ui');
  this.route('root', { path: '/' });
  this.route('example', { path: '/:slug' });
});

export default Router;
