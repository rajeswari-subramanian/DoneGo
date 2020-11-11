import React from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import { logout } from "../Redux/User/action";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import SvgIcon from "@material-ui/core/SvgIcon";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "../Components/Modal";
import axios from "axios";

import SignIn from "../Components/SignIn";

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
    flexGrow: 1,
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
    textAlign: "left",
    fontFamily: "sans-serif",
    border: "none",
  },
  paper2: {
    border: "1px solid rgb(231, 232, 235)",
    minHeight: "108px",
    marginBottom: "18px",
    width: "90%",
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
    width: "90%",
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
}));

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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
        params: {
          id: "",
        },
      })

      .then((res) => {
        console.log("inprofileuserdetail", res.data);
      });
    return () => {};
  }, []);
 
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
            }}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/order">
              <img width="122px" height="28px" alt="" src="/logo.png" />
            </Link>
          </IconButton>

          <IconButton
            color="black"
            aria-label="add to shopping cart"
            style={{ marginLeft: "57%" }}
          >
            <ShoppingCartOutlinedIcon
              fontSize="large"
              style={{ position: "relative" }}
            />
            <span
              style={{
                position: "absolute",
                left: "30px",
                top: "2px",
                backgroundColor: "red",
                color: "white",
                width: "18px",
                height: "18px",
                fontWeight: "bolder",
                borderRadius: "50%",
                padding: "1px",
                fontSize: "16px",
              }}
            >
              1
            </span>
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
                        +91-9008477628
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
                          style={{ fontWeight: 600, fontFamily: "sans-serif" }}
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
          <div className={classes.root1}>
            <Tabs
              style={{
                height: "100%",
                textAlign: "center",
                background: "#F3F3F5",
                marginLeft: "20px",
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
                label="Order List"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.navStyle}
                style={{ width: "300px" }}
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
                label="Dumgo Cash"
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
            <TabPanel style={{ margin: "auto" }} value={value} index={0}>
              <Grid container>
                <Grid style={{ display: "inline-block" }} item={12}>
                  <img
                    alt=""
                    style={{
                      height: "161px",
                      width: "286px",
                      marginLeft: "65px",
                      fontFamily: "sans-serif",
                    }}
                    src="https://ik.imagekit.io/dunzo/web-assets/images/delivery_bike-9ca8bf0483fbb3cf9af11fefb4d6272e.png?tr=w-572,h-322,cm-pad_resize"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: 600,
                      color: "rgb(148, 149, 158)",
                      fontSize: "16px",
                      marginTop: "45px",
                    }}
                  >
                    You dont have any active orders. Place your first order now!
                  </p>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              style={{ border: "2px solid red" }}
            >
              <div class="conatiner">
                <div className={classes.root}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <div className={classes.paper2}>
                        <p
                          style={{
                            textAlign: "center",
                            color: "rgb(0, 179, 122)",
                            fontSize: "16px",
                            height: "18px",
                            fontWeight: 600,
                            fontFamily: "sans-serif",
                          }}
                        >
                          + Add new address
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div
                        className={classes.paper3}
                        style={{ display: "flex" }}
                      >
                        <div>
                          <IconButton>
                            <HomeIcon fontSize="small" />
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
                          }}
                        >
                          HOME
                          <br />
                          24 gdjffk, -, NAL Quarters Scientist Apartment, 13th
                          Main Rd, HAL 3rd Stage, NAL Colony, Kodihalli,
                          Bengaluru, Karnataka 560017, India
                        </p>

                        <div>
                          <IconButton
                            fontSize="small"
                            style={{ color: "rgb(0, 179, 122)" }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </div>
                        <div>
                          <IconButton
                            fontSize="small"
                            color="rgb(231, 232, 235)"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Wallets
                    </p>
                    <div className={classes.paper4}>
                      <p
                        style={{
                          textAlign: "center",
                          color: "rgb(0, 179, 122)",
                          fontSize: "16px",
                          height: "18px",
                          fontWeight: 600,
                          fontFamily: "sans-serif",
                        }}
                      >
                        + Add new card
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={6}></Grid>

                  <Grid item xs={6}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Saved Cards
                    </p>
                    <div className={classes.paper2}>
                      <p
                        style={{
                          textAlign: "center",
                          color: "rgb(0, 179, 122)",
                          fontSize: "16px",
                          height: "18px",
                          fontWeight: 600,
                          fontFamily: "sans-serif",
                        }}
                      >
                        + Add new card
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </Grid>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
          </div>
        </Box>
      </Box>
    </>
  );
}
