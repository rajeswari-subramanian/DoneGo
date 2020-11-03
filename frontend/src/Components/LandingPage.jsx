import React from "react";
import LandingCard from './BodyCard'
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
import SmallCards from '../Components/SmallCards';
import TopPickCards from '../Components/TopPickCards'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    ButtonBackground: {
        backgroundColor: 'rgb(0, 210, 144)',
        borderRadius: '30px',
        padding: '8px 20px',
        fontWeight: 'bold',
        fontSize: '14px',
        cursor: 'pointer',
        color: 'white',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
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
            marginLeft: theme.spacing(3),
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
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();


    return (
        <>
            <AppBar variant="outlined" style={{ border: 'none' }} className={classes.color} position="static">
                <Toolbar>
                    <IconButton style={{ marginLeft: "280px", fontWeight: '1000', fontSize: '27px' }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        DoneGo
      </IconButton>
                    <div className={classes.search}>
                        <div style={{ color: "rgb(0, 210, 144)" }} className={classes.searchIcon}>
                            <LocationOnIcon />
                        </div>

                    </div>
                    <Button style={{ marginLeft: '20px', textTransform: 'none' }}>Set Location
          <ExpandMoreOutlinedIcon />
                    </Button>


                    <Typography variant="h6" className={classes.title}>

                    </Typography>
                    <Button style={{ textTransform: "none", fontFamily: 'Gilroy' }} color="inherit">Donego for Partners </Button>
                    <Button style={{ fontFamily: "Gilroy", textTransform: "none" }} > Donego for Business</Button>
                    <IconButton color="black" aria-label="add to shopping cart">
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                    <Button style={{ marginRight: '300px' }} className={classes.ButtonBackground} color="inherit">Sign In</Button>
                </Toolbar>
            </AppBar>

            <Grid container direction="column" style={{marginTop:'70px'}}>
                <Grid item style={{ marginLeft: '320px', fontSize: '36px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Gilroy' }}> Instant delivery at your doorstep</Grid>
                <Grid item container>
                    <Grid item xs={0} sm={2} />
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={3}>
                                <LandingCard
                                    imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_grocery_secondary2_1602495207383.png"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <LandingCard
                                    imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1598257809885.png"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <LandingCard
                                    imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_food_secondary2_1598017573106.png"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <LandingCard
                                    imgSrc="https://ik.imagekit.io/dunzo/tr:w-488,h-$h$_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1598016020169.png"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={0} sm={2} />
                </Grid>
            </Grid>
            <Grid container direction="column">
                <Grid item container>
                    <Grid item xs={0} sm={2} />
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={2}>

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
                    </Grid>
                    <Grid item xs={0} sm={2} />
                </Grid>
            </Grid>
            <Grid container direction="column" style={{marginTop:'80px'}}>
                <Grid item style={{ marginLeft: '320px', fontSize: '36px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Gilroy' }}> Top picks for you</Grid>
                <Grid item container>
                    <Grid item xs={0} sm={2} />
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={2}>

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
                    <Grid item xs={0} sm={2} />
                </Grid>
            </Grid>
        </>



    );
}