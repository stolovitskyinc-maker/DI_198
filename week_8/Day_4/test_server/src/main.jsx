import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Change .js to .jsx (or just remove the extension entirely)
import { BrowserRouter } from "react-router-dom";
import "./app.css"; // Make sure this matches your css filename (app.css or index.css)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
