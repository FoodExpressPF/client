import axios from 'axios';
import { API_PATH } from '../utils/constants.js';

export const GET_PLATES = 'GET_PLATES';
export const GET_PLATES_BY_FILTERS = 'GET_PLATES_BY_FILTERS';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';


export const getPlates = () =>
  dispatch =>
    axios(`${API_PATH}/foods`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_PLATES,
        payload: data,
      }))
      .catch(error => console.log(error))
  ;

export const getByFilters = (filters) =>
  dispatch =>
    axios(`${API_PATH}/foods?${filters}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_PLATES_BY_FILTERS,
        payload: data,
      }))
      .catch(alert(`name ${filters} not found`))
  ;

export const getDetail = (id) =>
  dispatch =>
    axios(`${API_PATH}/foods/${id}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: GET_DETAIL,
        payload: data,
      }))
      .catch(error => console.log(error))
  ;

export const clearDetail = () => {
  return { type: CLEAR_DETAIL }
};