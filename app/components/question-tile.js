import Ember from 'ember';

export default Ember.Component.extend({
  editForm: false,
  actions: {
    showEdit() {
      if(prompt("What is the password") === "8"){
        this.set('editForm', true);
      } else {
        $(".km-main-container").prepend('<div class="ui message">That was not the right password.</div>');
        $(".ui.message").delay(3000).fadeOut(1000, function() {$(this).remove();});
      }
    },
    hideEdit() {
      this.set('editForm', false);
    },
    editQuestion(question) {
      var params = {
        author: this.get('author'),
        notes: this.get('notes'),
        title: this.get('title')
      };
      this.set('editForm', false);
      $(".km-main-container").prepend('<div class="ui message">Your changes have been made</div>');
      $(".ui.message").delay(3000).fadeOut(1000, function() {$(this).remove();});
      this.sendAction('editQuestion', question, params);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
