var React = require('react'),
    QuestionActions = require('../../actions/question_actions.js'),
    History = require('react-router').History,
    TagStore = require('../../stores/tag.js'),
    TagActions = require('../../actions/tag_actions.js'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var CheckboxGroup = require('react-checkbox-group');


var QuestionForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankForm: {
    title: '',
    body: ' ',
    author_id: null,
    modal: false,
    taggings_attributes: []
  },

  getInitialState: function () {
    return this.blankForm;
  },

  populateForm: function () {
    this.setState({
      title: this.props.question.title,
      body: this.props.question.body,
      author_id: this.props.question.author_id,
      checkedTags: this.props.question.tags //Search here
    });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var question = Object.assign({}, this.props.question, this.state);
    //DONT FORGET--> MOD CHECKED TAGS INTO {tag_id: tag_id} as object in
    // taggings_attributes

    if (this.props.new) {
      QuestionActions.createQuestion(question, this.navigateToQuestion);
      this.setState(this.blankForm);
      // this.navigateToQuestion();

    } else if (!this.props.new) {
      QuestionActions.editQuestion(question);
      this.changeModal();
    }
  },

  handleChange: function (event) {
    var updatedTags = this.refs.tagsGroup.getCheckedValues(),
        tagAttrs = [];

    updatedTags.forEach(function (tag) {
      tagAttrs.push({
        tag_id: tag
      });
    });

    // debugger

    this.setState({taggings_attributes: tagAttrs});
  },

  changeModal: function () {
    var modal = this.state.modal ? false : true;
    this.setState({modal: modal});
  },

  componentDidMount: function () {
    if (!this.props.new) {this.populateForm();}
  },

  navigateToQuestion: function (question) {
    // var question = QuestionStore.all()[QuestionStore.all().length - 1]
    this.history.push('question/' + question.id);
  },


  render: function () {
    var modal = this.state.modal ? true : false;
    var prompt;
    var titlePlaceholder;
    var bodyPlaceholder;
    var submit;
    var allTags = this.props.tags;
    var renderTags = [];
    // debugger
    if (allTags && this.props.new) {
      allTags.forEach(function (tag, idx) {
        renderTags.push(
          <div className="tags-form-container" key={idx}>
            <label>
              <span
                id='tags-form-item'
                className='input-group-addon'>
                {tag.tag_name}
                <input
                  id='tags-form'
                  type="checkbox"
                  value={tag.id}/>
              </span>
            </label>
          </div>
        );
      });
      var editId = "question-form";
    } else if (allTags && !this.props.new) {

      var checkedTags = this.state.checkedTags;
      var editId = "question-edit-form";

    }


    if (this.props.new) {
      prompt = 'Ask a New Question!';
      submit = 'Ask Your Question!';
      titlePlaceholder = 'I want to know...';
      bodyPlaceholder = 'Add any additional details here...';
      var tagPrompt = 'Tag This Question (Minimum 1 Required!)';

    } else {
      prompt = 'Edit Question';
      submit = 'Update Question!';
      titlePlaceholder = '';
      bodyPlaceholder = '';
      var tagPrompt = '';
    }

    if (!modal) {
      return(
        <button type="button" id={editId} className="btn btn-primary" onClick={this.changeModal}>
          {prompt}
        </button>
      );

    } else {

      return (
        <div>
          <button type="button" id="question-btn" className="btn btn-primary" onClick={this.changeModal}>
            {prompt}
          </button>
          <div className='modal-screen' onClick={this.changeModal}/>
          <div className='modal-content'>
            <form onSubmit={this.handleSubmit} className='question-form-modal'>

              <div>
                <input
                  type='hidden'
                  id="question_author_id"
                  valueLink={this.linkState('author_id')}
                  />
              </div>

              <div>
                <label id='question-title-prompt' htmlFor='question_body'>What is your Question?</label>
                <input
                  type='text'
                  id='question-input-title'
                  valueLink={this.linkState('title')}
                  placeholder={titlePlaceholder}
                  />
              </div>

              <div>
                <label id='question-body-prompt' htmlFor='question_body'>Need to clarify? Add any context to your question below:</label>
                <br/>
                <br/>
                <textarea
                    type='textarea'
                    id='question-input-body'
                    valueLink={this.linkState('body')}
                    placeholder={bodyPlaceholder}
                    />
              </div>

              <label id='question-tags-prompt' htmlFor="question_tags">
                {tagPrompt}
                <CheckboxGroup name='tags' ref='tagsGroup' onChange={this.handleChange}>
                  {renderTags}
                </CheckboxGroup>
              </label>

              <input type='submit' className='btn btn-primary' value={submit} />
            </form>
          </div>
        </div>
      );
    }
  }
});



module.exports = QuestionForm;
