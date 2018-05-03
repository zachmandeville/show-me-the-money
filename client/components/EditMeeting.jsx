import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Edit (props) {
    return <div className="container">
    <div>
      <br/>
    <h2 className="title is-2">Meeting Details</h2>
    </div>
    <br/>
     <table className="table is-fullwidth">
     <tbody>
          <tr>
            <th className="th">Meeting decription</th>
            <td className="td"><input className="input" type="text" placeholder="Talking about the finances"/></td>
          </tr>
          <tr>
            <th className="th">Start time/date</th>
            <td className="td"><input className="input" type="date" placeholder="10.00"/></td>
          </tr>
          <tr>
            <th className="th">Attendees</th>
            <td className="td"><input className="input" type="text" placeholder="George Harrison, John Lennon, Paul McCartney"/></td>
          </tr>
        </tbody>
      </table>
      <Link className="button is-centered is-primary is-large" to = '/upcomingmeeting'>Cancel</Link>
      <Link className="button is-centered is-dark is-large" to = '/upcomingmeeting'>Save</Link>
    </div>
  }
  
  export default connect()(Edit)
