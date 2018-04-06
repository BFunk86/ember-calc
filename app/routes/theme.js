import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default Route.extend({
  model() {
    this.store.createRecord('theme', {
      id: '0',
      className: 'defualt',
      name: 'Default'
    });
    return this.store.findAll('theme');
  },
  // Change the model name to themes to make the template more readable
  setupController(controller, model) {
    set(controller, 'themes', model)
  }
});
