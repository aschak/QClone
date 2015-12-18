var React = require('react'),
    UserStore = require('../stores/user.js'),
    ApiUtil = require('../util/api_util.js'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var User = React.createClass({
  mixins: [LinkedStateMixin],

  successCases = [
    "Signed In",
    "Signed Out",
    "Created"
  ],

  blankForm = {
    username: "",
    password: ""
  },

  getInitialState: function () {
    return this.blankForm;
  },

  _userChange: function () {
    var user = UserStore.all();

    if () {

    }
  }


})
