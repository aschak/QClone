var React = require('react'),
    QuestionsIndex = require('./questionsIndex.jsx');


  var SeekIndex = React.createClass({

    render: function () {
      return(
        <div>

          <div>
            React is rendering!
            {<QuestionsIndex/>}
          </div>

          {this.props.children}
        </div>
      )
    }
  });




module.exports = SeekIndex;
