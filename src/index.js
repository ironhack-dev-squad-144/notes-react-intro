// import is the require for the front-end
import React from "react"; // package from node_mdules
import ReactDOM from "react-dom"; // package from node_mdules
import App from "./App.js"; // package "/src/App.js"

// Render the App component and inject it in the element with the "root"
ReactDOM.render(
  <App />,
  document.getElementById("root")
);