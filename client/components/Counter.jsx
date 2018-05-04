import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMeetingAttendees} from '../actions/meetings'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            counter: 10000 
        }
        this.calcMoney = this.calcMoney.bind(this)
        this.addTime = this.addTime.bind(this)
    }
    componentWillMount() {
        setInterval(() => this.addTime(), 1000)
    }

    addTime() {
      var nextTime = this.state.counter + 1000
      this.setState ({
          counter: nextTime
      })
      this.calcMoney()
    }


    calcMoney() {
    var totalSalary = 400
    var costPerSecond = 0
    costPerSecond = ((totalSalary / 3600) * this.state.counter) 
    this.setState ({
        time: costPerSecond
    })
    }

    render() { 
        return <div className="container">
        <div className="box">
            Cost counter:
        <p> ${this.state.time} </p>
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
        timer: state.timer
    }
  }
  export default connect(mapStateToProps)(Counter)
