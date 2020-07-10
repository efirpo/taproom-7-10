import editFormReducer from './../../reducers/edit-form-reducer';

describe('editFormReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(editFormReducer({}, { type: null })).toEqual({});
  })
  test('Should successfully make showEditForm true', () => {
    const action = {
      type: 'TOGGLE_EDIT'
    }
    expect(editFormReducer(undefined, action)).toEqual(true)
  })
})