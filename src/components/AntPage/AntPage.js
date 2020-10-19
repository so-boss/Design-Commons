import React from "react";

import {
  Tag,
  PageHeader,
  Card,
  Typography,
} from 'antd';

import './../../../static/ant/antd.css';
import './AntPage.scss';

//import '@site/docs/guidelines.scss';

export default function AntPage ({title, icon, summary, children}) {
  const Content = ({ children }) => {
    return (
      <div style={{ flex: 1 }}>{children}</div>
    )
  }


  let routes = [
    {
      path: 'index',
      breadcrumbName: 'Design Guidelines',
    }
  ];

  if(title) {
    routes.push({
      path: 'first',
      breadcrumbName: title,
    })
  }

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
