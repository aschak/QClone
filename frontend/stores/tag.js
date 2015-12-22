var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    TagConstants = require('../constants/tag_constants.js');

var TagStore = new Store(AppDispatcher);

var _tags = [];


var resetTags = function (tags) {
  _tags = tags.slice(0);
};

TagStore.all = function () {
  return _tags.slice(0);
};

TagStore.find = function (id) {
  var found;

  _tags.forEach(function (tag) {
    if (tag.id === id) {
      found = tag;
    }
  });

  return found;
};

TagStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TagConstants.TAGS_RECEIVED:
      resetTags(payload.tags);
      TagStore.__emitChange();
      break;

  }
};



module.exports = TagStore;
