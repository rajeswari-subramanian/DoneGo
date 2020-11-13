import React from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { fade, makeStyles } from "@material-ui/core/styles";
import Navbar from '../Components/Navbar'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Modal from '../Components/Modal'
import SignIn from '../Components/SignIn'
import "bootstrap/dist/css/bootstrap.css";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Grid } from '@material-ui/core';
//import DataCards from "./DataCards";
import RestaurantTableDetails from './RestaurantTableDetails';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(3),
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

export default function PlaceOrder() {
  const { totalCartItems, restaurantName, restaurentImage, restaurentDelivery } = useSelector((state) => state.app);
  const classes = useStyles();
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  // console.log("Delivery Time", restaurantData.filter(f=> f._id === restaurantId)[0].deliveryTime)
  return (
    <> 
    <AppBar
    variant="outlined"
    style={{ border: "none", zIndex: "999", transition: "0.3s linear",maxHeight:"70px",minHeight:"70px" }}
    className={classes.color}
    position="fixed"
  >
    <Toolbar>
    
      <IconButton
        style={{
          marginLeft: "13%",
          fontWeight: "1000",
          fontSize: "27px",
        }}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"                      
      >
      <Link to="/order" ><img width="122px" height="28px" alt="" src='/logo.png'/></Link>
      </IconButton>
      <Modal />      
      <IconButton color="black" aria-label="add to shopping cart" style={{marginLeft:"33%"}}>
        <ShoppingCartOutlinedIcon fontSize="large" style={{position:"relative"}}/><span 
        style={{position:"absolute",left:"30px",top:"2px",backgroundColor:"red",color:"white",width:"18px",height:"18px",fontWeight:"bolder",borderRadius:"50%",padding:"1px",fontSize:"16px"}}>{totalCartItems}</span>
      </IconButton>
     <SignIn />         
    </Toolbar>
  </AppBar>
  
   
        <div style={{width:"70%",margin:"auto"}}>

    <Breadcrumbs separator="-›" aria-label="breadcrumb" style={{marginTop:"70px",width:'100%'}}>
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
        </div>
    
         
 
   <Box style={{border:'none',width:'100%',height:'100%',background:'rgb(247, 253, 250)', overflow:'hidden',pointerEvents:'auto', transform:'scleY(1)'}}>
       <div style={{display:'flex', flexDirection:'row'}}>

       <Box style={{border:'none', width:'160px', marginLeft:'10%', marginTop:'50px',height:'160px',borderRadius: '16px',padding:'5px',background:'rgba(0, 210, 144, 0.08)'}}>
           <img style={{width:'160px', height:'160px', borderRadius:6}} src={restaurentImage} alt="resturent"/>

       </Box>
       <Box style={{border:'none', margin:'10px',width: '360px', marginTop:'50px',height:'88px', lineHeight:'normal',letterSpacing:'normal', textAlign:'left'}}>
            <p style={{fontSize:'14px',fontWeight:500,opacity:'0.6'}}>Biryani</p>
          <p style={{fontSize:'28px', color:'black', letterSpacing:'normal',fontWeight:'700',lineHeight:'0'}}>{restaurantName}</p>
          <p style={{fontSize:'14px',fontWeight:500,opacity:'0.6'}}>{restaurentDelivery}</p>
          

       </Box>

       </div>

   </Box>
   <RestaurantTableDetails />  

    </>
  );
}