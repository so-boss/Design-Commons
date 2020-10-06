import React from "react";
import {
  Typography,
} from 'antd';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {
  FontFamily,
  FontSize,
  Token
} from '@site/docs/guidelines/components';

import { typography } from '@site/static/genesis';
// import {
//   brands,
// } from '@site/docs/guidelines/palettes'

import {
  CSAA,
  Mobilitas
} from '@site/docs/guidelines/typography/index';

const { Paragraph, Title } = Typography;

import '@site/static/ant/antd.css';

export default function Brands () {
  return (
    <Tabs
      defaultValue="csaa"
      values={[
        {
          label: 'AAA Insurance',
          value: 'csaa',
          description: "Brand Typography"
        }
      ]}>
      <TabItem value="csaa">
        <Title level={4}>Family</Title>
        <Paragraph>AAA’s standard web font is Helvetica Bold and Regular faces. Large bold type should be used to establish clear information hierarchy. Substantial body copy should not use a size smaller than 14px.</Paragraph>

        <Token type="typefaces" />
        <Token type="textstyles" />
        <Title level={4}>Sizes</Title>
        <Paragraph>Our base font size is 14px to ensure the best user reading efficiency on most common monitors based on display screen reading distance (50 cm) and optimal reading angle (0.3).</Paragraph>
        <FontSize sizes={[
          {
            label:"L / LARGEST (24px)",
            size:"24px"
          },
          {
            label:"M / MEDIUM (16px)",
            size:"16px"
          },
          {
            label:"S / SMALL (14px)",
            size:"14px"
          },
          {
            label:"XS / SMALLEST (12px)",
            size:"12px"
          }
        ]}/>
        <CSAA />
      </TabItem>
      <TabItem value="mobilitas">
        <FontFamily />
        <FontSize sizes={[
          {
            label:"XXL / LARGEST (48px)",
            size:"48px"
          },
          {
            label:"XL / EXTRA LARGE (28px)",
            size:"28px"
          },
          {
            label:"L / LARGE (18px)",
            size:"18px"
          },
          {
            label:"S / SMALL (16px)",
            size:"16px"
          },
          {
            label:"XS / SMALLEST (14px)",
            size:"14px"
          }
        ]}/>
        <Mobilitas />
      </TabItem>
    </Tabs>
  );
}
