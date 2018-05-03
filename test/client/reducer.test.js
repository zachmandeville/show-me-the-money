const meetings = require('../../client/reducers/meetingsReducer')

test('Reducer initial state', () => {
    const expected = []
    const action = {}
  
    const actual = catReducer(undefined, action)
  
    expect(actual).toEqual(expected)
  })