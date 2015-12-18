var Dispatcher = require('../dispatcher/dispatcher.js'),
    ApiUtil = require('../util/api_util.js');


var AnswerActions = {
  fetchAnswers: function () {
    ApiUtil.fetchAllAnswers();
  },

  fetchAnswer: function (id) {
    ApiUtil.fetchSingleQuestion(id);
  },

  createAnswer: function (answer) {
    ApiUtil.createAnswer();
  },

  editQuestion: function (answer) {
    ApiUtil.editAnswer(answer);
  },

  destroyAnswer: function (id) {
    ApiUtil.destroyAnswer(id);
  }

};

module.exports = AnswerActions;
