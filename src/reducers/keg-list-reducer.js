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
    case a.DELETE_KEG:
      const newKegList = { ...state };
      delete newKegList[id];
      return newKegList

    default: return state;
  }
}
