var React = require('react'),
    CommentActions = require('../../comments/comment_actions'),
    History = require('react-router').History;

var CommentIndexItem = React.createClass({
  mixins: [History],

  deleteComment: function (event) {
    event.preventDefault();
    CommentActions.destroyComment(this.props.comment.id);
    this.navigateToQuestion();
  },

  navigateToQuestion: function () {
    var id = this.props.answer.question.id; //DOUBLE CHECK THIS WORKS!
    this.history.push('question/' + id);
  },

  render: function () {
    var commenter = this.props.comment.author,
        commentTime = new Date(this.props.answer.created_at).toString();

    return (
      <div className="comment-container">
        <div className="commenter-container">
          <a href="#" className="commenter">{commenter}</a>
          <span className="comment-time">{commentTime}</span>
        </div>

        <div className="comment-body">
          {this.props.comment.body}
        </div>
          <button
            type="button"
            className="btn btn-primary"
            id="com-delete"
            onClick={this.deleteComment}>
              Delete Comment
          </button>
        <hr/>
        <br/>
      </div>
    );


  }
});


module.exports = CommentIndexItem;
