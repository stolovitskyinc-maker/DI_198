import React, { useState, useEffect } from 'react';

function Color() {
  // Initialize favoriteColor state to "red"
  const [favoriteColor, setFavoriteColor] = useState("red");

  // useEffect runs after the component renders
  useEffect(() => {
    alert("useEffect reached");
  }, []); // Empty dependency array means this runs once on mount

  // Function to update the state to "blue"
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <button type="button" onClick={changeColor}>
        Change color
      </button>
    </div>
  );
}

export default Color;
