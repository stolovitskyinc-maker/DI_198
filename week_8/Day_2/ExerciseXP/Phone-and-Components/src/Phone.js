import React, { useState } from 'react';

function Phone() {
  // Part I: Initialize state with the phone details
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  // Part II: Function to update the color state
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
      {/* Part II: Button to trigger the color change */}
      <button type="button" onClick={changeColor}>
        Change color
      </button>
    </div>
  );
}

export default Phone;
