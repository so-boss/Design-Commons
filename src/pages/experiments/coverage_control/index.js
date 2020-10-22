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
    // Style sheet name ⚛️
    MuiSlider: {
      color:"inherit",
      // Name of the rule
      markLabel: {
        // Some CSS

      },
    },
    MuiTypography: {
      body1:{
        fontFamily: 'Cabin',
        fontWeight:400,
        fontSize:"18px",
        lineHeight:"25px"

      },
      h5:{
        fontFamily: 'inherit',
        fontWeight:700,
        fontSize:"23px",
        lineHeight:"34px",
        marginTop:"0 !important"
      }

    }
  },
});

export default function Coverages() {
  const bull = <span>•</span>;
  return (
    <AntPage title="Coverage Experiments" icon="">
      <ThemeProvider theme={theme}>

      <Card type="coverage" raised={true}>
        <CardHeader title="Bodily Injury" />
        <CardContent>
          {/*<Typography color="textSecondary" gutterBottom>*/}
          {/*  Bodily Injury*/}
          {/*</Typography>*/}
          <Typography color="textSecondary">
            AAA covers your damages and legal defense if you injure someone.
          </Typography>
          <div layout="center">
            <div>
              <Typography variant="body2" component="p">
                Limit per person / per accident
              </Typography>
              <Typography variant="h6" component="p">
                $100,000 / $300,000
              </Typography>
            </div>
          </div>
          {/*<Slider*/}
          {/*  ValueLabelComponent={ValueLabelComponent}*/}
          {/*  aria-label="custom thumb label"*/}
          {/*  defaultValue={20}*/}
          {/*/>*/}
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
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </ThemeProvider>
    </AntPage>
  )
}