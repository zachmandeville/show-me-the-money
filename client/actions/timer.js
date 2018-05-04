//actions
export function startTimer () {
 return {
   type: 'START_TIMER',
   startTime: new Date()
 }
}

export function endTimer () {
  return {
    type: 'END_TIMER',
    endTime: new Date()
  }
}

export function duration (startTime) {
  return {
    type: 'DURATION',
    duration: Math.floor((((new Date()).getTime()) - startTime.getTime())/1000)
  }
}

//api requests
// export function sendTimeInformation () {
//   return (dispatch) => {
//     return request
//     .post('')
//     .then (res => {
//       dispatch(startTimer(res.body))
//     })
//     .catch (err => {
//       dispatch(ShowError(err.message))
//     })
//   }
// }
