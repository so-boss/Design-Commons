import React from "react";

import {
  Typography,
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
          <Title level={4}>Additional Product Typography</Title>
        </TabItem>
      </Tabs>
    </div>
  );
}
