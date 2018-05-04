var router = require('express').Router()

var db = require('../db/meetings')


router.get('/',(req,res)=>{
  db.getMeetings(req.app.get('db'))
  .then(meetings =>{
    return res.json(meetings)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})

router.post('/',(req,res)=>{
  let newMeeting = {
    'name':req.body.name,
    'scheduled_date':req.body.date,
    'start_time':req.body.start_time,
    'end_time':req.body.end_time,
    'attendees':JSON.stringify(req.body.attendees)
  }
  console.log('postroute',newMeeting)
  db.addNewMeeting(newMeeting, req.app.get('db'))
  .then(meetings =>{
    return res.json(meetings)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})


router.get('/:id/users',(req,res)=>{
  db.getUsersByMeeting(req.params.id, req.app.get('db'))
  .then(meetings =>{
    let attendees = JSON.parse(meetings.attendees)
    console.log(attendees)
    return res.json(attendees)

  })
  .catch(err => res.send({message: "unsucessful request"}))
})

router.put('/:id',(req,res)=>{
  let editedMeeting = {
    'name':req.body.name,
    'scheduled_date':req.body.date,
    'start_time':req.body.start_time,
    'end_time':req.body.end_time,
    'attendees':JSON.stringify(req.body.attendees)
  }
  console.log('putroute',editedMeeting)
  db.updateNewMeeting(editedMeeting, req.params.id, req.app.get('db'))
  .then(meeting =>{
    return res.json(meeting)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})

module.exports=router