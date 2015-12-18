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
      // var userLog = "",
      //     logButtons;
      //
      // if (this.state.authorized) {
      //   userLog = <UserLog
      //       logType={this.state.logType}
      //       logIn={this.signIn}/>
      //   };
      //
      // if (this.state.loggedIn) {
      //   logButtons =
      //     <button
      //         type="button"
      //         className = "btn btn-primary"
      //         onClick={this.signOut}>
      //         Sign Out
      //     </button>
      // } else {
      //
      // }

      return(
        <div className="container">
          <div className="nav-bar">
          </div>

          <div>
            {<QuestionsIndex/>}
          </div>

          {this.props.children}
        </div>
      );
    }
  });




module.exports = SeekIndex;
