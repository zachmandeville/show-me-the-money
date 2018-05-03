var router = require('express').Router()

var db = require('../db/users')
var token = require('../auth/token')

router.post('/auth/register', register, token.issue)

function register (req, res, next) {
  const {user_name, first_name, last_name, password} = req.body
  db.userExists(user_name, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({message: "User Name Taken"})
      db.createUser(user_name, first_name, last_name, password, req.app.get('db'))
        .then(() => next())
        .catch(err => res.status(500).send({message: "Server Error"}))
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}

router.post('/auth/login', login, token.issue)

function login(req, res, next){
   db.userExists(req.body.user_name, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(200).send({message: "login sucessful"})
        .then(() => next())
        .catch(err => res.status(500).send({message: "Server Error"}))
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}



module.exports = router
