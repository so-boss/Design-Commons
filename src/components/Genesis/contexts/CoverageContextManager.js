import React, { useState } from 'react'

export const CoverageContextManager = React.createContext({
  type: null,
  selection: null,
  max: null,
  recent_change: null,
  setSelection: () => {}
})

export const CoverageContextManagerProvider = (props) => {

  const setSelection = (selection) => {
    setState({...state, ...selection})
  }

  const {type, selection, max, recent_change} = props.value;

  const initState = {
    type: type,
    selection: selection,
    max: max,
    recent_change: recent_change,
    setSelection: setSelection
  }

  const [state, setState] = useState(initState)

  return (
    <CoverageContextManager.Provider value={state}>
      {props.children}
    </CoverageContextManager.Provider>
  )
}