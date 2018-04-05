import Model from 'ember-data/model'
import DS from 'ember-data';

const { attr } = DS;

export default Model.extend({
  className: attr('string', {
    defaultValue: 'default'
  }),
  name: attr('string', {
    defaultValue: 'default'
  })
});
