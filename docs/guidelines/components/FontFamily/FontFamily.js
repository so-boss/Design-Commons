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
    <span style={{fontFamily: 'Helvetica', fontWeight: 400, fontStyle: "normal"}}> Aa </span>
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
      <span>{weight}</span>
    </div>
    <div font="style">
      <label>Style:</label>
      <span>{style}</span>
    </div>
  </Col>
)

const Font = ({name, weight, style}) => {
  let fontStyle = style;
  if(!fontStyle) {
    fontStyle = "normal";
  }
  return (
    <Row type="font">
      <Character style={{fontFamily: name, fontWeight: weight, fontStyle: fontStyle}} />
      <Preview style={{fontFamily: name, fontWeight: weight, fontStyle: fontStyle}} />
      <Properties
        name={name}
        weight={weight}
        style={fontStyle}
      />
    </Row>
  )
}



export default function FontFamily () {
  return (
    <div font="family" type="section">
      <Rows>
        <Font
          name="Helvetica"
          weight="400"
        />
      </Rows>
    </div>
  );
}
