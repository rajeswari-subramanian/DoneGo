import { GET_RESTAURENT } from "../../core/constants/actionTypes";
  
  const initState = {
    isLoading: false,
    restaurentsData: [],
    isError: false
  }

  
  const getRestaurentReducer = (state = initState, { type, payload }) => {
    // console.log(type, payload);
    switch (type) {
      case GET_RESTAURENT.REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case GET_RESTAURENT.SUCCESS:
        return {
          ...state,
          restaurentsData: payload,
          isLoading: false
        };
      case GET_RESTAURENT.FAILURE:
        return {
          ...state,
          isError: true,
          isLoading: false
        };
      default:
        return state;
    }
  };

  export default getRestaurentReducer;
  