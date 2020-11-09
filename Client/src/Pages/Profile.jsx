import React from "react";

import { useHistory, Redirect, Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import {logout} from '../Redux/User/action'
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Modal from '../Components/Modal'

import SignIn from '../Components/SignIn'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function Profile() {
  const classes = useStyles();
  // const history=useHistory();
  const dispatch = useDispatch()
  const handleLogout=()=>{   
    dispatch(logout())    
  }

  return (
    <><AppBar
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
     <Link to="/order" ><span>DoneGo</span></Link>
      </IconButton>
         
      <IconButton color="black" aria-label="add to shopping cart" style={{marginLeft:"56%"}}>
        <ShoppingCartOutlinedIcon fontSize="large" style={{position:"relative"}}/><span 
        style={{position:"absolute",left:"30px",top:"5px",backgroundColor:"red",color:"white",width:"15px",height:"15px",fontWeight:"bolder",borderRadius:"50%",padding:"3px",fontSize:"16px"}}>1</span>
      </IconButton>
           
    </Toolbar>
  </AppBar>
    <div style={{marginTop:"100px"}}>
     Profile
        <Link to="/order" style={{textDecoration:"none"}}>
        <p>
        {" "}
          <Button
            style={{ textTransform: "none" }}
            className={classes.ButtonBackground}
            color="inherit"
            onClick={handleLogout}            
          >
            Logout
          </Button> </p>
        </Link>     
    </div></>
  );
}