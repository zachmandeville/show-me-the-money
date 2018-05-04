import React from 'react'
import {connect} from 'react-redux'
import MeetingDetails from './MeetingDetails'
import {Link} from 'react-router-dom'
import Graph from './Graph'
import {getMeetingHistory} from '../actions/meetings'

class History extends React.Component{

  componentDidMount(){
    this.props.dispatch(getMeetingHistory())
  }

  render(){
    return <div className="container">
    <br/>
      <h2 className="title is-2">Meeting history</h2>
        <table className="table is-bordered is-fullwidth">
          <thead className="thead">
            <tr className="tr">
              <th className="th">Date</th>
              <th className="th">Cost</th>
              <th className="th">Length</th>
              <th className="th">Actions</th>
            </tr>
          </thead>
          {/* <div>{this.props}</div> */}
          
          {this.props.meetings.map(meeting => {
            return <tbody>
            <tr>
              <th className="th">{meeting.name}</th>
              <td className="td">${meeting.cost/100}</td>
              <td className="td">{meeting.duration/60} minutes</td>
              <td className="td">
              <Link to= {`/meetingdetails/${meeting.id}`} ><a>Inspect details</a></Link> or <a >delete meeting</a></td>
            </tr>
            </tbody>
          })}
         
      

        </table>
        <div className="buttons is-centered">
        <Link to = '/graph'><a className="button is-dark">Graphical representation</a>
        </Link> 
        </div>
    </div>
  }
 
}

function mapStateToProps(state){
  console.log("hello", state.meetings)
  return{

    meetings: state.meetings
  }
}

export default connect(mapStateToProps)(History)
