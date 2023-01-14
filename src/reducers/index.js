import { combineReducers } from "redux";

import userReducer from "./userReducer";
import uiReducer from "./uiReducer";

import { penderReducer } from "redux-pender";

export default combineReducers({
    userReducer,
    uiReducer,
    pender: penderReducer
});