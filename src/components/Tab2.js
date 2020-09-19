import React from 'react';
import { Container, Header,Icon, Segment,Image, Item,Button,Feed,Dropdown,Card } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import "semantic-ui-css/semantic.min.css";




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

const countryOptions = [
  {key: 'in', value: 'in', flag: 'in', text: 'Chennai,India' }
]


export default function SecondTab() {
  const classes = useStyles();
 
  
  

  return (
    <div>
      
    <Container fluid>
    <Image src='https://linkpicture.com/q/Calamity-Conscience-_-Contribute_1.png' size='medium' centered />
      <br></br>
      <Dropdown
    placeholder='Select Country For Localised Contacts'
    fluid
    search
    selection
    options={countryOptions} />
<br></br>
 <Segment raised>
 <Feed>
        <Feed.Event>
        <Icon name='medkit' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="tel:+91-9361309533">National Emergency Number</a>  
            </Feed.Summary>
            Call your NEN based on your country
          </Feed.Content>
          <a  href="tel:+91-9361309533" >
     <Icon name='clockwise rotated call icon' size='large' style={{margin:"10px"}}  />   </a>
        </Feed.Event>
        </Feed>
 </Segment>
 <Segment raised>
 <Feed>
        <Feed.Event>
        <Icon name='fire extinguisher icon' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="tel:+91-9789809191">Fire Station</a>
            </Feed.Summary>
            Call the closest fire station
          </Feed.Content>
          <a  href="tel:+91-9361309533" >
     <Icon name='clockwise rotated call icon' size='large' style={{margin:"10px"}}  />   </a>
        </Feed.Event>
        </Feed>
 </Segment>
 <Segment raised>
 <Feed>
        <Feed.Event>
        <Icon name='ambulance' size='large' style={{margin:"10px"}} />
          <Feed.Content> 
            <Feed.Summary>
            <a href="tel:+91-9789809191">Ambulance</a>
            </Feed.Summary>
            Call the nearest Hospital Ambulance.
          </Feed.Content>
          <a  href="tel:+91-9361309533" >
     <Icon name='clockwise rotated call icon' size='large' style={{margin:"10px"}}  />   </a>
        </Feed.Event>
        </Feed>
 </Segment>
<br></br>

  
<Segment raised>
    <Item>
      <Item.Content>
        <Item.Header as='a'><b>Contribute</b></Item.Header>
        <br></br>
        <Item.Description>
        <i> "Every contribution counts. Everyone can make a difference. Just start with yourself."</i>
        </Item.Description> 
        <br></br>
           <Button icon labelPosition='left' color='black' href="https://rzp.io/l/teWsbQd">
<         Icon name='money bill alternate outline' />
              Donate
            </Button>
      </Item.Content>
    </Item>
    </Segment>

</Container>
 

    

  </div>
  );
}

