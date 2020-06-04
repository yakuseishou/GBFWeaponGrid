import { combineReducers } from "redux";
import weaponListReducer from "./weaponListReducer";

const rootReducer = combineReducers({
    weapons: weaponListReducer
});

export default rootReducer;