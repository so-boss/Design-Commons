import React from "react"

import {Typography} from 'antd';
import {AntPage} from "./../../../src/components/";

import './../../../src/css/custom.scss'

const { Paragraph, Title } = Typography;

export default function Home() {
  return (
    <AntPage>
      <Title level={2}>Icons</Title>
    </AntPage>
  )
}