import React from 'react';

import './TextStyle.scss';

const Style = ({name, size, lineHeight, weight, family, text}) => {
  return (
    <div>
      <div>
        <span>{name.long}</span>
        <span>({name.short})</span>
      </div>
      <div>
        <div>
          <label>size</label>
          <span>{size}</span>
        </div>
        <div>
          <label>line</label>
          <span>{lineHeight}</span>
        </div>
        <div>
          <label>weight</label>
          <span style={{fontWeight: weight}}>{weight}</span>
        </div>
      </div>
      <div font="preview" style={{fontFamily: family}}>
        <div>{text}</div>
      </div>
    </div>
  );
}
const Styles = ({textstyles}) => {

  return (
    <div>
      {
        textstyles.map((textstyle) => (
          <Style
            name={textstyle.name}
            family={textstyle.family}
            style={textstyle.style_name}
            size={textstyle.size}
            weight={textstyle.weight}
            lineHeight={textstyle.lineHeight}
          />
        ))
      }
    </div>
  )
}

export default function TextStyle ({textstyles}) {

  return (
    <Styles textstyles={textstyles} />
  );
}
