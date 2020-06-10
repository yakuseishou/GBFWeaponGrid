import { combineReducers } from "redux";
import weaponListReducer from "./weaponListReducer";
import weaponSelectReducer from "./weaponSelectReducer";
import weaponGridReducer from "./weaponGridReducer"
import gridSelectedWeaponReducer from "./gridSelectedWeaponReducer";
import searchFormReducer from "./searchFormReducer";

const rootReducer = combineReducers({
    weapons: weaponListReducer,
    selectedWeapon: weaponSelectReducer,
    weaponGrid: weaponGridReducer,
    gridSelectedWeapon: gridSelectedWeaponReducer,
    search: searchFormReducer 
});

export default rootReducer;