import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/authSlice";
import layoutReducer from "./modules/layout/layoutSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  layout: layoutReducer,
});

export default rootReducer;
