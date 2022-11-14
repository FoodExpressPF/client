import axios from "axios";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../Cart_Types/index.js";
import { API_PATH } from "../utils/constants.js";

export function getFoods() {
  return async function (dispatch) {
    var Plates = await axios("http://localhost:3001/foods");
    console.log(Plates);
    return dispatch({
      type: "GET_PLATES",
      payload: Plates.data,
    });
  };
}

export const getByFilters = (filters) => (dispatch) =>
  axios(`${API_PATH}/foods?${filters}`)
    .then((response) => response.data)
    .then((data) =>
      dispatch({
        type: "GET_PLATES_BY_FILTERS",
        payload: data,
      })
    )
    .catch((error) => console.log(error));

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/foods/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getClean() {
  return {
    type: "GET_CLEAN",
    payload: [],
  };
}

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });
