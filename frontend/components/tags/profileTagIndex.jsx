/* global seek_user */

var React = require('react'),
    TagStore = require('../../stores/tag.js'),
    TagActions = require('../../actions/tag_actions.js'),
    TagIndexItem = require('./tagIndexItem.jsx');


var TagIndex = React.createClass({
  getInitialState: function () {
    return ({tags: seek_user.tags});
  },

  

  render: function () {
    return(
      <div>

      </div>
    );
  }
});


module.exports = TagIndex;
