import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddNewAddress from "./AddNewAddress";
import { userAddress } from "../Redux/User/action";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "white",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    background: "transparent",
    color: "black",
    height: "72px",
    position: "fixed",
    zIndex: 11,
    width: "100%",
    display: "flex",
  },
  imageStyle: {
    height: "28px",
    width: "122px",
  },
  body: {
    border: "none",
    width: "100%",
    height: "auto",
    paddingLeft: "20px",
    margin: "auto",
    marginTop: "4%",
    background: "rgb(240, 245, 247) none repeat scroll 0% 0%",
    overflow: "hidden",
    fontFamily: "sans-serif",
  },
  orderCard: {
    width: "70%",
    height: "80vh",
    margin: "auto",
    borderRadius: "5px",
    marginTop: "48px",
    marginBottom: "50px",
    fontFamily: "sans-serif",
  },
  header: {
    height: "89px",
    background: "rgb(240, 245, 247) none repeat scroll 0% 0%",
    fontFamily: "sans-serif",
  },
  root1: {
    border: "none",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    display: "flex",
    alignContent: "center",
    height: 671,
    fontFamily: "sans-serif",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  paper1: {
    border: "none",
  },
  navStyle: {
    fontWeight: 600,

    fontFamily: "sans-serif",
    border: "none",
  },
  paper2: {
    border: "1px solid rgb(231, 232, 235)",
    minHeight: "108px",
    marginBottom: "10px",
    width: "95%",
    alignItems: "center",
    paddingTop: "35px",
    borderRadius: "5px",
  },

  title1: {
    flexGrow: 1,
    height: "auto",
  },
  paper3: {
    border: "1px solid rgb(231, 232, 235)",
    minHeight: "108px",
    marginBottom: "10px",
    paddingTop: "0px",
    width: "95%",
    // alignItems:'center',
    borderRadius: "5px",
  },
  pic: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
  paper4: {
    border: "1px solid rgb(231, 232, 235)",
    minHeight: "78px",
    marginBottom: "10px",
    width: "200px",
    alignItems: "center",
    paddingTop: "25px",
    borderRadius: "5px",
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
}));

export default function AddressList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAddress());
  }, []);
  const [address1, setAddress1] = React.useState(
    useSelector((state) => state.user.userAddresses)
  );
  return (
    <>
      <Grid container style={{height:"100vh"}}>
        <Grid item xs={6}>
          <AddNewAddress />
        </Grid>
        {address1.map((item, i) => (
          <Grid item xs={6} key={i}>
            <div className={classes.paper3} style={{ display: "flex" }}>
              <div>
                <IconButton>
                  <HomeIcon fontSize="small" style={{outline:"none"}}/>
                </IconButton>
              </div>
              <p
                style={{
                  fontSize: "10px",
                  flexBasis: "90%",
                  textAlign: "justify",
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                  paddingTop: "15px",
                  minHeight: "100px",
                  maxHeight: "80px",
                }}
              >
                {item.addressType}
                <br />
                {item.street}
                {item.landmark}
                {item.actualMapAddress}
              </p>

              <div>
                <IconButton
                  fontSize="small"
                  style={{ color: "rgb(0, 179, 122)" ,outline:"none"}}
                >
                  <EditIcon fontSize="small" style={{outline:"none"}}/>
                </IconButton>
              </div>
              <div>
                <IconButton fontSize="small" color="rgb(231, 232, 235)" style={{outline:"none"}}>
                  <DeleteIcon fontSize="small" style={{outline:"none"}}/>
                </IconButton>
              </div>
            </div>
          </Grid>
        ))}{" "}
      </Grid>
    </>
  );
}
