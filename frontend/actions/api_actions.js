var Dispatcher = require('../dispatcher/dispatcher.js'),
    QuestionConstants = require('../constants/question_constants.js');


var ApiActions = {
  receiveAllQuestions: function (questions) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    });
  },

  receiveSingleQuestion: function (question) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_RECEIVED,
      question: question
    });
  }
};



module.exports = ApiActions;
