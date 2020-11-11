import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Box, Button, Divider, Grid, Paper } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


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
    'aria-controls': `vertical-tabpanel-${index}`,
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
      background:'transparent',
      color:'black',
      height:'72px',
      position:'fixed',
      zIndex:11,
      width:'100%',
     


  },
  imageStyle : {
      height:'28px',
      width:'122px'
  },
  body : {
      border:'none',
      width:'100%',
      height:'auto',
      margin:'auto',
      marginTop:'4%',
      background:'rgb(240, 245, 247) none repeat scroll 0% 0%',
      overflow:'hidden',
      fontFamily:'Rubik' ,
     

  },
  orderCard: {
      
      maxWidth:'1024px',
      height:'80vh',
      margin:'auto',
      borderRadius:'5px',
      marginTop:'48px',
      marginBottom:'50px',
      fontFamily:'Rubik'
  },
  header: {
      height:'89px',
      background:'rgb(240, 245, 247) none repeat scroll 0% 0%',
      fontFamily:'Rubik'
      
  },
  root1: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 671,
    fontFamily:'Rubik'
  
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  paper1: {
    border:'none'
  },
  navStyle :{
    fontWeight:600,
    textAlign:"left",
    fontFamily:'Rubik',
    border:'none'
  },
  paper2: {
    border:'1px solid rgb(231, 232, 235)',
    minHeight:'108px',
    marginBottom:'18px',
    width:'400px',
    alignItems:'center',
    paddingTop:'35px',
    borderRadius:'5px'
   
  },
  
  title1: {
    flexGrow: 1,
    height:'auto'
  },
  paper3: {
    border:'1px solid rgb(231, 232, 235)',
    minHeight:'108px',
    marginBottom:'18px',
    width:'400px',
    alignItems:'center',
    borderRadius:'5px'
   
  },
  pic: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  paper4: {
    border:'1px solid rgb(231, 232, 235)',
    minHeight:'78px',
    marginBottom:'18px',
    width:'200px',
    alignItems:'center',
    paddingTop:'25px',
    borderRadius:'5px',
   
   
  },
  
}));

