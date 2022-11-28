import axios from "axios";

export const GET_PLATES = "GET_PLATES";
export const GET_PLATES_BY_FILTERS = "GET_PLATES_BY_FILTERS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_USER = "GET_USER";
export const GET_ORDERS = "GET_ORDERS";
export const GET_ALL_USER = "GET_ALLUSER";
export const GET_COMMENT = "GET_COMMENT";
export const GET_ALL_TABLES = "GET_ALL_TABLES";

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
    const post = await axios.post("payments/mercado", payload);
    return post.data.init_point;
  };
};

export const sendEmail = (payload) => {
  return async function (dispatch) {
    const post = await axios.post("/send-email", payload);
  };
};

export const buyPaypal = (payload) => {
  return async function (dispatch) {
    const post = await axios.post("payments/paypal", payload);
    return post.data.data.links[1].href;
  };
};

export const getUser = (user) => (dispatch) =>
  axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    url: "/user/create",
    data: { name: user.name, email: user.email },
  })
    .then((response) => response.data)
    .then((data) =>
      dispatch({
        type: GET_USER,
        payload: { ...data.user, picture: user.picture },
      })
    )
    .catch((error) => console.log(error));

export const postOrder = (payload) => {
  return async function (dispatch) {
    const post = await axios.post("/orders/create", payload);

    return post;
  };
};

export const getOrder = () => (dispatch) =>
  axios(`/orders`)
    .then((response) => response.data)
    .then((data) =>
      dispatch({
        type: GET_ORDERS,
        payload: data,
      })
    )
    .catch((error) => alert(`not found, error: ${error}`));

export const getAllUser = () => (dispatch) =>
  axios(`/user`)
    .then((response) => response.data)
    .then((data) =>
      dispatch({
        type: GET_ALL_USER,
        payload: data,
      })
    )
    .catch((error) => alert(`not found, error: ${error}`));

export function postComment(payload) {
  return async function () {
    const response = await axios.post("/reviews", payload);
    console.log(response);
    return response;
  };
}

export const getComment = (id) => (dispatch) =>
  axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    url: `/reviews/${id}`,
  })
    .then((response) => response.data)
    .then((data) => {
      dispatch({
        type: GET_COMMENT,
        payload: data,
      });
    })
    .catch((error) => alert(`not found, error: ${error}`));

export const getAllTables = () => (dispatch) =>
  axios(`/tables`)
    .then((response) => response.data)
    .then((data) =>
      dispatch({
        type: GET_ALL_TABLES,
        payload: data,
      })
    )
    .catch((error) => alert(`not found, error: ${error}`));

export function postReserve(payload) {
  return async function () {
    const response = await axios.post("/tables", payload);
  };
}
