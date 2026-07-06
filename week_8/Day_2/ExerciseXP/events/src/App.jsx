import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events'; // Import the new component

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <Car carInfo={carinfo} />
      <hr /> {/* Visual separator */}
      <Events /> {/* Render the events component */}
    </div>
  );
}

export default App;
