/* global seek_user */

var React = require('react'),
    QuestionStore = require('../../stores/question.js'),
    QuestionActions = require('../../actions/question_actions.js'),
    QuestionsIndex = require('./questionsIndex.jsx'),
    QuestionForm = require('./questionForm.jsx'),
    TagStore = require('../../stores/tag.js'),
    TagActions = require('../../actions/tag_actions.js'),
    AnswerIndex = require('../answers/answerIndex.jsx');

// window.UserStore = require('../../stores/user.js');
// window.TagStore = require('../../stores/tag.js');
// window.UserActions = require('../../actions/user_actions.js');
// window.TagActions = require('../../actions/tag_actions.js');

module.exports = React.createClass({
  getStateFromStore: function () {
    return QuestionStore.find(parseInt(this.props.params.id));
  },

  _questionChange: function () {
    this.setState({
      question: this.getStateFromStore(),
      allTags: TagStore.all()
    });
  },

  getInitialState: function () {
    return {
      question: this.getStateFromStore(),
      allTags: TagStore.all()
    };
  },

  componentWillReceiveProps: function (newProps) {
    QuestionActions.fetchQuestion(parseInt(newProps.params.id));
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._questionChange);
    this.tagListener = TagStore.addListener(this._questionChange);
    QuestionActions.fetchQuestion(parseInt(this.props.params.id));
    TagActions.fetchTags();
  },

  componentWillUnmount: function () {
    this.questionListener.remove();
    this.tagListener.remove();
  },

  deleteQuestion: function (event) {
    event.preventDefault();
    QuestionActions.destroyQuestion(this.props.params.id);
    this.navigateToIndex();
  },

  navigateToIndex: function () {
    this.props.history.push("/");
  },

  showUser: function () {
    // debugger
    this.props.history.push('/user/' + this.state.question.author_id);
  },

  render: function () {
    var question = this.state.question,
        modButtons,
        tags,
        allTags = this.state.allTags;

    if (!this.state.question) {
      return (
        <div>
          LOADING...
        </div>
      );
    }
    //  debugger
    if (question.tags[0]) {
      tags =  <div className="question-tags">
              tags: {
                  question.tags.map(function (tag, idx) {
                    return <span
                              key={idx}
                              className="question-tag" >{tag.tag_name}</span>;
                  })
                }
             </div>;
    } else {
      tags = <span></span>;
    }

    if (question.author_id === seek_user.id) {
      modButtons = <div className="mod-buttons">
                    <QuestionForm
                          className="question-form"
                          id="edit"
                          new={false}
                          question={question}
                          tags={allTags}/>
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="ques-delete"
                      onClick={this.deleteQuestion}>Delete Question</button>
                   </div> ;

    } else {
      modButtons = <div></div>;
    }

    if (question === undefined) { return <div></div>; }

    var asker = question.author.username,
        askTime = new Date(question.created_at).toString();

    return (

      <div className="question-show">

        <div className="question-title">
          {question.title}
        </div>

        <br/>

        <div className="asker-container">Question asked by
          <a onClick={this.showUser} className="asker">{asker}</a>,
            <span className="ask-time">{askTime}</span>
        </div>

        <br/>

        {tags}

        <br/>

        <div className="question-details">
          Details: {question.body}
        </div>


        {modButtons}

        <div>
          <AnswerIndex question={question}/>
        </div>

      </div>
    );
  }
});
