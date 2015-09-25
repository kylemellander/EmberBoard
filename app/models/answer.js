import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  name: DS.attr(),
  created_at: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
