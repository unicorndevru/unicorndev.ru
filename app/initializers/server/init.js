import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import Routes from '../../client/components/routes'


export const matchRoute = function(path){
  return new Promise(function(resolve, reject){
    match({
      routes: Routes(),
      location: path
    }, function(error, redirectLocation, renderProps){
      var render = null
      if(renderProps){
        render = function(){
          return ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>)
        }
      }
      resolve({ error, redirectLocation, render })
    })
  })
}
