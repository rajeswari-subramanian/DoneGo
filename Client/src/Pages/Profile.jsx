import React from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { userAddress } from "../Redux/User/action";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Box, Button, Divider, Grid, Paper } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { logout } from "../Redux/User/action";
import AddressList from "./AddressList";
import { loadData } from "../Redux/LocalStorage";
import axios from 'axios'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

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
    height: "100hv",
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
    height: "100hv",
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
    marginBottom: "18px",
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
    marginBottom: "18px",
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
    marginBottom: "18px",
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
  pStyle: {
    fontSize: "12px",
    color: "rgb(159, 163, 175)",
    textAlign: "left",   
    marginLeft: "30px",
    paddingTop: "15px",
    fontWeight: "500",
  },
  pStyle2: {
    fontSize: "12px",
    color: "rgb(159, 163, 175)",
    textAlign: "left",
    marginLeft: "30px",
    paddingTop: "15px",
    fontWeight: "500",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [orderList, setorderList] = React.useState(true);
  const [address, setAddress] = React.useState(useSelector((state) => state.user.userAddresses))
  const { restaurantData, totalCartItems } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  

React.useEffect(() => {
  axios
    .get("http://localhost:5000/user/userDetails", {
      headers:{
        id: window.localStorage.getItem('userId')
      }
    })
    .then(res=> {
      setAddress(res.data[0].address)
      setorderList(res.data[0].orderDetails)
      //console.log("UserDetails: ",res.data[0])
    })

}, [address]);
  //console.log("profile",address,orderList,window.localStorage.getItem('cartRestaurant'),window.localStorage.getItem('totalCartValue'))
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
              marginLeft: "13%",
              fontWeight: "1000",
              fontSize: "27px",
              outline:"none",              
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
          <IconButton
            color="black"
            aria-label="add to shopping cart"
            style={{ marginLeft: "57%" , outline:"none"}}
          >
            <Link to="/order/checkout">
              <ShoppingCartOutlinedIcon
                fontSize="large"
                style={{ position: "relative", color: "black",outline:"none" }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "30px",
                  top: "5px",
                  backgroundColor: "#ff2e56",
                  color: "white",
                  width: "18px",
                  height: "18px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                  borderRadius: "50%",
                  padding: "1px",
                  fontSize: "12px",
                }}
              >
                {totalCartItems}
              </span>
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* BODY */}
      <Box className={classes.body}>
        <Box className={classes.orderCard}>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item sm={12}>
                <Paper
                  style={{ height: "85px" }}
                  elevation={0}
                  className={classes.paper}
                >
                  <Toolbar>
                    <Typography
                      style={{ padding: "15px" }}
                      variant="h6"
                      className={classes.title}
                    >
                      <div
                        style={{
                          fontSize: "20px",
                          textAlign: "left",
                          fontWeight: 600,
                          fontFamily: "sans-serif",
                        }}
                      >
                        +91-{loadData('mobileNo')}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          textAlign: "left",
                          fontWeight: "500",
                          color: "blue",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Update Profile
                      </div>
                    </Typography>

                    <Link to="/order" style={{ textDecoration: "none" }}>
                      <p>
                        {" "}
                        <button
                          onClick={handleLogout}
                          style={{ fontWeight: 600, fontFamily: "sans-serif" ,outline:"none"}}
                          type="button"
                          class="btn btn-outline-success"
                        >
                          Logout
                        </button>{" "}
                      </p>
                    </Link>
                  </Toolbar>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div className={classes.root1} >
            <Tabs
              style={{              
                background: "#F3F3F5",
                marginLeft: "20px",
                marginRight: "10px",
                border: "none",
              }}
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab
                className={classes.navStyle}
                label="Orders List"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.navStyle}
                label="Addresses"
                {...a11yProps(1)}
              />
              <Tab
                className={classes.navStyle}
                label="Manage Payments"
                {...a11yProps(2)}
              />
              <Tab
                className={classes.navStyle}
                label="DoneGo Cash"
                {...a11yProps(3)}
              />
              <Tab
                className={classes.navStyle}
                label="Support"
                {...a11yProps(4)}
              />
              <Tab
                className={classes.navStyle}
                label="About"
                {...a11yProps(5)}
              />
            </Tabs>
            <TabPanel
              style={{ width: "75%", margin: "auto", height: "100vh" }}
              value={value}
              index={0}
            >
              {!orderList && (
                <Grid container>
                  <Grid style={{ display: "inline-block" }} item={12}>
                    <img
                      alt=""
                      style={{
                        height: "161px",
                        width: "286px",
                        marginLeft: "30px",
                        fontFamily: "sans-serif",
                      }}
                      src="/assets/images/profileimg.png"
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontFamily: "sans-serif",
                        color: "rgb(148, 149, 158)",
                        fontSize: "16px",
                        marginTop: "45px",
                      }}
                    >
                      You dont have any active orders. Place your first order
                      now!
                    </p>
                  </Grid>
                </Grid>
              )}
              {orderList && (
                <>
                  <Grid container spacing={1}>
                    <Grid style={{ width: "100%" }} item={12}>
                      <Toolbar>
                        <Typography
                          style={{ padding: "2px" }}
                          variant="h6"
                          className={classes.title}
                        >
                          <div class="container" style={{ display: "flex" }}>
                            <FastfoodIcon
                              fontSize="large"
                              style={{ color: "rgb(0, 179, 122)" }}
                            />
                            <p
                              style={{
                                fontSize: "17px",
                                fontWeight: "800",
                                lineHeight: "normal",
                                fontFamily: "sans-serif",
                                marginLeft: "10px",
                              }}
                            >
                              Restaurants
                            </p>
                          </div>
                        </Typography>
                        <p style={{ fontWeight: "600", fontSize: "17px" }}>
                          Paid:<b style={{ color: "rgb(0, 179, 122)" }}>₹{window.localStorage.getItem('totalCartValue')}</b>
                        </p>
                      </Toolbar>
                      <Grid style={{ width: "100%" }} item={12}>
                        <div class="container">
                          <div class="row">
                            <div class="col-2">
                              <Timeline
                                style={{
                                  textAlign: "left",
                                  alignItems: "left",
                                  alignContent: "left",
                                  paddingLeft: "0px",
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                  </TimelineSeparator>
                                  <TimelineContent>
                                    <h6
                                      style={{
                                        color: "black",
                                        fontSize: "15px ",
                                      }}
                                    >
                                      {window.localStorage.getItem('cartRestaurant')}
                                    </h6>
                                  </TimelineContent>
                                </TimelineItem>

                                <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot />
                                  </TimelineSeparator>
                                  <TimelineContent>
                                    <h6
                                      style={{
                                        color: "black",
                                        fontSize: "15px ",
                                      }}
                                    >
                                      {" "}
                                      HOME
                                    </h6>
                                  </TimelineContent>
                                </TimelineItem>
                              </Timeline>
                            </div>
                            <div class="col-10">
                              <p className={classes.pStyle}>
                              {window.localStorage.getItem('restaurantAddress')}
                              </p>
                              <p className={classes.pStyle2}>
                              {window.localStorage.getItem('currDeliveryAddress')}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "rgb(159, 163, 175)",
                            fontFamily: "sans-serif",
                            paddingLeft: "35px",
                            textAlign: "left",
                          }}
                        >
                          Meghna Special Biriyani x 1
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                  <div class="container">
                    <div class="row">
                      <div
                        style={{ border: "none", paddingTop: "10px" }}
                        class="col-12"
                      >
                        <Toolbar>
                          <Typography
                            style={{ padding: "5px" }}
                            variant="h6"
                            className={classes.title}
                          >
                            <div class="container" style={{ display: "flex" }}>
                              <CheckCircleIcon
                                style={{ color: "rgb(0, 179, 122)" }}
                              />
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  lineHeight: "normal",
                                  fontFamily: "sans-serif",
                                  paddingLeft: "10px",
                                  color: "rgb(159, 163, 175)",
                                }}
                              >
                                Completed
                              </p>
                            </div>
                          </Typography>
                          <button
                            style={{
                              fontWeight: 600,
                              fontFamily: "sans-serif",
                              borderRadius: "20px",
                              outline:"none"
                            }}
                            type="button"
                            class="btn btn-outline-success"
                          >
                            Track Order
                          </button>
                        </Toolbar>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </>
              )}
            </TabPanel>
            <TabPanel style={{ width: "75%" ,height:"100vh"}} value={value} index={1}>
              {" "}
              <AddressList address={address} />
            </TabPanel>
            <TabPanel value={value} index={2}>              
            </TabPanel>
            <TabPanel value={value} index={3}>             
            </TabPanel>
            <TabPanel value={value} index={4}>            
            </TabPanel>
            <TabPanel value={value} index={5}>            
            </TabPanel>
          </div>
        </Box>
      </Box>
    </>
  );
}
