
function timer (state = {}, action){
  switch (action.type) {
    case 'START_TIMER':
      return {
        startTime: action.startTime
      }
      case 'END_TIMER':
      return {
        endTime: action.endTime
      }
      case 'DURATION':
      return {
        duration: ''
      }
    default:
      return state
  }
}

export default timer
