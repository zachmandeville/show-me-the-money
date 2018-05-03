import React from 'react'
import {connect} from 'react-redux'

function UpcomingMeeting (props) {
  return <div className="container">
  <br/>
    <h2 className="title is-2">Upcoming Meetings</h2>
    <div className="buttons is-centered">
      <button className="button is-dark is-large">CREATE</button>
      <button className="button is-primary is-large">HISTORY</button>
    </div>
  </div>
}

export default connect()(UpcomingMeeting)