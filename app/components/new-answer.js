import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        body: this.get('body'),
        name: this.get('name'),
        question: this.get('question'),
        rating: 0,
        created_at: new Date()
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
