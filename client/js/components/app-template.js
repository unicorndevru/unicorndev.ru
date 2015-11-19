import React from 'react'
import Footer from './app-footer'

export default (props) => {
  return (
    <div>
      { props.children }
      <Footer/>
    </div>
  )
}
