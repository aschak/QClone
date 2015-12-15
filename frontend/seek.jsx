var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute;

var SeekIndex = require('./components/seek_index.jsx')




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <SeekIndex/>,
    document.getElementById('root')
  )
})
