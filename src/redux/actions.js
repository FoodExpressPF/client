import axios from "axios";

export const GET_PLATES = "GET_PLATES";
export const GET_PLATES_BY_FILTERS = "GET_PLATES_BY_FILTERS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_USER = "GET_USER";


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

export const getUser = (user) =>
<<<<<<< HEAD
  dispatch => 
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:3001/user/create",
      data: {name: user.name, email: user.email}})
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_USER,
        payload: {...data.user, picture: user.picture}
      }))
      .catch(error =>console.log(error));
 
=======
   ({
      type: GET_USER,
      payload: user,
    })
  ;
>>>>>>> 6e2df7994eb59504ac573c5f503ac3e48c8b2867
