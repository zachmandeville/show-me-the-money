import {SHOW_ERROR} from '../actions/meetings'

function error (state = '', action){
    switch (action.type) {
        case SHOW_ERROR:
            return action.errorMessage
        default: 
            return state

        }
    }
    
    export default error
