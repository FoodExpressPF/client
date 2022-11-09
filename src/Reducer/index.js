const initialState = {
    plates: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PLATES':
            return {
                ...state,
                plates: action.payload,
            }

        default:
            return state;
    }
}

export default rootReducer;