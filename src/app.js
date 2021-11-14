import React from "react";
import asea from "./asea.png";
import "./App.css";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={asea} className="App-logo" alt="asea-building" />
        <h1>YAOOOOOOA!</h1>
        <svg width={width} height={height}>
          <circle
            cx={centerX}
            cy={centerY}
            r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={centerX - eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={eyeRadius}
          />
          <circle
            cx={centerX + eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={eyeRadius}
          />
        </svg>
      </header>
    </div>
  );
}
export default App;
