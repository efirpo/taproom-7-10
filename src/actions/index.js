import * as a from './../actions/ActionTypes';

export const addKeg = (keg) => {
  const { brew, brewer, description, volumeHeld, price, showEdit, showDelete, id } = keg;
  return {
    type: a.ADD_KEG,
    brew: brew,
    brewer: brewer,
    description: description,
    volumeHeld: volumeHeld,
    price: price,
    showEdit: showEdit,
    showDelete: showDelete,
    id: id
  }
}
export const selectKeg = (keg) => ({
  type: a.SELECT_KEG,
  keg
});

export const toggleEditForm = () => ({
  type: a.TOGGLE_EDIT
});

export const toggleDeleteCheck = () => ({
  type: a.TOGGLE_DELETE,
});

export const deleteKeg = id => ({
  type: a.DELETE_KEG,
  id
})