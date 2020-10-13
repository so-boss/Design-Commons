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
import { useFontSizes } from './../../src/hooks/use-font-sizes';

export default function Home() {
  const { sizes } = useFontSizes()
  return <FontSize fontSizes={sizes} />
}