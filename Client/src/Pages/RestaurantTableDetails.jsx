import React from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { useHistory, Redirect, Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
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
      '& > * + *': {
        marginTop: theme.spacing(2),
        width:'100%',
        padding:'10px 30px 10px 30px',
        marginLeft:'20px',
       
      },
    },
    // root: {
    //   flexGrow: 1,
    // },
    ButtonBackground: {
      backgroundColor: "rgb(0, 210, 144)",
      borderRadius: "20px",
      padding: "8px 20px",
      fontWeight: "bold",
      fontSize: "12px",
      cursor: "pointer",
      color: "white",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
    },
    color: {
      backgroundColor: "white",
      color: "black",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
function RestaurantTableDetails() {
    const classes = useStyles();
  return (
    <>
      <Wrapper>
        <div className="container"style={{ boxShadow:' rgb(231, 232, 235) 0px -1px 0px 0px inset'}}>
          <nav className="navbar navbar-light bg-white mt-5 card" 
          style={{borderRadius:'4px', height:'84px',width:'100%',boxAlign:'center',
          borderBottom:'1px solid rgb(216, 216, 216)',alignItems:'center', 
          pointerEvents:'auto',boxShadow:'rgba(0, 0, 0, 0.12) 0px -4px 8px', 
          transition:'transform 0.2s ease-in-out 0s;'}}>
            <form className="form-inline">
              <input style={{margin:'10px',width:'60%',padding:'25px'}} className="form-control mr-sm-2 input-style" type="search" placeholder="Search for an item" aria-label="Search"/>
              <div class="custom-control custom-switch">
                <label class="custom-control-label" for="customSwitch1">Veg Only</label>
                <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
              </div>
                </form>
              </nav>  
      </div>
      <div style={{borderRadius:'5px'}} className="container card2">
      <div class="row" style ={{ width:'100%', margin:'auto', boxShadow:' rgb(231, 232, 235) 0px -1px 0px 0px inset'}}>
        <div class="col-6 col-md-2" style={{border:'1px solid #BDBDBD'}}>
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a style={{backgroundColor:'transparent', color:'rgb(0, 192, 139)',
            borderRight:'4px solid rgb(0, 192, 139)',width:'100%',
            textAlign:'right',padding:'0px 12px', textTransform:'capitalize', height:'26px',margin:'50px 0px', overflow:'hidden',fontSize:'16px', 
            fontWeight:'600', whiteSpace:'nowrap', textOverflow:'ellipsis'}}class="nav-link active" id="v-pills-foodItem-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Food Items</a>
            {/* <a style={{backgroundColor:'transparent', color:'rgb(0, 192, 139)',borderRight:'4px solid rgb(0, 192, 139)',width:'100%'}} class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
        </div>
        </div>
        <div style={{overflow:'auto',border:'1px solid #BDBDBD'}} class="col-6 col-md-7" >
        <div class="tab-content" id="v-pills-tabContent">
          
        </div>
          <div className="row">
          <div class="col-12" style={{border:'none',fontSize:'20px', padding:'16px 24px', backgroundColor:'rgb(243, 243, 245)', 
          boxShadow:' rgb(231, 232, 235) 0px -1px 0px 0px inset',textTransform:'capitalize', fontWeight:600, color:'black'}}>food item</div>
          <div style={{padding:'16px 24px', fontSize:'18px', textTransform:'capitalize', width:'100%',padding:'24px', fontWeight:500}} class="col-9">
            <p style={{fontWeight:'600', color:'rgb(23, 30, 48)', marginBottom:'4px'}}>Poori Bhaji</p>
            <p style={{fontWeight:'600', color:'rgb(23, 30, 48)', marginBottom:'4px'}}>₹ 140</p>
          </div>
          <div style ={{padding:'16px 24px', fontSize:'18px', textTransform:'capitalize', width:'100%',padding:'24px', fontWeight:500}} class="col-3">
              <button style={{borderRadius:'20px'}} type="button" class="btn btn-outline-success">+ ADD</button>
          </div>
          <div style={{padding:'16px 24px', fontSize:'18px', textTransform:'capitalize', width:'100%',padding:'24px', fontWeight:500}} class="col-9">
            <p style={{fontWeight:'600', color:'rgb(23, 30, 48)', marginBottom:'4px'}}>Poori Bhaji</p>
            <p style={{fontWeight:'600', color:'rgb(23, 30, 48)', marginBottom:'4px'}}>₹ 140</p>
          </div>
          <div style ={{padding:'16px 24px', fontSize:'18px', textTransform:'capitalize', width:'100%',padding:'24px', fontWeight:500}} class="col-3">
              <button style={{borderRadius:'20px'}} type="button" class="btn btn-outline-success">+ ADD</button>
          </div>
          <div style={{padding:'16px 24px', fontSize:'18px', textTransform:'capitalize', width:'100%',padding:'24px', fontWeight:500}} class="col-9">
            <p style={{fontWeight:'600', color:'rgb(23, 30, 48)', marginBottom:'4px'}}>Poori Bhaji</p>
            <p style={{fontWeight:'600', color:'rgb(23, 30, 48)', marginBottom:'4px'}}>₹ 140</p>
          </div>
          <div style ={{padding:'16px 24px', fontSize:'18px', textTransform:'capitalize', width:'100%',padding:'24px', fontWeight:500}} class="col-3">
              <button style={{borderRadius:'20px'}} type="button" class="btn btn-outline-success">+ ADD</button>
          </div> 

          </div>

        </div>
        <div class="col-6 col-md-3" style={{border:'1px solid #BDBDBD'}}>
          <div className="row">
            <div className="col-12">
              <p className="cart-header" style={{fontSize:'20px', fontWeight:600,letterSpacing:'normal'}}>Your Cart</p>
            </div>
            <div className="col-12 img-cart">
              <img alt="" style={{width:'205px',height:'100%', alignItems:'center',}} src ="https://ik.imagekit.io/dunzo/web-assets/images/no-items-in-cart-7e84056f44993b68d14184f9b2992af7.png?tr=w-410,cm-pad_resize" alt="image"/>
              <p style={{opacity:'0.5', fontSize:'16px', fontWeight:600, textAlign:'center',color:'rgb(23, 30, 48);', textAlign:'center'}}>Your cart is empty</p>
              <p style={{opacity:'0.5', fontSize:'16px', fontWeight:600, textAlign:'center',color:'rgb(23, 30, 48);', textAlign:'center'}}>Add items to get started</p>
              <div style={{marginTop:"100px"}}>
      Place Order     
        <Link to="/order/checkout" style={{textDecoration:"none"}}>
        <p>
        {" "}
          <Button
            style={{ textTransform: "none" }}
            className={classes.ButtonBackground}
            color="inherit"
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