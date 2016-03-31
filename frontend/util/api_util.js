/* global seek_user */

var ApiActions = require('../actions/api_actions.js');


var ApiUtil = {

  // createUser: function (user) {
  //   $.post('users', {user: user}, function (user) {
  //     ApiActions.receiveUser(user);
  //   });
  // },
  //
  // signUserIn: function (user) {
  //   $.post('session', {user: user}, function (user) {
  //     ApiActions.receiveUser(user);
  //   });
  // },
  //
  // signUserOut: function (user) {
  //   $.ajax({
  //     url: 'session',
  //     type: 'DELETE',
  //     data: {user: user},
  //     success: function (user) {
  //
  //     }
  //   });
  // },

  fetchAllUsers: function () {
    $.get('api/users/', function (users) {
      ApiActions.receiveAllUsers(users);
    });
  },

  fetchCurrentUser: function () {
    $.get('api/current_user', function (currentUser) {
      ApiActions.receiveCurrentUser(currentUser);
    });
  },

  fetchSingleUser: function (id) {
    $.get('api/users/' + id, function (user) {
      ApiActions.receiveSingleUser(user);
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
    $.get('/api/questions/' + id, function (question) {
      ApiActions.receiveSingleQuestion(question);
    });
  },

  createQuestion: function (question, callback) {
    $.post('/api/questions', {question: question}, function (question) {
      ApiActions.receiveSingleQuestion(question);
      callback(question);
    });
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
  },

  fetchAllAnswers: function () {
    $.get('/api/answers', function (answers) {
      ApiActions.receiveAllAnswers(answers);
    });
  },

  fetchSingleAnswer: function (id) {
    $.get('/api/answers/' + id, function (answer) {
      ApiActions.receiveSingleAnswer(answer);
    });
  },

  createAnswer: function (answer) {
    $.post('/api/answers', {answer: answer}, function (answer) {
      ApiActions.receiveSingleAnswer(answer);
    });
  },

  editAnswer: function (answer) {
    $.ajax({
      url: '/api/answers/' + answer.id,
      type: 'PUT',
      data: {answer: answer},
      success: function (answer) {
        ApiActions.receiveSingleAnswer(answer);
      }
    });
  },

  destroyAnswer: function (id) {
    $.ajax({
      url: '/api/answers/' + id,
      type: 'DELETE',
      success: function (answer) {
        ApiActions.deleteSingleAnswer(answer);
      }
    });
  },

  fetchAllComments: function () {
    $.get('/api/comments', function (comments) {
      ApiActions.receiveAllComments(comments);
    });
  },

  fetchSingleComment: function (id) {
    $.get('/api/comments/' + id, function (comment) {
      ApiActions.receiveSingleComment(comment);
    });
  },

  createComment: function (comment) {
    $.post('/api/comments', {comment: comment}, function (comment) {
      ApiActions.receiveSingleComment(comment);
    });
  },

  editComment: function (comment) {
    $.ajax({
      url: '/api/comments/' + comment.id,
      type: 'PUT',
      data: {comment: comment},
      success: function (comment) {
        ApiActions.receiveSingleComment(comment);
      }
    });
  },

  destroyComment: function (id) {
    $.ajax({
      url: '/api/comments/' + id,
      type: 'DELETE',
      success: function (comment) {
        ApiActions.deleteSingleComment(comment);
      }
    });
  },

  fetchAllTags: function () {
    $.get('/api/tags/', function (tags) {
      ApiActions.receiveAllTags(tags);
    });
  },

  updateProfileTags: function (checkedTags) {
    $.ajax({
      url: "/api/users/" + seek_user.id,
      type: "PUT",
      data: {tag_ids: checkedTags},
      success: function (seek_user) { /
        ApiActions.receiveCurrentUser(seek_user);
      }
    }); // tag_ids is a method given by Rails via user assoc with tags join table through profile tags 
  }

};

module.exports = ApiUtil;
