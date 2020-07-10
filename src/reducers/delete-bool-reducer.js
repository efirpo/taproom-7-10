import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case a.TOGGLE_DELETE:
      return !state;
    default: return state;
  }
}