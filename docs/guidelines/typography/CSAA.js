import React from "react";

import {
  Typography
} from 'antd';

const { Paragraph, Title } = Typography;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {
  FontFamily,
  FontSize
} from '@site/docs/guidelines/components';

import {
  products
} from '@site/docs/guidelines/palettes';

export default function CSAA () {
  return (
    <div layout="panel">
      <Title level={2}>Products</Title>
      <Tabs
        defaultValue="mypolicy"
        values={[
          {
            label: 'MyPolicy Portal',
            icon: "b2c",
            value: 'mypolicy',
            description: "Customer Tools"
          },
          {
            label: 'Quote',
            icon: "b2c",
            value: 'quote',
            description: "New Customers"
          },
          {
            label: 'Insurance Portal',
            icon: "b2b",
            value: 'insurance_portal',
            description: "Agent Tools"
          }
        ]}>
        <TabItem value="mypolicy">
          <Title level={4}>Additional Product Typography</Title>
        </TabItem>
        <TabItem value="quote">
          <Title level={4}>Additional Product Typography</Title>
        </TabItem>
        <TabItem value="insurance_portal">
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
