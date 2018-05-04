import React from 'react'
import {connect} from 'react-redux'

import { startTimer, endTimer, duration } from '../actions/timer'

var Timer = (props) => {
  var tickTock =  setInterval(() => props.dispatch(props.timer.startTime && duration(props.timer.startTime)),1000)
  return (
    <div>
      <button onClick={()=>props.dispatch(startTimer())}>Start!</button>
      <p>{props.timer.duration}</p>
      <button onClick={stop}>End!</button>
    </div>
  )
  function stop () {
    console.log('dog')

    props.dispatch(endTimer())
  }
}



function mapStateToProps(state) {
  return {
    timer: state.timer
  }
}

export default connect(mapStateToProps)(Timer)
