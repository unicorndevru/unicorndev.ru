import React from 'react'
import FeedbackForm from './feedback-form'
import View from 'react-flexbox-ui'
import Grid from '../grid/grid'

export default (props) => {
  return (
    <div className="container" id="contact">
      <Grid layout="column" layoutAlign="center center">
        <Grid flex>
          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send"></i></h3>
              <h4>Write us: <a href="mailto:hello@unicorndev.ru">hello@unicorndev.ru</a></h4>
            </div>
          </div>
        </Grid>
        <Grid flexSm={ 100 } flexGtSm={ 50 } flexOffsetGtSm={ 25 }>
          <p>
            Drop us a line:
          </p>
          <FeedbackForm/>
        </Grid>
      </Grid>
    </div>
  )
}
