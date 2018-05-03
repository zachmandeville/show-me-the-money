import request from './utils/api'




export function getMeetingHistory() {
    return (dispatch) => {
        dispatch(requestMeetingHistory())
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

export function saveMeeting () {
    return (dispatch) => 
        request 
            .post('/api/meetings')
            .then (res => {
                dispatch(savedMeeting(res.body))
            })
            .catch(err => {
                dispatch(showError(err.message))
              })
}

export function getMeetingAttendees() {
    return (dispatch) => {
        dispatch(requestMeetingAttendees())
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
        dispatch(requestUsers())
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


//actions: 

export function requestMeetingHistory(){
    return {
        type: 'REQUEST_HISTORY'
    }
}

export function receiveMeetingHistory(){
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

export function requestMeetingAttendees(){
    return {
        type: 'REQUEST_ATTENDEES'
    }
}

export function receiveMeetingAttendees(){
    return {
        type: 'RECEIVE_ATTENDEES',
        attendees

    }
}

export function requestUsers(){
    return {
        type: 'REQUEST_USERS'
    }
}

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