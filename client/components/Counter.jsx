import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMeetingAttendees} from '../actions/meetings'
import {newTimeAction} from '../actions/time' // change to whatever Laura and Zach call this



class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time
        }
        this.calcMoney = this.calcMoney.bind(this)
    }

calcMoney() {
  var totalSalary = 0
  var costPerSecond = 0
    for (let i = 0; i < attendees.length; i++) {
    totalSalary += attendees[i].hourly_wage
  }
  return costPerSecond = ((totalSalary / 3600) * this.state.time) 

}

render() {
    return <div className="container">
    <div className="box">
        Cost counter:
       <p> {this.calcMoney()} </p>
    </div>
    <div className="box">
        Timer
    </div>
    </div>
  }
}
  
  function mapStateToProps(state){
    return {
        attendees: state.attendees,
        time: state.time
    }
  }
  export default connect(mapStateToProps)(Counter)
