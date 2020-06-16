import React from 'react';

import {
  Typography,
} from 'antd';

const { Paragraph, Title, Text } = Typography;
import './FontSize.scss';

// const sizes = [
//   {
//     label:"L / LARGEST (24px)",
//     fontSize:"24px"
//   },
//   {
//     label:"M / MEDIUM (16px)",
//     fontSize:"16px"
//   },
//   {
//     label:"S / SMALL (14px)",
//     fontSize:"14px"
//   },
//   {
//     label:"XS / SMALLEST (12px)",
//     fontSize:"12px"
//   }
// ]

const ParagraphText = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim.
  </Paragraph>
);

const Preview = ({fontSize, type}) => {
  return (
    <div style={{ fontSize: fontSize }}>
      <div>
        {type=="paragraph"
          ? <ParagraphText />
          : <Text>The quick brown fox jumps over the lazy dog</Text>
        }
      </div>
    </div>
  );
};

const Font = ({fontSize, label}) => (
  <>
    <Title level={4}>{label}</Title>
    <Preview fontSize={fontSize} />
  </>
)

const Row = ({fontSize, label}) => (
  <div row="font">
    <Font
      label={label}
      fontSize={fontSize}
    />
  </div>
)

const Rows = ({rows}) => (
  <div type="rows">
    {rows.map((row) => {
      return (
        <Row
          fontSize={row.size}
          label={row.label}
        />
      );
    })}
  </div>
);

export default function FontSize ({sizes}) {
  return (
    <div font="size" type="section">
      <Rows rows={sizes} />
    </div>
  );
};
