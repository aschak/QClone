var React = require('react'),
    UserStore = require('../stores/user.js'),
    UserActions = require('../actions/user_actions.js');


var CurrentUser = React.createClass({
  getInitialState: function () {
    return {user: UserStore.all()};
  },

  render: function () {
    return(
      <div>

      </div>
    );
  }
});
