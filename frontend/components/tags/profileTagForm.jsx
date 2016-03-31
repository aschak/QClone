var React = require('react'),
    UserActions = require('../../actions/user_actions'),
    UserStore = require('../../stores/user.js'),
    History = require('react-router').History,
    TagStore = require('../../stores/tag.js'),
    TagActions = require('../../actions/tag_actions.js'),
    TagFormItem = require('./tagFormItem.jsx'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var CheckboxGroup = require('react-checkbox-group');


window.UserStore = UserStore;

var ProfileTagForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return {allTags: TagStore.all(), checkedTags: UserStore.currentUser().tags};
  },

  _tagChange: function () {
    this.setState({allTags: TagStore.all(), checkedTags: UserStore.currentUser().tags});
  },

  handleChange: function (event) {
    var checkedTags = this.refs.tagsGroup.getCheckedValues(); //Send patch request to user.t ags
    UserActions.updateProfileTags(checkedTags);
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._tagChange);
    TagActions.fetchTags();
    UserActions.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },


  render: function () {

    var allTags = this.state.allTags,
        checkedTags = this.state.checkedTags,
        renderTags = [];


    allTags.forEach(function (tag, idx) {
      var checked = false;
      checkedTags.forEach(function (checkTag) {
        if (tag.id === checkTag.id) {
          checked = true;
        }
      });

      renderTags.push(
            <div className="profile-tags-item" key={idx}>
              <label>
                <span id='tags-form-item'
                  className='input-group-addon'>
                  {tag.tag_name}
                  <input
                    id='tags-form'
                    type="checkbox"
                    value={tag.id}
                    checked={checked} />
                </span>
              </label>
            </div>
        );
    });

    return(
      <div className="profile-tags-container">
        My Tags:
        <br/>
        <br/>
        <CheckboxGroup name="profileTags" value={this.state.checkedTags} ref="tagsGroup" onChange={this.handleChange} >
          {renderTags}
        </CheckboxGroup>
      </div>
    );
  }
});

module.exports = ProfileTagForm;
