var React = require('react');
    History = require('react-router').History;


var QuestionIndexItem = React.createClass({
  mixins: [History],

  handleClick: function () {
    this.history.push('/question/' + this.props.question.id);
  },

  render: function () {
    return (
      <div key={this.props.question.id}>
        <div onClick={this.handleClick}>
          Question: {this.props.question.title}
        </div>

        <br/>
        Author: {this.props.question.author.username}
        <p>Details: {this.props.question.body}</p>
        <br/>
      </div>
    )
  }
});


module.exports = QuestionIndexItem;
