import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { brew, brewer, description, volumeHeld, price, showEdit, showDelete, id } = action;
  switch (action.type) {
    case a.ADD_TICKET:
      return Object.assign({}, state, {
        [id]: {
          brew: brew,
          brewer: brewer,
          description: description,
          volumeHeld: volumeHeld,
          price: price,
          showEdit: showEdit,
          showDelete: showDelete,
          id: id
        }
      })
  }
}
