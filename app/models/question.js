import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  created_at: DS.attr()
});
