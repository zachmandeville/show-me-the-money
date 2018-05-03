import React from 'react'
import {connect} from 'react-redux'

function History (props) {
  return <div className="container">
    <h2 className="title is-2">Meeting history</h2>
      <table className="table is-bordered is-fullwidth">
        <thead className="thead">
          <tr className="tr">
            <th className="th"><abbr title="Date">Date</abbr></th>
            <th className="th">Cost</th>
            <th className="th"><abbr title="Length">Length</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="th">3-05-2018</th>
            <td className="td">$38.90</td>
            <td className="td">7 minutes</td>
          </tr>
        </tbody>
      </table>
  </div>
}

export default connect()(History)
