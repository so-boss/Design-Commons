import React from "react";

import {
  Tag,
  PageHeader,
  Avatar,
  Card,
  Typography,
  Row
} from 'antd';

import '@site/static/ant/antd.css';
import './AntPage.scss';

const { Paragraph, Title } = Typography;
const { Meta } = Card;

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Design Guidelines',
  },
  {
    path: 'first',
    breadcrumbName: 'Color',
  }
];

const Paragraphs = ({paragraphs}) => (
  <>
    {paragraphs.map(paragraph => {
      return (
        <Paragraph>
          {paragraph}
        </Paragraph>
      );
    })}
  </>
);

const contents = (
  <div>
    <Paragraph component={Typography.Paragraph}>
      Our color system complies with four tier inheritance; starting
      with brand level, colors overiding those of the brand, must belong to to
      one of the three remaining tiers (business, product, project).
    </Paragraph>
    <Paragraph>
      We prefer to design with the HEX & RGBA color model, as our core
      deliverables are web based.
    </Paragraph>
    <div>
      <Title className="footer-title" level={4}>Brands</Title>
    </div>
  </div>
)

export const Content = ({ children, extraContent, summary }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
    </Row>
  )
}


export default function AntPage ({title, summary, children}) {
  return (
    <div layout="page">
      <PageHeader
        title={title}
        className="site-page-header"
        tags={<Tag color="blue">Under Development</Tag>}
        avatar={{
          src: '/icons/sprite/color_palette1.svg',
          shape: 'square',
        }}
        breadcrumb={{routes}}
      >
        <Content summary={summary}>{children}</Content>
      </PageHeader>
    </div>
  );
}
