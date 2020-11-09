import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import BodyCard from "./BodyCard";
import SmallCards from "./SmallCards";
import TopPickCards from "./TopPickCards";
import Navbar from './Navbar'
import Footer from "./Footer";
import { restaurantList } from "../Redux/Restaurant/action";
import RestaurantList from "../Pages/RestaurantList";

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
    height: "200px",
    marginLeft: "32%",
    backgroundImage: `url('https://ik.imagekit.io/dunzo/web-assets/images/dunzo-app-be5ce8c58d3ad0b183757f34179879b4.png?tr=w-352,h-480,cm-pad_resize)`,
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const restaurantData = useSelector((state) => state.app.restaurantData);
  console.log("restaurantData", restaurantData.length);

  return (
    <> <Navbar />
      {/* INSTANT SECTION */}
      <div style={{ background: " rgb(247, 253, 250)" }}>
        <div style={{ width: "70%", margin: "auto" }}>
          <Grid
            container
            direction="column"
            style={{
              paddingTop: "120px",
              fontFamily: "sans-serif",
            }}
          >
            <Grid
              item
              style={{
                fontSize: "28px",
                fontWeight: "600",
                marginBottom: "40px",
                fontFamily: "sans-serif",
                textAlign: "left",
              }}
            >
              {" "}
              Instant delivery at your doorstep
            </Grid>
            <Grid
              item
              container
              spacing={2}
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={3}>
                <BodyCard imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_grocery_secondary2_1602495207383.png" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <BodyCard imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1598257809885.png" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Link to="/order/restaurant">
                  <BodyCard imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_food_secondary2_1598017573106.png" />
                </Link>
              </Grid>
              <Grid item xs={12} sm={3}>
                <BodyCard imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1598016020169.png" />
              </Grid>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "20px" }}>
            <Grid
              item
              container
              spacing={2}
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={2}>
                <SmallCards
                  text="Meat and Fish"
                  imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_meat_tertiary_grid_1597822164502.png"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <SmallCards
                  text="Pet Supplies"
                  imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_pets_tertiary_grid_1597822149867.png"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <SmallCards
                  text="Paan Shop"
                  imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/paan_grid_1597823647322.png"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <SmallCards
                  text="Gift and Lifestyle"
                  imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_gifts_tertiary_grid_1597821878795.png"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <SmallCards
                  text="Medicines"
                  imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_medical_tertiary_grid_1597821896720.png"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <SmallCards
                  text="Health and wellness"
                  imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_wellness_tertiary_grid_1597821915084.png"
                />
              </Grid>
            </Grid>
            <br />
            <br />
          </Grid>
        </div>
      </div>
      {/* TOP SECTION */}
      <div style={{ width: "70%", margin: "auto" }}>
        <Grid container direction="column" style={{  paddingTop: "60px", }}>
          <Grid
            item
            style={{
              textAlign: "left",
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "40px",
              fontFamily: "sans-serif",
            }}
          >
            Top picks for you
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Box
                style={{
                  backgroundColor: "rgb(37, 211, 102)",
                  width: "60px",
                  height: "6px",
                  marginTop: "10px",
                  borderRadius: "25px",
                  marginRight: "5px",
                }}
              />
              <Box
                style={{
                  backgroundColor: "rgb(37, 211, 102)",
                  width: "17px",
                  height: "6px",
                  marginTop: "10px",
                  borderRadius: "25px",
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={3}>
              <TopPickCards imgSrc="https://ik.imagekit.io/dunzo/web-assets/images/d4b.jpg?tr=w-488,h-326,cm-pad_resize" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TopPickCards imgSrc="https://ik.imagekit.io/dunzo/web-assets/images/grocery.jpg?tr=w-488,h-326,cm-pad_resize" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TopPickCards imgSrc="https://ik.imagekit.io/dunzo/web-assets/images/restaurants.jpg?tr=w-488,h-326,cm-pad_resize" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TopPickCards imgSrc="https://ik.imagekit.io/dunzo/web-assets/images/send-packages.jpg?tr=w-488,h-326,cm-pad_resize" />
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* MOBILE IMAGE SECTION */}
      <Box
        style={{
          width: "100%",
          backgroundImage:
            "linear-gradient(-180deg, rgb(255, 255, 255), rgb(255, 255, 255) 30%, rgb(240, 242, 247) 15%, rgb(240, 242, 247) 85%)",
          height: "auto",
          display: "flex",
          boxSizing: "border-box",
          marginTop: "60px",
        }}
      >
        <Box className={classes.MobilePic}>
          <img
            style={{ height: "270px" }}
            src="https://ik.imagekit.io/dunzo/web-assets/images/dunzo-app-be5ce8c58d3ad0b183757f34179879b4.png?tr=w-352,h-480,cm-pad_resize"
            alt="mobile"
          />
        </Box>

        <div
          style={{
            marginTop: "130px",           
            fontFamily: "sans-serif",
            fontSize: "20px",
            color: "#2D3444",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "50px",
          }}
        >
          <div>All this from the convenience of your phone.</div>
          <div>Download the Dunzo mobile app.</div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "5px",
              marginTop: 0,
            }}
          >
            <img
              src="https://ik.imagekit.io/dunzo/web-assets/images/playstore-fe053d8036d653fed3955cd2c2a1e7e2.svg"
              alt="mobile"
            />
            <img
              src="https://ik.imagekit.io/dunzo/web-assets/images/appstore-43cd8d3a00a6ed32c485951de9b3af63.svg"
              alt="mobile"
            />
          </div>
          <br />
        </div>
      </Box>
      <div style={{ backgroundColor: "rgb(23, 30, 48)" }}>
        <div style={{ width: "70%", margin: "auto" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
