import React from "react"

import {
  // Alert,
  // Audio,
  // BorderRadius,
  // ColorFamilies,
  // ColorRow,
  // ColorSwatch,
  // Download,
  FontFamily,
  //FontSize,
  // FontWeight,
  // Heading,
  // Palette,
  // Shadow,
  // Space,
  // Table,
  // Video,
} from "@lekoarts/gatsby-theme-specimens"

import FontSize from "./../../src/components/FontSize"
import TypeFace from "./../../src/components/TypeFace/index"

import { useTypography } from './../../src/hooks/use-typography.js';
import './../../src/css/custom.scss'

export default function Home() {
  //const { sortedColors } = useSortedColors("blue","color");
  const typefaces = useTypography().typefaces;
  console.log("comp", typefaces)
  return (
    <>
      {
        typefaces.map((typeface) => (
          <TypeFace
            family={typeface.family}
            style={typeface.style_name}
            weight={typeface.weight}
          />
        ))
      }

      <FontSize
        family="Cabin"
        sizes={useTypography().fontSizes.Cabin}
      />
      <FontSize
        family="RT Raleway"
        sizes={useTypography().fontSizes.rtraleway}
      />
    </>
  )
}