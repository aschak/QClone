var Dispatcher = require('../dispatcher/dispatcher.js'),
    ApiUtil = require('../util/api_util.js');


var QuestionActions = {
  fetchQuestions: function () {
    ApiUtil.fetchAllQuestions();
    // Dispatcher.dispatch({
    //   actionType: QuestionConstants.QUESTIONS_LOADING,
    //   questions: questions
    // });
  },

  fetchQuestion: function (id) {
    ApiUtil.fetchSingleQuestion(id);
  },

  createQuestion: function (question, callback) {
    ApiUtil.createQuestion(question, callback);
  },

  editQuestion: function (question) {
    ApiUtil.editQuestion(question);
  },

  destroyQuestion: function (id) {
    ApiUtil.destroyQuestion(id);
  }

};


module.exports = QuestionActions;
