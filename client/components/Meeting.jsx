import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {saveMeeting} from '../actions/meetings'
import Counter from './Counter'

class Meeting extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     name: '',
     scheduled_date: '',
     start_time: '',
     user_name: '',
     hourly_wage: '',
     saved: false
   }
   this.updateDetails = this.updateDetails.bind(this)
   this.submit = this.submit.bind(this)
 }
 
 updateDetails(e) {
   this.setState({[e.target.name]: e.target.value})
   console.log(this.state)
 }
 submit(e) {
   console.log("submitting")
   e.preventDefault()
   e.target.reset()
  this.props.dispatch(saveMeeting(
    {name:this.state.name, scheduled_date:this.state.scheduled_date, start_time:this.state.start_time, attendees:[{user_name:this.state.user_name, hourly_wage:this.state.hourly_wage}]}
  ))
  this.setState = {
    saved:true
  }
 }

 render() {
 return <div className="container">
 <br/>
   <h2 className="title is-2">Start Meeting</h2>
   <form onSubmit={this.submit}>
     <div className="toggleMinimisedOrNot">
       <div className="field has-addons">
         <div className="control is-expanded">
           <input className="input" type="text" placeholder="Meeting Description" name="name" onChange={this.updateDetails}/>
           {/* Meeting Description above is for 'name' in meeting db */}
         </div>
       </div>
       <div className="field has-addons">
         <div className="label" id="start">
           Start time:
         </div>
         <div className="control is-expanded">
           <input className="input" type="time" placeholder="Start time" name = "start_time" onChange={this.updateDetails}/>
           <input className="input" type="date" placeholder="Start time" name = "scheduled_date" onChange={this.updateDetails}/>

         </div>
       </div>
       <div className="field has-addons">
         <div className="control">
           <a className="button is-primary">
             +
           </a>
         </div>
         <div className="control is-expanded">
           <input className="input" type="text" placeholder="Attendee name" name="user_name" onChange={this.updateDetails}/>
         </div>
         <div className="control is-expanded">
           <input className="input" type="text" placeholder="Attendee hourly wage" name="hourly_wage" onChange={this.updateDetails}/>
         </div>
       </div>
       <div className="buttons is-centered">
         {/* these buttons will need to be toggled on this component */}
           {this.state.saved
           ? <Link to='/upcomingmeeting'> <button className="button is-primary">Start</button></Link>
           :<Link to='/upcomingmeeting'> <button className="button is-dark" type='submit'>Save</button> </Link>}
       </div>
     </div>
   </form>
   <Counter />
 </div>
}
}

export default connect()(Meeting)


// import React from 'react'
// import {connect} from 'react-redux'
// import Counter from './Counter'

// function Meeting (props) {
//   return <div className="container">
//   <br/>
//     <h2 className="title is-2">Start Meeting</h2>
//     <div className="toggleMinimisedOrNot">
//       <div className="field has-addons">
//         <div className="control is-expanded">
//           <input className="input" type="text" placeholder="Meeting Description"/>
//           {/* Meeting Description above is for 'name' in meeting db */}
//         </div>
//       </div>
//       <div className="field has-addons">
//       <div className="label" id="start">
//         Start time:
//       </div>
//         <div className="control is-expanded">
//           <input className="input" type="time" placeholder="Start time"/>
//         </div>
        
//       </div>
//     <div className="field has-addons">
//       <div className="control">
//         <a className="button is-primary">
//           +
//         </a>
//       </div>
//       <div className="control is-expanded">
//         <input className="input" type="text" placeholder="Attendee name"/>
//       </div>
//       <div className="control is-expanded">
//         <input className="input" type="text" placeholder="Attendee hourly wage"/>
//       </div>
//     </div>
//     <div className="buttons is-centered">
//     {/* these buttons will need to be toggled on this component */}
//       <button className="button is-dark">Save</button>
//       <button className="button is-primary">Start</button>
//       </div>
//     </div>
//     <button className="button is-centered">Hide/Show</button>
//     <Counter />
//   </div>
// }

// export default connect()(Meeting)
