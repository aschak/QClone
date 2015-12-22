var React = require('react'),
    QuestionForm = require('./questions/questionForm.jsx');


var NavBar = React.createClass({
  render : function () {
    return (

      <div className="nav-bar">

        <div className="search-bar">
          <h1>What answers do you seek?</h1>

          <input
            type="text"
            placeholder="Search bar under construction :(" />

        </div>

          <QuestionForm className="question-form" id="new" new={true}/>

      </div>


    );

  }
});



module.exports = NavBar;
