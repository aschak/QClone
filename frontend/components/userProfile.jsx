var React = require('react'),
    History = require('react-router').History,
    UserStore = require('../stores/user.js'),
    UserActions = require('../actions/user_actions.js');

window.UserStore = require('../stores/user.js');
window.UserActions = require('../actions/user_actions.js');

var UserProfile = React.createClass({
  mixins: [History],

  getStateFromStore: function () {
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
    this.userListener = UserStore.addListener(this._userChange);
    UserActions.fetchUser(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  showQuestion: function (id) {
    this.history.push('/question/' + id);
  },

  render: function () {
    var user = this.state.user,
        that = this;

    if (!this.state.user) {
      return (
        <span>LOADING...</span>
      );
    }

    return (
      <div className="user-show">

        <div className="user-username">
          {user.username}
        </div>

        <ul className="user-questions">
          <span id="questions-asked">Questions Asked:</span>
          {user.questions.map(function (question, idx) {
            return <div className="user-question" key={idx} onClick={that.showQuestion.bind(null, question.id)}>
              {question.title}
            </div>;
          })}
        </ul>

        <ul className="user-answers">
          <span id="answers-given">Answers Given:</span>
          {user.answers.map(function (answer, idx) {
            return <div className="user-answer" key={idx} onClick={that.showQuestion.bind(null, answer.question_id)}>
              {answer.question_title}
            </div>;
          })}
        </ul>
      </div>
    );
  }
});


module.exports = UserProfile;
