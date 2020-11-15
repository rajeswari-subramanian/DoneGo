import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  cardmedia: {
    height: "180px",width:"100%",borderRadius:'10px'
  }, 
});

const TopPickCards = (props) => {
  const classes = useStyles();  
  const {imgSrc} = props;

  return (
    <Card style={{border:'none'}} variant="outlined">
      <CardContent style={{padding:"0px"}}>
        <CardMedia
        className={classes.cardmedia}      
        image={imgSrc}
        />
      </CardContent>    
    </Card>
  );
}
export default TopPickCards;