import React from 'react'
import {connect} from 'react-redux'

import MeetingDetails from './MeetingDetails'

import {Link} from 'react-router-dom'


function UpcomingMeeting (props) {
  return <div className="container">
  <br/>
    <h2 className="title is-2">Upcoming Meetings</h2>
    <div className="buttons is-centered">
      <table className="table is-bordered is-fullwidth">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Date</th>
            <th className="th">Starting time</th>
            <th className="th">Description</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="th">19-05-2018</th>
            <td className="td">10.00</td>
            <td className="td">Discussing finances</td>
            <td className="td"><a class="button">Change details</a> or <a class="button">begin meeting</a></td>
          </tr>
        </tbody>
      </table>
      <button className="button is-dark is-large">Add new meeting</button>
      <button className="button is-primary is-large">View past meetings</button>
      <MeetingDetails /> 
        <Link className="button is-centered is-dark is-large" to = '/meeting'>Add New Meeting</Link>
        <Link className="button is-centered is-primary is-large" to = '/history'>View past meetings</Link>
    </div>
  </div>
}

export default connect()(UpcomingMeeting)

