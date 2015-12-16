var React = require('react');
    History = require('react-router').History;


var QuestionIndexItem = React.createClass({
  mixins: [History],


  render: function () {
    return (
      <li key={this.props.question.id}>
        Question: {this.props.question.title}
        <br/>
        Details: {this.props.question.body}
        <br/>
        Author: {this.props.question.author.username}
      </li>
    )
  }
});


module.exports = QuestionIndexItem;
