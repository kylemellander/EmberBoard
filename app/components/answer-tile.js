import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
    downvote(answer) {
      this.sendAction('downvote', answer);
    }
  }
});
