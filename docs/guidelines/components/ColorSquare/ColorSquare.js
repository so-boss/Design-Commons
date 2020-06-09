import React from "react";
import './ColorSquare.scss';

export default function ColorSquare ({color}) {
  const squareStyle = {
    backgroundColor: color
  }

  return (
    <div color='square' style={squareStyle} />
  );
}
