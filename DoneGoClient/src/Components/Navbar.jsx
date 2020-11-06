import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import BodyCard from "./BodyCard";
import SmallCards from "./SmallCards";
import TopPickCards from "./TopPickCards";
import Modal from "./Modal";
import Footer from "./Footer";
import { restaurantList } from "../Redux/Restaurant/action";
import RestaurantList from "../Pages/RestaurantList";
import Routes from '../Routes/Routes'

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
  MobilePic: {
    width: "176px",
    boxSizing: "content-box",
    height: "240px",
    marginLeft: "32%",
    backgroundImage: `url('https://ik.imagekit.io/dunzo/web-assets/images/dunzo-app-be5ce8c58d3ad0b183757f34179879b4.png?tr=w-352,h-480,cm-pad_resize)`,
  },
}));

export default function Navbar() {
  //const dispatch = useDispatch()
  const classes = useStyles();

  const restaurantData = useSelector((state) => state.app.restaurantData);
  console.log("restaurantData", restaurantData.length);

  return (
    <>
      <AppBar
        variant="outlined"
        style={{ border: "none", zIndex: "999", transition: "0.3s linear",maxHeight:"100px" }}
        className={classes.color}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            style={{
              marginLeft: "200px",
              fontWeight: "1000",
              fontSize: "27px",
            }}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            DoneGo
          </IconButton>
          <Modal />
          <Button
            style={{
              marginLeft: "220px",
              textTransform: "none",
              fontFamily: "Ubuntu",
            }}
            color="inherit"
          >
            Donego for Partners{" "}
          </Button>
          <Button style={{ fontFamily: "Ubuntu", textTransform: "none" }}>
            {" "}
            Donego for Business
          </Button>
          <IconButton color="black" aria-label="add to shopping cart">
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <Button
            style={{ marginRight: "100px", textTransform: "none" }}
            className={classes.ButtonBackground}
            color="inherit"
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>  
    <Routes />  </>
  );
}
