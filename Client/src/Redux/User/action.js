import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes'
import { saveData } from '../LocalStorage'
import axios from 'axios'

export const loginRequest = () => ({
    type: LOGIN_REQUEST
})

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload) => ({
    type: LOGIN_FAILURE,
    payload
})

export const logout = () => ({
    type: LOGOUT,

})

export const loginDetails = (payload) => (dispatch) => {
    saveData('data', payload)
    dispatch(loginRequest())
    return axios.post("http://localhost:8080/auth/login", payload)
        // .then(res => console.log(res.data))
        .then(res => dispatch(loginSuccess(res.data)))
        .catch(err => dispatch(loginFailure(err)))
}