import http from 'axios'
import { GET_RESTAURENT } from '../../core/constants/actionTypes'
import { API } from '../../core/constants/apiConstants'

const GET_RESTAURENT_API = API.ENDPOINTS.GET_ITEMS

export function getRestaurent(payload){
    console.log(payload)
    return dispatch =>{
        dispatch(request())
        return http.get(GET_RESTAURENT_API,{headers:payload})
            .then(res=>{
                dispatch(success(res.data))
            })
            .catch(err=>{
                dispatch(failure(err))
            })
    }
}


function request(){
    return {
        type: GET_RESTAURENT.REQUEST
    }
}

function success(payload){
    return {
        type: GET_RESTAURENT.SUCCESS,
        payload
    }
}

function failure(payload){
    return {
        type: GET_RESTAURENT.FAILURE,
        payload
    }
}