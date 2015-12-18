var React = require('react'),
    UserStore = require('../stores/user.js'),
    UserActions = require('../actions/user_actions.js'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var UserLog = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      username: "",
      password: "",
      userCodes: []
    };
  },


  _userChange: function () {
    var userCodes = UserStore.all();

    SuccessCases = [
      "Signed In",
      "Signed Out",
      "Created"
    ];

    if (this.successCases.indexOf(userCodes[0]) !== -1) {
      this.props.signIn();
    } else {
      this.setState({userCodes: userCodes});
    }
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.logType === "Sign In" ? UserActions.signUserIn(user) : UserActions.createUser(user)
  },

  render: function () {
    var userCodes = "",
        logType = this.props.logType;

    if (this.state.userCodes.length > 0) {
      userCodes = <ul>
        {this.state.userCodes.map(function (userCode) {
          return <li>{userCode}</li>
        })}
      </ul>
    }

    return(
      <div>
        <div>
          {userCodes}
          <span>{logType}</span>
        </div>

        <form>
          <div className="user-sign-in">
            Username:
              <input
                type="text"
                valueLink={this.linkState('username')}/>
          </div>

          <div className="user-sign-out">
            Password:
              <input
                type="password"
                valueLink={this.linkState('password')}/>
          </div>

          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
            SIGN IN
          </button>
        </form>
      </div>
    )


  }


})


module.exports = UserLog;
