var React = require('react'),
    UserActions = require('../../actions/user_actions'),
    UserStore = require('../../stores/user.js'),
    History = require('react-router').History,
    TagStore = require('../../stores/tag.js'),
    TagActions = require('../../actions/tag_actions.js'),
    TagFormItem = require('./tagFormItem.jsx'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CheckboxGroup = require('react-checkbox-group');


window.UserStore = UserStore;

var ProfileTagForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return {allTags: TagStore.all(), checkedTags: UserStore.currentUser().tags};
  },

  _tagChange: function () {
    this.setState({allTags: TagStore.all(), checkedTags: UserStore.currentUser().tags});
    // TagActions.fetchTags();
  },

  handleChange: function (event) {
    // event.preventDefault(); React doesn't like preventing default with checkboxes
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
      debugger;
      if (checkedTags.indexOf(tag) === -1) {
        renderTags.push(
          <div key={idx}>
            <label>
              {tag.tag_name}
              <input type="checkbox"
                value={tag.id}/>
            </label>
          </div>
        );
      } else {
        renderTags.push(
          <div key={idx}>
            <label>
              {tag.tag_name}
              <input type="checkbox"
                value={tag.id}
                checked/>
            </label>
          </div>
        );
      }
    });

    return(
      <div>
        <CheckboxGroup name="profileTags" value={this.state.checkedTags} ref="tagsGroup" onChange={this.handleChange} >
          {renderTags}
        </CheckboxGroup>
      </div>
    );
  }
});

// allTags.map(function (tag, idx) {
//   return (<div key={idx}>
//     <label>
//       {tag.tag_name}
//       <input type="checkbox"
//         value={tag.id} />
//     </label>
//   </div>);
// })

// <form className="profile-tag-form" onSubmit={this.handleSubmit}>
//   {
//     allTags.map(function (tag, idx) {
//       return <TagFormItem key={idx} tag={tag} handleChange={this.handleChange}/>;
//     })
//   }
// </form>
module.exports = ProfileTagForm;
