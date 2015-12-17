var React = require('react'),
    QuestionStore = require('../stores/question.js'),
    ApiUtil = require('../util/api_util.js'),
    QuestionActions = require('../actions/question_actions.js'),
    QuestionsIndex = require('./questionsIndex.jsx'),
    QuestionForm = require('./questionForm.jsx');


module.exports = React.createClass({
  getStateFromStore: function () {
    return { question: QuestionStore.find(parseInt(this.props.params.id)) };
  },

  _questionChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleQuestion(parseInt(newProps.params.id));
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._questionChange);
    ApiUtil.fetchSingleQuestion(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    this.questionListener.remove();
  },

  deleteQuestion: function (event) {
    event.preventDefault();
    QuestionActions.destroyQuestion(this.props.params.id);
    this.navigateToIndex();
  },

  navigateToIndex: function () {
    this.props.history.push("/");
  },

  render: function () {
    var question = this.state.question;
    if (question === undefined) { return <div></div>; }


    return (
      <div>
        {question.title}
        <br/>
          Asked By: {question.author.username}
        <br/>
          Details: {question.body}
        <br/>
          <QuestionForm new={false} question={question}/>
        <br/>
          <button onClick={this.deleteQuestion}>Delete Question</button>
      </div>
    );
  }
})
