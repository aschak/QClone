var Dispatcher = require('../dispatcher/dispatcher.js'),
    QuestionConstants = require('../constants/question_constants.js'),
    UserConstants = require('../constants/user_constants.js'),
    AnswerConstants = require('../constants/answer_constants.js');


var ApiActions = {

  receiveUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

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
  },

  deleteSingleQuestion: function (question) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_DELETED,
      question: question
    });
  },

  receiveAllAnswers: function (answers) {
    Dispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  },

  receiveSingleAnswer: function (answer) {
    Dispatcher.dispatch({
      actionType: AnswerConstants.ANSWER_RECIEVED,
      answer: answer
    });
  },

  deleteSingleAnswer: function (answer) {
    Dispatcher.dispatch({
      actionType: AnswerConstants.ANSWER_DELETED,
      answer: answer
    });
  }
};





module.exports = ApiActions;
