const INITIAL_STATE = {
    weaponId: "",
    weaponUrl: "",
    selected: false
}

function weaponSelectReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "RESET_SELECTEDWEAPON":
            return INITIAL_STATE;
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