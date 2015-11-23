import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import Routes from '../client/components/routes'


export const render = (path) => {
  return new Promise(function(resolve, reject){

    match({
      routes: Routes(),
      location: path
    }, function(error, redirectLocation, renderProps){
      if(error){
        reject({
          status: 500,
          error: error
        })
      } else if (redirectLocation){
        reject({
          status: 302,
          redirect: redirectLocation
        })
      } else if (renderProps){
        resolve({
          html: ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>),
          status: 200
        })
      } else {
        reject({
          status: 404,
          text: 'Not found'
        })
      }
    })
  })
}
