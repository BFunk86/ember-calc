import Service from '@ember/service';
import Model from 'ember-data/model'

export default Service.extend({
  name: 'Default',
  // The change method is used to update the theme
  change(value) {
    this.set('name', value);
  }
});
