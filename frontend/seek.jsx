var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute;

var SeekIndex = require('./components/seek_index.jsx');
var QuestionShow = require('./components/questionShow.jsx');


window.ApiUtil = require('./util/api_util.js');
window.QuestionStore = require('./stores/question.js');

var App = React.createClass({
  render: function () {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})


var routes = (
<Route path='/' component={App}>
  <IndexRoute component={SeekIndex}/>
  <Route path='question/:id' component={QuestionShow}/>

</Route>
)


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');

  if (root) {
    ReactDOM.render(
      <Router>{routes}</Router>,
      root
    );
  }
});
