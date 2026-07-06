import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Find the root div in your public/index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the StrictMode wrapper
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
