import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        question: this.get('question'),
        created_at: new Date()
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
