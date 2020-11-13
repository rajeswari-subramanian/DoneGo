import React from 'react';
// import { useSelector } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
import { addToCart, removeFromCart, addCartRestaurant, selectRetaurant } from '../Redux/Restaurant/action'
import { Divider } from '@material-ui/core';

const Wrapper = styled.div`
.card {
  margin:auto;
  width:95%;
  boxShadow:' rgb(231, 232, 235) 0px -1px 0px 0px inset'  
},
.input-style {
  border-radius:6px; 
},
.card2 {
  width:100%;  
},
.cart-header {
  padd
},
.img-cart {
  height:100%
}
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ButtonBackground: {
    backgroundColor: "rgb(0, 210, 144)",
        borderRadius: "20px",
        padding: "8px 55px",
        fontWeight: "bold",
        fontSize: "12px",
        cursor: "pointer",
        color: "white",
  }
}));

function RestaurantTableDetails() {
  const {restaurantData, cartRestaurant, restaurantItems, restaurantId, restaurantName, cartItems, cartRestaurantId, totalCartValue, totalCartItems } = useSelector((state) => state.app)
  const classes = useStyles();
  const dispatch = useDispatch()
  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    dispatch(addCartRestaurant({ id: restaurantId, name: restaurantName }))    
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))    
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [address, setAddress] = React.useState([])
  const [selectedUserAddress, setSeletedUserAddress] = React.useState('')
  const [addressType, setAddressType] = React.useState('')

  // const {restaurantData, cartItems, cartRestaurant, cartRestaurantId, totalCartValue, totalCartItems } = useSelector((state)=> state.app)

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

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // Call this Function after Successful Payment
  const handleShowAllOrder = ()=>{
    let statuses = ["Order Accepted", "Order Placed", "On the Way", "Cancelled", "Delivered"]
    let items = []
    for(let i = 0; i < cartItems.length; i++){
      let tempObj = {}
      tempObj.itemName = cartItems[i].itemName
      tempObj.itemPrice = cartItems[i].itemPrice
      tempObj.quantity = cartItems[i].quantity
      items.push(tempObj)
    }
    let id = window.localStorage.getItem('userId') // UserId
    let restaurantName = cartRestaurant  // Restaurant Name
    let restaurentAddress = restaurantData.filter(f=> f._id === cartRestaurantId)[0].restaurentAddress
    let userAddress = selectedUserAddress  // Have to set userAddess
    let userAddressType = addressType  // Have to set userAddress Type
    let userMobileNumber = window.localStorage.getItem('mobileNo')
    let totalAmount = totalCartValue
    let status = statuses[(Math.floor(Math.random() * 5))]  // Status is Random
    let dateOfOrder = new Date().toUTCString();
    let payload ={
      id: id,
      dateOfOrder: dateOfOrder,
      items: items,
      restaurantName: restaurantName,
      restaurentAddress: restaurentAddress,
      userAddress: userAddress,
      userAddressType: userAddressType,
      userMobileNumber: userMobileNumber,
      totalAmount: totalAmount,
      status:status
    }
    console.log(payload);
    axios
    .put("http://localhost:5000/user/placeOrder", payload)
    .then(res=> {
      alert(res.data.message)
    })
    // Order Place API Call here
  }

  console.log(address, cartItems, cartRestaurant, cartRestaurantId, totalCartValue, totalCartItems, restaurantData);

  console.log(cartItems, restaurantItems, totalCartValue);
  return (
    <>
      <Wrapper>
        <div className="container" style={{ boxShadow: ' rgb(231, 232, 235) 0px -1px 0px 0px inset' }}>
          <nav className="navbar navbar-light bg-white mt-5 card"
            style={{
              borderRadius: '4px', height: '84px', width: '100%', boxAlign: 'center',
              borderBottom: '1px solid rgb(216, 216, 216)', alignItems: 'center',
              pointerEvents: 'auto', boxShadow: 'rgba(0, 0, 0, 0.12) 0px -4px 8px',
              transition: 'transform 0.2s ease-in-out 0s;'
            }}>
            <form className="form-inline">
              <input style={{ margin: '10px', width: '60%', padding: '25px' }} className="form-control mr-sm-2 input-style" type="search" placeholder="Search for an item" aria-label="Search" />

              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                <label class="custom-control-label" for="customSwitch1">Veg only</label>
              </div>
            </form>
          </nav>
        </div>
        <div style={{ borderRadius: '5px' }} className="container card2">
          <div class="row" style={{ width: '100%', margin: 'auto', boxShadow: ' rgb(231, 232, 235) 0px -1px 0px 0px inset' }}>
            <div class="col-6 col-md-2" style={{ border: '1px solid #BDBDBD' }}>
              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a style={{
                  backgroundColor: 'transparent', color: 'rgb(0, 192, 139)',
                  borderRight: '5px solid rgb(0, 192, 139)', width: '100%', backgroundColor: 'transparent',
                  textAlign: 'right', padding: '0px 12px', textTransform: 'capitalize', height: '26px', margin: '50px 0px', overflow: 'hidden', fontSize: '16px',
                  fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis'
                }} class="nav-link active" id="v-pills-foodItem-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Food Items</a>

              </div>
            </div>
            <div style={{ overflow: 'auto',border: '1px solid #BDBDBD' }} class="col-6 col-md-7" >
              <div class="tab-content" id="v-pills-tabContent">
              </div>
              <div className="row">
                <div class="col-12" style={{
                  border: 'none', fontSize: '20px', padding: '16px 24px', backgroundColor: 'rgb(243, 243, 245)',
                  boxShadow: ' rgb(231, 232, 235) 0px -1px 0px 0px inset', textTransform: 'capitalize', fontWeight: 600, color: 'black'
                }}>food item</div>
                {
                  restaurantItems && restaurantItems.length > 0 ?
                    <div>
                      {
                        restaurantItems.map(item => {
                          return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '177%' }}>
                              <div class="container" style={{ width: '90%' }}>
                                <div class="row" >
                                  <div class="col-12" style={{ display: 'flex' }}>
                                    <div style={{ padding: '16px 24px', fontSize: '18px', textTransform: 'capitalize', width: '80%', fontWeight: 500, }} class="col-9">
                                      <p style={{ fontWeight: '600', color: 'rgb(23, 30, 48)', marginBottom: '4px', width: '180px' }}>{item.itemName}</p>
                                      <p style={{ fontWeight: '600', color: 'rgb(23, 30, 48)', marginBottom: '4px', width: '120px' }}>&#8377;{item.itemPrice}</p>
                                    </div>
                                    <div style={{ padding: '16px 24px', fontSize: '18px', textTransform: 'capitalize', width: '120%', padding: '14px', fontWeight: 500 }} class="col-3">
                                      {
                                        (item.quantity === undefined) || item.quantity === 0 ?
                                          <button style={{ borderRadius: '20px', padding: '5px 15px', marginTop: '10px' }} type="button" class="btn btn-outline-success" onClick={() => handleAddToCart(item)}>+ ADD</button>
                                          :
                                          <button style={{ borderRadius: '20px', padding: '5px 15px', width: '75px' }} type="button" class="btn btn-outline-success"><span onClick={() => handleAddToCart(item)}>+ </span>{item.quantity} <span onClick={() => handleRemoveFromCart(item._id)}>- </span> </button>
                                      }
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                    :
                    <div>
                      No Items Available
                  </div>
                }
              </div>
            </div>
            <div class="col-6 col-md-3" style={{ border: '1px solid #BDBDBD' }}>
              <div className="row">
                <div className="col-12">
                  <p className="cart-header" style={{ fontSize: '20px', fontWeight: 600, letterSpacing: 'normal' }}>Your Cart {cartItems && cartItems.length > 0 ? totalCartItems : null}</p>
                </div>                
                <div className="col-12 img-cart">
                {cartItems.length === 0 && (<img alt="" style={{ width: '205px', height: '100%', alignItems: 'center', }} src="https://ik.imagekit.io/dunzo/web-assets/images/no-items-in-cart-7e84056f44993b68d14184f9b2992af7.png?tr=w-410,cm-pad_resize" alt="" />)}
                  {
                    cartItems && cartItems.length > 0 ?
                      <div>
                        {
                          cartItems.map(item => {
                            return (
                              <div style={{display:'flex', width:'auto'}}>
                                <div style={{ fontSize: '15px', textTransform: 'capitalize',width:'180px',padding: '24px', fontWeight: 500}} class="col-7">
                                  <p style={{ fontWeight: '500', color: 'rgb(23, 30, 48)', marginBottom: '4px', fontFamily:'Open+Sans' }}>{item.itemName}</p>
                                  <p style={{ fontWeight: '500', color: 'rgb(23, 30, 48)', marginBottom: '4px',fontFamily:'Open+Sans' }}>&#8377;{item.itemPrice}</p>
                                </div>
                                <div style={{ padding: '3px 18px', fontSize: '16px', textTransform: 'capitalize', width: '580px', fontWeight: 500, paddingTop:'25px',fontFamily:'Open+Sans'}} class="col-5">
                                  {
                                    (item.quantity === undefined) || (item.quantity === 0) ?
                                      <button style={{ borderRadius: '20px', padding:'3px 15px'}} type="button" class="btn btn-outline-success" onClick={() => handleAddToCart(item)}>+ ADD</button>
                                      :
                                      <button style={{ borderRadius: '20px', padding:'3px 15px' }} type="button" class="btn btn-outline-success"><span onClick={() => handleAddToCart(item)}>+ </span>{item.quantity} <span onClick={() => handleRemoveFromCart(item._id)}>- </span> </button>
                                  }
                                </div>                               
                              </div>
                            )
                          })
                        }
                      </div>
                      :
                      <div>
                        <p style={{ opacity: '0.5', fontSize: '16px', fontWeight: 600, textAlign: 'center', color: 'rgb(23, 30, 48);', textAlign: 'center' }}>Your cart is empty</p>
                        <p style={{ opacity: '0.5', fontSize: '16px', fontWeight: 600, textAlign: 'center', color: 'rgb(23, 30, 48);', textAlign: 'center' }}>Add items to get started</p>
                      </div>
                  }
                  <Divider/>
                  {
                    cartItems && cartItems.length > 0 && <div style={{fontSize:'16px', fontFamily:'Open+Sans', fontWeight:'600',margin:'auto'}}> Item Total &#8377;{totalCartValue}</div>
                  }
                  <div style={{ marginTop: "100px" }}>                  
                        <Link to="/order/checkout" style={{ textDecoration: "none" }}>
                      <p>
                        {" "}
                        <Button
                          style={{ textTransform: "none" }}
                          className={classes.ButtonBackground}
                          color="inherit"
                          onClick={handleShowAllOrder}
                        >
                          Proceed to checkout
                          </Button> </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
export default RestaurantTableDetails