import axios from 'axios';


export const GET_PLATES = 'GET_PLATES';
export const GET_PLATES_BY_FILTERS = 'GET_PLATES_BY_FILTERS';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const GET_USER = 'GET_USER';


export const getPlates = () =>
  dispatch =>
    axios(`/foods`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_PLATES,
        payload: data,
      }))
      .catch(error => console.log(`not found, error: ${error}`))
  ;

export const getByFilters = (filters) =>
  dispatch =>
    axios(`/foods?${filters}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_PLATES_BY_FILTERS,
        payload: data,
      }))
      .catch(error => alert(`not found, error: ${error}`))
  ;

export const getDetail = (id) =>
  dispatch =>
    axios(`/foods/${id}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_DETAIL,
        payload: data,
      }))
      .catch(error => alert(`not found, error: ${error}`))
  ;

export const clearDetail = () => {
  return { type: CLEAR_DETAIL }
};

export const getUser = (user) =>
   ({
      type: GET_USER,
      payload: user,
    })
  ;
 