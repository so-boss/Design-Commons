import React from "react"
import {AntPage} from "./../../../../src/components/";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import CoverageCard from "./../../../../src/components/experiements/coverage_control/CoverageCard";
import './../../../../src/css/custom.scss'
import './../../../../src/css/experiments/coverage_control/styles.scss'

const theme = createMuiTheme({
  overrides: {
    root: {
      fontFamily: 'rtraleway'
    },
    MuiCard: {
      root: {
        padding: "24px"
      }
    },
    MuiCardHeader: {
      root:{
        padding:"initial"
      }
    },
    MuiCardContent: {
      root:{
        padding:"initial"
      }
    },
    MuiSlider: {
      root:{
        height:"initial",
        position:"initial"
      },
      color:"inherit",
      mark:{
        height:"6px",
        transform: "translateY(-2px)"
      },
      markLabel: {},
    },
    MuiButton: {
      color:"#0B1421"
    },
    MuiTypography: {
      body1:{
        fontFamily: 'Cabin',
        fontWeight:400,
        fontSize:"18px",
        fontStyle:"normal",
        lineHeight:"25.2px",
        color:"#4D5160",
        letterSpacing:"initial"
      },
      body2:{
        fontFamily: 'rtraleway',
        fontWeight:700,
        fontSize:"14px",
        fontStyle:"normal",
        lineHeight:"19.6px",
        textAlign:"left",
        color:"#4D5160",
        letterSpacing:"initial"
      },
      h5:{
        fontFamily: 'inherit',
        fontWeight:700,
        fontSize:"23px",
        lineHeight:"34px",
        marginTop:"0 !important",
        letterSpacing:"initial"
      },
      h6:{
        fontFamily: 'rtraleway',
        fontWeight:700,
        fontSize:"18px",
        lineHeight:"25.2px",
        textAlign:"center",
        color:"#0B1421",
        letterSpacing:"initial"
      }
    }
  },
});


function Lab(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || "lab";

  return (
    <svg height="48" width="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g>
        <path d="M19,9v14.6748L7.81152,39.05957c-1.1123,1.52832-1.26953,3.52441-0.41211,5.20898S9.96484,47,11.85547,47 h24.28906c1.89062,0,3.59863-1.04688,4.45605-2.73145s0.7002-3.68066-0.41211-5.20898L29,23.6748V9H19z" fill="#E6E6E6"/>
        <path d="M32.125,9c0.55273,0,1-0.44727,1-1V2c0-0.55273-0.44727-1-1-1H16c-0.55273,0-1,0.44727-1,1v6 c0,0.55273,0.44727,1,1,1h3h10H32.125z" fill="#E6E6E6"/>
        <path d="M30.10834,32h-12.2168l-6.84564,9.41309c-0.22559,0.30957-0.25586,0.69922-0.08203,1.04102 C11.13867,42.7959,11.47168,43,11.85547,43h24.28906c0.38379,0,0.7168-0.2041,0.8916-0.5459 c0.17383-0.3418,0.14355-0.73145-0.08301-1.04199L30.10834,32z" fill="#72C472"/>
        <rect height="3" width="10" fill="#D1D1D1" x="19" y="9"/>
        <circle cx="20" cy="39" fill="#9EDB9E" r="2"/>
        <circle cx="27" cy="37" fill="#9EDB9E" r="2"/>
      </g>
    </svg>
  );
};

export default function Home() {
  return (
    <AntPage title="Coverage Experiments" icon="lab">
      <ThemeProvider theme={theme}>
        <Typography variant="body2" component="div">
          Interactive Designs
        </Typography>
        <ul type="experiments">
          <li><a href="task1">One</a></li>
          <li><a href="task2">Two</a></li>
          <li><a href="task3">Three</a></li>
        </ul>
      </ThemeProvider>
    </AntPage>
  );
}