import { combineReducers } from "redux";
import ads from "./ads";
import users from "./users";

export default combineReducers({
  ads,
  users
});
