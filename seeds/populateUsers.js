const {hashSync} = require('bcrypt')
const saltRounds = 10

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'bob', first_name: 'Bob', last_name: 'Smith', hash: hashSync('Krang', saltRounds), hourly_wage: 10},
        {user_name: 'alice', first_name: 'Alice', last_name: 'Smith', hash: hashSync('Krang', saltRounds), hourly_wage: 10},
        {user_name: 'eve', first_name: 'Eve', last_name: 'Miller', hash: hashSync('Krang', saltRounds), hourly_wage: 10},
        {user_name: 'chris', first_name: 'Chris', last_name: 'Knight', hash: hashSync('Krang', saltRounds), hourly_wage: 10}
      ]);
    });
};
