import {combineReducers} from "redux";
import mainLists from './mainListReducer';

export const rootReducer = combineReducers({
  lists: mainLists
})