import kegListReducer from './keg-list-reducer';
import selectKegReducer from './select-keg-reducer';
import editFormReducer from './edit-form-reducer';
import deleteBoolReducer from './delete-bool-reducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  selectedKeg: selectKegReducer,
  showEditForm: editFormReducer,
  toggleDeleteCheck: deleteBoolReducer,
});

export default rootReducer