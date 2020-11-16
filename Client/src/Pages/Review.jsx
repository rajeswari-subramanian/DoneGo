import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addCartRestaurant,
  selectRetaurant,
} from "../Redux/Restaurant/action";

const products = [
  { name: "Product 1", desc: "A nice thing", price: "Rs: 499" },
];

const useStyles = makeStyles((theme) => ({
  paper1: {
    width: "100%",
    marginTop: "100px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  listItem: {
    padding: theme.spacing(1.8, 1),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(0),
  },
}));

export default function Review() {
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
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(addCartRestaurant({ id: restaurantId, name: restaurantName }));
    // dispatch(selectRetaurant({_id: restaurantId}))
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    // dispatch(selectRetaurant({_id: restaurantId}))
  };
  //console.log(cartItems, restaurantItems, totalCartValue);

  return (
    <>
      <Paper elevation={3} className={classes.paper1}>
        <div className="row">
          <div className="col-12">
            <div
              className="cart-header"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "normal",
              }}
            >
              Your Cart{" "}
              {(cartItems && cartItems.length) > 0
                ? "(" + totalCartItems + " " + "Items" + ")"
                : null}
            </div>
            <div>{restaurantId === cartRestaurantId && cartItems.length > 0 ? restaurantName : null}</div>
          </div>
          <div className="col-12 img-cart">
            {cartItems.length === 0 && (
              <img
                alt=""
                style={{
                  width: "205px",
                  height: "90%",
                  alignItems: "center",
                }}
                src="/assets/images/emptycart.png"
                alt=""
              />
            )}
            {cartItems && cartItems.length > 0 ? (
              <div>
                {cartItems.map((item) => {
                  return (
                    <div style={{ display: "flex", width: "auto" }}>
                      <div
                        style={{
                          fontSize: "15px",
                          textTransform: "capitalize",
                          width: "180px",
                          padding: "24px",
                          fontWeight: 500,
                        }}
                        class="col-5"
                      >
                        <p
                          style={{
                            fontWeight: "500",
                            color: "rgb(23, 30, 48)",
                            marginBottom: "4px",
                            fontFamily: "Open+Sans",
                          }}
                        >
                          {item.itemName}
                        </p>
                      </div>
                      <div style={{ padding: '5px 5px', fontSize: '16px', textTransform: 'capitalize', width: '100%', fontWeight: 500, paddingTop: '20px', fontFamily: 'Open+Sans' }} class="col-5">
                                  {
                                    (item.quantity === undefined) || (item.quantity === 0) ?
                                      <button style={{ borderRadius: '20px', padding: '5px 10px', outline:"none" }} type="button" class="btn btn-outline-success" onClick={() => handleAddToCart(item)}>+ ADD</button>
                                      :
                                      <button style={{ borderRadius: '20px', padding: '5px 10px', outline:"none" }} type="button" class="btn btn-outline-success"><span onClick={() => handleAddToCart(item)}>+ </span>{item.quantity} <span onClick={() => handleRemoveFromCart(item._id)}>- </span> </button>
                                  }
                                </div>
                      <div
                        style={{
                          padding: "3px 18px",
                          fontSize: "16px",
                          textTransform: "capitalize",
                          width: "580px",
                          fontWeight: 500,
                          paddingTop: "25px",
                          fontFamily: "Open+Sans",
                        }}
                        class="col-2"
                      >                       
                        <span
                          style={{
                            fontWeight: "500",
                            color: "rgb(23, 30, 48)",
                            marginBottom: "4px",
                            fontFamily: "Open+Sans",
                          }}
                        >
                          &#8377;{item.itemPrice}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>                
                <div
                  style={{
                    opacity: "0.5",
                    fontSize: "16px",
                    marginTop:"0px",
                    fontWeight: 600,
                    textAlign: "center",                   
                    color: "rgb(23, 30, 48);",                    
                  }}
                >
                  Add items to get started
                </div>
              </div>
            )}           
          </div>
        </div>
      </Paper>
      <Paper elevation={3} style={{ marginTop: "20px", padding: "5px" }}>
        <p>Any instructions for the delivery partner?</p>
      </Paper>
      <Paper elevation={3} style={{ marginTop: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Invoice
        </Typography>
        {cartItems && cartItems.length > 0 && (
          <Grid container style={{ padding: "3px", minHeight: "100px" }}>
            <Grid
              item
              container
              xs={12}
              style={{ borderBottom: "1px solid gray" }}
            >
              <Grid item xs={6}>
                <ListItemText secondary="Item total" />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  &#8377; {totalCartValue}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              style={{ borderBottom: "1px solid gray" }}
            >
              <Grid item xs={6}>
                <ListItemText secondary="Tax" />
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography variant="body2">&#8377; 0</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              style={{ borderBottom: "1px solid gray" }}
            >
              <Grid item xs={6}>
                {" "}
                <ListItemText secondary="Packing" />
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography variant="body2">&#8377; 0</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              style={{ borderBottom: "1px solid gray" }}
            >
              <Grid item xs={6}>
                {" "}
                <ListItemText secondary="Partnet delivery fee" />
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography variant="body2">&#8377; 0</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={6}>
                {" "}
                <ListItemText primary="To pay" />
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography variant="body2">&#8377;{totalCartValue}</Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Paper>
    </>
  );
}
