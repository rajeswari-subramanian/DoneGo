import { GET_RESTAURANTS } from './actionTypes'

const initState = {
  isLoading: false,
  restaurantData: [],
  isError: false
}


const reducer = (state = initState, { type, payload }) => {
  // console.log(type, payload);
  switch (type) {
    case GET_RESTAURANTS.REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case GET_RESTAURANTS.SUCCESS:
      return {
        ...state,
        restaurantData: payload,
        isLoading: false
      };
    case GET_RESTAURANTS.FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
