import { CART_ITEMS, GET_RESTAURANTS, SELECT_RESTAURANT, ADD_CART_RESTAURANT, LOGOUT } from './actionTypes'
import { loadData, saveData } from '../LocalStorage'
import { selectRetaurant } from './action';

const initState = {
  isLoading: false,
  transactionId: 76700,
  restaurantData: loadData('restaurantData') || [],
  restaurantItems: loadData('restaurantItems') || [],
  restaurantAddress: loadData('restaurantAddress') || '',
  cartItems: loadData('cartItems') || [],
  isError: false,
  restaurantName: loadData('restaurantName') || '',
  restaurentImage: loadData('restaurentImage') || '',
  restaurentDelivery: loadData('restaurentDelivery') || '',
  restaurantId: loadData('restaurantId') || '',
  cartRestaurant: loadData('cartRestaurant') || '',
  cartRestaurantId: loadData('cartRestaurantId') || '',
  totalCartValue: loadData('totalCartValue') || 0,
  totalCartItems: loadData('totalCartItems') || 0
}


const reducer = (state = initState, { type, payload }) => {
  // console.log(type, payload);
  switch (type) {
    case GET_RESTAURANTS.REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case GET_RESTAURANTS.SUCCESS: {
      saveData('restaurantData', payload)
      return {
        ...state,
        restaurantData: payload,
        isLoading: false
      };
    }

    case GET_RESTAURANTS.FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    }

    case SELECT_RESTAURANT: {
      let seletedRestaurant = state.restaurantData.filter(item => item._id === payload._id)[0]
      for (let i = 0; i < seletedRestaurant.foodItems.length; i++) {
        for (let j = 0; j < state.cartItems.length; j++) {
          if (seletedRestaurant.foodItems[i]._id === state.cartItems[j]._id) {
            seletedRestaurant.foodItems[i].quantity = state.cartItems[j].quantity
          }
        }
      }
      saveData('transactionDate', new Date().toDateString())
      saveData('transactionId', state.transactionId + 1)
      saveData('restaurantId', seletedRestaurant._id)
      saveData('restaurantName', seletedRestaurant.restaurentName)
      saveData('restaurantItems', seletedRestaurant.foodItems)
      saveData('restaurantAddress', seletedRestaurant.restaurentAddress)
      saveData('restaurentImage', seletedRestaurant.avatar)
      saveData('restaurentDelivery', seletedRestaurant.deliveryTime)
      return {
        ...state,
        restaurantId: seletedRestaurant._id,
        restaurantName: seletedRestaurant.restaurentName,
        restaurantItems: seletedRestaurant.foodItems,
        restaurantAddress: selectRetaurant.restaurentAddress,
        restaurentImage: seletedRestaurant.avatar,
        restaurentDelivery: seletedRestaurant.deliveryTime
      }
    }

    case CART_ITEMS.ADD: {
      let addedItems = state.cartItems.find(item => item._id === payload._id)
      // let restaurantItem = state.restaurantItems.find(item=> item._id === payload._id)
      if (addedItems) {
        addedItems.quantity += 1
        saveData('totalCartValue', state.totalCartValue + addedItems.itemPrice)
        saveData('totalCartItems', state.totalCartItems + 1)
        saveData('cartRestaurantId', state.restaurantId)
        saveData('cartRestaurant', state.restaurantName)
        saveData('cartItems', state.cartItems)
        saveData('restaurantItems', state.restaurantItems)
        return {
          ...state,
          totalCartValue: state.totalCartValue + addedItems.itemPrice,
          totalCartItems: state.totalCartItems + 1,
          cartRestaurantId: state.restaurantId,
          cartRestaurant: state.restaurantName,
          cartItems: state.cartItems,
          restaurantItems: state.restaurantItems
        }
      }
      else {
        payload.quantity = 1
        saveData('totalCartValue', state.totalCartValue + payload.itemPrice)
        saveData('totalCartItems', state.totalCartItems + payload.quantity)
        saveData('cartItems', [...state.cartItems, payload])
        saveData('restaurantItems', state.restaurantItems)
        return {
          ...state,
          totalCartItems: state.totalCartItems + payload.quantity,
          totalCartValue: state.totalCartValue + payload.itemPrice,
          cartItems: [...state.cartItems, payload],
          restaurantItems: state.restaurantItems
        }
      }
    }

    case CART_ITEMS.REMOVE: {
      let removeItems = state.cartItems.find(item => item._id === payload)
      let restaurantItem = state.restaurantItems.find(item => item._id === payload)

      if (removeItems) {
        if (removeItems.quantity === 1) {
          let newItems = state.cartItems.filter(item => item._id !== payload)
          restaurantItem.quantity = 0

          saveData('totalCartValue', state.totalCartValue - removeItems.itemPrice)
          saveData('totalCartItems', state.totalCartItems - 1)
          saveData('cartItems', newItems)
          saveData('restaurantItems', state.restaurantItems)
          saveData('cartRestaurantId', state.totalCartItems === 1 ? '' : state.cartRestaurantId)
          saveData('cartRestaurant', state.totalCartItems === 1 ? '' : state.cartRestaurant)

          return {
            ...state,
            totalCartValue: state.totalCartValue - removeItems.itemPrice,
            totalCartItems: state.totalCartItems - 1,
            cartItems: newItems,
            restaurantItems: state.restaurantItems,
            cartRestaurantId: state.totalCartItems === 1 ? '' : state.cartRestaurantId,
            cartRestaurant: state.totalCartItems === 1 ? '' : state.cartRestaurant
          }
        }
        else {
          removeItems.quantity -= 1

          saveData('totalCartValue', state.totalCartValue - removeItems.itemPrice)
          saveData('totalCartItems', state.totalCartItems - 1)
          saveData('cartItems', state.cartItems)
          saveData('restaurantItems', state.restaurantItems)

          return {
            ...state,
            totalCartValue: state.totalCartValue - removeItems.itemPrice,
            totalCartItems: state.totalCartItems - 1,
            cartItems: state.cartItems,
            restaurantItems: state.restaurantItems
          }
        }
      }
    }
    case CART_ITEMS.CLEAR: {
      return {
        ...state,
        cartItems: [],
        cartRestaurant: '',
        cartRestaurantId: '',
        totalCartValue: 0,
        totalCartItems: 0
      }
    }
    case ADD_CART_RESTAURANT: {
      saveData('cartRestaurantId', payload.id)
      saveData('cartRestaurant', payload.name)
      return {
        ...state,
        cartRestaurant: payload.name,
        cartRestaurantId: payload.id,
      }
    }

    case LOGOUT: {
      window.localStorage.removeItem('cartItems')
      window.localStorage.removeItem('totalCartItems')
      window.localStorage.removeItem('totalCartValue')
      window.localStorage.removeItem('cartRestaurantId')
      window.localStorage.removeItem('cartRestaurant')
      window.localStorage.removeItem('token')

      return {
        ...state,
        cartItems: [],
        restaurantId: '',
        cartRestaurant: '',
        cartRestaurantId: '',
        totalCartValue: 0,
        totalCartItems: 0
      }
    }
    default:
      return state;
  }
};

export default reducer;