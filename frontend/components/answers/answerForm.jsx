var React = require('react'),
    AnswerActions = require('../../actions/answer_actions.js'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');



var AnswerForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    var question_id = this.props.question.id
    return {
      body: '',
      author_id: null,
      question_id: question_id
    };
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var answer = Object.assign({}, this.props.answer, this.state);
    AnswerActions.createAnswer(answer);
  },

  componentDidMount: function () {
    
  },

  render: function () {


    return (
      <div className='answer-form'>
        <form onSubmit={this.handleSubmit}>

          <div>
            <input
              type='hidden'
              id='answer_author_id'
              valueLink={this.linkState('author_id')}
              />
          </div>

          <div>
            <label htmlFor='answer_body'>Enter Answer:</label>
            <input
              type='textarea'
              id='answer_body'

              valueLink={this.linkState('body')}
              />
          </div>

          <input type='submit' className='btn btn-primary' value="Submit Answer"/>
        </form>
      </div>
    );
  }
});


module.exports = AnswerForm;
