import React from 'react'
import R from 'ramda'
import LandingLogo from './landing-logo'
import { Parallax } from 'react-parallax'
import { RaisedButton } from 'material-ui'
import KeyboardArrowDownIcon from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-down'
import Grid from '../grid/grid'

var global = null


export default class LandingScreen extends React.Component {
  componentWillMount(){
    this.ParallaxComponent = (props) => {
      return (
        <div>
          { props.children }
        </div>
      )
    }
    this.setState({windowHeight: 2000})
  }

  componentDidMount(){
    this.ParallaxComponent = Parallax
    this.setState({ windowHeight: window.innerHeight })
  }

  render(){
    var ParallaxComponent = this.ParallaxComponent
    return (
      <div style={{
          backgroundColor: "#21284F"
        }}>
        <div className="flying-block">
          <a href="mailto:hello@unicorndev.ru">
            <RaisedButton>
              Write us
            </RaisedButton>
          </a>
        </div>
        <ParallaxComponent
          strength={ 300 }
          bgImage="https://images.unsplash.com/photo-1440635592348-167b1b30296f?ixlib=rb-0.3.5&q=80&fm=jpg&s=fbe0a302315371033394b707170b75b5">
          <div style={{
              minHeight: "130vh",
              paddingBottom: "30vh",
              transition: 'min-height 1s ease'
            }}>
            <Grid layout="column" layoutAlign="center center" style={{ color: "white", textAlign: "center"}}>
              <Grid layout="column" style={{
                  minHeight: "50vh",
                  transition: 'height 1s ease'
                }} layoutAlign="center center">
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
        </ParallaxComponent>
      </div>
    )
  }
}
