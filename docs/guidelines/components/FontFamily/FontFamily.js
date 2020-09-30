import React from 'react';

import {
  Typography,
} from 'antd';

const { Paragraph, Title } = Typography;
import './FontFamily.scss';

const Col = ({type, children}) => (
  <div col={type}>
    {children}
  </div>
)

const Row = ({id, type, children}) => (
  <div id={id} row={type}>
    {children}
  </div>
)

const Rows = ({children}) => (
  <div type="rows">
    {children}
  </div>
);

const Character = ({style}) => (
  <Col type="character">
    <span style={style}> Aa </span>
  </Col>
);

const Preview = ({style}) => (
  <Col type="preview">
    <div style={style}>
      <div>
        <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </div>
      <div>
        <div>abcdefghijklmnopqrstuvwxyz</div>
      </div>
      <div>
        <div>1234567890(,.;:?!$&amp;*)</div>
      </div>
    </div>
  </Col>
);

const Properties = ({name, weight, style}) => (
  <Col type="properties">
    <div font="name">{name}</div>
    <div font="weight">
      <label>Weight:</label>
      <span style={{fontWeight: weight}}>{weight}</span>
    </div>
    <div font="style">
      <label>Style:</label>
      <span style={{fontWeight: weight}}>{style}</span>
    </div>
  </Col>
)

const Font = ({name, weight, style_name}) => {
  let fontStyle = style_name;
  if(!fontStyle) {
    fontStyle = "normal";
  }

  let style = {
    fontFamily: name,
    fontWeight: weight,
    fontStyle: fontStyle
  };

  return (
    <Row type="font">
      <Character style={style} />
      <Preview style={style} />
      <Properties
        name={name}
        weight={weight}
        style={fontStyle}
      />
    </Row>
  )
}

export default function FontFamily ({family, weight, style_name}) {
  if(!family) {
    family = {
      name:"Raleway"
    };
  }
  return (
    <div font="family" type="section">
      <Rows>
        <Font
          name={family.name}
          weight={weight}
          style_name={style_name}
        />
      </Rows>
    </div>
  );
}
