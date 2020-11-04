import React from "react";

import './../../../static/ant/antd.css';
import './AntPage.scss';

export default function AntPage ({summary, children}) {
  const Content = ({children }) => {

    return (
      <div style={{ flex: 1 }}>{children}</div>
    )
  }

  return (
      <Content summary={summary}>{children}</Content>
  );
}