import DS from 'ember-data';

export default DS.Model.extend({
  className: DS.attr('string', {
    defaultValue: 'default'
  }),
  name: DS.attr('string', {
    defaultValue: 'default'
  })
});
