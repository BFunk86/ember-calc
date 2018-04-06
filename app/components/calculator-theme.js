import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  themes: service('themes'),
  router: service('-routing'),
  actions: {
    select(theme) {
      this.get('themes').change(theme);
      window.location.href = '/calculator';
    }
  }
});
