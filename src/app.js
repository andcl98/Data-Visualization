import React from "react";
import asea from "./asea.png";
import { arc } from "d3";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 100;
const eyeOffsetY = 100;
const eyeRadius = 30;
const mouthWidth = 20;
const mouthRadius = 120;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 1.5);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={asea} className="App-logo" alt="asea-building" />
        <h1>YAOOOOOOA!</h1>
        <svg width={width} height={height}>
          <g transform={`translate(${centerX}, ${centerY})`}>
            <circle
              r={centerY - strokeWidth / 2}
              fill="yellow"
              stroke="black"
              strokeWidth={strokeWidth}
            />
            <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
            <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
            <path d={mouthArc()} />
          </g>
        </svg>
      </header>
    </div>
  );
}
export default App;
