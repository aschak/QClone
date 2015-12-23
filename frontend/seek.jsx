var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute;

var SeekIndex = require('./components/seek_index.jsx'),
    QuestionShow = require('./components/questions/questionShow.jsx'),
    NavBar = require('./components/navBar.jsx'),
    ProfileTagIndex = require('./components/tags/profileTagIndex.jsx'),
    ProfileTagForm = require('./components/tags/profileTagForm.jsx');


window.ApiUtil = require('./util/api_util.js');
window.QuestionStore = require('./stores/question.js');

var App = React.createClass({

  //Double check that state gets passed to children as props in router
  // componentDidMount: function () {
  //   UserActions.fetchCurrentUser();
  // },

  render: function () {
    return(
      <div className="container">

        <div>
          <img className='logo-pic' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Knowledge_transfer.svg/1280px-Knowledge_transfer.svg.png"/>
          <NavBar/>
        </div>

        <ProfileTagIndex/>
        <ProfileTagForm/>


        {this.props.children}
      </div>
    );
  }
});


var routes = (
<Route path='/' component={App}>
  <IndexRoute component={SeekIndex}/>
  <Route path='question/:id' component={QuestionShow}/>

</Route>
);


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');

  if (root) {
    ReactDOM.render(
      <Router>{routes}</Router>,
      root
    );
  }
});
