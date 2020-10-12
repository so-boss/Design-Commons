import React from "react";
import {
  Typography,
} from 'antd';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {
  FontFamily,
  FontSize,
  Token,
  Typeface
} from '@site/docs/guidelines/components';

import {
  CSAA
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
        <Title level={4}>RT Raleway</Title>
        <Typeface family="rtraleway" style="Regular" weight="400"/>
        <Typeface family="rtraleway" style="Bold" weight="700"/>

        <Title level={4}>RT Raleway</Title>
        <Typeface family="cabin" style="Regular" weight="400"/>
        <Typeface family="cabin" style="Bold" weight="700"/>
        <Token type="typefaces" />
        <Token type="textstyles" />
        <Title level={4}>Sizes</Title>
        <Paragraph>Our base font size is 14px to ensure the best user reading efficiency on most common monitors based on display screen reading distance (50 cm) and optimal reading angle (0.3).</Paragraph>
      </TabItem>
    </Tabs>
  );
}
