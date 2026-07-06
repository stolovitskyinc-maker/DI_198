import React, { useState } from 'react';

function Events() {
  // Part III: Declare state variable for the toggle button
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Part I: Arrow function for the simple button click
  const clickMe = () => {
    alert('I was clicked');
  };

  // Part II: Function to check if the 'Enter' key was pressed
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  // Part III: Function to toggle the state between true and false
  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Part I: Button with onClick event */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={clickMe}>Click Me</button>
      </div>

      {/* Part II: Input tag with onKeyDown event */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Press Enter key..." 
          onKeyDown={handleKeyDown} 
        />
      </div>

      {/* Part III: Toggle button displaying ON or OFF */}
      <div>
        <button onClick={toggleState}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
}

export default Events;
