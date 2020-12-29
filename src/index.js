import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./uiKit/main.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
