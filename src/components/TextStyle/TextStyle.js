import React, {useContext, useState} from 'react';
import InspectorContext from './../../../src/contexts/InspectorContext';
import InspectableContext from "./../../../src/contexts/InspectableContext";
import MapsContext from "./../../../src/contexts/MapsContext";
import './TextStyle.scss';

function LineHeightIcon(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || "line height";

  return (
    <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill={secondaryfill}>
        <polyline fill="none" stroke={fill} points="7.5 4.5 7.5 2.5 15.5 2.5 15.5 4.5" strokeLinecap="round"/>
        <line fill={fill} stroke={fill} strokeLinecap="round" x1="11.5" x2="11.5" y1="2.5" y2="10.5"/>
        <line fill={fill} stroke={fill} strokeLinecap="round" x1="9.5" x2="13.5" y1="10.5" y2="10.5"/>
        <line fill={fill} stroke={fill} strokeLinecap="round" x1="7.5" x2="15.5" y1="13.5" y2="13.5"/>
        <polyline stroke={fill} points="0.5 2.5 2.5 0.5 4.5 2.5" strokeLinecap="round"/>
        <polyline stroke={fill} points="0.5 13.5 2.5 15.5 4.5 13.5" strokeLinecap="round"/>
        <line stroke={fill} strokeLinecap="round" x1="2.5" x2="2.5" y1="0.5" y2="15.5"/>
      </g>
    </svg>
  );
};

function FontSizeIcon(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || "edit 2";

  return (
    <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1">
        <polyline fill="none" points="1.5 2.5 1.5 0.5 15.5 0.5 15.5 2.5" stroke={fill} strokeLinecap="round"/>
        <line fill="none" stroke={fill} strokeLinecap="round" x1="8.5" x2="8.5" y1="0.5" y2="15.5"/>
        <line fill="none" stroke={fill} strokeLinecap="round" x1="5.5" x2="11.5" y1="15.5" y2="15.5"/>
      </g>
    </svg>
  );
};

function WeightScaleIcon(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || "weight scale";

  return (
    <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1">
        <rect height="15" width="15" fill="none" rx="1" ry="1" stroke={fill} strokeLinecap="round" x="0.5" y="0.5"/>
        <path d="M13.475,8.5a5.5,5.5,0,0,0-10.95,0Z" fill="none" strokeLinecap="round"/>
        <line fill="none" strokeLinecap="round" x1="7.5" x2="9.5" y1="8.5" y2="5.5"/>
      </g>
    </svg>
  );
};

const Style = ({name, size, lineHeight, weight, family, text, figma_id, index}) => {
  const [isActive, setActive] = React.useState(false);
  const {isOpen, onOpenInspector, onCloseInspector} = useContext(InspectorContext);
  const {selectedItem, onSelection} = useContext(InspectableContext);
  const maps = useContext(MapsContext).icon;

  const byFigmaId = maps.figma_id;

  let className = "activefalse";
  if(selectedItem.index===index) {
    className = "activetrue";
  }

  const handleTextActivation = () => {
    setActive(!isActive)
    onOpenInspector();
    onSelection({
      id:figma_id,
      type:"typography",
      index:index
    });
  };
  const handleTextDeactivation = () => {
    setActive(false)
    onCloseInspector();
    onSelection({
      id:null,
      type:null,
      index:null
    });
  };


  return (
    <div
      font="textstyle"
      id={family.replace(" ", "")+"_"+name.short}
      className={className}
      onClick={() => {
        if(selectedItem.index===index) {
          return handleTextDeactivation()
        }

        return handleTextActivation();
      }}
    >
      <div textstyle="label">
        <span suffix={name.short}>{name.short}</span>
      </div>

      <div font="preview"
           style={{
             fontFamily: family,
             lineHeight:lineHeight,
             fontWeight:weight,
             fontSize:size
           }}>
        <div>Select vehicles to put on your policy.</div>
      </div>
    </div>
  );
}

const getStyle = (maps, figma_id) => {
  return maps.by.figma_id[figma_id];
}

// TODO: Redo so we arn't calling getStyle 100 times
const Styles = ({family, maps, textstyles}) => {
  return (
    <div>
      {
        textstyles.reverse().map((textstyle, index) => (
          <Style
            index={index}
            figma_id={textstyle}
            key={getStyle(maps, textstyle).token}
            name={getStyle(maps, textstyle).name}
            family={getStyle(maps, textstyle).family}
            style={getStyle(maps, textstyle).style_name}
            size={getStyle(maps, textstyle).size}
            weight={getStyle(maps, textstyle).weight}
            lineHeight={getStyle(maps, textstyle).lineHeight}
          />
        ))
      }
    </div>
  )
}

export default function TextStyle ({family, maps}) {
  // const [isActive, setActive] = React.useState(false);
  // const {isOpen, onOpenInspector, onCloseInspector} = useContext(InspectorContext);
  // const maps_ctx = useContext(MapsContext).typography;

  const textstyles = maps.Definition.by.fontFamily[family];
  return (
    <Styles textstyles={textstyles} maps={maps}/>
  );
}
