import React, { useState, useRef, useContext } from 'react';
import { Paper, Divider, Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles } from '@material-ui/core/styles';

import Amount from '../Amount/Amount.js'
import Item from '../Item/Item.js'
import Section from '../Section/Section.js'

const _ = require('lodash');

import { Dropdown, Popup } from 'semantic-ui-react'

import {CoverageContextManager, CoverageContextManagerProvider} from "./../contexts/CoverageContextManager"
import {WorksheetContext, WorksheetContextProvider} from "./../contexts/WorksheetContext"
import limits from "../dictionaries/limits";

import 'semantic-ui-css/semantic.min.css'

import './../../../../src/css/custom.scss';
import './Worksheet.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(120),
      padding: theme.spacing(5)
    },
  },
}));

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
            />
          ))
        }
      </div>
    </WorksheetContextProvider>
  );
}

export default Worksheet;