import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Grid } from '@material-ui/core';
import DataCards from "./DataCards";
import TableCards from './ResturentTableDetails';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      width:'100%',
      padding:'10px 30px 10px 30px',
      marginLeft:'20px',
     
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ResturentDetailsHeader() {
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
        <Link style={{color:"rgb(0, 179, 122)",lineHeight:'16px',opacity:1,fontWeight:600,fontSize:12}} href="/getting-started/installation/" onClick={handleClick}>
          Richmond Town
        </Link>
        <Typography style={{lineHeight:'16px',opacity:1,fontWeight:600,fontSize:12}} color="inherit">Le Burger Seigneur</Typography>
      </Breadcrumbs>
    </div>
   <Box style={{border:'none',width:'100%',height:'100%',background:'rgb(247, 253, 250)', overflow:'hidden',pointerEvents:'auto', transform:'scleY(1)'}}>
       <div style={{display:'flex', flexDirection:'row'}}>

       <Box style={{border:'none', width:'160px', marginLeft:'400px', marginTop:'50px',height:'160px',borderRadius: '16px',textAlign:'center',padding:'5px',background:'rgba(0, 210, 144, 0.08)'}}>
           <img style={{width:'160px', height:'160px', borderRadius:6}} src="https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-320,h-320,cm-pad_resize_store_thumbnail/stores/dFNqSkR1VmhZbGY4UnhZMlhhYzZyUT09-1601552412558-store_image.jpg" alt="resturent"/>

       </Box>
       <Box style={{border:'none', margin:'10px',width: '360px', marginTop:'50px',height:'88px', lineHeight:'normal',letterSpacing:'normal'}}>
            <p style={{fontSize:'14px',fontWeight:500,opacity:'0.6'}}>198 Restaurants</p>
            <p style={{fontSize:'28px', color:'black', letterSpacing:'normal',fontWeight:'700',lineHeight:'0'}}>Le Burger Seigneur</p>
            <p style={{fontSize:'14px',fontWeight:500,opacity:'0.6'}}>198 Restaurants</p>
          

       </Box>

       </div>

   </Box>
   <TableCards/>
   
  
  
    </>
   
  );
}