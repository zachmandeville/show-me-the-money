import {combineReducers} from 'redux'

import auth from './auth'
import meetings from './meetingsReducer'
import error from './error'

export default combineReducers({
  auth,
  meetings,
  error
})
