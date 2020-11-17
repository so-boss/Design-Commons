import React from "react"
import {AntPage} from "./../../../../src/components/";
import { Typography } from '@material-ui/core';

import './../../../../src/css/custom.scss'
import './../../../../src/css/experiments/coverage_control/styles.scss'

export default function Home() {
  return (
    <AntPage>
      <Typography variant="body2" component="div">
        Interactive Designs
      </Typography>
      <ul type="experiments">
        <li><a href="/experiments/coverage_control/task1">One</a></li>
        <li><a href="/experiments/coverage_control/task2">Two</a></li>
        <li><a href="/experiments/coverage_control/task3">Three</a></li>
      </ul>
    </AntPage>
  );
}