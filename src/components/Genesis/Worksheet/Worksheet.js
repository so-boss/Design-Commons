import React, { useState, useRef } from 'react';
import { Paper, Divider, Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles } from '@material-ui/core/styles';
const _ = require('lodash');

import { Dropdown, Popup, Header } from 'semantic-ui-react'
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import 'semantic-ui-css/semantic.min.css'

import './../../../../src/css/custom.scss';
import './Worksheet.scss';


  $("body").data({
    $els: {
      sections:{},
      coverages:{}
    },
    coverages:{},
    limits: {},
    refs: {},
  })



const LimitSelector = ({id, type, initialLimit, limitSelectorType, indicatorMethod, tooltip}) => {
  //setupData();
  let initValue = initialLimit;
  if(!initValue) {
    initValue = [];
  }
  if(!window.limits) {
    window.limits = {}
  }
  window.limits[id] = {
    initValue: initValue
  }

  const [limit, setLimit] = React.useState(limit);
  const dropdown = useRef(null);

  function limitChanged(value) {
    let selectedValue = value;
    let label;
    if(!selectedValue || selectedValue.length<1) {
      selectedValue=[];
      label="";
    } else if(selectedValue[1]) {
      label = format(selectedValue[0]) + "<span>person</span> <b></b>" + format(selectedValue[1]) + "<span>incident</span>";
    } else {
      label = format(selectedValue[0]) + "<span>incident</span>";
    }

    return {
      selectedValue: selectedValue,
      formattedLimit: label
    }
  }

  var x = limitChanged(initValue);
  $("body").data("limits")[id] = {
    id: id,
    ref: dropdown,
    limit: x.selectedValue,
    formatted: x.formattedLimit
  }

  // const handleChange = (event, opt) => {
  //   limitChanged(opt.value.split("-"));
  // };

  const handleClick = (event, opt) => {
    const $item = $(event.target),
      $dropdown = $item.closest(".dropdown");

    if($item.is("[active=true]")) {
      return false;
    }

    $item
      .attr("active", true)
      .siblings().removeAttr("active");
    const x = limitChanged(opt.limits.split(","));

    $dropdown
      .data("active", {
        $el: $item,
        index: $item.index(),
        limit: x.selectedValue,
        formatted: x.formattedLimit
      })
      .siblings("[label=selectedLimit]").html(x.formattedLimit);
  }

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
        limits={item.join(",")}
        active={false}
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



  function getItems(which, callback) {
    let o = $("body").data("limits")[id];

    let max = o.limit[0];
    if(o.limit[1]) {
      max=o.limit[1];
    }
    if(limitSelectorType=="bodily") {
      max=1000000
    }
    const items = filterLimits(limits[type], max)
    if(callback) {
      return callback.apply($("body"), [items[which]]);
    }
    return items[which]
  }

  function getSelectedLimit(callback) {
    let o = $("body").data("limits")[id];

    setTimeout(function() {
      let ref = o.ref;
      let $dropdown = $(ref.current.ref.current)
      // o.limits = {
      //   person: o.limit[0],
      //   incident:o.limit[1]
      // }

      let matchingItem = $dropdown.children(".menu").find("[limits='"+o.limit.toString()+"']")
      matchingItem.attr("active", true);
    }, 1000)

    return callback.apply($("body"), [{__html:  $("body").data("limits")[id].formatted}]);
  };
  return (
    <div dropdown="container">
      <Dropdown
        id={id}
        ref={dropdown}
        text="Limits"
        labeled
        floating
        button
        //onChange={handleChange}
      >
        <Dropdown.Menu>
          <EnabledItems items={getItems("enabled", function(items) {
            return items
          })} />
          {(indicatorMethod==="tooltip")
            ? (<Popup
                popup="container"
                trigger={<div items="disabled"><DisabledItems items={getItems("disabled")} /></div>}
                position='right center'
                inverted
                content={tooltip}
              />)
            : <div items="disabled"><DisabledItems items={getItems("disabled")} /></div>
          }


        </Dropdown.Menu>
      </Dropdown>
      <div label="selectedLimit" dangerouslySetInnerHTML={getSelectedLimit(function(html) {
        return html
      })}/>
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

const Section = ({id, title, summary, description, indicatorMethod, description_expanded, alert_upper, alert_lower, tooltip, initialLimit, limitSelectorType}) => {
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

  //$("body").data("$els").sections[id] = {};
  return (
    <Paper worksheet="section" elevation={5} id={id}>
      <div>
        <div section="header">
          <div>
            <div block="container">
              <div>{title}</div>
              <div>{summary}</div>
            </div>
            <LimitSelector
              id={id}
              initialLimit={initialLimit}
              type={limitSelectorType}
              indicatorMethod={indicatorMethod}
              tooltip={tooltip}
              limitSelectorType={limitSelectorType}
            />
          </div>

          {alert_upper &&
          <div alert="container">
            <InfoIcon />
            <div>{alert_upper}</div>
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
            <div>{alert_lower}</div>
          </div>
          }
        </div>
      </div>
    </Paper>
  )
};

const Worksheet = ({indicatorMethod, children}) => {
  const classes = useStyles();
  return (
    <div worksheet="container" className={classes.root}>
      {
        children.map(child => (
          <Section
            id={child.id}
            title={child.title}
            summary={child.summary}
            indicatorMethod={indicatorMethod}
            initialLimit={child.initialLimit}
            limitSelectorType={child.limitSelectorType}
            description_expanded={child.description_expanded}
            description={child.description}
            alert_upper={child.alert_upper}
            alert_lower={child.alert_lower}
            tooltip={children.tooltip}

          />
        ))
      }
    </div>
  );
}

export default Worksheet;