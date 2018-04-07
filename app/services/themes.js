import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),
  name: 'Default',
  // The change method is used to update the theme
  change(value) {
    this.set('name', value);
    this.store.findRecord('user', 0)
      .then(function(user) {
        user.get('theme');
        user.set('theme', value);
      })
  }
});
