var React = require('react'),
    QuestionsIndex = require('./questionsIndex.jsx');


  var SeekIndex = React.createClass({

    render: function () {
      return(
        <div className="container">
          <div className="nav-bar"></div>
          <div>
            {<QuestionsIndex/>}
          </div>

          {this.props.children}
        </div>
      )
    }
  });




module.exports = SeekIndex;
