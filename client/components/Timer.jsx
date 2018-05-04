import React from 'react'
import {connect} from 'react-redux'

import { startTimer, endTimer, duration } from '../actions/timer'

var Timer = (props) => {
  console.log({props})
  return (
    <div>
      <button onClick={()=>props.dispatch(startTimer())}>Start!</button>
      <button onClick={()=>props.dispatch(duration(props.timer.startTime))}>Duration!</button>
      <button onClick={()=>props.dispatch(endTimer())}>End!</button>
    </div>
  )
}



function mapStateToProps(state) {
  return {
    timer: state.timer
  }
}

export default connect(mapStateToProps)(Timer)
