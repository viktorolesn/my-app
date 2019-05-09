import React from "react"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

import Home from './pages/home';

const history = createBrowserHistory();

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const NoMatch = () => (
  <h1>404 Page Not Found </h1>
)

export default class Router extends React.Component{
  render(){
    return(
      <BrowserRouter history={history}>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    )
  }
}
