import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as routes from '../constants/routes';

import Navigation from './Navigation'
import SignUp from './pages/Signin/SignUp'
import SignIn from './pages/Signin/SignIn';
import withAuthentication from './withAuthentication'

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <hr />

          <Route exact path={routes.SIGN_UP} component={SignUp} />
          <Route exact path={routes.SIGN_IN} component={SignIn} />
        </div>
      </Router>
    )
  }
}

export default withAuthentication(App);
