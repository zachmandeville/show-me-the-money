import {combineReducers} from 'redux'

import auth from './auth'
import meetings from './meetingsReducer'
import error from './error'
import timer from './timeReducer'

export default combineReducers({
  auth,
  meetings,
  error,
  timer
})
