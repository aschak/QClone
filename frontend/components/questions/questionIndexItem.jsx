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
    var showDetails = this.state.showDetails ? false : true;
    this.setState({showDetails: showDetails});
  },

  render: function () {
    var question = this.props.question,
        asker = question.author.username,
        askTime = new Date(this.props.question.created_at).toString(),
        preview = this.props.question.body.slice(0, 60).trim() + "...",
        more = "More",
        showDetails = this.state.showDetails,
        tags;



    if (preview.length < 10) {preview = this.props.question.body;}

    if (question.tags[0]) {
      tags =  <ul className="question-tags">
              tags: <br/>  {
                  question.tags.map(function (tag, idx) {
                    return <li
                              key={idx}
                              className="question-tag" >{tag.tag_name}</li>;
                  })
                }
             </ul>;
    } else {
      tags = <span></span>;
    }

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

        <br/>

        {tags}

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


module.exports = QuestionIndexItem;
