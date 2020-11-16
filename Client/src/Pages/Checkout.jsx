import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useHistory, Redirect, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "../Components/SignIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "60px",
  },
  layout: {
    background: "#F0F5F7",
    width: "left",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    [theme.breakpoints.up(500 + theme.spacing(1) * 1)]: {
      width: 500,
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
    padding: theme.spacing(0, 0, 0, 0),
    background: "#F0F5F7",
  },
  buttons: {
    display: "flex",
    outline:"none",
    justifyContent: "flex-end",
  },
  button: {
    outline:"none",
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

export default function Checkout() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0); 
  const [isAuth,seti] =React.useState(window.localStorage.getItem('isAuth'))
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const steps = [
    <Paper elevation={3} className={classes.paper1}>
      <AddressForm />
    </Paper>,
    <Paper elevation={3} className={classes.paper1}>
      {" "}
      <PaymentForm funcLast={handleNext} />
    </Paper>,
  ];

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  }; 
  
  //console.log("isAuthincheckout", isAuth);
  return (
    <>
      <AppBar
        variant="outlined"
        style={{
          border: "none",
          zIndex: "999",
          transition: "0.3s linear",
          maxHeight: "70px",
          minHeight: "70px",
        }}
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
            <Link to="/order">
              <img width="122px" height="28px" alt="" src="/assets/images/logo.png" />
            </Link>
          </IconButton>

          <span style={{ marginLeft: "63%" }}>
            <SignIn />{" "}
          </span>
        </Toolbar>
      </AppBar>
      {isAuth === 'true' && (
        <div
          className={classes.root}
          style={{ background: "#F0F5F7", height: "100vh" }}
        >
          <Grid
            container
            spacing={2}
            justify="center"
            alignItems="center"
            style={{ background: "#F0F5F7", width: "80%", margin: "auto" }}
          >
            <Grid item xs={8}>
              <main>
                <Paper className={classes.paper} elevation={0}>
                  <Stepper
                    separator="›"
                    activeStep={activeStep}
                    className={classes.stepper}
                    orientation="vertical"
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <React.Fragment>
                    {activeStep === steps.length - 1 ? (
                      <Redirect to="/order/thankyou" />
                    ) : null}
                  </React.Fragment>
                </Paper>
              </main>
            </Grid>
            <Grid item xs={4}>
              <Review />
            </Grid>
          </Grid>
        </div>
      )}
      {isAuth === 'false' && (
        <div
          style={{
            margin: "auto",
            background: "#F0F5F7",
            width: "100%",
            height: "100vh",
            paddingTop: "200px",
          }}
        >
          <img
            width="100"
            height="130"
            alt=""
            src="/assets/images/checkoutimg.png"
          />
          <br /> <br />
          <div style={{ fontWeight: "bolder" }}>Your cart is empty!</div>
          <div style={{ fontSize: "14px", color: "#A188C0" }}>
            Make your task list and DoneGo it now!
          </div>
          <br />
          <Link to="/order">
            <p>
              {" "}
              <Button
                style={{ textTransform: "none", textDecoration: "none",outline:"none" }}
                className={classes.ButtonBackground}
                color="inherit"
              >
                Okay
              </Button>{" "}
            </p>
          </Link>
        </div>
      )}
    </>
  );
}