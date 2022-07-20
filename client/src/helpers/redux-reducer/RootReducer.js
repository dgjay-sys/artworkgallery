import { combineReducers } from "redux";
import {AccountReducer} from "./AccountReducer";
const rootReducers = combineReducers({
      accounts: AccountReducer,
  });
  
  export default rootReducers;

