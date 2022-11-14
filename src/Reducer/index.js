import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../Cart_Types";

const initialState = {
  plates: [],
  allPlates: [],
  detail: [],
  //products: [],
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PLATES":
      return {
        ...state,
        plates: action.payload,
        allPlates: action.payload,
      };

    case "GET_PLATES_BY_FILTERS":
      return {
        ...state,
        plates: action.payload,
      };

    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_CLEAN":
      return {
        ...state,
        detail: action.payload,
      };

    case ADD_TO_CART: {
      let newItem = state.plates.find(
        (product) => product.id === action.payload
      );
      console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }

    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    // case CLEAR_CART:

    default:
      return state;
  }
}

export default rootReducer;
