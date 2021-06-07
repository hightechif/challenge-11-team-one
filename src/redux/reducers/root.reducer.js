import dataReducer from "./data.reducer";
import authReducer from "./auth.reducer";
import profpicReducer from "./profpic.reducer";
import skillReducer from "./skill.reducer";
import educationReducer from "./education.reducer";
import experienceReducer from "./experience.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer,
  skill: skillReducer,
  education: educationReducer,
  experience: experienceReducer,
  profpic: profpicReducer
});

export default rootReducer;
