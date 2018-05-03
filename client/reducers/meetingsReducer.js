import {RECEIVE_HISTORY} from '../actions/meetings'
import {SAVE_MEETING} from '../actions/meetings'
import {RECEIVE_ATTENDEES} from '../actions/meetings'
import {RECEIVE_USERS} from '../actions/meetings'
import {SHOW_ERROR} from '../actions/meetings'



function meetings (state = [], action){
    switch (action.type) {
        case RECEIVE_HISTORY: 
            return action.meetings
        case SAVE_MEETING:
            return [...state, action.meeting]    
        case RECEIVE_ATTENDEES:
            return [...state, action.attendees]
        case RECEIVE_USERS:
            return [...state, action.users]  
        case SHOW_ERROR:
            return action.errorMessage
        default: 
            return state
    }
}

export default meetings