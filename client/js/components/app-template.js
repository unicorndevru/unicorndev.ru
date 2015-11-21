import React from 'react'
import Footer from './app-footer'

export default (props) => {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      { props.children }
      <Footer/>
    </div>
  )
}
