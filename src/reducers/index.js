import kegListReducer from './keg-list-reducer';
import selectKegReducer from './select-keg-reducer';
import editFormReducer from './edit-form-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  selectedKeg: selectKegReducer,
  showEditForm: editFormReducer
});

export default rootReducer