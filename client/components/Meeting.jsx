import React from 'react'
import {connect} from 'react-redux'
import Counter from './Counter'

function Meeting (props) {
  return <div className="container">
  <br/>
    <h2 className="title is-2">Start Meeting</h2>
    <div className="toggleMinimisedOrNot">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input" type="text" placeholder="Meeting Description"/>
          {/* Meeting Description above is for 'name' in meeting db */}
        </div>
      </div>
      <div className="field has-addons">
      <div className="label" id="start">
        Start time:
      </div>
        <div className="control is-expanded">
          <input className="input" type="date" placeholder="Start time"/>
        </div>
        
      </div>
    <div className="field has-addons">
      <div className="control">
        <a className="button is-primary">
          +
        </a>
      </div>
      <div className="control is-expanded">
        <input className="input" type="text" placeholder="Attendee name"/>
      </div>
      <div className="control is-expanded">
        <input className="input" type="text" placeholder="Attendee hourly wage"/>
      </div>
    </div>
    <div className="buttons is-centered">
    {/* these buttons will need to be toggled on this component */}
      <button className="button is-dark">Save</button>
      <button className="button is-primary">Start</button>
      </div>
    </div>
    <button className="button is-centered">Hide/Show</button>
    <Counter />
  </div>
}

export default connect()(Meeting)
