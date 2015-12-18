var React = require('react');
    History = require('react-router').History;


var QuestionIndexItem = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {showDetails: false};
  },

  showQuestion: function () {
    this.history.push('/question/' + this.props.question.id);
  },

  revealDetails: function () {
    showDetails = this.state.showDetails ? false : true;
    console.log("clicked!");
    this.setState({showDetails: showDetails});
  },

  render: function () {
    var asker = this.props.question.author.username,
        askTime = new Date(this.props.question.created_at).toString(),
        preview = this.props.question.body.slice(0, 60).trim() + "...",
        more = "More",
        showDetails = this.state.showDetails;

    if (preview.length < 10) {preview = this.props.question.body;}

    if (showDetails) {
      preview = this.props.question.body;
      more = "  Hide";
    } else if (!showDetails) {
      preview = this.props.question.body.slice(0, 60).trim() + "...";
      more = "More";
    }

    return (

      <div key={this.props.question.id} className="question-container">


        <div className="asker-container">Question asked by
          <a href="#" className="asker">{asker}</a>,
            <span className="ask-time">{askTime}</span>
        </div>

        <div onClick={this.showQuestion} className="question-title">
          {this.props.question.title}
        </div>

        <br/>

        <div className="question-details">
          Details: {preview}<a className="more-details" onClick={this.revealDetails}>{more}</a>
        </div>

        <hr/>
      </div>
    );

  }
});


// <div onClick={this.showQuestion} className="question-title">
//   {this.props.question.title}
// </div>

module.exports = QuestionIndexItem;
