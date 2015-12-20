var React = require('react'),
    AnswerActions = require('../../actions/answer_actions.js'),
    AnswerStore = require('../../stores/answer.js'),
    History = require('react-router').History;


var AnswerIndexItem = React.createClass({
  mixins: [History],

  getStateFromStore: function () {
    return {answer: AnswerStore.find(parseInt(this.props.params.id))};
  },

  deleteAnswer: function (event) {
    event.preventDefault();
    AnswerActions.destroyAnswer(this.props.answer.id);
    this.navigateToQuestion();
  },

  navigateToQuestion: function () {
    this.history.push('question/' + this.props.question.id);
  },

  render: function () {
    var answer = this.state.answer,
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

        <div>
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
