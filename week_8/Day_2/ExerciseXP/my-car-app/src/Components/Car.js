import React, { useState } from 'react';
import Garage from './Garage';

function Car(props) {
  // Part II: Initialize state hook with a default color
  const [color, setColor] = useState("red");

  return (
    <div>
      {/* Part I & II: Render the header with color and model */}
      <h2>This car is {color} {props.carInfo.model}</h2>
      
      {/* Part III: Use the Garage component and pass the size 'small' */}
      <Garage size="small" />
    </div>
  );
}

export default Car;
