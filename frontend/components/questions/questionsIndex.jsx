var React = require('react'),
    QuestionStore = require('../../stores/question.js'),
    QuestionActions = require('../../actions/question_actions.js'),
    QuestionIndexItem = require('./questionIndexItem.jsx'),
    UserStore = require('../../stores/user.js'),
    UserActions = require('../../actions/user_actions');


var QuestionIndex = React.createClass({
  getInitialState: function () {
    return {
      questions: QuestionStore.all(),
      tags: UserStore.currentUser().tags || []
    };
  },

  _indexChange: function () {
    this.setState({questions: QuestionStore.all()});
  },

  _tagChange: function () {
    this.setState({tags: UserStore.currentUser().tags});
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._indexChange);
    this.userListener = UserStore.addListener(this._tagChange);
    QuestionActions.fetchQuestions();
    UserActions.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.questionListener.remove();
    this.userListener.remove();
  },

  render: function () {
    if(!this.state.tags || this.state.tags.length === 0){
        return (<div>No Tags Selected!</div>);
    }

    var questions = [],
        profileTags = [];

    this.state.tags.forEach(function (tag) {
      profileTags.push(tag.tag_name);
    });


    this.state.questions.forEach(function (question) {
      question.tags.forEach(function (tag) {
        if (profileTags.indexOf(tag.tag_name) !== -1 && questions.indexOf(question) === -1) {
          questions.push(question);
        }
      });
    });

    return (
      <ul className="questions-container">
        {
          questions.map(function (question, idx) {
            return <QuestionIndexItem key={idx} question={question}/>;
          })
        }
      </ul>
    );
  }


});




module.exports = QuestionIndex;
