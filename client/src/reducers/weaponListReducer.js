import {GET_WEAPONS, WEAPON_LOADING} from "../action/types"
import Weapons from "../components/testingData";

const INITIAL_STATE = {
    weapons: Weapons,
    loading: false
}

function weaponListReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_WEAPONS:
            return {
                ...state,
                weapons: action.payload,
                loading: false
            }
        case WEAPON_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default weaponListReducer;