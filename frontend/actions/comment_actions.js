var Dispatcher = require('../dispatcher/dispatcher.js'),
    ApiUtil = require('../util/api_util.js');

var CommentActions = {
  fetchComments: function () {
    ApiUtil.fetchAllComments();
  },

  fetchAnswer: function (id) {
    ApiUtil.fetchSingleComment(id);
  },

  createComment: function (comment) {
    ApiUtil.createComment(comment);
  },

  editComment: function (comment) {
    ApiUtil.editComment(comment);
  },

  destroyComment: function (id) {
    ApiUtil.destroyComment(id);
  }
};



module.exports = CommentActions;
