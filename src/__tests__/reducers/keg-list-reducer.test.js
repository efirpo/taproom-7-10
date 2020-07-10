import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  const testState = {
    1: {
      brew: 'Death Brew',
      brewer: 'Karl the Necromancer',
      description: 'Kills you.',
      price: '29',
      volumeHeld: 124,
      showEdit: false,
      showDelete: false,
      id: 1
    },
    2: {
      brew: 'Love Potion',
      brewer: 'Tammy the Enchanter',
      description: 'Makes you love Tammy.',
      price: '7',
      volumeHeld: 124,
      showEdit: false,
      showDelete: false,
      id: 2
    }
  }
  const testKeg = {
    1: {
      brew: 'Death Brew',
      brewer: 'Karl the Necromancer',
      description: 'Kills you.',
      price: '29',
      volumeHeld: 124,
      showEdit: false,
      showDelete: false,
      id: 1
    }
  }
  let action;

  test('Should return default state if there is no action type passed to reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  })

  test('Should successfully add new keg data to masterKegList', () => {
    const { brew, brewer, description, price, volumeHeld, showEdit, showDelete, id } = testKeg;
    action = {
      type: 'ADD_KEG',
      brew: brew,
      brewer: brewer,
      description: description,
      price: price,
      volumeHeld: volumeHeld,
      showEdit: showEdit,
      showDelete: showDelete,
      id: id
    }
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        brew: brew,
        brewer: brewer,
        description: description,
        price: price,
        volumeHeld: volumeHeld,
        showEdit: showEdit,
        showDelete: showDelete,
        id: id
      }
    })
  })
})