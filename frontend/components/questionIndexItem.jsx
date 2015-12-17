var React = require('react');
    History = require('react-router').History;


var QuestionIndexItem = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {details: false}
  },

  showQuestion: function () {
    this.history.push('/question/' + this.props.question.id);
  },

  revealDetails: function () {
    details = this.details ? false : true;
    console.log("clicked!");
    this.setState({details: details});
  },

  render: function () {
    var asker = this.props.question.author.username,
        askTime = new Date(this.props.question.created_at).toString(),
        preview = this.props.question.body.slice(0, 10).trim() + "...",
        more = "More",
        details = this.state.details ? true : false;

    if (preview.length < 10) {preview = this.props.question.body;}

    if (details) {
      preview = this.props.question.body;
      more = ""
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

        <div className="details" onClick={this.revealDetails}>
          Details: {preview}<a href="#" className="more-details" onClick={this.revealDetails}>{more}</a>
        </div>

        <br/>
      </div>
    );

  }
});


// <div onClick={this.showQuestion} className="question-title">
//   {this.props.question.title}
// </div>

module.exports = QuestionIndexItem;
