import React from "react"

// import {
//   // Alert,
//   // Audio,
//   // BorderRadius,
//   // ColorFamilies,
//   // ColorRow,
//   //ColorSwatch,
//   // Download,
//   // FontFamily,
//   // FontSize,
//   // FontWeight,
//   // Heading,
//   //Palette,
//   // Shadow,
//   // Space,
//   // Table,
//   // Video,
// } from "@lekoarts/gatsby-theme-specimens"
import {
  Typography
} from 'antd';

import {AntPage} from "./../../../src/components/";

import './../../../src/css/custom.scss'

const { Paragraph, Title } = Typography;

export default function Home() {
  return (
    <AntPage title="Color" icon="color">
      <Paragraph>The CSAA color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for CSAA. Text colors displayed in light or dark tints represent CSAA's recommended accessible pairing with the color.</Paragraph>
      <Title level={2}>Brand Colors</Title>
    </AntPage>
  )
}