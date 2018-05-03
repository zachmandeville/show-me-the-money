var hash = require('../auth/hash')


var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var db = require('knex')(config)


function createUser (user_name, first_name, last_name, password, db) {
  return new Promise ((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      db('users')
        .insert({user_name, first_name, last_name, hash})
        .then(user_id => resolve(user_id))
        .catch(err => reject(err))
    })
  })
}
function userExists (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

function getUserByName (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

//Get users for GET /api/users
function getUsers (db) {
  return db('users')
    .select('user_name', 'first_name', 'last_name', 'hourly_wage')
}

module.exports = {
  createUser,
  userExists,
  getUserByName
}
