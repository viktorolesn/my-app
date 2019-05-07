import React from "react"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

import Home from './components/home'

const history = createBrowserHistory();

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default class Router extends React.Component{
  render(){
    return(
      <BrowserRouter history={history}>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
