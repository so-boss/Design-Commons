import React from "react"
import {AntPage} from "./../../../../src/components/";
import DeductibleCard from "./../../../../src/components/experiements/deductible_control/DeductibleCard";
import './../../../../src/css/custom.scss'
import './../../../../src/css/experiments/coverage_control/styles.scss'

export default function Home() {
  return (
    <AntPage>
      <DeductibleCard controlType="select"/>
    </AntPage>
  );
}