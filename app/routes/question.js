import Ember from 'ember';

export default Ember.Route.extend({
  model(question) {
    return this.store.findRecord('question', question.question_id);
  },
  actions: {
    editQuestion(question, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined && params[key]!=="") {
          question.set(key, params[key]);
        }
      });
      debugger;
      question.save();
      this.transitionTo('question');
    }
  }
});
