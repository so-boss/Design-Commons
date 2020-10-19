import React from "react"

import {
  Alert,
  Audio,
  BorderRadius,
  ColorFamilies,
  ColorRow,
  ColorSwatch,
  Download,
  FontFamily,
  FontSize,
  FontWeight,
  Heading,
  Palette,
  Shadow,
  Space,
  Table,
  Video,
} from "@lekoarts/gatsby-theme-specimens"
import { useSortedColors } from './../../src/hooks/use-sorted-colors';
import './../../src/css/custom.scss'

export default function Home() {
  //const { sortedColors } = useSortedColors("blue","color");

  return (
    <>
      {/*<Palette*/}
      {/*  colors={useSortedColors("blue","color")}*/}
      {/*  mode="swatch"*/}
      {/*/>*/}
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
    </>
  )
}