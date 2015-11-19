import React from 'react'
import { TextField, RaisedButton, LinearProgress } from 'material-ui'
import View from 'react-flexbox-ui'
import superagent from 'superagent'

export default class FeedbackForm extends React.Component {

  state = {
    inProgress: false
  }

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }


  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submit(event){
    event.preventDefault()
    this.setState({ inProgress: true })
    superagent
      .post('/api/feedback')
      .send(this.state)
      .end((error, res) => {
        this.setState({ inProgress: false })
        if (res.ok) {
          this.setState({ sent: true })
        } else {
          this.setState({ error: res })
        }
      })
  }

  render(){
    let textFieldStyle = {
      width: "100%"
    }
    console.log(this)
    if(this.state.sent){
      return (
        <div>
          <p>{ "Thanks! We will reply you soon" }</p>
        </div>
      )
    }

    var status = null
    if(this.state.inProgress){
      status = <LinearProgress mode="indeterminate"  />
    } else if(this.state.error && this.state.error.message) {
      status = <h4>{ this.state.error.message }</h4>
    }


    return (
      <form onSubmit={ this.submit }>
        <View column alignEnd>
          <TextField style={ textFieldStyle } name="name" hintText={ "Your name" } onChange={ this.handleChange }/>
          <TextField style={ textFieldStyle } type={ "email" } name="email" hintText={ "E-mail for reply" }  onChange={ this.handleChange }/>
          <TextField
            style={ textFieldStyle }
            name="message"
            multiLine={ true }
            hintText={ "Message" }
            onChange={ this.handleChange }/>
          <div>
            { status }
          </div>
          <RaisedButton
            style={{ width: "60px", marginTop: "2em"}}
            primary={ true }
            label="Submit"
            type={'submit'} />
        </View>
      </form>

    )
  }
}
