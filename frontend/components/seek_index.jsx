var React = require('react'),
    QuestionsIndex = require('./questions/questionsIndex.jsx'),
    UserLog = require('./userLog.jsx'),
    UserActions = require('../actions/user_actions.js');


  var SeekIndex = React.createClass({
    getInitialState: function () {
      return {
        logType: "",
        loggedIn: false,
        authorized: false
      };
    },

    signIn: function () {
      this.setState({authorized: false, loggedIn: true});
    },

    signOut: function () {
      UserActions.signUserOut();
      this.setState({loggedIn: false});
    },

    startAuth: function (logType) {
      this.setState({authorized: true, logType: logType});
    },


    render: function () {

      return(
        <div className="seek-index">


          <div>
            {<QuestionsIndex/>}
          </div>

          {this.props.children}
        </div>
      );
    }
  });




module.exports = SeekIndex;
