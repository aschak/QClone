var React = require('react');
    History = require('react-router').History;


var QuestionIndexItem = React.createClass({
  mixins: [History],

  showQuestion: function () {
    this.history.push('/question/' + this.props.question.id);
  },

  render: function () {
    // Why does author get deleted first before title? Causing TypeError in Render
    // right after deleting a question.

    if (this.props.question.author !== undefined) {
      return (
        <div key={this.props.question.id}>
          <div onClick={this.showQuestion}>
            Question: {this.props.question.title}
          </div>

          <br/>
          Author: {this.props.question.author.username}
          <p>Details: {this.props.question.body}</p>
          <br/>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
});


module.exports = QuestionIndexItem;
