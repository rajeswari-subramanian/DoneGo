import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import axios from "axios";
import { userAddress } from "../Redux/User/action";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useThrottle } from "use-throttle";
import { restaurantList } from "../Redux/Restaurant/action";
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
  margin: {
    border: "3px solid #F3F3F5",
    borderRadius: "20px",
    backgroundColor: "#F3F3F5",
    margin: theme.spacing(1),
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
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    left: "0px",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "white",
    border: "1px solid gray",
    borderRadius: "20px",
    padding: "8px 20px",
    fontWeight: "bold",
    fontSize: "12px",
    cursor: "pointer",
    color: "black",
  },
}));

export default function AddNewAddress() {
  const classes = useStyles();
  const [phone, setPhone] = React.useState(1234567890);
  const [name, setName] = useState("");
  const throttledText = useThrottle(name, 800);
  const [showmap, setShowMap] = useState(false);
  const [street, setStreet] = useState("");
  const [land, setLand] = useState("");
  const [curr, setCurr] = useState("Set Location");
  const [place, setPlace] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [addressType, setaddressType] = useState("HOME");
  const [scroll, setScroll] = React.useState("paper");
  const dispatch = useDispatch();
  const Lang = window.localStorage.getItem("Lang");
  const Lati = window.localStorage.getItem("Lati");
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const handleCurrent = () => {
    setShowMap(true);
  };
  const handleAddressType = (e, str) => {
    e.target.style.backgroundColor = "rgb(0, 210, 144)";
    e.target.style.color = "white";
    setaddressType(str);
  };
  const handleAllAddress = (e) => {
    let payload = {
      id: window.localStorage.getItem("userId"),
      street: street,
      landmark: land,
      actualMapAddress: window.localStorage.getItem("Place"),
      longitude: Lang,
      latitude: Lati,
      contactPerson: name,
      contactDetail: phone,
      addressType: addressType,
    };
    axios.put("http://localhost:5000/user/addAddress", payload).then((res) => {
      //console.log("inprofileuserdetail", res.data);
      dispatch(userAddress());
    });

    setOpen(false);
  };

  return (
    <>
      <div
        className={classes.paper2}
        onClick={handleClickOpen("paper")}
        style={{
          textAlign: "center",
          color: "rgb(0, 179, 122)",
          fontSize: "16px",
          height: "18px",
          fontWeight: 600,
          minHeight: "120px",
          fontFamily: "sans-serif",
        }}
      >
        + Add new address
      </div>

      <Dialog
        open={open}
        fullWidth
        style={{ maxHeight: "450px" }}
        maxWidth="sm"
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle style={{ textAlign: "center" }} id="scroll-dialog-title">
          Add a new address
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          {showmap && (
            <div>
              <img
                alt=""
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${Lang},${Lati},14.25,0,60/500x300?access_token=pk.eyJ1IjoicmFqZXN3YXJpLXN1YnJhbWFuaWFuIiwiYSI6ImNraDBrdjc2aTB5YWIzMHF2MnB1MmlvZmEifQ.WfdLqj4cqkuK8C764Xn2VQ`}
              />
            </div>
          )}
          {!showmap && (
            <>
              <TextField
                autoFocus
                fullWidth
                className={classes.margin}
                placeholder="Enter area, building name"
                autoComplete
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                // onChange={(e) => handlePlace(e)}
              />
              <Typography color="text.disabled" onClick={() => handleCurrent()}>
                {" "}
                <GpsFixedIcon style={{ color: "#00D290" }} /> Select location
                via map
              </Typography>
              <hr />
            </>
          )}
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {showmap && (
              <>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      value={street}
                      label="FLAT,FLOOR,BUILDING NAME"
                      type="Street"
                      onChange={(e) => setStreet(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="HOW TO REACH"
                      value={land}
                      type="Landmark"
                      onChange={(e) => setLand(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      value={name}
                      label="CONTACT PERSON NAME"
                      onChange={(e) => setName(e.target.value)}
                      type="contactName"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="CONTACT DETAIL"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="email"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>SAVE ADDRESS AS</Typography>                    
                  </Grid>
                  <Grid item container spacing={1}>
                    <Grid item xs={4}>
                      <button
                        onClick={(e) => handleAddressType(e, "HOME")}
                        style={{ borderRadius: "20px", padding: "5px 20px",outline:"none" }}
                        type="button"
                        class="btn btn-outline-success"
                      >
                        HOME
                      </button>
                    </Grid>
                    <Grid item xs={4}>
                      <button
                        onClick={(e) => handleAddressType(e, "OFFICE")}
                        style={{ borderRadius: "20px", padding: "5px 20px",outline:"none" }}
                        type="button"
                        class="btn btn-outline-success"
                      >
                        OFFICE
                      </button>
                    </Grid>
                    <Grid item xs={4}>
                      <button
                        onClick={(e) => handleAddressType(e, "OTHER")}
                        style={{ borderRadius: "20px", padding: "5px 20px",outline:"none" }}
                        type="button"
                        class="btn btn-outline-success"
                      >
                        OTHER
                      </button>
                    </Grid>{" "}
                  </Grid>
                  <Grid item={12}>
                    <button
                      style={{
                        background: "#D4D6DB",
                        color: "white",
                        width: "300px",
                        borderRadius: "20px",
                        border: "0px",
                        outline:"none",
                        marginLeft: "130px",
                      }}
                      onClick={(e) => handleAllAddress(e)}
                      color="inherit"
                    >
                      Continue
                    </button>
                  </Grid>
                </Grid>
              </>
            )}
            {!showmap && (
              <div style={{ paddingLeft: "5px" }}>
                {place.length === 0 && (
                  <div
                    style={{
                      margin: "auto",
                      width: "100px",
                      marginTop: "10%",
                      border: "0px",
                    }}
                  >
                    <img
                      width="100"
                      height="100"
                      src="/assets/images/modalimg.png"
                      alt=""
                    />
                  </div>
                )}
                {place.length !== 0 && <div>SEARCH RESULTS</div>}
                {place.map((item, i) => (
                  <div key={i}>
                    <div                    
                      onClick={() => {
                        setCurr(item.name);
                        setOpen(false);
                      }}
                    >
                      {i > place.length - 6 && i <= place.length - 1 ? (
                        <p>
                          {" "}
                          <SearchIcon />
                          {item.name}
                          {item.lang}
                          {item.lat}
                          <hr />
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ position: "absolute", top: "8px", left: "520px" }}
        >
          <Button onClick={handleClose} color="black" style={{outline:"none"}}>
            X
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
