var React = require('react'),
    UserStore = require('../stores/user.js'),
    UserActions = require('../actions/user_actions.js');


var CurrentUser = React.createClass({
  getInitialState: function () {
    return {user: UserStore.all()};
  },

  _userChange: function () {
    this.setState({user: UserStore.all()});
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._userChange);
    UserActions.fetchUser();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  render: function () {
    return(
      <div>
        
      </div>
    );
  }
});
