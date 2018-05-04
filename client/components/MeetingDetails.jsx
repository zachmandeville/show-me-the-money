import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMeetingHistory} from '../actions/meetings'

class Counter extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(getMeetingHistory())
  }

  // componentWillReceiveProps(nextProps){
  //   this.timeout(nextProps)
  //   console.log(nextProps.meetings)
  // }

  render(){
    {var idx = this.props.match.params.id -1}
    
    {var individualMeeting = this.props.meetings[this.props.match.params.id]}
    {individualMeeting = individualMeeting || ""}
    // {console.log("params", individualMeeting[idx].attendees.user_name)}
    {var individualMeetingAttendees = individualMeeting.attendees}
    {individualMeetingAttendees = individualMeetingAttendees || ""}
    
    return <div className="container">
    <div>
      <br/>
    <h2 className="title is-2">Meeting Details</h2>
    </div>
    <br/>

    

     <table className="table is-fullwidth">
     <tbody>
          <tr>
            <th className="th">Meeting decription</th>
            <td className="td">{individualMeeting.name}</td>
          </tr>
          <tr>
            <th className="th">Start time/date</th>
            <td className="td">{individualMeeting.start_time < 1000 ? `0${individualMeeting.start_time}` : individualMeeting.start_time}</td>
          </tr>
          <tr>
            <th className="th">Length</th>
            <td className="td">{individualMeeting.duration/60}</td>
          </tr>
          <tr>
            <th className="th">Cost</th>
            <td className="td">${individualMeeting.cost/100}</td>
          </tr>
          <tr>
            <th className="th">Cost per minute</th>
            <td className="td">${(individualMeeting.cost / 100) / (individualMeeting.duration / 60)} per minute </td>
          </tr>
          <tr>
            <th className="th">Attendees</th>
            <td className="td">Beyonce, Kelly, Michelle</td>
          </tr>
        </tbody>
      </table>
      <Link className="button is-centered is-primary is-large" to = '/history'>Back</Link>
    </div>
  }
    
  }
  
  function mapStateToProps(state){
    console.log("hello", state.meetings)
    return{
  
      meetings: state.meetings
    }
  }

  export default connect(mapStateToProps)(Counter)
