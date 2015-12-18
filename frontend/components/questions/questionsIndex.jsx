var React = require('react'),
    QuestionStore = require('../../stores/question.js'),
    ApiUtil = require('../../util/api_util.js'),
    QuestionActions = require('../../actions/question_actions.js'),
    QuestionIndexItem = require('./questionIndexItem.jsx');


var QuestionIndex = React.createClass({
  getInitialState: function () {
    return {questions: QuestionStore.all()};
  },

  _indexChange: function () {
    this.setState({questions: QuestionStore.all()});
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._indexChange);
    QuestionActions.fetchQuestions();
  },

  componentWillUnmount: function () {
    this.questionListener.remove();
  },

  render: function () {
    var questions = this.state.questions
    return (
      <ul className="questions-container">
        {
          questions.map(function (question, idx) {
            return <QuestionIndexItem key={idx} question={question}/>
          })
        }
      </ul>
    )
  }


})




module.exports = QuestionIndex;
