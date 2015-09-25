import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchQuestions() {
      var search = this.get('search');
      this.sendAction('searchQuestions', search);
    }
  }
});
