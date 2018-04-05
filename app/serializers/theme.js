import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  host: '//s3.amazonaws.com',
  namespace: '/gavant-public/themes'
});
