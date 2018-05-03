import React from 'react'
import {connect} from 'react-redux'

function Meeting (props) {
  return <div className="container">
  <br/>
    <h2 className="title is-2">Start Meeting</h2>
      <div className="field has-addons">
        <div className="control" id="plus-button">
            <a className="button is-primary">
              +
            </a>
          </div>
          <div className="control" id="name-entry">
            <input className="input" type="text" placeholder="Name"/>
          </div>
          <div className="control" id="cost-entry">
            <input className="input" type="text" placeholder="$"/>
          </div>
      </div>
  </div>
}

export default connect()(Meeting)
