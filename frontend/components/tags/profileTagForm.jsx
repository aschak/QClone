var React = require('react'),
    UserActions = require('../../actions/user_actions'),
    UserStore = require('../../stores/user.js'),
    History = require('react-router').History,
    TagStore = require('../../stores/tag.js'),
    TagActions = require('../../actions/tag_actions.js'),
    TagFormItem = require('./tagFormItem.jsx'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CheckboxGroup = require('react-checkbox-group');

var ProfileTagForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return {allTags: TagStore.all(), checkedTags: UserStore.currentUser().tags};
  },

  _tagChange: function () {
    this.setState({allTags: TagStore.all(), checkedTags: UserStore.currentUser().tags});
    TagActions.fetchTags();
    UserActions.fetchCurrentUser();
  },

  handleChange: function (event) {
    // event.preventDefault(); React doesn't like preventing default with checkboxes
    var checkedTags = this.refs.tagsGroup.getCheckedValues(); //Send patch request to user.t ags
    UserActions.updateProfileTags(checkedTags);
  },

  componentDidMount: function () {
    UserStore.addListener(this._tagChange);
    TagActions.fetchTags();
  },


  render: function () {

    var allTags = this.state.allTags;
    var checkedTags = this.state.checkedTags;

    return(
      <div>
        <CheckboxGroup name="profileTags" value={this.state.checkedTags} ref="tagsGroup" onChange={this.handleChange} >
          {
            allTags.map(function (tag, idx) {
              return (<div key={idx}>
                        <label>
                          {tag.tag_name}
                          <input type="checkbox"
                            value={tag.id}/>
                        </label>
                      </div>);
            })
          }
        </CheckboxGroup>
      </div>
    );
  }
});


// <form className="profile-tag-form" onSubmit={this.handleSubmit}>
//   {
//     allTags.map(function (tag, idx) {
//       return <TagFormItem key={idx} tag={tag} handleChange={this.handleChange}/>;
//     })
//   }
// </form>
module.exports = ProfileTagForm;
