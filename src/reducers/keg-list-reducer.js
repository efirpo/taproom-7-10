import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { brew, brewer, description, volumeHeld, price, showDelete, id } = action;
  switch (action.type) {
    case a.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          brew: brew,
          brewer: brewer,
          description: description,
          volumeHeld: volumeHeld,
          price: price,
          showDelete: showDelete,
          id: id
        }
      })

    default: return state;
  }
}
