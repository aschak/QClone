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

  createQuestion: function () {
    ApiUtil.createQuestion();
  },

  editQuestion: function (id) {
    ApiUtil.editQuestion(id);
  },

  destroyQuestion: function (id) {
    ApiUtil.destroyQuestion(id);
  }

}


module.exports = QuestionActions;
