import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
import { addToCart, removeFromCart, addCartRestaurant, clearCart } from '../Redux/Restaurant/action'
import { Divider } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper1: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'600px',
    height:'47%',
    borderRadius:'15px'
  },
  pStyle :{
    fontFamily:'Open+Sans',
    fontSize:'15px',
    color:'rgb(111, 117, 136)',
    textAlign:'left',
    fontWeight:400,
  },
  btnStyle: {
    
  }

}));

function RestaurantTableDetails() {

  const { restaurantData, cartRestaurant, restaurantItems, restaurantId, restaurantName, cartItems, cartRestaurantId, totalCartValue, totalCartItems } = useSelector((state) => state.app)
  const classes = useStyles();
  let {transactionId}=useSelector((state)=>state.app)
  const dispatch = useDispatch()
  const [openCartModal, setOpenCartModal] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0);
  const [address, setAddress] = React.useState([])
  const [selectedUserAddress, setSeletedUserAddress] = React.useState('')
  const [addressType, setAddressType] = React.useState('')
  const [newItem, setNewItem] = React.useState({})
  const [isVegSelected, setVegSelected] = React.useState(false)

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/user/userDetails", {
        headers: {
          id: window.localStorage.getItem('userId')
        }
      })
      .then(res => {
        setAddress(res.data.address)
      })
  }, [])
  //console.log("cartRestaurantId", cartRestaurantId,"restaurantId", restaurantId);
  const handleAddToCart = (item) => {
    if ((cartRestaurantId === '') || (cartRestaurantId === restaurantId)) {
      dispatch(addToCart(item))
      dispatch(addCartRestaurant({ id: restaurantId, name: restaurantName }))
    }
    else {
      setOpenCartModal(true)
      setNewItem(item)
    }
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    dispatch(addCartRestaurant({ id: restaurantId, name: restaurantName }))
    setTimeout(() => dispatch(addToCart(newItem)), 100)
    setOpenCartModal(false)
  }

  const handleClose = () => {
    setOpenCartModal(false)
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleVeg = (e)=>{
      //console.log("Checkbox", e.target.value, e.target.checked);
      if(e.target.checked){
        setVegSelected(true)
      }
      else{
        setVegSelected(false)
      }
  }

  // Call this Function after Successful Payment
  const handleShowAllOrder = () => {
    let statuses = ["Order Accepted", "Order Placed", "On the Way", "Cancelled", "Delivered"]
    let items = []
    for (let i = 0; i < cartItems.length; i++) {
      let tempObj = {}
      tempObj.itemName = cartItems[i].itemName
      tempObj.itemPrice = cartItems[i].itemPrice
      tempObj.quantity = cartItems[i].quantity
      items.push(tempObj)
    }

    let id = window.localStorage.getItem('userId') // UserId
    let restaurantName = cartRestaurant  // Restaurant Name
    let restaurentAddress = restaurantData.filter(f => f._id === cartRestaurantId).restaurentAddress
    let userAddress = selectedUserAddress  // Have to set userAddess
    let userAddressType = addressType  // Have to set userAddress Type
    let userMobileNumber = window.localStorage.getItem('mobileNo')
    let totalAmount = totalCartValue
    let status = statuses[(Math.floor(Math.random() * 5))]  // Status is Random      

    let payload = {
      id: id,     
      items: items,
      restaurantName: restaurantName,
      restaurentAddress: restaurentAddress,
      userAddress: userAddress,
      userAddressType: userAddressType,
      userMobileNumber: userMobileNumber,
      totalAmount: totalAmount,
      status: status
    }
    // Order Place API Call here
    axios
      .put("http://localhost:5000/user/placeOrder", payload)
      .then(res => {
        //alert(res.data.message)
      })

  }

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
                <input type="checkbox" class="custom-control-input" id="customSwitch1" onClick={handleVeg} />
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
                  borderRight: '5px solid rgb(0, 192, 139)', width: '100%', 
                  textAlign: 'right', padding: '0px 12px', textTransform: 'capitalize', height: '26px', margin: '50px 0px', overflow: 'hidden', fontSize: '16px',
                  fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis'
                }} class="nav-link active" id="v-pills-foodItem-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Food Items</a>

              </div>
            </div>
            <div style={{ overflow: 'auto', border: '1px solid #BDBDBD' }} class="col-6 col-md-7">
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
                        restaurantItems.filter(function(e) {
                          if(isVegSelected){
                            return e.catagoryFood === 'veg'
                          }
                          else{
                            return e.catagoryFood
                            }
                        }).map(item => {
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
                  <p>{restaurantId === cartRestaurantId && cartItems.length > 0 ? restaurantName : null}</p>
                </div>
                <div className="col-12 img-cart">
                {cartItems.length === 0 && (<img alt="" style={{ width: '205px', height: '100%', alignItems: 'center', }} src="/assets/images/emptycart.png" alt="" />)}
                  {
                    cartItems && cartItems.length > 0 ?
                      <div>
                        {
                          cartItems.map(item => {
                            return (
                              <div style={{ display: 'flex', width: 'auto' ,marginBottom:"1px"}}>

                                <div style={{ fontSize: '15px', textTransform: 'capitalize', width: '100%', padding: '5px', fontWeight: 500 }} class="col-5">
                                  <p style={{ fontWeight: '500', color: 'rgb(23, 30, 48)', fontFamily: 'Open+Sans' }}>{item.itemName}</p></div>
                                 
                                <div style={{ padding: '0px 5px', fontSize: '16px', textTransform: 'capitalize', width: '100%', fontWeight: 500, paddingTop: '5px', fontFamily: 'Open+Sans' }} class="col-5">
                                  {
                                    (item.quantity === undefined) || (item.quantity === 0) ?
                                      <button style={{ borderRadius: '20px', padding: '0px 5px', outline:"none" }} type="button" class="btn btn-outline-success" onClick={() => handleAddToCart(item)}>+ ADD</button>
                                      :
                                      <button style={{ borderRadius: '20px', padding: '0px 5px', outline:"none" }} type="button" class="btn btn-outline-success"><span onClick={() => handleAddToCart(item)}>+ </span>{item.quantity} <span onClick={() => handleRemoveFromCart(item._id)}>- </span> </button>
                                  }
                                </div>
                                <div style={{ fontSize: '15px', textTransform: 'capitalize', width: '100%', padding: '5px', fontWeight: 500 }} class="col-2">
                                    <p style={{ fontWeight: '500', color: 'rgb(23, 30, 48)', fontFamily: 'Open+Sans' }}>&#8377;{item.itemPrice}</p>
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
                  <Divider />

                  {
                    cartItems && cartItems.length > 0 && <div style={{ fontSize: '16px', fontFamily: 'Open+Sans', fontWeight: '600', margin: 'auto' }}> Item Total &#8377;{totalCartValue}</div>
                  }

                  <div style={{ marginTop: "100px" }}>

                    <Link to="/order/checkout" style={{ textDecoration: "none" }}>
                      <p>
                        {" "}
                        <Button
                          style={{ textTransform: "none" , outline:"none"}}
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
      <div style={{ padding: '16px 24px', fontSize: '18px', textTransform: 'capitalize', width: '100%', padding: '24px', fontWeight: 500 }} class="col-3">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openCartModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openCartModal}>
            <div className={classes.paper1}>
              <div class="row">
                <div class="col-12 mt-3" style={{ height: 'auto' }}>
                  <img style={{ width: '50px' }} src="/assets/images/cart.png" alt="logo"></img>
                  <div class="row">
                    <div class="col-12" style={{ marginTop: '10px' }}>
                      <p style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'Open+Sans', textAlign: 'left' }}>Clear Cart?</p>
                      <p className={classes.pStyle}>Your's cart contains items from <b>{cartRestaurant}</b>.</p>
                      <p className={classes.pStyle}>Do you want to clear the cart and add items from <b>{restaurantName}</b>?</p>
                    </div>
                    <div class="row">
                      <div class="col-12 mt-4" style={{ margin: 'auto' }}>
                        <button type="button" class="btn btn-outline-success" style={{ borderRadius: '20px', padding: '10px 95px', marginRight: '20px', marginLeft: '20px', fontFamily: 'Open+Sans', outline:"none" }} onClick={handleClose}>Cancel</button>
                        <button type="button" class="btn btn-success" style={{ borderRadius: '20px', padding: '10px 95px', fontFamily: 'Open+Sans', outline:"none" }} onClick={handleClearCart}>Clear Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>      
    </>
  )
}
export default RestaurantTableDetails