import React, { useState,useEffect } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom'
import { useHistory, Redirect, Link } from 'react-router-dom'
import { Box, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCardInfo from "./RestaurantCardInfo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Modal from '../Components/Modal'
import SignIn from '../Components/SignIn'
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:"5%"   
  },
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

export default function RestaurantList(props) {
  const classes = useStyles();   
  const {restaurantData, totalCartItems} = useSelector((state) => state.app); 
  const [restaurantLen,setLen]=useState(restaurantData.length)  
  useEffect(() => {
    setLen(restaurantData.length)
  }, [restaurantData],[restaurantLen])  

  return (
    <>  <AppBar
    variant="outlined"
    style={{ border: "none", zIndex: "999", transition: "0.3s linear",maxHeight:"70px",minHeight:"70px" }}
    className={classes.color}
    position="fixed"
  >
    <Toolbar>    
      <IconButton
        style={{
          marginLeft: "10%",
          fontWeight: "1000",
          fontSize: "27px",
          outline:"none"
        }}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"                      
      >
     <Link to="/order" ><img width="122px" height="28px" alt="" src='/assets/images/logo.png'/></Link>
      </IconButton>
      <Modal />      
      <IconButton color="black" aria-label="add to shopping cart" style={{marginLeft:"46%", outline:"none"}}>
          <Link to='/order/checkout'  ><ShoppingCartOutlinedIcon fontSize="large" style={{position:"relative",color:"black"}}/><span 
            style={{position:"absolute",left:"30px",top:"5px",backgroundColor:"#ff2e56",color:"white",width:"18px",height:"18px",fontWeight:"bolder",cursor:"pointer",borderRadius:"50%",padding:"1px",fontSize:"12px", outline:"none"}}>{totalCartItems}</span></Link>
          </IconButton>
     <SignIn />         
    </Toolbar>
  </AppBar>
      <div
        className={classes.root}
        style={{ background: "rgb(247, 253, 250)" }}
      >
      <div style={{width:"75%",margin:"auto",margingTop:'50px'}}>
        <Breadcrumbs separator="-›" aria-label="breadcrumb" style={{marginTop:"30px"}}>
          <Link
            style={{             
              color: "rgb(0, 179, 122)",             
              opacity: 1,
              fontWeight: 600,
              fontSize: 12,
              fontFamily: "sans-serif",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              color: "rgb(0, 179, 122)",             
              opacity: 1,
              fontWeight: 600,
              fontSize: 12,
              fontFamily: "sans-serif",
            }}
            to="/"
          >
            Bangalore
          </Link>
          <Typography
            style={{            
              opacity: 1,
              fontWeight: 600,
              fontSize: 12,
              fontFamily: "sans-serif",
            }}
            color="inherit"
          >
            Food Delivery
          </Typography>
        </Breadcrumbs>     
        <Box
        style={{
          border: "none",
          width: "100%",      
          paddingBottom:"5%",    
          background: "rgb(247, 253, 250)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Box
            style={{
              border: "none",
              width: "88px",           
              marginTop: "30px",
              height: "88px",
              borderRadius: "16px",
              textAlign: "center",
              padding: "5px",
              background: "rgba(0, 210, 144, 0.08)",
            }}
          >
            <img
              style={{
                height: "44px",
                width: "44px",
                alignContent: "center",
                marginTop: "15px",
              }}
              src="/assets/images/restaurantlist.png"
              alt="logo"
            />
          </Box>
          <Box
            style={{
              border: "none",
              margin: "10px",            
              marginTop: "60px",             
              lineHeight: "normal",
              letterSpacing: "normal",
              fontFamily: "sans-serif",
            }}
          >
            <p
              style={{
                fontSize: "28px",
                color: "black",
                textAlign:"left",
                letterSpacing: "normal",
                fontWeight: "700",
                lineHeight: "0",
                fontFamily: "sans-serif",
              }}
            >
              Order from Restaurants
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 600,
                opacity: "0.6",
                textAlign: "left",
                fontFamily: "sans-serif",
              }}
            >
              {restaurantLen}  Restaurants
            </p>
          </Box>
        </div>
      </Box>
        </div>
      </div>      <br />
      <RestaurantCardInfo />
    </>
  );
}
