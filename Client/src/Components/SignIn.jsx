import React from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from '@material-ui/core/DialogTitle';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBox from './InputBox'
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { useHistory, Redirect, Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import InputAdornment from '@material-ui/core/InputAdornment';

import { loginSuccess } from '../Redux/User/action'

var intervalId = 0
const Wrapper = styled.div`
	position:relative;
	padding: 60px 5px 60px 5px;
	background-color:#ffffff;
	border-radius:5px;
	> h2{
		text-align:center
	}
	> div > input{
		background-color: 'white';
		color:#000;
		border-radius:5px;
		border:  ${(props) => !props.chgClr ? '1px solid black' : '1px solid red'};
		
	}
`;

const Showvalue = styled.div`
	font-size: 20px;
	position:absolute;
	left: 10vw;
	color: black;
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ButtonBackground: {
    backgroundColor: 'rgb(0, 210, 144)',
    borderRadius: '20px',
    padding: '8px 20px',
    fontWeight: 'bold',
    fontSize: '12px',
    cursor: 'pointer',
    color: 'white',
  },
}));

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch()
  const [mobile, setMobile] = React.useState("");
  const [isMobileValid, setIsMobileValid] = React.useState(false)
  const [isOtpSent, setIsOtpSent] = React.useState(false)
  const [isMobileDisabled, setMobileDisabled] = React.useState(undefined)
  const [pinValue, setPinValue] = React.useState('')
  const [full, setFull] = React.useState(undefined)
  const [timeLeft, setTimeLeft] = React.useState(30)
  const [isVerifyButton, setIsVerifyButton] = React.useState(false)
  const isAuth = useSelector((state) => state.user.isAuth);

  React.useEffect(() => {
    if (isOtpSent) {
      if (!timeLeft) return;
      intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }

  }, [timeLeft, isOtpSent]);


  const handleMobileChange = (e) => {
    setMobile(e.target.value)
    if (e.target.value.toString().length === 10) {
      if (Number(e.target.value.toString()[0]) > 5) {
        setIsMobileValid(true)
      }
      else {
        setIsMobileValid(false)
      }
    }
    else {
      setIsMobileValid(false)
    }
  }

  const handleSentOtp = () => {
    //API call for sent OTP
    axios.get('http://localhost:5000/user/loginOtp', {
      params: {
        mobile: mobile
      }
    })
      .then(res => {
        if (res.data.status === 'pending') {
          setIsOtpSent(true)
          setMobileDisabled(true)
        }
        console.log(res.data)
      })
  }

  const handleEditNumber = () => {
    setMobileDisabled(false)
    setIsOtpSent(false)
    setIsVerifyButton(false)
    setTimeLeft(30)
  }
  const handleResendOtp = () => {
    //API call for sent OTP
    axios.get('http://localhost:5000/user/loginOtp', {
      params: {
        mobile: mobile
      }
    })
      .then(res => {
        if (res.data.status === 'pending') {
          setIsOtpSent(true)
          setTimeLeft(30)
        }
        console.log(res.data)
      })
  }

  const handleOtpChange = (value, inpLen) => {
    setPinValue(value)
    setFull(value.split("").length === inpLen ? true : false)
    if (value.split("").length === 6) {
      // API call for Verify OTP
      setIsVerifyButton(true)
      setFull(false)
      axios.get('http://localhost:5000/user/verify', {
        params: {
          mobile: mobile,
          code: value
        }
      })
        .then(res => {
          if (res.data.message === 'Wrong OTP, Please try again') {
            setFull(true)
          }
          else {
            window.localStorage.setItem('token', res.data.accessToken)
            window.localStorage.setItem('userId', res.data.userToken.id)// mongoid
            window.localStorage.setItem('mobileNo', res.data.userToken.mobile)
            setFull(false)
            handleClose()
            //alert(res.data.message)
            dispatch(loginSuccess())
            console.log("verify", res.data)
          }
        })
    }
    else {
      setFull(false)
      setIsVerifyButton(false)
    }
  }

  const handleVerifyOtp = () => {
    // API call for Verify OTP
    axios.get('http://localhost:5000/user/verify', {
      params: {
        mobile: mobile,
        code: pinValue
      }
    })
      .then(res => {
        if (res.data.message === 'Wrong OTP, Please try again') {
          setFull(true)
        }
        else {
          window.localStorage.setItem('token', res.data.accessToken)
          setFull(false)
          handleClose()
          //alert(res.data.message)
          dispatch(loginSuccess())
          console.log(res.data)
        }
      })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
    setMobile('')
    setTimeLeft(30)
    setIsOtpSent(false)
    setMobileDisabled(undefined)
    setIsVerifyButton(false)
    setPinValue('')
  };

  return (
    <>
      {!isAuth ?
        <Button
          className={classes.ButtonBackground}
          color="inherit"
          onClick={handleClickOpen}
        >
          Sign In
          </Button>
        : <Link to="/order/profile" ><IconButton style={{ color: "rgb(0, 210, 144)", backgroundColor: "white", padding: "0px" }} aria-label="add to shopping cart"  >
          <AccountCircleIcon fontSize="large" />
        </IconButton></Link>}

      {/* <Button style={{ marginRight: '100px', textTransform: "none" }} className={classes.ButtonBackground} color="inherit" onClick={handleClickOpen}>
        Sign In</Button> */}
      <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth
        maxWidth="xs"  >
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>Signin/Signup</DialogTitle>
        <DialogContent style={{ position: "relative" }}>
          <DialogContentText style={{ textAlign: "center" }}>
            Your 10 digit mobile number<span style={{ color: "red" }}>*</span>
          </DialogContentText>
          <TextField
            autoFocus
            id="number"
            type="number"
            fullWidth
            maxWidth="md"
            value={mobile}
            disabled={isMobileDisabled}
            onChange={handleMobileChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
            }}
            onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
          />

          {
            !isMobileValid ?
              <Button disabled color="primary" style={{ color: "white", background: "#00D290", borderRadius: "30px", position: "absolute", left: "320px", padding: "1px" }}>
                Send OTP
          </Button>
              :
              !isOtpSent ?
                <Button onClick={handleSentOtp} color="primary" style={{ color: "white", background: "#00D290", borderRadius: "30px", position: "absolute", left: "320px", padding: "1px" }}>
                  Send OTP
            </Button>
                :
                <Button onClick={handleEditNumber} color="primary" style={{ color: "white", background: "#00D290", borderRadius: "30px", position: "absolute", left: "320px", padding: "1px" }}>
                  Edit
          </Button>
          }
          {
            isOtpSent ?
              <div>

                <Wrapper chgClr={full} style={{ textAlign: "center" }}>
                  <p>Please enter OTP</p>
                  <InputBox boxes={6} operation={handleOtpChange} />
                  {
                    full ? <div style={{ color: 'red' }}>Code is not Valid</div> : null
                  }
                </Wrapper>
                {
                  timeLeft === 0 ? <h6 style={{ color: "#00D290", cursor: 'pointer', textAlign: "center" }} onClick={handleResendOtp}>Resend</h6> : <h6 style={{ color: "#828282", textAlign: "center" }}>Resend OTP in {timeLeft}s</h6>
                }
                {
                  isVerifyButton ?
                    <Button onClick={handleVerifyOtp} style={{ background: "#00D290", color: "white", borderRadius: "30px", marginLeft: "120px", padding: "1px" }}>
                      Verify and continue
                  </Button>
                    :
                    <Button disabled color="primary" style={{ background: "#D4D6DB", borderRadius: "30px", marginLeft: "120px", padding: "1p" }}>
                      Verify and continue
                  </Button>
                }
              </div>
              :
              null
          }
        </DialogContent>
        <DialogActions
          style={{ position: "absolute", left: "350px" }}
        >
          <Button onClick={handleClose} color="black">
            X
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}