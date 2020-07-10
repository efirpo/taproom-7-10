import selectKegReducer from './../../reducers/select-keg-reducer';

describe('selectKegReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(selectKegReducer({}, { type: null })).toEqual({});
  })
  test('Should successfully make testKeg selectedKeg slice of state', () => {

  })
})