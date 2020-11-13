import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


const products = [
  { name: 'Product 1', desc: 'A nice thing', price: 'Rs: 499' }, 
];

const useStyles = makeStyles((theme) => ({
    paper1: {       
        width:"100%",
        marginTop:"100px",
        padding: theme.spacing(2),
        textAlign: "center",  
        color: theme.palette.text.secondary,
      },
  listItem: {
    padding: theme.spacing(1.8, 1),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(0),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (<>
    <Paper elevation={3} className={classes.paper1}>
      <Typography variant="h6" gutterBottom>
        Your Cart (3 Items)
      </Typography>
      <List >
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))} </List>
       </Paper>
        <Paper elevation={3} style={{marginTop:"20px",padding:"5px"}}>
          <p>Any instructions for the delivery partner?</p>
        </Paper>
       <Paper elevation={3} style={{marginTop:"20px"}}>
      <Typography variant="h6" gutterBottom>
        Invoice
      </Typography>
     <Grid container style={{padding:"3px",minHeight:"100px"}}>     
       
       <Grid item container xs={12} style={{borderBottom:"1px solid gray"}} >
       <Grid item xs={6}><ListItemText secondary="Item total" /></Grid>
       <Grid item xs={6}><Typography variant="body2">Rs 400</Typography></Grid>
       </Grid>
       <Grid item container xs={12} style={{borderBottom:"1px solid gray"}}>
       <Grid item xs={6}><ListItemText secondary="Tax" /></Grid>
       <Grid item xs={6}> <Typography variant="body2">Rs 20</Typography></Grid>
       </Grid>
       <Grid item container xs={12} style={{borderBottom:"1px solid gray"}}>
       <Grid item xs={6}> <ListItemText secondary="Packing" /></Grid>
       <Grid item xs={6}>  <Typography variant="body2">Rs 10</Typography></Grid>
       </Grid>
       <Grid item container xs={12} style={{borderBottom:"1px solid gray"}}>
       <Grid item xs={6}>  <ListItemText secondary="Partnet delivery fee" /></Grid>
       <Grid item xs={6}> <Typography variant="body2">Rs 60</Typography></Grid>
       </Grid>
       <Grid item container xs={12} >
       <Grid item xs={6}> <ListItemText primary="To pay" /></Grid>
       <Grid item xs={6}> <Typography variant="body2">Rs 499</Typography></Grid>
       </Grid>
     </Grid>       
      </Paper></>
  );
}