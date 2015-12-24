var React = require('react'),
    QuestionForm = require('./questions/questionForm.jsx'),
    QuestionStore = require('../stores/question.js'),
    QuestionActions = require('../actions/question_actions.js'),
    Fuse = require('fuse.js');


var NavBar = React.createClass({
  getInitialState: function () {
    return {questions: QuestionStore.all()};
  },

  _onChange: function () {
    this.setState({questions: QuestionStore.all()});
  },

  componentDidMount: function () {
    this.searchListener = QuestionStore.addListener(this._onChange);
    QuestionActions.fetchQuestions();
  },

  componentWillUnmount: function () {
    this.searchListener.remove();
  },

  search: function () {
    var questions = this.state.questions,
        questionTitles = [];

    for (title in questions) {
      questionTitles.push(questions[title])
    }
    //
    // if (questions.length > 0) {
    //   questions.map(function (question) {
    //     questionTitles.push(question.title);
    //   });
    // }

    var options = {
      caseSensitive = false,
      includeScore = false,
      shouldSort = true,
      threshold = 0.2,
      keys: ['title']
    }



  },


  render : function () {


    return (

      <div className="nav-bar">

        <div className="search-bar">
          <h1>What answers do you seek?</h1>

          <input
            type="text"
            placeholder="Search bar coming soon!" />

        </div>

          <QuestionForm className="question-form" id="new" new={true}/>

      </div>


    );

  }
});



module.exports = NavBar;
