import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    paddingTop: "5%",
    width: "70%",
    background: "#F0F5F7",
    // border:"2px solid red",
    justifyContent: "center",
  },
  layout: {
    background: "#F0F5F7",
    width: "left",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    [theme.breakpoints.up(500 + theme.spacing(1) * 1)]: {
      width: 500,
      // marginLeft: "auto",
      // marginRight: "auto",
    },
  },
  paper1: {
    width: "600px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper: {
    background: "#F0F5F7",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.up(500 + theme.spacing(2) * 1)]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
    },
  },
  stepper: {
    padding: theme.spacing(0, 0, 0),
    background: "#F0F5F7",
  },
  buttons: {
    display: "flex",
    outline:"none",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  ButtonBackground: {
    backgroundColor: "rgb(0, 210, 144)",
    borderRadius: "20px",
    padding: "8px 90px",
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
}));
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

export default function PaymentForm({ funcLast }) {
  const [name, setName] = useState("Mehul");
  const classes = useStyles();
  const {
    restaurantItems,
    restaurantId,
    restaurantName,
    cartItems,
    cartRestaurantId,
    totalCartValue,
    totalCartItems,
  } = useSelector((state) => state.app);
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    let data;
    let temp = {
      amount: totalCartValue,
    };
    await axios
      .post("http://localhost:5000/razorpay", temp)
      .then((t) => (data = t.data));

    //console.log("Razordata", data);

    const options = {
      key: "rzp_test_8sYueDGWseWPkq",
      currency: data.currency,
      //amount: 800,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Razorpay",
      description: "Thank you for nothing. Please give us some money",
      handler: function (response) {       
        funcLast();
      },
      prefill: {
        name: "Rajeswari",
        email: "rajilechrame@gmail.com",
        phone_number: "9008477628",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            fontSize: "20px",
            textAlign: "left",
            fontWeight: 600,
            fontFamily: "sans-serif",
          }}
        >
          Select payment method
        </Grid>
        <Grid
          item
          xs={12}
          style={{ fontSize: "12px", color: "#87B2D8", textAlign: "left" }}
        >
          Select your payment method from the existing one or add new one
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button
            style={{ textTransform: "none", textDecoration: "none",outline:"none" }}
            onClick={displayRazorpay}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.ButtonBackground}
            color="inherit"
          >
            RAZOR PAY
          </Button>
        </Grid>
        <Grid item xs={6}>
          &#8377; {totalCartValue}
        </Grid>
      </Grid>
    </>
  );
}
