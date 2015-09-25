import Ember from 'ember';

export default Ember.Route.extend({
  model(question) {
    return this.store.findRecord('question', question.question_id);
  },
  actions: {
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined && params[key]!=="") {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    deleteQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
      $(".km-main-container").prepend('<div class="ui message">Your question has been deleted</div>');
      $(".ui.message").delay(3000).fadeOut(1000, function() {$(this).remove();});
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save();
      this.transitionTo('question');
    }
  }
});
