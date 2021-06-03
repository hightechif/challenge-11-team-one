import dataReducer from "./data.reducer";
import authReducer from "./auth.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer
});

export default rootReducer;
