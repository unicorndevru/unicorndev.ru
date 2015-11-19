import React from 'react'
import FeedbackForm from './feedback-form'
import View from 'react-flexbox-ui'

export default (props) => {
  return (
    <div className="container" id="contact">
      <View column justifyCenter alignCenter>
        <View item>
          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send"></i></h3>
              <h4>Write us: <a href="mailto:hello@unicorndev.ru">hello@unicorndev.ru</a></h4>
            </div>
          </div>
        </View>
        <View item style={{ width: "50%" }}>
          <p>
            Drop us a line:
          </p>
          <FeedbackForm/>
        </View>
      </View>
    </div>
  )
}
