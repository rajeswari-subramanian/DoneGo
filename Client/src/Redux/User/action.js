import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_ADDRESS } from './actionTypes'
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
export const userAddressSuccess = (payload) => ({
    type: USER_ADDRESS,
    payload
})
export const loginDetails = (payload) => (dispatch) => {
    saveData('data', payload)
    dispatch(loginRequest())
    return axios.post("http://localhost:8080/auth/login", payload)
        // .then(res => console.log(res.data))
        .then(res => dispatch(loginSuccess(res.data)))
        .catch(err => dispatch(loginFailure(err)))
}
export const userAddress = () => (dispatch) => {
    console.log("actionAddre")
    return axios
        .get("http://localhost:5000/user/userDetails", {
            headers: {
                id: window.localStorage.getItem('userId')
            }
        })
        .then(res => {

            dispatch(userAddressSuccess(res.data[0].address))
        })
        .catch(err => console.log(err))
}