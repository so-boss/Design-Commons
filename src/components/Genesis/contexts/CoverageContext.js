import React, { useState, useRef, useContext } from 'react';

export var model = {
  coverage:{
    types:[
      "bodily_injury",
      "property_damage",
      "uninsured_bodily",
      "underinsured_bodily",
      "uninsured_property"
    ]
  },
  scenario: {
    /*
      bodily_injury: {
        limit:[100,300],
        selection:[50,100],
        adjusted:null
      }
     */
  },
  initScenario: function(type, selection) {
    //const [selection, setSelection] = useState([100,300]);

    model.scenario[type] = {
      limit:null,
      selection:selection,
      setSelection: () => {},
      adjusted:null
    };

    return model.scenario[type];
  },
  getScenario: function(type, selection) {
    //const model = this;

    // _.each(this.coverage.types, function(type) {
    //   if(!thix.scenario[type]) {
    //     thix.initScenario(type);
    //   }
    // })
      if(!model.scenario[type]) {
        model.initScenario(type, selection);
      }

    console.log(model)
    return model.scenario[type];
  },
  setSelection: function({type, selection, setter}) {
    if (!type) {
      return {};
    }
    console.log("REMOTE setSelection TYPE", type)

    if(!model.scenario[type]) {
      model.initScenario(type, selection);
    }

    model.scenario[type].setSelection(selection);
    if(setter) {
      return console.log(setter(selection))
    }


    return model.scenario[type];
  }
};

export const CoverageContext = React.createContext(model);
