var React = require('react');


var AnswerIndexItem = React.createClass({
  render: function () {
    var answerer = this.props.answer.author,
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
        <hr/>
        <br/>
      </div>


    );
  }

});


module.exports = AnswerIndexItem;
