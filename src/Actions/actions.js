import axios from 'axios';

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

export function getByName(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/foods?name=${name}`);
            return dispatch({
                type: 'GET_BY_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

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
