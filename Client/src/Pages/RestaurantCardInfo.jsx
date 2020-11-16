import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory, Redirect, Link } from 'react-router-dom'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useSelector, useDispatch } from "react-redux";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { selectRetaurant } from '../Redux/Restaurant/action'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"75%",
    margin:"auto",    
  },
  paper: {
    padding: theme.spacing(1),   
    margin: "auto",
    width:"500px",
       
  },  
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 16,
  }, 
}));

export default function RestaurantCardInfo() {
  const classes = useStyles();
  const history = useHistory()
  const restaurantData = useSelector((state) => state.app.restaurantData);
  //console.log("rescard",restaurantData)
  const dispatch = useDispatch()
  const handleRestaurantChange = (item) =>{
    dispatch(selectRetaurant(item))
    history.push(`/order/${item.restaurentName}`)
  }

  return (
    <>   
      <div className={classes.root}>
      <Grid container spacing={2} justify="center" alignItems="center"  style={{ fontFamily: "sans-serif" }}>     
        {restaurantData.map((items) => (
            <Grid onClick={() => handleRestaurantChange(items)} style={{cursor:'pointer'}} item xs={12} sm={12} md={6} lg={6} xl={6} key={items.restaurentName} >          
              <Paper className={classes.paper} style={{margin:"auto",}}  elevation={1}  >
                <Grid container item spacing={2} >
                  <Grid item>
                    <ButtonBase className={classes.image} style={{ outline:"none"}}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src={items.avatar}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs style={{textAlign:"left",paddingLeft:"20px"}}>
                        <Typography
                          style={{
                            fontSize: "20px",
                            lineHeight: "24px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            fontWeight: 600,                            
                          }}
                          gutterBottom
                          variant="subtitle1"
                        >
                          {items.restaurentName}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "18px",
                            color: "rgb(87, 94, 115)",
                            opacity: 0.8,
                            fontWeight: 500,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "n",
                          }}
                          variant="body2"
                          gutterBottom
                        >
                          {items.foodType}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "18px",
                            color: "rgb(87, 94, 115)",
                            opacity: 0.8,
                            fontWeight: 500,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "n",
                          }}
                          variant="body2"
                          color="textSecondary"
                        >
                         {items.distance}Km {items.place}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "18px",
                            color: "rgb(87, 94, 115)",
                            opacity: 0.8,
                            fontWeight: 500,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "n",
                          }}
                          variant="body2"
                          color="textSecondary"
                        >
                        <AccessTimeIcon />{items.deliveryTime}
                        </Typography>                        
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>          
        ))}
      </Grid> </div>
    </>
   
  );
}
