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

import '@site/docs/guidelines.scss';

const { Paragraph, Title } = Typography;
const { Meta } = Card;

let routes = [
  {
    path: 'index',
    breadcrumbName: 'Design Guidelines',
  },
  {
    path: 'first',
    breadcrumbName: 'Color',
  }
];

export const Content = ({ children }) => {
  return (
    <div style={{ flex: 1 }}>{children}</div>
  )
}


export default function AntPage ({title, icon, summary, children}) {
  routes[1].breadcrumbName = title;
  return (
    <div layout="page">
      <PageHeader
        title={title}
        className="site-page-header"
        tags={<Tag color="blue">Under Development</Tag>}
        avatar={{
          src: `/icons/sprite/${icon}.svg`,
          shape: 'square',
        }}
        breadcrumb={{routes}}
      >
        <Content summary={summary}>{children}</Content>
      </PageHeader>
    </div>
  );
}
