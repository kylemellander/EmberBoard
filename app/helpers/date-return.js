import Ember from 'ember';

export function dateReturn(params/*, hash*/) {
  var result = moment(params[0]).fromNow();
  return result;
}

export default Ember.Helper.helper(dateReturn);
