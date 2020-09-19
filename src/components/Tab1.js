import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChartDisp from './chartdisplay.js';
import News from './News.js';
import "semantic-ui-css/semantic.min.css";
import { Image } from 'semantic-ui-react';



const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 40,
  },
  
});

export default function FirstTab() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <Image src='https://www.linkpicture.com/q/Calamity-Conscience-_-Contribute_1.png' size='medium' centered />
      <CardContent>
        <Typography variant="h3" >
        Global deaths from natural disasters
        </Typography>
        <ChartDisp/>
      </CardContent>
      <br></br>
      <Typography  >
        <i>Source:<a href='https://ourworldindata.org'>https://ourworldindata.org</a>/</i>
        </Typography>
        <CardContent>
       <News/>
        </CardContent>
    </Card>
  );
}

