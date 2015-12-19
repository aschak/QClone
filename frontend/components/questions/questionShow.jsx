var React = require('react'),
    QuestionStore = require('../../stores/question.js'),
    QuestionActions = require('../../actions/question_actions.js'),
    QuestionsIndex = require('./questionsIndex.jsx'),
    QuestionForm = require('./questionForm.jsx'),
    AnswerIndex = require('../answers/answerIndex.jsx');


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
    QuestionActions.fetchQuestion(parseInt(newProps.params.id));
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._questionChange);
    QuestionActions.fetchQuestion(parseInt(this.props.params.id));
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

    var asker = question.author.username,
        askTime = new Date(question.created_at).toString();

    return (

      <div className="question-show">


        <div className="asker-container">Question asked by
          <a href="#" className="asker">{asker}</a>,
            <span className="ask-time">{askTime}</span>
        </div>


        <div className="question-title">
          {question.title}
        </div>

        <div className="question-details">
          Details: {question.body}
        </div>


        <QuestionForm className="question-form" id="edit" new={false} question={question}/>
        <br/>
        <button type="button" className="btn btn-primary" id="ques-delete" onClick={this.deleteQuestion}>Delete Question</button>

        <div>
          <AnswerIndex question={question}/>
        </div>

        <button className="btn btn-primary" onClick={this.navigateToIndex}>Back</button>
      </div>
    );
  }
});
