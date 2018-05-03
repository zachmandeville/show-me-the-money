import {combineReducers} from 'redux'

import auth from './auth'
import meetings from './meetingsReducer'

export default combineReducers({
  auth,
  meetings
})
