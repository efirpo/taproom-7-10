import kegListReducer from './keg-list-reducer';
import selectKegReducer from './select-keg-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  selectedKeg: selectKegReducer
});

export default rootReducer