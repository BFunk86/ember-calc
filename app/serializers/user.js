import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  namespace: 'api'
});
