import * as actions from './../../actions/index';
import * as a from './../../actions/ActionTypes'

describe('taproom actions', () => {
  test('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: a.DELETE_KEG,
      id: 1
    })
  })
  test('toggleEditForm should create TOGGLE_EDIT action', () => {
    expect(actions.toggleEditForm()).toEqual({
      type: a.TOGGLE_EDIT
    })
  })
  test('toggleDeleteCheck should create TOGGLE_DELETE action', () => {
    expect(actions.toggleDeleteCheck()).toEqual({
      type: a.TOGGLE_DELETE
    })
  })
  test('selectKeg should create SELECT_KEG action', () => {
    let keg;

    expect(actions.selectKeg(keg)).toEqual({
      type: a.SELECT_KEG,
      keg
    })
  })
  test('addKeg should create ADD_KEG action', () => {
    const testKeg = {
      brew: 'Death Brew',
      brewer: 'Karl the Necromancer',
      description: 'Kills you.',
      price: '29',
      volumeHeld: 124,
      id: 1
    };
    expect(actions.addKeg(testKeg)).toEqual({
      type: a.ADD_KEG,
      brew: 'Death Brew',
      brewer: 'Karl the Necromancer',
      description: 'Kills you.',
      price: '29',
      volumeHeld: 124,
      id: 1
    })
  })
})