// import {GET_SELECTEDWEAPON, WEAPON_SELECTED} from "../action/types"

const INITIAL_STATE = {
    weaponId: "",
    weaponUrl: "",
    selected: false
}

function weaponSelectReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "GET_SELECTEDWEAPON":
            return state;
        case "WEAPON_SELECTED":
            if (state.weaponId != action.payload.name) {
                return {
                    ...state,
                    weaponId: action.payload.name,
                    weaponUrl: action.payload.src,
                    selected: true
                }
            } else {
                return INITIAL_STATE;
            }
        default:
            return state;
    }
}

export default weaponSelectReducer;