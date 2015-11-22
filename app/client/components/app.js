import React from 'react'
import LandingPage from './landing/landing-page'
import Template from './app-template'
import { Router, Route, IndexRoute } from 'react-router'


export default () => {
  return (
    <Router>
      <Route path="/" component={ Template }>
        <IndexRoute component={ LandingPage }/>
      </Route>
    </Router>
  )
}
