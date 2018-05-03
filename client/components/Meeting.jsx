import React from 'react'
import {connect} from 'react-redux'

function Meeting (props) {
  return <div className="container">
  <br/>
    <h2 className="title is-2">Start Meeting</h2>
    <div className="field has-addons">
      <div className="control">
        <a className="button is-primary">
          +
        </a>
      </div>
      <div className="control is-expanded">
        <input className="input" type="text" placeholder="Name"/>
      </div>
      <div className="control is-expanded">
        <input className="input" type="text" placeholder="$"/>
      </div>
    </div>
    <div className="buttons is-centered">
      <button className="button is-dark">Save</button>
      <button className="button is-primary">Start</button>
    </div>
  </div>
}

export default connect()(Meeting)
