var React = require('react'),
    AnswerActions = require('../../actions/answer_actions.js'),
    AnswerStore = require('../../stores/answer.js'),
    CommentIndex = require('../comments/commentIndex.jsx'),
    History = require('react-router').History;


var AnswerIndexItem = React.createClass({
  mixins: [History],
  // Commented code below is part of grabbing comments form answer..not working
  // getStateFromStore: function () {
  //   return {answer: AnswerStore.find(parseInt(this.props.answer.id))};
  // },
  //
  // _answerChange: function () {
  //   this.setState(this.getStateFromStore());
  // },
  //
  // getInitialState: function () {
  //   return this.getStateFromStore();
  // },
  //
  // componentWillReceiveProps: function (newProps) {
  //   AnswerActions.fetchAnswer(parseInt(newProps.answer.id));
  // },
  //
  // componentDidMount: function () {
  //   this.answerListener = AnswerStore.addListener(this._answerChange);
  //   AnswerActions.fetchAnswer(parseInt(this.props.answer.id));
  // },
  //
  // componentWillUnmount: function () {
  //   this.answerListener.remove();
  // },

  deleteAnswer: function (event) {
    event.preventDefault();
    AnswerActions.destroyAnswer(this.props.answer.id);
    this.navigateToQuestion();
  },

  navigateToQuestion: function () {
    this.history.push('question/' + this.props.question.id);
  },

  render: function () {
    var answer = this.props.answer,
        answerer = this.props.answer.author,
        answerTime = new Date(this.props.answer.created_at).toString();

    return (
      <div className="answer-container">

        <div className="answerer-container">
          Answered By: <a href="#" className="answerer">{answerer}</a>,
          <span className="answer-time">{answerTime}</span>
        </div>

        <div className="answer-body">
          {this.props.answer.body}
        </div>

        <div className='comment-index'>
          <CommentIndex answer={answer}/>
        </div>


          <button
            type="button"
            className="btn btn-primary"
            id="ans-delete"
            onClick={this.deleteAnswer}>
              Delete Answer
            </button>

        <hr/>
        <br/>
      </div>


    );
  }

});


module.exports = AnswerIndexItem;
