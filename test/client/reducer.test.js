import meetings from '../../client/reducers/meetingsReducer'

test('Reducer initial state', () => {
    const expected = []
    const action = {}
  
    const actual = meetings(undefined, action)
  
    expect(actual).toEqual(expected)
  })