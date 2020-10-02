import React from 'react';
import { Container, Header,Icon, Segment,Image, Item,Button,Feed } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import "semantic-ui-css/semantic.min.css";
import Demo from './Map';




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




export default function SecondTab() {
  const classes = useStyles();
 
  
  

  return (
    <div>
      
    <Container fluid>
    <Image src='https://linkpicture.com/q/Calamity-Conscience-_-Contribute_1.png' size='medium' centered />
      <br></br>
   <Segment raised style={{background:'linear-gradient(to bottom right, #f9b16e, #f68080' }}> <text style={{color:'black',fontFamily :'Montserrat'}} > Your Current Location</text><br></br>  
    <Demo/> </Segment>

    
    
<br></br>
 <Segment raised style={{background:'linear-gradient(to bottom right, #f9b4ed , #adcfff' }}>
 <Feed>
        <Feed.Event>
        <Icon name='medkit' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="tel:112" style={{color:'black',fontFamily :'Montserrat'}}>National Emergency Number</a>  
            </Feed.Summary >
            <text style={{fontFamily :'Poppins'}}>Call your NEN based on your country</text>
          </Feed.Content>
          <a  href="tel:112" >
     <Icon name='clockwise rotated call icon' size='large' style={{margin:"10px"}}  />   </a>
        </Feed.Event>
        </Feed>
 </Segment>
 <Segment raised style={{background:'linear-gradient(to bottom right, #f9b4ed , #adcfff' }}>
 <Feed>
        <Feed.Event>
        <Icon name='fire extinguisher icon' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="tel:101" style={{color:'black',fontFamily :'Montserrat'}}>Fire Station</a>
            </Feed.Summary>
            <text style={{fontFamily :'Poppins'}}>Call the closest fire station</text>
          </Feed.Content>
          <a  href="tel:101" >
     <Icon name='clockwise rotated call icon' size='large' style={{margin:"10px"}}  />   </a>
        </Feed.Event>
        </Feed>
 </Segment>
 <Segment raised style={{background:'linear-gradient(to bottom right, #f9b4ed , #adcfff' }}>
 <Feed>
        <Feed.Event>
        <Icon name='ambulance' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="tel:102" style={{color:'black',fontFamily :'Montserrat'}}>Ambulance</a>
            </Feed.Summary>
            <text style={{fontFamily :'Poppins'}}>Call the nearest Hospital Ambulance.</text>
          </Feed.Content>
          <a  href="tel:102" >
     <Icon name='clockwise rotated call icon' size='large' style={{margin:"10px"}}  />   </a>
        </Feed.Event>
        </Feed>
 </Segment>
<br></br>

  
<Segment raised style={{background:'linear-gradient(to bottom right, #ff86c8 , #ffa3a5'}}>
    <Item>
      <Item.Content>
        <Item.Header as='a'style={{color:'black'}} ><b  style={{fontFamily :'Poppins'}}>Contribute</b></Item.Header>
        <br></br>
        <Item.Description>
        <i style={{color:'#1c2541', fontFamily :'Poppins'}} > "Every contribution counts. Everyone can make a difference. Just start with yourself."</i>
        </Item.Description> 
        <br></br>
           <Button icon labelPosition='left' inverted  href="https://rzp.io/l/teWsbQd">
<         Icon name='money bill alternate outline' />
             <text style={{fontFamily :'Poppins'}}>Donate</text> 
            </Button>
      </Item.Content>
    </Item>
    </Segment>

</Container>
 

    

  </div>
  );
}

