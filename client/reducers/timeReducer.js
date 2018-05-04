
function timer (state = {}, action){
  switch (action.type) {
    case 'START_TIMER':
      return {
        startTime: action.startTime
      }
      case 'END_TIMER':
      return {
        startTime: state.startTime,
        duration: state.duration,
        endTime: action.endTime
      }
      case 'DURATION':
      return {
        startTime: state.startTime,
        duration: action.duration

      }
    default:
      return state
  }
}

export default timer
