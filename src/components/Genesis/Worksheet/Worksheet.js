import React, { useState } from 'react';
import { Paper, Divider, Button, FormControl, MenuItem, InputLabel, Select, NativeSelect, InputBase } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles, withStyles} from '@material-ui/core/styles';
const _ = require('lodash');

import { Dropdown, Popup, Header } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
// import {limits, maps} from "./data.js";

import './../../../../src/css/custom.scss';
import './Worksheet.scss';


// function formatSelectedLimit(value) {
//   const selectedValue = value.split("-");
//   let label;
//   if(selectedValue[1]) {
//     label = format(selectedValue[0]) + " person <b /> " + format(selectedValue[1]) + " incident";
//   } else {
//     label = format(selectedValue[0] + " incident");
//   }
//
//   return labe
//
//   setLimit(selectedValue);
// }

const LimitSelector = ({type, initialLimit}) => {
  let initValue = initialLimit;
  if(!initValue) {
    initValue = [];
  }
  const [limit, setLimit] = React.useState(limit);
  const [formattedLimit, setFormattedLimit] = React.useState(limitChanged(initValue).formattedLimit);

  function limitChanged(value) {
    console.log(value)
    let selectedValue = value;
    let label;
    if(!selectedValue || selectedValue.length<1) {
      selectedValue=[];
      label="";
    } else if(selectedValue[1]) {
      label = format(selectedValue[0]) + " person <b><b/> " + format(selectedValue[1]) + " incident";
    } else {
      label = format(selectedValue[0] + " incident");
    }

    return {
      selectedValue: selectedValue,
      formattedLimit: label
    }
  }

  const handleChange = (event, opt) => {
    limitChanged(opt.value.split("-"));
  };

  const handleClick = (event, opt) => {
    var x = limitChanged(opt.value.split("-"));

    setLimit(x.selectedValue);
    setFormattedLimit(x.formattedLimit)
  }

  //setFormattedLimit(limitChanged(limit).formattedLimit);



  // Liability Limits (bodily, property)
  const limits = {
    bodily:[
      [15,30],
      [25,50],
      [50,100],
      [100,300],
      [300,500],
      [500,500],
      [500,1000],
      [1000,1000]
    ],
    property:[
      [10],
      [25],
      [50],
      [100],
      [300],
      [500],
      [1000]
    ]
  }
  function format(num, max) {
    return "$"+num+"K";
  }

  // filterLimits([[15,30], [25,50], ...], 50)
  function filterLimits(limits, max, per) {
    var filteredSet = {
      enabled: [],
      disabled: []
    };

    filteredSet.enabled = _.filter(limits, function(limit) {
      if(limit[1]) {
        return limit[1]<=max;
      }
      return limit[0]<=max;
    });
    filteredSet.disabled = _.filter(limits, function(limit) {
      if(limit[1]) {
        return limit[1]>max;
      }
      return limit[0]>max;
    });

    return filteredSet;
  }
  const EnabledItem = ({item}) => (
      <Dropdown.Item
        onClick={handleClick}
        value={item.join("-")}
      >
        {item[1]
          ? format(item[0]) + " 🞄 " + format(item[1])
          : format(item[0])
        }
      </Dropdown.Item>
    )
  const DisabledItems = ({items}) => {
    const listItems = items.map((item) => {
      if(item.length<2) {
        return (<div class="item"> {format(item[0])}</div>);
      }
      return (<div class="item"> {format(item[0]) + " 🞄 " + format(item[1])}</div>);
    });

    return listItems;
  }
  const EnabledItems = ({items}) => {
    const listItems = items.map((item) => {

      return (<EnabledItem item={item}/>)
    });

    return listItems;
  }

  const items = filterLimits(limits[type], 500)

  return (
    <div dropdown="container">
      <Dropdown
        text="Limits"
        labeled
        floating
        button
        onChange={handleChange}
      >
        <Dropdown.Menu>
          <EnabledItems items={items.enabled} />
          <Popup
            popup="container"
            trigger={<div items="disabled"><DisabledItems items={items.disabled} /></div>}
            position='right center'
            inverted
            content="Increase Your Bodily Injury limits to get more __________ coverage."
          />

        </Dropdown.Menu>
      </Dropdown>
      <div label="selectedLimit" dangerouslySetInnerHTML={{__html: formattedLimit}} />
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(120),
      //height: theme.spacing(16),
      padding: theme.spacing(5)
    },
  },
}));

const Section = ({title, summary, description, description_expanded, alert_upper, alert_lower, initialLimit, limitSelectorType}) => {
  const [expanded, setExpanded] = useState(description_expanded);

  function ShowWhat(props) {
    if(props.expanded==="true") {
      return <ShowLess />
    }
    return <ShowMore />
  };
  // onClick={() => setExpanded(prevExpanded => !prevExpanded)}
  function ShowMore() {
    return (
      <Button
        startIcon={<AddCircleIcon />}
        onClick={() => setExpanded("true")}
      >
        Show More
      </Button>
    )
  }
  function ShowLess() {
    return (
      <Button
        startIcon={<RemoveCircleIcon />}
        onClick={() => setExpanded("false")}
      >
        Show Less
      </Button>
    )
  }
  return (
    <Paper worksheet="section" elevation={5}>
      <div>
        <div section="header">
          <div>
            <div block="container">
              <div>{title}</div>
              <div>{summary}</div>
            </div>
            <LimitSelector
              initialLimit={initialLimit}
              type={limitSelectorType}
            />
          </div>

          {alert_upper &&
          <div alert="container">
            <InfoIcon />
            <div>Max Limit 100k person / 300K incident. Increase Your Property Damage limits to get more Uninsured Property Damage coverage.</div>
          </div>
          }
          <Divider />
        </div>
        <div section="body">
          <div expandable="container" expanded={expanded}>
            <div dangerouslySetInnerHTML={{__html: description.join("")}} />
            <ShowWhat expanded={expanded} />
          </div>
        </div>
        <div section="footer">
          {alert_lower &&
          <div alert="container">
            <InfoIcon />
            <div>Max Limit 100k person / 300K incident. Increase Your Property Damage limits to get more Uninsured Property Damage coverage.</div>
          </div>
          }
        </div>
      </div>
    </Paper>
  )
};

const Worksheet = ({children}) => {
  const classes = useStyles();
  return (
    <div worksheet="container" className={classes.root}>
      {
        children.map(child => (
          <Section
            title={child.title}
            summary={child.summary}
            initialLimit={child.initialLimit}
            limitSelectorType={child.limitSelectorType}
            description_expanded={child.description_expanded}
            description={child.description}
            alert_upper={child.alert_upper}
            alert_lower={child.alert_lower}

          />
        ))
      }
    </div>
  );
}

export default Worksheet;