import React from 'react'
import LandingLogo from './landing-logo'
import { Parallax } from 'react-parallax'
import Grid from '../grid/grid'


export default () => {
  return (
    <div>
      <div className="flying-block">
        <a href="mailto:hello@unicorndev.ru">Write us</a>
      </div>
      <Parallax
        strength={ 300 }
        bgImage="https://images.unsplash.com/photo-1443926818681-717d074a57af?dpr=2&fit=crop&fm=jpg&h=675&ixlib=rb-0.3.5&q=50&w=1300">
        <div style={{ minHeight: window.innerHeight }}>
          <Grid layout="column" layoutAlign="center center">
            <Grid layout="column" style={{ height: window.innerHeight / 2 }} layoutAlign="center center">
              <LandingLogo/>
            </Grid>
            <Grid flex layoutAlign="center" style={{ textAlign: "center"}}>
              <h2 className="header col s12 mega-strong white-text">unicorndev</h2>
            </Grid>
            <Grid flex layoutAlign="center" style={{ textAlign: "center", width: "70%" }}>
              <h4 className="header col s12 light white-text">Dedicated team of super professionals to keep your startup at the cutting edge</h4>
            </Grid>
          </Grid>
        </div>
      </Parallax>
    </div>
  )
}
