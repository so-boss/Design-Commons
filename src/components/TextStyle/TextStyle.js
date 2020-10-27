import React from 'react';
import { ArrowRight } from '@so.boss/genesis-icon-library';
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

const Style = ({name, size, lineHeight, weight, family, text}) => {
  return (
    <div font="textstyle" id={family+"_"+name.short}>
      <div textstyle="label">
        <span suffix={name.short}>{name.long.replace(/-/g," ")}</span>
      </div>
      <div textstyle="props">
        <div>
          <label alt="font size">
            <FontSizeIcon />
          </label>
          <span suffix="px">{parseInt(size)}</span>
        </div>
        <div>
          <label alt="line height">
            <LineHeightIcon />
          </label>
          <span suffix="px">{parseInt(lineHeight)}</span>
        </div>
        <div>
          <label alt="weight">
            <WeightScaleIcon />
          </label>
          <span style={{fontWeight: weight}}>{weight}</span>
        </div>
      </div>
      <div font="preview" style={{fontFamily: family}}>
        <div>{text}</div>
      </div>
    </div>
  );
}
const Styles = ({textstyles}) => {

  return (
    <div>
      {
        textstyles.reverse().map((textstyle) => (
          <Style
            name={textstyle.name}
            family={textstyle.family}
            style={textstyle.style_name}
            size={textstyle.size}
            weight={textstyle.weight}
            lineHeight={textstyle.lineHeight}
          />
        ))
      }
    </div>
  )
}

export default function TextStyle ({textstyles}) {

  return (
    <Styles textstyles={textstyles} />
  );
}
