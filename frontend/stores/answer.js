var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    AnswerConstants = require('../constants/answer_constants.js');

var AnswerStore = new Store(AppDispatcher);
var _answers = [];

var resetAnswers = function (answers) {
  _answers = answers.slice(0);
}

var resetAnswer = function (answer) {
  _answers[answer.id] = answer;
}

var deleteAnswer = function (answer) {
  var idx = _answers.indexOf(answer);
  _answers.splice(idx, 1);
}

AnswerStore.all = function () {
  return _answers.slice(0);
}

AnswerStore.find = function () {
  var found;

  _answers.forEach(function (answer) {
    if (answer.id = id) {
      found = answer;
    }
  })

  return found;
}


AnswerStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case AnswerConstants.ANSWERS_RECEIVED:
      resetAnswers(payload.answers)
      AnswerStore.__emitChange();
      break;

    case AnswerConstants.ANSWER_RECIEVED:
      resetAnswer(payload.answer);
      AnswerStore.__emitChange();
      break;

    case AnswerConstants.ANSWER_DELETED:
      deleteAnswer(payload.answer);
      AnswerStore.__emitChange();
      break;
  }
}



module.exports = AnswerStore;
