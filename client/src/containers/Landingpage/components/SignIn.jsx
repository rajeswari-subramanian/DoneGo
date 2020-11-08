import React from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBox from './InputBox'
import styled from "styled-components";

var intervalId = 0
const Wrapper = styled.div`
	position:relative;
	padding: 25px 25px 100px 25px;
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
`


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
  const [mobile, setMobile] = React.useState("");
  const [isMobileValid, setIsMobileValid] = React.useState(false)
  const [isOtpSent, setIsOtpSent] = React.useState(false)
  const [isMobileDisabled, setMobileDisabled] = React.useState(undefined)
  const [pinValue, setPinValue] = React.useState('')
  const [full, setFull] = React.useState(undefined)
  const [timeLeft, setTimeLeft] = React.useState(30)
  const [isVerifyButton, setIsVerifyButton] = React.useState(false)


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
            setFull(false)
            handleClose()
            alert(res.data.message)
            console.log(res.data)
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
          alert(res.data.message)
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
      <Button style={{ marginRight: '100px', textTransform: "none" }} className={classes.ButtonBackground} color="inherit" onClick={handleClickOpen}>
        Sign In</Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="number"
            type="number"
            fullWidth
            value={mobile}
            disabled={isMobileDisabled}
            onChange={handleMobileChange}
            onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
          />
        </DialogContent>
        {
          !isMobileValid ?
            <Button disabled color="primary">
              Send OTP
          </Button>

            :
            !isOtpSent ?
              <Button onClick={handleSentOtp} color="primary">
                Send OTP
            </Button>
              :
              <Button onClick={handleEditNumber} color="primary">
                Edit Number
          </Button>
        }
        {
          isOtpSent ?
            <div>
              {
                timeLeft === 0 ? <h5 style={{ color: "green", cursor: 'pointer' }} onClick={handleResendOtp}>Resend OTP</h5> : <h5 style={{ color: "#828282" }}>Resend OTP in {timeLeft}s</h5>
              }
              <Wrapper chgClr={full}>
                <InputBox boxes={6} operation={handleOtpChange} />
              </Wrapper>
              {
                full ? <p style={{color:'red'}}>Code is not Valid</p> : null
              }
              {
                isVerifyButton ?
                  <Button onClick={handleVerifyOtp} color="primary">
                    Verify and Submit
                  </Button>
                  :
                  <Button disabled color="primary">
                    Verify and Submit
                  </Button>
              }
            </div>
            :
            null
        }
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
      </Dialog>

    </>
  );
}