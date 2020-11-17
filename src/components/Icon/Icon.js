import React, {useContext} from "react";
import InspectorContext from './../../../src/contexts/InspectorContext';
import InspectableContext from "./../../../src/contexts/InspectableContext";
import MapsContext from "./../../../src/contexts/MapsContext";
import * as icons from "@so.boss/genesis-icon-library";

import "./Icon.scss"

const buildIcon = (icon) => {
  return React.createElement(icon);
}

export default function Icon ({figma_id, index}) {
  const [isActive, setActive] = React.useState(false);
  const {isOpen, onOpenInspector, onCloseInspector} = useContext(InspectorContext);
  const {selectedItem, onSelection} = useContext(InspectableContext);
  const maps = useContext(MapsContext).icon;

  const byFigmaId = maps.figma_id;

  let className = "activefalse";
  if(selectedItem.index===index) {
    className = "activetrue";
  }

  const handleIconActivation = () => {
    setActive(!isActive)
    onOpenInspector();
    onSelection({
      id:figma_id,
      type:"icon",
      index:index
    });
  };
  const handleIconDeactivation = () => {
    setActive(false)
    onCloseInspector();
    onSelection({
      id:null,
      type:null,
      index:null
    });
  };

  return (
    <li>
      <div
        className={className}
        onClick={() => {
          if(selectedItem.index===index) {
            return handleIconDeactivation()
          }

          return handleIconActivation();
        }}
      >
        <div>
          {buildIcon(icons[figma_id])}
        </div>
        <span>
          {byFigmaId[figma_id].name}
        </span>
      </div>
    </li>
  )
}
