var React = require('react'),
    QuestionForm = require('./questions/questionForm.jsx');


var NavBar = React.createClass({
  render : function () {
    return (

      <div className='nav-bar'>
        <QuestionForm className="question-form" id="new" new={true}/>
      </div>

    );

  }
});



module.exports = NavBar;
