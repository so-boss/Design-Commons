import React from "react"

import {
  // Alert,
  // Audio,
  // BorderRadius,
  // ColorFamilies,
  // ColorRow,
  // ColorSwatch,
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

  return (
    <AntPage title="Color" icon="color">
      <Paragraph>The CSAA color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for CSAA. Text colors displayed in light or dark tints represent CSAA's recommended accessible pairing with the color.</Paragraph>
      <Title level={4}>Brand</Title>
      <Palette
        colors={useSortedColors("blue","brand")}
      />
      <Palette
        colors={useSortedColors("black","brand")}
      />
      <Palette
        colors={useSortedColors("grey","brand")}
      />
      <Palette
        colors={useSortedColors("white","brand")}
      />
      <Palette
        colors={useSortedColors("red","brand")}
      />
      <Palette
        colors={useSortedColors("blue","color")}
      />
      <Palette
        colors={useSortedColors("grey","color")}
      />
      <Palette
        colors={useSortedColors("red","color")}
      />
    </AntPage>
  )
}

/*
      <Palette
        colors={useSortedColors("blue","color")}
        mode="swatch"
      />
 */