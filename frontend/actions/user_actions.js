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

  fetchUsers: function () {
    ApiUtil.fetchAllUsers();
  },

  fetchCurrentUser: function () {
    ApiUtil.fetchCurrentUser();
  },

  createUser: function (user) {
    ApiUtil.createUser(user);
  },

  updateProfileTags: function (checkedTags) {
    ApiUtil.updateProfileTags(checkedTags);
  }
};

module.exports = UserActions;
