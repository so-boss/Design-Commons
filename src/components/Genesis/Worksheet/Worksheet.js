import React, { useState } from 'react';
import { Paper, Divider, Button, FormControl, MenuItem, InputLabel, Select, NativeSelect, InputBase } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles, withStyles} from '@material-ui/core/styles';

import { Dropdown, Popup, Header } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
// import {limits, maps} from "./data.js";

//import './../../../../../src/css/custom.scss';
import './Worksheet.scss';

const LimitSelector = () => {
  const [limit, setLimit] = React.useState("$50k person / $100K incident");
  const handleChange = (event, opt) => {
    let label = opt.value.split(" / ");
    label = label[0] + " person / " + label[1] + " incident";
    setLimit(label);
  };

  const options = [
    {
      key: 1,
      value: "$15k / $30K",
      text: "$15k / $30K",
    },
    { key: 2, text: "$25k / $50K", value: "$25k / $50K" },
    { key: 3, text: "$50k / $100K", value: "$50k / $100K" },
    { key: 4, text: "$100k / $300K", value: "$100k / $300K" },
    {
      key: 5,
      disabled: true,
      text: "$300k / $500K",
      value: "$300k / $500K",
      content: (
        <Popup
          popup="container"
          trigger={<Dropdown.Item as="span">$300k / $500K</Dropdown.Item>}
          position='right center'
          inverted
          content="Increase Your Bodily Injury limits to get more __________ coverage."
        />
      )
    },
    {
      key: 6,
      disabled: true,
      text: "$500k / $500K",
      value: "$500k / $500K",
      content: (
        <Popup
          popup="container"
          trigger={<Dropdown.Item as="span">$500k / $500K</Dropdown.Item>}
          position='right center'
          inverted
          content="Increase Your Bodily Injury limits to get more __________ coverage."
        />
      )
    },
    {
      key: 7,
      disabled: true,
      text: "$500k / $1M",
      value: "$500k / $1M",
      content: (
        <Popup
          popup="container"
          trigger={<Dropdown.Item as="span">$500k / $1M</Dropdown.Item>}
          position='right center'
          inverted
          content="Increase Your Bodily Injury limits to get more __________ coverage."
        />
      )
    },
    {
      key: 7,
      disabled: true,
      text: "$1M / $1M",
      value: "$1M / $1M",
      content: (
        <Popup
          popup="container"
          trigger={<Dropdown.Item as="span">$1M / $1M</Dropdown.Item>}
          position='right center'
          inverted
          content="Increase Your Bodily Injury limits to get more __________ coverage."
        />
      )
    },
  ]

  return (
    <div dropdown="container">
      <Dropdown
        text="Limits"
        labeled
        options={options}
        floating
        button
        onChange={handleChange}
      />
      <div>
        {limit}
      </div>
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

const Worksheet = ({title, summary, children, description_expanded, alert_upper, alert_lower}) => {
  const classes = useStyles();
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
    <div worksheet="container" className={classes.root}>
      <Paper worksheet="section" elevation={5}>
        <div>
          <div section="header">
            <div>
              <div block="container">
                <div>{title}</div>
                <div>{summary}</div>
              </div>
              <LimitSelector />
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
              <div>
                {children}
              </div>
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
    </div>
  );
}

export default Worksheet;