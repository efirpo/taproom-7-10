import rootReducer from '../../reducers/index';
import kegListReducer from '../../reducers/keg-list-reducer';
import selectKegReducer from '../../reducers/select-keg-reducer';
import editFormReducer from '../../reducers/edit-form-reducer';
import deleteBoolReducer from '../../reducers/delete-bool-reducer';
import { createStore } from 'redux';
import * as a from './../../actions/ActionTypes'

let store = createStore(rootReducer);
let testKeg = {
  brew: 'Death Brew',
  brewer: 'Karl the Necromancer',
  description: 'Kills you.',
  price: '25',
  volumeHeld: 124,
  id: 1
}

describe('rootReducer', () => {
  test('Should return default state if no action type is passed', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      selectedKeg: {},
      showEditForm: false,
      toggleDeleteCheck: false
    })
  })
  test('Check hat initial state of kegListReducer matches rootReducer', () => {
    const action = {
      type: a.ADD_KEG,
      ...testKeg
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action))
  })
})