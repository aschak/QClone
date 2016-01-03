var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    UserConstants = require('../constants/user_constants.js');

var UserStore = new Store(AppDispatcher);

var _user = [],
    _currentUser = {};

var resetUsers = function (users) {
  _user = users;
};

var resetUser = function (user) {
  _user[user.id] = user;
};

var resetCurrentUser = function (currentUser) {
  _currentUser = currentUser;
};

UserStore.all = function () {
  return _user.slice(0);
};

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.profileTags = function () {
  var profileTags = [];

  if (_currentUser) {
    _currentUser.tags.forEach(function (tag) {
      profileTags.push(tag.tag_name);
    });
  }

  return profileTags;
};

UserStore.find = function (id) {
  var found;

  _user.forEach(function (user) {
    if (user.id === id) {
      found = user;
    }
  });

  return found;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      UserStore.__emitChange();
      break;

    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);
      UserStore.__emitChange();
      break;

    case UserConstants.CURRENT_USER_RECEIVED:
      resetCurrentUser(payload.currentUser);
      UserStore.__emitChange();
      break;

  }

};


module.exports = UserStore;
