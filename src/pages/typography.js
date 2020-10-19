import React from "react"

import {
  Typography
} from 'antd';



//import {
  // Alert,
  // Audio,
  // BorderRadius,
  // ColorFamilies,
  // ColorRow,
  // ColorSwatch,
  // Download,
  //FontFamily,
  //FontSize,
  // FontWeight,
  // Heading,
  // Palette,
  // Shadow,
  // Space,
  // Table,
  // Video,
//} from "@lekoarts/gatsby-theme-specimens"

import {FontSize, TextStyle, Typeface, AntPage} from "./../../src/components/"

import { useTypography } from './../../src/hooks/use-typography.js';
import './../../src/css/custom.scss'

const { Paragraph, Title } = Typography;

export default function Home() {
  const typography = useTypography();

  return (
    <AntPage title="Typography" icon="typography">
      <Title level={2}>Font: RT Raleway</Title>
      <Typeface typefaces={useTypography("rtraleway").typefaces} />
      <Title level={4}>Sizes</Title>
      <FontSize
        family="Cabin"
        sizes={typography.fontsizes.rtraleway}
      />
      <Title level={4}>Text Styles</Title>
      <TextStyle textstyles={typography.textstyles.rtraleway}/>

      <Title level={2}>Font: Cabin</Title>
      <Typeface typefaces={useTypography("cabin").typefaces} />
      <Title level={4}>Sizes</Title>
      <FontSize
        family="Cabin"
        sizes={typography.fontsizes.Cabin}
      />
      <Title level={4}>Text Styles</Title>
      <TextStyle textstyles={typography.textstyles.Cabin}/>
    </AntPage>
  )
}

/*
      <Paragraph>The CSAA color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for CSAA. Text colors displayed in light or dark tints represent CSAA's recommended accessible pairing with the color.</Paragraph>
 */