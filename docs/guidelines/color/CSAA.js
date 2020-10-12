import React from "react";

import {
  Typography
} from 'antd';

const { Paragraph, Title } = Typography;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {
  ColorToken
} from '@site/src/components';

// import {
//   products
// } from '@site/docs/guidelines/palettes';

export default function CSAA () {
  return (
      <div layout="panel">
        <Title level={4}>Full Color Spectrum</Title>
        <Tabs
          defaultValue="blues"
          values={[
            {
              label: 'Blues',
              // icon: "blues",
              value: 'blues',
              description: "Actionable"
            },
            {
              label: 'Greys',
              // icon: "greys",
              value: 'greys',
              description: "Readable"
            },
            {
              label: 'Accents',
              // icon: "accents",
              value: 'accents',
              description: "Noticeable"
            },
          ]}>
          <TabItem value="blues">
            <ColorToken def_id="blue" type="spectrum"/>
          </TabItem>
          <TabItem value="greys">
            <ColorToken def_id="grey" type="spectrum"/>
          </TabItem>
          <TabItem value="accents">
            <ColorToken def_id="red" type="spectrum"/>
          </TabItem>
        </Tabs>
      </div>
  );
}