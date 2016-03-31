var React = require('react'),
    AnswerStore = require('../../stores/answer.js'),
    AnswerActions = require('../../actions/answer_actions.js'),
    AnswerForm = require('./answerForm.jsx'),
    AnswerIndexItem = require('./answerIndexItem.jsx');


var AnswerIndex = React.createClass({
  getInitialState: function () {
    return {answers: AnswerStore.all()};
  },

  _indexChange: function () {
    this.setState({answers: AnswerStore.all()});
  },

  componentDidMount: function () {
    this.answerListener = AnswerStore.addListener(this._indexChange);
    AnswerActions.fetchAnswers();
  },

  componentWillUnmount: function () {
    this.answerListener.remove();
  },

  render: function () {
    var question = this.props.question;
    return (

      <div className="answers-main">
        <AnswerForm question={question}/>

      <hr/>

        <div className="answers-container">
          {
            question.answers.map(function (answer, idx) {
              return <AnswerIndexItem
                key={idx}
                question={question}
                answer={answer}/>;
            })
          }
        </div>
      </div>
    );
  }

});


module.exports = AnswerIndex;
