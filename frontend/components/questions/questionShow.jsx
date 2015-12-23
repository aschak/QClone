/* global seek_user */

var React = require('react'),
    QuestionStore = require('../../stores/question.js'),
    QuestionActions = require('../../actions/question_actions.js'),
    QuestionsIndex = require('./questionsIndex.jsx'),
    QuestionForm = require('./questionForm.jsx'),
    AnswerIndex = require('../answers/answerIndex.jsx');

window.UserStore = require('../../stores/user.js');
window.TagStore = require('../../stores/tag.js');
window.UserActions = require('../../actions/user_actions.js');
window.TagActions = require('../../actions/tag_actions.js');

module.exports = React.createClass({
  getStateFromStore: function () {
    return {
       question: QuestionStore.find(parseInt(this.props.params.id)),
    };
  },

  _questionChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    QuestionActions.fetchQuestion(parseInt(newProps.params.id));
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._questionChange);
    QuestionActions.fetchQuestion(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    this.questionListener.remove();
  },

  deleteQuestion: function (event) {
    event.preventDefault();
    QuestionActions.destroyQuestion(this.props.params.id);
    this.navigateToIndex();
  },

  navigateToIndex: function () {
    this.props.history.push("/");
  },

  render: function () {
    var question = this.state.question,
        modButtons,
        tags;

    if (!this.state.question) {
      return (
        <div>
          LOADING...
        </div>
      );
    }

    if (question.tags[0]) {
      tags =  <ul className="question-tags">
              tags: <br/>  {
                  question.tags.map(function (tag, idx) {
                    return <li
                              key={idx}
                              className="question-tag" >{tag.tag_name}</li>;
                  })
                }
             </ul>;
    } else {
      tags = <span></span>;
    }

    if (question.author_id === seek_user.id) {
      modButtons = <div>
                    <QuestionForm
                          className="question-form"
                          id="edit"
                          new={false}
                          question={question}/>
                   <br/>
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
        <button className="btn btn-primary" id="Q-index-back-btn" onClick={this.navigateToIndex}>Return to Main</button>


        <div className="asker-container">Question asked by
          <a href="#" className="asker">{asker}</a>,
            <span className="ask-time">{askTime}</span>
        </div>

        <br/>
        {tags}

        <br/>
        <div className="question-title">
          {question.title}
        </div>

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
