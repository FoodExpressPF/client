const initialState = {
    plates: [],
    allPlates: [],
    detail: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PLATES':
            return {
                ...state,
                plates: action.payload,
                allPlates: action.payload,
            }

        case 'GET_PLATES_BY_FILTERS':
            return {
                ...state,
                plates: action.payload,
                 
            }

        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }

        case "GET_CLEAN":
            return {
                ...state,
                detail: action.payload
            };


        default:
            return state;
    }
}

export default rootReducer;