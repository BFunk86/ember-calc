import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.get('store').createRecord('user', {
      name: 'ember',
      theme: 'default'
    })
  }
});
