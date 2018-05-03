var router = require('express').Router()

var db = require('../db/meetings')


router.get('/meetings',(req,res)=>{
  db.getMeetings(req.app.get('db'))
  .then(meetings =>{
    return res.json(meetings)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})

router.post('/meetings',(req,res)=>{
  let newMeeting = {
    'name':req.body.name,
    'scheduled_date':req.body.date,
    'start_time':req.body.start_time,
    'end_time':req.body.end_time,
    'attendees':JSON.stringify(req.body.attendees)
  }
  db.addNewMeeting(newMeeting, req.app.get('db'))
  .then(meetings =>{
    return res.json(meetings)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})


router.get('/meetings/:id/users',(req,res)=>{
  db.getUsersByMeeting(req.body.id, req.app.get('db'))
  .then(meetings =>{
    return res.json(meetings)
  })
  .catch(err => res.send({message: "unsucessful request"}))
})

module.exports={
 router
}