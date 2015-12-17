var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    QuestionConstants = require('../constants/question_constants.js');


var QuestionStore = new Store(AppDispatcher);
var _questions = [];

var resetQuestions = function (questions) {
  _questions = questions.slice(0);
};

var resetQuestion = function (question) {
  _questions[question.id] = question;
}

var deleteQuestion = function (question) {
  var idx = _questions.indexOf(question);
  _questions.splice(idx, 1);
}

QuestionStore.all = function () {
  return _questions.slice(0);
}

QuestionStore.find = function (id) {
  return _questions[id];
}

QuestionStore.__onDispatch = function (payload) {
    switch(payload.actionType) {
      case QuestionConstants.QUESTIONS_RECEIVED:
        resetQuestions(payload.questions);
        break;

      case QuestionConstants.QUESTION_RECEIVED:
        resetQuestion(payload.question);
        break;

      case QuestionConstants.QUESTION_DELETED:
        deleteQuestion(payload.question);
        break;
    }

  QuestionStore.__emitChange();
}


module.exports = QuestionStore;
