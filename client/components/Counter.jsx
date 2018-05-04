import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Timer from './Timer'
import {getMeetingAttendees} from '../actions/meetings'


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        this.calcMoney = this.calcMoney.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        var money = this.calcMoney(nextProps.timer.duration)
        this.setState ({
            time: money
        })
 }

    calcMoney(nextTime) {
    var totalSalary = 0
    var costPerSecond = 0
        for (let i = 0; i < attendees.length; i++) {
        totalSalary += attendees[i].hourly_wage
    }
    return costPerSecond = ((totalSalary / 3600) * nextTime) 

    }

    render() {
        return <div className="container">
        <div className="box">
            Cost counter:
        <p> ${this.state.time} </p>
        </div>
        <div className="box">
                    <Timer />
        </div>
        </div>
    }
    }
  
  function mapStateToProps(state){
    return {
        attendees: state.attendees,
        timer: state.timer
    }
  }
  export default connect(mapStateToProps)(Counter)
