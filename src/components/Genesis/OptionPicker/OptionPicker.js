import React, {useContext, useRef} from 'react';
import PropTypes from 'prop-types';
import './OptionPicker.scss';
import {CoverageContextManager, CoverageContextManagerProvider} from "./../contexts/CoverageContextManager"
import {WorksheetContext} from "../contexts/WorksheetContext";
import {Dropdown, Popup} from "semantic-ui-react";
import Item from "../Item/Item";

import limits from "../dictionaries/limits";

// findLimitIndex("bodily", [100,300])
function findLimitIndex(type, limit) {
  return _.findIndex(limits[type], function(a) {
    return (a[0]+(a[1] | 0)) == (limit[0]+(limit[1] | 0));
  });
}

const OptionPicker = ({id, type, indicatorMethod, tooltip, limited_by, setMaxLimit, initialSelectionIndex, limitSelectorType}) => {
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

    // TODO: Add method to cancel event before much happens if already active

    var options = {
      type:id,
      selection: x.selectedValue,
      selection_index: findLimitIndex(limitSelectorType, item)
    }
    state.setSelection(options)

    let theChange = {...worksheet_state};
    theChange[id] = options;
    worksheet_state.setSectionChange(theChange)

    setMaxLimit(worksheet_state[limited_by].selection);
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

  const EnabledItems = ({items}) => {
    const listItems = items.map((item, index) => {
      return (<EnabledItem item={item} index={index}/>)
    });

    return listItems;
  }
  const EnabledItem = ({item, index}) => (
    <Dropdown.Item
      onClick={(e) => handleClick(id, item, e)}
      limits={item.join(",")}
      value={item.join(",")}
      active={(state.selection_index==index) ? true : false}
      index={index}
      item="dropdown"
      className="notitem"
    >
      <Item type="dropdown">{item}</Item>
    </Dropdown.Item>
  )

  const DisabledItems = ({items}) => {
    const listItems = items.map((item, index) => {
      return (<DisabledItem index={10+index} limit={item} />);
    });

    return listItems;
  }
  const DisabledItem = ({limit, index}) => (
    <Item index={index}>{limit}</Item>
  )

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
      return callback(items[which]);
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


OptionPicker.propTypes = {};

OptionPicker.defaultProps = {};

export default OptionPicker;
