import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import './Section.scss';
import {CoverageContextManager, CoverageContextManagerProvider} from "../contexts/CoverageContextManager";
import {WorksheetContext} from "../contexts/WorksheetContext";
import {Button, Divider, Paper} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import InfoIcon from "@material-ui/icons/Info";

import OptionPicker from "../OptionPicker/OptionPicker";
import Message from "../Message/Message";
import InfoExpander from "../InfoExpander/InfoExpander"
import limits from "../dictionaries/limits";

const Section = ({id, title, summary, description, showMore, showLess, indicatorMethod, limited_by, description_expanded, alert_upper, alert_lower, tooltip, initialLimit, limitSelectorType}) => {
  const state = useContext(CoverageContextManager)
  const worksheet_state = useContext(WorksheetContext);

  const [expanded, setExpanded] = useState(description_expanded);
  const [selection, setSelectionState] = useState([100,300]);
  const [maxLimit, setMaxLimit] = useState(worksheet_state[limited_by].selection);

  const init = {
    type: id,
    selection: initialLimit,
    max: initialLimit,
    selection_index: initialLimit,
    recent_change: null
  }

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
              <OptionPicker
                id={id}
                initialLimit={limits[limitSelectorType][initialLimit]}
                initialSelectionIndex={initialLimit}
                limited_by={limited_by}
                max_limit={maxLimit}
                type={limitSelectorType}
                indicatorMethod={indicatorMethod}
                tooltip={tooltip}
                limitSelectorType={limitSelectorType}
                setMaxLimit={setMaxLimit}
              />
            </div>

            {alert_upper &&
            <Message
              message={alert_upper}
              data={{
                max:maxLimit,
                type:limitSelectorType
              }}
            />
            }
            <Divider />
          </div>
          <div section="body">
            <InfoExpander
              expanded={expanded}
              setExpanded={setExpanded}
              labels={[showMore, showLess]}
            >
              {description}
            </InfoExpander>
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


Section.propTypes = {};

Section.defaultProps = {};

export default Section;
