import * as a from './../actions/ActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case a.SELECT_KEG:
      return state;

    default: return state;
  }
}