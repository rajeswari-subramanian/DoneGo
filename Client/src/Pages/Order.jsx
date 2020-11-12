import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Order() {
    const [address, setAddress] = React.useState([])
    const { cartItems, cartRestaurant, cartRestaurantId, totalCartValue, totalCartItems } = useSelector((state)=> state.app)

    React.useEffect(() => {
        axios
        .get("http://localhost:5000/user/userDetails", {
          headers:{
            id: window.localStorage.getItem('userId')
          }
        })
        .then(res=> {
          setAddress(res.data[0].address)
        })
    }, [])

    console.log(address, cartItems, cartRestaurant, cartRestaurantId, totalCartValue, totalCartItems);
    return (
        <div>
            Hello Place Order Page
        </div>
    )
}
