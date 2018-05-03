import React from 'react'
import {connect} from 'react-redux'
import MeetingDetails from './MeetingDetails'
import {Link} from 'react-router-dom'

function History (props) {
  return <div className="container">
  <br/>
    <h2 className="title is-2">Meeting history</h2>
      <table className="table is-bordered is-fullwidth">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Date</th>
            <th className="th">Cost</th>
            <th className="th">Length</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="th">3-05-2018</th>
            <td className="td">$38.90</td>
            <td className="td">7 minutes</td>
            <td className="td">
            <Link to = '/meetingdetails'><a>Inspect details</a></Link> or <a >delete meeting</a></td>
          </tr>
        </tbody>
      </table>
      <div className="buttons is-centered">
      <Link to = '/graph'/> <a className="button is-dark">Graphical representation</a>
      </div>
  </div>
}

export default connect()(History)
