import React from "react";

import {
  Typography,
} from 'antd';

const { Paragraph, Title } = Typography;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {
  ColorTable,
} from '@site/docs/guidelines/components';

import {
  products
} from '@site/docs/guidelines/palettes'

export default function Mobilitas () {
  return (
    <div layout="panel">
      <Title level={2}>Products</Title>
      <Tabs
        defaultValue="rideshare"
        values={[
          {
            label: 'Rideshare',
            icon: "b2c",
            value: 'rideshare',
            description: "Gig Workers"
          }
        ]}>
        <TabItem value="rideshare">
          <Title level={3}>Mobilitas Black</Title>
          <Paragraph>As the foundation of our palate, the bold yet subdued Mobilitas Black – and subsequent shades – is more than just a neutral color. It represents the dependability and trust customers have in our product. As an important visual aspect of the Mobilitas environment, this is actually the color of the Power Bar; an essential resource that doesn't distract from the brands within.</Paragraph>
          <Paragraph>Mainly used in a large part of the text interface, in addition to the background, borders, dividing lines, and other scenes are also very common. Neutral color definition needs to consider the difference between dark background and light background, while incorporating the WCAG 2.0 standard.</Paragraph>
          <ColorTable colors={products.rideshare.blacks} tier="mobilitas" />
          <Paragraph>Mobilitas Black and White are the first choice; all derived grey tones are used when there isn't enough contrast or clarity.</Paragraph>
          <Title level={3}>Mobilitas Blues</Title>
          <Paragraph>Blues often stand for reliability and business. In our case, the Mobilitas Blues represent our professionalism and the quality of our product, only less stuffy and more approachable.</Paragraph>
          <ColorTable colors={products.rideshare.blues} tier="mobilitas" />
          <Paragraph>Mobilitas Blue is the first choice; the three derived tones (Mobilitas Blue 1, 2, and 3) are used when there isn't enough contrast or clarity.</Paragraph>
          <Title level={3}>Mobilitas Cyans</Title>
          <Paragraph>The cyan tones are used as supportive colors, when all blues are insufficient in expressing something.</Paragraph>
          <ColorTable colors={products.rideshare.cyans} tier="mobilitas" />
        </TabItem>
      </Tabs>
    </div>
  );
}