export default function ProjileDetails() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
      <>
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="fixed">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
           <img style={{marginLeft:'20%'}} className={classes.imageStyle} src="logo.png" alt="logo"/>
          </Typography>
          <IconButton style={{marginRight:'20%'}} color="inherit">
              <ShoppingCartOutlinedIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>

    {/* BODY */}

    <Box className={classes.body}>

      <Box className={classes.orderCard}>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item sm={12} xs={12}>
                <Paper style={{height:'85px'}} className={classes.paper1}>
                
                  <Toolbar>
                  
                    <Typography style={{padding:'5px'}} variant="h6" className={classes.title}>
                        <p style={{fontSize:'20px',fontWeight:600, lineHeight:'normal',fontFamily:'Rubik'}}>Harsha Khan</p>
                        <p style={{fontSize:'14px', fontWeight:'500', color:'rgb(159, 163, 175)',fontFamily:'Rubik'}}>harshakhan08@gmail.com</p>
                       
                    </Typography>
                    <button style={{fontWeight:600, fontFamily:'Rubik'}} type="button" class="btn btn-outline-success">Logout</button>
                  </Toolbar>
     
                </Paper>
              </Grid>
              
            </Grid>
          </div>
          <div className={classes.root1}>
              <Tabs
                style={{height:'100%', textAlign:'right'}}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab className={classes.navStyle} label="Order List" {...a11yProps(0)} />
                <Tab className={classes.navStyle} label="Addresses" {...a11yProps(1)} />
                <Tab className={classes.navStyle} label="Manage Payments" {...a11yProps(2)} />
                <Tab className={classes.navStyle} label="Dumgo Cash" {...a11yProps(3)} />
                <Tab className={classes.navStyle} label="Support" {...a11yProps(4)} />
                <Tab className={classes.navStyle} label="About" {...a11yProps(5)} />

              </Tabs>
              <TabPanel value={value} index={0}>
                <Grid container spacing={1}>
                  <Grid style ={{border:'none', width:"750px"}} item={12}>
                   
                      {/* <img 
                      style={{height:'161px',width:'286px', marginLeft:'65px',fontFamily:'Rubik'}} 
                      src ="https://ik.imagekit.io/dunzo/web-assets/images/delivery_bike-9ca8bf0483fbb3cf9af11fefb4d6272e.png?tr=w-572,h-322,cm-pad_resize" 
                      alt="image"/>
                      <p 
                        style={{textAlign:'center', fontWeight:600, color:'rgb(148, 149, 158)', fontSize:'16px', marginTop:'45px'}}>
                        You dont have any active orders. Place your first order now!
                      </p> */}


                  <Toolbar>
                    <Typography style={{padding:'5px'}} variant="h6" className={classes.title}>
                        <div class="container" style={{display:'flex'}}>
                          <FastfoodIcon fontSize="large" style={{ color:'rgb(0, 179, 122)' }}/>  
                          <p style={{fontSize:'17px',fontWeight:'800', lineHeight:'normal',fontFamily:'Rubik',marginLeft:'10px'}}>Resturents</p>
                          
                        </div>
                    </Typography>
                   <p style={{fontWeight:'600',fontSize:'17px'}}>Paid:<b style={{color:'rgb(0, 179, 122)'}}>₹220</b></p>
                  </Toolbar>
                  <Grid style ={{border:'none', width:"700px",margin:'auto'}} item={12}>
                  <Timeline style={{textAlign:'left',alignItems:'left', alignContent:'left'}}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent><h6 style={{fontSize:'12px', color:'rgb(159, 163, 175)'}}><b style={{color:'black', fontSize:'15px '}}>Meghna Foods </b>Joyti Nibas college rioad,</h6></TimelineContent>
                    </TimelineItem>
                
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot />
                      </TimelineSeparator>
                      <TimelineContent><h6 style={{fontSize:'12px', color:'rgb(159, 163, 175)'}}> <b style={{color:'black', fontSize:'15px '}}>HOME </b>34 Saibaba Nilia Mandir</h6></TimelineContent>
                    </TimelineItem>
                  </Timeline>
                  <p style={{fontSize:'12px', fontWeight:'600', color:'rgb(159, 163, 175)', fontFamily:'Rubik'}}>Meghna Special Briyai x 1</p>

                  </Grid>
                  </Grid>
                  
                  
                </Grid>
                <Divider/>
                <div class="container">
                  <div class="row">
                    <div style={{border:'none', paddingTop:'10px'}} class="col-12">
                    <Toolbar>
                  
                        <Typography style={{padding:'5px'}} variant="h6" className={classes.title}>
                          <div class="container" style={{display:'flex'}}>

                          <CheckCircleIcon style={{ color:'rgb(0, 179, 122)'}}/>
                            <p style={{fontSize:'16px',fontWeight:600, lineHeight:'normal',fontFamily:'Rubik', paddingLeft:'10px', color:'rgb(159, 163, 175)'}}>Completed</p>
                           
                          </div>
                          
                        </Typography>
                        <button style={{fontWeight:600, fontFamily:'Rubik', borderRadius:'20px'}} type="button" class="btn btn-outline-success">Track Order</button>
                    </Toolbar>
                      

                    </div>

                  </div>

                </div>

              <Divider/>
                
              </TabPanel>
              <TabPanel value={value} index={1}>
                  <div className={classes.root}>
                  <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <div className={classes.paper2}>
                      <p 
                      style={{textAlign:'center', color:'rgb(0, 179, 122)',fontSize:'16px', height:'18px',fontWeight:600,fontFamily:'Rubik',}}>
                        + Add new address
                      </p>

                    </div>
                
                  </Grid>
                  <Grid item xs={6}>
                    <div className={classes.paper3}>
                    <Toolbar style={{height:'10px'}}>
                      
                      <Typography style={{padding:'5px'}} variant="h6" className={classes.title}>
                        <div style={{display:'flex',flexDirection:'row'}} className={classes.pic}>
                          <IconButton>
                            <HomeIcon  fontSize="small"/>

                          </IconButton>
                          <p style={{fontSize:'14px',fontWeight:600,fontFamily:'Rubik', paddingTop:'15px'}}>Home</p>
                        </div>
                        
                        
                      </Typography>
                      <IconButton fontSize="small" style={{color:'rgb(0, 179, 122)'}}>
                          <EditIcon fontSize="small"/>
                      
                      </IconButton>
                      <IconButton fontSize="small" color="rgb(231, 232, 235)">
                        <DeleteIcon  fontSize="small"/> 
                      </IconButton>
                              
                    </Toolbar>
                    </div>
                
                  </Grid>
                  </Grid>
                  </div>
              </TabPanel>
              <TabPanel value={value} index={2}>

              <div className={classes.root}>
                
                  <Grid container spacing={3}>

                  <Grid item xs={6}>
                        <p style={{fontWeight:700, fontFamily:'Rubik',fontSize:'16px'}}>Wallets</p>
                        <div className={classes.paper4}>
                        
                          <p 
                          style={{textAlign:'center', color:'rgb(0, 179, 122)',fontSize:'16px', height:'18px',fontWeight:600,fontFamily:'Rubik',}}>
                            + Add new card
                          </p>

                        </div>
                    
                      </Grid>
                  <Grid item xs={6}>
                  
                        
                    
                
                  </Grid>
                    
                      <Grid item xs={6}>
                        <p style={{fontWeight:700, fontFamily:'Rubik',fontSize:'16px'}}>Saved Cards</p>
                        <div className={classes.paper2}>
                        
                          <p 
                          style={{textAlign:'center', color:'rgb(0, 179, 122)',fontSize:'16px', height:'18px',fontWeight:600,fontFamily:'Rubik',}}>
                            + Add new card
                          </p>

                        </div>
                    
                      </Grid>
                  <Grid item xs={6}>
                    
                
                  </Grid>

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