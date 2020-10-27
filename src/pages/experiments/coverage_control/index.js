import React from "react"
import {AntPage} from "./../../../../src/components/";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CoverageCard from "./CoverageCard";
import './../../../../src/css/custom.scss'
import './styles.scss'

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
      markLabel: {},
    },
    MuiTypography: {
      body1:{
        fontFamily: 'Cabin',
        fontWeight:400,
        fontSize:"18px",
        fontStyle:"normal",
        lineHeight:"25.2px",
        color:"#4D5160"
      },
      body2:{
        fontFamily: 'rtraleway',
        fontWeight:700,
        fontSize:"14px",
        fontStyle:"normal",
        lineHeight:"19.6px",
        textAlign:"center",
        color:"#4D5160"
      },
      h5:{
        fontFamily: 'inherit',
        fontWeight:700,
        fontSize:"23px",
        lineHeight:"34px",
        marginTop:"0 !important"
      },
      h6:{
        fontFamily: 'rtraleway',
        fontWeight:700,
        fontSize:"18px",
        lineHeight:"25.2px",
        textAlign:"center",
        color:"#0B1421"
      }
    }
  },
});

export default function Home() {
  return (
    <AntPage title="Coverage Experiments" icon="">
      <ThemeProvider theme={theme}>
        <CoverageCard />
      </ThemeProvider>
    </AntPage>
  );
}