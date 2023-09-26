import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import { api } from "./api";

const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});
export default rootReducer;
