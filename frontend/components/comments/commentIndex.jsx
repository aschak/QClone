var React = require('react'),
    CommentStore = require('../../stores/comment.js'),
    CommentActions = require('../../actions/comment_actions.js'),
    CommentForm = require('./commentForm.jsx'),
    CommentIndexItem = require('./commentIndexItem.jsx');


var CommentIndex = React.createClass({
  getInitialState: function () {
    return {
      comments: CommentStore.all(),
      showComments: false
    };
  },

  _indexChange: function () {
    this.setState({comments: CommentStore.all()});
  },

  componentDidMount: function () {
    this.commentListener = CommentStore.addListener(this._indexChange);
    CommentActions.fetchComments();
  },

  componentWillUnmount: function () {
    this.commentListener.remove();
  },

  revealComments: function () {
    var showComments = this.state.showComments ? false : true;
    this.setState(({showComments: showComments}));
  },

  render: function () {
    var answer = this.props.answer,
        showComments = this.state.showComments,
        reveal;

    if (showComments) {
      reveal =
        <div>
          <CommentForm answer={answer}/>

          <hr/>

          <div className="comments-container">
            {
              answer.comments.map(function (comment, idx) {
                return <CommentIndexItem
                  key={idx}
                  answer={answer}
                  comment={comment}
                  />;
              })
            }
          </div>

          <button
            type="button"
            className="btn btn-primary"
            id="com-hide"
            onClick={this.revealComments}>
            Hide Comments
          </button>

        </div>;

    } else if (!showComments) {
      reveal =
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.revealComments}>
            Show Comments
        </button>;

    }

    return(
      <div className="comments-main">
        {reveal}
      </div>
    );
  }
});

module.exports = CommentIndex;
