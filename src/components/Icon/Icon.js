import React, {useContext} from "react";
import InspectorContext from './../../../src/contexts/InspectorContext';
import IconContext from "./../../../src/contexts/IconContext";
import MapsContext from "./../../../src/contexts/MapsContext";
import * as icons from "@so.boss/genesis-icon-library";

import "./Icon.scss"

const buildIcon = (icon) => {
  return React.createElement(icon);
}

export default function Icon ({figma_id, index}) {
  const [isActive, setActive] = React.useState(false);
  const {isOpen, onOpenInspector, onCloseInspector} = useContext(InspectorContext);
  const {selectedIcon, onSelection} = useContext(IconContext);
  const maps = useContext(MapsContext).icon;

  const byFigmaId = maps.figma_id;

  // const icons = icon_map;
  //active={this.state.activeIndex === index}

  let className = "activefalse";
  if(selectedIcon.index===index) {
    className = "activetrue";
  }

  const handleIconActivation = () => {
    setActive(!isActive)
    onOpenInspector();
    onSelection({
      selectedIcon:figma_id,
      index:index
    });
  };
  const handleIconDeactivation = () => {
    setActive(false)
    onCloseInspector();
    onSelection({
      selectedIcon:null,
      index:null
    });
  };

  return (
    <li>
      <div
        className={className}
        onClick={() => {
          if(selectedIcon.index===index) {
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
