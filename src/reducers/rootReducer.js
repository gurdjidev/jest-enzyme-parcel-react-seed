import { combineReducers } from "redux";
import { usernameReducer } from "./usernameReducer";

export const rootReducer = combineReducers({
    username: usernameReducer
});