import meetings from '../../client/reducers/meetingsReducer'

test('Reducer initial state', () => {
    const expected = []
    const action = {}
  
    const actual = meetings(undefined, action)
  
    expect(actual).toEqual(expected)
  })

  test('save a meeting', ()=> {
    const meeting = {
      "id": 1,
      "name": "Introduction to API",
      "start_time": 800,
      "end_time": 900,
      "attendees": [
        {id: 1, user_name: "bob", first_name: "Bob", last_name: "Smith", hourly_wage: 10},
        {id: 2, user_name: "alice", first_name: "Alice", last_name: "Smith", hourly_wage: 10},
        {id: 3, user_name: "eve", first_name: "Eve", last_name: "Miller", hourly_wage: 10},
        {id: 4, user_name: "chris", first_name: "Chris", last_name: "Knight", hourly_wage: 10}
        ]
    }
    const expected = [
      meeting
    ]
    const action = {
      type: 'SAVE_MEETING',
      meeting
    }

    const actual = meetings([], action)
    expect(actual).toEqual(expected)
    expect(actual[0]).toBe(meeting)
  })