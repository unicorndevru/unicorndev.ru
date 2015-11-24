import React from 'react'
import FeedbackForm from './feedback-form'
import Grid from '../grid/grid'
import SendIcon from 'material-ui/lib/svg-icons/content/send'

export default (props) => {
  return (

    <Grid layout="column" layoutAlign="center center">
      <Grid flex>
        <div className="row">
          <div className="col s12 center">
            <h3>
              <SendIcon style={{ width: "48px", height: "48px" }}/>
            </h3>
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
  )
}
