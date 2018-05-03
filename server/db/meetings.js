var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var db = require('knex')(config)

//GET /api/meetings
function getMeetings (db) {
  return db('meetings')
    .select()
  }

//POST /api/meetings/
function newMeeting (name, date, start_time, end_time, attendees, db) {
  return db('meetings')    
    .insert({name, date, start_time, end_time, attendees})
}
   
//GET /api/meetings/2/users
function getUsersByMeeting (meeting_id)
  return db('meetings')
    .select('attendees')
    .where('id', meeting_id) 

