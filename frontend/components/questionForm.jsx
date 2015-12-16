var React = require('react'),
    ApiUtil = require('../util/api_util.js'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');



var QuestionForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankForm: {
    title: '',
    body: ' ',
    author_id: null,
    modal: false
  },

  getInitialState: function () {
    return this.blankForm;
  },

  createQuestion: function (event) {
    event.preventDefault();
    var question = Object.assign({}, this.state);
    ApiUtil.createQuestion(question);
    this.setState(this.blankForm);
  },

  revealModal: function () {
    this.setState({modal: true})
  },


  render: function () {
    var modal = this.state.modal ? true : false

    if (!modal) {
      return(
        <div onClick={this.revealModal}>
          Ask Question
        </div>
      )
    } else {

      return (
        <div className='modal-screen'>
          <div className='modal-content'>
            <form onSubmit={this.createQuestion}>

              <div>
                <input
                  type='hidden'
                  id="question_author_id"
                  valueLink={this.linkState('author_id')}
                />
              </div>

              <div>
                <label htmlFor='question_title'>Enter Question:</label>
                <input
                  type='text'
                  id='question_title'
                  valueLink={this.linkState('title')}
                />
              </div>


              <div>
                <label htmlFor='question_body'>Enter Details:</label>
                <input
                  type='text'
                  id='question_body'
                  valueLink={this.linkState('body')}
                />
              </div>

              <input type='submit' value='Ask Question'/>
            </form>
          </div>
        </div>

      )
    }
  }
});



module.exports = QuestionForm;
