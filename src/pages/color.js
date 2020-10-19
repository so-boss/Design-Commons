import React from "react"
import _ from "lodash";

import {
  // Alert,
  // Audio,
  // BorderRadius,
  // ColorFamilies,
  // ColorRow,
  ColorSwatch,
  // Download,
  // FontFamily,
  // FontSize,
  // FontWeight,
  // Heading,
  Palette,
  // Shadow,
  // Space,
  // Table,
  // Video,
} from "@lekoarts/gatsby-theme-specimens"
import {Typography} from "antd";
import {AntPage} from "./../../src/components/"

import { useSortedColors } from './../../src/hooks/use-sorted-colors';
import './../../src/css/custom.scss'

const { Paragraph, Title } = Typography;

export default function Home() {
  //const { sortedColors } = useSortedColors("blue","color");
  const neutrals = _.concat(
    useSortedColors("black","brand"),
    useSortedColors("grey","brand"),
    useSortedColors("white","brand")
)

  return (
    <AntPage title="Color" icon="color">
      <Paragraph>The CSAA color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for CSAA. Text colors displayed in light or dark tints represent CSAA's recommended accessible pairing with the color.</Paragraph>
      <Title level={2}>Brand Colors</Title>
      <Palette
        colors={useSortedColors("blue","brand")}
        mode="swatch"
      />

      <Palette
        colors={neutrals}
        mode="swatch"
      />
      <Palette
        colors={useSortedColors("red","brand")}
        mode="swatch"
      />
      <Title level={2}>Spectrum</Title>
      <Title level={3}>Blues</Title>
      <Palette
        colors={useSortedColors("blue","color")}
      />
      <Title level={3}>Greys</Title>
      <Palette
        colors={useSortedColors("grey","color")}
      />
      <Title level={3}>Reds</Title>
      <Palette
        colors={useSortedColors("red","color")}
      />
    </AntPage>
  )
}

/*

          <ColorSwatch
            color={black.color}
            name={black.name}
          />
      <Palette
        colors={useSortedColors("blue","color")}
        mode="swatch"
      />
 */