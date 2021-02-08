import { combineReducers } from "redux";
import securityReducer from "./securityReducer";

export default combineReducers({
    securityReducer: securityReducer
});