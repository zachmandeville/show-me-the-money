var router = require('express').Router()

var db = require('../db/users')
var token = require('../auth/token')

router.post('/auth/register', register, token.issue)

function register (req, res, next) {
  const {user_name, first_name, last_name, password} = req.body
  userExists(user_name, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({message: "User Name Taken"})
      createUser(user_name, first_name, last_name, password, req.app.get('db'))
        .then(() => next())
        .catch(err => res.status(500).send({message: "Server Error"}))
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}

router.post('/auth/login', login, token.issue)

function login(req, res, next){
   userExists(req.body.user_name, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(200).send({message: "login sucessful"})
        .then(() => next())
        .catch(err => res.status(500).send({message: "Server Error"}))
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}

router.get('/meetings',(req,res)=>{
  getMeetings(req.app.get('db'))
  .then(meetings =>{
    return res.json(meetings)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})

router.post('/meetings',(req,res)=>{
  addNewMeeting(req.body, req.app.get('db'))
  .then(meetings =>{
    return res.json(meetings)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})


router.get('/meetings/:id/users',(req,res)=>{
  getUsersByMeeting(req.body.id, req.app.get('db'))
  .then(meetings =>{
    return res.json(meetings)
  })
  .catch(err => res.send({message: "unsucessful request"}))
})

router.get('/users',(req,res)=>{
  getUsers(req.app.get('db'))
  .then(users =>{
    return res.json(users)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})


module.exports = router
