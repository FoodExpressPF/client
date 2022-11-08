import axios from 'axios';

export function getFoods() {
    return async function (dispatch) {
        var Plates = await axios('https://foods-98ee3-default-rtdb.firebaseio.com/Foods.json')
        console.log(Plates)
        return dispatch({
            type: 'GET_PLATES',
            payload: Plates.data
        })
    }
}
