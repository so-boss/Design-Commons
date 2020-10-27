import React from "react"
import { Card, CardHeader, CardContent, Slider, Typography, FormControl, InputLabel, NativeSelect, InputBase, Select } from '@material-ui/core';
import {limits, maps} from "./data.js";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './../../../../src/css/custom.scss'
import './CoverageCard.scss'

// function ValueLabelComponent(props) {
//   const { children, open, value } = props;
//
//   return (
//     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.number.isRequired,
// };
//
// const limits = [
//   {
//     value: 0,
//     label: '$25K / 50K',
//   },
//   {
//     value: 100,
//     label: '$500,000 / $500,000',
//   },
// ];

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
      <Typography variant="body2" component="div">
        <div>
          <span>{labels.person + " / "}</span>
          <span>{labels.max}</span>
        </div>
      </Typography>
      <Typography variant="h6" component="div">
        <div>
          <span>{amounts.person + " / "}</span>
          <span>{amounts.max}</span>
        </div>
      </Typography>
    </div>
  );
}

const getLimits = (limitList) => {
  var list = [];
  limitList.map(limit => {
    list.push({
      value:limit.person
    })
  })
  return list;
}


function valuetext(value) {
  return `$${value}K`;
}

function valueLabelFormat(value) {
  return `$${value}K`;
  //return getLimits(limits).findIndex((mark) => mark.person === value) + 1;
}

function getLimitMaps(person) {
  let maxes = maps.limits[person];
  if(!maxes) {
    let maxes = {max:["??"]}
  }

  return maxes.max;
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
      coverage:100
    }
    //const [value, setValue] = React.useState(30);

    this.handleChange = (event, newValue) => {
      //setValue(newValue);
      this.setState(state => ({
        coverage:newValue
      }))
    };
  }

  render() {
    const classes = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(2),
      },
    }));

    const marks = getLimits(limits);
    return (
      <>
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
            <div wrapper="slider">
              <Slider
                value={this.state.coverage}
                onChange={this.handleChange}
                //aria-labelledby="continuous-slider"
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                defaultValue={[100]}
                min={25}
                max={500}
                step={null}
                valueLabelDisplay="auto"
                labelBefore="$25,000 / $50,000K"
                labelAfter="$500,000 / $500,000K"
                marks={marks}
                //valueLabelDisplay="auto"
              />
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
      </>
    );
  }
}