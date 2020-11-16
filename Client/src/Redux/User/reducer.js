import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_ADDRESS } from './actionTypes'
import { loadData, saveData } from '../LocalStorage'
const initState = {
    isLoading: false,
    isError: false,
    isAuth: loadData('isAuth') || false,
    message: "",
    userAddresses: [],
    token: ""
}

const signinReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false
            }
        case LOGIN_SUCCESS:
            saveData('isAuth', true)
            //window.localStorage.setItem('isAuth', "true")
            return {
                ...state,
                isAuth: "true",

            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: "false"
            }
        case LOGOUT:
            window.localStorage.setItem('totalCartItems', 0)
            window.localStorage.setItem('cartItems', 0)
            //window.localStorage.clear()
            saveData('isAuth', false)
            return {
                isAuth: "false"
            }
        case USER_ADDRESS:
            console.log("reduceradd", payload)
            return {
                userAddresses: payload
            }
        default:
            return {
                ...state
            }
    }
}

export default signinReducer