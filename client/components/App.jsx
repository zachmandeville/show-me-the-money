import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

// import Login from './Login'
// import Register from './Register'
// import Nav from './Nav'
import Meeting from './Meeting'
// import History from './History'
// import UpcomingMeeting from './UpcomingMeeting'
// import MeetingDetails from './MeetingDetails'
// import EditMeeting from './EditMeeting';

const App = ({auth}) => (
  <Router>
    <div className="container has-text-centered">

      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <h1 className="title is-1">Show Me The Money</h1>
          </Link>
          {/* <Nav /> */}
        </div>
      </div>

      <div className=''>
        {/* {!auth.isAuthenticated &&
          <Route exact path="/" component={Login} />
        } */}
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
        <Route path="/meeting" component={Meeting} />
        {/* <Route path="/history" component={History} />
        <Route path="/upcomingmeeting" component={UpcomingMeeting} />
        <Route path="/meetingdetails" component={MeetingDetails} />
        <Route path="/editmeeting" component={EditMeeting} /> */}
      </div>

    </div>
  </Router>
)

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
