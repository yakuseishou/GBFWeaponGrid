import { combineReducers } from "redux";
import weaponListReducer from "./weaponListReducer";
import weaponSelectReducer from "./weaponSelectReducer";
import weaponGridReducer from "./weaponGridReducer"

const rootReducer = combineReducers({
    weapons: weaponListReducer,
    selectedWeapon: weaponSelectReducer,
    weaponGrid: weaponGridReducer
});

export default rootReducer;