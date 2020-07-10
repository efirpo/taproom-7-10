import * as a from './../actions/ActionTypes'

export default (state = {}, action) => {
  const { keg } = action
  switch (action.type) {
    case a.SELECT_KEG:
      return keg

    default: return state;
  }
}