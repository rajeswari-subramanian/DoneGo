import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Grid } from '@material-ui/core';
import DataCards from "./DataCards";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      width:'100%',
      padding:'10px 30px 10px 30px',
      marginLeft:'20px'
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const classes = useStyles();

  return (
    
      <>
    <div className={classes.root} style={{background:'rgb(247, 253, 250)'}}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link style={{marginLeft:'400px',color:"rgb(0, 179, 122)",lineHeight:'16px',opacity:1,fontWeight:600,fontSize:12}} href="/" onClick={handleClick}>
          Home
        </Link>
        <Link style={{color:"rgb(0, 179, 122)",lineHeight:'16px',opacity:1,fontWeight:600,fontSize:12}} href="/getting-started/installation/" onClick={handleClick}>
          Bangalore
        </Link>
        <Typography style={{lineHeight:'16px',opacity:1,fontWeight:600,fontSize:12}} color="inherit">Food Delivery</Typography>
      </Breadcrumbs>
    </div>
   <Box style={{border:'none',width:'100%',height:'180px',background:'rgb(247, 253, 250)'}}>
       <div style={{display:'flex', flexDirection:'row'}}>

       <Box style={{border:'none', width:'88px', marginLeft:'400px', marginTop:'50px',height:'88px',borderRadius: '16px',textAlign:'center',padding:'5px',background:'rgba(0, 210, 144, 0.08)'}}>
           <img style={{height:'44px', width:'44px',alignContent:'center',marginTop:'15px'}} src="https://ik.imagekit.io/dunzo/icons/website/bluegreen/category/restaurants.png?tr=w-88,h-88,cm-pad_resize" alt="logo"/>

       </Box>
       <Box style={{border:'none', margin:'10px',width: '360px', marginTop:'50px',height:'88px', lineHeight:'normal',letterSpacing:'normal'}}>
           <p style={{fontSize:'28px', color:'black', letterSpacing:'normal',fontWeight:'700',lineHeight:'0'}}>Order from Restaurants</p>
           <p style={{fontSize:'18px',fontWeight:600,opacity:'0.6'}}>198 Restaurants</p>
          

       </Box>

       </div>

   </Box>
   <DataCards/>
  
    </>
   
  );
}
