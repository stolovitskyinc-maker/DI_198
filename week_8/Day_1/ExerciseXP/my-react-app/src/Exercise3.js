import React, { Component } from 'react';
import './Exercise.css'; // Import Part III CSS file

// Part II: Styling object for the <h1> tag
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
        {/* Part II: <h1> tag styled using the style_header object */}
        <h1 style={style_header}>This is a Header</h1>

        {/* Part III: Paragraph using the .para class from Exercise.css */}
        <p className="para">This is a Paragraph</p>

        {/* Part I: Link */}
        <a href="https://react.dev" target="_blank" rel="noreferrer">This is a Link</a>
        <br /><br />

        {/* Part I: Form */}
        <h3>This is a Form:</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="nameInput">Enter your name:</label>
          <br /><br />
          <input type="text" id="nameInput" />
          <input type="submit" value="Submit" />
        </form>
        <br />

        {/* Part I: Image */}
        <h3>Here is an Image:</h3>
        <img 
          src="https://wikimedia.org" 
          alt="React Logo" 
          style={{ width: '300px', backgroundColor: '#20232a', padding: '20px' }}
        />
        <br /><br />

        {/* Part I: List */}
        <h3>This is a List:</h3>
        <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
