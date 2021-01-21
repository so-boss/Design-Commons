import React, { useState } from 'react'

export const WorksheetContext = React.createContext({
  bodily_injury: null,
  property_damage: null,
  uninsured_bodily: null,
  underinsured_bodily: null,
  uninsured_property: null,
  changes: [],
  setSectionChange: () => {}
})

export const WorksheetContextProvider = (props) => {
  const setSectionChange = (sectionChange) => {
    setState({...state, ...sectionChange})
  }

  const {bodily_injury, property_damage, uninsured_bodily, underinsured_bodily, uninsured_property, changes } = props.value;

  const initState = {
    bodily_injury: bodily_injury,
    property_damage: property_damage,
    uninsured_bodily: uninsured_bodily,
    underinsured_bodily: underinsured_bodily,
    uninsured_property: uninsured_property,
    changes: changes,
    setSectionChange: setSectionChange
  }

  const [state, setState] = useState(initState)

  return (
    <WorksheetContext.Provider value={state}>
      {props.children}
    </WorksheetContext.Provider>
  )
}