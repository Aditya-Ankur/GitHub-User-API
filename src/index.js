import React from "react";
import reactDom from "react-dom";
import App from "./app";
import "./app.css";

reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
