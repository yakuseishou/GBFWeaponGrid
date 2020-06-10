const INITIAL_STATE = {
    weaponGridId: -1,
    selected: false
}

function gridSelectedWeaponReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "RESET_SELECTEDGRIDWEAPON":
            return INITIAL_STATE;
        case "GRIDWEAPON_SELECTED":
            if (state.weaponGridId != action.payload) {
                return {
                    ...state,
                    weaponGridId: action.payload,
                    selected: true
                }
            } else {
                return INITIAL_STATE;
            }
        default:
            return state;
    }
}

export default gridSelectedWeaponReducer;