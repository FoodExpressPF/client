import axios from 'axios';
import { API_PATH } from '../utils/constants.js';

export function getFoods() {
    return async function (dispatch) {
        var Plates = await axios('http://localhost:3001/foods')
        console.log(Plates)
        return dispatch({
            type: 'GET_PLATES',
            payload: Plates.data
        })
    }
}

export const getByFilters = ( filters ) => 
  dispatch =>
    axios(`${API_PATH}/foods?${filters}`)
      .then(response => response.data)
      .then(data => dispatch({
        type: "GET_PLATES_BY_FILTERS",
        payload: data,
      }))
      .catch(error => console.log(error))
;

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/foods/${id}`);
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getClean() {
    return {
        type: "GET_CLEAN",
        payload: []
    }
};
