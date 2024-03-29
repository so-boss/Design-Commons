import React from "react"
import { IconButton, Card, CardHeader, CardContent, Slider, Typography, FormControl, InputLabel, NativeSelect, InputBase, Select } from '@material-ui/core';
import NumberFormat from 'react-number-format';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {limits, maps} from "./data.js";
import {createMuiTheme, makeStyles, ThemeProvider, withStyles} from '@material-ui/core/styles';
import './../../../../src/css/custom.scss';
import './DeductibleCard.scss';

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

const Separator = ({char}) => (
  <span type="separator">{char||"/"}</span>
)
const Label = ({label}) => (
  <span>{label}</span>
)
const Amount = ({value}) => (
  <NumberFormat
    value={value}
    displayType={'text'}
    thousandSeparator={true}
    prefix={'$'}
    renderText={value => <span>{value}</span>}
  />
)

const Limit = ({labels, amounts}) => {
  return (
    <div card="limit">
      <Typography variant="body2" component="div">
        <div>
          <Label label={labels.person} />
        </div>
      </Typography>
      <Typography variant="h6" component="div">
        <div>
          <Amount value={amounts.person} />
        </div>
      </Typography>
    </div>
  );
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  formControl: {
      width: '100%'
  },
  label:{
    transform: "initial"
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'RT Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
  margin: {

  },
}));

const theme = createMuiTheme({
  overrides: {
    root: {
      fontFamily:  "'RT Raleway', sans-serif"
    },
    MuiCard: {
      root: {
        padding: "24px",
        fontFamily: "'RT Raleway', sans-serif",
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
    MuiFormControl:{
      root: {
        fontFamily: "'RT Raleway', sans-serif"
      },
      label: {
        fontFamily: "'RT Raleway', sans-serif"
      }
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
        fontFamily: "'RT Raleway', sans-serif",
        fontWeight:700,
        fontSize:"14px",
        fontStyle:"normal",
        lineHeight:"19.6px",
        textAlign:"center",
        color:"#4D5160",
        letterSpacing:"initial"
      },
      h5:{
        fontFamily:  "'RT Raleway', sans-serif",
        fontWeight:700,
        fontSize:"23px",
        lineHeight:"34px",
        marginTop:"0 !important",
        letterSpacing:"initial"
      },
      h6:{
        fontFamily:  "'RT Raleway', sans-serif",
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

export default class CoverageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverage:Math.floor(limits.length/2)
    }

    this.handleControlChange = (event, newValue) => {
      let val = newValue;
      if(val===undefined) {
        val = event.target.value;
      }

      this.setState(state => ({
        coverage:val
      }))
    };

    this.handleMinusClick = () => {
      const activeIndex = this.state.coverage;
      if(!limits[activeIndex-1]) {
        return false;
      }

      this.setState(state => ({
        coverage:activeIndex-1
      }))
    };

    this.handlePlusClick = () => {
      const activeIndex = this.state.coverage;
      if(!limits[activeIndex+1]) {
        return false;
      }

      this.setState(state => ({
        coverage:activeIndex+1
      }))
    };
  }

  render() {
    const classes = makeStyles((theme) => ({
      margin: {

      },
    }));

    return (
      <ThemeProvider theme={theme}>
        <Card container="coverage" raised={true}>
          <CardHeader title="Deductible" container="header"/>
          <CardBody
            description="Your payment, per incident until the Dwelling limit is met."
          >
            <div layout="center">
              <Limit
                labels={{
                  person: "Deductible"
                }}
                amounts={{
                  person: limits[this.state.coverage].person
                }}
              />
            </div>
          </CardBody>
          <CardFooter>
            {
              this.props.controlType==="slider" &&
              (
                <div wrapper="slider">
                  <Slider
                    value={this.state.coverage}
                    onChange={this.handleControlChange}
                    aria-labelledby="discrete-slider"
                    defaultValue={3}
                    min={0}
                    max={limits.length - 1}
                    step={1}
                    valueLabelDisplay="off"
                    labelBefore="$0"
                    labelAfter="$2,000"
                    marks
                  />
                </div>
              )
            }
            {
              this.props.controlType==="select" &&
              (
                <div wrapper="select">
                  <FormControl>
                    <InputLabel htmlFor="demo-customized-select-native">Deductible Amount</InputLabel>
                    <NativeSelect
                      id="demo-customized-select-native"
                      value={this.state.coverage}
                      onChange={this.handleControlChange}
                      input={<BootstrapInput />}
                    >
                      <option value="0">$0</option>
                      <option value="1">$100</option>
                      <option value="2">$250</option>
                      <option value="3">$500</option>
                      <option value="4">$1,000</option>
                      <option value="5">$2,000</option>
                    </NativeSelect>
                  </FormControl>
                </div>
              )
            }
            {
              this.props.controlType==="minusplus" &&
              (
                <div wrapper="iconbuttons">
                  <IconButton
                    aria-label="decrease"
                    onClick={this.handleMinusClick}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>

                  <div type="spacer" />

                  <IconButton
                    aria-label="increase"
                    onClick={this.handlePlusClick}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              )
            }
          </CardFooter>
        </Card>
      </ThemeProvider>
    );
  }
}