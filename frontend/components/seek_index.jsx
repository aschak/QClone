var React = require('react'),
    QuestionsIndex = require('./questionsIndex.jsx');


  SeekIndex = React.createClass({
    render: function () {
      return(
        <div>
          <div>
            <QuestionsIndex/>

          </div>

          {this.props.children}
        </div>
      )
    }
  })




module.exports = SeekIndex;
