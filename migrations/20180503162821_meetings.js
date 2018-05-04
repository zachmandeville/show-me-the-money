exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('meetings', table => {
      table.increments('id')
      table.string('name')
      table.timestamp('scheduled_date')
      table.timestamp('start_time')
      table.timestamp('end_time')
      table.string('attendees')
      table.integer('cost')
      table.integer('duration') // This is JSON data (json.stringify data inbound and json.parse data outbound) - routes GET/POST
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('meetings')
  };
  