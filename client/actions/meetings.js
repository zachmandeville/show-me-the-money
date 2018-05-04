// import request from '../utils/api'
import request from 'superagent'


export function getMeetingHistory() {
    return (dispatch) => {
        // dispatch(requestMeetingHistory())
        return request
        .get('/api/meetings')
        .then (res => {
            dispatch(receiveMeetingHistory(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }

}

export function saveMeeting (state) {
    console.log(state)
    return (dispatch) => 
        request 
            .post('/api/meetings')
            .send(state)
            .then (res => {
                dispatch(savedMeeting(state))
            })
            .catch(err => {
                dispatch(showError(err.message))
              })
}

export function getMeetingAttendees() {
    return (dispatch) => {
        // dispatch(requestMeetingAttendees())
        return request
        .get('/api/meetings/:id/users')
        .then (res => {
            dispatch(receiveMeetingAttendees(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }

}

export function getUsers() {
    return (dispatch) => {
        return request
        .get('/api/users')
        .then (res => {
            dispatch(receiveUsers(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }

}


export function saveCompletedMeeting() {
    return (dispatch) => {
        return request
        .put('/api/meetings/:id')
        .then (res => {
            dispatch(sendCompletedMeeting(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }

}


//actions: 

// export function requestMeetingHistory(){
//     return {
//         type: 'REQUEST_HISTORY'
//     }
// }

export function sendCompletedMeeting(meeting) {
    return {
        type: 'SAVE_COMPLETED',
        meeting
    }
}

export function receiveMeetingHistory(meetings){
    return {
        type: 'RECEIVE_HISTORY',
        meetings

    }
}

export function savedMeeting(){
    return {
        type: 'SAVE_MEETING',
        meeting
    }
}

// export function requestMeetingAttendees(){
//     return {
//         type: 'REQUEST_ATTENDEES'
//     }
// }

export function receiveMeetingAttendees(){
    return {
        type: 'RECEIVE_ATTENDEES',
        attendees

    }
}

// export function requestUsers(){
//     return {
//         type: 'REQUEST_USERS'
//     }
// }

export function receiveUsers(){
    return {
        type: 'RECEIVE_USERS',
        users

    }
}

export function showError() {
    return {
        type: 'SHOW_ERROR',
        errorMessage
    }
}
