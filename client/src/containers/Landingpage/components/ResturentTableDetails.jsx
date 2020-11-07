import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';  
import CardContent from '@material-ui/core/CardContent';
import { Box, Divider, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  body: {
      width:'60%',
      height:'80px',
      boxShadow: '5px 10px 18px #888888',
      border:'1px solid black',
      textAlign:'center',
      marginLeft:'20%',
      marginTop:'2%'
      
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function TableCards() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} >
      <CardContent className={classes.body} style={{height:'800px'}}>
          <Box>
          <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end" style={{border:'1px solid black', borderRadius:'16px', width:'480px',alignContent:'center',marginLeft:'25%',height:'48px'}}>
                <Grid item>
                  <SearchIcon />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Search for an item" />
                </Grid>
              </Grid>
          </div>
          </Box>
          <Divider/>
          <div className={classes.root1}>
            <Grid container spacing={2}>
              <Grid item sm={1} style={{border:'1px solid black',height:'100%',}}>
                <p>hi</p>
                <p>ggdff</p>
                <p>cvscjh</p>
              </Grid>
              <Grid item sm={7}>
                <Grid item sm={12}>
                  Hii
                </Grid>
              </Grid>
              <Grid item sm={4}>
                <p style={{fontWeight:600, fontSize:'20px', textAlign:'left', marginLeft:'14%', color:'rgb(23, 30, 48)'}}> Your Cart</p>
                <img  style={{height:'205px', width:'205px'}} src="https://ik.imagekit.io/dunzo/web-assets/images/no-items-in-cart-7e84056f44993b68d14184f9b2992af7.png?tr=w-410,cm-pad_resize" alt="image"></img>
                <p style={{textAlign:'center', opacity:'0.5',fontSize:'16px',fontWeight:600, color:'rgb(23, 30, 48)'}}>Your cart is empty</p>
                <p style={{textAlign:'center', opacity:'0.5',fontSize:'16px',fontWeight:600, color:'rgb(23, 30, 48)'}}>Add item to get started</p>
              </Grid>
            </Grid>

          </div>
      </CardContent>
      
    </Card>
  );
}