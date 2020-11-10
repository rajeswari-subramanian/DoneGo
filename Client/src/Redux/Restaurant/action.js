import http from 'axios'
import { GET_RESTAURANTS, CART_ITEMS, SELECT_RESTAURANT } from './actionTypes'
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

export function selectRetaurant(payload) {
    return {
        type: SELECT_RESTAURANT,
        payload
    }
}

export function addToCart(payload) {
    return {
        type: CART_ITEMS.ADD,
        payload
    }
}

export function removeFromCart(id) {
    return {
        type: CART_ITEMS.REMOVE,
        id
    }
}

export function clearCart() {
    return {
        type: CART_ITEMS.CLEAR
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