import Model from 'ember-data/model'
import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default Model.extend({
  theme: belongsTo('theme'),
  name: attr('string')
});
