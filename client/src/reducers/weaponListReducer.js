import {GET_WEAPONS, WEAPON_LOADING} from "../action/types"
import Weapons from "../components/testingData.js";

const INITIAL_STATE = {
    weapons: Weapons,
    loading: false
}

function weaponListReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        /* Need to change get weapons to filter according to search */
        case "FILTER_WEAPONS":
            let updated = Weapons;

            for (const [key, value] of Object.entries(action.payload)) {
                updated = updated.filter(weapon => {
                    return weapon[key] == value;
                })
            }
            return {
                ...state,
                weapons: updated
            };
        case "WEAPON_LOADING":
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default weaponListReducer;