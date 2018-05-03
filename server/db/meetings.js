var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var db = require('knex')(config)

//GET /api/meetings
function getMeetings (db) {
  return db('meetings')
    .select()
  }

//POST /api/meetings/
function addNewMeeting (newMeeting, db) {
    console.log(newMeeting)
    return db('meetings')   
      .insert(newMeeting)
}
   
//GET /api/meetings/2/users
function getUsersByMeeting (meeting_id, db) {
  return db('meetings')
    .select('attendees')
    .where('id', meeting_id) 
}

module.exports = {
    getMeetings,
    addNewMeeting,
    getUsersByMeeting
  }