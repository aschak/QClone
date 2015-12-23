/* global seek_user */

var React = require('react'),
    TagStore = require('../../stores/tag.js'),
    TagActions = require('../../actions/tag_actions.js'),
    ProfileTagIndexItem = require('./profileTagIndexItem.jsx'),
    UserStore = require('../../stores/user.js'),
    UserActions = require('../../actions/user_actions');


var ProfileTagIndex = React.createClass({
  getInitialState: function () {
    return ({tags: UserStore.currentUser().tags});
  },

  _tagChange: function () {
    return this.setState({tags: UserStore.currentUser().tags});
  },

  componentWillMount: function () {
    this.userListener = UserStore.addListener(this._tagChange);
    UserActions.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },



  render: function () {
    var profileTags;

    if (this.state.tags) {
      profileTags = this.state.tags;
    } else {
      profileTags = [];
    }

    return(
      <div>
        <ul className="prof-tag-index">
          Feed: {
            profileTags.map(function (tag, idx) {
              return <ProfileTagIndexItem key={idx} tag={tag}/>;
            })
          }
        </ul>
      </div>
    );
  }
});


module.exports = ProfileTagIndex;
