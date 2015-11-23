import React from 'react'
import R from 'ramda'
import LandingLogo from './landing-logo'
import { Parallax } from 'react-parallax'
import { RaisedButton } from 'material-ui'
import KeyboardArrowDownIcon from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-down'
import Grid from '../grid/grid'

var global = null

try {
  global = window
} catch (e) {
  global = {}
}

export default (props) => {
  var ParralaxComponent = Parallax
  if(R.isEmpty(global)){
    ParralaxComponent = (props) => {
      return (props.children)
    }
  }

  let windowHeight = global.innerHeight || 1000

  return (
    <div>
      <div className="flying-block">
        <a href="mailto:hello@unicorndev.ru">
          <RaisedButton>
            Write us
          </RaisedButton>
        </a>
      </div>
      <ParralaxComponent
        strength={ 300 }
        bgImage="https://images.unsplash.com/photo-1440635592348-167b1b30296f?ixlib=rb-0.3.5&q=80&fm=jpg&s=fbe0a302315371033394b707170b75b5">
        <div style={{ minHeight: windowHeight + (props.bottomSpace || 0) }}>
          <Grid layout="column" layoutAlign="center center" style={{ color: "white", textAlign: "center"}}>
            <Grid layout="column" style={{ height: windowHeight / 2 }} layoutAlign="center center">
              <LandingLogo/>
            </Grid>
            <Grid flex layoutAlign="center">
              <h2 className="title" style={{ fontWeight: "700" }}>unicorndev</h2>
            </Grid>
            <Grid flex layoutAlign="center" style={{ width: "70%" }}>
              <h4 className="header" style={{ fontWeight: "200" }}>Dedicated team of super professionals to keep your startup at the cutting edge</h4>
            </Grid>
            <div className="scroll-down-container">
              <KeyboardArrowDownIcon style={{ width: "48px", height: "48px" }} color={ "white" }/>
            </div>
          </Grid>
        </div>
      </ParralaxComponent>
    </div>
  )
}
