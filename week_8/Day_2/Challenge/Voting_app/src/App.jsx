import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state with the provided array of objects
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to increase votes by index
  const vote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      
      <div className="languages-container">
        {languages.map((lang, index) => (
          <div key={lang.name} className="language-row">
            <span className="vote-count">{lang.votes}</span>
            <span className="language-name">{lang.name}</span>
            <button 
              type="button" 
              className="vote-button" 
              onClick={() => vote(index)}
            >
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
