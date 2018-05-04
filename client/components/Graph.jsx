import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Graph (props) {
    return <div className="container">
    Graph!
    </div>
  }
  
  export default connect()(Graph)
