import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    this.store.createRecord('theme', {
      id: '0',
      className: 'defualt',
      name: 'Default'
    });
    return RSVP.hash({
      user: this.get('store').query('user', { id: 0 }),
      themes: this.get('store').findAll('theme')
    });
  }

});
