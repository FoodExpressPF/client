import axios from "axios";

export const GET_PLATES = "GET_PLATES";
export const GET_PLATES_BY_FILTERS = "GET_PLATES_BY_FILTERS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export const getPlates = () => (dispatch) =>
  axios(`/foods`)
    .then((response) => response.data)
    .then((data) =>
      dispatch({
        type: GET_PLATES,
        payload: data,
      })
    )
    .catch((error) => alert(`not found, error: ${error}`));

export const getByFilters = (filters) => (dispatch) =>
  axios(`/foods?${filters}`)
    .then((response) => response.data)
    .then((data) =>
      dispatch({
        type: GET_PLATES_BY_FILTERS,
        payload: data,
      })
    )
    .catch((error) => alert(`not found, error: ${error}`));

export const getDetail = (id) => (dispatch) =>
  axios(`/foods/${id}`)
    .then((response) => response.data)
    .then((data) =>
      dispatch({
        type: GET_DETAIL,
        payload: data,
      })
    )
    .catch((error) => alert(`not found, error: ${error}`));

export const clearDetail = () => {
  return { type: CLEAR_DETAIL };
};

export const buy = (payload) => {
  return async function (dispatch) {
    const post = await axios.post("http://localhost:3001/payment", payload);
    return post.data.init_point;
  };
};

export const sendEmail = (payload) => {
  return async function (dispatch) {
    const post = await axios.post("http://localhost:3001/send-email", payload);
  };
};
