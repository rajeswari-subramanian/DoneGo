import http from 'axios'
import { GET_RESTAURANTS } from './actionTypes'
import { API } from './apiConstants'
const RESULT_RESTAURANTS = API.ENDPOINTS.GET_RESTAURANTS

export function restaurantList(payload) {
    console.log(payload)
    return dispatch => {
        dispatch(request())
        return http.get(RESULT_RESTAURANTS, { headers: payload })
            .then(res => {
                dispatch(success(res.data))
            })
            .catch(err => {
                dispatch(failure(err))
            })
    }
}

function request() {
    return {
        type: GET_RESTAURANTS.REQUEST
    }
}

function success(payload) {
    return {
        type: GET_RESTAURANTS.SUCCESS,
        payload
    }
}

function failure(payload) {
    return {
        type: GET_RESTAURANTS.FAILURE,
        payload
    }
}