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
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
      $(".km-main-container").prepend('<div class="ui message">Your question has been deleted</div>');
      $(".ui.message").delay(3000).fadeOut(1000, function() {$(this).remove();});
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save()
      })
      this.transitionTo('question');
      $(".km-answer-form textarea").val("");
      $(".km-answer-form input").val("");
    }
  }
});
