import React from "react"

import {
  Typography
} from 'antd';

import {FontSize, TextStyle, Typeface, AntPage} from "./../../../src/components/"

import { useTypography } from './../../../src/hooks/use-typography.js';
import './../../../src/css/custom.scss'

const { Paragraph, Title } = Typography;

export default function Home() {
  const typography = useTypography(null, "definition");

  return (
    <AntPage>
      <Title level={2}>Font: RT Raleway</Title>
      <div row="typefaces">
        <Typeface typefaces={useTypography("rtraleway").typefaces} />
      </div>
      <FontSize
        family="RTRaleway"
        maps={typography.maps}
      />
      <TextStyle
        family="RTRaleway"
        maps={typography.maps}
      />

      <Title level={2}>Font: Cabin</Title>
      <div row="typefaces">
        <Typeface typefaces={useTypography("cabin").typefaces} />
      </div>
      <FontSize
        family="Cabin"
        maps={typography.maps}
      />
      <TextStyle
        family="Cabin"
        maps={typography.maps}
      />
    </AntPage>
  )
}

/*
      <Paragraph>The CSAA color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for CSAA. Text colors displayed in light or dark tints represent CSAA's recommended accessible pairing with the color.</Paragraph>
 */