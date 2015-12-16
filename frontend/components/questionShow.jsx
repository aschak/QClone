var React = require('react'),
    QuestionStore = require('../stores/question.js'),
    ApiUtil = require('../util/api_util.js'),
    QuestionsIndex = require('./questionsIndex.jsx');


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
      </div>
    );
  }
})
