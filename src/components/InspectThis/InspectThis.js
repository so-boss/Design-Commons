import React, {useContext} from "react";
import InspectorContext from './../../../src/contexts/InspectorContext';
//import './InspectThis.scss';

export default function InspectThis ({children}) {
  const[inspectMode, setInspectMode] = useContext(InspectorContext);


  return(
    <div onClick = {() => {setInspectMode(inspectMode === "light"? "dark": "light")}}>
      <span title = "switch theme">
        {inspectMode === "light" ? "🌙" : "☀️"}
        {children}
      </span>
    </div>
  );
}
