var React = require('react'),
    AnswerActions = require('../../actions/answer_actions.js'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');



var AnswerForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    var questionId = this.props.question.id;
    return {
      body: '',
      author_id: null,
      question_id: questionId,
      answerBox: false
    };
  },

  // componentDidMount: function () {
  //   this.setState({
  //     body: '',
  //     author_id: null
  //   });
  // },

  handleSubmit: function (event) {
    event.preventDefault();
    var answer = Object.assign({}, this.props.answer, this.state);
    AnswerActions.createAnswer(answer);
    this.navigateToQuestion();
    this.revealAnswerBox();
  },

  revealAnswerBox: function () {
    var answerBox = this.state.answerBox ? false : true;
    this.setState({answerBox: answerBox});
  },

  navigateToQuestion: function () {
    var questionId = this.props.question.id;
    this.history.push('question/' + questionId);
  },

  render: function () {
    var answerBox = this.state.answerBox;

    if (!answerBox) {
      return(
        <div className='answer-form'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.revealAnswerBox}>Answer This Question </button>
        </div>
      );

    } else if (answerBox) {

      return (
        <div className='answer-form'>
          <form onSubmit={this.handleSubmit}>

            <div>
              <input
                type='hidden'
                id='answer_author_id'
                valueLink={this.linkState('author_id')}
                />
            </div>

            <div>
  
              <textarea
                className='answer-input'
                type='textarea'
                placeholder='Share your knowledge here!'
                id='answer_body'
                valueLink={this.linkState('body')}
                />
            </div>

            <input type='submit' className='btn btn-primary' id='ans-submit' value='Submit Answer'/>
          </form>
        </div>
      );

    }

  }
});


module.exports = AnswerForm;
