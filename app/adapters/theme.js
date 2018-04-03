import DS from 'ember-data';
import $ from 'jquery';

export default DS.JSONAPIAdapter.extend({
  findMany() {
    return $.getJSON('https://s3.amazonaws.com/gavant-public/themes')
  }
});
