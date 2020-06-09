import React from "react";
import './ColorProperty.scss';

export default function ColorProperty ({type, color}) {
  return (
    <div color="property" type={type}>
      <div color="name">{type}</div>
      <div color="value">{color}</div>
    </div>
  );
}
