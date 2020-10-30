import { combineReducers } from "redux";
import userReducer from "./userReducer";
console.log(userReducer);
const rootReducer = combineReducers({ userReducer });

export default rootReducer;
