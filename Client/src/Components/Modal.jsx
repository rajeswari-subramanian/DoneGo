import React, { useState,useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useThrottle } from "use-throttle";
import { useSelector, useDispatch } from 'react-redux'
import {restaurantList} from '../Redux/Restaurant/action'


const useStyles = makeStyles((theme) => ({
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
}));

export default function Modal() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const throttledText = useThrottle(name, 800);
  //const [showmap, setShowMap] = useState("false");
  const [lang, setLang] = useState("");
  const [lat, setLat] = useState("");
  const [curr, setCurr] = useState("Set Location");
  const [place, setPlace] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const dispatch = useDispatch()


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
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };  

  var config1 = {
    method: "get",
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${throttledText}.json?country=in&access_token=${process.env.MAP_BOX}`,
    headers: {},
  };  

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  //CURRENT LOCATION LANG LAT PLACENAME - Variables are lang, lat,curr
  function handleCurrent() {   
    navigator.geolocation.getCurrentPosition(function success(pos) {
      var crd = pos.coords;
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${crd.longitude},${crd.latitude}.json?types=locality&access_token=${process.env.MAP_BOX}`,)
        .then(function (response) {
          //console.log(response);
          let temp = response.data.features[0].place_name.split(",");
          setCurr(`${temp[0]},${temp[1]}`);
          window.localStorage.setItem('Place', `${temp[0]},${temp[1]}`)
        })
        .catch(function (error) {
          console.log(error);
        });
      setLang(crd.longitude);
      setLat(crd.latitude);
      window.localStorage.setItem('Lang', crd.longitude)
      window.localStorage.setItem('Lati', crd.latitude)
      //window.localStotage.setItem('totalCartItems',0)
     
      let payload = {
        lang: crd.longitude,
        lat: crd.latitude
      }
      dispatch(restaurantList(payload))
     
    }, error, options);
    setOpen(false);
  }  

  function handleEnter(e) {
    e.target.style.background = "#F3F3F5";
  }

  function handleLeave(e) {
    e.target.style.background = "#ffffff";
  }

  //SELECTED PLACE LANG LAT PLACENAME - Variables are lang, lat,curr
  function handlePlace(e) {
    setName(e.target.value);   
    axios(config1)
      .then(function (response) {
        response.data.features.map((item) => {
          let temp1 = item.place_name.split(",");
          setPlace((place) => [
            ...place,
            {
              name: `${temp1[0]},${temp1[1]}`,
            },
          ]);
          setLang(item.center[0]);
          setLat(item.center[1]);
          window.localStorage.setItem('Lang', item.center[0])
          window.localStorage.setItem('Lati', item.center[1])
          window.localStorage.setItem('Place', `${temp1[0]},${temp1[1]}`)
          //window.localStotage.setItem('totalCartItems',0)
          let payload = {
            lang: lang,
            lat: lat
        }
          dispatch(restaurantList(payload))
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

useEffect(() => {
    handleCurrent()
}, [])
const restaurantData = useSelector(state => state.app.restaurantData)
//console.log("Modalcurrent", lang, lat, curr);
//console.log("Modalrestdata",restaurantData)

  return (
    <>
      <div className={classes.search}>
        <div
          style={{ color: "rgb(0, 210, 144)" }}
          className={classes.searchIcon}
        >
          <LocationOnIcon style={{outline:"none"}} />
        </div>
      </div>
      <Button
        onClick={handleClickOpen("paper")}  
        style={{outline:"none"}}      
      >
        <span style={{ marginLeft: "20px",overflow: "hidden",textOverflow: "ellipsis", maxHeight:"20px",whiteSpace:"nowrap",   textTransform: "none" ,maxWidth:"100px",minWidth:"130px"}}>{curr}</span>
        <div style={{ color: "rgb(0, 210, 144)" }}>
          <ExpandMoreOutlinedIcon style={{outline:"none"}}/>
        </div>
      </Button>
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
          Add your Location
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
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
            onChange={(e) => handlePlace(e)}
          />
          <Typography color="text.disabled" onClick={() => handleCurrent()}>
            {" "}
            <GpsFixedIcon style={{ color: "#00D290" }} /> Use Current Location
          </Typography>
          <hr />
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
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
                    onMouseEnter={(e) => handleEnter(e)}
                    onMouseLeave={(e) => handleLeave(e)}
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
