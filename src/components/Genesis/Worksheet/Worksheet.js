import React, { useState, useRef, useContext } from 'react';
import { Paper, Divider, Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles } from '@material-ui/core/styles';
const _ = require('lodash');

import { Dropdown, Popup, Header } from 'semantic-ui-react'
import {model, CoverageContext} from "./../contexts/CoverageContext";

import {CoverageContextManager, CoverageContextManagerProvider} from "./../contexts/CoverageContextManager"
import {WorksheetContext, WorksheetContextProvider} from "./../contexts/WorksheetContext"

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
  // maxLimits, property_choice
  scenario: {},
  getScenario: function() {
    const thix = this;
      function sync(type) {
        let limit, selection;

        $("body").data("scenario", $.extend(true,
          {},
          $("body").data("scenario")[type],
          $("body").data("limits")[type])
        );

      };
      const typesToSync = [
        "bodily_injury",
        "property_damage",
        "uninsured_bodily",
        "underinsured_bodily",
        "uninsured_property"
      ]

    _.each(typesToSync, function(type) {
      if(!$("body").data("scenario")[type]) {
        const newScenario = $("body").data("scenario");
        newScenario[type] = {};

        $("body").data("scenario", $.extend( $("body").data("scenario"), newScenario));
      }

      sync(type);
    })
  }
});

function limitChanged(value) {
  let selectedValue = value;
  let label;
  if (!selectedValue || selectedValue.length < 1) {
    selectedValue = [];
    label = "";
  } else if (selectedValue[1]) {
    label = format(selectedValue[0]) + "<span>person</span> <b></b>" + format(selectedValue[1]) + "<span>incident</span>";
  } else {
    label = format(selectedValue[0]) + "<span>incident</span>";
  }

  return {
    selectedValue: selectedValue,
    formattedLimit: label
  }
}

