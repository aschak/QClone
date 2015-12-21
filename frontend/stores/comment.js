var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    CommentConstants = require('../constants/comment_constants');


var CommentStore = new Store(AppDispatcher);
var _comments = [];


var resetComments = function (comments) {
  _comments = comments.slice(0);
};

var resetComment = function (comment) {
  _comments[comment.id] = comment;
};

var deleteComment = function (comment) {
  var idx = _comments.indexOf(comment);
  _comments.splice(idx, 1);
};

CommentStore.all = function () {
  return _comments.slice(0);
};

CommentStore.find = function (id) {
  var found;

  _comments.forEach(function (comment) {
    if (comment.id === id) {
      found = comment;
    }
  });

  return found;
};

CommentStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
      resetComments(payload.comments);
      CommentStore.__emitChange();
      break;

    case CommentConstants.COMMENT_RECEIVED:
      resetComment(payload.comment);
      CommentStore.__emitChange();
      break;

    case CommentConstants.COMMENT_DELETED:
      deleteComment(payload.comment);
      CommentStore.__emitChange();
      break;
  }
};


module.exports = CommentStore;
