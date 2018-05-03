import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Counter (props) {
    return <div className="container">
    <div className="box">
        Cost counter
    </div>
    <div className="box">
        Timer
    </div>
    </div>
  }
  
  export default connect()(Counter)
