
// --FROM knex relationship stories -- //

const testEnv = require('./setup-db')
const db = require('../../server/db/meetings')

let testDb = testEnv.getTestDb()

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))


test('test meetings from DB', () => {

  //expected is equal to the first line of the DB
  let expected = 'Introduction to API'

  //Don't forget about the return! 
  return db.getMeetings(testDb) 
    .then(meetings => {
      console.log(meetings) 
      expect(meetings[0].name).toEqual(expected)    
    })
    .catch(err => {expect(err).toBeNull()})
       
})

test('test get users by meeting from DB', () => {

    //expected is equal to the first line of the DB
    let expected = { attendees: null } 
  
    //Don't forget about the return! 
    return db.getUsersByMeeting(1, testDb)
      .then(users => {
        console.log(users) 
        expect(users[0]).toEqual(expected)    
      })
      .catch(err => {expect(err).toBeNull()})
         
  })

  test('test post new meeting', () => {
    var newTestMeeting = {
        name: 'Bob', 
        scheduled_date : new Date(), 
        start_time : 900,
        end_time : 1200,
        attendees: 'TBA'}
    //Expected result adds new user id 994 for seed database
    var expected = [3]
    
    db.addNewMeeting (newTestMeeting, testDb)
      .then(res => {
        console.log(res) 
        
        expect(res).toEqual(expected)    
      })
      .catch(err => {expect(err).toBeNull()})
         
  })

