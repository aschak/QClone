var React = require('react'),
    UserStore = require('../stores/user.js'),
    UserActions = require('../actions/user_actions.js');

window.UserStore = require('../stores/user.js');
window.UserActions = require('../actions/user_actions.js');

var UserProfile = React.createClass({
  getStateFromStore: function () {
    // debugger
    return UserStore.find(parseInt(this.props.params.id));
  },

  _userChange: function () {
    this.setState({
      user: this.getStateFromStore()
    });
  },

  getInitialState: function () {
    return {
      user: this.getStateFromStore()
    };
  },

  componentWillReceiveProps: function (newProps) {
    UserActions.fetchUser(parseInt(newProps.params.id));
  },

  componentDidMount: function () {
    // debugger
    this.userListener = UserStore.addListener(this._userChange);
    UserActions.fetchUser(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  render: function () {
    // debugger

    if (!this.state.user) {
      return(
        <div>
          LOADING...
        </div>
      );
    }

    return (
      <div>
        {this.state.user.username}
      </div>
    );
  }
});


module.exports = UserProfile;
