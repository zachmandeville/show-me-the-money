import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Counter (props) {
    return <div className="container">
     <table className="table is-fullwidth">
     <tbody>
          <tr>
            <th className="th">Meeting decription</th>
            <td className="td">Talking about the finances</td>
          </tr>
          <tr>
            <th className="th">Start time/date</th>
            <td className="td">10.00</td>
          </tr>
          <tr>
            <th className="th">Length</th>
            <td className="td">27 m 4 s</td>
          </tr>
          <tr>
            <th className="th">Cost</th>
            <td className="td">$102.34</td>
          </tr>
          <tr>
            <th className="th">Cost per minute</th>
            <td className="td">$3.15</td>
          </tr>
          <tr>
            <th className="th">Attendees</th>
            <td className="td">George Harrison, John Lennon, Paul McCartney</td>
          </tr>
        </tbody>
      </table>
    </div>
  }
  
  export default connect()(Counter)
