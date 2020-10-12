import React from "react";

import { utils } from 'react-color-tools'

import {
  ColorSquare,
  ColorProperty
} from '../';

import './ColorTable.scss';

const Row = ({name, hex, cmyk}) => {
  let rgb = utils.toRGB(hex);
  rgb = rgb.replace(/RGB\(|\)|/gi, "");

  // HSV (aka HSB) > Hue, Saturation and Brightness
  let hsv = utils.toHSV(hex);
  hsv = hsv.replace(/HSV\(|\)|%/gi, "");
  const hue_comma = hsv.indexOf(",");
  hsv = hsv.slice(0, hue_comma) + "°" + hsv.slice(hue_comma);

  return (
    <div table="row">
      <div>
        <ColorSquare color={hex}/>
        <div color='name'>{name}</div>
        <ColorProperty type="hex" color={hex}/>
        <ColorProperty type="rgb" color={rgb}/>
        <ColorProperty type="hsv" color={hsv}/>
      </div>
    </div>
  );
};

const Rows = ({rows, tier}) => (
  <>
    {rows.map(row => {
      return (
        <Row
          key={tier + "_" + row.name.replace(" ", "_")}
          name={row.name}
          hex={row.hex}
          rgb={row.rgb}
          cmyk={row.cmyk}
        />
      );
    })}
  </>
);

export default function ColorTable ({colors, tier}) {
  return (
    <div type="table">
      <Rows rows={colors} tier={tier} />
    </div>
  );
}
