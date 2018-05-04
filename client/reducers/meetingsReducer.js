function meetings (state = [], action){
    switch (action.type) {
        case 'RECEIVE_HISTORY':
            return action.meetings
        case "SAVE_MEETING":
            return [...state, action.meeting]
        case "SAVE_COMPLETED":
            return [...state, action.meeting]
        case "RECEIVE_ATTENDEES":
            return action.attendees
        case 'RECEIVE_USERS':
            return action.users
        default:
            return state
    }
}

export default meetings
