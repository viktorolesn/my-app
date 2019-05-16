import React from "react"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

import Home from './pages/home';
import SignUp from "./components/sign-up/sign-up";
import PersonList from "./components/PersonList"
import LogIn from "./components/log-in/log-in";
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
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/login" component={LogIn}></Route>
            <Route path="/personlist" component={PersonList}></Route>
            <Route component={NoMatch} />
          </Switch>
      </BrowserRouter>
    )
  }
}
