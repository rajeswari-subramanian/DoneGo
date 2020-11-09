import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes'

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    message: "",
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
            // console.log(payload)
            return {
                ...state,
                //isLoading: false,
                //isError: payload.error,
                isAuth: true,
                // message: payload.message ? payload.message : "",
                //token: payload.token ? payload.token : ""
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false
            }
        case LOGOUT:
            return {
                isAuth: false
            }
        default:
            return {
                ...state
            }
    }
}

export default signinReducer