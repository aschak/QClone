var React = require('react'),
    TagActions = require('../../actions/tag_actions'),
    History = require('react-router').History;



var ProfileTagIndexItem = React.createClass({


  render: function () {
    var profileTag = this.props.tag;

    return (
      <div className='prof-tag-index-item'>
        {profileTag.tag_name}
      </div>
    );
  }
});


module.exports = ProfileTagIndexItem;
