import React, { Component } from "react";
import "./App.css";

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

// Definition of the App component
// Can be reused later by typing: <App />
function App(props) {
  console.log("App component rendered")
  let x = 42
  let colors = ["red", "green", "blue"]
  let randomIndex = Math.floor(Math.random() * colors.length)
  let s = {
    color: colors[randomIndex],
    backgroundColor: "yellow",
    padding: 10
  }

  // In a JSX, we have to use "classname=..." instead of "class=..."
  return (
    <div className="App" style={s}>
      <h1>Hello Ironhackers</h1>
      {/* The tag br has to be self closed with "/" */}
      <br/>
      <p>The answer is {x}</p>
      <p>A random number: {generateRandomNumber(100)}</p>
    </div>
  )
}

// // Old syntax for a component
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> Hello Ironhackers! </h1>
//       </div>
//     );
//   }
// }

export default App;