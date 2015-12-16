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

  destroyQuestion: function () {

  }
}



module.exports = ApiUtil;
