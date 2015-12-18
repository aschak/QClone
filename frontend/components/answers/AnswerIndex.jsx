var React = require('react'),
    AnswerStore = require('../../stores/answer.js'),
    AnswerActions = require('../../actions/answer_actions.js'),
    AnswerIndexItem = require('./answerIndexItem.jsx');


var AnswerIndex = React.createClass({
  getInitialState: function () {
    return {answers: AnswerStore.all()};
  },

  _indexChange: function () {
    this.setState({answers: AnswerSTore.all()});
  },

  componentDidMount: function () {
    this.answerListener = AnswerStore.addListener(this._indexChange);
    AnswerActions.fetchAnswers();
  },

  componentWillUnmount: function () {
    this.answerListener.remove();
  },

  render: function () {
    var answers = this.props.question.answers;

    return (
      <ul className="answers-container">
        {
          answers.map(function (answer, idx) {
            return <AnswerIndexItem key={idx} answer={answer}/>;
          })
        }
      </ul>
    );
  }

});


module.exports = AnswerIndex;
