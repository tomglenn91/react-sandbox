import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as routes from '../constants/routes';

import Navigation from './Navigation'
import SignUp from './pages/Signin/SignUp'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <hr />

          <Route exact path={routes.SIGN_UP} component={SignUp} />
        </div>
      </Router>
    )
  }
}

export default App;
