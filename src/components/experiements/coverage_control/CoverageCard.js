import React from "react"
import { IconButton, Card, CardHeader, CardContent, Slider, Typography, FormControl, InputLabel, NativeSelect, InputBase, Select } from '@material-ui/core';
import NumberFormat from 'react-number-format';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {limits, maps} from "./data.js";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './../../../../src/css/custom.scss';
import './CoverageCard.scss';

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
          <Separator />
          <Label label={labels.max} />
        </div>
      </Typography>
      <Typography variant="h6" component="div">
        <div>
          <Amount value={amounts.person} />
          <Separator />
          <Amount value={amounts.max} />
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

    root:{
      width: '100%'
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
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
    margin: theme.spacing(1),
  },
}));

export default class CoverageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverage:Math.floor(limits.length/2)
    }

    this.handleControlChange = (event, newValue) => {
      let val = newValue;
      if(!val) {
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
        margin: theme.spacing(2),
      },
    }));

    return (
        <Card container="coverage" raised={true}>
          <CardHeader title="Bodily Injury" container="header"/>
          <CardBody
            description="AAA covers your damages and legal defense if you injure someone."
          >
            <div layout="center">
              <Limit
                labels={{
                  person: "Limit per person",
                  max: "per accident"
                }}
                amounts={{
                  person: limits[this.state.coverage].person,
                  max: limits[this.state.coverage].max //getLimitMaps(this.state.coverage).join(",000 ")+",000"
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
                    labelBefore="$25,000 / $50,000"
                    labelAfter="$500,000 / $500,000"
                    marks
                  />
                </div>
              )
            }
            {
              this.props.controlType==="select" &&
              (
                <div wrapper="select">
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Limit per person / per accident</InputLabel>
                    <NativeSelect
                      id="demo-customized-select-native"
                      value={this.state.coverage}
                      onChange={this.handleControlChange}
                      input={<BootstrapInput />}
                    >
                      <option value="0">$25,000 / $50,000</option>
                      <option value="1">$30,000 / $60,000</option>
                      <option value="2">$50,000 / $100,000</option>
                      <option value="3">$100,000 / $200,000</option>
                      <option value="4">$100,000 / $300,000</option>
                      <option value="5">$300,000 / $300,000</option>
                      <option value="6">$300,000 / $500,000</option>
                      <option value="7">$500,000 / $500,000</option>
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
    );
  }
}

/*
<br /><br />
<Card container="coverage" raised={true}>
  <CardHeader title="Bodily Injury" container="header"/>
  <CardBody
    description="AAA covers your damages and legal defense if you injure someone."
  >
    <div layout="center">
      <Limit
        labels={{
          person: "Limit per person",
          max: "per accident"
        }}
        amounts={{
          person: "$"+this.state.coverage+",000",
          max: getLimitMaps(this.state.coverage).join(",000 ")+",000"
        }}
      />
    </div>
  </CardBody>
  <CardFooter>
    <div wrapper="select">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">Coverage Limits</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={309960}
          //onChange={this.handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={259950}>$25,000 / $50,000</option>
          <option value={309960}>$30,000 / $60,000</option>
          <option value={5099100}>$50,000 / $100,000</option>
          <option value={10099200}>$100,000 / $200,000</option>
          <option value={10099300}>$100,000 / $300,000</option>
          <option value={30099300}>$300,000 / $300,000</option>
          <option value={30099500}>$300,000 / $500,000</option>
          <option value={50099500}>$500,000 / $500,000</option>
        </NativeSelect>
      </FormControl>
    </div>
  </CardFooter>
</Card>

<br /><br />
<Card container="coverage" raised={true}>
  <CardHeader title="Bodily Injury" container="header"/>
  <CardBody
    description="AAA covers your damages and legal defense if you injure someone."
  >
    <div layout="center">
      <Limit
        labels={{
          person: "Limit per person",
          max: "per accident"
        }}
        amounts={{
          person: "$"+this.state.coverage+",000",
          max: getLimitMaps(this.state.coverage).join(",000 ")+",000"
        }}
      />
    </div>
  </CardBody>
  <CardFooter>
    <div wrapper="iconbuttons">
      <IconButton color="primary" aria-label="reduce">
        <RemoveCircleOutlineIcon />
      </IconButton>
      <div type="spacer">
        {"$"+this.state.coverage+",000"}
      </div>
      <IconButton color="primary" aria-label="reduce">
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  </CardFooter>
</Card>
*/
