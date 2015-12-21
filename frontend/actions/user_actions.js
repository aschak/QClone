var Dispatcher = require('../dispatcher/dispatcher.js'),
    ApiUtil = require('../util/api_util.js');


var UserActions = {
  // userSignIn: function (user) {
  //   ApiUtil.userSignIn(user);
  // },
  //
  // userSignOut: function (user) {
  //   ApiUtil.userSignOut(user);
  // },

  fetchUser: function (id) {
    ApiUtil.fetchSingleUser(id);
  },

  createUser: function (user) {
    ApiUtil.createUser(user);
  }
};

module.exports = UserActions;
