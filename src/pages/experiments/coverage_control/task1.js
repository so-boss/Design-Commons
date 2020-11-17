import React from "react"
import {AntPage} from "./../../../../src/components/";
import CoverageCard from "./../../../../src/components/experiements/coverage_control/CoverageCard";
import './../../../../src/css/custom.scss'
import './../../../../src/css/experiments/coverage_control/styles.scss'

export default function Home() {
  return (
    <AntPage>
      <CoverageCard controlType="slider"/>
    </AntPage>
  );
}