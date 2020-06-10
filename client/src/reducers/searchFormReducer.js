const INITIAL_STATE = {}

function searchFormReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "RESET_SEARCH":
            return INITIAL_STATE;
        case "UPDATE_SEARCH":
            const name = action.payload.name;
            const value = action.payload.value;
            if (name != value) {
                return ({
                    ...state,
                    [name]: value
                })
            } else {
                delete state[name];
                return state;
            }
        default:
            return state;
    }
}

export default searchFormReducer;