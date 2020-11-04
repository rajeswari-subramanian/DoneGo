import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { Grid } from '@material-ui/core'
import { Box } from "@material-ui/core";
import { BodyCard, SmallCards, TopPickCards, Modal } from './components'
import { getRestaurent } from '../../redux/actions/getRestaurentAction'

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
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 2,
    },
    color: {
        backgroundColor: "white",
        color: "black",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    MobilePic: {
        width: '176px',
        boxSizing: 'content-box',
        height: '240px',
        marginLeft: '32%',
        backgroundImage: `url('https://ik.imagekit.io/dunzo/web-assets/images/dunzo-app-be5ce8c58d3ad0b183757f34179879b4.png?tr=w-352,h-480,cm-pad_resize)`
    },
}));

export default function MenuAppBar() {

    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        dispatch(getRestaurent())
    }, [])

    const resturantData = useSelector(state => state.getRestaurent.restaurentsData)
    console.log(resturantData)


    return (
        <>
            <AppBar variant="outlined" style={{ border: 'none', zIndex: '999', transition: '0.3s linear' }} className={classes.color} position="fixed">
                <Toolbar>
                    <IconButton style={{ marginLeft: "100px", fontWeight: '1000', fontSize: '27px' }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        DoneGo
                    </IconButton>
                    <Modal />

                    <Typography variant="h6" className={classes.title}>

                    </Typography>
                    {/* <div style={{}}> */}
                    <Button style={{ marginLeft: "2.5em", textTransform: "none", fontFamily: 'Ubuntu' }} color="inherit">Donego for Partners </Button>
                    <Button style={{ fontFamily: "Ubuntu", textTransform: "none" }} > Donego for Business</Button>
                    <IconButton color="black" aria-label="add to shopping cart">
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                    <Button style={{ marginRight: '100px', textTransform: "none" }} className={classes.ButtonBackground} color="inherit">Sign In</Button>
                    {/* </div> */}
                </Toolbar>
            </AppBar>


            // Fist card
            <Grid container direction="column" style={{ paddingTop: '90px', background: ' rgb(247, 253, 250)', fontFamily: `Raleway', sans-serif` }}>
                <Grid item style={{ marginLeft: '135px', fontSize: '28px', fontWeight: '100', marginBottom: '16px', fontFamily: 'Ubuntu' }}> Instant delivery at your doorstep</Grid>
                <Grid item container spacing={2} justify="space-between" alignItems="center" style={{ margin: "auto", width: "1030px" }}>
                    <Grid item xs={12} sm={3}>
                        <BodyCard
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_grocery_secondary2_1602495207383.png"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <BodyCard
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1598257809885.png"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <BodyCard
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_food_secondary2_1598017573106.png"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <BodyCard
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1598016020169.png"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column" style={{ background: ' rgb(247, 253, 250)', }}>
                <Grid item container spacing={2} justify="space-between" alignItems="center" style={{ margin: "auto", width: "1030px" }}>
                    <Grid item xs={12} sm={2}>
                        <SmallCards
                            text="Meat and Fish"
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_meat_tertiary_grid_1597822164502.png"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <SmallCards
                            text="Pet Supplies"
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_pets_tertiary_grid_1597822149867.png"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <SmallCards
                            text="Paan Shop"
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/paan_grid_1597823647322.png"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <SmallCards
                            text="Gift and Lifestyle"
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_gifts_tertiary_grid_1597821878795.png"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <SmallCards
                            text="Medicines"
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_medical_tertiary_grid_1597821896720.png"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <SmallCards
                            text="Health and wellness"
                            imgSrc="https://ik.imagekit.io/dunzo/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_wellness_tertiary_grid_1597821915084.png"
                        />
                    </Grid>
                </Grid>
                <br/><br/>
            </Grid>
            <Grid container direction="column" style={{ marginTop: '80px' }}>
                <Grid item style={{ marginLeft: '135px', fontSize: '28px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Ubuntu' }}>
                    Top picks for you
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Box style={{ backgroundColor: 'rgb(37, 211, 102)', width: '60px', height: '6px', marginTop: '10px', borderRadius: '25px', marginRight: '5px' }} />
                        <Box style={{ backgroundColor: 'rgb(37, 211, 102)', width: '17px', height: '6px', marginTop: '10px', borderRadius: '25px' }} />
                    </div>
                </Grid>
                <Grid item container justify="space-between" alignItems="center" style={{ padding: "0px", margin: "auto", width: "1060px" }}>
                    
                    <Grid item xs={12} sm={3}>
                        <TopPickCards
                        imgSrc="https://ik.imagekit.io/dunzo/web-assets/images/d4b.jpg?tr=w-488,h-326,cm-pad_resize" 
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TopPickCards
                            imgSrc="https://ik.imagekit.io/dunzo/web-assets/images/grocery.jpg?tr=w-488,h-326,cm-pad_resize"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TopPickCards
                            imgSrc="https://ik.imagekit.io/dunzo/web-assets/images/restaurants.jpg?tr=w-488,h-326,cm-pad_resize"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TopPickCards
                            imgSrc="https://ik.imagekit.io/dunzo/web-assets/images/send-packages.jpg?tr=w-488,h-326,cm-pad_resize"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Box style={{
                width: "100%",
                backgroundImage: 'linear-gradient(-180deg, rgb(255, 255, 255), rgb(255, 255, 255) 30%, rgb(240, 242, 247) 15%, rgb(240, 242, 247) 85%)',
                height: 'auto', display: 'flex', boxSizing: 'border-box',
                marginTop: '48px',
            }}>
                <Box className={classes.MobilePic}>
                    <img style={{ height: '270px' }} src="https://ik.imagekit.io/dunzo/web-assets/images/dunzo-app-be5ce8c58d3ad0b183757f34179879b4.png?tr=w-352,h-480,cm-pad_resize" alt="mobile" />
                </Box>

                <div style={{ marginTop: '100px', fontFamily: 'cursive', fontSize: '25px', fontWeight: 'bold', marginLeft: '50px' }} >
                    <p>
                        All this from the convenience of your phone.
                    </p>
                    <p>
                        Download the Dunzo mobile app.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: '5px', marginTop: 0 }}>
                        <img src="https://ik.imagekit.io/dunzo/web-assets/images/playstore-fe053d8036d653fed3955cd2c2a1e7e2.svg" alt="mobile" />
                        <img src="https://ik.imagekit.io/dunzo/web-assets/images/appstore-43cd8d3a00a6ed32c485951de9b3af63.svg" alt="mobile" />
                    </div>
                </div>
            </Box>
            {/* <Box style={{
                backgroundColor: "rgb(23, 30, 48)",
                minWidth:'720px',
                height: 'auto'
            }}>
                <Box style={{
                    border: 'none',
                    width: '1150px',
                    height: '140px',
                    marginLeft: '19%',
                    marginTop: '0px',
                    paddingTop:'20px',
                   marginDown:'30px'


                }}>
                    <p style={{ fontSize: '16px', fontFamily: 'Rubik', color: "white", fontWeight: '600', textAlign: 'left' }}>
                        You can’t stop time, but you can save it!
                    </p>
                    <p style={{color:'rgb(183, 186, 195)', fontFamily:'Rubik', textAlign:'left',fontSize:'14px', fontWeight:'600', letterSpacing:'normal', lineHeight:'18px'}}>
                        Living in the city, there is never enough time to shop for groceries, pick-up supplies, 
                        grab food and wade through traffic on the way back home. How about we take care of all of the above for you? 
                        What if we can give you all that time back? Send packages across the city and get everything from food, groceries, medicines and pet supplies delivered right to your doorstep. From any store to your door, just make a list and we’ll make it disappear. Just Dunzo It!

                    </p>
                    <br/>
                    <br/>
                    
                    <hr/>

                </Box>
               

                <Box style={{border: 'none',
                width:'1150px',
                marginTop:'100px',
                marginLeft:'19%',
                height:'400px',


            
            }}>
                <div style={{display: 'flex', flexDirection:'row'}}>

                <Box style={{
                    border:'none',
                    height: '80px',
                    width:'80px'
                }}>
                    <img style={{height:'70px', width:'70px', cursor:'pointer'}} src ="https://ik.imagekit.io/dunzo/web-assets/images/logo-footer-2530fc0589c6b1f7c5e76c618e230276.png?tr=w-140,h-140,cm-pad_resize" alt="logo"/>

                </Box>
                <Box style={{border:'none',
            width:'210px',
            height: 'auto',
            marginLeft:'90px'}}>
                <p style={{color:'white', textAlign:'left', fontSize:'16px', color:'rgb(102, 115, 242)', fontWeight:'700',letterSpacing:'0.2px',fontFamily:'Rubik'}}>DUNGO</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>About</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Jobs</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Contact</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Term and Conditions</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Privacy and Policy</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Dungo for partner</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Dungo for business</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Grow with Google</p>


                </Box>
                <Box style={{border:'none',
            width:'210px',
            height: 'auto',
            marginLeft:'20px'}}>
                <p style={{color:'white', textAlign:'left', fontSize:'16px', color:'rgb(102, 115, 242)', fontWeight:'700',letterSpacing:'0.2px',fontFamily:'Rubik'}}>SERVICEABLE CITIES</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Bangalore</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Pune</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Gurgaon</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Hydrabad</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>New Delhi</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Chennai</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Jaipur</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Mumbai</p>


                </Box>
                <Box style={{border:'none',
            width:'210px',
            height: 'auto',
            marginLeft:'20px'}}>
                <p style={{color:'white', textAlign:'left', fontSize:'16px', color:'rgb(102, 115, 242)', fontWeight:'700',letterSpacing:'0.2px',fontFamily:'Rubik'}}>GET IN TOUCH</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Email</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Twitter</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>Facebook</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'}}>instagram</p>
                <p style={{color:'white', textAlign:'left',style:'none',cursor:'pointer',fontWeight:'500',fontSize:'14px', textDecoration:'none'    }}>Linkdin</p>
               
                </Box>
                <Box style={{border:'none',
            width:'274px',
            height: '200px',
            marginLeft:'20px'}}>
                <img style={{height:'140px', width:'260px'}} src="https://ik.imagekit.io/dunzo/web-assets/images/scooter-b23bc83b7ede14d87083594908ec3101.png?tr=w-520,h-280,cm-pad_resize" alt="logo"/>


                </Box>
                </div>

                </Box>
            </Box> */}
        </>
    );
}