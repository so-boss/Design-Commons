import React from "react";

import {
  Typography
} from 'antd';

const { Paragraph, Title } = Typography;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {
  FontSize
} from '@site/src/components';;


//      <Title level={4}>Full Color Spectrum</Title>
export default function CSAA () {
  return (
    <div layout="panel">
      <Tabs
        defaultValue="typefaces"
        values={[
          {
            label: 'Typefaces',
            icon: 'typefaces',
            value: 'typefaces',
            description: 'Font Families'
          },
          {
            label: 'Text Styles',
            icon: "text_styles",
            value: 'text_styles',
            description: 'Style Groupings'
          },
          {
            label: 'Accessibility',
            value: 'accessibility',
            description: 'Best Practices'
          }
        ]}>
        <TabItem value="typefaces">
          <Title level={4}>Additional Product Typography</Title>
        </TabItem>
        <TabItem value="text_styles">
          <Title level={4}>Additional Product Typography</Title>
        </TabItem>
        <TabItem value="accessibility">
          <Title level={4}>Additional Product Typography</Title>
          <Paragraph>IP's base font size is <b>14px</b> to ensure the best user reading efficiency on most common monitors based on display screen reading distance (50 cm) and optimal reading angle (0.3).</Paragraph>
          <FontSize sizes={[
            {
              label:"XL / LARGEST (60px)",
              size:"60px"
            },
            {
              label:"L / LARGE (36px)",
              size:"36px"
            },
            {
              label:"S / SMALL (18px)",
              size:"18px"
            },
          ]}/>
        </TabItem>
      </Tabs>
    </div>
  );
}
