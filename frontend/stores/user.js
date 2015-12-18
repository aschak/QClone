var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    UserConstants = require('../constants/user_constants.js');

var UserStore = new Store(AppDispatcher);

var _user = [];

var resetUser = function (user) {
  _user = user;
}

UserStore.all = function () {
  return _user.slice(0);
}

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);
      break;

  }
}

module.exports = UserStore;
