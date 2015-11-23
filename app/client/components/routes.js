import React from 'react'
import LandingPage from './landing/landing-page'
import Template from './app-template'
import { Route, IndexRoute } from 'react-router'

export default () => {
  return {
    path: '/',
    component: Template,
    indexRoute: { component: LandingPage }
  }
}
