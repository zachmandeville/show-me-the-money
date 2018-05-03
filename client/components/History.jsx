import React from 'react'
import {connect} from 'react-redux'

function History (props) {
  return <div className="container">
  <br/>
    <h2 className="title is-2">Meeting history</h2>
      <table className="table is-bordered is-fullwidth">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Date</th>
            <th className="th">Cost</th>
            <th className="th"><abbr title="Length">Length</abbr></th>
            <th className="th"><abbr title="Length">Actions</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="th">3-05-2018</th>
            <td className="td">$38.90</td>
            <td className="td">7 minutes</td>
            <td className="td"><a class="button">Inspect details</a>, <a class="button">edit details</a> or <a class="button">delete meeting</a></td>
          </tr>
        </tbody>
      </table>
  </div>
}

export default connect()(History)
