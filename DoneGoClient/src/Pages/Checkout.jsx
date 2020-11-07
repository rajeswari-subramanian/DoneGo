import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from '@material-ui/core/StepContent';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    marginTop:"100px",
    width: "70%",
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
}));

// style={{border:"2px solid blue"}}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [<Paper elevation={3} className={classes.paper1}><AddressForm /></Paper>,<Paper  elevation={3} className={classes.paper1}> <PaymentForm /></Paper>];
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div style={{background:"#F0F5F7"}}>     
      <div className={classes.root}>
        <Grid container spacing={1}  justify="center"
  alignItems="center" style={{background:"#F0F5F7"}} >
          <Grid item xs={8} >           
              <main className={classes.layout} >
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
                    {activeStep === steps.length ? (
                      <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                          Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                          Your order number is #2001539. We have emailed your
                          order confirmation, and will send you an update when
                          your order has shipped.
                        </Typography>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {/* {getStepContent(activeStep)} */}
                        <div className={classes.buttons}>
                          {activeStep !== 0 && (
                            <Button
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                          )}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Place order"
                              : "Next"}
                          </Button>
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                </Paper>
              </main>          
          </Grid>
          <Grid item xs={4} >          
              <Review />          
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
