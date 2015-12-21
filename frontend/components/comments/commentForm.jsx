var React = require('react'),
    CommentActions = require('../../actions/comment_actions.js'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var CommentForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    var answerId = this.props.answer.id;
    return {
      body: '',
      author_id: null,
      answer_id: answerId,
      commentBox: false
    };
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var comment = Object.assign({}, this.props.comment, this.state);
    CommentActions.createComment(comment);
    this.navigateToQuestion();
  },

  navigateToQuestion: function () {
    var questionId = this.props.answer.question_id;
    this.history.push('question/' + questionId);
  },

  render: function () {
    var commentBox = this.state.commentBox;

    return (
      <div className='comment-form'>
        <form onSubmit={this.handleSubmit}>

          <div>
            <input
              type='hidden'
              id='comment_author_id'
              valueLink={this.linkState('author_id')}
              />
          </div>

          <div>
            <label htmlFor='comment_body'>Enter Comment: </label>
            <input
              type='textarea'
              id='comment_author_id'
              valueLink={this.linkState('body')}
              />
          </div>



          <input type='submit' className='btn btn-primary' id='com-submit' value='Submit Comment'/>
        </form>
      </div>
    );

  }
});

module.exports = CommentForm;
