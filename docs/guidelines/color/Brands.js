import React from "react";

import {
  Typography,
} from 'antd';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {
  ColorTable
} from '@site/docs/guidelines/components';

import {
  brands,
} from '@site/docs/guidelines/palettes'

import {
  CSAA,
  Mobilitas
} from '@site/docs/guidelines/color/index';

const { Paragraph, Title } = Typography;

import '@site/static/ant/antd.css';

export default function Brands () {
  return (
    <Tabs
      defaultValue="csaa"
      values={[
        {
          label: 'CSAA',
          value: 'csaa',
          description: "Core CSAA Brand Color Scheme"
        },
        {
          label: 'Mobilitas',
          value: 'mobilitas',
          description: "Unique Colors for Mobilitas Brand"
        }
      ]}>
      <TabItem value="csaa">
        <Paragraph>The CSAA color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for CSAA. Text colors displayed in light or dark tints represent CSAA's recommended accessible pairing with the color.</Paragraph>
        <ColorTable colors={brands.csaa.colors} tier="csaa" />
        <Title level={4}>Neutrals</Title>
        <ColorTable colors={brands.csaa.neutrals} tier="csaa" />
        <CSAA />
      </TabItem>
      <TabItem value="mobilitas">
        <Paragraph>The Mobilitas color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for Mobilitas. Text colors displayed in light or dark tints represent Mobilitas’ recommended accessible pairing with the color.</Paragraph>
        <ColorTable colors={brands.mobilitas.colors} tier="mobilitas" />
        <Title level={4}>Neutrals</Title>
        <ColorTable colors={brands.mobilitas.neutrals} tier="mobilitas" />
        <Mobilitas />
      </TabItem>
    </Tabs>
  );
}
