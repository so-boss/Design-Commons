import React from 'react';

import './Typeface.scss';

const Face = ({family, style, weight, text}) => {
  let showcase_text = text;
  if(!showcase_text) {
    showcase_text = "Ag";
  }

  return (
    <div font="typeface" style={{fontFamily: family}}>
      <div>
        <span style={{fontWeight: weight}}>{showcase_text}</span>
        <div face="label">
          <div>
            <span face="style">{style}</span>
            <span face="weight"><font style={{fontWeight: weight}}>{weight}</font></span>
          </div>
          <span face="family">{family}</span>
        </div>
      </div>
    </div>
  );
}

const Faces = ({typefaces}) => {

  return (
    <div>
      {
        typefaces.map((typeface) => (
          <Face
            family={typeface.family}
            style={typeface.style_name}
            weight={typeface.weight}
          />
        ))
      }
    </div>
  )
}

export default function Typeface ({typefaces}) {

  return (
    <Faces typefaces={typefaces} />
  );
}
