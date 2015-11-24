import React from 'react'
import ReactDom from 'react-dom'
import Routes from '../client/components/routes'
import Router from 'react-router'


ReactDom.render(<Router routes={ Routes() }></Router>, document.getElementById('app'))
