import rootReducer from '../../reducers/index';
import selectKegReducer from '../../reducers/select-keg-reducer';
import editFormReducer from '../../reducers/edit-form-reducer';
import deleteBoolReducer from '../../reducers/delete-bool-reducer';
import { createStore } from 'redux';
import * as a from './../../actions/ActionTypes'

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is passed', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      selectedKeg: {},
      showEditForm: false,
      toggleDeleteCheck: false
    })
  })
})