/* global seek_user */

var React = require('react'),
    AnswerActions = require('../../actions/answer_actions.js'),
    AnswerStore = require('../../stores/answer.js'),
    CommentIndex = require('../comments/commentIndex.jsx'),
    History = require('react-router').History;


var AnswerIndexItem = React.createClass({
  mixins: [History],

  deleteAnswer: function (event) {
    event.preventDefault();
    AnswerActions.destroyAnswer(this.props.answer.id);
    this.navigateToQuestion();
  },

  navigateToQuestion: function () {
    this.history.push('question/' + this.props.question.id);
  },

  showUser: function () {
    this.history.push('/user/' + this.props.answer.author_id);
  },

  render: function () {
    var answer = this.props.answer,
        answerer = this.props.answer.author,
        answerTime = new Date(this.props.answer.created_at).toString(),
        modButtons;

    if (answer.author_id === seek_user.id) {
      modButtons = <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="ans-delete"
                        onClick={this.deleteAnswer}>Delete Answer</button>
                    </div>;
    } else {
      modButtons = <div></div>;
    }



    return (
      <div className="answer-container">

        <div className="answerer-container">
          Answered By: <a onClick={this.showUser} className="answerer">{answerer}</a>,
          <span className="answer-time">{answerTime}</span>
        </div>

        <div className="answer-body">
          {this.props.answer.body}
        </div>

        <div className='comment-index'>
          <CommentIndex answer={answer}/>
        </div>

        {modButtons}

        <hr/>
        <br/>
      </div>


    );
  }

});


module.exports = AnswerIndexItem;
