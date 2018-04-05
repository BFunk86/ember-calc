import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  actions: {
    select(theme) {
      this.get('store').findRecord('user', 1)
        .then((person) => {
          person.set('theme', theme)
        })
    }
  }
});
