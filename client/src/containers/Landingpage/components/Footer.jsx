import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid,Paper} from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
    grid: {
        width:"100%",
        margin:'0px',
        background:"rgb(23, 30, 48)",
        height:'300px',
        paddingTop:'64px',
        paddingBottom:'64px'
    },
    paper1:{
        padding:theme.spacing(2),
        textAlign:'left',
        height: 'auto',
        background:'rgb(23, 30, 48)',
        maxWidth:'1100px',
        marginLeft:'20%'
        
    },
    paper2:{
        marginTop:'5px',
        border:'1px solid red',
        height:'auto',
        width:'65%'

    },
    card1:{
        border:'1px solid red',
        background:'rgb(23, 30, 48)',
        textAlign:'left',
        
    }
}));

function Footer(){
    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.grid}>
            <Grid item xs={12}>
                <Paper className={classes.paper1}>
                   <p style={{color:'white',fontWeight: '600',fontFamily: 'Rubik'}}>You can’t stop time, but you can save it!</p>
                   <p style={{color:'rgb(183, 186, 195)',fontFamily:'Rubik', textAlign:'left',fontSize:'14px', fontWeight:'600', letterSpacing:'normal', lineHeight:'18px'}}>Living in the city, there is never enough time to shop for groceries, pick-up supplies,
                        grab food and wade through traffic on the way back home. 
                        How about we take care of all of the above for you? 
                        What if we can give you all that time back? Send packages across the city and get everything from food, 
                        groceries,medicines and pet supplies delivered right to your doorstep. From any store to your door, 
                       just make a list and we’ll make it disappear. Just Dunzo It!</p>
                </Paper>
                <Paper className={classes.paper2} style={{marginLeft:'20%'}}>
                    <Grid container spacing={2} className={classes.grid1} >

                        <Grid item md={2}>
                            <Paper className={classes.card1}>

                            </Paper>
                        </Grid>
                        <Grid item md={2}>
                            <Paper className={classes.card1}>1</Paper>
                        </Grid>
                        <Grid item md={2}>
                            <Paper className={classes.card1}>1</Paper>
                        </Grid>
                        <Grid item md={2}>
                            <Paper className={classes.card1}>1</Paper>
                        </Grid>
                        <Grid item md={2}>
                            <Paper className={classes.card1}>1</Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        // <Grid container spacing ={2} className={classes.grid}>
        //     <Grid item xs={12} >
        //         <Paper className={classes.paper}>1</Paper>
        //     </Grid>
        //     <Grid item xs={6}>
        //         <Paper className={classes.paper}></Paper>
        //     </Grid>
        //     <Grid item xs={6}>
        //         <Paper className={classes.paper}>2</Paper>
        //     </Grid> 
        // </Grid>
    )
}
export default Footer;