const LimitSelector = ({id, type, initialLimit, limitSelectorType, indicatorMethod, tooltip, limited_by, setMaxLimit}) => {
  const state = useContext(CoverageContextManager);
  const worksheet_state = useContext(WorksheetContext);

  const [updated, setUpdated] = React.useState("");
  const dropdown = useRef(null);

  function limitChanged(value) {
    let selectedValue = value;
    let label;
    if (!selectedValue || selectedValue.length < 1) {
      selectedValue = [];
      label = "";
    } else if (selectedValue[1]) {
      label = format(selectedValue[0]) + "<span>person</span> <b></b>" + format(selectedValue[1]) + "<span>incident</span>";
    } else {
      label = format(selectedValue[0]) + "<span>incident</span>";
    }

    return {
      selectedValue: selectedValue,
      formattedLimit: label
    }
  }

  function format(num, max) {
    return "$"+num+"K";
  }

  /*
    handleClick("bodily_injury", [25, 50],
      id > bodily_injury
  */
  function handleClick(type, item, e) {
    const x = limitChanged(item);

    let $item, $dropdown;
    if(e.target) {
      $item = $(e.target);
      $dropdown = $item.closest(".dropdown");
    } else {
      $item = $(e.current);
      $dropdown = $item;
    }

    if($item.is("[active=true]")) {
      return false;
    }

    $item
      .attr("active", true)
      .siblings().removeAttr("active");

    $dropdown.siblings("[label=selectedLimit]").html(x.formattedLimit);

    var options = {
      type:id,
      selection: x.selectedValue,
    }
    state.setSelection(options)

    let theChange = {...worksheet_state};
    theChange[id] = options;
    worksheet_state.setSectionChange(theChange)

    setMaxLimit(worksheet_state[limited_by].selection);


    let $matchingItem = $dropdown.children(".menu").find("[limits='"+item.toString()+"']");
    if($matchingItem.length>0) {
      $matchingItem.attr("active", true);

      console.log("MATHCING ITEMS", $matchingItem)
    }
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
        onClick={(e) => handleClick(id, item, e)}
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
    let limitValues =  worksheet_state[limited_by].selection || worksheet_state[limited_by];

    let max = limitValues[0];
    if(limitValues[1]) {
      max=limitValues[1];
    }
    if(id=="bodily_injury") {
      max=1000
    }

    const items = filterLimits(limits[type], max)
    if(callback) {
      return callback.apply($("body"), [items[which]]);
    }
    return items[which]
  }

  const DropdownSelectionLabel = ({dropdown, html}) => {
    return (
      <div
        label="selectedLimit"
        dangerouslySetInnerHTML={html}
      />
    )
  }

  function getSelectedLimit(el) {
    let limit_to_return;

    let limited_by_selected_value = worksheet_state[limited_by].selection || worksheet_state[limited_by];
    if(limited_by_selected_value) {
      let limited_by_selected_value_max = _.last(limited_by_selected_value);

      let current_selected_value =  worksheet_state[id].selection || worksheet_state[id];
      let current_selected_value_max = _.last(current_selected_value);

      limit_to_return = current_selected_value;
      //IF the current value is greater than the new Maximum
      if(current_selected_value_max > limited_by_selected_value_max) {
        // THEN we need to select a lower value > ie use the new max
        
        if(current_selected_value[1]) {
          limit_to_return = limited_by_selected_value
        } else {
          limit_to_return = [limited_by_selected_value[1] || limited_by_selected_value[0]];
        }

        // Now emulate a click to make sure the modified selection is registered
        //  "bodily_injury", [25, 50],
        handleClick(id, limit_to_return, el)
      }
    }

    const limit_got_formatted = limitChanged(limit_to_return);

    return limit_got_formatted.formattedLimit;
  }

  return (
    <div dropdown="container">
      <Dropdown
        id={id}
        ref={dropdown}
        text="limits"
        labeled
        floating
        button
      >
        <Dropdown.Menu updated={updated}>
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
      <DropdownSelectionLabel
        dropdown={dropdown}
        html={{__html: getSelectedLimit(dropdown)}}
      />
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

const Section = ({id, title, summary, description, showMore, showLess, indicatorMethod, limited_by, description_expanded, alert_upper, alert_lower, tooltip, initialLimit, limitSelectorType}) => {
  const state = useContext(CoverageContextManager)
  const worksheet_state = useContext(WorksheetContext);

  const [expanded, setExpanded] = useState(description_expanded);
  const [selection, setSelectionState] = useState([100,300]);
  const [maxLimit, setMaxLimit] = useState(worksheet_state[limited_by].selection);

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
        {showMore}
      </Button>
    )
  }
  function ShowLess() {
    return (
      <Button
        startIcon={<RemoveCircleIcon />}
        onClick={() => setExpanded("false")}
      >
        {showLess}
      </Button>
    )
  }

  const init = {
    type: id,
    selection: initialLimit,
    max: initialLimit,
    recent_change: null
  }

  //$("body").data("$els").sections[id] = {};
  return (
    <CoverageContextManagerProvider value={init}>
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
              limited_by={limited_by}
              max_limit={maxLimit}
              type={limitSelectorType}
              indicatorMethod={indicatorMethod}
              tooltip={tooltip}
              limitSelectorType={limitSelectorType}
              setMaxLimit={setMaxLimit}
              setSelection={() => model.setSelection(id, selection, setSelectionState)}
              getScenario={() => model.getScenario(id)}
              handleChange={(e) => handleChange(id, item, e)}
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
    </CoverageContextManagerProvider>
  )
};

const Worksheet = ({indicatorMethod, showMore, showLess, initialSelections, children}) => {
  const classes = useStyles();

  const init = {
    ...initialSelections,
    changes: [],
  }

  return (
    <WorksheetContextProvider value={init}>
      <div worksheet="container" className={classes.root}>
        {
          children.map(child => (
            <Section
              key={child.id}
              id={child.id}
              title={child.title}
              summary={child.summary}
              showMore={showMore || "Show More"}
              showLess={showLess || "Show Less"}
              indicatorMethod={indicatorMethod}
              initialLimit={child.initialLimit}
              limited_by={child.limited.by}
              limitSelectorType={child.limitSelectorType}
              description_expanded={child.description_expanded}
              description={child.description}
              alert_upper={child.alert_upper}
              alert_lower={child.alert_lower}
              tooltip={child.tooltip}
              getScenario={model.getScenario}
            />
          ))
        }
      </div>
    </WorksheetContextProvider>
  );
}

export default Worksheet;