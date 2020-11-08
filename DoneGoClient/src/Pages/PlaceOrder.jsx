import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory, Redirect, Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";

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
}));

function PlaceOrder() {
  const classes = useStyles();
  return (
    <div style={{marginTop:"100px"}}>
      Place Order
     
        <Link to="/checkout" style={{textDecoration:"none"}}>
        <p>
        {" "}
          <Button
            style={{ textTransform: "none" }}
            className={classes.ButtonBackground}
            color="inherit"
          >
            Proceed to checkout
          </Button> </p>
        </Link>
     
    </div>
  );
}

export default PlaceOrder;
