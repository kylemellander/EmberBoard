import Ember from 'ember';

export default Ember.Component.extend({
  editForm: false,
  actions: {
    showEdit() {
      if(prompt("What is the password") === "8"){
        this.set('editForm', true);
      } else {
        $(".ui.form").prepend('<div class="ui message">That was not the right password.</div>');
        $(".ui.message").delay(3000).fadeOut(1000);
      }
    },
    editQuestion(question) {
      var params = {
        author: this.get('author'),
        notes: this.get('notes'),
        title: this.get('title')
      };
      this.set('editForm', false);
      $(".ui.form").prepend('<div class="ui message">Your changes have been made</div>');
      $(".ui.message").delay(3000).fadeOut(1000);
      this.sendAction('editQuestion', question, params);
    }
  }
});
