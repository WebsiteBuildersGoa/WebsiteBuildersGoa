// import index from "./src/index";
// import pricing from "./src/pricing";

import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";


let rootContainer = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootContainer);

// Initial render: Render an element to the root.
root.render(
  <App />

);
