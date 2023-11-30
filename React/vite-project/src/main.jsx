import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SetTheme from "./Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
  <SetTheme>
      <App />
      </SetTheme>
  </BrowserRouter>
  
);
