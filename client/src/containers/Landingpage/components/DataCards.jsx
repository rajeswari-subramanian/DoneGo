import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import data from  "./ResturantList"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    transition: 'box-shadow .3s',
  },
  // paper:hover : {
  //   boxShadow:'0 0 11px rgba(33,33,33,.2)',
  // },
  image: {
    width: 128,
    height: 128,
    
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius:16
    
  },
}));

export default function DataCards() {
  const classes = useStyles();

  return (
    <>
   

    {data.map((items) =>(
    <Grid container direction="column" style={{fontFamily: `Rubik` }}>
                  
                    <Grid item container>
                        <Grid item xs={0} sm={2} />
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={3} >

                                <Grid item xs={12} sm={6} >
                                <div className={classes.root} >
                                      <Paper className={classes.paper} >
                                        <Grid container spacing={3} >
                                          <Grid item>
                                            <ButtonBase className={classes.image}>
                                              <img className={classes.img} alt="complex" src={items.avatar} />
                                            </ButtonBase>
                                          </Grid>
                                          <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                              <Grid item xs>
                                                <Typography style={{fontSize:'20px',lineHeight:'24px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',fontWeight:600}} gutterBottom variant="subtitle1">
                                                 {items.restaurentName}
                                                </Typography>
                                                <Typography style={{fontSize:'18px',color:'rgb(87, 94, 115)',opacity:0.8,fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'n'}} variant="body2" gutterBottom>
                                                  {items.foodType}
                                                </Typography>
                                                <Typography style={{fontSize:'18px',color:'rgb(87, 94, 115)',opacity:0.8,fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'n'}} variant="body2" color="textSecondary">
                                                  {items.place}
                                                </Typography>
                                              </Grid>
                                            
                                            </Grid>
                                           
                                          </Grid>
                                        </Grid>
                                      </Paper>
                                    </div>
                                   
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                <div className={classes.root} >
                                      <Paper className={classes.paper} >
                                        <Grid container spacing={3} >
                                          <Grid item>
                                            <ButtonBase className={classes.image}>
                                              <img className={classes.img} alt="complex" src={items.avatar} />
                                            </ButtonBase>
                                          </Grid>
                                          <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                              <Grid item xs>
                                                <Typography style={{fontSize:'20px',lineHeight:'24px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',fontWeight:600}} gutterBottom variant="subtitle1">
                                                 {items.restaurentName}
                                                </Typography>
                                                <Typography style={{fontSize:'18px',color:'rgb(87, 94, 115)',opacity:0.8,fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'n'}} variant="body2" gutterBottom>
                                                  {items.foodType}
                                                </Typography>
                                                <Typography style={{fontSize:'18px',color:'rgb(87, 94, 115)',opacity:0.8,fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'n'}} variant="body2" color="textSecondary">
                                                  {items.place}
                                                </Typography>
                                              </Grid>
                                            
                                            </Grid>
                                           
                                          </Grid>
                                        </Grid>
                                      </Paper>
                                    </div>
                                   
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={0} sm={2} />
                    </Grid>
                </Grid>
    ))}

    </>

  );
}
