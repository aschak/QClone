var ApiActions = require('../actions/api_actions.js');


var ApiUtil = {

  createUser: function (user) {
    $.post('users', {user: user}, function (user) {
      ApiActions.receiveUser(user);
    });
  },

  signUserIn: function (user) {
    $.post('session', {user: user}, function (user) {
      ApiActions.receiveUser(user);
    });
  },

  signUserOut: function (user) {
    $.ajax({
      url: 'session',
      type: 'DELETE',
      data: {user: user},
      success: function (user) {

      }
    });
  },


  fetchAllQuestions: function () {
    // $.ajax({
    //   url: '/api/questions',
    //   success: function (questions) {
    //     ApiActions.receiveAllQuestions(questions);
    //   }
    // });

    $.get('/api/questions', function (questions) {
      ApiActions.receiveAllQuestions(questions);
    });
  },

  fetchSingleQuestion: function (id) {
    // $.ajax({
    //   url: '/api/questions/' + id,
    //   success: function (question) {
    //     ApiActions.receiveSingleQuestion(question);
    //   }
    // });

    $.get('/api/questions/' + id, function (question) {
      ApiActions.receiveSingleQuestion(question);
    });
  },

  createQuestion: function (question, callback) {
    // $.ajax({
    //   url: '/api/questions',
    //   type: 'POST',
    //   data: {question: question},
    //   error: function (question) {
    //     debugger
    //     // ApiActions.receiveSingleQuestion(question);
    //   }
    // });

    $.post('/api/questions', {question: question}, function (question) {
      ApiActions.receiveSingleQuestion(question);
      callback(question);
    })
  },

  editQuestion: function (question) {
    $.ajax({
      url: 'api/questions/' + question.id,
      type: 'PUT',
      data: {question: question},
      success: function (question) {
        ApiActions.receiveSingleQuestion(question);
      }
    });
  },

  destroyQuestion: function (id) {
    $.ajax({
      url: 'api/questions/' + id,
      type: 'DELETE',
      success: function (question) {
        ApiActions.deleteSingleQuestion(question);
      }
    });
  }
}

module.exports = ApiUtil;
