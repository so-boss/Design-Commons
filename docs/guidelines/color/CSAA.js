import React from "react";

import {
  Typography
} from 'antd';

const { Paragraph, Title } = Typography;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {
  ColorTable
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
          <Title level={4}>Additional Product Colors</Title>
          <ColorTable colors={products.mypolicy.colors} tier="mypolicy" />
          <Title level={4}>Hover States</Title>
          <ColorTable colors={products.mypolicy.hovers} tier="mypolicy" />
          <Title level={4}>Neutrals</Title>
          <ColorTable colors={products.mypolicy.neutrals} tier="mypolicy" />
          <Title level={3}>Deprecated Colors</Title>
          <p>Migrated to a nearest neighbor. We want these gone.</p>
          <ColorTable colors={products.mypolicy.oldies} tier="mypolicy" />
        </TabItem>
        <TabItem value="quote">
          <Title level={4}>Additional Product Colors</Title>
          <ColorTable colors={products.quote.colors} tier="quote" />
          <Title level={4}>Hover States</Title>
          <ColorTable colors={products.quote.hovers} tier="mypolicy" />
          <Title level={4}>Neutrals</Title>
          <ColorTable colors={products.quote.neutrals} tier="quote" />
        </TabItem>
        <TabItem value="insurance_portal">
          <Title level={4}>Additional Product Colors</Title>
          <ColorTable colors={products.insurance_portal.colors} tier="ip" />
          <Title level={4}>Neutrals</Title>
          <ColorTable colors={products.insurance_portal.neutrals} tier="ip" />
          <Title level={3}>Deprecated Colors</Title>
          <Paragraph>Migrated to a nearest neighbor. We want these gone.</Paragraph>
          <ColorTable colors={products.insurance_portal.oldies} tier="mypolicy" />
        </TabItem>
      </Tabs>
    </div>
  );
}
