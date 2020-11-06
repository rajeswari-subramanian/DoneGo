import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    boxShadow: 'rgba(0, 0, 0, 0.06) 0px 4px 7px',
    fontFamily:'sans-serif',
    fontWeight:'900',
    paddingLeft:'5px',
    fontSize:'10px' 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: "5px",
  },
  pos: {
    marginBottom: 12,
  },
});

const SmallCards = (props) => {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  const { imgSrc, text } = props;

  return (
    <Card variant='elevation' className={classes.root}>
      <CardContent >
        <CardMedia
          style={{ background: 'rgb(255, 255, 255) none repeat scroll 0% 0%;',
           height: "10px", 
           width: '10px', 
           borderRadius: '4px', 
           cursor: 'pointer', 
           padding: '10px 16px 16px', 
           position: 'relative', 
           boxSizing: 'content-box', 
           zIndex: 'auto',
          fontSize:'5px'}}
          image={imgSrc}
        />
        <br/>
        <span style={{overflowWrap:"unset"}}>{text}</span>
      </CardContent>
    </Card>
  );
}

export default SmallCards;