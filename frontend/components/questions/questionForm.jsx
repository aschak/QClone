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

    this.setState({taggings_attributes: tagAttrs);
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
    var submit;
    var allTags = this.props.tags;
    var renderTags = [];
    // debugger
    if (allTags && this.props.new) {
      allTags.forEach(function (tag, idx) {
        renderTags.push(
          <div key={idx}>
            <label>
              {tag.tag_name}
              <input type="checkbox"
                value={tag.id}/>
            </label>
          </div>
        );
      });
    } else if (allTags && !this.props.new) {

      var checkedTags = this.state.checkedTags;


      if (checkedTags) {
        // debugger;
        allTags.forEach(function (tag, idx) {
          var checked = false;

          checkedTags.forEach(function (checkedTag) {
            debugger
            if (tag.id === parseInt(checkedTag.id)) {
              checked = true;
            }
          });

          renderTags.push(
            <div key={idx}>
              <label>
                {tag.tag_name}
                <input type="checkbox"
                  value={tag.id}
                  checked={checked} />
              </label>
            </div>
          );
        });

      }

    }


    if (this.props.new) {
      prompt = "Ask Question";
      submit = 'Ask Your Question!';
    } else {
      prompt = "Edit Question";
      submit = 'Update Question!';
    }

    if (!modal) {
      return(
        <button type="button" id="question-form" className="btn btn-primary" onClick={this.changeModal}>
          {prompt}
        </button>
      );

    } else {

      return (
        <div>
          <button type="button" id="edit-question" className="btn btn-primary" onClick={this.changeModal}>
            {prompt}
          </button>
          <div className='modal-screen' onClick={this.changeModal}/>
          <div className='modal-content'>
            <form onSubmit={this.handleSubmit}>

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

              <CheckboxGroup name='tags' ref='tagsGroup' onChange={this.handleChange}>
                {renderTags}
              </CheckboxGroup>

              <input type='submit' className='btn' value={submit} />
            </form>
          </div>
        </div>
      );
    }
  }
});



module.exports = QuestionForm;
