import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://s3.amazonaws.com',
  namespace: 'gavant-public',
  pathForType() {
    return 'themes'
  }
});
