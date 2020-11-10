import { CART_ITEMS, GET_RESTAURANTS, SELECT_RESTAURANT } from './actionTypes'

const initState = {
  isLoading: false,
  restaurantData: [],
  restaurantItems: [],
  cartItems: [],
  isError: false,
  restaurantName: '',
  restaurantId: '',
  cartRestaurant:'',
  cartRestaurantId:'',
}


const reducer = (state = initState, { type, payload }) => {
  // console.log(type, payload);
  switch (type) {
    case GET_RESTAURANTS.REQUEST:{
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case GET_RESTAURANTS.SUCCESS:{
      return {
        ...state,
        restaurantData: payload,
        isLoading: false
      };
    }

    case GET_RESTAURANTS.FAILURE:{
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    }

    case SELECT_RESTAURANT: {
      let seletedRestaurant = state.restaurantData.filter(item => item._id === payload._id)[0]
      return{
        ...state,
        restaurantId: seletedRestaurant._id,
        restaurantName: seletedRestaurant.restaurentName,
        restaurantItems: seletedRestaurant.foodItems
      }
    }

    case CART_ITEMS.ADD: {
        let addedItems = state.cartItems.find(item => item._id === payload._id)
        let restaurantItem = state.restaurantItems.find(item=> item._id === payload._id)

        if(addedItems && restaurantItem){
          addedItems.quantity += 1
          return {
            ...state,
            cartItems: state.cartItems,
            restaurantItems: state.restaurantItems
          }
        }
        else{
          payload.quantity = 1
          restaurantItem.quantity = 1
          return {
            ...state,
            cartItems: [...state.cartItems, payload],
            restaurantItems: state.restaurantItems
          }
        }
    }

    case CART_ITEMS.REMOVE: {
      let removeItems = state.cartItems.find(item => item._id === payload._id)
      let newItems = state.cartItems.find(item => item._id !== payload._id)
      let restaurantItem = state.restaurantItems.find(item=> item._id === payload._id)

      if(removeItems && restaurantItem){
        removeItems.quantity -= 1
        return {
          ...state,
          cartItems: state.cartItems,
          restaurantItems: state.restaurantItems
        }
      }
      else{
        restaurantItem.quantity = 0
        return {
          ...state,
          cartItems: newItems,
          restaurantItems: state.restaurantItems
        }
      }
  }
    default:
      return state;
  }
};

export default reducer;
