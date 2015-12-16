var ApiActions = require('../actions/api_actions.js');



var ApiUtil = {
  fetchAllQuestions: function () {
    $.ajax({
      url: '/api/questions',
      success: function (questions) {
        ApiActions.receiveAllQuestions(questions);
      }
    });
  },

  fetchSingleQuestion: function (id) {
    $.ajax({
      url: '/api/questions/' + id,
      success: function (question) {
        ApiActions.receiveSingleQuestion(question);
      }
    });
  },

  createQuestion: function () {
    $.ajax({
      url: '/api/questions',
      type: 'POST',
      success: function (question) {
        ApiActions.receiveQuestion
      }
    });
  },

  editQuestion: function () {

  },

  destroyQuestion: function (id) {
  }
}



module.exports = ApiUtil;
