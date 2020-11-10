import React from "react";
import { fade,makeStyles } from "@material-ui/core/styles";
import { useHistory, Redirect, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from '@material-ui/core/StepContent';
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
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
    margin: "auto",
    paddingTop:"5%",
    width: "30%",
    background:"#F0F5F7",
    // border:"2px solid red",
    justifyContent:"center"
    
  }, 
  layout: {
    background:"#F0F5F7",
    width: "left",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    [theme.breakpoints.up(500 + theme.spacing(1) * 1)]: {
      width:500,
      // marginLeft: "auto",
      // marginRight: "auto",
    },
  },
  paper1: {
    width:"600px",
    padding: theme.spacing(2),
    textAlign: "center",  
    color: theme.palette.text.secondary,
  },
  paper: {background:"#F0F5F7",
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
    padding: theme.spacing(0, 0, 0),   background:"#F0F5F7",
    
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
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

// style={{border:"2px solid blue"}}

export default function Thankyou() {
  const classes = useStyles();
  
  return (<><AppBar
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
     
     <span style={{marginLeft:"54%"}}><SignIn /> </span>        
    </Toolbar>
  </AppBar>
    <div style={{background:"#F0F5F7"}}>     
      <div className={classes.root}>
        <Grid container justify="center"
  alignItems="center" style={{background:"#F0F5F7"}} >
          <Grid item xs={12} >           
              {/* <main className={classes.layout} > */}
                <Paper className={classes.paper} elevation={3}>                
                         <Typography variant="h5" gutterBottom>
                           Thank you for your order.
                         </Typography>
                         <Typography variant="subtitle1">
                           Your order number is #2001539. We have emailed your
                           order confirmation, and will send you an update when
                           your order has shipped.
                         </Typography>               
                </Paper>
              {/* </main>           */}
          </Grid>          
        </Grid>
      </div>
    </div></>
  );
}
