import React, {useContext} from "react";
import InspectorContext from './../../../src/contexts/InspectorContext';
import IconContext from "./../../../src/contexts/IconContext";
import MapsContext from "./../../../src/contexts/MapsContext";
import * as icons from "@so.boss/genesis-icon-library";

import "./Icon.scss"

const buildIcon = (icon) => {
  return React.createElement(icon);
}

export default function Icon ({figma_id}) {
  const [isActive, setActive] = React.useState(false);
  const {isOpen, onOpenInspector, onCloseInspector} = useContext(InspectorContext);
  const {selectedIcon, onSelection} = useContext(IconContext);
  const maps = useContext(MapsContext).icon;

  const byFigmaId = maps.figma_id;

  // const icons = icon_map;
  return (
    <div
      className={"active"+isActive}
      onClick={() => {
        setActive(!isActive)
        onOpenInspector();
        onSelection({
          selectedIcon:figma_id
        });
      }}
    >
      <div>
        {buildIcon(icons[figma_id])}
      </div>
      <span>
        {byFigmaId[figma_id].name}
      </span>
    </div>
  )
}
