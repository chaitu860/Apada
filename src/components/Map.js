import React from 'react';
import { usePosition } from 'use-position';

export default function Demo ()  {
  const watch = true;
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch);

  return (
 
      <text style={{fontFamily :'Poppins'}}>
      <b>Latitude:</b> {latitude}<br/>
      <b>Longitude:</b>  {longitude}<br/>
      <b>Timestamp:</b> {timestamp}<br/>
      <b>Accuracy:</b>  {accuracy && `${accuracy}m`}<br/>
    </text>
   
        
    
  );
};