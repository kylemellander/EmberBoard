import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['rating:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortProperties'),
  actions: {
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
    downvote(answer) {
      this.sendAction('downvote', answer);
    }
  }
});
