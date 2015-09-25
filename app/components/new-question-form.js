import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
        created_at: new Date()
      };
      this.sendAction("saveQuestion", params);
    }
  }
});
