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
export const selectKeg = keg => ({
  type: a.SELECT_KEG,
  keg
});
