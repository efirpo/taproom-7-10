import deleteBoolReducer from './../../reducers/delete-bool-reducer';

describe('deleteBoolReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(deleteBoolReducer({}, { type: null })).toEqual({})
  })
  test('Should successfully change deleteBool to true', () => {
    const action = {
      type: 'TOGGLE_DELETE'
    }
    expect(deleteBoolReducer(undefined, action)).toEqual(true)
  })
})