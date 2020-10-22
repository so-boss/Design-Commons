import React from "react"
import PropTypes from 'prop-types';
// import {Typography, Tabs, Card, Avatar} from "antd";
import {AntPage} from "./../../../../src/components/";
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import Slider from '@material-ui/core/Slider';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, Slider, Button, Typography, Tooltip } from '@material-ui/core';
import './../../../../src/css/custom.scss'
import './styles.scss'

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const marks = [
  {
    value: 0,
    label: '$25K / 50K',
  },
  {
    value: 100,
    label: '$500,000 / $500,000',
  },
];
function valuetext(value) {
  return `${value}`;
}

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

const CardBody = ({children, description}) => {
  return (
    <div container="body">
      <CardContent>
        {description && (
          <Typography>
            {description}
          </Typography>
        )}
        {children}
      </CardContent>
    </div>
  )
}

const CardFooter = ({children}) => {
  return (
    <div container="footer">
      <div>
        {children}
      </div>
    </div>
  )
}

const Limit = ({labels, amounts}) => {
  return (
    <div card="limit">
      <Typography variant="body2" component="p">
        <div>
          <span>{labels.person + " / "}</span>
          <span>{labels.max}</span>
        </div>
      </Typography>
      <Typography variant="h6" component="p">
        <div>
          <span>{amounts.person + " / "}</span>
          <span>{amounts.max}</span>
        </div>
      </Typography>
    </div>
  );
}
export default function Coverages() {

  return (
    <AntPage title="Coverage Experiments" icon="">
      <ThemeProvider theme={theme}>

      <Card container="coverage" raised={true}>
        <CardHeader title="Bodily Injury" container="header" />
        <CardBody
          description="AAA covers your damages and legal defense if you injure someone."
        >
          <div layout="center">
            <Limit
              labels={{
                person:"Limit per person",
                max:"per accident"
              }}
              amounts={{
                person:"$100,000",
                max:"$300,000"
              }}
            />
          </div>
        </CardBody>
        <CardFooter>
          <div wrapper="slider">
            <Slider
              track={false}
              aria-labelledby="track-false-range-slider"
              getAriaValueText={valuetext}
              defaultValue={[20]}
              step={10}
              labelBefore="$25,000 / $50,000K"
              labelAfter="$500,000 / $500,000K"
              // marks={marks}
            />
          </div>
        </CardFooter>
      </Card>
      </ThemeProvider>
    </AntPage>
  )
}