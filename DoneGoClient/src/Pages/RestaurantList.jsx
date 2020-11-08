import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom'
import { useHistory, Redirect, Link } from 'react-router-dom'
import { Box, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCardInfo from "./RestaurantCardInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:"5%"   
  },
}));

export default function RestaurantList(props) {
  const classes = useStyles();   

  return (
    <>
      <div
        className={classes.root}
        style={{ background: "rgb(247, 253, 250)" }}
      >
      <div style={{width:"70%",margin:"auto"}}>
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
              src="https://ik.imagekit.io/dunzo/icons/website/bluegreen/category/restaurants.png?tr=w-88,h-88,cm-pad_resize"
              alt="logo"
            />
          </Box>
          <Box
            style={{
              border: "none",
              margin: "10px",            
              marginTop: "30px",             
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
              {props.len}  Restaurants
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
