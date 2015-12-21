/* global seek_user */

var React = require('react'),
    CommentActions = require('../../actions/comment_actions'),
    History = require('react-router').History;

var CommentIndexItem = React.createClass({
  mixins: [History],

  deleteComment: function (event) {
    event.preventDefault();
    CommentActions.destroyComment(this.props.comment.id);
    this.navigateToQuestion();
  },

  navigateToQuestion: function () {
    var id = this.props.answer.question_id;
    this.history.push('question/' + id);
  },

  render: function () {
    var comment = this.props.comment,
        commenter = comment.author,
        commentTime = new Date(this.props.answer.created_at).toString(),
        modButtons;

    if (comment.author_id === seek_user.id) {
      
      modButtons = <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="com-delete"
                      onClick={this.deleteComment}>Delete Comment</button>
                    </div>;
    } else {
      modButtons = <div></div>;
    }

    return (
      <div className="comment-container">
        <div className="commenter-container">
          <a href="#" className="commenter">{commenter}</a>
          <span className="comment-time">{commentTime}</span>
        </div>

        <div className="comment-body">
          {this.props.comment.body}
        </div>

        {modButtons}

        <hr/>
        <br/>
      </div>
    );


  }
});


module.exports = CommentIndexItem;
