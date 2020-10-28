import React from "react"
import {AntPage} from "./../../../../src/components/";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
        textAlign:"center",
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

export default function Home() {
  return (
    <AntPage title="Coverage Experiments" icon="">
      <ThemeProvider theme={theme}>
        <CoverageCard controlType="slider"/>
      </ThemeProvider>
    </AntPage>
  );
}