import selectKegReducer from './../../reducers/select-keg-reducer';

describe('selectKegReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(selectKegReducer({}, { type: null })).toEqual({});
  })

  test('Should successfully make testKeg selectedKeg', () => {
    const testKeg = {
      brew: 'Death Brew',
      brewer: 'Karl the Necromancer',
      description: 'Kills you.',
      price: '25',
      volumeHeld: 124,
      id: 1
    }
    const action = {
      type: 'SELECT_KEG',
      keg: { ...testKeg }
    }

    expect(selectKegReducer({}, action)).toEqual({
      brew: 'Death Brew',
      brewer: 'Karl the Necromancer',
      description: 'Kills you.',
      price: '25',
      volumeHeld: 124,
      id: 1
    })
  })
})