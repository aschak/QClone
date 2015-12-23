var React = require('react');


var TagFormItem = React.createClass({

  render: function () {
    var tag = this.props.tag;
    return (
      <div>
        <label>
          {tag.tag_name}
          <input type="checkbox"
            checked={this.props.checked}
            onChange={this.props.handleChange} value={tag.tag_name}/>
        </label>
      </div>
    );
  }
});


module.exports = TagFormItem;
