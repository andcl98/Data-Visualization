import React from "react";
import { arc } from "d3";
import { BackgroundCircle } from "./Background";
import { Eyes } from "./Eyes";

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

<h1>YAOOOOOOA!</h1>;

const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 1.5);
  return <path d={mouthArc()} />;
};

const App = () => (
  <svg width={width} heigh t={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </g>
  </svg>
);
export default App;
