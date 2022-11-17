import { INITIAL_GLOBAL_STATE } from "../utils/initialObjects.js";

import {
  GET_PLATES,
  GET_PLATES_BY_FILTERS,
  GET_DETAIL,
  CLEAR_DETAIL,
} from "./actions.js";

function rootReducer(state = INITIAL_GLOBAL_STATE, action) {
  switch (action.type) {
    case GET_PLATES:
      return {
        ...state,
        plates: action.payload,
        allPlates: action.payload,
      };
    case GET_PLATES_BY_FILTERS:
      return {
        ...state,
        plates: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
