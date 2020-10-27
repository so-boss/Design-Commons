import React from "react"
import { Card, CardHeader, CardContent, Slider, Typography, Tooltip } from '@material-ui/core';
import {limits} from "./data.js";

import './../../../../src/css/custom.scss'
import './styles.scss'

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
  return `${value}°C`;
}

function valueLabelFormat(value) {
  console.log(value);

  return getLimits(limits).findIndex((mark) => mark.person === value) + 1;
}

export default class CoverageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverage:100
    }
    //const [value, setValue] = React.useState(30);

    this.handleChange = (event, newValue) => {
      console.log(newValue)
      //setValue(newValue);
      this.setState(state => ({
        coverage:newValue
      }))
    };
  }


//export default function Coverages() {
  // const [value, setValue] = React.useState(30);
  //
  // const handleChange = (event, newValue) => {
  //   console.log(newValue)
  //   setValue(newValue);
  // };

  // const handleInputChange = (event) => {
  //   setValue(event.target.value === '' ? '' : Number(event.target.value));
  // };

  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };
  render() {
    const marks = getLimits(limits);
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
                person: this.state.coverage,
                max: "$300,000"
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
              defaultValue={[30]}
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
    );
  }
}