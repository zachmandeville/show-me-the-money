var router = require('express').Router()

var db = require('../db/users')

router.get('/users',(req,res)=>{
  db.getUsers(req.app.get('db'))
  .then(users =>{
    return res.json(users)
  })
  .catch(err => res.status(500).send({message: "Server Error"}))
})

module.exports={
  router
 }