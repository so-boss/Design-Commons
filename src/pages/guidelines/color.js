import React from "react"
import _ from "lodash";

import {
  // Alert,
  // Audio,
  // BorderRadius,
  // ColorFamilies,
  // ColorRow,
  //ColorSwatch,
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
import {Typography, Tabs, Card, Avatar} from "antd";
import {AntPage} from "./../../../src/components/";

import { useSortedColors } from './../../../src/hooks/use-sorted-colors';
import './../../../src/css/custom.scss'

const { Paragraph, Title } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;

const TabCard = ({icon, label, description}) => (
  <Card bordered={true} hoverable={true}>
    <Meta
      avatar={<Avatar src={`/icons/${icon||label}.png`} />}
      title={label}
      description={description}
    />
  </Card>
)

export default function Home() {
  //const { sortedColors } = useSortedColors("blue","color");
  const neutrals = _.concat(
    useSortedColors("black","brand"),
    useSortedColors("grey","brand"),
    useSortedColors("white","brand")
)

  return (
    <AntPage>
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

      <div layout="panel">
        <Title level={2}>Full Color Spectrum</Title>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <TabCard
                label="Blues"
                icon="blues"
                value="blues"
                description="Actionable"
              />
            }
            key="1"
          >
            <Palette colors={useSortedColors("blue","color")}/>
          </TabPane>

          <TabPane
            tab={
              <TabCard
                label="Greys"
                icon="greys"
                value="greys"
                description="Readable"
              />
            }
            key="2"
          >
            <Palette colors={useSortedColors("grey","color")}/>
          </TabPane>

          <TabPane
            tab={
              <TabCard
                label="Accents"
                icon="accents"
                value="accents"
                description="Noticeable"
              />
            }
            key="3"
          >
            <Palette colors={useSortedColors("red","color")}/>
          </TabPane>
        </Tabs>
      </div>
    </AntPage>
  )
}