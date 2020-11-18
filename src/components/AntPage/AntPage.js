import React from "react";

// import './../../../static/ant/antd.css';
import './AntPage.scss';

export default function AntPage ({summary, children}) {
  const Content = ({children }) => {

    return (
      <div>{children}</div>
    )
  }

  return (
    <Content summary={summary}>{children}</Content>
  );
}