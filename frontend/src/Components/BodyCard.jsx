import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    
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
});

const LandingCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {imgSrc} = props;

  return (
    <Card style={{border:'none'}} variant="outlined">
      <CardContent>
        <CardMedia
        style={{height: "180px", borderRadius:'8px'}}
        image={imgSrc}
        />

      </CardContent>
    
    </Card>
  );
}
export default LandingCard;