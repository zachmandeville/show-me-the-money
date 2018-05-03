exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {
            name: "Introduction to API",
            scheduled_date: new Date(),
            start_time: 800,
            end_time: 900,
            attendees: [
              {id: 1, user_name: "bob", first_name: "Bob", last_name: "Smith", hourly_wage: 10},
              {id: 2, user_name: "alice", first_name: "Alice", last_name: "Smith", hourly_wage: 10},
              {id: 3, user_name: "eve", first_name: "Eve", last_name: "Miller", hourly_wage: 10},
              {id: 4, user_name: "chris", first_name: "Chris", last_name: "Knight", hourly_wage: 10}
              ]
          },
          {
            name: "Followup on API",
            scheduled_date: new Date(),
            start_time: 800,
            end_time: 900,
            attendees: [
              {id: 1, user_name: "bob", first_name: "Bob", last_name: "Smith", hourly_wage: 10},
              {id: 2, user_name: "alice", first_name: "Alice", last_name: "Smith", hourly_wage: 10},
              {id: 3, user_name: "eve", first_name: "Eve", last_name: "Miller", hourly_wage: 10}
              ]
          }
        ]);
    });
};
